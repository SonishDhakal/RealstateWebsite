import React, { useEffect, useState } from 'react'
import { RiArrowRightFill, RiArrowRightLine, RiSearch2Line } from 'react-icons/ri'
import { db } from '../../Utils/Firebase/Firebase'
import { collection, limit, query,orderBy,getDocs } from 'firebase/firestore'
import heroBg from '../../assets/heroBg.png'
const Hero = () => {

    const [currentProperty,setCurrentProperty] = useState()
    useEffect(() => {
getHeaderData()
    },[])



   async function getHeaderData(){
   
    const q = query(collection(db, "products"),orderBy('timestamp'),limit(1))
    const querySnap = await getDocs(q);
   querySnap.forEach(item => setCurrentProperty(item.data()))
    }
  return (
   <div className='flex flex-col sm:flex-row gap-8 w-full sm:h-[calc(100vh-120px)] ss:w-[500px] ss:mx-auto sm:w-full sm:mr-auto'>
    <div className='flex-1 flex flex-col gap-10'>
       <h2 className=' font-semibold text-3xl font-titleFont leading-10'>Explore Your House Options
<br></br>in Nepal<br />
Like Few of Them?<br />
Book Your appointment’s Now!</h2>
<p className='text-textClr leading-7'><span className='text-primaryClr font-semibold'>Aquitive</span> is a great platform for house owners/buyers to explore thier options on house with negoitable price. we are trusted by thousands of agents and clients.</p>
    <div className='flex gap-3'>
        <div>
            <p>20k+</p>
            <span>House</span>
        </div>
        <div className='h-[50px] w-[2px] bg-primaryClr block'>

        </div>
        <div>
            <p>5k+</p>
            <span>Location</span>
        </div>
        <div className='h-[50px] w-[2px] bg-primaryClr block'>

</div>
        <div>
            <p>1k+</p>
            <span>Agents</span>
        </div>
    </div>
    <div>
        <button className='buttonComp secondary flex gap-4 items-center !py-4'>Explore Properties <RiArrowRightLine /></button>
    </div>
    
    </div>
    <div className='flex-1 h-full w-full !bg-center !bg-cover grid items-center' style={{background:`url(${heroBg})`}}>
    <div className='flex flex-col gap-10'>
    <div>
        <img src={currentProperty?.images[0]} alt="" className='w-[300px] h-[200px] rounded-lg' />
        <div className='bg-white p-4'>
            <h3 className='text-primaryClr font-medium'>{currentProperty?.productName}</h3>
            <span className='text-primaryClr'>${currentProperty?.price}</span>
        </div>
       </div>
       <div className='rounded-md border border-primaryClr px-2 py-2 items-center flex justify-between w-[300px]'>
        <input type="text" name="" id="" placeholder=' Search for a house' className='bg-transparent outline-none placeholder:text-primaryClr'/>
        <RiSearch2Line className='text-primaryClr cursor-pointer' />
       </div>
    </div>
    </div>
   </div>
  )
}

export default Hero