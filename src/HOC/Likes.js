import React, { Component } from "react";

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 1,
    };
  }
  addLike = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        likes: prevState.likes + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <p>Likes : {this.state.likes}</p>
        <button onClick={this.addLike}>Add Like</button>
      </div>
    );
  }
}

export default Likes;
