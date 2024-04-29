import React from "react";
import Users from "./users/Users";
import "./App.css";

export default class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gokaran",
      users: [
        {
          name: "Gokaran",
          age: 23,
        },
        {
          name: "Manisha",
          age: 28,
        },
        {
          name: "Archit",
          age: 24,
        },
      ],
    };
  }
  makeUserYounger = () => {
    let users = [...this.state.users];
    users = users.map((user) => {
      return {
        ...user,
        age: user.age - 10,
      };
    });
    this.setState({ users: users }, () => console.log(users));
  };

  changeTitle = (newTitle) => {
    this.setState({ title: newTitle });
  };

  render() {
    return (
      <div>
        <Users data={this.state.users}></Users>
        <button onClick={this.makeUserYounger}>Age Change</button>
        <hr />
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle.bind(null, "Jindal")}>
          Change State
        </button>
      </div>
    );
  }
}
