'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            setData({ /* fetched data */ });
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[200px] h-[200px] border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent border-solid rounded-full animate-spin"></div>
                    <Image
                        src="/images/logo.png"
                        alt="Loading"
                        width='200'
                        height="160"
                        className="relative z-10"
                    />
                </div>
            </div>
        );
    }

    // Render your actual content here when not loading
    return <></>;
};

export default Loader;
