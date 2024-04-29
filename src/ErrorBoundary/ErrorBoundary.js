import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return <div></div>;
  }
}

export default ErrorBoundary;
