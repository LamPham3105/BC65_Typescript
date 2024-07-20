import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    number: (state: number = 1) => state,
  },
});
