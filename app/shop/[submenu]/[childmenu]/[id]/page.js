'use client'
import React, { useState } from 'react';
import Products from '@/app/components/constants/products';
import Link from 'next/link';
import { FaCheck, FaTimes, FaPlus, FaMinus, FaRegHeart, FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaStar } from 'react-icons/fa';
import { IoIosGitCompare } from "react-icons/io";
import Image from 'next/image';

const Product = ({ params }) => {
    const [activeTab, setActiveTab] = useState('description');
    const { id } = params;
    const product = Products.find(product => product.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleIncrease = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Logic to add the product to the cart with the specified quantity
        console.log(`Added ${quantity} of ${product.name} to the cart`);
    };

    const starCount = 5; // Total number of stars
    const fullStars = Math.floor(`${product.rating}`); // Number of full stars
    const hasHalfStar = (`${product.rating}`) % 1 >= 0.5

    return (
        <>
            <div className="py-3">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex place-self-center gap-2 w-1/2 items-center">
                            <Image src={product?.image} alt={product?.name} width={1200} height={1200} className='h-24 self-start' />
                            <Image src={product?.image} alt={product?.name} width={1200} height={1200} />
                        </div>
                        <div>
                            <h3 className='text-gray-500'>
                                <Link href="/" className='hover:text-black'>Home</Link>/
                                <Link href={`/shop/${product?.category}`}>
                                    {product?.category}
                                </Link>/
                                {product?.name}
                            </h3>
                            <h1 className='mt-5 text-xl md:text-4xl font-bold'>{product?.name}</h1>
                            <h2 className='mt-3 text-lg md:text-2xl font-bold text-green-500'>${product?.price}</h2>
                            <div className='mt-2'>
                                <h3>Premium Quality {product?.name}</h3>
                                <p>{product.description}</p>
                            </div>
                            <p className='flex items-center gap-2'>
                                <span>
                                    {product?.stock === 0 ? <FaTimes className="text-red-500" /> : <FaCheck className="text-green-500" />}
                                </span>
                                {product?.stock === 0 ? 'Stock Finished' : `${product?.stock} in Stock`}
                            </p>

                            <div className='flex items-center gap-5'>
                                {product?.stock > 0 && (
                                    <div className="mt-4 flex items-center text-sm">
                                        <button onClick={handleDecrease} className="p-3 border rounded">
                                            <FaMinus />
                                        </button>
                                        <span className="p-2 bg-gray-200 border-y border-black ">{quantity}</span>
                                        <button onClick={handleIncrease} className="p-3 border rounded">
                                            <FaPlus />
                                        </button>
                                    </div>
                                )}

                                {product?.stock > 0 && (
                                    <button
                                        onClick={handleAddToCart}
                                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                            <div className='flex gap-5 items-center text-[14px] mt-5 border-b-2 pb-5'>
                                <div className='flex gap-2 items-center hover:scale-110 transition-transform duration-300 cursor-pointer'><IoIosGitCompare />Compare</div>
                                <div className='flex gap-2 items-center hover:scale-110 transition-transform duration-300 cursor-pointer'><FaRegHeart />Add to Wishlist</div>
                            </div>
                            <p className='mt-3 text-[12px] uppercase text-gray-500'>Category: {product?.category}</p>
                            <div className='flex gap-3 items-center mt-3 text-gray-500'>
                                <h5 className="font-semibold">Share :</h5>
                                <ul className="flex justify-center space-x-4">
                                    <li className='hover:scale-150 duration-300'><Link href="#"><FaFacebook /></Link></li>
                                    <li className='hover:scale-150 duration-300'><Link href="#"><FaInstagram /></Link></li>
                                    <li className='hover:scale-150 duration-300'><Link href="#"><FaTwitter /></Link></li>
                                    <li className='hover:scale-150 duration-300'><Link href="#"><FaPinterest /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white mt-5">
                    <div className="container mx-auto flex justify-center items-center">
                        <button
                            className={`py-2 px-4 ${activeTab === 'description' ? 'border-t-2 border-green-500 text-green-500' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`py-2 px-4 ${activeTab === 'additional-info' ? 'border-t-2 border-green-500 text-green-500' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('additional-info')}
                        >
                            Additional information
                        </button>
                        <button
                            className={`py-2 px-4 ${activeTab === 'review' ? 'border-t-2 border-green-500 text-green-500' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('review')}
                        >
                            Reviews (0)
                        </button>
                    </div>
                    <div className="p-4">
                        {/* Render content based on the active tab */}
                        {activeTab === 'description' && <div>{product?.description}</div>}
                        {activeTab === 'additional-info' && <div>{product?.additionalinfo}</div>}
                        {activeTab === 'review' &&
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div>
                                        <h3 className='text-lg font-semibold pb-2'>Reviews</h3>
                                        <p>There are no reviews yet.</p>
                                    </div>
                                    <div>
                                        <h3 className='text-lg pb-2'>Be the first to review “Curtain Mickey Mouse&quot; </h3>
                                        <p className='text-sm pb-3'>Your email address will not be published. Required fields are marked *</p>
                                        <div className="flex items-center gap-2">
                                            <p>Your rating *:</p>
                                            <div className="flex items-center gap-1">
                                                {[...Array(starCount)].map((_, index) => {
                                                    let starColor = 'text-gray-300';
                                                    if (index < fullStars) {
                                                        starColor = 'text-yellow-300';
                                                    } else if (index === fullStars && hasHalfStar) {
                                                        starColor = 'text-yellow-300';
                                                    }
                                                    return (
                                                        <FaStar
                                                            className={`inline-block ${starColor}`}
                                                            key={index}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-5">
                                            <label htmlFor="message" className='pb-2'>
                                                Your message (optional)
                                                <span className='text-red-500'>*</span>
                                            </label>
                                            <textarea rows="5" type="subject" name='subject' placeholder='' className='px-2 py-2 border rounded-xl' />
                                        </div>

                                        <div className="flex flex-col mt-5">
                                            <label htmlFor="name" className='pb-2'>
                                                Name
                                                <span className='text-red-500'>*</span>
                                            </label>
                                            <input type="name" name='name' placeholder='' className='px-2 py-2 border rounded-xl' required />
                                        </div>

                                        <div className="flex flex-col mt-5">
                                            <label htmlFor="email" className='pb-2'>
                                                Email
                                                <span className='text-red-500'>*</span>
                                            </label>
                                            <input type="email" name='email' placeholder='' className='px-2 py-2 border rounded-xl' required />
                                        </div>
                                        <div>
                                            <label className='flex gap-2 items-center pt-2'>
                                                <input type="checkbox" />Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <button className='mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'>
                                            Submit
                                        </button>
                                    </div>
                                </div>

                            </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
