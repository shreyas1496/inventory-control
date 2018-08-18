import Actions from '../constants/actions';

const initialState = {
  showNavbar: true,
};

const appStateReducer = (store = initialState, action) => {
  switch (action.type) {
    case Actions.ACTION:
      return store;

    default:
      return store;
  }
};

export default appStateReducer;
