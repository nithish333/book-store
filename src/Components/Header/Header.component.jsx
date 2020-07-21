import React from "react";
import "./Header.styles.css";
import CustomButtom from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FIrebase.util";
const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="signOutLink" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="signinLink" to="/signin">
            <CustomButtom name="Sign In" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
