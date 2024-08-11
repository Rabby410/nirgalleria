import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";

const ProductBox = ({ product }) => {
    return (
        <div className="relative p-5 group rounded-lg overflow-hidden">
            <div className="relative z-10">
                <Image
                    src={product.image}
                    alt={product.name}
                    width="400"
                    height="60"
                    className="w-full h-60 object-cover rounded-md transition duration-300 transform group-hover:scale-105"
                />
            </div>
            <div className="p-2">
                <div className="mt-3">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.productCategory}</p>
                    <p className="text-third font-semibold mt-2">${product.price}</p>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-white shadow-lg transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-20">
                <div className="flex items-center justify-end border-b pb-3 mb-3 px-5">
                    <div className="text-gray-500 rotate-90">
                        <IoIosGitCompare className="hover:scale-110 duration-300" />
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.productCategory}</p>
                    <p className="text-third font-semibold mt-2">${product.price}</p>
                </div>
                <div className="text-center text-gray-500">
                    <p className="text-gray-500 mb-4">{product.description}</p>
                    <div className="flex justify-between space-x-4">
                        <button className="text-white rounded-full py-2 px-3 bg-gray-800 hover:bg-green-700 transition duration-300">
                            <AiOutlineHeart />
                        </button>
                        <button className="text-white rounded-xl py-2 px-3 bg-secendary hover:bg-green-400 transition duration-300">
                            Add to Cart
                        </button>
                        <button className="text-white rounded-full py-2 px-3 bg-gray-800 hover:bg-green-700 transition duration-300">
                            <AiOutlineEye />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBox;
