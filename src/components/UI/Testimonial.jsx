import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava05 from "../../assets/all-images/ava-5.jpg"; 
import ava06 from "../../assets/all-images/ava-6.jpg";
import ava07 from "../../assets/all-images/ava-7.jpg";
import ava08 from "../../assets/all-images/ava-8.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "¡Increíble experiencia! He sido cliente de esta empresa durante años y nunca me han decepcionado. Su compromiso con la seguridad y la calidad del servicio es evidente. 
          Siempre puntuales, vehículos impecables. Recomiendo encarecidamente."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Edgar García</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Recientemente alquilé un auto para un viaje de negocios y quedé impresionado con la calidad del servicio. Desde la facilidad de reserva en línea hasta la entrega puntual del vehículo, todo fue perfecto.
         ¡Definitivamente volveré a elegir este servicio en mis próximos viajes!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava06} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jean Herrán</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Alquilamos un auto para nuestras vacaciones familiares y fue la mejor decisión que tomamos. El tamaño del vehículo era perfecto para nuestra familia, y estaba impecablemente limpio y bien mantenido. 
        El proceso de recogida y devolución fue rápido y sin problemas."


        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava07} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Luisangel Parra</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Como empresario que viaja con frecuencia, la flexibilidad y la confiabilidad son fundamentales para mí. Este servicio de arrendamiento de carros no solo ofrece una amplia selección de vehículos, sino también una atención al cliente excepcional y tarifas competitivas."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava08} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Moisés Torres</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
