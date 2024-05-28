// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import { Component } from "react";
// import { app } from "../API/firebase";
// import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
// import "../styles/pagination.css";

// class CarListing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vehicle: [],
//       currentPage: 1,
//       itemsPerPage: 12,
//     };
//   }

//   async refreshvehicle() {
//     var vehicleList = [];
//     const db = getFirestore(app);
//     const vehicleCol = collection(db, "vehicle");
//     const vehicleSnapshot = await getDocs(vehicleCol);
//     vehicleSnapshot.forEach((doc) => {
//       let vehicle = doc.data();
//       vehicle.id = doc.id;
//       vehicleList.push(vehicle);
//     });
//     this.setState({ vehicle: vehicleList });
//   }

//   componentDidMount() {
//     this.refreshvehicle();
//     window.scrollTo(0, 0); // Scroll al inicio al montar el componente
//   }

//   handleClick = (event) => {
//     this.setState({ currentPage: Number(event.target.id) }, () => {
//       window.scrollTo(0, 0); // Scroll al inicio al cambiar de página
//     });
//   };

//   handlePrevPage = () => {
//     const { currentPage } = this.state;
//     if (currentPage > 1) {
//       this.setState({ currentPage: currentPage - 1 }, () => {
//         window.scrollTo(0, 0); // Scroll al inicio al cambiar de página
//       });
//     }
//   };

//   handleNextPage = () => {
//     const { currentPage, itemsPerPage, vehicle } = this.state;
//     const totalPages = Math.ceil(vehicle.length / itemsPerPage);
//     if (currentPage < totalPages) {
//       this.setState({ currentPage: currentPage + 1 }, () => {
//         window.scrollTo(0, 0); // Scroll al inicio al cambiar de página
//       });
//     }
//   };

//   render() {
//     const { vehicle, currentPage, itemsPerPage } = this.state;
//     console.log(vehicle);
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = vehicle.slice(indexOfFirstItem, indexOfLastItem);
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(vehicle.length / itemsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map((number) => {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//           className={currentPage === number ? "active" : null}
//           style={{
//             cursor: "pointer",
//             padding: "5px",
//             margin: "5px",
//             border: "1px solid #ccc",
//           }}
//         >
//           {number}
//         </li>
//       );
//     });

//     return (
//       <Helmet title="Cars">
//         <CommonSection title="Renta un Carro" />
//         <section className="section_nueva">
//           <Container>
//             <Row>
//               {currentItems.map((item) => (
//                 <CarItem item={item} key={item.id} />
//               ))}
//             </Row>
//             <Row>
//               <Col lg="12">
//                 <div className="pagination-container">
//                   <button
//                     className="pagination-button"
//                     onClick={this.handlePrevPage}
//                     disabled={currentPage === 1}
//                   >
//                     <i className="ri-arrow-left-line"></i>
//                   </button>
//                   <ul className="pagination">{renderPageNumbers}</ul>
//                   <button
//                     className="pagination-button"
//                     onClick={this.handleNextPage}
//                     disabled={
//                       currentPage === Math.ceil(vehicle.length / itemsPerPage)
//                     }
//                   >
//                     <i className="ri-arrow-right-line"></i>
//                   </button>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </Helmet>
//     );
//   }
// }

// export default CarListing;