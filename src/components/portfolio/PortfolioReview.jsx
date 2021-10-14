import React from "react";
import FeatherIcon from "feather-icons-react";

const PortfolioReview = ({ content }) => {
  const stars = [];
  for (var i = 0; i < content.stars; i++) {
    stars.push(
      <FeatherIcon
        key={i}
        icon={"star"}
        className="text-warning me-2"
        size={14}
      />
    );
  }
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay={content.delayAnimation}
    >
      <div className="testimonial-01 media">
        <div className="avatar">
          <img
            src={`img/portfolio/${content.img}.jpg`}
            alt="review comments"
          ></img>
        </div>
        <div className="media-body">
          <p>{content.comment}</p>
          <h6>{content.name}</h6>
          <span>{content.role + " at " + content.company}</span>
          <p>{stars}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioReview;
