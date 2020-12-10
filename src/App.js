import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Qpaper from "./components/qpaper";
import Submitted from "./components/submitted";
import Admin from "./components/admin";
import { useStateValue } from "./components/StateProvider";

import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Body/> */}
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="/loading">
          <Loading />
        </Route>
        <Route path="/qpaper">
          <Qpaper />
        </Route>
        <Route path="/submitted">
          <Submitted />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
