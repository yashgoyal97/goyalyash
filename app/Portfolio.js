import React from "react";
import Side from "./app-components/js/Side";
import "./common-styles.css";
import "./Portfolio.css";
import Data from "./app-components/js/Data";

const Portfolio = () => {
  return (
    <div className="app-container full-height">
      <div className="app-side">
        <Side />
      </div>
      <div className="app-main">
        <Data />
      </div>
    </div>
  );
};

export default Portfolio;
