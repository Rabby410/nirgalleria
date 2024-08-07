'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome, FaEye, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";

const menuItems = [
  {
    label: 'Home',
    href: '/',
    icon: <FaHome />
  },
  {
    label: 'Product Line',
    href: '/products',
    icon: <AiOutlineProduct />,
    subMenu: [
      { label: 'Sub Menu 1', href: '/products/sub-menu-1' },
      {
        label: 'Sub Menu 2',
        href: '/products/sub-menu-2',
        childMenu: [
          { label: 'Child Menu 1', href: '/products/sub-menu-2/child-menu-1' },
          { label: 'Child Menu 2', href: '/products/sub-menu-2/child-menu-2' }
        ]
      },
      { label: 'Sub Menu 3', href: '/products/sub-menu-3' }
    ]
  },
  {
    label: 'Recent Views',
    href: '/recent-views',
    icon: <FaEye />
  },
  {
    label: 'Contact Us',
    href: '/contact',
    icon: <FaMapLocationDot />
  }
];

const Nav2 = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [hoveredChildMenu, setHoveredChildMenu] = useState(null);

  const handleMouseEnter = (menuLabel) => {
    setHoveredMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    if (!clickedMenu) {
      setHoveredMenu(null);
      setHoveredChildMenu(null);
    }
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

  return (
    <div className="py-1 bg-secondary hidden md:block">
      <div className="container mx-auto flex justify-between items-center gap-5 px-5">
        <div className="flex gap-5 justify-center items-center">
          {menuItems.map(item => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMenuClick(item.label)}
            >
              <div className="flex gap-2 justify-center items-center text-lg cursor-pointer">
                {item.icon}{item.label}
                {item.subMenu && (
                  (hoveredMenu === item.label || clickedMenu === item.label) ? <FaChevronUp /> : <FaChevronDown />
                )}
              </div>
              {item.subMenu && (hoveredMenu === item.label || clickedMenu === item.label) && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg z-10">
                  {item.subMenu.map(sub => (
                    <div
                      key={sub.label}
                      className="relative flex justify-left items-center"
                      onMouseEnter={() => handleChildMouseEnter(sub.label)}
                      onMouseLeave={handleChildMouseLeave}
                    >
                      <Link href={`/shop?category=${sub.href}`} className="block px-4 py-2 hover:bg-gray-200">
                        {sub.label}
                      </Link>
                      {sub.childMenu && hoveredChildMenu === sub.label && (
                        <div className="absolute top-0 left-full mt-0 w-48 bg-white shadow-lg z-10">
                          {sub.childMenu.map(child => (
                            <Link key={child.label} href={`/shop?category=${child.href}`} className="block px-4 py-2 hover:bg-gray-200">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                      {sub.childMenu && (
                        hoveredChildMenu === sub.label ? <FaChevronUp /> : <FaChevronDown />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link href="/">
          <img src="/images/logo.png" alt="Nir Galleria" className="h-20" />
        </Link>
        <div className="flex gap-5 justify-center items-center">
          <Link href="/recent-views" className="flex gap-2 justify-center items-center text-lg">
            <FaEye />Recent Views
          </Link>
          <Link href="/contact" className="flex gap-2 justify-center items-center text-lg">
            <FaMapLocationDot />Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
