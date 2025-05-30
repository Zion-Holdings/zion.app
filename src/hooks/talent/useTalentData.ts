
import { useQuery } from '@tanstack/react-query';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';

async function fetchTalentProfiles(): Promise<TalentProfile[]> {
  // In a real app this would fetch from a GraphQL endpoint
  return TALENT_PROFILES;
}

export function useTalentData() {
  const { data, isLoading, error } = useQuery<TalentProfile[], Error>({
    queryKey: ['talent-profiles'],
    queryFn: fetchTalentProfiles,
    initialData: [] as TalentProfile[],
  });

  return {
    talents: data ?? [],
    isLoading,
    error,
  };
}
