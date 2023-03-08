import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../api/apiSlice";
import productsReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
