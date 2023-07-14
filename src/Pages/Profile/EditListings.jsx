import React, { useEffect, useReducer, useState } from 'react'
import { RiInformationFill } from 'react-icons/ri'

import Loader from '../../Components/Loader'
import { useUserContext } from '../../Utils/Context/UserContext'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
const EditListings = () => {
  const {AddListings,productImages,uploadImages, dataloading,getListingProperty,updateProfileData} = useUserContext()


  const {id} = useParams()
  useEffect(() =>{
    async function getEditProduct(){
      const data= await getListingProperty(id)
      setProductForm(data.data())
    console.log(data.data())
    }

    getEditProduct()


  },[id])
  

















  const [productForm,setProductForm] =  useState({
    
      typeoff:'sell',
      des:'',
      parking:false,
      offer:false,
      productName:'',
      country:'',
      adress:'',
      city:'',
      offerPrice:'',
      price:'',
      bathRooms:'',
      bedRooms:'',
      images:{}
  
 
  })




async function handelChange(e){
  if(e.target.type ==='checkbox'){
    
    if(e.target.value ==='sell' || e.target.value ==='rent'){
     
      return setProductForm({...productForm, typeoff:e.target.name})

    }
    if(e.target.name==='parking'){
      return setProductForm( {...productForm, [e.target.name]:!parking})
    }

    if(e.target.name==='offer'){
      return setProductForm( {...productForm, [e.target.name]:!offer})
    }
  }
  else if(e.target.type==='text' || e.target.type==='textarea' || e.target.type=='number'){
    return setProductForm( {...productForm, [e.target.name]:e.target.value})
    
   
  }
  else{
   

   const data = await uploadImages(e.target.files)
    
   return setProductForm( {...productForm, images:data})
   

  }

}


const {des,typeoff,parking,offer,images,productName,country, bedRooms, bathRooms, adress, city, offerPrice,price} = productForm;

function handelSubmit(e){
  e.preventDefault()

  if(productName==='' || country==='' || bedRooms==='' || bathRooms==='' || adress==='' ||city ==='' ||productName===''
  ||price===''|| des==='' ){
  
  return toast.error('All fields must be filled')

  }

  if(!images[0]){
   return toast.error('Images are missing')

  }


  if(offer===true){
    if(offerPrice===''){
      return  toast.error('All fields must be filled')
    }
    else if(parseFloat(offerPrice)>parseFloat(price)){
    return  toast.error("Offer Price can't be more than the regular Price")

    }
  }

 
  

  updateProfileData(id,productForm,'product')
}













  return (
    <div className='flex flex-col gap-8 w-full h-full ss:py-0 py-10  xs:px-0'>
        <h2 className='font-bold text-xl'>Edit Your Property for sale & rent</h2>
       {dataloading ? <Loader /> : <div className='flex flex-col gap-4 '>
            <h3 className='items-center flex gap-2 text-lg font-semibold'> <RiInformationFill /> Property Information</h3>
            <form   className='flex flex-col gap-12'>
                <div className='flex justify-between gap-4 ss:flex-row flex-col '>
              <div className='basis-1/2'>
              <label htmlFor="name flex-1" className=' font-medium'>Property Name & Description</label>
              </div>
              
               
              <div className="basis-1/2 flex flex-col gap-3">
                <input
                value={productName}
                  placeholder="Name"
                  required
                  onChange={handelChange}
                  type="text"
                  className="  border-black/[0.5] px-2 py-3 outline-primaryClr border-2 w-full rounded-lg"
                  name="productName"
                  id=""
                  minLength={10}
                />
                <textarea
                value={des}
                  required
                  type="text"
                  onChange={handelChange}
                  name="des"
                  placeholder="Description"
                  className=" col-span-2 resize-y h-[100px] border-black/[0.5] px-2 py-3 outline-primaryClr border-2 w-full rounded-lg"
                ></textarea>
              </div>
                </div>
               
                <div className='flex justify-between gap-4 ss:flex-row flex-col'>
                   <div className='basis-1/2 '>
                   <label className=' font-medium' htmlFor="countryAndAdress">Country & Adress</label>
                   <p className='text-textClr'>Make sure to add your correct City & country to get proper location in Maps</p>
                   </div>
                   <div className='basis-1/2 grid grid-cols-2 gap-4'>
                    <input value={country} required onChange={handelChange}  type="text" name='country' placeholder='Country'className=' border-black/[0.5] px-2 py-3 outline-primaryClr border-2 w-full rounded-lg' />
                   <input value={city} required onChange={handelChange}  type="text" placeholder='City' name='city' className=' border-black/[0.5] px-2 py-3 outline-primaryClr border-2 w-full rounded-lg' />
                   <textarea value={adress} required type='text' onChange={handelChange}  name="adress" placeholder='Adress' className=' col-span-2 resize-y h-[100px] border-black/[0.5] px-2 py-3 outline-primaryClr border-2 w-full rounded-lg' ></textarea>
                   </div>
                   
                   
                </div>
                <div className='flex justify-between gap-4 ss:flex-row flex-col'>
                   <div className='basis-1/2'>
                   <label className=' font-medium' htmlFor="rent&sell">Rent or sell</label>
                    <p className='text-textClr'>Choose Weahter you want to rent or sell to Property.</p>
                   </div>
                   <div className='basis-1/2 flex gap-4 items-center'>
                    <div className='flex gap-2 items-center'>
                   Sell <input  onChange={handelChange} name='sell' checked={typeoff==='sell'} value='sell' type="checkbox" className="accent-pink-500 w-[20px] h-[20px] round" />
                    </div>
                    <div className='flex gap-2 items-center'>
                   Rent <input  onChange={handelChange} name='rent' checked={typeoff==='rent'}  value='rent' type="checkbox" className="accent-pink-500 w-[20px] h-[20px] round" />
                    </div>
                   </div>
                </div>
                <div className='flex justify-between gap-4 ss:flex-row flex-col'>
                    <div className='basis-1/2'>
                        <label className=' font-medium'>Accododation and Facilities</label>
                        <p className='text-textClr'> Give buyer more info about your house</p>
                    </div>
                    <div className='basis-1/2 flex flex-col gap-4 '>
                        
                    <div className='flex gap-4 items-center'>
                        <p>Parking</p>
                    <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center'>
                   <input  onChange={handelChange} name='parking' value={true}   type="checkbox" className="accent-pink-500 w-[20px] h-[20px] round" />
                    </div>
                   
                    </div>
                   </div>
                       <div className='flex items-center gap-2'>
                       <div>
                       <p>Bath Rooms</p>
                        <input value={bathRooms} required onChange={handelChange}  type="number" min={0} name="bathRooms" placeholder='' className=' border-black/[0.5] px-1 py-2 outline-primaryClr border-2 w-full rounded-lg'/>
                       </div>
                       <div>
                       <p>Bed Rooms</p>
                        <input value={bedRooms} required onChange={handelChange}  type="number" min={0} name="bedRooms" placeholder='' className=' border-black/[0.5] px-1 py-2 outline-primaryClr border-2 w-full rounded-lg' />
                       </div>
                    
                       </div>
                         

                    </div>
                </div>
                <div className='flex justify-between gap-4 ss:flex-row flex-col'>
              <div className='basis-1/2'>
              <label className=' font-medium' htmlFor="price">Price and Offers</label>
              </div>
                <div className='basis-1/2 flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                        <p>Offer</p>
                    <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center'>
                    <input  onChange={handelChange}  name='offer'  value={true} type="checkbox" className="accent-pink-500 w-[20px] h-[20px] round" />
                    </div>
                    
                    </div>
                   </div>
              <div className='flex items-center gap-2'>
          {offer && <div>
                    <p>Offer Price</p>
                    <input value={offerPrice} required onChange={handelChange} min={0} type="number"  name='offerPrice' className=' border-black/[0.5] px-1 py-2 outline-primaryClr border-2 w-full rounded-lg'/>
                </div> }
                <div>
                    <p>Regular Price</p>
                    <input value={price} required onChange={handelChange} min={0}  type="number" name='price' className=' border-black/[0.5] px-1 py-2 outline-primaryClr border-2 w-full rounded-lg'/>
                </div>
              </div>
                </div>
                </div>
                <div className='flex justify-between gap-4 ss:flex-row flex-col'>
              <div className='basis-1/2'>
              <label className=' font-medium' htmlFor="price">Upload image</label>
            
              </div>
              <input required  accept=".jpg,.png,.jpeg"
            multiple onChange={handelChange}  type="file" name='images' />
               
                </div>
               <div className='flex justify-end ss:flex-row flex-col'>
              <button onClick={handelSubmit}  type="submit" className='buttonComp secondary'>Edit Property</button>
              </div>
               
            </form>
        </div> }

    </div>
  )
}

export default EditListings