import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      // If a code have to be executed when the state have been changed, write the code as Callback function
      () => {
        console.log("callback value is", this.state.count); // To display the count value in console
      }
    );
  }

  render() {
    return (
      <div>
        <h2>Count - {this.state.count}</h2>
        <button onClick={() => this.Increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
