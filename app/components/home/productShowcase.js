import React from 'react'
import ProductShowcaseSlider from './client-elements/product-showcase-slider'

const ProductShowcase = () => {
    return (
        <div className='bg-white py-10 px-5'>
            <div className="container mx-auto justify-center items-center">
                <div className='max-w-4xl mx-auto'>
                    <h1 className='uppercase text-2xl'>macrame wall hanging</h1>
                    <h2 className='uppercase text-2xl font-bold pt-3'><span className='pb-2 border-b-4 border-green-300'>Rope crafted Unique </span></h2>
                    <div className="flex gap-5 mt-8">
                        <button className="uppercase border px-4 py-2 text-white bg-green-500 hover:bg-green-400">Buy Now</button>
                        <button className="uppercase border px-4 py-2 hover:text-white bg-gray-200 hover:bg-green-600">Read More</button>
                    </div>
                </div>
                <div className="mt-6">
                    <ProductShowcaseSlider />
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase
