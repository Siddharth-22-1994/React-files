import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(SearchBar.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Search Images: </label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              placeholder="search"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
