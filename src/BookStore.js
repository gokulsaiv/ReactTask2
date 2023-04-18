import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./BookReducer";
export const store = configureStore({
    reducer: {
      bookReducer: bookSlice.reducer,
    },
  });