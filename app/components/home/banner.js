import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="pb-5 bg-primary">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex flex-wrap pt-3 px-5 gap-5 md:border-r border-opacity-30 border-secendary justify-center">
                            <p className="text-3xl md:text-6xl font-semibold text-green-400">01.</p>
                            <div className="w-[60%] group">
                                <h2 className="text-md md:text-xl">CHOOSE PRODUCTS</h2>
                                <p className="mt-2 text-sm md:text-lg">Browse for something you love and select the products you would like to have.</p>
                                <div className="mt-5 group-hover:block text-sm md:text-lg"><Link href="" className="underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity">Read More</Link></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap pt-3 px-5 gap-5 md:border-r border-opacity-30 border-secendary justify-center">
                            <p className="text-3xl md:text-6xl font-semibold text-green-400">02.</p>
                            <div className="w-[60%] group">
                                <h2 className="text-md md:text-xl">PLACING ORDER</h2>
                                <p className="mt-2 text-sm md:text-lg">Click on Buy Now Button | Provide us your detailed information.</p>
                                <div className="mt-5 group-hover:block text-sm md:text-lg"><Link href="" className="underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity">Read More</Link></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap pt-3 px-5 gap-5 justify-center">
                            <p className="text-3xl md:text-6xl font-semibold text-green-400">03.</p>
                            <div className="w-[60%] group">
                                <h2 className="text-md md:text-xl">HAPPY CUSTOMER</h2>
                                <p className="mt-2 text-sm md:text-lg">Get the parcel in hand at your desired address | Make the payment.</p>
                                <div className="mt-5 group-hover:block text-sm md:text-lg"><Link href="" className="underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner