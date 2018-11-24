import axios from 'axios';
import apiDefaultConfig from '../config/apiDefaultConfig';

export const addProduct = product => axios({
  ...apiDefaultConfig,
  url: '/products',
  method: 'post',
  data: product,
});

export const getProducts = () => axios({
  ...apiDefaultConfig,
  url: '/products',
  method: 'get',
});

export const updateProduct = product => axios({
  ...apiDefaultConfig,
  url: `/products/${product.id}`,
  method: 'put',
  data: product,
});

export const deleteProduct = id => axios({
  ...apiDefaultConfig,
  url: `/products/${id}`,
  method: 'delete',
});