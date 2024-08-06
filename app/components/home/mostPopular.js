import React from "react";
import MostPopularTab from "./client-elements/most-popular-tab";

const MostPopular = () => {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <p className="text-primary text-2xl">Feel the vibe ! Be Trendy !</p>
            <h2 className="text-3xl font-semibold mt-3">
              Most Popular Products
            </h2>
            <h5 className="text-lg mt-3">
              Give your very own space HOME a fresh makeover with our hot sold
              products
            </h5>
          </div>
          <div className="mt-5">
            <MostPopularTab />
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;