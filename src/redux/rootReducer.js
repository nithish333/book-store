import { combineReducers } from "redux";
// import ShopReducer from "./shopData/shopReducer";
import UserReducer from "./user/userReducer";
import ShopReducer from "./shopData/shopReducer";
import CartReducer from "./cart/cartReducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: UserReducer,
  shop: ShopReducer,
  cart: CartReducer,
});

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
export default rootReducer;
