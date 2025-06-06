import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const API_URL = import.meta.env.VITE_API_URL || '';

export async function loginUser(email: string, password: string) {
  try {
    const endpoint = `${API_URL}/api/auth/login`;
    const res = await axios.post(endpoint, { email, password });
    console.log('Login API Response Status:', res.status);
    console.log('Login API Response Body:', res.data);
    return { res, data: res.data };
  } catch (err: any) {
    const status = err.response?.status;
    if (status === 401 || status === 404) {
      toast.error('Invalid credentials');
    }
    throw err;
  }
}

export async function registerUser(name: string, email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  console.log('Register API Response Status:', res.status);
  console.log('Register API Response Body:', data);
  return { res, data };
}
