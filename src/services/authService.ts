import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { safeStorage } from '@/utils/safeStorage';
import { store } from '@/store';
import { setToken } from '@/store/authSlice';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function loginUser(email: string, password: string) {
  try {
    const endpoint = `${API_URL}/api/auth/login`;
    const res = await axios.post(endpoint, { email, password }, { withCredentials: true });
    const token = res.data?.accessToken;
    if (token) {
      safeStorage.setItem('ztg_token', token);
      store.dispatch(setToken(token));
    }
    return { res, data: res.data };
  } catch (err: any) {
    const status = err.response?.status;
    if (status >= 400 && status < 600) {
      const msg = err.response?.data?.message || 'Login failed';
      toast({ title: 'Login Failed', description: msg, variant: 'destructive' });
    }
    throw err;
  }
}

export async function registerUser(name: string, email: string, password: string) {
  const endpoint = `${API_URL}/auth/register`;
  try {
    const res = await axios.post(endpoint, { name, email, password });
    console.log('Register API Response Status:', res.status);
    console.log('Register API Response Body:', res.data);
    return { res, data: res.data };
  } catch (err) {
    console.error('Register API error:', err);
    throw err;
  }
}
