import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { app } from "../API/firebase";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore/lite";
import "../styles/pagination.css";

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicule: [],
      currentPage: 1,
      itemsPerPage: 12,
    };
  }

  async refreshVehicule() {
    const { filters } = this.props;
    let vehiculeList = [];
    const db = getFirestore(app);
    const vehiculeCol = collection(db, "vehicule");

    // Firestore query setup
    let q = vehiculeCol;

    // Aplicar otros filtros solo si no están vacíos o nulos
    if (filters.modelo) {
      console.log(filters.modelo)
      q = query(q, where('carName', 'in', [filters.modelo]));
    }
    if (filters.año) {
      q = query(q, where("model", "==", filters.año));
    }
    if (filters.tipo) {
      q = query(q, where("fuel", "==", filters.tipo));
    }

    const vehiculeSnapshot = await getDocs(q);
    vehiculeSnapshot.forEach((doc) => {
      let vehicule = doc.data();
      vehicule.id = doc.mod;
      vehiculeList.push(vehicule);
    });

    this.setState({ vehicule: vehiculeList });
  }

  componentDidMount() {
    this.refreshVehicule();
    window.scrollTo(0, 0); // Scroll al inicio al montar el componente
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters !== prevProps.filters) {
      this.refreshVehicule();
    }
  }

  handleClick = (event) => {
    this.setState({ currentPage: Number(event.target.id) }, () => {
      window.scrollTo(0, 0); // Scroll al inicio al cambiar de página
    });
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 }, () => {
        window.scrollTo(0, 0); // Scroll al inicio al cambiar de página
      });
    }
  };

  handleNextPage = () => {
    const { currentPage, itemsPerPage, vehicule } = this.state;
    const totalPages = Math.ceil(vehicule.length / itemsPerPage);
    if (currentPage < totalPages) {
      this.setState({ currentPage: currentPage + 1 }, () => {
        window.scrollTo(0, 0); // Scroll al inicio al cambiar de página
      });
    }
  };

  render() {
    const { vehicule, currentPage, itemsPerPage } = this.state;
    console.log(vehicule);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = vehicule.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(vehicule.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={currentPage === number ? "active" : null}
          style={{
            cursor: "pointer",
            padding: "5px",
            margin: "5px",
            border: "1px solid #ccc",
          }}
        >
          {number}
        </li>
      );
    });

    return (
      <Helmet title="Cars">
          <Container>
            <Row>
              {currentItems.map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
            <Row>
              <Col lg="12">
                <div className="pagination-container">
                  <button
                    className="pagination-button"
                    onClick={this.handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    <i className="ri-arrow-left-line"></i>
                  </button>
                  <ul className="pagination">{renderPageNumbers}</ul>
                  <button
                    className="pagination-button"
                    onClick={this.handleNextPage}
                    disabled={
                      currentPage === Math.ceil(vehicule.length / itemsPerPage)
                    }
                  >
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
      </Helmet>
    );
  }
}

export default FilterValues;
