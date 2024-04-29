import React from "react";

export default function WrappedComponent(Component, authenticated) {
  return function (props) {
    return (
      <>
        {authenticated ? (
          <Component {...props} />
        ) : (
          <p>Welcome to login page</p>
        )}
      </>
    );
  };
}
