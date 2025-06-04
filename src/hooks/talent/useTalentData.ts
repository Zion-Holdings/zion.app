
import { useQuery } from '@tanstack/react-query';
// import { TALENT_PROFILES } from '@/data/talentData'; // Remove mock data import
import { TalentProfile } from '@/types/talent';

async function fetchTalentProfiles(): Promise<TalentProfile[]> {
  // Fetch from the /api/talent endpoint
  const response = await fetch('/api/talent');
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }
  const data: TalentProfile[] = await response.json();
  return data;
}

export function useTalentData() {
  const { data, isLoading, error } = useQuery<TalentProfile[], Error>({ // Specify Error type for the query
    queryKey: ['talent-profiles'],
    queryFn: fetchTalentProfiles,
    // initialData is useful for SSR or to avoid flashes of empty content,
    // but can be removed if not needed or if it causes issues with error state.
    // For this case, let's keep it to ensure `talents` is always an array.
    initialData: [],
  });

  return {
    talents: data ?? [], // Ensure talents is always an array
    isLoading,
    error: error ? error : null, // Ensure error is Error or null
  };
}
