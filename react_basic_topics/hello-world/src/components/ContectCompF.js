import React, { Component } from "react";
import { UserConsumer } from "./ContextUser";

class ContectCompF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <div>Hello to you {username}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ContectCompF;
