import React, { Component } from "react";

class RenderHoverCounter2 extends Component {
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
        <h3 onMouseOver={CountIncrement}>Hover Me {count}</h3>
      </div>
    );
  }
}

export default RenderHoverCounter2;
