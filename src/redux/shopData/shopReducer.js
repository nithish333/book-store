import BOOK_DATA from "../../Components/BooksComponent/BooksData";
const INITIAL_STATE = {
  BOOK_DATA: BOOK_DATA,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ShopReducer;
