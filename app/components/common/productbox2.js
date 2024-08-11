import Image from "next/image";
import React from "react";
import { FaCartPlus, FaEye, FaExchangeAlt, FaHeart } from "react-icons/fa";

const Productbox2 = ({ product }) => {
  return (
    <div className="relative group">
      <div className="relative">
        <Image src={product.image} alt={product.name} width="500" height="500" className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4 p-4">
            <button className="text-white">
              <FaCartPlus size={24} />
            </button>
            <button className="text-white">
              <FaEye size={24} />
            </button>
            <button className="text-white">
              <FaExchangeAlt size={24} />
            </button>
            <button className="text-white">
              <FaHeart size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.productCategory}</p>
        <p className="text-indigo-600 font-semibold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default Productbox2;