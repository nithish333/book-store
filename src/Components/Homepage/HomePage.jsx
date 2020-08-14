import React from "react";
import "./HomePage.css";
import SearchBox from "../SearchBox/SearchBox.component";
import CategoriesandFilter from "../CategoriesAndFilter/CategoriesAndFilter.component";
import ShopTitle from "../Title/ShopTitle";
import BooksComponent from "../BooksComponent/Books.component";
import books from "../BooksComponent/BooksData";
import { connect } from "react-redux";
import {
  handleInputChange,
  handleCategoryChange,
  handleFilterChange,
} from "../../redux/shopData/shopActions";

const HomePage = ({
  BOOK_DATA,
  userInput,
  setInputChange,
  setCategory,
  setFilter,
}) => {
  // const books = [...BOOK_DATA];
  // //? Handling input change

  const handleChange = (event) => {
    setInputChange(event.target.value);
  };

  // //? Handling category change

  const handleCategory = (event) => {
    // const categoryBooks = [...BOOK_DATA];
    if (event.target.value === "All") {
      setCategory(books);
    } else {
      const categorizedBooks = books.filter((book) => {
        return book.category.includes(event.target.value.toLowerCase());
      });
      //Problem here
      setCategory(categorizedBooks);
    }
  };

  // //? Handling filter change

  const handleFilter = (event) => {
    console.log(event.target.value);
    // const books = [...this.state.books];
    const filterBooks = [...BOOK_DATA];
    if (event.target.value === "Lowest to Highest") {
      const ascendingPrice = filterBooks.sort((a, b) => {
        return a.price - b.price;
      });
      setFilter(ascendingPrice);
    } else if (event.target.value === "Highest to Lowest") {
      const descendingPrice = filterBooks.sort((a, b) => {
        return b.price - a.price;
      });
      setFilter(descendingPrice);
    } else {
      setFilter(filterBooks);
    }
  };
  //This one is for searching books
  const searchedBook = BOOK_DATA.filter((book) => {
    return book.name.toLowerCase().includes(userInput);
  });
  return (
    <div className="HomePage">
      <SearchBox change={(event) => handleChange(event)} />
      <CategoriesandFilter
        handleCategoryChange={(event) => handleCategory(event)}
        handleFilterChange={(event) => handleFilter(event)}
      />
      <ShopTitle />
      <BooksComponent books={searchedBook} />
    </div>
  );
};

const mapStateToProps = ({ shop }) => ({
  BOOK_DATA: shop.BOOK_DATA,
  userInput: shop.userInput,
});
const mapDispatchToProps = (dispatch) => ({
  setInputChange: (input) => dispatch(handleInputChange(input)),
  setCategory: (categoryChange) =>
    dispatch(handleCategoryChange(categoryChange)),
  setFilter: (filterChange) => dispatch(handleFilterChange(filterChange)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
