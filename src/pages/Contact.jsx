import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Ponte en contacto con nosotros</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Nombre" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Correo Electrónico" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Mensaje"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Enviar Mensaje
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Información de contacto</h6>
                <p className="section__description mb-0">
                Kilómetro 5 Vía Puerto Colombia, Barranquilla, Atlántico
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Teléfono:</h6>
                  <p className="section__description mb-0">+57 3023713081</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Correo Electrónico:</h6>
                  <p className="section__description mb-0">jsacosta@uninorte.edu.co</p>
                </div>

                <h6 className="fw-bold mt-4">Siguenos</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
