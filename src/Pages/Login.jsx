import React, { useEffect, useState } from 'react'
import { FcGoogle} from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';
import {BiShowAlt,BiHide} from 'react-icons/bi'
import Loader from '../Components/Loader';
import { useUserContext } from '../Utils/Context/UserContext';
import { useAuth } from '../Utils/Context/AuthContext';
const Login = () => {

const location = useLocation()
console.log(location)
    
    const [showPassword,setShowPassword] = useState(false)
    const {login,loading,LogininWIthGoogle} = useAuth()
    const {setShowHeader} = useUserContext()
    useEffect(() =>{
        setShowHeader(false)
      },[])


    async function loginSubmit(e){
        e.preventDefault()
        const email = e.target[0].value;

        const password = e.target[1].value
     await login(email,password)
    }

  return (
 <div className='w-screen h-screen loginContainer grid place-content-center  '>
    <div className='w-[290px] h-[540px] flex items-center xs:w-[400px] xs:h-[540px] md:w-[410px] md:h-[540px] bg-white rounded-lg px-6 py-6'>
       {loading ? <Loader /> : <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 text-center mb-4'>
        <h3 className='text-center font-bold text-xl '>User Login</h3>
        <p className='  text-textClr text-center'>Enter Your Details to get back and start renting/selling or purchasing a house.</p>
        </div>
        <form onSubmit={loginSubmit} className='flex flex-col gap-6'>
           <div className='flex flex-col gap-4'>
           <input  className=' w-full px-2 py-2 border border-black/[0.1] rounded-lg outline-primaryClr'required type="text" placeholder='Email' name='email' />
            <div className='flex flex-col gap-4'>
           <div className='relative'>
           <input className=' w-full px-2 py-2 border border-black/[0.1] rounded-lg outline-primaryClr' required type={showPassword ? 'text' : 'password'} placeholder='Password' name='password' />
{showPassword ? <BiHide onClick={() => setShowPassword(false)}   className='cursor-pointer absolute top-[50%] translate-y-[-50%] right-2'/> :
  <BiShowAlt  onClick={() => setShowPassword(true)}   className='cursor-pointer absolute top-[50%] translate-y-[-50%] right-2'/>}
           </div>
            <Link to='/forgot' className=' text-textClr'>Having Trouble in Signin?</Link>
            </div>
           </div>
            <div>
            <button className='w-full border-transparent bg-primaryClr py-2 font-semibold uppercase text-white rounded-md'>Sign in</button>
            </div>
            
        </form>
        <p className='flex gap-2 items-center justify-center after:bg-black/[0.1] after:w-[20px] md:after:w-[60px]  after:h-[1px] after:block before:bg-black/[0.1] before:w-[20px] md:before:w-[60px] before:h-[1px] before:block'>Or Sign in With</p>
        <div>
            <button onClick={LogininWIthGoogle}  className='flex justify-center items-center gap-3 rounded-md w-full text-center bg-tempWhite py-2 '><FcGoogle />  Signin With Googgle</button>
        </div>
        <span className='text-center  text-textClr'>Don't have an Accouont? <Link to='/signup'>Signup</Link></span>
        </div>}
    </div>

 </div>
  )
}

export default Login