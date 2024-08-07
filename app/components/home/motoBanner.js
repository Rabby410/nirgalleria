'use client'
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const items = [
    {
        id: 1,
        title: 'Self-Publishing And Book Printing',
        subtitle: 'WRITING',
        paragraphs: 'There are many variations of passages of lorem ipsum available, but the.',
        image: './images/home/motobanner/img1.jpg',
    },
    {
        id: 2,
        title: 'New, Rare And Out-of-Print Books',
        subtitle: 'COLLECTING',
        paragraphs: 'When an unknown printer took a galley of type and scrambled it to make.',
        image: './images/home/motobanner/img2.jpg',
    },
    {
        id: 3,
        title: 'Where Books And People Meet',
        subtitle: 'COMMUNITY',
        paragraphs: 'Many desktop publishing as page web packages editors now use.',
        image: './images/home/motobanner/img3.jpg',
    },
];

const MotoBanner = () => {
    const [backgroundPositions, setBackgroundPositions] = useState({});

    const handleMouseMove = (e, id) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setBackgroundPositions((prev) => ({
            ...prev,
            [id]: { x: `${x}%`, y: `${y}%` },
        }));
    };

    const handleMouseLeave = (id) => {
        setBackgroundPositions((prev) => ({
            ...prev,
            [id]: { x: '50%', y: '50%' },
        }));
    };

    return (
        <div className="container mx-auto py-10">
            <div className="px-5 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group group-hover:scale-125 relative overflow-hidden rounded-lg shadow-lg bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundPosition: backgroundPositions[item.id]?.x + ' ' + backgroundPositions[item.id]?.y,
                            }}
                            onMouseMove={(e) => handleMouseMove(e, item.id)}
                            onMouseLeave={() => handleMouseLeave(item.id)}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-30 transition-transform transform group-hover:scale-105"></div>
                            <div className="relative bg-white rounded-xl bg-opacity-60 m-6 text-center">
                                <div className="px-5 py-44" style={{ textAlign: "-webkit-center" }}>
                                    <h4 className="text-lg text-green-600 mb-4">{item.subtitle}</h4>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-md mb-4">{item.paragraphs}</p>
                                    <button className="border-b border-green-500 pb-1 flex items-center justify-center transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                                        Read More <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MotoBanner;
