import React from 'react'
import { how } from '../../Utils/Constant'

const How = () => {
  return (
    <div className='flex flex-col gap-12'>
        <div className='flex items-center flex-col gap-2'>
    <h2 className='font-semibold text-primaryClr text-xl'>How it works?</h2>
    <p className='text-textClr'>Our compnay follows very steps inorder to complete your business properly.</p>
    </div>
        <div className='grid grid-cols-1 gap-6 ss:grid-cols-2 md:grid-cols-3 items-center'>
            {how.map((item,index) =>(
                <div key={index} className='text-center flex flex-col gap-[3rem] items-center'>
                    <div>
                     
                           <span className={` ${index===1 && '!bg-yellowClr'} roatateIcon text-xl p-5 rounded-md cursor-pointer block bg-primaryClr text-black`}>
                           {item.icon}
                           </span>
                  
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='font-medium'>{item.title}</h3>
                        <p className='text-textClr'>{item.para}</p>
                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default How