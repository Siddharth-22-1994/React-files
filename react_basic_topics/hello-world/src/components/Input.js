import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <label>Username</label>
        <input ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
