import { useEffect, useState } from "react";
import logo from "../assets/decowall_logo_cropped.png";
import { Link } from "react-router";
import { FiX } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "header-section fixed-header" : "header-section"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="Acity Studio - Architecture & Interior Design Logo" />
          </Link>
        </div>
        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={closeMenu}
        >
          <ul id="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </nav>
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FiX /> : <CiMenuBurger />}
        </button>
      </div>
    </header>
  )
};

export default Header;