import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const activeNavToggleHandler = id => {
    setActiveNav(id);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={activeNavToggleHandler.bind(null, "home")}
        className={activeNav === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={activeNavToggleHandler.bind(null, "about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#skills"
        onClick={activeNavToggleHandler.bind(null, "skills")}
        className={activeNav === "skills" ? "active" : ""}
      >
        <VscTools />
      </a>

      <a
        href="#projects"
        onClick={activeNavToggleHandler.bind(null, "projects")}
        className={activeNav === "projects" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>

      <a
        href="#contact"
        onClick={activeNavToggleHandler.bind(null, "contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BsChatDots />
      </a>
    </nav>
  );
};

export default Navbar;
