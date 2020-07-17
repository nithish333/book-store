import React from "react";
import "./CustomButton.css";
const CustomButtom = ({ name }) => {
  return (
    <div className="CustomButton">
      <button>{name}</button>
    </div>
  );
};

export default CustomButtom;
