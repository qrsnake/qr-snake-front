import Axios from "axios";

const baseConfig = {
  baseURL: 'https://qr-snake.herokuapp.com',
  timeout: 60 * 1000,
};

const axios = Axios.create(baseConfig);


export default axios;