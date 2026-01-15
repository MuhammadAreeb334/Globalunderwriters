import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const LinkItems = (
    <>
      <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
      <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
      <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
      <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      <li>
        <NavLink to="/get-quote" onClick={closeMenu} className="quote-btn">
          Get a Quote
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar">
      
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className="nav-links">{LinkItems}</ul>

      {!menuOpen && (
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
        >
          <FaBars size={24} />
        </button>
      )}

      <div
        id="mobile-drawer"
        className={`drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer-content">
          <div className="drawer-header">
            <FaTimes
              className="close-icon"
              onClick={closeMenu}
              aria-label="Close menu"
            />
          </div>
          <ul className="drawer-links">{LinkItems}</ul>
        </div>
      </div>

      {menuOpen && <div className="drawer-overlay active" onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;
