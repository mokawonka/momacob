import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line } from 'react-icons/ri'
import {Swiper ,SwiperSlide} from 'swiper/react'
import "swiper/css";
import Latest from '../assets/Latest'


const RelatedProducts = () => {
  return (
    <div>
      <h4 className='border-l-4 pl-2 border-primary bold-20'>Related Products</h4>
      <div className="mx-auto max-w-full">
        <Swiper breakpoints={{
          600:{
            slidesPerView:2,
            spaceBetween:30,
          },
          1024:{
            slidesPerView:3,
            spaceBetween:30,
          },
          1200:{
            slidesPerView:4,
            spaceBetween:30,
          }
        }} className='h-[422px] sm:h-[477px] mt-5'>
        {Latest.map((item, i)=>(
          <SwiperSlide key={i}>
           <Link onClick={window.scrollTo(0, 0)} to={`/product/${item.id}`} height={100} width={100} className="flexCenter gap-x-5 bg-white  p-4 rounded-xl">
           <img src={item.image} height={70} width={70} className="rounded-lg drop-shadow-xl" />
           <div className="flex flex-col gap-y-1">
            <h4 className="line-clamp-1 medium-16">{item.name}</h4>
            <RiShoppingCart2Line className="text-xl hover:text-secondary"/>
            </div>
           
           </Link>
          </SwiperSlide>
        ))}
      </Swiper></div>
      
    </div>
  )
}

export default RelatedProducts