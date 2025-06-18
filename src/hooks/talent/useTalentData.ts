
import { useQuery } from '@tanstack/react-query';
// import { TALENT_PROFILES } from '@/data/talentData'; // Remove mock data import
import { TalentListResponse, TalentProfile } from '@/types/talent';

async function fetchTalentProfiles(page = 1, limit = 12): Promise<TalentListResponse> {
  const response = await fetch(`/api/talent?page=${page}&limit=${limit}`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }
  const data: TalentListResponse = await response.json();
  return data;
}

export function useTalentData(page = 1, limit = 12) {
  const { data, isLoading, error } = useQuery<TalentListResponse, Error>({
    queryKey: ['talent-profiles', page, limit],
    queryFn: () => fetchTalentProfiles(page, limit),
  });

  return {
    talents: data?.talents ?? [],
    total: data?.total ?? 0,
    isLoading,
    error: error ? error : null, // Ensure error is Error or null
  };
}
