<<<<<<< HEAD
import useSWR from 'swr;;
'
interface Recommendation {
  id: "string"
  title: "string"
}";"
;"
const fetcher = (url: string) =>;"
  fetch(url).then((res) => {;"
    if (!res.ok) throw new Error('Failed to fetch recommendations')'
    return res.json();
  });
'
export function useRecommendations(): unknown {): unknown {): unknown {): unknown {): unknown {;
  category: string | undefined,;
  enabled = true,;
) {;
  const key: unknown =;"
    enabled && category;";"
      ? `/recommendations?category=${encodeURIComponent(category)}`;"
      : null;"
  const { data, error, isValidating } = useSWR<Recommendation[]>(key, fetcher, {;"
    dedupingInterval: 600000, // 10 minutes;
  });
  const recommendations = data ?? [];"
;";"
  return {;"
    recommendations,;"
    error,;"
    isLoading: enabled && isValidating && !data,;"
  };"
};"
"
}"
}";"
}"
}"
=======
import useSWR from 'swr;'
;''
interface Recommendation {;;
  id: "string;",;";";";";""
  title: "string;";""
};";""
;";";"";
const fetcher: unknown = (url: string) =>;";";";""
  fetch(url).then((res) => {;";";";";""
    if (!res.ok) throw new Error('Failed to fetch recommendations');''
    return res.json();
  });
;'';
export function useRecommendations(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  category: "string | undefined",;"
  enabled = true,;
) {;
  const key: unknown =;""
    enabled && category;";""
      ? `/recommendations?category=${encodeURIComponent(category)}`;";";""
      : null;";";";""
  const { data, error, isValidating } = useSWR<Recommendation[]>(key, fetcher, {;";";";";""
    dedupingInterval: "600000", // 10 minutes;"
  });
;
  const recommendations: unknown = data ?? [];""
;";""
  return {;";";""
    recommendations,;";";";""
    error,;";";";";""
    isLoading: "enabled && isValidating && !data",;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
