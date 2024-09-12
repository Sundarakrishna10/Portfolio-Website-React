import React from "react";
import ScrollReveal from "scrollreveal";
import "../Assets/Styles/Project.css";

const Project = () => {
  // Scroll reveal setup
  React.useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});
  }, []);

  // Example project data with URLs
  const projects = [
    {
      title: "React-E commerce-App",
      description: "Using React Js and Tailwind CSS",
      url: "https://e-commerce-react-ecru-zeta.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Using JavaScript and CSS",
      url: "https://sundarakrishna10.github.io/Js-Weather-App/"
    }, {
      title: "Calculator App",
      description: "Using JavaScript and CSS",
      url: "https://sundarakrishna10.github.io/Js-Calculator/"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.title}</h3>
            <label>{project.description}</label>
            <a className="view-btn" href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Add the 'More Projects' button */}
      <div className="more-projects">
        <a
          href="https://github.com/sundarakrishna10"  // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="btn blue-btn"
          style={{ textDecoration: "none" }}
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Project;
