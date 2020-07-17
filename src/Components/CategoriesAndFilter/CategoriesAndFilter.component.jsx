import React from "react";
import "./CategoriesAndFilter.css";
import Categories from "../Categories/Categories.component";
import Filter from "../Filter/Filter.component";

const CategoriesandFilter = ({ handleCategoryChange, handleFilterChange }) => {
  return (
    <div className="CategoriesAndFilter">
      <Categories handleCategoryChange={handleCategoryChange} />
      <Filter handleFilterChange={handleFilterChange} />
    </div>
  );
};

export default CategoriesandFilter;
