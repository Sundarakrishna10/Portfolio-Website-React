import React from "react";
import ScrollReveal from "scrollreveal";
import "../Assets/Styles/About.css";
import resume from '../Assets/resume/krishna.pdf';

const About = () => {
  React.useEffect(() => {

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".top-header", {});
    sr.reveal(".about-info", { delay: 100 });
    sr.reveal(".skills-box", { delay: 100 });
  }, []);

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I am a dedicated software developer with expertise in MERN stack development. With hands-on experience in building full-stack applications using JavaScript technologies like React.js and Express.js, I have developed robust solutions such as an eCommerce platform and an employee task manager. I am committed to continuous learning and delivering user-friendly, feature-rich web applications. My background in Electrical & Electronics Engineering has equipped me with strong problem-solving skills, which I leverage in my software development journey.
            </p>
            <div className="about-btn">

              <a href={resume} download="krishnakumar-resume.pdf" className="btn" style={{ textDecoration: 'none' }}>
                Download CV <i className="uil uil-file-alt"></i>
              </a>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
              <span>React Material UI</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>Node Js</span>
              <span>Express Js</span>

            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">

              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
