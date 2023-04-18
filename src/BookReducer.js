import {  createSlice } from "@reduxjs/toolkit";
import book_data from "./book_data";
export const bookSlice = createSlice({
  name: "bookStore",
  initialState: {
    books: [...book_data],
    cart: [],
    orders: [], //orders
    address: "",
  },
  reducers: {
    addAdress(state, action) {
      
      state.address = `${action.payload}`;
      alert("Adress is added successfully");
    },
    addToCart(state, action) {
     

      state.cart = [...state.cart, action.payload];
    },
    addToBought(state, action) {
     
      state.orders = [...state.orders, ...action.payload];

      state.cart = [];
    },
  },
});
export const actions = bookSlice.actions;

