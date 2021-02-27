// Render Prop is used to pass 'props' as function

import React, { Component } from "react";

class RenderReuseComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  CountIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.CountIncrement)}</div>
    );
  }
}

export default RenderReuseComp;
