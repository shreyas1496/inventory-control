import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { NavbarContainer, DashboardContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route path="/dashboard" exact render={DashboardContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
