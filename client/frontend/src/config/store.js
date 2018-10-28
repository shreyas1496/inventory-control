import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { appStateReducer } from '../reducers';

const rootReducer = combineReducers({
  appState: appStateReducer,
  form: formReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export { store };
