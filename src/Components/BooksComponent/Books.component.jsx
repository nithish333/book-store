import React from "react";
import "./Books.css";
import BookComponent from "../BookComponent/BookComponent";

const BooksComponent = ({ books }) => {
  return (
    <div className="Books">
      {books.map((Book) => {
        return <BookComponent book={Book} key={Book.id} />;
      })}
    </div>
  );
};

export default BooksComponent;
