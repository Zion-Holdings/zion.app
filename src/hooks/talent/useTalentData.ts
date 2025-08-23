
import { useQuery } from '@tanstack/react-query';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentListResponse, TalentProfile } from '@/types/talent';
import { fetchWithRetry } from '@/utils/fetchWithRetry';

async function fetchTalentProfiles(page = 1, limit = 12): Promise<TalentListResponse> {
  return fetchWithRetry(
    `/api/talent?page=${page}&limit=${limit}`,
    {},
    3,
    500,
    10000
  );
}

export function useTalentData(page = 1, limit = 12) {
  const { data, isLoading, error } = useQuery<TalentListResponse, Error>({
    queryKey: ['talent-profiles', page, limit],
    queryFn: () => fetchTalentProfiles(page, limit),
    initialData: { talents: [], total: 0 },
  });

  let talents = data?.talents ?? [];
  let total = data?.total ?? 0;

  // Fallback to local sample data if API returns no results or errors
  if ((!isLoading && talents.length === 0) || error) {
    const startIndex = (page - 1) * limit;
    talents = TALENT_PROFILES.slice(startIndex, startIndex + limit);
    total = TALENT_PROFILES.length;
  }

  return {
    talents,
    total,
    isLoading,
    error: error ? error : null, // Ensure error is Error or null
  };
}
