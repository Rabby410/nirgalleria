"use client";
import React, { useState } from "react";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedSubCategory(null);
  };
  const toggleSubCategory = (subCategory) => {
    setExpandedSubCategory(
      expandedSubCategory === subCategory ? null : subCategory
    );
  };

  return (
    <>
      <div className="flex justify-between px-5 bg-secendary">
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl p-4 text-white focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        <div>
          <Image src="/images/logo.png" alt="logo" width="60" height="100"  className="pt-2" />
          {/* <img src="./images/logo.png" alt="logo" className="w-[60px] pt-2" /> */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 duration-300 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white w-64 shadow-lg">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-3xl p-4 text-primary self-end"
          >
            <HiX />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col mt-6">
            <Link
              href="/"
              className="p-4 text-lg font-semibold"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="p-4 text-lg font-semibold"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="p-4 text-lg font-semibold"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/location"
              className="p-4 text-lg font-semibold"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {/* E-commerce specific links */}
            <div
              className="p-4 text-lg font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("shop")}
            >
              Product Line
              {expandedCategory === "shop" ? (
                <HiChevronUp />
              ) : (
                <HiChevronDown />
              )}
            </div>
            {expandedCategory === "shop" && (
              <div className="pl-8">
                <div
                  className="p-3 text-md flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSubCategory("category1")}
                >
                  <Link href="/shop/women">Women Attire</Link>
                  {expandedSubCategory === "category1" ? (
                    <HiChevronUp />
                  ) : (
                    <HiChevronDown />
                  )}
                </div>
                {expandedSubCategory === "category1" && (
                  <div className="pl-6 flex flex-col">
                    <Link
                      href="/shop/jewellary"
                      className="p-2 text-sm"
                      onClick={toggleMenu}
                    >
                      Jewellary
                    </Link>
                    <Link
                      href="/shop/sharee"
                      className="p-2 text-sm"
                      onClick={toggleMenu}
                    >
                      Saree
                    </Link>
                    <Link
                      href="/shop/3-pic"
                      className="p-2 text-sm"
                      onClick={toggleMenu}
                    >
                      3 Pis
                    </Link>
                  </div>
                )}
                <div
                  className="p-3 text-md flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSubCategory("category2")}
                >
                  <Link href="/shop/dinning">Dinning</Link>
                  {expandedSubCategory === "category2" ? (
                    <HiChevronUp />
                  ) : (
                    <HiChevronDown />
                  )}
                </div>
                {expandedSubCategory === "category2" && (
                  <div className="pl-6 flex flex-col">
                    <Link
                      href="/shop/table-runner"
                      className="p-2 text-sm"
                      onClick={toggleMenu}
                    >
                      Table Runner
                    </Link>
                  </div>
                )}
                <div
                  className="p-3 text-md flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSubCategory("category3")}
                >
                 <Link href="/shop/hand_crafted">Hand Crafted</Link>
                  {expandedSubCategory === "category3" ? (
                    <HiChevronUp />
                  ) : (
                    <HiChevronDown />
                  )}
                </div>
                {expandedSubCategory === "category3" && (
                  <div className="pl-6 flex flex-col">
                    <Link
                      href="/shop/hand_crafted"
                      className="p-2 text-sm"
                      onClick={toggleMenu}
                    >
                      Mirror
                    </Link>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;