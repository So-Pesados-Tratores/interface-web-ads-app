import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./features/cart/cartSlice";
import productReducer from './features/product/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
