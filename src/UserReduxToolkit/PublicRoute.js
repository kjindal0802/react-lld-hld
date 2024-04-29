import { Route, Redirect } from "react-router-dom";

const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export default function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dashboard" }} />
        )
      }
    />
  );
}
