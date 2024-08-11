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
                            style={{ top: '20%', left: '30%', width: '220px' }}
                        />
                        <img
                            src="./images/home/hero/15.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '5%', left: '40%', width: '220px' }}
                        />
                        <img
                            src="./images/home/hero/14.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '20%', right: '30%', width: '220px' }}
                        />
                        <img
                            src="./images/home/hero/6.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '20%', right: '10%', width: '270px' }}
                        />
                        <div className="rounded-full bg-blue-200 w-[250px] h-[250px] md:w-[600px] md:h-[600px] flex justify-center items-center">
                            <div className="rounded-full bg-blue-300 w-[200px] h-[200px] md:w-[400px] md:h-[400px] flex justify-center items-center">
                                <h2 className="absolute text-white text-[90px] font-semibold transform hover:scale-105 transition-transform duration-500"
                                    style={{ top: '50%', left: "33%", transform: "translate(-50%, -50%)" }}
                                >Home</h2>
                                <img
                                    src="./images/home/hero/center-slider-2.png"
                                    className="absolute transform hover:scale-105 transition-transform duration-500"
                                    style={{ top: '50%', left: "50%", width: '300px', transform: "translate(-50%, -50%)" }}
                                />
                                <h2 className="absolute text-white text-[90px] font-semibold transform hover:scale-105 transition-transform duration-500"
                                    style={{ top: '50%', right: "35%", transform: "translate(50%, -50%)" }}
                                >Attire</h2>
                            </div>
                        </div>
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
                            style={{ top: '10%', left: '10%', width: '230px' }}
                        />
                        <img
                            src="./images/home/hero/3.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '20%', right: '10%', width: '270px' }}
                        />
                        <img
                            src="./images/home/hero/5.png"
                            className="absolute w-1/4 h-auto transform hover:scale-105 transition-transform duration-500"
                            style={{ top: '22%', left: '30%', width: '230px' }}
                        />
                        <div className="rounded-full bg-red-200 w-[250px] h-[250px] md:w-[600px] md:h-[600px] flex justify-center items-center">
                            <div className="rounded-full bg-red-300 w-[200px] h-[200px] md:w-[400px] md:h-[400px] flex justify-center items-center">
                                <h2 className="absolute text-white text-[60px] font-semibold transform hover:scale-105 transition-transform duration-500"
                                    style={{ top: '50%', left: "28%", transform: "translate(-50%, -50%)" }}
                                >HANDCRAFTED</h2>
                                <img
                                    src="./images/home/hero/center-slider-1.png"
                                    className="absolute transform hover:scale-105 transition-transform duration-500"
                                    style={{ top: '50%', left: "50%", width: '300px', transform: "translate(-50%, -50%)" }}
                                />
                                <h2 className="absolute text-white text-[60px] font-semibold transform hover:scale-105 transition-transform duration-500"
                                    style={{ top: '50%', right: "32%", transform: "translate(50%, -50%)" }}
                                >WITH CARE</h2>
                            </div>
                        </div>
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
                }
                @media (max-width: 480px) {
                    .relative {
                        height: 300px;
                    }
                    img {
                        width: 80px !important;
                    }
                    h2 {
                        font-size: 20px !important;
                        white-space: nowrap;
                    }
                }
            `}</style>
        </div>
    );
};

export default SimpleSlider;
