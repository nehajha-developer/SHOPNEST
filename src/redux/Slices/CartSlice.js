// Cart Slice - Redux Toolkit slice for managing shopping cart state
import { createSlice } from "@reduxjs/toolkit"; // Slice creation function from Redux Toolkit

// Create cart slice with initial state, actions, and reducers
export const CartSlice = createSlice({
  name: "cart", // Slice name used for action types
  initialState: [], // Initial state: empty cart array

  reducers: {
    // Action to add item to cart
    add: (state, action) => {
      // Mutate state directly (Redux Toolkit uses Immer internally)
      state.push(action.payload); // Add product to cart
    },

    // Action to remove item from cart
    remove: (state, action) => {
      // Return new array without the removed item
      return state.filter((item) => item.id !== action.payload); // Filter by product ID
    },
  },
});

// Export actions for use in components
export const { add, remove } = CartSlice.actions;

// Export reducer for store configuration
export default CartSlice.reducer;
