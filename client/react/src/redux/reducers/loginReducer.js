import ACTION_NAMES from "../ACTION_NAMES";

const initialState = {
  isLoggedIn: false,
  requestHeaders: {}
};

const loginReducer = (state={...initialState}, action) => {
  const newState = {...state};
  switch(action.type) {
    case ACTION_NAMES.LOGIN_SUCCESS: {
      newState.isLoggedIn = true;
      newState.requestHeaders = action.headers;
      newState.isAdmin = action.payload.data.data.admin
      break;
    }
    default: {
      break;
    }
  }
  return newState;
}

export default loginReducer;