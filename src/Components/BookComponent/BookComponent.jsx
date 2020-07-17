import React from "react";
import "./BookComponent.css";

const BookComponent = ({ name, price, author, category, image }) => {
  return (
    <div className="Book">
      <div className="content">
        <div className="image">
          <img src={image} alt="Book" />
        </div>
        <div className="details">
          <h3 className="name">{name}</h3>
          <p className="author">
            <small>By :</small>
            {author}
          </p>
          <h2>&#36; {price}</h2>
        </div>

        <button className="cartButton">Add to cart</button>
      </div>
    </div>
  );
};

export default BookComponent;
