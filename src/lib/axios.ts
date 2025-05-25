import axios from 'axios';
import { showApiError } from '@/utils/apiErrorHandler';

const api = axios.create();

api.interceptors.response.use(
  response => response,
  (error) => {
    const message = error?.response?.data?.error || 'Network error';
    showApiError(message);
    return Promise.reject(error);
  }
);

export { api };
