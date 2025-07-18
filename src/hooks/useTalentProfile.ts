
import { useState, useEffect } from "react";
import type { TalentProfile as TalentProfileType } from "@/types/talent";
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
import {logErrorToProduction} from '@/utils/productionLogger';

export function useTalentProfile(id: string | undefined) {

  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        if (!id) {
          setProfile(null);
          setError('No profile ID provided');
          setIsLoading(false);
          return;
        }
        // Fetch from real API endpoint
        const response = await fetch(`/api/talent/${id}`);
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfile(convertProfileToTalentProfile(data));
        setError(null);
      } catch {
        logErrorToProduction('Error fetching profile:', { data: 'Error occurred' });
        setError('Failed to load profile data');
        setProfile(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  return { profile, isLoading, error };
}
