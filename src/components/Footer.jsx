// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="sg-footer">
      <div className="sg-footer-inner">

        {/* Brand + tagline */}
        <div className="sg-footer-brand">
          <div className="sg-footer-logo">
            <span className="sg-logo-text">ShoppyGlobe</span>
          </div>
          <p className="sg-footer-text">
            We bring your favourite products from across the globe straight to your door. 
            Simple, fast and affordable shopping you can rely on.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sg-footer-col">
          <h4 className="sg-footer-title">Quick Links</h4>
          <ul className="sg-footer-list">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Best Sellers</Link></li>
            <li><Link to="/home">Offers & Deals</Link></li>
            <li><Link to="/home">Contact Us</Link></li>
            <li><Link to="/home">FAQs</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="sg-footer-col">
          <h4 className="sg-footer-title">Need Help?</h4>
          <ul className="sg-footer-list">
            <li><Link to="/home">Delivery Information</Link></li>
            <li><Link to="/home">Return & Refund Policy</Link></li>
            <li><Link to="/home">Payment Methods</Link></li>
            <li><Link to="/home">Track your Order</Link></li>
            <li><Link to="/home">Support</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="sg-footer-col">
          <h4 className="sg-footer-title">Follow Us</h4>
          <ul className="sg-footer-list">
            <li><Link to="/home">Instagram</Link></li>
            <li><Link to="/home">Twitter</Link></li>
            <li><Link to="/home">Facebook</Link></li>
            <li><Link to="/home">YouTube</Link></li>
          </ul>
        </div>
      </div>

      <div className="sg-footer-divider" />

      <div className="sg-footer-bottom">
        Copyright {year} by Yogesh © ShoppyGlobe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
