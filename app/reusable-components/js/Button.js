import React from "react";
import "../css/Button.css";
import "../../common-styles.css";

const Button = ({ buttonText }) => {
  return <button className="custom-btn p-xs fs-sr">{buttonText}</button>;
};

export default Button;
