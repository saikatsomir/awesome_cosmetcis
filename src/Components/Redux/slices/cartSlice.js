import { createSlice } from '@reduxjs/toolkit';

const getLocalStorageCart = () => {
  const cartData = JSON.parse(localStorage.getItem('cartData'));
  if (cartData && Date.now() - cartData.timestamp < 24 * 60 * 60 * 1000) {
    return cartData.cart;
  }
  return { items: [], totalAmount: 0 };
};

const initialState = getLocalStorageCart();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === newItem._id
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // Save to localStorage
      localStorage.setItem(
        'cartData',
        JSON.stringify({
          cart: state,
          timestamp: Date.now(),
        })
      );
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // Save to localStorage
      localStorage.setItem(
        'cartData',
        JSON.stringify({
          cart: state,
          timestamp: Date.now(),
        })
      );
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item._id === itemId);
      if (item) {
        item.quantity += 1;
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // Save to localStorage
      localStorage.setItem(
        'cartData',
        JSON.stringify({
          cart: state,
          timestamp: Date.now(),
        })
      );
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item._id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // Save to localStorage
      localStorage.setItem(
        'cartData',
        JSON.stringify({
          cart: state,
          timestamp: Date.now(),
        })
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
