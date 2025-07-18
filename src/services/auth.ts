import axios from 'axios';
import {logErrorToProduction} from '@/utils/productionLogger';

export async function register(name: string, email: string, password: string) {

  try {
    const res = await axios.post('/api/auth/register', { name, email, password });
    return { res, data: res.data };
  } catch {
    logErrorToProduction('Register erroror:', { data: error });
    throw err;
  }
}

export async function forgotPassword(email: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  try {
    const res = await axios.post(`${API_URL}/auth/forgot`, { email });
    return { res, data: res.data };
  } catch {
    logErrorToProduction('Forgot password erroror:', { data: error });
    throw err;
  }
}

export async function resetPassword(token: string, newPassword: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  try {
    const res = await axios.post(`${API_URL}/auth/reset-password`, { token, newPassword });
    return { res, data: res.data };
  } catch {
    logErrorToProduction('Reset password erroror:', { data: error });
    throw err;
  }
}
