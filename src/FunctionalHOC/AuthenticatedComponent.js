import React from "react";
import WrappedComponent from "./WrappedComponent";

function AuthenticatedComponent() {
  return <p>Hi, Gokaran</p>;
}

export default WrappedComponent(AuthenticatedComponent, false);
