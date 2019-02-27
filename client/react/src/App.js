import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import AppRouter from './auth/AppRouter';
import setDefaults from './common/clients/axiosDefaults';
import store from './redux/store';

class App extends Component {
  render() {
    setDefaults();
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
