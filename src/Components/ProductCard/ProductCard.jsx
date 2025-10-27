import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, description, link }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card-img" />
      <h3 className="product-card-title">{title}</h3>
      <p className="product-card-desc">{description}</p>
      <a href={link} className="product-card-btn">
        Learn More
      </a>
    </div>
  );
};

export default ProductCard;
