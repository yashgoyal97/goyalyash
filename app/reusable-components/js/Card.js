import React from "react";
import Button from "./Button";
import "../css/Card.css";
import "../../common-styles.css";

const Card = ({
  heading,
  subHeading,
  description,
  image,
  secondaryInfo,
  buttons,
}) => {
  return (
    <div className="border flex-row p-m gap-20">
      <div className="left">
        {image && !secondaryInfo && <img className="card-img" src={image} />}
        {!image && secondaryInfo && (
          <p className="fs-sr color-sec mt-xxs">{secondaryInfo}</p>
        )}
      </div>
      <div className="right flex-col">
        <div className="mb-s">
          <h3>{heading}</h3>
          {subHeading && <p className="mt-xxs color-sec">{subHeading}</p>}
        </div>
        <p className="fs-sr">{description}</p>
        {buttons && (
          <div className="flex-row mt-s gap-5">
            {buttons?.map((button, index) => {
              return <Button buttonText={button.buttonText} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
