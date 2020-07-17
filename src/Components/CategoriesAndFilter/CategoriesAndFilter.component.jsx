import React from "react";
import "./CategoriesAndFilter.css";
import Categories from "../Categories/Categories.component";
import Filter from "../Filter/Filter.component";

const CategoriesandFilter = ({ handleCategoryChange }) => {
  return (
    <div className="CategoriesAndFilter">
      <Categories handleCategoryChange={handleCategoryChange} />
      <Filter />
    </div>
  );
};

export default CategoriesandFilter;
