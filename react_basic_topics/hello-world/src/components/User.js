import React, { Component } from "react";

class User extends Component {
  render(props) {
    return (
      <div>
        <h3>Hey Iam {this.props.name(false)}</h3>
      </div>
    );
  }
}

export default User;
