import axios from 'axios';

// Axios instance
export const api = axios.create();

// Attach token from localStorage to each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    (config.headers as any)['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export async function login(email: string, password: string) {
  const response = await api.post('/api/auth/login', { email, password });
  if (response.status === 200 && response.data?.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response;
}

export const auth = {
  login,
};

export default auth;
