'use client'
import React, { useState } from 'react';
import Products from '../../constants/products';
import ProductBox from '../../common/productbox';

const NewArrivelsTab = () => {
    const [activeTab, setActiveTab] = useState('new');

  const filteredProducts = Products.filter(product => product.categories.includes(activeTab));

  return (
    <div className="pt-10">
      <div className="flex justify-center mb-5">
        {['new', 'featured', 'top-rated'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 mx-2 text-sm md:text-lg font-semibold ${activeTab === tab ? 'text-white bg-secendary' : 'text-third bg-white'} rounded-lg shadow-lg transition`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivelsTab