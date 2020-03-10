import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import HCP from './scenes/HCP/PatientForm/PatientFormComponent';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/hcp" component={HCP} />
      </Switch>
    )
  }
}

export default App;