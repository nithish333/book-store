import CART_ACTION_TYPES from "./cartActionTypes";
import { AddItemToCart } from "./cartUtil";

const INITIAL_CARTITEMS_STATE = {
  cartItems: [],
};

const CartReducer = (state = INITIAL_CARTITEMS_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
