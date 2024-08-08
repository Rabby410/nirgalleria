'use client'
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const catagories = [
  {
    id: 1,
    name: "Home Furnitures",
    image: "./images/layouts/header/hf.png",
  },
  {
    id: 2,
    name: "Foam | Cover",
    image: "./images/layouts/header/fc.png",
  },
  {
    id: 3,
    name: "Dinning",
    image: "./images/layouts/header/d.png",
  },
  {
    id: 4,
    name: "Bed Attire",
    image: "./images/layouts/header/ba.png",
  },
  {
    id: 5,
    name: "Curtains | Blinds",
    image: "./images/layouts/header/cb.png",
  },
  {
    id: 6,
    name: "Mattress | Topper",
    image: "./images/layouts/header/mt.png",
  },
  {
    id: 7,
    name: "Cushion | Cover",
    image: "./images/layouts/header/cc.png",
  },
  {
    id: 8,
    name: "Bath Attire",
    image: "./images/layouts/header/bat.png",
  },
  {
    id: 9,
    name: "Rugs | Carpet",
    image: "./images/layouts/header/rc.png",
  },
  {
    id: 10,
    name: "Kitchen Textile",
    image: "./images/layouts/header/kt.png",
  }
]

const Nav3 = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="pt-2 bg-primary">
        <div className="container mx-auto px-5">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 50,
              },
            }}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="catSwiper -mb-10"
          >
            {catagories.map((catagorie) => (
              <SwiperSlide
                key={catagorie.id}
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              >
                <div className="flex gap-2 justify-center items-center"><img src={catagorie.image} alt={catagorie.name} className="h-8" /> {catagorie.name}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Nav3;