import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const highlights = [
    { icon: "🏢", text: "Specialized in commercial insurance" },
    { icon: "🛡️", text: "Serving small & medium businesses since 1996" },
    { icon: "🍽️", text: "Insurance for hotels, restaurants, gas stations, and more" },
    { icon: "🤝", text: "Trusted coverage with personalized service" },
  ];

  return (
    <section className="who-we-are">
      <div className="section-intro">
        <h2>Who We Are</h2>
        <p>
          Global Underwriters has been providing commercial insurance services
          to specific industries since 1996. Our specialty includes insurance
          for gas stations, hotels & motels, restaurants, shopping centers,
          and other small to medium businesses.
        </p>
      </div>

      <div className="who-cards">
        {highlights.map((item, index) => (
          <div className="who-card" key={index}>
            <div className="who-card-icon">{item.icon}</div>
            <p className="who-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
