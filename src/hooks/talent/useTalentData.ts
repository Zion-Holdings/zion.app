
import { useQuery } from '@tanstack/react-query';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';

async function fetchTalentProfiles(): Promise<TalentProfile[]> {
  // In a real app this would fetch from a GraphQL endpoint
  return TALENT_PROFILES;
}

export function useTalentData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['talent-profiles'],
    queryFn: fetchTalentProfiles,
    initialData: [] as TalentProfile[],
  }) as {
    data: TalentProfile[] | undefined;
    isLoading: boolean;
    error: unknown;
  };

  return {
    talents: data ?? [],
    isLoading,
    error,
  };
}
