import React from 'react'
import logo from '../assets/logo.png'
import PcNav from './Nav/PcNav'
import MobNav from './Nav/MobNav'
import { useUserContext } from '../Utils/Context/UserContext'

const Headers = () => {
  const {showHeader} = useUserContext()
  return showHeader && <div className='fixed top-0 left-0 h-[80px] shadow-md w-screen Zmid bg-white'>
  <nav className="containerBox flex justify-between items-center h-full w-screen">
  <div className='flex gap-4 items-center'>
    
    <img src={logo} alt="logo" />
    <h4>AQUITVE</h4>
  </div>
<div>
<PcNav></PcNav>
 <MobNav />
</div>

  </nav>
</div>
  
}

export default Headers