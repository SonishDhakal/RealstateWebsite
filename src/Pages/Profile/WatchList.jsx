import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../Utils/Context/UserContext'
import { auth } from '../../Utils/Firebase/Firebase'

import {RiDeleteBack2Fill, RiDeleteBinFill, RiEdit2Fill, RiMapPin2Line,RiRssFill,RiStarFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader'
const WatchList = () => {
    const {getProfileData,renderDom,deleteFromWatchList,dataloading} = useUserContext()
    const [userData,setUserData] = useState(false)
    const navigate = useNavigate()
    async function fetchData(){
        const data =  await getProfileData(auth.currentUser.uid)
        setUserData(data)
        
     
  

      }

    

    async function handelRemove(data){
        let item = userData.watchlist
       
        item = item?.filter(item => item.ProductId !== data.ProductId)
        setUserData({...data, watchlist:item})
        await deleteFromWatchList({...data, watchlist:item})
    }
    
    useEffect(() =>{
   
           fetchData()

   
       },[renderDom,])
  return dataloading ? <Loader /> :
  <div>
    {userData?.watchlist?.length===0 ? <p>No Property on your watchlist</p> :
    <div>
        <div>
            <h3 className='font-bold'>{userData?.name}'s Watchlist's</h3>
            <div className='flex flex-col gap-8 py-4'>
     
        <div className='grid md:grid-cols-3 gap-8 sm:grid-cols-2'>
           {userData.watchlist?.map(data => (
             <div key={data.ProductId}  className='cursor-pointer overflow-hidden rounded-xl group transition-all '>
             <div onClick={() => navigate(`/property/${data?.ProductId}`)} className='relative Zmin'>
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
                    <img src={data?.userImg} alt="" className='rounded-full w-[50px] h[50px]' />
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
                    <RiDeleteBinFill onClick={() => handelRemove(data)} />
                    
                 </div>
             </div>
         </div>
           ))}
        </div>
    </div>
        </div>

        </div>}

   </div>
}

export default WatchList