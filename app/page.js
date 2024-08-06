import Image from "next/image";
import Banner from "./components/home/banner";
import CatBanner from "./components/home/catbanner";
import FeaturedCategories from "./components/home/featuredCategories";
import ParallaxSlider from "./components/home/hero";
import HandMadeProducts from "./components/home/handMadeProducts";
import News from "./components/home/news";
import Review from "./components/home/review";
import MostPopular from "./components/home/mostPopular";
import NewArrivels from "./components/home/newArrivels";
import InstagramPosts from "./components/home/instagramPosts";
import ProductShowcase from "./components/home/productShowcase";

export default function Home() {
  return (
    <>
      <ParallaxSlider />
      <Banner />
      <CatBanner />
      <NewArrivels/>
      <FeaturedCategories />
      <HandMadeProducts/>
      <News/>
      <Review/>
      <MostPopular/>
      <InstagramPosts/>
      <ProductShowcase/>
    </>
  );
}
