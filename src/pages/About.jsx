import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Nosotros" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Estamos comprometidos a ofrecer soluciones de transporte seguras
                </h2>

                <p className="section__description">
                En nuestra empresa, la seguridad de nuestros pasajeros es nuestra máxima prioridad. Nos dedicamos a proporcionar soluciones de transporte confiables y seguras que garanticen tranquilidad en cada viaje. Implementamos rigurosos protocolos de seguridad y mantenemos nuestros vehículos en las mejores condiciones para asegurar un trayecto seguro y cómodo. 
                </p>

                <p className="section__description">
                Nuestro equipo de conductores profesionales está altamente capacitado y comprometido con la excelencia en el servicio, siempre enfocado en la protección y bienestar de nuestros clientes. 
                Con nosotros, puedes confiar en que llegarás a tu destino de manera segura y sin preocupaciones.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">¿Necesitas ayuda?</h6>
                    <h4>+57 3023713081</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Expertos</h6>
              <h2 className="section__title">Nuestros Miembros</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
