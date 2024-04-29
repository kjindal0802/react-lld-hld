import React, { Component } from "react";

const HOC = (Component, data) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: data,
      };
    }
    addCounter = () => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    };
    render() {
      return (
        <Component
          addCounter={this.addCounter}
          count={this.state.count}
        ></Component>
      );
    }
  };
};

export default HOC;
