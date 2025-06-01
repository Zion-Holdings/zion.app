import useSWR from 'swr';
import { captureException } from '@/utils/sentry';

export interface ServiceItem {
  id: string
  title: string
}

export interface WizardResponse {
  items: ServiceItem[]
  total?: number
}

const fetcher = async (url: string): Promise<WizardResponse> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed');
    }
    const data = await res.json();
    // Some endpoints return the array directly while others wrap it in an
    // `items` property. Normalize it here so the caller can rely on a
    // consistent shape.
    if (Array.isArray(data)) {
      return { items: data };
    }
    return { items: data.items || [], total: data.total };
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    } else {
      captureException(err);
    }
    throw err;
  }
};

export function useQuoteWizard(
  category: string,
  page = 1,
  search = ''
) {
  const params = new URLSearchParams({ page: String(page) });
  if (search) params.set('q', search);
  return useSWR<WizardResponse>(`/api/${category}?${params.toString()}`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 1) return;
      const timeout = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), timeout);
    },
    dedupingInterval: 600000,
  });
}
