import React from "react";
import "./Header.styles.css";
import CustomButtom from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FIrebase.util";
import { ReactComponent as CartIcon } from "../../assets/shoppingcart.svg";
// import { ReactSVG } from "react-svg";

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
          <div className="onLogin">
            <div className="signOutLink" onClick={() => auth.signOut()}>
              Sign Out
            </div>
            <div className="cart">
              <CartIcon className="cartIcon" />
              <span className="itemCount">0</span>
            </div>
            <Link className="profile" to="/profile">
              Profile
            </Link>
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
