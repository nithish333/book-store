const { default: CART_ACTION_TYPES } = require("./cartActionTypes");

export const addItemToCart = (item) => ({
  type: CART_ACTION_TYPES.ADD_ITEMS_TO_CART,
  payload: item,
});
