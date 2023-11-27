import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = window.localStorage.getItem("cart")
  ? JSON.parse(window.localStorage.getItem("cart"))
  : { cartItems: [], paymentMethod: "PayPal", shippingAddress: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((i) => item._id === i._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === existItem._id ? item : i
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate items price
      updateCart(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);

      updateCart(state);
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
