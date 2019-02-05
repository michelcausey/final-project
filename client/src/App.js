import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Game from "./components/Game"
import About from "./components/About"
import Login from "./components/Login"
import GameOver from "./components/GameOver"

function App() {
  return (
    <div>
    <Nav />
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/gameover" component={GameOver} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
