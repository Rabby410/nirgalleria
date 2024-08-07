'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAward, FaPenNib } from 'react-icons/fa';
import { FaCrop } from "react-icons/fa6";
import { MdOutlineEco } from "react-icons/md";


const showcaseProduct = {
    name: "Showcase Product",
    images: [
        '/images/home/exclusive/exc1.jpg',
        '/images/home/exclusive/exc2.jpg',
        '/images/home/exclusive/exc3.jpg',
    ],
    features: [
        {
            icon: <FaAward className="text-4xl" />,
            title: "Handcrafted Quality",
            description: "Meticulously handcrafted for unique beauty."
        },
        {
            icon: <MdOutlineEco className="text-4xl" />,
            title: "Eco-Friendly Materials",
            description: "Made with sustainable and natural fibers."
        },
        {
            icon: <FaPenNib className="text-4xl" />,
            title: "Artistic Design",
            description: "Inspired by modern and traditional art."
        },
        {
            icon: <FaCrop className="text-4xl" />,
            title: "Versatile Sizes",
            description: "Available in various sizes to fit any space."
        }
    ]

};

const ProductShowcaseSlider = () => {
    return (
        <div className="p-4">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">{showcaseProduct.name}</h2> */}
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="showcaseSlider mb-8"
            >
                {showcaseProduct.images.map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div style={{textAlign:"-webkit-center"}}>
                            <img src={image} alt={`Showcase ${index + 1}`} className="w-full max-w-[300px] h-auto object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {showcaseProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductShowcaseSlider;
