import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nglg1k1kze.execute-api.us-west-1.amazonaws.com/dev'
});

export default instance;
