import React from "react";

const UpdatedComp = (OriginalComp, incrementNumber) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increCount = () => {
      this.setState((prop) => {
        return { count: prop.count + incrementNumber };
      });
    };

    render() {
      return (
        <OriginalComp
          count={this.state.count}
          increment={this.increCount}
          {...this.props}
        ></OriginalComp>
      );
    }
  }
  return NewComp;
};

export default UpdatedComp;
