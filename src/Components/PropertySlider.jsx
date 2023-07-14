import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PropertySlider = ({images}) => {


  return (
    <>
      <Swiper
        dir="rtl"
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
         {/*  */}

       {images?.map((item,index) => (
       <SwiperSlide key={index} style={{background:`url('${item}')`}} className='!bg-center !rounded-lg !bg-cover h-[300px] rounded-sm overflow-hidden w-screen'></SwiperSlide>
       ))}





      </Swiper>
    </>
  );
};

export default PropertySlider;
