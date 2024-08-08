'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductBox from '@/app/components/common/productbox';
import Products from '@/app/components/constants/products';
import { FaThList, FaThLarge, FaBars } from 'react-icons/fa'; // Added FaBars for the hamburger menu
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import Breadcrumb from '../components/shop/breadcrumb';

const categories = [
  { label: 'Dining', href: '/shop/dining' },
  {
    label: 'Women',
    href: '/shop/women',
    childMenu: [
      { label: 'Sharee', href: '/shop/women/sharee' },
      { label: '3 Pic', href: '/shop/women/3_pic' },
      { label: 'Jewelry', href: '/shop/women/jewelry' },
    ],
  },
  {
    label: 'Hand Crafted',
    href: '/shop/hand_crafted',
    childMenu: [
      { label: 'Mirror', href: '/shop/hand_crafted/mirror' },
      { label: 'Wall Hanger', href: '/shop/hand_crafted/wall_hanger' },
      { label: 'Plant Hanger', href: '/shop/hand_crafted/plant_hanger' },
      { label: 'Macrame Wall Hanging', href: '/shop/hand_crafted/macrame_wall_hanging' },
    ],
  },
];

const ShopPage = ({ params }) => {
  const router = useRouter();
  const [grid, setGrid] = useState(4);
  const [sortOption, setSortOption] = useState('popularity');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [activeCategory, setActiveCategory] = useState(params.submenu || '');
  const [activeSubcategory, setActiveSubcategory] = useState(params.childmenu || '');
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

  useEffect(() => {
    if (params.childmenu) {
      setActiveSubcategory(params.childmenu);
    } else if (params.submenu) {
      setActiveCategory(params.submenu);
    }
  }, [params]);

  const handleGridChange = (gridValue) => setGrid(gridValue);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleItemsPerPageChange = (e) => setItemsPerPage(Number(e.target.value));
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory('');
    router.push(`/shop/${category.toLowerCase()}`);
  };
  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
    router.push(`/shop/${activeCategory.toLowerCase()}/${subcategory.toLowerCase().replace(' ', '_')}`);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility

  const filterProducts = () => {
    let filteredProducts = Products;
    if (activeCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === activeCategory);
    }
    if (activeSubcategory) {
      filteredProducts = filteredProducts.filter(product => product.subCategory === activeSubcategory);
    }

    switch (sortOption) {
      case 'popularity':
        filteredProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'averageRating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'latest':
        filteredProducts.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
      case 'priceLowToHigh':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  return (
    <>
      <Breadcrumb />

      <div className="lg:hidden flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className={`w-full lg:w-1/4 p-4 bg-gray-200 border-r border-gray-300 lg:block ${sidebarOpen ? 'block' : 'hidden'}`}>
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            {categories.map(category => (
              <div key={category.label}>
                <h3 className={`text-md font-semibold cursor-pointer ${activeCategory === category.label ? 'text-blue-600' : 'text-gray-700'}`}
                  onClick={() => handleCategoryClick(category.label)}>
                  {category.label}
                </h3>
                {activeCategory === category.label && category.childMenu && (
                  <ul className="pl-4 space-y-2">
                    {category.childMenu.map(subcategory => (
                      <li key={subcategory.label}>
                        <a
                          className={`block p-2 rounded cursor-pointer ${activeSubcategory === subcategory.label ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                          onClick={() => handleSubcategoryClick(subcategory.label)}
                        >
                          {subcategory.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col md:flex-row space-x-4 items-center">
              <label htmlFor="itemsPerPage">Show</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="p-2 border border-gray-300"
              >
                <option value={9}>9</option>
                <option value={12}>12</option>
                <option value={18}>18</option>
                <option value={24}>24</option>
              </select>
            </div>

            <div className="space-x-4 items-center hidden md:flex">
              <button
                className={`p-2 ${grid === 2 ? 'bg-gray-300' : 'bg-white'}`}
                onClick={() => handleGridChange(2)}
              >
                <FaThList />
              </button>
              <button
                className={`p-2 ${grid === 3 ? 'bg-gray-300' : 'bg-white'}`}
                onClick={() => handleGridChange(3)}
              >
                <BsFillGrid3X3GapFill />
              </button>
              <button
                className={`p-2 ${grid === 4 ? 'bg-gray-300' : 'bg-white'}`}
                onClick={() => handleGridChange(4)}
              >
                <TfiLayoutGrid4Alt />
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center space-x-4">
              <label htmlFor="sort">Sort by</label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="p-2 border border-gray-300"
              >
                <option value="popularity">Popularity</option>
                <option value="averageRating">Average Rating</option>
                <option value="latest">Latest</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid grid-cols-1 gap-4 md:${grid === 2 ? 'grid-cols-2' : grid === 3 ? 'grid-cols-3' : grid === 4 ? 'grid-cols-4' : 'grid-cols-1'} 
            sm:grid-cols-2 md:grid-cols-${grid} lg:grid-cols-${grid}`}>
            {filteredProducts.slice(0, itemsPerPage).map((product) => (
              <ProductBox key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default ShopPage;
