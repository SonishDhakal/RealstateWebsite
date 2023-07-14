import React from 'react'
import Listings from './Profile/Listings'

const Sell = () => {
  return (
    <div className='pt-[120px] bg-bodyClr'>
       <div className='containerBox'>
       <Listings type='sell' title='Latest Property to Buy'/>
       </div>
        </div>
  )
}

export default Sell