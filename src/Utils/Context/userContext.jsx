import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase/Firebase";
import { doc, getDoc, updateDoc,setDoc,serverTimestamp, collection, query, where, getDocs, deleteDoc, orderBy} from "firebase/firestore";
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from "../Firebase/Firebase";
import { toast } from "react-toastify";
const userContext = createContext();
export const useUserContext = () => useContext(userContext);

export default function UserContextProvider({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const [productImage,setProductImages] = useState([])
  const [dataloading,setDataLoading] = useState(false)
  const [renderDom,setRenderDom] = useState(false)

  async function getProfileData(userId) {
    setDataLoading(true)
   
    try{

      const docRef = doc(db, "Users", userId);
      const docSnap = await getDoc(docRef);
    
      setDataLoading(false)
      return docSnap.data();
      setRenderDom(true)

    }
    catch(e){
      setDataLoading(false)
     
    

    }
  
  }

  async function updateProfileData(userId, finalData,product) {

    setDataLoading(true)
  
    try{

      const docRef = doc(db, product ==undefined ? 'Users' : 'products', userId);
      await updateDoc(docRef, finalData);
      setRenderDom(!renderDom)
      toast.success(`${product==undefined ? 'Profile' :'Listings'} updated Successfully`)
    }
    catch(e){
      toast.error(e.message)
      setDataLoading(false)

    }
    setDataLoading(false)
  }

  async function AddListings(productInfo) {
    let userData = await getProfileData(auth.currentUser.uid)
  
    setDataLoading(true)
    try{
      await setDoc(doc(db, "products", `${auth.currentUser.uid}-${uuid()}`), {
        ...productInfo, userRef:auth.currentUser.uid, timestamp:serverTimestamp(),displayName:auth.currentUser.displayName,
        userImg: (userData.image ? userData.image : 'https://miro.medium.com/v2/resize:fit:1160/1*esMv_WqyIUXMZMhErUihUg.jpeg')
 
        });

        toast.success("Listings Added")
    }

    catch(e){
      setDataLoading(false)
      
    }
    setDataLoading(false)

  }



  async function uploadtobase(img){
    return new Promise((resolve, reject) => {

    
    
    const storageRef = ref(storage, `product/${img.name}-${uuid()}`);
    const uploadTask =uploadBytesResumable(storageRef, img);
    uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            reject(error);
          },
          () => {
            
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
                // setProductImages(prevstate => [...prevstate, downloadURL])
               
            });
          }
        );

        })


  }
  async function uploadImages(imgData) {
    setProductImages([]);   
    const imgUrls = await Promise.all(
        [...imgData].map(item => toast.promise(
          async () => uploadtobase(item),{
            
              pending: 'uploading image',
              success: 'Done ',
              error: 'Email Not Found'
            
          }
        ))
      ).catch((error) => {
  
        // toast.error("Images not uploaded");
        return;
      });

  return imgUrls
  
  

    
  }
 


  async function getListing(key,op,value){
    setDataLoading(true)
    const lsitingRef = collection(db, "products");
    const q = query(lsitingRef, where(key,op,value),orderBy("timestamp", "desc"));

    
    const querySnap = await getDocs(q);
  
    setDataLoading(false)
    return querySnap
  }



  async function deleteListing(id){
    try{
       deleteDoc(doc(db, "products", id));
       toast.success("Listing Deleted")
       
    }
    catch{
      toast.error("Cannot Delete The listings")
    }
  }


  async function getListingProperty(id){
    
    const lsitingRef = doc(db, "products",id);
    
    return await getDoc(lsitingRef);
  }


  async function addToWatchList(finalData){

    try{

      const docRef = doc(db, 'Users', auth.currentUser.uid);
      await updateDoc(docRef, finalData);
     
      toast.success(`Added To WatchList`)
    }
    catch(e){
      toast.error(e.message)
      

    }

  }


  async function deleteFromWatchList(finalData){
    try{

      const docRef = doc(db, 'Users', auth.currentUser.uid);
      await updateDoc(docRef, finalData);
     
      toast.success(`Removed from WatchList`)
    }
    catch(e){
      toast.error(e.message)
      

    }
  }









useEffect(() =>{

},[renderDom])



  return (
    <userContext.Provider
      value={{
        showHeader,
        setShowHeader,
        getProfileData,
        updateProfileData,
        AddListings,
        uploadImages,
        productImage,
        dataloading,
        setDataLoading,
        getListing,
        deleteListing,
        getListingProperty,
        renderDom,
        addToWatchList,
        deleteFromWatchList
      }}
    >
      {children}
    </userContext.Provider>
  );
}
