import React, { useEffect, useState } from 'react'
import PropertySlider from '../../Components/PropertySlider'
import PropertyInfo from '../../Components/PropertyInfo'
import { useUserContext } from '../../Utils/Context/UserContext'
import { useLocation, useParams } from 'react-router-dom'
import PropertyData from '../../Components/PropertyData'
import Loader from '../../Components/Loader'


const Property = () => {
  const location = useLocation()
 
    const { getListingProperty, dataloading, setDataLoading} = useUserContext();
    const { id } = useParams();
    const [property, setProperty] = useState();
  
    async function getEditProduct() {
      console.log(dataloading)
      const data = await getListingProperty(id);
      setProperty(data.data());

      
    }
  
    useEffect(() => {
      setDataLoading(true)
     
      getEditProduct();
      setDataLoading(false)
    
      console.log(dataloading)
    }, [id]);
  return ( dataloading ?<div className='w-screen h-screen'> <Loader /></div> :
  <div className='pt-[120px] bg-bodyClr'>
  <div className='containerBox'>
  <PropertySlider images={property?.images}/>
 <div className='flex flex-col-reverse sm:flex-row gap-8 mt-8 mb-3'>
 <PropertyInfo property={property}/>
 <PropertyData property={property}/>
 </div>
  </div>

</div>

  )
}

export default Property