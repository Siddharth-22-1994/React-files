import React, { Component } from "react";
// import ProperComp from "./ProperComp";
// import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Myname",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Myname",
      });
    }, 2000);
  }

  render() {
    console.log("*************** Parent Comp *********************");
    return (
      <div>
        {/* <h2>{this.state.name}</h2> */}
        {/* <ProperComp></ProperComp>
        <RegularComp></RegularComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
