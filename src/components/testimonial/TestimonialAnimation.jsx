import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
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

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `Ahmed joined the team and quickly built out a high performing team across all levels of experience. He is extremely proactive, communicates effectively and in a very timely fashion. The quality and speed of his work is exceptional. But most of all he's thinking three steps ahead anticipating what we need to meet critical client facing deadlines. I frankly wish all of my staff had the technical expertise and business acumen that Ahmed possesses. `,
      reviewerName: "Patrina Mack",
      designation: "CEO at YouROK Corp.",
      delayAnimation: "",
    },
    {
      imageName: "team-2",
      desc: ` Ahmed has helped the junior members of the team learn. He has helped improve our website performance and led the migration of our Wordpress sites feom Bluehost to a VPS on DigitalOcean. He is helping us to staff a new project to develop our intranet and will lead that’s project too! `,
      reviewerName: "Georginna Feyst",
      designation: "CEO at RADProd",
      delayAnimation: "200",
    },
    {
      imageName: "team-3",
      desc: `Ahmed communicates very clearly and does it with a big smile on his face. Since before graduating he’s worked on multiple projects for clients. Ahmed is always ready to pick a new, interesting project. He quickly takes ownership of projects as an individual contributor or on a leadership role being a force multiplier.`,
      reviewerName: "Telent Team",
      designation: "Talent Team at Gun.io",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
