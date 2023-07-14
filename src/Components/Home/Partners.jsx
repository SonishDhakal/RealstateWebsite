import React from 'react'
import { partners } from '../../Utils/Constant'

const Partners = () => {
  return (
   <div className='flex flex-col gap-6'>
    <div className='flex items-center flex-col gap-2'>
    <h2 className='font-semibold text-primaryClr text-xl'>Our Partners</h2>
    <p className='text-textClr'>We have some of the most tursted Realstate businesses who trust us and our work.</p>
    </div>
    <div className='grid grid-cols-1 gap-4 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center'>
        {partners.map(item => (
            <img src={item.img} alt={item.name} key={item.name} className='w-[220px] cursor-pointer' />
        ))}
    </div>
   </div>
  )
}

export default Partners