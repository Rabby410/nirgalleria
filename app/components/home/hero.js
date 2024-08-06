'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';

const SimpleSlider = () => {
    return (
        <div className="relative w-full h-[650px] overflow-hidden">
            <Swiper
                spaceBetween={0}
                speed={1800}
                effect={'fade'}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Navigation]}
                slidesPerView={1}
                className="mySwiper h-full"
            >
                <SwiperSlide className="flex justify-center items-center bg-blue-100">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img
                            src="./images/home/hero/Hom-22.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '10%', left: '10%', width: '270px' }}
                        />
                        <img
                            src="./images/home/hero/16.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '30%', left: '30%', width: '220px' }}
                        />
                        <img
                            src="./images/home/hero/15.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '5%', left: '40%', width: '220px' }}
                        />
                        <img
                            src="./images/home/hero/14.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '30%', right: '30%', width: '220px' }}
                        />
                        <img
                            src="./images/home/hero/6.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '20%', right: '10%', width: '270px' }}
                        />
                        <h2 className="absolute text-white first w-1/4 h-auto text-[90px] font-semibold transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '50%', left: "26%", bottom: '50%' }}
                        >Home</h2>
                        <img
                            src="./images/home/hero/center-slider-2.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '50%', left: "40%", bottom: '50%', width: '300px' }}
                        />
                        <h2 className="absolute secnd text-white w-1/4 h-auto text-[90px] font-semibold transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '50%', right: "20%", bottom: '50%' }}
                        >Attire</h2>
                        <img
                            src="./images/home/hero/Hom-21.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '0%', left: '10%', width: '270px' }}
                        />
                        <img
                            src="./images/home/hero/13.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '15%', left: '30%', width: '150px' }}
                        />
                        <img
                            src="./images/home/hero/10.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '5%', right: '10%', width: '270px' }}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center bg-red-100 items-center">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img
                            src="./images/home/hero/4.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '10%', left: '10%', width: '270px' }}
                        />
                        <img
                            src="./images/home/hero/3.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '20%', right: '10%', width: '270px' }}
                        />
                        <img
                            src="./images/home/hero/5.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '30%', left: '30%', width: '270px' }}
                        />
                        <h2 className="absolute first text-white w-1/4 h-auto text-[50px] font-semibold transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '60%', left: "18%", bottom: '40%' }}
                        >HANDCRAFTED</h2>
                        <img
                            src="./images/home/hero/center-slider-1.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '50%', left: "40%", bottom: '50%', width: '300px' }}
                        />
                        <h2 className="absolute secnd text-white w-1/4 h-auto text-[50px] font-semibold transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '60%', right: "20%", bottom: '40%' }}
                        >WITH CARE</h2>
                        <img
                            src="./images/home/hero/2.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '0%', left: '10%', width: '270px' }}
                        />
                        <img
                            src="./images/home/hero/1.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '5%', left: '30%', width: '230px' }}
                        />
                        <img
                            src="./images/home/hero/12.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '10%', right: '30%', width: '150px' }}
                        />
                        <img
                            src="./images/home/hero/11.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ bottom: '5%', right: '10%', width: '270px' }}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`
                @media (max-width: 1400px) {
                    .relative {
                        height: 400px;
                    }
                    img {
                        width: 150px !important;
                    }
                    h2 {
                        font-size: 50px !important;
                    }
                         .first{
                        left: 18% !important;p
                    }
                    .secnd{
                        right: 15% !important;p
                    }
                }
                @media (max-width: 1200px) {
                    .relative {
                        height: 400px;
                    }
                    img {
                        width: 150px !important;
                    }
                    h2 {
                        font-size: 50px !important;
                    }
                         .first{
                        left: 18% !important;p
                    }
                    .secnd{
                        right: 15% !important;p
                    }
                }
                @media (max-width: 768px) {
                    .relative {
                        height: 400px;
                    }
                    img {
                        width: 150px !important;
                    }
                    h2 {
                        font-size: 50px !important;
                    }
                         .first{
                        left: 15% !important;p
                    }
                    .secnd{
                        right: 10% !important;p
                    }
                }
                @media (max-width: 480px) {
                    .relative {
                        height: 300px;
                    }
                    img {
                        width: 100px !important;
                    }
                    h2 {
                        font-size: 20px !important;
                        white-space: nowrap;
                    }
                    .first{
                        left: 15% !important;p
                    }
                    .secnd{
                        right: 10% !important;p
                    }
                }
            `}</style>
        </div>
    );
};

export default SimpleSlider;
