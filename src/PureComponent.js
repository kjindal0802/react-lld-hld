import React from "react";

export default class PC extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
    };
    this.inputValue = React.createRef();
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return true;
  //   }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button
          onClick={() =>
            this.setState({ value: this.inputValue.current.value })
          }
        >
          Update State
        </button>
        <input ref={this.inputValue} />
      </div>
    );
  }
}
