import React from "react";
import "./Categories.css";
const Categories = ({ handleCategoryChange }) => {
  return (
    <div className="Categories">
      <label>Categories : </label>
      <select className="selectCategory" onChange={handleCategoryChange}>
        <option className="categoryName">All</option>
        <option className="categoryName">Business</option>
        <option className="categoryName">Cookbooks</option>
        <option className="categoryName">Mystery</option>
        <option className="categoryName">Scifi</option>
        <option className="categoryName">Accessories</option>
      </select>
    </div>
  );
};

export default Categories;
