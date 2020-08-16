import React from "react";
import "./CartItemComponent.styles.css";
import { connect } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cartActions";

const CartItem = ({ cartItem, addItemToCart, removeItemFromCart }) => {
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
          <div className="quantityOverall">
            Quantity:
            <span className="cartBookQuantity">
              <div
                className="quantitySign"
                onClick={() => addItemToCart(cartItem)}
              >
                +
              </div>
              <span>{quantity}</span>
              <div
                className="quantitySign"
                onClick={() => removeItemFromCart(cartItem)}
              >
                -
              </div>
            </span>
          </div>
          <p className="cartBookPrice">&#36; {(quantity * price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
