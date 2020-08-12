import { combineReducers } from "redux";
// import ShopReducer from "./shopData/shopReducer";
import UserReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
