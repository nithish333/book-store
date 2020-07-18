import React from "react";
import "./Header.styles.css";
import CustomButtom from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <Link
          className="homepageLink"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <h2 className="storetitle">BOOK STORE</h2>
        </Link>
      </div>
      <div className="navLinks">
        <Link className="signinLink" to="/signin">
          <CustomButtom name="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
