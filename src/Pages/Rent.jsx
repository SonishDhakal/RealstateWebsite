import React from 'react'
import Listings from './Profile/Listings'

const Rent = () => {
  return (
    <div className='pt-[120px] bg-bodyClr'>
       <div className='containerBox'>
       <Listings type='rent' title='Latest Property available for rent'/>
       </div>
        </div>
  )
}

export default Rent