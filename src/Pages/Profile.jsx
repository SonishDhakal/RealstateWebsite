import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import UserInfo from './Profile/UserInfo'
import { Route, Routes } from 'react-router-dom'
import AddListings from '../Pages/Profile/AddListings'
import { useUserContext } from '../Utils/Context/UserContext'
import Listings from './Profile/Listings'
import EditListings from '../Pages/Profile/EditListings'
import WatchList from './Profile/WatchList'

const Profile = () => {
  const {setShowHeader} = useUserContext()
  useEffect(() => {
    setShowHeader(true)
    

  },[])

  const [showSidebar,setShowsideBar] = useState(true)


  function open(){
  setShowsideBar(true)
  }


  function close(){
    setShowsideBar(false)
  }
  return (
   <div className='bg-bodyClr w-full h-full flex gap-4'>
   <div className='h-[calc(100vh-80px)]'>
  <div className={`${showSidebar ? 'left-0' : 'left-[-170px]'} transition-all Zadv fixed top-[80px] shadow-xl  w-[240px]  h-[calc(100vh-80px)] bg-white`} >
  <Sidebar open={open} close={close} data={showSidebar}/>
  </div>
   </div>
   <div className='w-full containerBox h-full !mt-[80px]  !px-[5rem] xs:!px-0 py-4   md:!mx-[5rem] lg:!mx-auto xs:!mx-[5rem]'>
    <Routes>
      <Route path='/info' element={<UserInfo />}></Route>
      <Route path='/add' element ={<AddListings />} />
      <Route path='/listings' element ={<Listings type='Profile' title='My Propery Listings' editandDelete={true}/>} />
      <Route path='/edit/:id' element ={<EditListings/>} />
      <Route path='/watchlist' element ={<WatchList/>} />
    </Routes>
   </div>
   </div>
  )
}

export default Profile