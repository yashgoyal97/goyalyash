import React from "react";
import "../css/Side.css";
import "../../common-styles.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Side = () => {
  return (
    <div className="flex-col full-height gap-20">
      <div className="side-header">
        <Header />
      </div>
      <div className="side-nav">
        <Nav />
      </div>
      <div className="side-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Side;
