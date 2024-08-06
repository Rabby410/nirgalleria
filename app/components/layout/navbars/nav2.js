import Link from 'next/link';
import React from 'react'
import { FaHome, FaEye } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";

const Nav2 = () => {
  return (
    <div className="py-1 bg-secendary hidden md:block">
        <div className="container mx-auto flex justify-between items-center gap-5 px-5">
            <div className="flex gap-5 justify-center items-center">
                <Link href="/" className="flex gap-2 justify-center items-center text-lg">
                    <FaHome/>Home
                </Link>
                <Link href="/products" className="flex gap-2 justify-center items-center text-lg">
                    <AiOutlineProduct/>Product Line
                </Link>
            </div>
            <Link href="/">
                <img src="./images/logo.png" alt="Nir Galleria" className="h-20"/>
            </Link>
            <div className="flex gap-5 justify-center items-center">
            <Link href="/recent-views" className="flex gap-2 justify-center items-center text-lg">
                    <FaEye/>Recent Views
                </Link>
                <Link href="/contact" className="flex gap-2 justify-center items-center text-lg">
                    <FaMapLocationDot />Contact Us
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav2