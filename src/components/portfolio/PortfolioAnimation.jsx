import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-css";
import portfolio from "./portfolio.json";
import PortfolioCard from "./PortfolioCard";
import PortfolioDetails from "./PortfolioDetails";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All"];

const PortfolioAnimation = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const handleShow = (val) => {
    setShow(true);
    setContent(val);
  };

  return (
    <>
      <PortfolioDetails show={show} setShow={setShow} data={content} />

      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolio.map((val, i) => (
                    <PortfolioCard
                      key={i}
                      data={val}
                      handleShow={() => handleShow(val)}
                    />
                  ))}
                </Masonry>
              </div>
            </TabPanel>
            {/*
            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolio.map((val, i) => (
                    <PortfolioCard
                      key={i}
                      data={val}
                      challenges={val.challenges}
                    />
                  ))}
                </Masonry>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolio.map((val, i) => (
                    <PortfolioCard key={i} data={val} />
                  ))}
                </Masonry>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolio.map((val, i) => (
                    <PortfolioCard key={i} data={val} />
                  ))}
                </Masonry>
              </div>
            </TabPanel> */}
          </SRLWrapper>
        </Tabs>
      </div>
    </>
  );
};

export default PortfolioAnimation;
