import React from "react";
import "./BookDetails.styles.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectBookDetails } from "../../redux/shopData/shopSelector";
import { addItemToCart } from "../../redux/cart/cartActions";

const BookDetails = ({ bookDetails, addItemToCart }) => {
  //   console.log(bookDetails);
  return (
    <div>
      <div className="BookDetails">
        <div className="aboutsideImg">
          <img src={`${bookDetails[0].img}`} alt={`${bookDetails[0].name}`} />
        </div>
        <div className="bookDetails">
          <p className="about aboutBook">About the book</p>
          <p className="about aboutName">{bookDetails[0].name}</p>
          <p className="about aboutAuthor">
            <span>Author : </span>
            {bookDetails[0].author}
          </p>
          <p className="about aboutPrice">
            <span>Price : </span>
            &#36;{bookDetails[0].price}
          </p>
          <p className="about aboutDes">
            <span>Description : </span>
            {bookDetails[0].description}
          </p>
          <div class="buttons">
            <button
              className="addItemToCart"
              onClick={() => addItemToCart(bookDetails[0])}
            >
              Add item to cart
            </button>
            <Link to="/" className="goBack">
              Go back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  bookDetails: selectBookDetails(ownProps.match.params.bookname)(state),
});
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (book) => dispatch(addItemToCart(book)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookDetails)
);
