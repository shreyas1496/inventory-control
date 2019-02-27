import ACTION_NAMES from "../ACTION_NAMES";
import axios from 'axios';

const loginMiddleware = store => next => action => {
  if (action.type === ACTION_NAMES.LOGIN_SUCCESS) {
    const headers = action.payload.headers;
    axios.defaults.headers = {
      "access-token": headers["access-token"],
      client: headers.client,
      uid: headers.uid,
      expiry: headers.expiry
    };
    action.headers = {
      "access-token": headers["access-token"],
      client: headers.client,
      uid: headers.uid,
      expiry: headers.expiry
    }
  }
  next(action);
}

export default loginMiddleware;