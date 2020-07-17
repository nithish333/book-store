import React from "react";
import "./Filter.css";

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="Filter">
      <label>Filter : </label>
      <select className="filter" onChange={handleFilterChange}>
        <option className="filterType">Filter</option>
        <option className="filterType">Lowest to Highest</option>
        <option className="filterType">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default Filter;
