import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>
          Welcome {this.props.name} a.ka. {this.props.heroname}
        </h2>
      </div>
    );
  }
}

export default Welcome;
