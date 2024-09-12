import React, { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "../Assets/Styles/Home.css";
import profileImg from '../Assets/image/krishna-.jpg';
import resume from '../Assets/resume/krishna.pdf'; // Import the resume file

// HomeSection Component
const Home = () => {
  // Use Effect for Typed.js
  useEffect(() => {
    const typingEffect = new Typed('.typedText', {
      strings: ["MERN Developer"],
      loop: true,
      typeSpeed: 200,  // Adjusted for smoother typing
      backSpeed: 50,  // Adjusted back speed
      backDelay: 1500,  // Reduced delay for a smoother loop
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.featured-text-card', {});
    ScrollReveal().reveal('.featured-name', { delay: 100 });
    ScrollReveal().reveal('.featured-text-info', { delay: 200 });
    ScrollReveal().reveal('.featured-text-btn', { delay: 200 });
    ScrollReveal().reveal('.social_icons', { delay: 200 });
    ScrollReveal().reveal('.featured-image', { delay: 300 });

    const sections = document.querySelectorAll('section[id]');

    // Scroll Active function
    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        // Use correct template literals
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav-menu a[href*="${sectionId}"]`).classList.add('active-link');
        } else {
          document.querySelector(`.nav-menu a[href*="${sectionId}"]`).classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Cleanup on unmount
    return () => {
      typingEffect.destroy();
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>KRISHNAKUMAR S</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            "Enthusiastic MERN stack developer with a strong foundation in creating dynamic and responsive web applications. Eager to apply my skills in real-world projects and contribute to innovative, user-friendly solutions."
          </p>
        </div>
        <div className="featured-text-btn">
          {/* Button for navigating to the contact section */}
          <a href="#contact" className="btn blue-btn" style={{ textDecoration: 'none' }}>Hire Me</a>

          {/* Button for viewing the resume */}
          <a href={resume} target="_blank" rel="noopener noreferrer" className="btn" style={{ textDecoration: 'none' }}>
            View CV <i className="uil uil-eye"></i>
          </a>
        </div>

        <div className="social_icons">
          {/* <div className="icon">
           
            <i className="uil uil-instagram"></i>
          </div> */}
          <div className="icon">
            <a href="https://www.linkedin.com/in/krishnakumar-sundararaj-78a263196/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
          {/* <div className="icon">
            <i className="uil uil-dribbble"></i>
          </div> */}
          <div className="icon">
            <a href="https://github.com/Sundarakrishna10" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={profileImg} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default Home;
