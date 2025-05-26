import { apiClient } from '@/utils/apiClient';

export async function loginUser(email: string, password: string) {
  const res = await apiClient('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
