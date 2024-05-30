import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = ({ onFilterSubmit }) => {
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterSubmit({ modelo, año, tipo });
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Año"
            value={año}
            onChange={(e) => setAño(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            placeholder="Fecha"
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Tiempo de Viaje"
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Seleccione tipo</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Diesel">Diesel</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit">
            Buscar Carro
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
