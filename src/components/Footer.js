import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "../Assets/Styles/Footer.css";

const Footer = () => {

  useEffect(() => {
    // ScrollReveal animations
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.footer-menu', { delay: 100 });
    sr.reveal('.footer-social-icons', { delay: 200 });
    sr.reveal('.top-footer p', { delay: 300 });

    // Clean up if necessary
    return () => {
      // Any cleanup logic if ScrollReveal requires it
    };
  }, []);

  return (
    <footer>
      <div className="top-footer">
        <p>KRISHNAKUMAR S</p>
      </div>

      <div className="middle-footer">
        <ul className="footer-menu">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <li className="footer_menu_list" key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-social-icons">
        {/* Add the social media links here */}
        {/* <div className="icon">
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
        </div> */}
        <div className="icon">
          <a href="https://www.linkedin.com/in/krishnakumar-sundararaj-78a263196/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        {/* <div className="icon">
          <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-dribbble"></i>
          </a>
        </div> */}
        <div className="icon">
          <a href="https://github.com/Sundarakrishna10" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>

      <div className="bottom-footer">
        <p>
          Copyright &copy; <a href="#home" style={{ textDecoration: 'none' }}>KRISHNAKUMAR S</a>
          {' - All rights reserved'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
