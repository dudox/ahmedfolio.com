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
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioKey from "./PortfolioKey";
import PortfolioReview from "./PortfolioReview";
import useDocumentMeta from "../useDocumentMeta";
import FeatherIcon from "feather-icons-react";

const PortfolioDetails = ({ show, setShow, data }) => {
  useDocumentMeta(
    data ? data.title + " | " + data.subTitle : null,
    data ? data.alterText : null
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: data.imageCount ? data.imageCount : 8,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 6,
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

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(setShow)} fullscreen={true}>
        <div id="app_main" className="app_main theme-dark ">
          <FeatherIcon
            icon={"x-circle"}
            size={30}
            style={{
              right: "20px",
              top: "20px",
              zIndex: "100000",
              cursor: "pointer",
            }}
            className="position-absolute theme-light text-warning"
            onClick={() => closeModal()}
          />
          <section
            id="description"
            className="section py-5 theme-light dark-bg"
          >
            <div className="container">
              <div className="title">
                <h3>{data.title}</h3>
              </div>
              <h6>{data.subTitle}</h6>
              <p>{data.alterText}</p>
              <p>
                Live Website:{" "}
                {data.live ? (
                  <a href={data.live["url"]}>{data.live["label"]}</a>
                ) : (
                  ""
                )}
              </p>

              {Object.keys(data).length > 0
                ? data.stacks.map((content, key) => (
                    <span key={key} className="badge bg-dark me-1">
                      {content}
                    </span>
                  ))
                : null}
              <div
                className="mt-3"
                style={{
                  left: 0,
                  width: "100vw",
                  marginLeft: "calc(-50vw + 50%)",
                }}
              >
                <Carousel
                  responsive={responsive}
                  additionalTransfrom={100}
                  partialVisible
                  draggable
                  infinite={true}
                  customLeftArrow={<></>}
                  customRightArrow={<></>}
                  keyBoardControl={true}
                  minimumTouchDrag={100}
                  swipeable
                  itemClass="me-1"
                >
                  {Object.keys(data).length > 0
                    ? data.images.map((content, key) => (
                        <img
                          key={key}
                          src={`img/portfolio/${content.src}.jpg`}
                          alt={content.alt}
                        />
                      ))
                    : null}
                </Carousel>
              </div>

              <div className="row mt-5">
                {Object.keys(data).length > 0
                  ? data.timelines.map((content, i) => (
                      <PortfolioKey key={i} content={content} />
                    ))
                  : null}
              </div>
            </div>
          </section>

          <section id="journey" className="section py-5 theme-light dark-bg">
            <div className="container">
              <div className="title">
                <h3>Product Journey</h3>
              </div>
              {Object.keys(data).length > 0
                ? data.journey.map((content, key) => (
                    <div key={key}>
                      <h6>{content.title}</h6>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.description,
                        }}
                      />
                    </div>
                  ))
                : null}
            </div>
          </section>

          <section
            id="review"
            className="section pt-0 pb-5 theme-light dark-bg"
          >
            <div className="container">
              <div className="title">
                <h3>& Review(s)</h3>
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

          <section id="contactus" className="section py-5 theme-light dark-bg">
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
        </div>
      </Modal>
    </>
  );
};

export default PortfolioDetails;
