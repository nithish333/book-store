import React from "react";
import "./CartItemComponent.styles.css";

const CartItem = ({ cartItem }) => {
  const { img, name, price, author, quantity } = cartItem;
  return (
    <div className="CartItem">
      <div className="cartItem">
        <div className="sideImg">
          <img src={img} alt="bookimage" className="cartBookImg" />
        </div>
        <div className="details">
          <p className="cartBookTitle">{name}</p>
          <p className="cartBookAuthor">By:{author}</p>
          <p>
            Quantity:<span className="cartBookQuantity">{quantity}</span>
          </p>
          <p className="cartBookPrice">&#36; {price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
