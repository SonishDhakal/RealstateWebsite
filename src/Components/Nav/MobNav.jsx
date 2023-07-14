import React, { useState } from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import {navLinks} from '../../Utils/Constant'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Utils/Context/AuthContext'
const MobNav = () => {
  
  const {currentUser} = useAuth()
    const [showNav,setShowNav] = useState(false)
  return (
    <div className='sm:hidden'>
        <div>
        <RiMenu3Line onClick={() => setShowNav(true)} className='text-xl cursor-pointer' />
        </div>
      <div className={`${showNav ? 'right-0' :'right-[-100%]'} transition-all  absolute h-screen w-screen bg-white top-0  grid place-content-center gap-8 Zmax`}>
            <RiCloseLine onClick={() => setShowNav(false)} className='text-3xl cursor-pointer absolute top-10 right-5' />
            <div>
                <ul className='flex flex-col gap-4 items-center'>
                {navLinks.map(links => (
                   <Link onClick={() => setShowNav(false)} to={links.path} key={links.name}> <li className='navListLink cursor-pointer capitalize' >{links.name}</li></Link>
                ))}
                </ul>
            </div>
            <div className='flex gap-4 flex-col'>
            {currentUser ? <Link to='/profile/info'><button className='buttonComp secondary'>Profile</button></Link> :<Link to='/login'><button className='buttonComp secondary'>Login</button></Link>}

        </div>


            </div>

    </div>
  )
}

export default MobNav