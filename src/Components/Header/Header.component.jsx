import React from "react";
import "./Header.styles.css";
import CustomButtom from "../CustomButton/CustomButton";
const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <h2 className="storetitle">BOOK STORE</h2>
      </div>
      <div className="navLinks">
        <CustomButtom name="Sign In" />
      </div>
    </div>
  );
};

export default Header;
