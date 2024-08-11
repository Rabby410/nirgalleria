'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaTimes } from 'react-icons/fa';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Link href="#" onClick={openModal} className="flex gap-2 md:justify-center items-center md:text-lg text-black md:text-white hover:scale-110 hover:transition-transform duration-300">
        <FaMapMarkerAlt className='hidden md:block' />
        <span className="group-hover:text-orange-500 transition duration-300">Contact Us</span>
      </Link>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[80%] max-w-4xl p-6 relative">
            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-600 rounded-full p-1 hover:bg-gray-200"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-4">
              <h4 className="text-2xl font-semibold">Contact Us</h4>
              <h1 className="text-4xl font-bold hover:text-yellow-400">support@nirgallaria.com</h1>
              <h3 className="text-xl hover:text-yellow-400">(+880) 130 9142 161</h3>
              <h3 className="text-lg pb-10 hover:text-yellow-400">Store # 322, Level # 03, Twin Tower Concord Shopping Complex, 27, Chamelibag, Shantinagar, Dhaka - 1217</h3>

              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                Request for quote
              </button>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-6">
                <FaFacebook className="text-gray-500 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-300 rounded-full border border-gray-300 p-2" size={35} />
                <FaTwitter className="text-gray-500 hover:text-white hover:bg-black cursor-pointer transition duration-300 rounded-full border border-gray-300 p-2" size={35} />
                <FaInstagram className="text-gray-500 hover:text-white hover:bg-pink-600 cursor-pointer transition duration-300 rounded-full border border-gray-300 p-2" size={35} />
                <FaYoutube className="text-gray-500 hover:text-white hover:bg-red-600 cursor-pointer transition duration-300 rounded-full border border-gray-300 p-2" size={35} />
                <FaPinterest className="text-gray-500 hover:text-white hover:bg-red-600 cursor-pointer transition duration-300 rounded-full border border-gray-300 p-2" size={35} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
