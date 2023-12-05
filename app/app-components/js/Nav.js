import React, { useState } from "react";
import "../../common-styles.css";
import "../css/Nav.css";
import { annotate } from "rough-notation";

const Nav = () => {
  const [annotations, setAnnotations] = useState([]);

  function resetAnnotations() {
    annotations?.forEach((annotation) => {
      if (annotation.isShowing()) {
        annotation.remove();
      }
    });
  }

  function handleNavigate(e) {
    if (annotations?.length) {
      resetAnnotations();
    }
    const selectedLink = e.target;
    const links = document?.querySelectorAll(".nav-link");
    for (const link of links.values()) {
      if (link.id === selectedLink.id) {
        const annotation = annotate(link, {
          type: "highlight",
          color: "darkolivegreen",
          iterations: 2
        });
        setAnnotations([annotation]);
        annotation.show();
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  return (
    <nav>
      <ul>
        <li className="mb-l" onClick={handleNavigate}>
          <a className="nav-link" id="about" href="#aboutBlock">
            ABOUT
          </a>
        </li>
        {/* <li className="mb-l" onClick={handleNavigate}>
          <a className="nav-link" id="skills" href="#skillsBlock">
            SKILLS
          </a>
        </li> */}
        <li className="mb-l" onClick={handleNavigate}>
          <a className="nav-link" id="experience" href="#experienceBlock">
            EXPERIENCE
          </a>
        </li>
        <li onClick={handleNavigate}>
          <a className="nav-link" id="projects" href="#projectsBlock">
            PROJECTS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
