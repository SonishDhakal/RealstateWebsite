import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Utils/Context/AuthContext'
import { useUserContext } from '../../Utils/Context/UserContext'
import { RiUpload2Line } from 'react-icons/ri'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../Utils/Firebase/Firebase'
import Loader from '../../Components/Loader'
const UserInfo = () => {
    const {currentUser} = useAuth()
    const {getProfileData,updateProfileData,dataloading,setDataLoading,renderDom} = useUserContext()
    const [userData,setUserData] = useState(false)
    const [editMode,seteditMode] = useState()


   async function handelEdit(){
        const data =  await getProfileData(currentUser.uid)
        if(data.Adress !== userData.Adress || data.name !== userData.name ||
             data.email !==userData.email || data.number !== userData.number
             || data.country !== userData.country){
               await updateProfileData(currentUser.uid, userData)

             }



   
        

    }

    function handelChange(e){
        setUserData({...userData,[e.target.name]:e.target.value })
    }

    async function setImage(e){
        console.log(`${e.target.files[0].name}-${uuid()}`)
        const storageRef = ref(storage,`user/${e.target.files[0].name}-${uuid()}` );
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
        uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setUserData({...userData, image:downloadURL}
        
        
        )

        const newData = {...userData, image:downloadURL}

        updateProfileData(currentUser.uid,newData)
    });
  }
);
    }

    useEffect(() =>{
  
     async function fetchData(){
          const data =  await getProfileData(currentUser.uid)
          setUserData(data)
         
        }
      

        fetchData()

       

    },[renderDom])
  return (
   <div className='flex flex-col gap-12 py-10 sm:py-0  w-full '>
  {dataloading ? <Loader /> :<>
  <div className='flex gap-3 items-center ss:flex-row flex-col'>
        <div className='cursor-pointer group rounded-full w-[100px] h-[100px] relative Zmin transition-all'>
        <img className='rounded-full w-[100px] h-[100px]' src={`${userData?.image ? userData?.image :'https://miro.medium.com/v2/resize:fit:1160/1*esMv_WqyIUXMZMhErUihUg.jpeg'}`} alt="" />
      <div className=' transition-all hidden group-hover:grid cursor-pointer w-[100px] h-[100px] z-min absolute top-0 left-0 bg-black/[0.8] rounded-full  place-content-center'>
<RiUpload2Line className='text-primaryClr relative z-min text-3xl cursor-pointer' />
<input  accept=".jpg,.png,.jpeg" type="file" onChange={setImage} className='cursor-pointer opacity-0 z-min absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '  />
      </div>
      
        </div>
  
   <div>
    <h4>{userData?.name}</h4>
    <p className='text-textClr'>{userData?.Adress}</p>
    <p className='text-textClr text-sm'>Upload your Photo for better User Experience</p>
   </div>
 
  
    </div>
    <form className='flex flex-col gap-4'>
       <div className='grid  ss:grid-cols-2 w-full gap-7'>
       <div className='flex flex-col gap-1'>
            <label htmlFor="FullName">Full Name</label>
            <input onChange={handelChange} className='w-full border-black/[0.08] border outline-primaryClr px-3 py-3 bg-gray/[0.1]'  type="text" disabled={!editMode} name='name' value={userData?.name}/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input onChange={handelChange} className='w-full border-black/[0.08] border outline-primaryClr px-3 py-3 bg-gray/[0.1]'  type="email" disabled name='email' value={userData?.email}/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input onChange={handelChange}  className='w-full border-black/[0.08] border outline-primaryClr px-3 py-3 bg-gray/[0.1]' type="number" disabled={!editMode} name={'number'} value={userData?.number}/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="Adress"> Adress</label>
            <input onChange={handelChange} className='w-full border-black/[0.08] border outline-primaryClr px-3 py-3 bg-gray/[0.1]'  type="text" disabled={!editMode} name='Adress' value={userData?.Adress}/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="Country"> Country</label>
            <input onChange={handelChange} className='w-full border-black/[0.08] border outline-primaryClr px-3 py-3 bg-gray/[0.1]'  type="text" disabled={!editMode} name='country' value={userData?.country}/>
        </div>
       </div>
      <div className='flex justify-end'>
      <button onClick={() => {
        editMode && handelEdit()
        seteditMode(!editMode)

      }} type='button' className=' buttonComp secondary'>{editMode ? 'Save' :'Edit' }</button>
      </div>

    </form></> }
   </div>
  )
}

export default UserInfo