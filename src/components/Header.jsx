import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-ff-bg.webp";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header-section fixed-header" : "header-section"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="Acity Studio - Architecture & Interior Design Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
        </nav>
        <button className="menu-icon"><FiMenu /></button>
      </div>
    </header>
  )
};

export default Header;