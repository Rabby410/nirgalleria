import Image from 'next/image'
import React from 'react'

const BagShowcase = () => {
    return (
        <>
            <div className="py-10">
                <div className="container mx-auto px-5">
                    <div className="text-center">
                        <p className='text-green-500 text-xl font-semibold'>We Love What We Do</p>
                        <h2 className="text-3xl font-bold mt-3 text-blue-700">Our Handcrafted Bags </h2>
                        <h5 className="text-md mt-3">
                            A client that&apos;s unhappy for a reason is a problem,
                            a client that&apos;s unhappy though he or her can&apos;t quite a finger worse.
                        </h5>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 justify-items-center'>
                        <div className='flex flex-row md:flex-col gap-5 justify-self-end pr-5'>
                            <div><Image src="/images/home/bagshowcase/bag4.jpg" width='500' height="500" alt="" className='w-[200px] h-[250px] hover:animate-pulse' /></div>
                            <div><Image src="/images/home/bagshowcase/bag2.jpg" width='500' height="500" alt="" className='w-[200px] h-[250px] hover:animate-pulse' /></div>
                        </div>
                        <div>
                            <Image src="/images/home/bagshowcase/Authentic-bags.jpeg" width='500' height="500" alt="" className='w-auto h-[520px] hover:animate-pulse' />
                        </div>
                        <div className='flex flex-row md:flex-col gap-5 justify-self-start pl-5' >
                            <div><Image src="/images/home/bagshowcase/bag3.jpg" width='500' height="500" alt="" className='w-[200px] h-[250px] hover:animate-pulse' /></div>
                            <div><Image src="/images/home/bagshowcase/bag5.jpg" width='500' height="500" alt="" className='w-[200px] h-[250px] hover:animate-pulse' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BagShowcase