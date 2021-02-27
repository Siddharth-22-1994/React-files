import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      haserror: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      haserror: true,
    };
  }

  // componentDidCatch(error, info) {
  //   console.log(error);
  //   console.log(info);
  // }

  render() {
    if (this.state.haserror) {
      return <h2>Something went Wrong</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
