import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavbarContainer, DashboardContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer showNavbar={this.props.showNavbar} />
        <Switch>
          <Route path="/dashboard" exact render={() => <div>sbsdhjbjdbsjbd</div>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showNavbar: state.appState.showNavbar,
});

App.propTypes = {
  showNavbar: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
