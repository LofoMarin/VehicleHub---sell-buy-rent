import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";


const OUR__MEMBERS = [
  {
    name: "Luis Marín",
    experience: "13 años de experiencia",
    fbUrl: "https://www.facebook.com/luisfernando.marinortega1/?locale=es_LA",
    instUrl: "https://www.instagram.com/luis.marin.o/",
    twitUrl: "https://x.com/luis_marin_o?s=21",
    linkedinUrl: "https://www.linkedin.com/in/luis-marin-502265295/",
    imgUrl: ava01,
  },

  {
    name: "Kevin Ruiz",
    experience: "5 años de experiencia",
    fbUrl: "https://www.facebook.com/KevinRE132?mibextid=ZbWKwL",
    instUrl: "https://www.instagram.com/kevinlol132?igsh=dXh0NzQ3Y3ptbWc=",
    twitUrl: "https://x.com/kevinre739?s=09",
    linkedinUrl: "https://www.linkedin.com/in/kevin-ruiz-espitia-232777173/",
    imgUrl: ava02,
  },

  {
    name: "Jeison Acosta",
    experience: "7 años de experiencia",
    fbUrl: "https://www.facebook.com/jeison.acostagloria/",
    instUrl: "https://www.instagram.com/aeon_616/",
    twitUrl: "https://x.com/Aeonara616",
    linkedinUrl: "https://www.linkedin.com/in/jeison-acosta-gloria-915b0a2a4/",
    imgUrl: ava03,
  },
  {
    name: "Wilson",
    experience: "Consultor - 20 años de experiencia",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <a href={item.fbUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href={item.twitUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-twitter-line"></i>
                </a>
                <a href={item.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-line"></i>
                </a>
                <a href={item.instUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
