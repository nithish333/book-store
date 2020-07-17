import React from "react";
import "./CategoriesAndFilter.css";
import Categories from "../Categories/Categories.component";
import Filter from "../Filter/Filter.component";

const CategoriesandFilter = () => {
  return (
    <div className="CategoriesAndFilter">
      <Categories />
      <Filter />
    </div>
  );
};

export default CategoriesandFilter;
