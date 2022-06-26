import React, { useState, useRef } from "react";
import "./Projects.css";
import projectsData from "./projects-data.js";
import { SiNetlify, SiGithub } from "react-icons/si";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectRef = useRef();

  const showAllProjectsHandler = () => {
    setShowAll(!showAll);
    projectRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  const projects = item => (
    <article key={item.id} className="project">
      <div className="project__image">
        <img src={item.image} alt={item.title}></img>
      </div>

      <h3>{item.title}</h3>

      <div className="project__cta">
        <a
          href={item.demo}
          target="_blank"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          <SiNetlify className="project__cta-icon" /> Demo
        </a>

        <a
          className="btn"
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="project__cta-icon" /> Code
        </a>
      </div>
    </article>
  );

  return (
    <section id="projects" ref={projectRef}>
      <h5>Fully Responsive</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {!showAll &&
          projectsData
            .filter((_, i) => i <= 2)
            .map(project => {
              return projects(project);
            })}

        {showAll && projectsData.map(project => projects(project))}
      </div>

      <button className="btn btn-primary" onClick={showAllProjectsHandler}>
        {!showAll ? "Show All" : "Show Less"}
      </button>
    </section>
  );
};

export default Projects;
