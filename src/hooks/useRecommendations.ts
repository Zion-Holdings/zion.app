import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed to fetch recommendations');
  return res.json();
});

export function useRecommendations(category: string | undefined, enabled = true) {
  const key = enabled && category ? `/recommendations?category=${encodeURIComponent(category)}` : null;
  const { data, error, isValidating } = useSWR<any[]>(key, fetcher, {
    dedupingInterval: 600000, // 10 minutes
  });

  return {
    recommendations: data ?? [],
    error,
    isLoading: enabled && isValidating && !data,
  };
}
