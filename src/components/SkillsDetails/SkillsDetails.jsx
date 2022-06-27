import React from "react";
import "./SkillsDetails.css";
import { SiJavascript } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
// import SKILLS_DATA from "./SKILLS_DATA.js";

const SkillsDetails = () => {
  return (
    <section id="skillsdetails">
      <h5>What I know</h5>
      <h2>About My Skills</h2>

      <div className="container container__details">
        <article className="frontend_details">
          <SiJavascript id="js" className="frontend_details-icon" />

          <ul>
            {/* {SKILLS_DATA.js.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))} */}
          </ul>
        </article>

        <article className="frontend_details">
          <RiReactjsFill id="react" className="frontend_details-icon" />
        </article>

        <article className="frontend_details">
          <IoLogoHtml5 id="html" className="frontend_details-icon" />
        </article>

        <article className="frontend_details">
          <IoLogoCss3 id="css" className="frontend_details-icon" />
        </article>
      </div>
    </section>
  );
};

export default SkillsDetails;
