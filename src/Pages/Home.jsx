import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs.jsx";
import WhoWeAre from "../Components/WhoWeAre/WhoWeAre.jsx";
import ProductsGrid from "../Components/ProductGrid/ProductsGrid.jsx";
import Newsletter from "../Components/Newsletter/Newsletter.jsx";


const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <ProductsGrid />
      <Newsletter />      
    </div>
  );
};

export default Home;
