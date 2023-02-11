import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "api/v1/products";
const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  }
);

// getSingleProduct
// export const fetchSingleProduct = createAsyncThunk(
//   "products/fetchSingleProducts",

//   async (productId) => {
//     const response = await axios.get(`/api/v1/product/${productId}`);
//     return response.data;
//   }
// );

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsAdded(state, action) {
      state.products.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched products to the array
        state.products = state.products.concat(action.payload.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // .addCase(fetchSingleProduct.fulfilled, (state, action) => {
    //   state.status = "succeeded";

    //   // Add any fetched products to the array
    //   state.products = state.products.concat(action.payload.product);
    // })
    // .addCase(fetchSingleProduct.pending, (state, action) => {
    //   state.status = "loading";
    // })
    // .addCase(fetchSingleProduct.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export const getSingleProduct = (state, productId) => {
  return state.products.products.find((product) => {
    return product._id === productId;
  });
};

export const { productsAdded } = productSlice.actions;

export default productSlice.reducer;
