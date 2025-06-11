import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function loginUser(email: string, password: string) {
  try {
    const endpoint = `${API_URL}/api/auth/login`;
    const res = await axios.post(endpoint, { email, password }, { withCredentials: true });
    console.log('Login API Response Status:', res.status);
    console.log('Login API Response Body:', res.data);
    return { res, data: res.data };
  } catch (err: any) {
    const status = err.response?.status;
    if (status === 401) {
      toast.error('Invalid email or password');
    } else if (status === 500) {
      toast.error('Server error. Please try again later.');
    } else {
      toast.error('Login failed');
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
