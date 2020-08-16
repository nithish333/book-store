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

        <Link
          style={
            getCartItems.length > 0
              ? { cursor: "pointer" }
              : { cursor: "not-allowed" }
          }
          to={getCartItems.length > 0 ? "/checkout" : "/cart"}
          className="proceedToChBtn"
        >
          Proceed To Checkout
        </Link>
      </div>
      {getCartItems.length > 0 ? (
        getCartItems.map((cartItem, index) => (
          <CartItem cartItem={cartItem} key={index} />
        ))
      ) : (
        <p className="noItems">No items in your cart :(</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  getCartItems: cartItems,
});
export default connect(mapStateToProps)(Cart);
