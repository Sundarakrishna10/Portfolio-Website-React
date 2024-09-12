import React, { useState, useEffect } from "react";
import "../Assets/Styles/Navbar.css";
import resume from '../Assets/resume/krishna.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Shadow effect on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="header" className={scrollActive ? "shadow-active" : ""}>
      <div className="nav-logo">
        <p className="nav-name">KRISHNAKUMAR S</p>
        {/* <span>.</span> */}
      </div>
      <div className={`nav-menu ${menuOpen ? "responsive" : ""}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">About</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">Projects</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">Contact</a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          <a href={resume} download="krishnakumar-resume.pdf" className="btn" style={{ textDecoration: 'none' }}>
            Download CV <i className="uil uil-file-alt"></i>
          </a>

        </button>
      </div>
      <div className="nav-menu-btn" onClick={toggleMenu}>
        <i className="uil uil-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
