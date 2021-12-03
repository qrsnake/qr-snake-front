import Axios from "axios";

const baseConfig = {
  baseURL: 'http://localhost:5000',
  timeout: 60 * 1000,
};

const axios = Axios.create(baseConfig);


export default axios;