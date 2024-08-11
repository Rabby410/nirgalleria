import React from 'react'
import { ImLocation2 } from "react-icons/im";
import { FaBusinessTime, FaMobileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";



const Location = () => {
    return (
        <>
            <div className="py-10">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
                        <div>
                            <h1 className='text-lg md:text-4xl font-bold tracking-widest'>Find Us</h1>
                            <h1 className='text-lg md:text-4xl font-bold tracking-widest'>Nir Galleria</h1>
                        </div>
                        <div>
                            <h2 className='text-sm md:text-lg font-semibold mb-2'>OUR LOCATION</h2>
                            <div className="flex gap-3  mb-2">
                                <ImLocation2 size={80} className='text-red-500' />
                                <p>Store # 322, Level # 03, Twin Tower Concord Shopping Complex, 27, Chamelibag, Shantinagar, Dhaka - 1217</p>
                            </div>
                            <div className="flex gap-3">
                                <FaBusinessTime size={30} className='text-red-500' />
                                <p className='flex justify-start'>Always Open</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-sm md:text-lg font-semibold mb-2'>More Information</h2>
                            <div className="flex gap-3  mb-2">
                                <FaMobileAlt size={30} className='text-red-500' />
                                <p>(+880) 130 9142 161</p>
                            </div>
                            <div className="flex gap-3">
                                <MdAlternateEmail size={30} className='text-red-500' />
                                <p className='flex justify-start'>support@nirgalleria.com</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-sm md:text-lg font-semibold mb-2'>Subscriber</h2>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email address:</label>
                                <input type="email" name='email' placeholder='Your Email Address' className='border my-2 px-3 py-1 text-sm'/>
                            </div>
                            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'>Sign Up</button>
                        </div>
                    </div>

                    <div className="map w-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58404.05131223888!2d90.35656019175104!3d23.809593479036998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1de178aeebf%3A0x9f35d430a562d57e!2sNir%20Galleria!5e0!3m2!1sen!2sbd!4v1723353450649!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location