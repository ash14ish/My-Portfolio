import React from "react";

import Header from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import SkillsDetails from "./components/SkillsDetails/SkillsDetails";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <SkillsDetails />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
