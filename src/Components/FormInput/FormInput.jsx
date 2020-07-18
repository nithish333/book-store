import React from "react";
import "./FormInput.css";

const FormInput = ({ label, type }) => {
  return (
    <div className="FormInput">
      <label className="email">{label}</label>
      <input type={type} className="inputBox" />
    </div>
  );
};

export default FormInput;
