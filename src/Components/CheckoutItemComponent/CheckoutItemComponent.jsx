import React from "react";
import "./CheckoutItem.styles.css";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, img, quantity } = cartItem;
  return (
    <div className="CheckoutItem">
      <div className="checkoutSideImg">
        <img src={img} alt={name} />
      </div>
      <div className="checkoutSideDetails">
        <p>
          <span>{name}</span>
        </p>
        <p>
          Qunatity :<span> {quantity}</span>
        </p>
        <p>
          Total : <span>&#36;{(quantity * price).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
