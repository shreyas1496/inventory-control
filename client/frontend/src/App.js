import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavbarContainer, DashboardContainer, SellContainer } from './containers';

class App extends Component {
  componentDidUpdate() {
    console.log('cdu App');
  }

  render() {
    return (
      <div className="App">
        <NavbarContainer showNavbar={this.props.showNavbar} />
        <Switch>
          <Route path="/dashboard" exact render={() => <DashboardContainer />} />
          <Route path="/sell" render={() => <SellContainer />} />
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

export default withRouter(connect(mapStateToProps)(App));
