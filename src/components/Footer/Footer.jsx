import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Acerca de nosotros",
  },

  {
    path: "#",
    display: "Política de Privacidad",
  },

  {
    path: "/cars",
    display: "Lista de Autos",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contacto",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Vehicle <br /> Hub
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Tu Viaje Comienza Aquí
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Acceso Rapido</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Oficinas</h5>
              <p className="office__info">Universidad del Norte</p>
              <p className="office__info">Telefono: +57 3023713081</p>

              <p className="office__info">Email: jsacosta@VehicleHub.com</p>

              <p className="office__info">Horario de Oficinas: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Suscripción</h5>
              <p className="section__description">Subscribete</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                VehicleHub. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
