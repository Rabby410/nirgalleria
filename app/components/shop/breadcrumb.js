import Image from 'next/image'
import React from 'react'

const categories = [
    {
        id: 1,
        name: "Home Furnitures",
        image: "/images/layouts/header/hf.png",
    },
    {
        id: 2,
        name: "Foam | Cover",
        image: "/images/layouts/header/fc.png",
    },
    {
        id: 3,
        name: "Dinning",
        image: "/images/layouts/header/d.png",
    },
    {
        id: 4,
        name: "Bed Attire",
        image: "/images/layouts/header/ba.png",
    },
    {
        id: 5,
        name: "Curtains | Blinds",
        image: "/images/layouts/header/cb.png",
    },
    {
        id: 6,
        name: "Mattress | Topper",
        image: "/images/layouts/header/mt.png",
    },
    {
        id: 7,
        name: "Cushion | Cover",
        image: "/images/layouts/header/cc.png",
    },
    {
        id: 8,
        name: "Bath Attire",
        image: "/images/layouts/header/bat.png",
    },
    {
        id: 9,
        name: "Rugs | Carpet",
        image: "/images/layouts/header/rc.png",
    },
    {
        id: 10,
        name: "Kitchen Textile",
        image: "/images/layouts/header/kt.png",
    }
]

const Breadcrumb = () => {
    return (
        <>
            <div className="py-10 bg-yellow-100">
                <div className="container mx-auto text-center text-gray-500">
                    <h1 className='text-xl md:text-6xl font-bold'>Shop</h1>

                    <div className="py-10 px-4 md:px-10">
                        <div className="flex flex-wrap gap-3 md:gap-5 justify-center items-center">
                            {categories.map((category) => (
                                <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-sm md:text-base" key={category.id}>
                                    <Image src={category.image} alt={category.name} width={40} height={40} className="h-6 md:h-8" />
                                    <span>{category.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
