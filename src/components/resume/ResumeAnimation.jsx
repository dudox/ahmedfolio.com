import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Software Engineering Manager`,
    jobType: `Menlo Park CA, USA | Remote`,
    jobDuration: `Mar 2021 - Present`,
    timeDuraton: `Contract`,
    compnayName: "YouROK Corp.",
    jobDescription: `YouROK is a prevention focused solution developed to address the adolescent mental 
    health crisis by building emotional resiliency using evidence-informed practices. YouROK offers a
     handheld gateway to powerful help 
    with adolescents' greatest challenges in the form of a mobile app called K'Bro.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Tech. Lead Consultant`,
    jobType: `Los Angeles CA, USA | Remote`,
    jobDuration: `Mar 2021 - Sept 2021`,
    timeDuraton: `Contract`,
    compnayName: "Real Art Daily Production",
    jobDescription: `Real Art Daily (RAD) Productions, a video production company based in Los Angeles, 
    is a diverse company with employees representing a wide range of sexualities, gender identities, 
    races, cultures, and nationalities. Our goal is to create and tell meaningful stories through the 
    artistic mediums of film and modern media, theatre, animation and music videos.

    `,
    delayAnimation: "100",
  },
  {
    jobPosition: `Sr. Software Engineer`,
    jobType: `Victoria Island LA, Nigeria | Remote`,
    jobDuration: `Jan 2019 - Jan 2021`,
    timeDuraton: `Full Time`,
    compnayName: "Mayapro1 Limited",
    jobDescription: `A leading Information and Communication Technologies (ICT) firm licensed by Nigerian
     Communications Commission (NCC) for Value Added Services (VAS) & Content Services Using 
     Shortcodes (SNC). Mayapro1 Limited has also handles Governments projects in developing smart systems for
     tracking poor roads in the country
`,
    delayAnimation: "200",
  },
  
];

const educatonContent = [
  // {
  //   passingYear: "2018-2020",
  //   degreeTitle: "Ph.D in Horriblensess",
  //   instituteName: "University Of Evil Doing",
  // },
  {
    passingYear: "2015-2019",
    degreeTitle: "Bsc. in Computer Science",
    instituteName: "Kwara State University",
  },
  // {
  //   passingYear: "2010-2012",
  //   degreeTitle: "Graphic Artist Training ",
  //   instituteName: "Graphic Master Institute",
  // },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Recent Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
