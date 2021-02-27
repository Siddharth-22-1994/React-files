import React, { Component } from "react";

class UpdateLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "UpdateLifecycle_A",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps UpdateLifeCycle_A");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate UpdateLifeCycle_A");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate UpdateLifecycle_A");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate UpdateLifecycle_A");
  }

  chageState = () => {
    this.setState({
      name: "Code updated",
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.chageState}>Click state</button>
      </div>
    );
  }
}

export default UpdateLifecycle;
