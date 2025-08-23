import axios from 'axios';

// Axios instance used for API calls
export const api = axios.create({ baseURL: '/api' });

// Attach Authorization header if token stored
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export async function login(email: string, password: string) {
  const response = await api.post('/auth/login', { email, password });
  const token = response.data?.token;
  if (response.status === 200 && token) {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return response;
}
