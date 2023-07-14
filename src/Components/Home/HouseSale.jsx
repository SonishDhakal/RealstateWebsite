import React, { useEffect, useState } from 'react'
import Listings from '../../Pages/Profile/Listings'

import { db } from '../../Utils/Firebase/Firebase'

const HouseSale = () => {
    // const [currentProperty,setCurrentProperty] = useState()

    // async function getHeaderData(){
   
    //     const q = query(collection(db, "products"),orderBy('timestamp'),limit(6))
    //     const querySnap = await getDocs(q);
    //     let items =[]
    //    querySnap.forEach(item => items.push(item.data()))
    //    setCurrentProperty(items)
    //     }

    // useEffect(() =>{
    //     getHeaderData(0)

    // },[])
  return (
    <div>
            <div className='flex items-center flex-col gap-2'>
    <h2 className='font-semibold text-primaryClr text-xl'>Houses on Sale Now!</h2>
    <p className='text-textClr'>We have houses on sale all over the country from various trusted agetns.</p>
    </div>
    <div>
        <Listings type='Home' />
    </div>
    </div>
  )
}

export default HouseSale