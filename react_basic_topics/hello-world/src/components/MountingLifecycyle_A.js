import React, { Component } from "react";
import MountingLifecycyle_B from "./MountingLifecycle_B";

class MountingLifecycyle_A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "My name",
    };
    console.log(`${this.state.name} from constructor`);
  }

  static getDerivedStateFromProps(Props, state) {
    console.log("Lifecycle_A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle_A componentDidMount");
  }
  render() {
    console.log("render Method");
    return (
      <div>
        <h2>LifeCycle A</h2>
        <div>{console.log("LifeCycle_A return Method")}</div>
        <div>
          <MountingLifecycyle_B></MountingLifecycyle_B>
        </div>
      </div>
    );
  }
}

export default MountingLifecycyle_A;
