import { combineReducers } from "redux";
// import ShopReducer from "./shopData/shopReducer";
import UserReducer from "./user/userReducer";
import ShopReducer from "./shopData/shopReducer";
import CartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  shop: ShopReducer,
  cart: CartReducer,
});

export default rootReducer;
