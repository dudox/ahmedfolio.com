import React from "react";
import TextLoop from "react-text-loop";
import ContactInfo from "../contact/ContactInfo";
import ToggleThemeMode from "../mode/ToggleThemeMode";

const conctInfo = {
  phone: "+234 701-772-3208",
  email: " work@ahmedfolio.com",
};

const sliderContent = {
  name: "Ahmed Ahmed",
  designation: "Software Engineer",
  description: `Results driven Software Engineer dedicated to developing user-focused solutions for customers with various business objectives `,
  btnText: " Download CV (361.0 kB)",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href={`tel:${conctInfo.phone}`}>{conctInfo.phone}</a>
            <a href={`mailto:${ContactInfo.email}`}>
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="text-light">
               <ToggleThemeMode />
              </li>
             
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Software Engineer</p>
                    <p className="loop-text lead"> AWS DevOps Engineer</p>
                    {/* <p className="loop-text lead"> Flutter Developer</p> */}
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="docs/Ahmed_Ahmed_Resume.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner-real.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
