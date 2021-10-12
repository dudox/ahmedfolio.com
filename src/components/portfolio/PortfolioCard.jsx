import React from "react";
import FeatherIcon from "feather-icons-react";

const PortfolioCard = ({ data, handleShow }) => {
  return (
    <>
      <div
        className="portfolio-box-01"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay={data.delayAnimation}
      >
        <div className="portfolio-img">
          <div className="portfolio-info">
            <h5>{data.title}</h5>
            <span>{data.subTitle}</span>
          </div>
          <a
            href="#all"
            onClick={() => handleShow(data)}
            className="gallery-link"
          >
            <img
              onClick={() => handleShow(data)}
              src={`img/portfolio/${data.img}.jpg`}
              alt={data.alterText}
            />
          </a>

          <div className="portfolio-icon">
            <a href="#contactus">
              <FeatherIcon icon={"link"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
