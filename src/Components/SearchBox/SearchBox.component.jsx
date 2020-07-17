import React from "react";
import "./SearchBox.css";

const SearchBox = ({ change }) => {
  return (
    <div className="SearchBox">
      <input
        type="search"
        className="serach"
        placeholder="Search for a book"
        onChange={change}
      />
    </div>
  );
};

export default SearchBox;
