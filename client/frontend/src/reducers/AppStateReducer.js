import Actions from '../constants/actions';

const initialState = {
  showNavbar: true,
  products: [],
};

const appStateReducer = (store = { ...initialState }, action) => {
  switch (action.type) {
    case Actions.ACTION:
      return store;

    case Actions.FETCH_PRODUCTS_SUCCESS:
      store.products = action.payload;
      return { ...store };

    default:
      return store;
  }
};

export default appStateReducer;
