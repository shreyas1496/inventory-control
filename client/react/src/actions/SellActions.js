import { apiService } from '../common/services.js/apiService';
import ACTIONS from '../constants/actions';

const fetchProductsSuccess = res => ({
  type: ACTIONS.FETCH_PRODUCTS_SUCCESS,
  payload: res.data,
});

export const fetchProductForSell = () => (dispatch, getState) => {
  const { values } = getState().form.sell;
  if (values !== undefined) {
    return apiService({
      url: '/products',
      successAction: fetchProductsSuccess,
    });
  }
  return { type: '' };
};
