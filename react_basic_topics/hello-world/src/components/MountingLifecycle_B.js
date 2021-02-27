import React, { Component } from "react";

class MountingLifecycyle_B extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "My name",
    };
    console.log(`${this.state.name} from constructor`);
  }

  static getDerivedStateFromProps(Props, state) {
    console.log("Lifecycle_B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  render() {
    console.log("Lifecycle_B render Method");
    return (
      <div>
        <h2>LifeCycle B</h2>
        <div>{console.log("Lifecycle_B return Method")}</div>
      </div>
    );
  }
}

export default MountingLifecycyle_B;
