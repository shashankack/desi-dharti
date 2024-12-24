import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(10);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [desiDropdownOpen, setDesiDropdownOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen((prev) => !prev);
  };

  const toggleDesiDropdown = () => {
    setDesiDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <HashLink className="logo" smooth to="/">
        <img src={logo} alt="Logo" />
      </HashLink>
      <nav>
        <ul className="nav-list">
          <li>
            <HashLink smooth to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="#about">About Us</HashLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleShopDropdown}
            onMouseLeave={toggleShopDropdown}
          >
            <HashLink smooth to="#shop">
              Shop <span className={`arrow ${shopDropdownOpen ? "open" : ""}`}><RiArrowDownSLine /></span>
            </HashLink>
            {shopDropdownOpen && (
              <ul className="dropdown-menu">
                <li><HashLink smooth to="#milk">Milk</HashLink></li>
                <li><HashLink smooth to="#ghee">Ghee</HashLink></li>
                <li><HashLink smooth to="#buttermilk">Buttermilk</HashLink></li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDesiDropdown}
            onMouseLeave={toggleDesiDropdown}
          >
            <HashLink smooth to="#contact">
              Why Desi Dharti <span className={`arrow ${desiDropdownOpen ? "open" : ""}`}><RiArrowDownSLine /></span>
            </HashLink>
            {desiDropdownOpen && (
              <ul className="dropdown-menu">
                <li><HashLink smooth to="#ourfarm">Our Farm</HashLink></li>
                <li><HashLink smooth to="#ourstory">Our Story</HashLink></li>
                <li><HashLink smooth to="#ourcows">Our Cows</HashLink></li>
              </ul>
            )}
          </li>
          <li>
            <HashLink smooth to="blog">Blog</HashLink>
          </li>
        </ul>
      </nav>
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><HashLink smooth to="#home">Home</HashLink></li>
          <li><HashLink smooth to="#about">About Us</HashLink></li>
          <li><HashLink smooth to="#milk">Milk</HashLink></li>
          <li><HashLink smooth to="#ghee">Ghee</HashLink></li>
          <li><HashLink smooth to="#buttermilk">Buttermilk</HashLink></li>
          <li><HashLink smooth to="#ourfarm">Our Farm</HashLink></li>
          <li><HashLink smooth to="#ourstory">Our Story</HashLink></li>
          <li><HashLink smooth to="#ourcows">Our Cows</HashLink></li>
          <li><HashLink smooth to="#blog">Blog</HashLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
