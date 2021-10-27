import axios from 'axios';
import { baseURL } from './api';

const instance = axios.create({
  baseURL
});

instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response);
}, (error: any) => Promise.reject(error));

export default instance;