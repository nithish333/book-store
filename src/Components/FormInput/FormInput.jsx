import React from "react";
import "./FormInput.css";

const FormInput = ({ label, type, handleChange }) => {
  return (
    <div className="FormInput">
      <label className="email" onChange={handleChange}>
        {label}
      </label>
      <input type={type} className="inputBox" onChange={handleChange} />
    </div>
  );
};

export default FormInput;
