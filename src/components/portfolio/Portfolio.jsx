import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiPlus } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];

const AllPortfolioContent = [
  {
    img: "m-portfolio-1",
    title: "Bottle Illustration",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
  },
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
  },
  {
    img: "m-portfolio-4",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
  },
  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
  },
  {
    img: "m-portfolio-7",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "Business Card",
  },
  {
    img: "m-portfolio-8",
    title: "Chatting App Design",
    subTitle: "Codecanyon Market",
    alterText: "Chatting App Design",
  },
  {
    img: "m-portfolio-9",
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
  },
];

const BrandingPortfolioContent = [
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
  },
  {
    img: "m-portfolio-8",
    title: "Chatting App Design",
    subTitle: "Codecanyon Market",
    alterText: "Chatting App Design",
  },
  {
    img: "m-portfolio-4",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
  },
];
const PhotographyPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
  },

  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
  },
];

const FashionPortfolioContent = [
  {
    img: "m-portfolio-1",
    title: "Bottle Illustration",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
  },
  {
    img: "m-portfolio-7",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "Business Card",
  },
  {
    img: "m-portfolio-9",
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
  },
];

const ProductPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
  },
  {
    img: "m-portfolio-3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
  },

  {
    img: "m-portfolio-5",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
  },
];

const Portfolio = () => {
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
                    <div className="portfolio-box-01" key={i}>
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
                  {BrandingPortfolioContent.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
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
                    <div className="portfolio-box-01" key={i}>
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
                    <div className="portfolio-box-01" key={i}>
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
                    <div className="portfolio-box-01" key={i}>
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

export default Portfolio;
