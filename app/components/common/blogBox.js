import React from "react";
import { FaUser, FaShareAlt } from "react-icons/fa";

const BlogBox = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group text-center w-full md:w-full">
      <div className="relative">
        <img
          src={news.catImage}
          alt={news.catName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-5 left-5 bg-white text-black p-2 rounded-lg shadow-2xl w-[60px]">
          <p className="break-words text-xl">{news.publishDate}</p>
        </div>
        <div className="absolute inset-0 flex items-center h-56 justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-5xl">...</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-8 -mt-8 relative">
          <span className="bg-gray-300 px-3 py-2 z-20">{news.category}</span>
        </p>
        <h3 className="text-xl font-semibold mb-2">{news.catName}</h3>
        <div className="flex items-center text-gray-500 mb-4 gap-5 justify-center">
          <h5>Posted By:</h5>
          <div className="flex justify-center items-center">
            <FaUser className="mr-2" />
            <span className="mr-4">Admin</span>
          </div>
          <FaShareAlt className="mr-2" />
        </div>
        <p className="text-gray-700 mb-4">
          {news.description.length > 100
            ? `${news.description.substring(0, 100)}...`
            : news.description}
        </p>
        <a href="#" className="text-primary font-semibold">
          Continue reading...
        </a>
      </div>
    </div>
  );
};

export default BlogBox;
