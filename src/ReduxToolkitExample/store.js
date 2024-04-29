import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlice";

const store = configureStore({
  reducer: {
    counter: rootReducer,
  },
});

export default store;
