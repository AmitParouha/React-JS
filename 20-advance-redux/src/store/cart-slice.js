import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, actions) {
      const newItem = actions.payload;
      const existingItem = state.items.find((item) =>item.itemId === newItem.itemId);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.itemId,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          description: newItem.description
        }); 
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice =
          existingItem.price * existingItem.quantity;
      }
      state.totalQuantity = state.totalQuantity+1
    },

    removeItemToCart(state, actions) {
      const itemId = actions.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);
      if (existingItem.quantity > 1) {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        --existingItem.quantity;
      } else {
        state.items = state.items.filter((item) => item.itemId !== itemId);
      }
      state.totalQuantity = state.totalQuantity-1
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
