import { combineReducers } from "redux";
// import ShopReducer from "./shopData/shopReducer";
import UserReducer from "./user/userReducer";
import ShopReducer from "./shopData/shopReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  shop: ShopReducer,
});

export default rootReducer;
