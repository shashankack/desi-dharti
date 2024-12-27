import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
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

  const location = useLocation(); // Get the current route

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
    setIsMenuOpen((prev) => !prev);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen((prev) => !prev);
  };

  const toggleDesiDropdown = () => {
    setDesiDropdownOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShopDropdownOpen(false);
    setDesiDropdownOpen(false);
  };

  // Scroll to the top when the route changes, except for hash links
  /* useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]); */

  // Reset mobile menu and dropdown states when resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <a className="logo" href="/">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <HashLink smooth to="#about-us">
              About Us
            </HashLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleShopDropdown}
            onMouseLeave={toggleShopDropdown}
          >
            <a href="#shop">
              Shop{" "}
              <span className={`arrow ${shopDropdownOpen ? "open" : ""}`}>
                <RiArrowDownSLine />
              </span>
            </a>
            {shopDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#milk">Milk</a>
                </li>
                <li>
                  <a href="#ghee">Ghee</a>
                </li>
                <li>
                  <a href="#buttermilk">Buttermilk</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDesiDropdown}
            onMouseLeave={toggleDesiDropdown}
          >
            <a href="#contact">
              Why Desi Dharti{" "}
              <span className={`arrow ${desiDropdownOpen ? "open" : ""}`}>
                <RiArrowDownSLine />
              </span>
            </a>
            {desiDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#ourfarm">Our Farm</a>
                </li>
                <li>
                  <a href="#ourstory">Our Story</a>
                </li>
                <li>
                  <a href="#ourcows">Our Cows</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
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
      <nav className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-list-mobile">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <HashLink smooth to="#about-us" onClick={closeMenu}>
              About
            </HashLink>
          </li>
          <li>
            <div
              onClick={toggleShopDropdown}
              className="dropdown-toggle-mobile"
            >
              Shop{" "}
              <RiArrowDownSLine
                className={`arrow ${shopDropdownOpen ? "open" : ""}`}
              />
            </div>
            {shopDropdownOpen && (
              <ul className="dropdown-menu-mobile">
                <li>
                  <a href="#milk" onClick={closeMenu}>
                    Milk
                  </a>
                </li>
                <li>
                  <a href="#ghee" onClick={closeMenu}>
                    Ghee
                  </a>
                </li>
                <li>
                  <a href="#buttermilk" onClick={closeMenu}>
                    Buttermilk
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              onClick={toggleDesiDropdown}
              className="dropdown-toggle-mobile"
            >
              Why Kesariya Farm{" "}
              <RiArrowDownSLine
                className={`arrow ${desiDropdownOpen ? "open" : ""}`}
              />
            </div>
            {desiDropdownOpen && (
              <ul className="dropdown-menu-mobile">
                <li>
                  <a href="#ourfarm" onClick={closeMenu}>
                    Our Farm
                  </a>
                </li>
                <li>
                  <a href="#ourstory" onClick={closeMenu}>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#ourcows" onClick={closeMenu}>
                    Our Cows
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="blog" onClick={closeMenu}>
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
