const { default: CART_ACTION_TYPES } = require("./cartActionTypes");

export const addItemToCart = (item) => ({
  type: CART_ACTION_TYPES.ADD_ITEMS_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CART_ACTION_TYPES.REMOVE_ITEMS_FROM_CART,
  payload: item,
});

export const removeTotalItemFromCart = (item) => ({
  type: CART_ACTION_TYPES.REMOVE_TOTALITEM_FROM_CART,
  payload: item,
});
