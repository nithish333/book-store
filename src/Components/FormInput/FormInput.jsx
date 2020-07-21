import React from "react";
import "./FormInput.css";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="FormInput">
      <label className="email" onChange={handleChange}>
        {label}
      </label>
      <input className="inputBox" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
