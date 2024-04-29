import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { loginUser, setInitialState } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Rules from "./validationRules";
import { useEffect, useState } from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
  padding: "20px",
};

export default function Signup(props) {
  console.log(props);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.user
  ); //state.reudcername.stateproperty
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialState());
  }, []);

  let initialRender = false;

  useEffect(() => {
    if (isLoading && !initialRender) {
      var loadingToast = toast.loading(message);
    } else if (!isLoading && !isError && isSuccess) {
      toast.remove(loadingToast);
      toast.success(message);
    } else if (!isLoading && isError) {
      toast.remove(loadingToast);
      toast.error(message);
    } else {
    }

    return () => {
      toast.dismiss();
    };
  }, [isLoading, isError, isSuccess, message]);

  const onSubmit = (data) => {
    toast.dismiss(); //Dismiss all toasts instantly
    dispatch(loginUser(data));
  };

  return (
    <div style={styles}>
      <h2>Login</h2>
      <h3>User: {user && user.fullName}</h3>
      <div>
        <Toaster />
      </div>
      <form>
        <div>
          <Controller
            name="email"
            control={control}
            variant="contained"
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Email"
                type="email"
                {...field}
                error={!!error}
                helperText={error && error.message}
              />
            )}
            rules={{ ...Rules.email }}
          />
        </div>

        <br></br>
        <div>
          <Controller
            name="password"
            control={control}
            variant="contained"
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Password"
                type="password"
                {...field}
                error={!!error}
                helperText={error && error.message}
              />
            )}
            rules={{ ...Rules.password }}
          />
        </div>
        <br></br>
        <div>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button sx={{ ml: 1 }} variant="contained" color="success">
              Signup
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
