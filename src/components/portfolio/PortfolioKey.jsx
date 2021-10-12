import React from "react";
import FeatherIcon from "feather-icons-react";
const PortfolioKey = ({ content }) => {
  return (
    <div
      className="col-lg-4 m-15px-tb"
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay={content.delayAnimation}
    >
      <div className="feature-box-02 d-flex align-items-center">
        <div className="icon">
          <FeatherIcon
            icon={content.icon}
            size={30}
            style={{ color: "#fff" }}
          />
        </div>
        <div className="media-body">
          <h6>{content.brand}</h6>
          <p>{content.value}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioKey;
