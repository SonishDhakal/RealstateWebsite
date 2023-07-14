import React, { useEffect } from 'react'
import {RiDeleteBack2Fill, RiDeleteBinFill, RiEdit2Fill, RiMapPin2Line,RiRssFill,RiStarFill} from 'react-icons/ri'
import { useUserContext } from '../Utils/Context/UserContext'
import { useNavigate } from 'react-router-dom'

const ListingsCard = ({data,id,title,editandDelete}) => {
   
    
    const navigate = useNavigate()
    useEffect(() =>{

    },[data])
    const {deleteListing} = useUserContext()
   
  return (
    <div className='cursor-pointer overflow-hidden rounded-xl group transition-all '>
        <div  onClick={() => navigate(`/property/${id}`)}className='relative Zmin'>
            <img src={data?.images[0]} alt="" className='w-[300px] h-[200px] rounded-xl rotateonY  '/>
            <span className='bottom-4 bg-primaryClr  px-3 py-1 rounded-3xl  absolute flex gap-4 text-white text-sm left-2 items-center'><RiMapPin2Line /> <p className=' capitalize '> {data?.city}, {data?.country}</p></span>
        </div>
        <div className='p-3'>
            <h3 className='text-primaryClr'>{data?.productName}</h3>
            <span className='text-primaryClr'>
                ${data?.price}
            </span>
            <div className='flex justify-between items-center mt-4 mr-10'>
               <div className='flex items-center gap-3'>
               <img src={data?.userImg} alt="" className='rounded-full w-[50px] h-[50px]' />
                <div>
                    <h4 className='text-black font-medium'>{data?.displayName}</h4>
                    <div className='flex text-primaryClr text-md'>
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                </div>
               </div>
                {editandDelete&& <div className='  gap-4 hidden group-hover:flex transition-all'>
                    <RiDeleteBinFill onClick={() => deleteListing(id)} className='text-lg text-red-400' />
                    <RiEdit2Fill onClick={() => navigate(`/profile/edit/${id}`)} className='text-lg text-green-400' />
                </div>}
            </div>
        </div>
    </div>
  )
}

export default ListingsCard