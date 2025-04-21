import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./setUser";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
