import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    base: "regular",
    crust: "classic",
    sauce: "pizza-sauce",
    cheese: "no-cheese",
  },
  reducers: {
    chooseBase: (state, action) => {
      state.base = action.payload;
    },
    chooseCrust: (state, action) => {
      state.crust = action.payload;
    },
    chooseSauce: (state, action) => {
      state.sauce = action.payload;
    },
    chooseCheese: (state, action) => {
      state.cheese = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { chooseBase, chooseCrust, chooseSauce, chooseCheese } =
  rootSlice.actions;
