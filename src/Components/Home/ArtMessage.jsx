import React from 'react'
import goImg from '../../assets/go.webp'

const ArtMessage = () => {
  return (
   <div className='h-full w-full bg-secondaryClr py-[7rem]  sm:px-[5rem]'>
     <div className=   '  mx-auto sm:mx-0 w-full sm:h-[300px]  h-full rounded-sm flex flex-col gap-[6rem] sm:flex-row items-center sm:gap-0 justify-between'>
        <div className='go__wrapper-img'>
            <img src={goImg} alt="" />

        </div>
        <div >
            <h3 className='text-white text-3xl ss:text-[2.5rem] font-bold font-titleFont leading-10'>Buying a house Just  <br></br> got Easy</h3>
        </div>
    </div>
   </div>
  )
}

export default ArtMessage