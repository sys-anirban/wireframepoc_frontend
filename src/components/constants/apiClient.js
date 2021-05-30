import axios from 'axios';
import { apiUrl } from './baseUrl';
const token = sessionStorage.getItem('token');
const TIMEOUT = 15000;
const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : null,
  },
});
export default apiClient;
