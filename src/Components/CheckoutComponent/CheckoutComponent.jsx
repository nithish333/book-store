import React from "react";
import "./Checkout.styles.css";
import { connect } from "react-redux";
import CheckoutItem from "../CheckoutItemComponent/CheckoutItemComponent";

const CheckoutPage = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="CheckoutPage">
      {cartItems.map((cartItem, index) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});
export default connect(mapStateToProps)(CheckoutPage);
