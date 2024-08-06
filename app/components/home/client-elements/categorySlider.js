'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import Categories from "../../constants/categories";

const CategorySlider = () => {
    return (
        <div className="py-5">
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
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 40,
                    },
                }}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="catSwiper"
            >
                {Categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform group w-full">
                            <img
                                src={category.catImage}
                                alt={category.catName}
                                className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center md:bg-black md:bg-opacity-50 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-secondary text-lg px-3 py-2 bg-primary rounded-md">
                                    {category.catName}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CategorySlider;
