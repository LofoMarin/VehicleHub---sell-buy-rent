import React, { useState } from "react";
import FindCarForm from "../../src/components/UI/FindCarForm";
import FilterValues from "../../src/pages/filterValues";

const CarFilterPage = () => {
  const [filters, setFilters] = useState({
    modelo: "",
    año: "",
    tipo: ""
  });

  const handleFilterSubmit = (FilterValues) => {
    setFilters(FilterValues);
  };

  return (
    <div>
      <FindCarForm onFilterSubmit={handleFilterSubmit} />
      <FilterValues filters={filters} />
    </div>
  );
};

export default CarFilterPage;


