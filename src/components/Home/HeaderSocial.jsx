import React from "react";
import { FaGithub, FaSkype } from "react-icons/fa";
import { BsLinkedin, BsSkype } from "react-icons/bs";
import { GrSkype } from "react-icons/gr";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ash14ish/" target="_blank">
        <BsLinkedin />
      </a>

      <a href="https://github.com/ash14ish" target="_blank">
        <FaGithub />
      </a>

      <a href="https://join.skype.com/invite/yApaeI1vgreD" target="_blank">
        <GrSkype />
      </a>
    </div>
  );
};

export default HeaderSocial;
