import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tractor_id: 0,
  name: "",
  brand: "",
  year: 0,
  description: "",
  price: 0,
  work_hours: 0,
  category: "",
  urlImages: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    resetProduct: () => initialState
  }
});

export const { addProduct, resetProduct } = productSlice.actions;

export default productSlice.reducer;
