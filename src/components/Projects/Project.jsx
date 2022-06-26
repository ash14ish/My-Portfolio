import React, { useState } from "react";
import "./Projects.css";
import projectsData from "./projects-data.js";
import { SiNetlify, SiGithub } from "react-icons/si";

import Img1 from "../../assets/project-1.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Fully Responsive</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {projectsData.map(item => {
          return (
            <article key={item.id} className="project">
              <div className="project__image">
                <img src={item.image} alt={item.title}></img>
              </div>

              <h3>{item.title}</h3>

              <div className="project__cta">
                <a href={item.github} target="_blank" className="btn">
                  <SiGithub className="project__cta-icon" /> Code
                </a>

                <a href={item.demo} target="_blank" className="btn btn-primary">
                  <SiNetlify className="project__cta-icon" /> Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
