import React, { useEffect } from 'react'
import { useUserContext } from '../Utils/Context/UserContext'
import Hero from '../Components/Home/Hero'
import ArtMessage from '../Components/Home/ArtMessage'
import Partners from '../Components/Home/Partners'
import How from '../Components/Home/How'
import HouseSale from '../Components/Home/HouseSale'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const Home = () => {
  const {setShowHeader} =useUserContext()
  useEffect(() =>{
    setShowHeader(true)
  },[])
  return (
   <div className='pt-[120px] bg-bodyClr'>
    <div className="containerBox">
     <div className='flex flex-col gap-[7rem]'>
     <Hero />
      <ArtMessage />
      <Partners />
      <How />
      <HouseSale />
      <Contact />
      <Footer />
     </div>
    </div>

   </div>
  )
}

export default Home