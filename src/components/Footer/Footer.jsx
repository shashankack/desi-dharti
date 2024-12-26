import React from "react";
import "./Footer.css";
import footerVector from "../../assets/footer-vector.png";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-vector">
        </div>
        <div className="footer-left">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
          <p>
            25/26, BMT Complex, Malleshwaram, Bangalore - 560025, Karnataka,
            India
          </p>
          <p>Copyright © 2024, Desi Dharti Pvt. Ltd.</p>
        </div>

        <div className="footer-center">
          <ul>
            <h2>Services</h2>
            <p>Shop</p>
            <p>Track Your Order</p>
            <p>Our Story</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </ul>
          <ul>
            <h2>Policies</h2>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
            <p>Terms of Service</p>
            <p>Sitemap</p>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Need Help?</h2>
          <button className="contact-us-btn">Contact Us</button>
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
