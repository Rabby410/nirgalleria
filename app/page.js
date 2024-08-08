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
import MotoBanner from "./components/home/motoBanner";
import Newsletter from "./components/home/newsletter";
import BagShowcase from "./components/home/bagShowcase";
import Nav3 from "./components/home/catslider";

export default function Home() {
  return (
    <>
      <Nav3 />
      <ParallaxSlider />
      <Banner />
      <CatBanner />
      <NewArrivels />
      <FeaturedCategories />
      <HandMadeProducts />
      <News />
      <Review />
      <MostPopular />
      <InstagramPosts />
      <ProductShowcase />
      <MotoBanner />
      <BagShowcase />
      <Newsletter />
    </>
  );
}
