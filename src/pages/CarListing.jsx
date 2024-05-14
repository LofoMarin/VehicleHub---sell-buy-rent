import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { Component } from "react";
import { app } from "../API/firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
class CarListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicule: [],
    };
  }

  async refreshVehicule() {
    var vehiculeList = [];
    const db = getFirestore(app);
    const vehiculeCol = collection(db, "vehicule");
    const vehiculeSnapshot = await getDocs(vehiculeCol);

    vehiculeSnapshot.forEach((doc) => {
      let vehicule = doc.data();
      vehicule.id = doc.id;
      vehiculeList.push(vehicule);
    });

    this.setState({ vehicule: vehiculeList });
  }

  componentDidMount() {
    this.refreshVehicule();
  }

  render() {
    const { vehicule } = this.state;
    console.log(vehicule);

    return (
      <Helmet title="Cars">
        <CommonSection title="Lista de Autos" />

        <section className="section_nueva">
          <Container>
            <Row>
              <Col lg="12">
                <div className=" d-flex align-items-center gap-3 mb-5">
                  <span className=" d-flex align-items-center gap-2">
                    <i class="ri-sort-asc"></i> Sort By
                  </span>

                  <select>
                    <option>Select</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                </div>
              </Col>

              {vehicule.map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  }
}

export default CarListing;
