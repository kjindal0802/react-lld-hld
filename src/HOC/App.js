import React, { Component } from "react";
import Likes from "./Likes";
import Comments from "./Comments";

export default class App extends Component {
  render() {
    return (
      <>
        <Likes />
        <Comments />
      </>
    );
  }
}
