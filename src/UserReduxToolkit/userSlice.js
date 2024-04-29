import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

export const submitUser = createAsyncThunk(
  "user/submitUser",
  async (data, thunkAPI) => {
    // thunkAPI.dispatch(setInitialState());
    const { email } = data;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem(email) === null) {
          localStorage.setItem(email, JSON.stringify(data));
          resolve("User Registerd successfully.");
        } else if (localStorage.getItem(email)) {
          reject("User already exists.");
        } else {
          reject("Something went wrong.");
        }
      }, 3000);
    });
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, thunkAPI) => {
    // thunkAPI.dispatch(setInitialState()); // to reset loading , error, success state
    const { email, password } = data;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem(email) === null) {
          reject("User does not exists");
        } else {
          const userData = JSON.parse(localStorage.getItem(email));
          if (password === userData.password) {
            const token = "asffgfasgjsnkdjjk2345rtk4hk35253423";
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(userData));
            resolve({
              userData,
              message: "Sign in complete.",
            });
          } else {
            reject("The password you entered is incorrect");
          }
        }
      }, 2500);
    });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },
  reducers: {
    setInitialState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.user = {};
    },
  },
  extraReducers: {
    [submitUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload;
    },
    [submitUser.pending]: (state, action) => {
      state.message = "Loading...";
      state.isLoading = true;
    },
    [submitUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error.message;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload.message;
      state.user = action.payload.userData;
    },
    [loginUser.pending]: (state, action) => {
      state.message = "Signing In...";
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error.message;
    },
  },
});

export const { setInitialState, setUserSession, getUser } = userSlice.actions;
export default userSlice.reducer;
