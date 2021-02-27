import React, { Component } from "react";
import UpdatedComp from "./withCounter";

class Hoc1_ClickCount extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>
          {" "}
          {this.props.name} Click Me {count}
        </button>
      </div>
    );
  }
}

export default UpdatedComp(Hoc1_ClickCount, 4);
