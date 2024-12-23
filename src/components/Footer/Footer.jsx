import React from "react";
import "./Footer.css";
import footerVector from "../../assets/footer-vector.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-vector">
          <img src={footerVector} />
        </div>
        <div className="footer-logo">
          <h2>Footer Logo</h2>
        </div>
        <div className="footer-left">
          <h2>Footer Left</h2>
          <p>Footer Left Content</p>
        </div>
        <div className="footer-right">
          <h2>Footer Right</h2>
          <p>Footer Right Content</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
