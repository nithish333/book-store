import React from "react";
import "./CartItemComponent.styles.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  removeItemFromCart,
  removeTotalItemFromCart,
} from "../../redux/cart/cartActions";

const CartItem = ({
  cartItem,
  addItemToCart,
  removeItemFromCart,
  removeTotalItemFromCart,
}) => {
  const { img, name, price, author, quantity } = cartItem;
  return (
    <div className="CartItem">
      <div className="cartItem">
        <div className="sideImg">
          <img src={img} alt={name} className="cartBookImg" />
        </div>
        <div className="details">
          <Link to={`/book/${name}`} className="cartBookTitle">
            {name}
          </Link>
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
          <p className="cartBookPrice">
            <span style={{ fontWeight: "normal", fontSize: "20px" }}>
              Total :
            </span>{" "}
            &#36; {(quantity * price).toFixed(2)}
          </p>
          <button
            className="removeCartItem"
            onClick={() => removeTotalItemFromCart(cartItem)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
//Nithish
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeTotalItemFromCart: (item) => dispatch(removeTotalItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
