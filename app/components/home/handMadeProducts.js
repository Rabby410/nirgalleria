import Link from "next/link";
import React from "react";

const HandMadeProducts = () => {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <p className="text-primary text-2xl">WELCOME TO ECO-LIFE</p>
            <h2 className="text-3xl font-semibold mt-3">HAND MADE PRODUCTS</h2>
            <h5 className="text-lg mt-3">
              May your visit to us be your first step towards sustainable
              living!
            </h5>
          </div>
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./images/home/hand-made/h1.png"
                  alt="hand made"
                  className="bg-gray-200 p-5 rounded-full -mb-5 z-10"
                />
                <div className="p-5 border-2 border-secendary rounded-xl border-dotted text-center h-[165px] w-[80%]">
                  <h3 className="font-bold my-3">ARECA NUT SERVING</h3>
                  <h5 className="text-sm mb-3">
                    Offering Areca Nut Leaf serving utensils; Biodegradable made
                    of naturally fallen leaves !
                  </h5>
                </div>
                <Link
                  href=""
                  className="bg-secendary text-secendary px-5 py-2 -mt-5 hover:scale-105 delay-100 duration-300 transition-transform    "
                >
                  Click Me
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./images/home/hand-made/h2.png"
                  alt="hand made"
                  className="bg-gray-200 p-5 rounded-full -mb-5 z-10"
                />
                <div className="p-5 border-2 border-secendary rounded-xl border-dotted text-center h-[165px] w-[80%]">
                  <h3 className="font-bold my-3">JUTE COTTON</h3>
                  <h5 className="text-sm mb-3">
                    With jute-cotton fabrics, you will experience the true taste
                    of jute-diversified products !
                  </h5>
                </div>
                <Link
                  href=""
                  className="bg-secendary text-secendary px-5 py-2 -mt-5 hover:scale-105 duration-300 transition-transform    "
                >
                  Click Me
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./images/home/hand-made/h3.png"
                  alt="hand made"
                  className="bg-gray-200 p-5 rounded-full -mb-5 z-10"
                />
                <div className="p-5 border-2 border-secendary rounded-xl border-dotted text-center h-[165px] w-[80%]">
                  <h3 className="font-bold my-3">CLAY BOX</h3>
                  <h5 className="text-sm mb-3">
                    With clay; we try to figure out our passion! Our artisans
                    develop artifacts for you !
                  </h5>
                </div>
                <Link
                  href=""
                  className="bg-secendary text-secendary px-5 py-2 -mt-5 hover:scale-105 duration-300 transition-transform    "
                >
                  Click Me
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="./images/home/hand-made/h4.png"
                  alt="hand made"
                  className="bg-gray-200 p-5 rounded-full -mb-5 z-10"
                />
                <div className="p-5 border-2 border-secendary rounded-xl border-dotted text-center h-[165px] w-[80%]">
                  <h3 className="font-bold my-3">HANDMADE RUGS</h3>
                  <h5 className="text-sm mb-3">
                    Check out our handmade rug selection for the very best in
                    unique, handmade pieces.
                  </h5>
                </div>
                <Link
                  href=""
                  className="bg-secendary text-secendary px-5 py-2 -mt-5 hover:scale-105 duration-300 transition-transform    "
                >
                  Click Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandMadeProducts;