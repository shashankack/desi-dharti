import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide header on scroll down
    } else {
      setIsVisible(true); // Show header on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <HashLink className="logo" smooth to="#home">
        <img src={logo} alt="Logo" />
      </HashLink>

      <nav>
        <ul className="nav-list">
          <HashLink smooth to="#home">
            Home
          </HashLink>
          <HashLink smooth to="#about">
            About Us
          </HashLink>
          <HashLink smooth to="#products">
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
