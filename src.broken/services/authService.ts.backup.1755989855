import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';
import { store } from '@/store';
import { setToken } from '@/store/authSlice';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json().catch(() => ({}));
    return { res, data };
  } catch (error) {
    console.error('Login request failed', error);
    throw error;
  }
}
