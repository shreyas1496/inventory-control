import axios from 'axios';

const ProductClient = {
  getProducts: (search) => axios.get(`/products?q=${search}`),
  addProduct: (data) => axios.post('/products', data)
}

export default ProductClient;