import axios from 'axios';
import apiDefaultConfig from '../../config/apiDefaultConfig';
import env from '../../config/env';
import { startLoading } from '../../actions/AppStateActions';

const apiServiceCore = actualConfig => (dispatch, getState) => {
  dispatch(startLoading());
  axios({
    baseURL: actualConfig.baseURL,
    url: actualConfig.url,
    data: actualConfig.data,
  })
    .then((res) => {
      if (env.logApi === true) {
        console.log(res);
      }
      actualConfig.successAction(res, actualConfig, dispatch, getState);
    })
    .catch((err) => {
      if (env.logApi) {
        console.log(err);
      }
      actualConfig.failureAction(err, actualConfig, dispatch, getState);
    });
};

export const apiService = (config) => {
  const actualConfig = { ...apiDefaultConfig, ...config };
  if (env.logApi) {
    console.log('API CALL INITIATE', actualConfig);
  }
  return apiServiceCore(actualConfig);
};
