import React, { Component } from "react";
import Input from "./Input";

class ParentFocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  focusbuttonHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.focusbuttonHandler}>Focus me</button>
      </div>
    );
  }
}

export default ParentFocusInput;
