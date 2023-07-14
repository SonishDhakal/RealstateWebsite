import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useAuth } from '../Utils/Context/AuthContext';
import { useUserContext } from '../Utils/Context/UserContext';

const Forgot = () => {
  const {setShowHeader} = useUserContext()
  const [email,setEmail] = useState()
  const {resetPassword}  = useAuth()

  async function handelReset(e){
    e.preventDefault()
    
    await resetPassword(email)

  }

  useEffect(() =>{
    setShowHeader(false)
  },[])
  return (
 <div className='w-screen h-screen loginContainer grid place-content-center  '>
    <div className='w-[290px]  flex items-center xs:w-[400px] xs: md:w-[410px]  bg-white rounded-3xl px-6 py-6 gap-4 flex-col justify-center'>
        
        <h3 className='text-center font-bold text-xl '>Enter Your Email</h3>
      
    
       
           
           <input onChange={(e) => setEmail(e.target.value)}  className=' w-full px-2 py-2 border border-black/[0.1] rounded-lg outline-primaryClr'required type="text" placeholder='Email' name='email' />
           
            <div className='w-full'>
            <button onClick={handelReset} className='w-full border-transparent bg-primaryClr py-2 font-semibold uppercase text-white rounded-md'>Reset Password</button>
            </div>
            <Link to='/login' className='text-textClr flex justify-end w-full gap-2 items-center'><AiOutlineArrowLeft /> Back to login</Link>
            
     
       
        </div>
    </div>


  )
}

export default Forgot