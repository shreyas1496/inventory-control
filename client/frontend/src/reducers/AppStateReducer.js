import Actions from '../constants/actions';

const initialState = {
  showNavbar: true,
  cart: [
    {
      id: 3,
      name: 'ssss',
      company: null,
      description: null,
      on_hand: null,
      max_quantity: null,
      reorder_level: null,
      price: null,
      location: null,
      usage: null,
      expiry: null,
      created_at: '2018-12-08T08:48:20.791Z',
      updated_at: '2018-12-08T08:48:20.791Z',
    },
  ],
};

const appStateReducer = (store = { ...initialState }, action) => {
  switch (action.type) {
    case Actions.ACTION:
      return store;

    case Actions.FETCH_PRODUCTS_SUCCESS:
      store.products = action.payload;
      return { ...store };

    case Actions.ADD_PRODUCT_TO_CART: {
      if (store.cart.some(product => product.id === action.payload.id)) {
        return store;
      }
      return { ...store, cart: [...store.cart, action.payload] };
    }

    case Actions.REMOVE_PRODUCT_FROM_CART: {
      const cart = store.cart.filter(product => product.id !== action.payload);
      return { ...store, cart };
    }

    case Actions.CLEAR_CART: {
      const cart = [];
      return { ...store, cart };
    }

    default:
      return store;
  }
};

export default appStateReducer;
