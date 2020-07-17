import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.component";
import SearchBox from "./Components/SearchBox/SearchBox.component";
import CategoriesandFilter from "./Components/CategoriesAndFilter/CategoriesAndFilter.component";
import ShopTitle from "./Components/Title/ShopTitle";
import BooksComponent from "./Components/BooksComponent/Books.component";
import BOOK_DATA from "./Components/BooksComponent/BooksData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      userInput: "",
    };
  }
  componentDidMount() {
    this.setState({
      books: BOOK_DATA,
    });
  }
  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  handleCategoryChange = (event) => {
    console.log(event.target.value.toLowerCase());
    // const books = [...this.state.books];
    if (event.target.value === "All") {
      this.setState({
        books: BOOK_DATA,
      });
    } else {
      const categorizedBooks = BOOK_DATA.filter((book) => {
        return book.category === event.target.value.toLowerCase();
      });
      //Problem here
      this.setState({
        books: categorizedBooks,
      });
    }
  };

  handleFilterChange = (event) => {
    console.log(event.target.value);
    // const books = [...this.state.books];
    if (event.target.value === "Lowest to Highest") {
      const ascendingPrice = BOOK_DATA.sort((a, b) => {
        return a.price - b.price;
      });
      this.setState({
        books: ascendingPrice,
      });
    } else if (event.target.value === "Highest to Lowest") {
      const descendingPrice = BOOK_DATA.sort((a, b) => {
        return b.price - a.price;
      });
      this.setState({
        books: descendingPrice,
      });
    }
  };
  render() {
    const { books, userInput } = this.state;
    //This one is for searching books
    const searchedBook = books.filter((book) => {
      return book.name.toLowerCase().includes(userInput);
    });
    return (
      <div className="App">
        <Header />
        <SearchBox change={(event) => this.handleInputChange(event)} />
        <CategoriesandFilter
          handleCategoryChange={(event) => this.handleCategoryChange(event)}
          handleFilterChange={(event) => this.handleFilterChange(event)}
        />
        <ShopTitle />
        <BooksComponent books={searchedBook} />
      </div>
    );
  }
}

export default App;
