import React, { Component } from "react";

class RenderClickCount2 extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   CountIncrement = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };

  render() {
    const { count, CountIncrement } = this.props;
    return (
      <div>
        <button onClick={CountIncrement}>Click {count} times</button>
      </div>
    );
  }
}

export default RenderClickCount2;
