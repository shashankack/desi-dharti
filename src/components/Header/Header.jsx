import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="header">
      <HashLink className="logo">
        <img src={logo} />
      </HashLink>

      <nav>
        <ul className="nav-list">
          <HashLink smooth to="#home">
            Home
          </HashLink>
          <HashLink smooth to="#about">
            About Us
          </HashLink>
          <HashLink smooth to="#product">
            Product
          </HashLink>
          <HashLink smooth to="#blog">
            Blog
          </HashLink>
          <HashLink smooth to="#contact">
            Contact Us
          </HashLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
