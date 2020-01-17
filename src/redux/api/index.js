import axios from "axios";

axios.defaults.headers = {
  "Content-Type": "application/json",
};
const _axios = axios
const baseUrl = `${process.env.REACT_APP_API_URL}`;

export default {
  _axios,
  baseUrl
};
