// ------ To use SetState method with Eventhandler ------
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  ClickHandler() {
    this.setState({
      message: "Thanks for Clicking",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* Method:1 */}
        {/* <button onClick={this.ClickHandler.bind(this)}> Click me</button>  */}
        {/* Method:2 */}
        {/* 1. For normal event handler we will not use '()' while calling method. 
        but here while to use with setsate, we use '()'
            2. For Setstate we cover this.ClickHandler with {}, but here we will not do that*/}
        {/* <button onClick={() => this.ClickHandler()}> Click me</button> */}
        {/* Method:3  ---> [simplified from Method:1] */} */}
        <button onClick={this.ClickHandler}> Click me</button>
      </div>
    );
  }
}

export default EventBind;
