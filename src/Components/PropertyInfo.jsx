import React from 'react'
import {RiStarFill} from 'react-icons/ri'
const PropertyInfo = ({property}) => {
 
  return (
   <div className='flex flex-col gap-4  basis-[70%]'>
    <div>
        <div className='flex justify-between items-center'>
        <h3 className='text-primaryClr text-3xl font-medium'>{property?.productName}</h3>
        <div className='flex text-primaryClr text-3xl'>
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
        </div>
    <div>
        <span className='text-textClr text-sm'>{property?.adress}, {property?.city}, {property?.country}</span>
        
    </div>
    </div>
    <div>
       <p> {property?.des}</p>
    </div>
    <div className="imgBox flex flex-col xs:flex-row  gap-4">
        {property?.images?.map((image,i) =>(
            <img  key={i} src={image} alt="" className='w-[200px] mx-auto xs:mx-0 rounded-xl cursor-pointer'/>

        ))}
    </div>
   </div>
  )
}

export default PropertyInfo