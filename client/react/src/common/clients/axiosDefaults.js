import axios from "axios";
const setDefaults = () => {
  axios.defaults.baseURL = 'http://localhost:5000';
}

export default setDefaults;

