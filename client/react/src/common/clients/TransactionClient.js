import axios from 'axios';

const TransactionClient = {
  postTransaction: data => axios.post('/transactions', data)
}
export default TransactionClient;