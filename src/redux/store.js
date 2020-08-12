import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { createStore } from "redux";
import { applyMiddleware } from "redux";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
