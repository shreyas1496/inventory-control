import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { appStateReducer } from '../reducers';

const rootReducer = combineReducers({
  appState: appStateReducer,
  form: formReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store };
