import React, { useState } from "react";
import "../css/Footer.css";
import "../../common-styles.css";
import githubGray from "../../img/SocialMedia/github-gray.png";
import githubBlack from "../../img/SocialMedia/github-black.png";
import gmailGray from "../../img/SocialMedia/gmail-gray.png";
import gmailBlack from "../../img/SocialMedia/gmail-black.png";
import instagramGray from "../../img/SocialMedia/instagram-gray.png";
import instagramBlack from "../../img/SocialMedia/instagram-black.png";
import twitterGray from "../../img/SocialMedia/twitter-gray.png";
import twitterBlack from "../../img/SocialMedia/twitter-black.png";
import linkedinGray from "../../img/SocialMedia/linkedin-gray.png";
import linkedinBlack from "../../img/SocialMedia/linkedin-black.png";

const Footer = () => {
  const [images, setImages] = useState([
    {
      name: "github",
      black: githubBlack,
      gray: githubGray,
      current: githubGray,
    },
    {
      name: "instagram",
      black: instagramBlack,
      gray: instagramGray,
      current: instagramGray,
    },
    {
      name: "linkedin",
      black: linkedinBlack,
      gray: linkedinGray,
      current: linkedinGray,
    },
    {
      name: "twitter",
      black: twitterBlack,
      gray: twitterGray,
      current: twitterGray,
    },
    {
      name: "gmail",
      black: gmailBlack,
      gray: gmailGray,
      current: gmailGray,
    },
  ]);

  const showBlack = (e) => {
    const tempState = images.map((image) => {
      image.current = image.name === e.target.id ? image.black : image.current;
      return image;
    });
    setImages(tempState);
  };

  const showGray = (e) => {
    const tempState = images.map((image) => {
      image.current = image.name === e.target.id ? image.gray : image.current;
      return image;
    });
    setImages(tempState);
  };

  return (
    <ul className="contacts-list">
      {images?.map((image, index) => {
        return (
          <li key={index}>
            <img
              id={image.name}
              className="contact-img"
              src={image.current}
              onMouseOver={showBlack}
              onMouseOut={showGray}
            />
          </li>
        );
      })}
      {/* <li>
        <img
          id="github"
          className="contact-img"
          src={images.github}
          onMouseOver={showBlack}
          onMouseOut={showGray}
        />
      </li>
      <li>
        <img className="contact-img" src={images.instagram} />
      </li>
      <li>
        <img className="contact-img" src={images.linkedin} />
      </li>
      <li>
        <img className="contact-img" src={images.twitter} />
      </li>
      <li>
        <img className="contact-img" src={images.gmail} />
      </li> */}
    </ul>
  );
};

export default Footer;
