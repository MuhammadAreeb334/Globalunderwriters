import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-intro">
          Global Underwriters provides specialty niche products and service
          solutions through industry’s leading insurance companies and program
          administrators. We currently focus on serving gas stations, truck
          stops, convenience stores, repair shops, car washes, hotels, motels,
          restaurants, shopping centers, dry cleaners & laundry mats, and other
          small to medium-sized businesses.
        </p>

        <div className="divider"></div>

        <div className="about-section-content">
          <h2 className="about-subtitle">Products & Services</h2>
          <p className="about-text">
            Our core product is the <strong>Commercial Package</strong>. Coverage differs depending
            upon the specific package, but may consist of:
          </p>

          <ul className="about-list">
            <li>Commercial Property</li>
            <li>General Liability</li>
            <li>Equipment Breakdown</li>
            <li>Crime & Fidelity</li>
            <li>Liquor Liability</li>
            <li>Hired & Non-Owned Auto</li>
          </ul>

          <p className="about-text">
            The following coverages are also offered on a <strong>Monoline basis</strong>:
          </p>

          <ul className="about-list">
            <li>Property and Liability</li>
            <li>Worker's Compensation</li>
            <li>Umbrella</li>
            <li>Commercial Auto</li>
            <li>EPLI</li>
            <li>Storage Tank Pollution Liability</li>
          </ul>

          <p className="about-contact">
            Please <a href="/contact">contact us</a> to request more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
