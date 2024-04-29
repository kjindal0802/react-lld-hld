import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { submitUser, setInitialState } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Rules from "./validationRules";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
  padding: "20px",
};

export default function Signup() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  ); //state.reudcername.stateproperty

  const dispatch = useDispatch();

  let initialRender = false;

  useEffect(() => {
    dispatch(setInitialState());
  }, []);

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
    dispatch(submitUser(data));
  };

  return (
    <div style={styles}>
      <h2>Sign Up</h2>
      <div>
        <Toaster />
      </div>
      <form>
        <div>
          <Controller
            name="fullName"
            control={control}
            variant="contained"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Full Name"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ ...Rules.fullName }}
          />
        </div>
        <br></br>
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ ml: 1 }} variant="contained" color="success">
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
