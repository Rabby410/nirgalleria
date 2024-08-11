'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const MyAccount = () => {
    const [isRegister, setIsRegister] = useState(false);

    const handleToggle = () => {
        setIsRegister(!isRegister);
    };

    return (
        <>
            <div className="py-10 text-center bg-black text-white">
                <h1 className='text-6xl'>My Account</h1>
                <p className='pt-3 text-gray-500'><Link href="/" className=' hover:text-white'>Home</Link> <span>/</span> <span>My Account</span></p>
            </div>
            <div className="py-10 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:border-r px-8">
                        <h1 className="text-2xl">{isRegister ? 'Register' : 'Login'}</h1>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className='pb-2'>
                                {isRegister ? 'Email address' : 'Username Or Email address'}
                                <span className='text-red-500'>*</span>
                            </label>
                            <input type="email" name='email' placeholder='' className='px-3 py-3 border rounded-xl' />
                        </div>
                        {isRegister ? (
                            <p className="text-justify mt-5">
                                A link to set a new password will be sent to your email address. Anti-spam Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                            </p>
                        ) : (
                            <>
                                <div className="flex flex-col mt-5">
                                    <label htmlFor="password" className='pb-2'>Password <span className='text-red-500'>*</span></label>
                                    <input type="password" name='password' placeholder='' className='px-3 py-3 border rounded-xl' />
                                </div>
                                <div className='flex justify-between items-center mt-5'>
                                    <label className='flex gap-2 items-center'>
                                        <input type="checkbox" />Remember me
                                    </label>
                                    <p className='text-green-600 hover:text-black cursor-pointer'>Lost Your Password?</p>
                                </div>
                            </>
                        )}
                        <button className='w-full mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'>
                            {isRegister ? 'Register' : 'Login'}
                        </button>
                    </div>

                    <div className='text-center mt-5 md:mt-0 px-8 md:px-28'>
                        <h1 className='text-2xl mb-3'>{isRegister ? 'Login' : 'Register'}</h1>
                        <p className="text-justify">
                            {isRegister
                                ? "Login to access your account and view your order status and history."
                                : "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier."
                            }
                        </p>
                        <button
                            onClick={handleToggle}
                            className='w-full mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'
                        >
                            {isRegister ? 'Login' : 'Register'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount;
