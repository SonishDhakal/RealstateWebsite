import React from 'react'


const Contact = () => {
  return (
    <div className='bg-primaryClr w-full  flex flex-col items-center gap-6 px-8 py-[3rem] rounded-md'>
        <div>
            <p className='font-semibold text-white text-xl text-center'>Still Have Some Doubts? We are available 24hrs <br></br> Contact us Via our Contact Page
</p>
        </div>
        <div>
            <button className='bg-white text-black px-12 hover:bg-transparent hover:text-white transition-all py-4 border border-white rounded-lg'>Contact</button>
        </div>
    </div>
  )
}

export default Contact