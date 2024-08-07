import React from 'react'

const BagShowcase = () => {
    return (
        <>
            <div className="py-10">
                <div className="container mx-auto px-5">
                    <div className="text-center">
                        <p className='text-green-500 text-xl font-semibold'>We Love What We Do</p>
                        <h2 className="text-3xl font-bold mt-3 text-blue-700">Our Handcrafted Some Products </h2>
                        <h5 className="text-md mt-3">A client that&apos;s unhappy for a reason is a problem, a client that&apos;s unhappy though he or her can&apos;t quite a finger worse.</h5>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 justify-items-center'>
                        <div className='flex flex-row md:flex-col gap-5 justify-self-end pr-5'>
                            <div><img src="./images/home/bagShowcase/bag1.jpg" alt="" className='w-[200px] h-[250px]' /></div>
                            <div><img src="./images/home/bagShowcase/bag2.jpg" alt="" className='w-[200px] h-[250px]' /></div>
                        </div>
                        <div>
                            <img src="./images/home/bagShowcase/Authentic-bags.jpeg" alt="" className='w-auto h-[520px]' />
                        </div>
                        <div className='flex flex-row md:flex-col gap-5 justify-self-start pl-5' >
                            <div><img src="./images/home/bagShowcase/bag3.jpg" alt="" className='w-[200px] h-[250px]' /></div>
                            <div><img src="./images/home/bagShowcase/bag5.jpg" alt="" className='w-[200px] h-[250px]' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BagShowcase