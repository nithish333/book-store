import BOOK_DATA from "../../Components/BooksComponent/BooksData";
import SHOP_ACTION_TYPES from "./shopActionTypes";
const INITIAL_STATE = {
  BOOK_DATA: BOOK_DATA,
  userInput: "",
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.HANDLE_INPUT_CHANGE:
      return {
        ...state,
        userInput: action.payload,
      };
    default:
      return state;
  }
};

export default ShopReducer;
