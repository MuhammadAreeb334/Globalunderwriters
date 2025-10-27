import React from "react";
import { FaHeadset, FaBolt, FaShieldAlt, FaComments } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaComments />,
      title: "Experienced Agents",
      text: "Work with licensed professionals who understand your needs and guide you to the right coverage.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Claims Process",
      text: "We handle your claims quickly and efficiently so you can recover without unnecessary stress.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Coverage",
      text: "Reliable protection designed to give you peace of mind in every situation.",
    },
    {
      icon: <FaHeadset />,
      title: "Personalized Assistance",
      text: "Our team takes time to craft insurance solutions that truly fit your lifestyle.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us?</h2>
        <p className="why-subtitle">
          We deliver reliable insurance coverage backed by years of experience
          and customer trust.
        </p>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{feature.icon}</div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
