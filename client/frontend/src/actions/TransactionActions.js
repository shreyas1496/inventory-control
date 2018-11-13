import axios from 'axios';
import apiDefaultConfig from '../config/apiDefaultConfig';

export const postTransaction = postData => axios({
  ...apiDefaultConfig,
  url: '/transactions',
  method: 'post',
  data: postData,
});
