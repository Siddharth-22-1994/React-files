import React, { Component } from "react";

let styles = {
  marginTop: "50px",
};

class RefDemos extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  //   componentDidMount() {
  //     this.inputRef.current.focus(); // focus from current method is used to focus on input field when the page is opened
  //     console.log(this.inputRef);
  //   }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" style={styles} ref={this.inputRef} />
        <button onClick={this.clickHandler}> Submit </button>
      </div>
    );
  }
}

export default RefDemos;
