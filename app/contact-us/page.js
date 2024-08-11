'use client'
import Image from 'next/image'
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContactUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div className="py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white px-5">
                        <div className="py-5">
                            <div className="md:border-r py-5 px-8 text-center" style={{ textAlign: "-webkit-center" }}>
                                <Image src="/images/contact-us/jute.png" alt='jute' width="300" height="500" />
                                <h3 className='mt-3 text-xl'>Saving our planet starts with You!</h3>
                                <p className='text-[12px]'>It&apos;s not really too expensive to go for an Eco-friendly life! Actually, it is easy being GREEN—giving our planet a helping hand is just a matter of making one simple change at a time.</p>
                                <button className=' mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'>BE ONE OF US</button>
                            </div>
                        </div>
                        <div className="py-5 text-center">
                            <p className='text-green-400'>Welcome to Eco Life</p>
                            <h2 className='text-2xl font-semibold mt-3 tracking-widest'>About The Shop</h2>
                            <div className='text-green-400 font-extrabold'>_____</div>
                            <h5 className='text-sm md:px-24 mt-3'><span className='font-semibold'>Nir Galleria- </span>Visit our shop to see exclusive artifacts from our artisans. May your visit to our shop be your first step towards sustainable living!</h5>
                            <button className=' mt-5 bg-gray-100 border hover:border-gray-200 text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-24">
                        <div className="py-5 md:border-r">
                            <div className="py-5 px-8">
                                <p className='text-gray-400'>INFORMATION QUESTIONS</p>
                                <h2 className='text-2xl font-semibold mt-3 tracking-widest'>FREQUENTLY ASKED QUESTIONS</h2>
                                <div className="border-b">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                        onClick={() => toggleAccordion(0)}
                                    >
                                        <span>Will I receive the same product that I see in the picture?</span>
                                        {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {activeIndex === 0 && (
                                        <div className="p-4 bg-white">
                                            <p>
                                                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et. Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-b">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                        onClick={() => toggleAccordion(1)}
                                    >
                                        <span>Where can I view my sales receipt?</span>
                                        {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {activeIndex === 1 && (
                                        <div className="p-4 bg-white">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-b">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                        onClick={() => toggleAccordion(2)}
                                    >
                                        <span>How can I return an item?</span>
                                        {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {activeIndex === 2 && (
                                        <div className="p-4 bg-white">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="border-b">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                        onClick={() => toggleAccordion(3)}
                                    >
                                        <span>Will you restock items indicated as &quot;out of stock?&quot;</span>
                                        {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {activeIndex === 3 && (
                                        <div className="p-4 bg-white">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="border-b">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                        onClick={() => toggleAccordion(4)}
                                    >
                                        <span>Where can I ship my order?</span>
                                        {activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {activeIndex === 4 && (
                                        <div className="p-4 bg-white">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="py-5 px-5">
                            <p className='text-gray-400'>INFORMATION ABOUT US</p>
                            <h2 className='text-2xl font-semibold mt-3 tracking-widest'>CONTACT US FOR ANY QUESTIONS</h2>
                            <form action="" className='text-sm'>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="name" className='pb-2'>
                                        Your Name
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    <input type="name" name='name' placeholder='' className='px-2 py-2 border rounded-xl' required />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="email" className='pb-2'>
                                        Your Email
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    <input type="email" name='email' placeholder='' className='px-2 py-2 border rounded-xl' required />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="subject" className='pb-2'>
                                        Subject
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    <input type="subject" name='subject' placeholder='' className='px-2 py-2 border rounded-xl' required />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="message" className='pb-2'>
                                        Your message (optional)
                                        <span className='text-red-500'>*</span>
                                    </label>
                                    <textarea rows="5" type="subject" name='subject' placeholder='' className='px-2 py-2 border rounded-xl' />
                                </div>
                                <button type='submit' className='mt-5 bg-green-400 border hover:border-green-600 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs