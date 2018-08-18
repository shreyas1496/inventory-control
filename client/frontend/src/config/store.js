import { combineReducers, createStore } from 'redux';
import { appStateReducer } from '../reducers';

const rootReducer = combineReducers({
  appState: appStateReducer,
});

const store = createStore(rootReducer);

export { store };
