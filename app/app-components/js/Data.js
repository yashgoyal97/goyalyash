import React from "react";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import "../css/Data.css";
import "../../common-styles.css";
import Projects from "./Projects";

const Data = () => {
  return (
    <div className="flex-col">
      <div className="pt-xxl" id="aboutBlock">
        <About />
      </div>
      {/* <div className="pt-xxl" id="skillsBlock">
        <Skills />
      </div> */}
      <div className="pt-xxl" id="experienceBlock">
        <Experience />
      </div>
      <div className="pt-xxl" id="projectsBlock">
        <Projects />
      </div>
    </div>
  );
};

export default Data;
