import React from "react";


import FeatherIcon from "feather-icons-react";

const SocialShare = [
  { Social: <FeatherIcon icon={"phone"} size={18} />, link: "tel:+2347017723208" },
  { Social: <FeatherIcon icon={"mail"} size={18} />, link: "mailto:work@ahmedfolio.com" },
  { Social: <FeatherIcon icon={"twitter"} size={18} />, link: "https://twitter.com/meedjnr" },
  { Social: <FeatherIcon icon={"linkedin"} size={18} />, link: "https://linkedin/in/ahmed-ahmed-3a366016b" },
  { Social: <FeatherIcon icon={"github"} size={18} />, link: "https://github.com/dudox" },

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
              href="https://ahmedfolio.com"
              target="_blank"
              rel="noreferrer"
            >
              ahmedfolio.com
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
