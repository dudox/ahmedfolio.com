import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "PHP / JavaScript / HTML5 / CSS / SCSS / C ",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
    type: "Languages"
  },
  {
    name: "Laravel / React JS / Node JS / Lumen / Flutter ",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
    type: "Frameworks"
  },
  {
    name: "Docker / Kubernetes / EC2 / Beanstalk / Cloudflare",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
    type:"Cloud Services"
  },
  {
    name: "MySQL / MongoDB / PostgreSQL / Firebase",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
    type: "Databases"
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <span className="languages">({skill.type})</span>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
