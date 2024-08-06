import Link from 'next/link'
import React from 'react'
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Nav1 = () => {
  return (
    <>
    <div className="py-3 bg-primary hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-5 text-sm">
            <div className="flex flex-row justify-center items-center text-secendary gap-3">
                <p>Customer Care:</p>
                <Link href="tel:+8801682903051">+880 1682-903051</Link>
            </div>
            <div className="flex flex-row justify-center items-center text-secendary gap-3">
                <Link href="#">Login/Register</Link>
                <FaHeart className="text-md"/>
                <div className="flex flex-row justify-center items-center">
                <FaShoppingCart className="text-md"/>
                <p className="text-[10px] bg-yellow-300 py-0.5 px-1.5 rounded-full -mt-5">0</p>
                <p className="ml-3"><span className="font-semibold mr-1">৳</span>0.00</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav1