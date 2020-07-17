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
      books: BOOK_DATA,
      userInput: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  render() {
    const { books, userInput } = this.state;
    const searchedBook = books.products.filter((book) => {
      return book.name.toLowerCase().includes(userInput);
    });
    return (
      <div className="App">
        <Header />
        <SearchBox change={(event) => this.handleInputChange(event)} />
        <CategoriesandFilter />
        <ShopTitle />
        <BooksComponent books={searchedBook} />
      </div>
    );
  }
}

export default App;
