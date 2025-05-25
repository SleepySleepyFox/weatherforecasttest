import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./features/ApiDataSlice.js";
export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});
