// Redux Store Configuration - centralized state management
import { configureStore } from "@reduxjs/toolkit"; // Redux Toolkit store setup
import { CartSlice } from "./Slices/CartSlice"; // Cart reducer

// Configure and export Redux store
export const store = configureStore({
  reducer: {
    // Map reducers to state slices
    cart: CartSlice.reducer, // Cart state managed by CartSlice reducer
  },
});