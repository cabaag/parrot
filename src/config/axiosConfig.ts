import axios from 'axios';
import { baseURL } from './api';

const instance = axios.create({
  baseURL
});

const AUTH_TOKEN = JSON.parse(localStorage.getItem('auth') ?? '{}')?.token

if (AUTH_TOKEN) {
  instance.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
}

instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response);
}, (error: any) => Promise.reject(error));

export default instance;