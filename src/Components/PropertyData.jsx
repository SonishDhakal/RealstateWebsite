import React, { useEffect, useState } from 'react'
import {BiBed,BiBath,BiSolidCar} from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { useUserContext } from '../Utils/Context/UserContext'
import { toast } from 'react-toastify'
import { auth } from '../Utils/Firebase/Firebase'

const PropertyData = ({property}) => {
 
    const {getProfileData,addToWatchList} = useUserContext()
    const [data,setData] = useState()
    const [email,setEmail] = useState()
        const {id} = useParams()

    useEffect(() =>{
        async function fethc(){
            const dataF = await getProfileData(property?.userRef)

            setEmail(dataF?.email)
        }

        async function fetchCurrentUser(){
            const dataF = await getProfileData(auth?.currentUser?.uid)

            setData(dataF)
        }

        fetchCurrentUser()

        fethc()

    },[id])

   async function add(){
    
    const newProp = {...property, ProductId:id}


    if(data?.watchlist.length===0){
        setData({...data, watchlist:[newProp]})
        await addToWatchList({...data, watchlist:[newProp]})
       
    }
    else{
        let item = data?.watchlist
        
let s=0;
        item.map(i =>{
            if(i.ProductId===id){
                s =s+1
            }
            
        })

        if(s>0){
            toast.error('Property Already in Wishlist')
        }
        else{
            item.push(newProp)
        setData({...data, watchlist:item})
        await addToWatchList({...data, watchlist:item})

        setData({...data, watchlist:[data.watchlist, property]})

        }
       
        




       
        
    }
  

     


//    await addToWatchList(newData)

   }
  return (
    <div className='flex-1 flex flex-col gap-5 bg-black/[0.04] px-3 py-3 rounded-md'>
        <p>More Information</p>
        <div>
            <p className='font-semibold text-lg'>Owner : {property?.displayName}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <span className='text-md flex gap-1 items-center'><BiBed /> {property?.bedRooms}</span>
            <span className='text-md flex gap-1 items-center'><BiBed /> {property?.bedRooms}</span>
          {property?.parking && <BiSolidCar className='text-md' />}
        </div>
        <div className='flex gap-3'>
            <div className='flex flex-col gap-1'>
                <p className='text-primaryClr'>Current Price</p>
                <span className='text-primaryClr'>${property?.price}</span>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-red-400'>Offer Price</p>
                <span className='text-red-400'>{property?.offer ? `$${property?.offerPrice}` :'No offer Available'}</span>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <button onClick={add} className='buttonComp primary'>Add to Watchlist</button>
            <Link to={`mailto:${email}`} className='w-full'><button className='buttonComp secondary w-full'>Contact Owner</button></Link>
        </div>
    </div>
  )
}

export default PropertyData