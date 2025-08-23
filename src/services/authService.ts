import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { safeStorage } from '@/utils/safeStorage';
import { store } from '@/store';
import { setToken } from '@/store/authSlice';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function loginUser(email: string, password: string) {
  try {
    const endpoint = `${API_URL}/api/auth/login`;
    const res = await axios.post(endpoint, { email, password }, { withCredentials: true });
    const token = res.data?.accessToken;
    if (token) {
      safeStorage.setItem('authToken', token);
      safeStorage.setItem('ztg_token', token); // For backward compatibility
      store.dispatch(setToken(token));
    }
    return { res, data: res.data };
  } catch (err: any) {
    // Optional: you can still prepare or log the error here if needed, but don't toast.
    // For example, you might want to ensure the error object has a specific structure
    // if it doesn't already.
    // Example: if (!err.response?.data?.message) { /* augment error if necessary */ }
    throw err; // Essential: re-throw the error for AuthProvider to handle
  }
}

export async function registerUser(name: string, email: string, password: string) {
  const endpoint = `${API_URL}/auth/register`;
  try {
    const res = await axios.post(endpoint, { name, email, password });
    logDebug('Register API Response Status:', { status: res.status });
    logDebug('Register API Response Body:', { body: res.data });
    return { res, data: res.data };
  } catch (err) {
    logErrorToProduction('Register API error', err as Error, { endpoint, email });
    throw err;
  }
}
