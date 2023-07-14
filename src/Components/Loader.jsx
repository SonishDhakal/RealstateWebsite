import React from 'react'
import loadingImage from '../assets/loader.gif'
const Loader = () => {
  return (
   <div className='w-full h-full grid place-content-center '>
    <img src={loadingImage} alt=""  />

   </div>
  )
}

export default Loader
