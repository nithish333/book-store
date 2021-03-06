import React from "react";
import "./BookComponent.css";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const BookComponent = ({
  book,
  addItemToCart,
  currentUser,
  match,
  history,
}) => {
  const { img, name, price, author } = book;

  return (
    <div className="Book">
      <div className="content">
        <div className="image">
          <img src={img} alt="Book" />
        </div>
        <div className="details">
          <Link to={`/book/${name}`} className="name">
            {name}
          </Link>
          <p className="author">
            <small>By :</small>
            {author}
          </p>
          <h2>&#36; {price}</h2>
        </div>
        {currentUser ? (
          <button className="cartButton" onClick={() => addItemToCart(book)}>
            Add to cart
          </button>
        ) : (
          <Link to="/signin" className="linkOnRedirect">
            Add to cart
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookComponent)
);
