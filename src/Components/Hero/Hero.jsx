import React from "react";
import CommercialImg from "../../assets/commercial.jpg";
import HomeImg from "../../assets/home.jpg";
import AutoImg from "../../assets/auto.jpg";
import "./Hero.css"; // make sure to create this file

const Hero = () => {
  const coverages = [
    {
      title: "Commercial Insurance",
      desc: "Keep your business protected from risks with customized plans designed to secure your assets, employees, and operations.",
      img: CommercialImg,
      alt: "Commercial insurance coverage"
    },
    {
      title: "Home Insurance",
      desc: "Safeguard your home and everything in it with reliable coverage that protects against damage, loss, and unforeseen events.",
      img: HomeImg,
      alt: "Home insurance coverage"
    },
    {
      title: "Auto Insurance",
      desc: "Drive with confidence knowing you’re protected from accidents, theft, and unexpected road incidents — wherever life takes you.",
      img: AutoImg,
      alt: "Auto insurance coverage"
    }
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">What can we help you cover?</h1>
        <p className="hero-subtitle">
          From auto and home to commercial insurance, we provide customized plans designed
          to protect what matters most to you.
        </p>
      </div>

      <div className="coverage-grid">
        {coverages.map((item, index) => (
          <div key={index} className="coverage-card">
            <img src={item.img} alt={item.alt} className="coverage-image" />
            <div className="coverage-info">
              <h3 className="coverage-title">{item.title}</h3>
              <p className="coverage-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
