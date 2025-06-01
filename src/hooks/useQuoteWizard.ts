import useSWR from 'swr';
import { captureException } from '@/utils/sentry';

export interface ServiceItem {
  id: string;
  title: string;
}

const fetcher = async (url: string): Promise<ServiceItem[]> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed');
    }
    return res.json();
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    } else {
      captureException(err);
    }
    throw err;
  }
};

export function useQuoteWizard(category: string) {
  return useSWR<ServiceItem[]>(`/api/services?type=${category}`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 1) return;
      const timeout = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), timeout);
    },
    dedupingInterval: 600000,
  });
}
