import React from "react";
import "./Books.css";
import BookComponent from "../BookComponent/BookComponent";

const BooksComponent = ({ books }) => {
  return (
    <div className="Books">
      {books.map((Book) => {
        return (
          <BookComponent
            name={Book.name}
            key={Book.id}
            price={Book.price}
            author={Book.author}
            category={Book.category}
            image={Book.img}
          />
        );
      })}
    </div>
  );
};

export default BooksComponent;
