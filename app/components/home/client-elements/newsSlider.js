"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaUser, FaShareAlt } from 'react-icons/fa';
import Newses from "../../constants/news";
import BlogBox from "../../common/blogBox";

const NewsSlider = () => {
  return (
    <div className="py-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        centeredSlides={false}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="newsSwiper"
      >
        {Newses.map((news) => (
          <SwiperSlide key={news.id}>
            <BlogBox news={news} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
