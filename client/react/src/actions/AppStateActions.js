import ACTION_TYPES from '../constants/actions';

export const startLoading = requestName => ({
  type: ACTION_TYPES.START_LOADING,
  payload: requestName,
});

export const addProductToCart = product => ({
  type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
  payload: {
    ...product,
    quantity: product.on_hand,
  },
});

export const removeProductFromCart = id => ({
  type: ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: ACTION_TYPES.CLEAR_CART,
});

export const updateProduct = product => ({
  type: ACTION_TYPES.UPDATE_PRODUCT,
  payload: product,
});
