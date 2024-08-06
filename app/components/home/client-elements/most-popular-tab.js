"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";;
import Products from "../../constants/products";
import Productbox2 from "../../common/productbox2";


const MostPopularTab = () => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={20}
      slidesPerView={1}
      slidesPerGroup={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      }}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className="productSwiper"
    >
      {Products.map((product) => (
        <SwiperSlide
          key={product.id}
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          <Productbox2 product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MostPopularTab;