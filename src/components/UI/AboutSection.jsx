import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Nosotros</h4>
              <h2 className="section__title">Tu Mejor Opción en Arrendamiento de Vehículos Usados </h2>
              <p className="section__description" style={{ paddingLeft: '2px' }}>
                En VehicleHub, nos especializamos en ofrecer soluciones de arrendamiento de vehículos usados de alta calidad, 
                adaptadas a las necesidades de cada cliente.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Variedad y Calidad
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Precios Competitivos
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Flexibilidad
                </p>
                
                

                <p className="section__description d-flex align-items-center gap-2"style={{ paddingLeft: '47px' }}>
                  <i class="ri-checkbox-circle-line"></i> Facilidad de Proceso
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
