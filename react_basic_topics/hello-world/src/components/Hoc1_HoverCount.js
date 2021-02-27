import React, { Component } from "react";
import UpdatedComp from "./withCounter";

class Hoc1_HoverCount extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h2 onMouseOver={increment}>Hover Me {count}</h2>
      </div>
    );
  }
}

export default UpdatedComp(Hoc1_HoverCount, 6);
