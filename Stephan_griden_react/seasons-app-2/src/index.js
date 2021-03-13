import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./SpinnerDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there!</div>;
// };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, longit: null, errorMessage: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          longit: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.longit) {
      return (
        <div>
          <span>❌</span>
          Error: {this.state.errorMessage}
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat && this.state.longit) {
      return (
        <div>
          {/* <span>☑️</span> */}
          {/* <br />
          Latitude :{this.state.lat}
          <br />
          Longitude: {this.state.longit} */}
          <SeasonDisplay
            lat={this.state.lat}
            longit={this.state.longit}
          ></SeasonDisplay>
        </div>
      );
    }
    return <Spinner message="Please accept location request"></Spinner>;
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
