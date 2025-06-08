import axios from 'axios';

export async function register(name: string, email: string, password: string) {
  const res = await axios.post('/api/auth/register', { name, email, password });
  return { res, data: res.data };
}

export async function forgotPassword(email: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await axios.post(`${API_URL}/auth/forgot`, { email });
  return { res, data: res.data };
}

export async function resetPassword(token: string, newPassword: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await axios.post(`${API_URL}/auth/reset-password`, { token, newPassword });
  return { res, data: res.data };
}
