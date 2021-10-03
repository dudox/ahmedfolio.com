import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

import FeatherIcon from "feather-icons-react";

const SocialShare = [
  // { Social: <FeatherIcon icon={"facebook"} />, link: "https://www.facebook.com/" },
  { Social: <FeatherIcon icon={"linkedin"} />, link: "https://linkedin/in/ahmed-ahmed-3a366016b" },
  { Social: <FeatherIcon icon={"github"} />, link: "https://www.github.com/dudox" },
  { Social: <FeatherIcon icon={"twitter"} />, link: "https://www.twitter.com/trybemark" },
  { Social: <FeatherIcon icon={"calendar"} />, link: "https://www.calendly.com/ahmed-a" },

  // { Social: <FaInstagram />, link: "https://www.instagram.com/" },
 
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://trybemark.com"
              target="_blank"
              rel="noreferrer"
            >
              trybemark
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
