import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Global Underwriters Logo" />
          <p className="footer-tagline">
            Protecting businesses and families with reliable insurance since 1996.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <Link to="/products">Gas Station</Link>
            <Link to="/products">Hotel Motel</Link>
            <Link to="/products">Restaurant</Link>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <Link to="/get-quote" className="quote-btn-footer">Get a Quote</Link>
            <Link to="/newsletter">Newsletter</Link>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Global Underwriters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
