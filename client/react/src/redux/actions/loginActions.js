import ACTION_NAMES from "../ACTION_NAMES";

export const loginSuccess = (payload) => ({
  type: ACTION_NAMES.LOGIN_SUCCESS,
  payload
})