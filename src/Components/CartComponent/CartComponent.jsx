import React from "react";
import "./CartComponent.css";
import { connect } from "react-redux";
import CartItem from "../CartItemComponent/CartItemComponent";
import { Link } from "react-router-dom";

const Cart = ({ getCartItems }) => {
  return (
    <div>
      <div className="cartTop">
        <h2 className="cartHeading">Your Cart</h2>
        <Link to="/checkout" className="proceedToChBtn">
          Proceed To Checkout
        </Link>
      </div>
      {getCartItems.map((cartItem, index) => (
        <CartItem cartItem={cartItem} key={index} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  getCartItems: cartItems,
});
export default connect(mapStateToProps)(Cart);
