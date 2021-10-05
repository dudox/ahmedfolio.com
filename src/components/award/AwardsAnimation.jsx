import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "KWASU NACOSS",
    awardFor: "Tech person of the year",
    delayAnimation: "0",
    alt: "Kwasu nacoss Logo"
  },
  {
    img: "a2",
    awardName: "GE Network (KWASU)",
    awardFor: "Winner of 2018 Global Entrepreneur Week",
    delayAnimation: "200",
    alt: "Global Entrepreneur Network Logo"
  },
  {
    img: "a3",
    awardName: "Linux Foundation",
    awardFor: "Scholarship Receipients",
    delayAnimation: "400",
    alt:"Linux Foundation Training Logo"
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt={`${val.alt}`} />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
