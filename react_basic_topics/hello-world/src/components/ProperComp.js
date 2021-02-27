// Helps to avoid re-rendering in class comp when there is no change in state

import React, { PureComponent } from "react";

class ProperComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return (
      <div>
        <h2>Pure Component</h2>
      </div>
    );
  }
}

export default ProperComp;
