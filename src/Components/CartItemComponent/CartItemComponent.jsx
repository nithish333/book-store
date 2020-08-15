import React from "react";
import "./CartItemComponent.styles.css";

const CartItem = ({ cartItem }) => {
  const { img, name, price, author, quantity } = cartItem;
  return (
    <div className="CartItem">
      <div className="sideImg">
        <img src={img} alt="bookimage" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>By:{author}</p>
        <p>Quantity:{quantity}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
