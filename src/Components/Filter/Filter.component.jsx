import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="Filter">
      <label>Filter : </label>
      <select className="filter">
        <option className="filterType">Filter Price</option>
        <option className="filterType">Lowest to Highest</option>
        <option className="filterType">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default Filter;
