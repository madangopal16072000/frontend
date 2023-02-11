// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevtools } from "redux-devtools-extension";

// const reducer = combineReducers({});

// let initialState = {};
// const middleware = { thunk };
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevtools(applyMiddleware(...middleware))
// );

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
