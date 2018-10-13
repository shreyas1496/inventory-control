import ACTION_TYPES from '../constants/actions';

export const startLoading = requestName => ({
  type: ACTION_TYPES.START_LOADING,
  payload: requestName,
});
