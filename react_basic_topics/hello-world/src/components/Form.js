import React, { Component } from "react";

let style = {
  color: "red",
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  chanagestate = (ev) => {
    this.setState({
      username: ev.target.value,
    });
  };

  changeComments = (ev) => {
    this.setState({
      comments: ev.target.value,
    });
  };

  changeTopic = (ev) => {
    this.setState({
      topic: ev.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label style={style}>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.chanagestate}
          />
          <br />
          <br />
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.changeComments}
          ></textarea>
          <br />
          <br />
          <label>Langauge</label>
          <select value={this.state.topic} onChange={this.changeTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="node">Node</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
