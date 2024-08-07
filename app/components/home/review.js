import React from "react";
import { FaFacebook, FaFirefoxBrowser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ReviewSlider from "./client-elements/reviewSlider";

const Review = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white py-5">
            <ReviewSlider />
          </div>
          <div className="flex justify-center items-center">
            <img src="./images/Logo-bg-yellow.png" alt="Logo" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
          <div className="flex gap-5 justify-between justify-self-center items-center border-2 border-emerald-300 w-full md:w-[380px] rounded-xl hover:drop-shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="bg-emerald-200 text-7xl py-5 px-3">
              <FaFacebook className="text-blue-600 drop-shadow-lg" />
            </div>
            <div className="pr-5">
              <p className="text-xl">Review us on Facebook</p>
            </div>
          </div>
          <div className="flex gap-5 justify-between justify-self-center items-center border-2 border-emerald-300 w-full md:w-[380px] rounded-xl hover:shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="bg-emerald-200 text-7xl py-5 px-3">
              <FcGoogle className="drop-shadow-lg" />
            </div>
            <div className="pr-5">
              <p className="text-xl">Review us on Google</p>
            </div>
          </div>
          <div className="flex gap-5 justify-between justify-self-center items-center border-2 border-emerald-300 w-full md:w-[380px] rounded-xl hover:shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="bg-emerald-200 text-7xl py-5 px-3">
              <FaFirefoxBrowser className="text-white drop-shadow-lg"/>
            </div>
            <div className="pr-5">
              <p className="text-xl">Review us on Web</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
