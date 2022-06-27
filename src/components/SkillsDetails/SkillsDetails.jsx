import React from "react";
import "./SkillsDetails.css";
import { SiJavascript } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";

import { AiFillCaretRight } from "react-icons/ai";
import SKILLS_DATA from "./SKILLS_DATA.js";

const SkillsDetails = () => {
  return (
    <section id="skillsdetails">
      <h5>What I know</h5>
      <h2>About My Skills</h2>

      <div className="container container__details">
        <article className="frontend__details">
          <SiJavascript id="js" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.js.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                <AiFillCaretRight />
                <h5> {skill}</h5>
              </li>
            ))}
          </ul>
        </article>

        <article className="frontend__details">
          <RiReactjsFill id="react" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.react.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                <AiFillCaretRight />
                <h5> {skill}</h5>
              </li>
            ))}
          </ul>
        </article>

        <article className="frontend__details">
          <IoLogoHtml5 id="html" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.html.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                <AiFillCaretRight />
                <h5> {skill}</h5>
              </li>
            ))}
          </ul>
        </article>

        <article className="frontend__details">
          <IoLogoCss3 id="css" className="frontend__details-icon" />

          <ul>
            {SKILLS_DATA.css.map((skill, index) => (
              <li key={index} className="frontend__details-list">
                <AiFillCaretRight />
                <h5> {skill}</h5>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default SkillsDetails;
