import React from "react";
import "./HomePage.css";
import SearchBox from "../SearchBox/SearchBox.component";
import CategoriesandFilter from "../CategoriesAndFilter/CategoriesAndFilter.component";
import ShopTitle from "../Title/ShopTitle";
import BooksComponent from "../BooksComponent/Books.component";
// import BOOK_DATA from "../BooksComponent/BooksData";
import { connect } from "react-redux";
import { handleInputChange } from "../../redux/shopData/shopActions";

const HomePage = ({ BOOK_DATA, userInput }) => {
  // //? Handling input change

  // handleInputChange = (event) => {
  //   this.setState({
  //     userInput: event.target.value,
  //   });
  // };

  // //? Handling category change

  // handleCategoryChange = (event) => {
  //   if (event.target.value === "All") {
  //     this.setState({
  //       books: BOOK_DATA,
  //     });
  //   } else {
  //     const categorizedBooks = BOOK_DATA.filter((book) => {
  //       return book.category === event.target.value.toLowerCase();
  //     });
  //     //Problem here
  //     this.setState({
  //       books: categorizedBooks,
  //     });
  //   }
  // };

  // //? Handling filter change

  // handleFilterChange = (event) => {
  //   console.log(event.target.value);
  //   const books = [...this.state.books];

  //   switch (event.target.value) {
  //     case "Lowest to Highest":
  //       const ascendingPrice = books.sort((a, b) => {
  //         return a.price - b.price;
  //       });
  //       this.setState({
  //         books: ascendingPrice,
  //       });
  //       break;
  //     case "Highest to Lowest":
  //       const descendingPrice = books.sort((a, b) => {
  //         return b.price - a.price;
  //       });
  //       this.setState({
  //         books: descendingPrice,
  //       });
  //       break;
  //     default:
  //       this.setState({
  //         books: BOOK_DATA,
  //       });
  //   }
  // };
  //This one is for searching books
  const searchedBook = BOOK_DATA.filter((book) => {
    return book.name.toLowerCase().includes(userInput);
  });
  return (
    <div className="HomePage">
      <SearchBox change={(event) => this.handleInputChange(event)} />
      <CategoriesandFilter
        handleCategoryChange={(event) => this.handleCategoryChange(event)}
        handleFilterChange={(event) => this.handleFilterChange(event)}
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
  handleInputChange: (input) => dispatch(handleInputChange(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
