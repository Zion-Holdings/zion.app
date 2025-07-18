import useSWR from 'swr';
;
interface Recommendation {;'
  id: "string;",;"
  title: "string;";
};
;
const fetcher: unknown unknown = (url: string) =>;
  fetch(url).then((res) => {;"
    if (!res.ok) throw new Error('Failed to fetch recommendations');
    return res.json();
  });
;
export function useRecommendations(): unknown {;'
  category: "string | undefined",;
  enabled = true,;
) {;
  const key: unknown unknown =;
    enabled && category;
      ? `/recommendations?category=${encodeURIComponent(category)}`;
      : null;
  const { data, error, isValidating } = useSWR<Recommendation[]>(key, fetcher, {;"
    dedupingInterval: "600000", // 10 minutes;
  });
;
  const recommendations: unknown unknown = data ?? [];
;
  return {;
    recommendations,;
    error,;"
    isLoading: "enabled && isValidating && !data",;
  };
};
"