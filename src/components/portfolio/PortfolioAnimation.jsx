import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiPlus } from "react-icons/fi";
import FeatherIcon from "feather-icons-react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Laravel", "ReactJS", "Flutter"];
const AllPortfolioContent = [
  {
    img: "ferma",
    title: "FERMA",
    subTitle: "Federal Road Mentainance Agency (Nigeria)",
    alterText: `Ferma is a road maintenance platform that uses SMEs technologies
     and USSD to report bad federal roads in Nigeria. With just a simple *123*345# 
     You can select the current local govt where the road is then report that bad road, 
     during the process, you will also receive a prompt asking if you would like to upload an 
     image of the bad road thus sending a one-time link. Project has an analytics dashboard where 
     the data are correlated into smart graphs and metrics for decision making https://ddsd.com`,
     url: "https://ferma.smartsahara.com",
    delayAnimation: "",
  },
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    delayAnimation: "100",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    delayAnimation: "200",
  },
  {
    img: "m-portfolio-4",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
    delayAnimation: "0",
  },
  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    delayAnimation: "100",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "200",
  },
  {
    img: "m-portfolio-7",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "Business Card",
    delayAnimation: "0",
  },
  {
    img: "m-portfolio-8",
    title: "Chatting App Design",
    subTitle: "Codecanyon Market",
    alterText: "Chatting App Design",
    delayAnimation: "100",
  },
  {
    img: "m-portfolio-9",
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
    delayAnimation: "200",
  },
];

const BrandingPortfolioContent = [
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    delayAnimation: "100",
  },
  {
    img: "m-portfolio-8",
    title: "Chatting App Design",
    subTitle: "Codecanyon Market",
    alterText: "Chatting App Design",
    delayAnimation: "200",
  },
  {
    img: "m-portfolio-4",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
    delayAnimation: "300",
  },
];
const PhotographyPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    delayAnimation: "",
  },

  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    delayAnimation: "100",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "200",
  },
];

const FashionPortfolioContent = [
  {
    img: "m-portfolio-1",
    title: "Bottle Illustration",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
    delayAnimation: "",
  },
  {
    img: "m-portfolio-7",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "Business Card",
    delayAnimation: "100",
  },
  {
    img: "m-portfolio-9",
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
    delayAnimation: "200",
  },
];

const ProductPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    delayAnimation: "",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    delayAnimation: "100",
  },

  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    delayAnimation: "200",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "300",
  },
];

const PortfolioAnimation = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                          
                        </a>
                        {/* End gallery link */}

                        <a href={val.url ?? ""} className="portfolio-icon" style={{zIndex:100000}}>
                          <FeatherIcon icon={"link"} />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {BrandingPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <div className="portfolio-icon">
                          <FiPlus />
                        </div>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
                {/* grid item  */}
              </div>

              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {PhotographyPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <div className="portfolio-icon">
                          <FiPlus />
                        </div>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {FashionPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <div className="portfolio-icon">
                          <FiPlus />
                        </div>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {ProductPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <div className="portfolio-icon">
                          <FiPlus />
                        </div>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
