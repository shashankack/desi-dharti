import { useEffect, useState, useRef } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide header on scroll down
    } else {
      setIsVisible(true); // Show header on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const isOpening = !prev;
      if (isOpening) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          opacity: 1,
          height: "auto",
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          opacity: 0,
          height: 0,
          ease: "power3.in",
        });
      }
      return isOpening;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    gsap.to(menuRef.current, {
      duration: 0.5,
      opacity: 0,
      height: 0,
      ease: "power3.in",
    });
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

      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="mobile-menu" ref={menuRef}>
        <ul className="nav-list">
          <HashLink smooth to="#home" onClick={closeMenu}>
            Home
          </HashLink>
          <HashLink smooth to="#about" onClick={closeMenu}>
            About Us
          </HashLink>
          <HashLink smooth to="#products" onClick={closeMenu}>
            Product
          </HashLink>
          <HashLink smooth to="#blog" onClick={closeMenu}>
            Blog
          </HashLink>
          <HashLink smooth to="#contact" onClick={closeMenu}>
            Contact Us
          </HashLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
