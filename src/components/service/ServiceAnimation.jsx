import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web & App Development.",
    descriptions: `I have, over the years developed responsive creative web and mobile applications in areas such as
    ecommerce, smart systems, B2B and
    many more`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "DevOps & Cloud Consulting",
    descriptions: `I provide cloud consultting, helping small business scale their systems to a wider audience based on 
    their budgets, setting up ci/cd automation, kubernetes, docker and microservices architecture`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Third-Party Integration",
    descriptions: `Equipped with integrating a wide range of third-party libraries to help facilitate ease of security and
    optimal system reliability, such as payments gateways, SMEs and countless other services. `,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
