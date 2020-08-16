import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectShopData = createSelector([selectShop], (books) => books.BOOK_DATA);

export const selectBookDetails = (bookname) =>
  createSelector([selectShopData], (books) =>
    books.filter((book) => book.name === bookname)
  );
