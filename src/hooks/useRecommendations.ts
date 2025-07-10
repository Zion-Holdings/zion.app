import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed to fetch recommendations');
  return res.json();
});

export function useRecommendations(category: string | undefined, enabled = true) {
  const key = enabled && category ? `/recommendations?category=${encodeURIComponent(category)}` : null;
  const { data, error, isValidating } = useSWR<unknown[]>(key, fetcher, {
    dedupingInterval: 600000, // 10 minutes
  });

  // Type guard for recommendation shape (example: { id: string, title: string })
  const recommendations = Array.isArray(data)
    ? data.filter(
        (item): item is { id: string; title: string } =>
          typeof item === 'object' && item !== null &&
          'id' in item && typeof (item as any).id === 'string' &&
          'title' in item && typeof (item as any).title === 'string'
      )
    : [];

  return {
    recommendations,
    error,
    isLoading: enabled && isValidating && !data,
  };
}
