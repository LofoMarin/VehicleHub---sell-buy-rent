import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useNavigate } from 'react-router-dom';

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price, id} = props.item;
  const navigate = useNavigate();

  const handleBooking = () => {
    // Lógica para guardar los datos de la reserva
    // ...

    // Después de guardar los datos de la reserva correctamente
    navigate('/home');
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-end">
            ${price}.00 <span></span>
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>
          <div className="buttons_container">
            <button className="car__item-btn car__btn-rent">
              <Link to={`/cars/${id}`}>Comprar</Link>
            </button>
            <button className="car__item-btn car__btn-details">
              <Link to={`/cars/${id}`}>Detalles</Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;