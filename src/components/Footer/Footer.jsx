import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/logo.png";

import { FaInstagram, FaFacebook, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Footer Left */}
        <div className="footer-left">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
          <p>
            25/26, BMT Complex, Malleshwaram, Bangalore - 560025, Karnataka,
            India
          </p>
          <p>Copyright © 2024, Desi Dharti Pvt. Ltd.</p>
        </div>

        {/* Footer Center */}
        <div className="footer-center">
          {/* Services Section */}
          <div className="footer-section">
            <h2 className="footer-title">Services</h2>
            <ul>
              <li>Shop</li>
              <li>Track Your Order</li>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="footer-section">
            <h2 className="footer-title">Policies</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Terms of Service</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>

        {/* Footer Right */}
        <div className="footer-right">
          <h2>Need Help?</h2>
          <button className="contact-us-btn">Contact Us</button>
          <div className="socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGooglePlusG /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
