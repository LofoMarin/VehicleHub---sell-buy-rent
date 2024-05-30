import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import { app } from "../API/firebase";

const Home = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      const db = getFirestore(app);
      const carCol = collection(db, "vehicule");
      const carSnapshot = await getDocs(carCol);
      const carList = carSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCarData(carList);
    };

    fetchCarData();
  }, []);

  return (
    <Helmet title="Home">
      {/* ============= Hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Busca tu mejor carro</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =========== About section ================ */}
      <AboutSection />

      {/* ========== Services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Descubre nuestros</h6>
              <h2 className="section__title">Servicios más populares</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========== Car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Ven y descubre</h6>
              <h2 className="section__title">Nuestras Ofertas</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========== Become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== Testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Lo que dicen nuestros clientes</h6>
              <h2 className="section__title">Testimonios</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;