import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/HomePage";
import Mission from "./MissionButton/Mission";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/mission" component={Mission}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Link: http://www.templatemonsterpreview.com/demo/152279.html?_gl=1*1ipxm75*_ga*MTE5NjIzNzY5OC4xNjEwMjU3NDY3*_ga_FTPYEGT5LY*MTYxMDI1NzQ2NS4xLjEuMTYxMDI1NzU0Mi40NQ..&_ga=2.49952998.1777579751.1610257467-1196237698.1610257467
// To use React Icons: https://react-icons.github.io/react-icons
