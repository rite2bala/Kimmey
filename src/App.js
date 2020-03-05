import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./scenes/login/Login";
import HCP from './scenes/HCP/patientNormalForm';

export default class extends Component{
  render() {
    return (
      <Router>
    <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/hcp" component={HCP} />   
                                   
    </Switch>
    </Router>
    )
       
  }
}