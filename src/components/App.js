import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Timer from "../containers/timer/Timer";
import GetStarted from "./getStarted/GetStarted";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <GetStarted />
            <Footer />
          </Route>
          <Route path="/feed" component={Timer} exact />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
