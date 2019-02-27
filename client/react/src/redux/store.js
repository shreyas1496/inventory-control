import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loginReducer from './reducers/loginReducer';
import loginMiddleware from './middlewares/loginMiddleware';

const rootReducer = combineReducers({
  auth: loginReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(loginMiddleware),
  // other store enhancers if any
);

const store = createStore(rootReducer,
  enhancer);

export default store;