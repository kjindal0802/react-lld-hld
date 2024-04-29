import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("getUsers", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => err);
});

const rootSice = createSlice({
  name: "root",
  initialState: {
    value: 10,
    users: [],
    status: null,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementPrepare: {
      reducer: (state, action) => {
        state.value = state.value + action.payload.value;
      },
      prepare: (value) => {
        value = value + 2;
        return {
          payload: {
            value,
          },
        };
      },
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "ok";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { increment, decrement, incrementPrepare } = rootSice.actions;

export default rootSice.reducer;
