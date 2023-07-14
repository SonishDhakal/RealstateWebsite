import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../Utils/Context/UserContext'
import ListingsCard from '../../Components/ListingsCard'

import { collection, limit, query,orderBy,getDocs } from 'firebase/firestore'
import { auth, db } from '../../Utils/Firebase/Firebase'
import Loader from '../../Components/Loader'

const Listings = ({type,title,editandDelete, finalData}) => {
    const [userListings,setUserListings] = useState()
    const {getListing,renderDom,  dataloading} = useUserContext()
    async function getData(key,op,value){
       const data = await getListing(key,op,value);
       const item =[]
       data.forEach((i) => {
        item.push({
            id:i.id,
            data : i.data()

        })

    

       })

       setUserListings(item)
     
        
    }

    async function getHeaderData(){
   
      const q = query(collection(db, "products"),orderBy('timestamp','desc'),limit(6))
      const querySnap = await getDocs(q);
      let items =[]
     querySnap.forEach(item => items.push({
      id:item.id,
      data:item.data()
     }))
     setUserListings(items)
      }



      // async function getOffers(){
      //   const q = query(collection(db, "products"),orderBy('timestamp'),limit(6))

      // }


    


















     

    useEffect(() =>{
      if(type==='Home'){
getHeaderData()
      }
      else if(type==='Profile'){
        console.log('invoked')
        
        getData("userRef", "==", auth.currentUser.uid);
      }
      else if(type==='Offer'){
       getData("offer", "==", true)
      }
      else if(type==='sell'){
        getData("typeoff", "==", 'sell')

      }
      else if(type==='rent'){
        getData("typeoff", "==", 'rent')
      }
      else{
        setUserListings(finalData)
        console.log(finalData)
       
      }
      

       
    },[type,renderDom])
  return (
    <div className='flex flex-col gap-8 py-4'>
       <h2 className='text-center text-lg font-semibold '>{title && title}</h2>
      {dataloading ? <Loader /> :
        <div className='grid md:grid-cols-3 gap-8 sm:grid-cols-2'>
        {userListings?.map(item => (
          <ListingsCard editandDelete={editandDelete}  data={type=='undefined' ? item : item.data} id={item.id} key={item.id} title={title}/>
        ))}
     </div>}
    </div>
  )
}

export default Listings