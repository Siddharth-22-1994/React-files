// ----- To use Conditional Rendering ------

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //  ----- Method:1 -------
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }

    // ----- Method:2 -------
    //     let message;
    //     if (this.state.isLoggedIn) {
    //       message = <div>Hello User</div>;
    //     } else {
    //       message = <div>Welcome Guest</div>;
    //     }
    //     return <div>{message}</div>;

    // ------ Method:3 -------
    // return this.state.isLoggedIn ? (
    //   <div>Hello User</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //  ------ Method:4 -------        //If the condition is false nothing will be displayd
    return this.state.isLoggedIn && <div>Hello User</div>;
  }
}

export default UserGreeting;
