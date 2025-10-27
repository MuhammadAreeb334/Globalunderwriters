import React from "react";
import { Link } from "react-router-dom";
import "./ProductsGrid.css";

import GasStationImg from "../../assets/gasstation.jpg";
import HotelImg from "../../assets/hotel.jpg";
import RestaurantImg from "../../assets/restaurant.jpg";
import ShoppingImg from "../../assets/shoppingcenter.jpg";
import DryCleanerImg from "../../assets/drycleaner.jpg";
import LiquorImg from "../../assets/liquorstore.jpg";
import SmokeShopImg from "../../assets/smokeshop.jpg";
import RetailStoreImg from "../../assets/retailstore.jpg";

const products = [
  {
    title: "Gas Station",
    img: GasStationImg,
    desc: "Insurance solutions for gas stations, ensuring coverage for property, liability, and employee protection.",
  },
  {
    title: "Hotel / Motel",
    img: HotelImg,
    desc: "Comprehensive insurance for hospitality businesses, covering guest liabilities, property, and staff safety.",
  },
  {
    title: "Restaurant",
    img: RestaurantImg,
    desc: "Custom restaurant insurance to protect your business from property damage, liability, and food service risks.",
  },
  {
    title: "Shopping Center",
    img: ShoppingImg,
    desc: "Full coverage for shopping centers including property, liability, and tenant risk management.",
  },
  {
    title: "Dry Cleaner",
    img: DryCleanerImg,
    desc: "Insurance for dry cleaners protecting against fire, customer claims, and business interruptions.",
  },
  {
    title: "Liquor Store",
    img: LiquorImg,
    desc: "Comprehensive protection for liquor stores, including general liability, property, and liquor liability coverage.",
  },
  {
    title: "Smoke Shop",
    img: SmokeShopImg,
    desc: "Tailored coverage for smoke shops with options for property damage, theft, and product liability.",
  },
  {
    title: "Retail Store",
    img: RetailStoreImg,
    desc: "Insurance designed for all types of retail stores covering property, workers, and liability risks.",
  },
];

const ProductsGrid = ({ showAll = false }) => {
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="products-grid-section">
      <h2 className="products-grid-title">Our Products</h2>
      <div className="products-grid">
        {displayedProducts.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{item.title}</h3>
              <p className="product-desc">{item.desc}</p>
              <Link to="/get-quote" className="product-btn">
                Get a Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="view-all-container">
          <Link to="/products" className="view-all-btn">
            View All Products →
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductsGrid;
