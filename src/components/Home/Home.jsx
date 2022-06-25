import React from "react";
import "./Home.css";
import ActionButtons from "./ActionButtons";
import MyPic from "../../assets/me.png";

const Home = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ashish</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <ActionButtons />

        <div className="my-pic">
          <img src={MyPic}></img>
        </div>

        <a href="" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
