import React from "react";
import Card from "../../reusable-components/js/Card";
import INGSuperImg from "../../img/ING_Super.png";

const Experience = () => {
  return (
    <>
      <div className="flex-col gap-15">
        <Card
          heading="HCL Technologies Ltd."
          subHeading="Senior Software Engineer"
          description="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship."
          image={INGSuperImg}
          buttons={[
            { buttonText: "JavaScript" },
            { buttonText: "React" },
            { buttonText: "HTML/CSS" },
            { buttonText: "SQL" },
            { buttonText: "Java" },
          ]}
        />
        <Card
          heading="HCL Technologies Ltd."
          subHeading="Senior Software Engineer"
          description="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship."
          secondaryInfo="2021 - PRESENT"
          buttons={[
            { buttonText: "JavaScript" },
            { buttonText: "React" },
            { buttonText: "SCSS" },
          ]}
        />
        <Card
          heading="HCL Technologies Ltd."
          subHeading="Senior Software Engineer"
          description="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship."
          secondaryInfo="2019 - 2021"
          buttons={[
            { buttonText: "JavaScript" },
            { buttonText: "React" },
            { buttonText: "React" },
          ]}
        />
        <Card
          heading="HCL Technologies Ltd."
          subHeading="Senior Software Engineer"
          description="Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship."
          image={INGSuperImg}
          buttons={[
            { buttonText: "JavaScript" },
            { buttonText: "React" },
            { buttonText: "HTML/CSS" },
            { buttonText: "SQL" },
            { buttonText: "Java" },
          ]}
        />
      </div>
    </>
  );
};

export default Experience;
