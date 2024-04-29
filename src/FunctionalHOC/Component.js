import React from "react";
import WrappedIndicator from "./WrappedIndicator";

function Component({ loading, data }) {
  return <p> {loading ? "loading...." : data}</p>;
}

export default WrappedIndicator(Component, "abc");
