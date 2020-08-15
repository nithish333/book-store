import React from "react";
import "./CartComponent.css";
import { connect } from "react-redux";
import CartItem from "../CartItemComponent/CartItemComponent";

const Cart = ({ getCartItems }) => {
  return (
    <div>
      <h2>Your Cart</h2>
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
