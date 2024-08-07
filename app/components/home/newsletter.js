'use client'
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";



const Newsletter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-orange-400 to-[#cf2e2e] py-20 text-white">
      {/* Top wave shape */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M0,0v99c22-20.6,28.7-69.7,61.4-69.7c18.8,0,29.1,16.2,38.6,34V0L0,0z"
            fill="rgb(254, 251, 236)"
          />
        </svg>
      </div>

      {/* Body */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-8 lg:px-16">
        {/* First grid: Animated image */}
        <div className="flex justify-center">
          {isClient && (
            <img
              src="./images/newsletterBanner.png"
              alt="Newsletter Image"
              className="w-full h-full object-cover animate-slow-bounce"
            />
          )}
        </div>

        {/* Second grid: Newsletter content */}
        <div>
          <img src="./images/logo.png" alt="NIR GALLERIA" className="w-[200px] h-[150px] mx-auto mb-4 hover:animate-pulse" />
          <h2 className="text-6xl font-bold text-center mb-4">NIR GALLERIA</h2>
          <p className="text-center text-lg mb-4 text-green-500 font-semibold">BE ONE OF US</p>
          <h3 className="text-2xl text-center font-semibold mb-2">YOUR JOURNEY STARTS WITH US</h3>
          <label htmlFor="email" className="block mb-2">Email address</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 mb-4 text-gray-800"
            placeholder="Enter your email"
          />
          <button className="py-2 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold">Sign Up</button>
          <p className="mt-4">Will be used in accordance with our  Privacy Policy</p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebook className="text-2xl hover:scale-150 duration-300" />
            <FaXTwitter className="text-2xl hover:scale-150 duration-300" />
            <FaInstagram className="text-2xl hover:scale-150 duration-300" />
            <SlSocialPintarest className="text-2xl hover:scale-150 duration-300" />
            <FaLinkedin className="text-2xl hover:scale-150 duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M100,100V0.8C77.8,21.4,71.3,70.5,38.6,70.5c-18.8,0-29.1-16.2-38.6-34V100H100z"
            fill="rgb(254, 251, 236)"
          />
        </svg>
      </div>

      <style jsx>{`
        .animate-slow-bounce {
          animation: slow-bounce 5s infinite;
        }

        @keyframes slow-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Newsletter;
