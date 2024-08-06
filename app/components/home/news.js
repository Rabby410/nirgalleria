import React from "react";
import NewsSlider from "./client-elements/newsSlider";

const News = () => {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <p className="text-primary text-2xl">SPECIAL EDITION</p>
            <h2 className="text-3xl font-semibold mt-3">THE ECO TIMES</h2>
            <h5 className="text-lg mt-3">
              A unique blog that helps you to adopt sustainable living; Enjoy !
            </h5>
          </div>
          <NewsSlider/>
        </div>
      </div>
    </>
  );
};

export default News;