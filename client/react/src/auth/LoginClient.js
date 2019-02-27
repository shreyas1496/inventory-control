import axios from 'axios';

const LoginClient = {
  login: (data) => axios.post('/auth/sign_in', data)
}

export default LoginClient;