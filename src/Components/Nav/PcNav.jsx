import React from 'react'
import {navLinks} from '../../Utils/Constant'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../Utils/Context/AuthContext'
const PcNav = () => {
  const {pathname} = useLocation();
 
    const {currentUser} = useAuth()
  return (
    <div className='sm:flex hidden gap-12 items-center'>
        <div className=''>
            <ul className='flex gap-6'>
                {navLinks.map(links => (
                   <Link to={links.path} key={links.name}> <li className={`${links.path===pathname&& 'active'} navListLink cursor-pointer capitalize '`} >{links.name}</li></Link>
                ))}
            </ul>

        </div>
        <div className='flex gap-4'>
           {currentUser ? <Link to='/profile/info'><button className='buttonComp secondary'>Profile</button></Link> :<Link to='/login'><button className='buttonComp secondary'>Login</button></Link>}

        </div>

    </div>
  )
}

export default PcNav