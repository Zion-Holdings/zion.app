import useSWR from 'swr';
import type { UserDetails } from '@/types/auth';

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
});

export function useUser() {
  const { data, error, mutate } = useSWR<UserDetails>('user', () => fetcher('/api/users/me'));
  return { user: data, isLoading: !error && !data, error, mutate };
}
