import React from "react";
import "./BookComponent.css";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";

const BookComponent = ({ book, addItemToCart }) => {
  const { img, name, price, author } = book;
  return (
    <div className="Book">
      <div className="content">
        <div className="image">
          <img src={img} alt="Book" />
        </div>
        <div className="details">
          <h3 className="name">{name}</h3>
          <p className="author">
            <small>By :</small>
            {author}
          </p>
          <h2>&#36; {price}</h2>
        </div>

        <button className="cartButton" onClick={() => addItemToCart(book)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(BookComponent);
