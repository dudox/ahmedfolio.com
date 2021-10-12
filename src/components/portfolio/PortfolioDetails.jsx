import React from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../contact/Contact";
import ContactInfo from "../contact/ContactInfo";
import Map from "../contact/Map";
import Footer from "../footer/FooterAnimation";
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioKey from "./PortfolioKey";
import PortfolioReview from "./PortfolioReview";

const PortfolioDetails = ({ show, setShow, data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 3,
    },
  };
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Modal
        show={show}
        fullscreen={true}
        onHide={() => setShow(setShow)}
        scrol
        lable={false}
      >
        <div id="app_mai" className="theme-dark ">
          <section id="description" className="section theme-light dark-bg">
            <div className="container">
              <div className="title">
                <h3>{data.title}</h3>
              </div>
              <h6>{data.subTitle}</h6>
              <p>{data.alterText}</p>
              <p>
                Live Website: <a href={data.url}>{data.url}</a>
              </p>

              {Object.keys(data).length > 0
                ? data.stacks.map((content) => (
                    <span className="badge bg-dark me-1">{content}</span>
                  ))
                : null}
              <div
                className="mt-3"
                style={{
                  width: "100%",
                  position: "absolute",
                  left: "0",
                  minHeight: "100%",
                  height: "auto",
                }}
              >
                <Carousel
                  responsive={responsive}
                  additionalTransfrom={0}
                  partialVisible
                  autoPlaySpeed={3000}
                  draggable
                  focusOnSelect={false}
                  infinite={false}
                  customLeftArrow={<></>}
                  customRightArrow={<></>}
                  keyBoardControl
                  minimumTouchDrag={100}
                  swipeable
                >
                  {Object.keys(data).length > 0
                    ? data.images.map((content) => (
                        <img
                          src={`img/portfolio/${content.src}.jpg`}
                          alt={content.alt}
                        />
                      ))
                    : null}
                </Carousel>
              </div>
            </div>
          </section>

          <section id="work" className="section theme-light dark-bg">
            <div className="container">
              <div className="title">
                <h3>Product Journey</h3>
              </div>
              {Object.keys(data).length > 0
                ? data.journey.map((content) => (
                    <>
                      <h6>{content.title}</h6>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.description,
                        }}
                      />
                    </>
                  ))
                : null}
            </div>
          </section>

          <section id="work" className="section theme-light dark-bg">
            <div className="container">
              <div className="title">
                <h3>Addition Information </h3>
              </div>
              <div className="row">
                {Object.keys(data).length > 0
                  ? data.timelines.map((content, i) => (
                      <PortfolioKey key={i} content={content} />
                    ))
                  : null}
              </div>
              <div className="title mt-5">
                <h3>& Reviews</h3>
              </div>
              <div className="row">
                <div className="testimonial-wrapper">
                  <Slider {...settings}>
                    {Object.keys(data).length > 0
                      ? data.reviews.map((content, i) => (
                          <PortfolioReview key={i} content={content} />
                        ))
                      : null}
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          <section id="contactus" className="section theme-light dark-bg">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-5 col-xl-4 m-15px-tb"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <ContactInfo />
                </div>
                {/* End Contact info */}

                <div
                  className="col-lg-7 ml-auto m-15px-tb"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="contact-form">
                    <h4>Say Something</h4>
                    <Contact />
                  </div>
                </div>
                {/* End contact form */}

                <div
                  className="col-12"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Map />
                  {/* End google-map */}
                </div>
                {/* End Col */}
              </div>
            </div>
          </section>
          {/* End Contact Section */}

          <footer className="footer white">
            <div className="container">
              <Footer />
            </div>
          </footer>
          {/* End Contact Section */}
        </div>
      </Modal>
    </>
  );
};

export default PortfolioDetails;
