import React from "react";
import FeatherIcon  from 'feather-icons-react';

const SocialShare = [
  { Social: <FeatherIcon icon={"mail"} size={20} />, link: "mailto:work@ahmedfolio.com" },
  { Social: <FeatherIcon icon={"phone"} size={20} />, link: "tel:+2347017723208" },
  { Social: <FeatherIcon icon={"twitter"} size={20} />, link: "https://twitter.com/meedjnr" },
  { Social: <FeatherIcon icon={"linkedin"} size={20} />, link: "https://www.linkedin.com/in/ahmed-ahmed-3a366016b" },
  { Social: <FeatherIcon icon={"github"} size={20}/>, link: "https://www.github.com/dudox" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
