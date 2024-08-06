import React from 'react'
import CategorySlider from './client-elements/categorySlider'

const FeaturedCategories = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p className="text-primary text-xl md:text-2xl">Eco-Friendly Collection</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-3">FEATURED CATEGORIES</h2>
          <h5 className="text-base md:text-lg mt-3">Browse all to get amazing creations from our designers!</h5>
        </div>
        <div className="mt-5">
          <CategorySlider/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories