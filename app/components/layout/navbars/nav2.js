'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaEye, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineProduct } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { FaMapLocationDot } from 'react-icons/fa6';
import Image from 'next/image';
import ContactModal from '../../modals/contactModal';

const menuItems = [
  {
    label: 'Product Line',
    href: '/products',
    icon: <AiOutlineProduct />,
    subMenu: [
      { label: 'Dining', href: '/dining' },
      {
        label: 'Women',
        href: '/women',
        childMenu: [
          { label: 'Sharee', href: '/women/sharee' },
          { label: '3 Pic', href: '/women/3_pic' },
          { label: 'Jewellary', href: '/women/jewellary' },
        ],
      },
      {
        label: 'Hand Crafted',
        href: '/hand_crafted',
        childMenu: [
          { label: 'Mirror', href: '/hand_crafted/mirror' },
          { label: 'Wall Hanger', href: '/hand_crafted/wall_hanger' },
          { label: 'Plant Hanger', href: '/hand_crafted/plant_hanger' },
          { label: 'Macrame Wall Hanging', href: '/hand_crafted/macrame_wall_hanging' },
        ],
      },
    ],
  },
];

const Nav2 = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [hoveredChildMenu, setHoveredChildMenu] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    // Reset menu states on route change
    setHoveredMenu(null);
    setClickedMenu(null);
    setHoveredChildMenu(null);
  }, [pathname]); // Dependency array includes pathname to trigger on route change

  const handleMouseEnter = (menuLabel) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setHoveredMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 300); // Delay hiding the menu for 300ms
    setHideTimeout(timeout);
  };

  const handleChildMouseEnter = (childMenuLabel) => {
    setHoveredChildMenu(childMenuLabel);
  };

  const handleChildMouseLeave = () => {
    setHoveredChildMenu(null);
  };

  const handleMenuClick = (menuLabel) => {
    if (clickedMenu === menuLabel) {
      setClickedMenu(null);
      setHoveredMenu(null);
    } else {
      setClickedMenu(menuLabel);
      setHoveredMenu(menuLabel);
    }
  };

  const handleSubMenuClick = (subMenuHref) => {
    // Navigate to Shop page with sub-menu filter
    router.push(`/shop${subMenuHref}`);
    setClickedMenu(null);
    setHoveredMenu(null);
    setHoveredChildMenu(null); // Ensure child menu is hidden
  };

  const handleChildMenuClick = (childMenuHref) => {
    // Navigate to Shop page with child-menu filter
    router.push(`/shop${childMenuHref}`);
    setClickedMenu(null);
    setHoveredMenu(null);
    setHoveredChildMenu(null); // Ensure child menu is hidden
  };

  return (
    <div className="py-4 bg-secendary hidden md:block">
      <div className="container mx-auto flex justify-between items-center gap-5 px-5">
        <div className="flex gap-5 justify-center items-center w-1/3 cursor-pointer">
          <Link href="/" className="flex gap-2 justify-center items-center text-lg text-white cursor-pointer hover:scale-125 hover:transition-transform duration-300"><FaHome /> Home</Link>
          {menuItems.map(item => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMenuClick(item.label)}
            >

              <div className="flex gap-2 justify-center items-center text-lg text-white cursor-pointer">
                {item.icon}
                <span className="group-hover:text-orange-500 transition duration-300">{item.label}</span>
                {item.subMenu && (
                  (hoveredMenu === item.label || clickedMenu === item.label) ? <FaChevronUp className='text-sm mt-1' /> : <FaChevronDown className='text-sm mt-1' />
                )}
              </div>
              {item.subMenu && (hoveredMenu === item.label || clickedMenu === item.label) && (
                <div className={`absolute top-full left-0 mt-2 w-48 bg-primary shadow-lg z-20 transition-all duration-300 ease-in-out transform origin-top ${hoveredMenu === item.label || clickedMenu === item.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px]'}`}>
                  {item.subMenu.map(sub => (
                    <div
                      key={sub.label}
                      className="relative flex justify-left items-center group hover:bg-gray-200"
                      onMouseEnter={() => handleChildMouseEnter(sub.label)}
                      onMouseLeave={() => handleChildMouseLeave(sub.label)}
                      onClick={() => handleSubMenuClick(sub.href)}
                    >
                      <span className="block px-4 py-2 text-gray-800">
                        {sub.label}
                      </span>
                      {sub.childMenu && (
                        <div className={`absolute top-0 left-full mt-0 w-48 bg-primary shadow-lg z-20 transition-all duration-300 ease-in-out transform origin-top ${hoveredChildMenu === sub.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px]'}`}>
                          {sub.childMenu.map(child => (
                            <div
                              key={child.label}
                              onClick={() => handleChildMenuClick(child.href)}
                            >
                              <Link href={child.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                {child.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                      {sub.childMenu && (
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          {hoveredChildMenu === sub.label ? <FaChevronLeft className="text-gray-800 text-sm" /> : <FaChevronRight className="text-gray-800 text-sm" />}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/blog" className="flex gap-2 justify-center items-center text-lg text-white cursor-pointer hover:scale-125 hover:transition-transform duration-300"> Eco Time</Link>

        </div>
        <Link href="/" className='w-1/3' style={{ textAlign: '-webkit-center' }}>
          <Image src="/images/logo.png" alt="Nir Galleria" width='110' height='50' />
        </Link>
        <div className="flex gap-5 justify-center items-center w-1/3">
          <IoSearchOutline className='text-2xl text-white hover:scale-125 hover:transition-transform duration-300' />
          <Link href="/recent-views" className="flex gap-2 justify-center items-center text-lg text-white hover:scale-110 hover:transition-transform duration-300">
            <span className="group-hover:text-orange-500 transition duration-300">Recent Views</span>
          </Link>
          <div><ContactModal /></div>
          <Link href="/location" className='text-lg text-white hover:scale-110 hover:transition-transform duration-300'>Find A Store</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
