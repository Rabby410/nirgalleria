"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaStar, FaUserCircle } from "react-icons/fa";
import Reviews from "../../constants/customerReview.js";

const ReviewSlider = () => {
  return (
    <>
      <Swiper
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
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
          },
        }}
        centeredSlides={false}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="reviewSwiper"
      >
        {Reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="font-semibold text-xl">Customer Review</h3>
              <h1 className="font-semibold text-2xl">What they say about us</h1>
              <span className="font-extrabold text-2xl">____</span>
              <FaUserCircle className="text-9xl mt-3" />
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    className={`mt-3 inline-block ${index < review.star ? 'text-yellow-300' : 'text-gray-300'}`}
                    key={index}
                  />
                ))}
              </div>
              <p className="mt-5">{review.feedback}</p>
              <p>
                <span className="font-semibold">{review.name}</span> -{" "}
                {review.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSlider;