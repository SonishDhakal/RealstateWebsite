import React from 'react'
import logo from '../../assets/logo.png'
import { follow, navLinks, otherLinks } from '../../Utils/Constant'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
       <div className='flex flex-col gap-3'>
       <div className='flex gap-4 items-center'>
    
    <img src={logo} alt="logo" />
    <h4>AQUITVE</h4>


  </div>
  <p>Aquitive is a great platform for house owners/buyers to explore thier options on house with negoitable price. we are trusted by thousands of agents and clients.</p>
       </div>
       <div className='grid md:grid-cols-3 xs:grid-cols-2 justify-between w-[90%] mx-auto gap-8'>
        <div className='flex flex-col '>
            <h4 className='font-medium mb-3'>Useful links</h4>
            <ul className='flex flex-col gap-2' >
            {navLinks.map((link,index) => (
             <li className=' capitalize' key={index}>  <Link to=''>{link.name}</Link></li>
            ))}
            </ul>
        </div>
        <div>
            <h4 className='font-medium mb-3'>Other Links</h4>
            <ul className='flex flex-col gap-2' >
            {otherLinks.map((link,index) => (
             <li key={index}>  <Link to=''>{link.name}</Link></li>
            ))}
            </ul>
        </div>
        <div >
            <h4 className='font-medium mb-3'>Follow us</h4>
            <ul className='flex flex-col gap-2'>
            {follow.map((link,index) => (
             <li key={index}>  <Link className='flex items-center gap-3' to=''>{link.img}{link.name}</Link></li>
            ))}
            </ul>
        </div>
       </div>
       <footer>
        <p className='text-primaryClr'>© Designed By Sonish Dhakal</p>
       </footer>
    </div>
  )
}

export default Footer