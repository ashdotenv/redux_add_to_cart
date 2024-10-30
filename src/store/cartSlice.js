import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const exists = state.some((item) => item.id === action.payload.id);

      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    totalPrice(state, action) {
      const total = state.reduce((acc, cur) => acc + cur.price, 0);
      state = total;
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
