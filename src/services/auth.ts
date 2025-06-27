import axios from 'axios';

export async function register(name: string, email: string, password: string) {
import { logError } from '@/utils/productionLogger';

  try {
    const res = await axios.post('/api/auth/register', { name, email, password });
    return { res, data: res.data };
  } catch (err: any) {
    logError('Register error:', err);
    throw err;
  }
}

export async function forgotPassword(email: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  try {
    const res = await axios.post(`${API_URL}/auth/forgot`, { email });
    return { res, data: res.data };
  } catch (err: any) {
    logError('Forgot password error:', err);
    throw err;
  }
}

export async function resetPassword(token: string, newPassword: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  try {
    const res = await axios.post(`${API_URL}/auth/reset-password`, { token, newPassword });
    return { res, data: res.data };
  } catch (err: any) {
    logError('Reset password error:', err);
    throw err;
  }
}
