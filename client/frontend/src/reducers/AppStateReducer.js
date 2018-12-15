import Actions from '../constants/actions';

const initialState = {
  showNavbar: true,
  cart: {},
};

const appStateReducer = (store = { ...initialState }, action) => {
  switch (action.type) {
    case Actions.ACTION:
      return store;

    case Actions.FETCH_PRODUCTS_SUCCESS:
      store.products = action.payload;
      return { ...store };

    case Actions.ADD_PRODUCT_TO_CART:
      store.cart[action.payload.id] = action.payload;
      return { ...store };

    case Actions.REMOVE_PRODUCT_FROM_CART:
      delete store.cart[action.payload];
      return { ...store };

    case Actions.CLEAR_CART:
      store.cart = {};
      return { ...store };

    default:
      return store;
  }
};

export default appStateReducer;
