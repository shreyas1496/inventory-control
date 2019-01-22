import Actions from '../constants/actions';

const initialState = {
  showNavbar: true,
  cart: [
    {
      id: 5,
      name: 'display',
      company: 'hcl',
      description: 'flexible',
      on_hand: 10,
      max_quantity: 400,
      reorder_level: 20,
      price: 200,
      location: 'abc123',
      usage: null,
      expiry: null,
      created_at: '2018-12-15T11:56:34.554Z',
      updated_at: '2018-12-18T15:32:34.178Z',
      quantity: 10,
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
      return { ...store, cart, bill: 0 };
    }

    case Actions.UPDATE_PRODUCT: {
      const { cart } = store;
      const foundIndex = cart.findIndex(product => product.id === action.payload.id);
      cart[foundIndex] = action.payload;
      return { ...store, cart: [...cart] };
    }

    default:
      return store;
  }
};

export default appStateReducer;
