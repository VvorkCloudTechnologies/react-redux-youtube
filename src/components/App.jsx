import React, { Component, Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/home">HOME</Link>
        <br />
        <Link to="/about">about</Link>

        <Route path="/home" component={() => <Home />} />
        <Route path="/About" component={() => <About />} />
      </div>
    );
  }
}
export default App;
