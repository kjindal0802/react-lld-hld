import React, { Component } from "react";
import HOC from "./HOC";
const otherComponent = React.lazy(() => import("./HOC"));

class Comments extends Component {
  render() {
    return (
      <div>
        <p>Comments : {this.props.count}</p>
        <button onClick={this.props.addCounter}>Add Comments</button>
      </div>
    );
  }
}

export default HOC(Comments, 0);
