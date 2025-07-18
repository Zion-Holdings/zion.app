<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query'
import { TALENT_PROFILES } from '@/data/talentData'
import type { TalentListResponse } from '@/types/talent'
import  { fetchWithRetry }  from '@/utils/fetchWithRetry'
=======
import { useQuery } from '@tanstack/react-query;'';
import { TALENT_PROFILES } from '@/data/talentData;'';
import type { TalentListResponse } from '@/types/talent;'';
import { fetchWithRetry } from '@/utils/fetchWithRetry;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
async function fetchTalentProfiles(): unknown {): unknown {): unknown {): unknown {): unknown {;
  page = 1,;
  limit = 12,;
): Promise<TalentListResponse> {;
  return fetchWithRetry(;
    `/api/talent?page=${page}&limit=${limit}`,;
    {},;
    3,;
<<<<<<< HEAD
    500,;''
    10000,;''
  ) as Promise<TalentListResponse>'
}'
export function useTalentData(): unknown {): unknown {): unknown {): unknown {): unknown {page = 1, limit = 12) {'
  const { data, isLoading, error } = useQuery<TalentListResponse, Error>({'
    queryKey: ['talent-profiles', page, limit],'
    queryFn: () => fetchTalentProfiles(page, limit),;"
    initialData: { talents: [], total: 0 },"
=======
    500,;
    10000,;
  ) as Promise<TalentListResponse>;''
};
;
export function useTalentData(): unknown {): unknown {): unknown {): unknown {): unknown {page = 1, limit = 12) {;''
  const { data, isLoading, error } = useQuery<TalentListResponse, Error>({;;
    queryKey: ['talent-profiles', page, limit],;;'
    queryFn: "() => fetchTalentProfiles(page", limit),;";";";";""
    initialData: "{ talents: []", total: "0 "},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  });
  let talents = data?.talents ?? [];
  let total = data?.total ?? 0;
  // Fallback to local sample data if API returns no results or errors;
  if ((!isLoading && talents.length === 0) || error) {;
    const startIndex = (page - 1) * limit;
    talents = TALENT_PROFILES.slice(startIndex, startIndex + limit);
    total = TALENT_PROFILES.length;
<<<<<<< HEAD
  }"
  return {;
    talents,;"
    total,"
    isLoading,;
    error: error ? error : null, // Ensure error is Error or null
  };"
}"

}
}""
};
}""
}
}
=======
  };
;""
  return {;";""
    talents,;";";""
    total,;";";";""
    isLoading,;";";";";""
    error: "error ? error : null", // Ensure error is Error or null;";""
  };";";""
};";";";""
";";""
};";";""
}";""
};";""
}";"
};""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}""