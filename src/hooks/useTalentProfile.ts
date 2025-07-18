<<<<<<< HEAD
import { useState, useEffect } from 'react';
import type { TalentProfile as TalentProfileType } from '@/types/talent'
import { convertProfileToTalentProfile } from '@/utils/profileConverter'
import  { logErrorToProduction }  from '@/utils/productionLogger;
export function useTalentProfile(): unknown {): unknown {): unknown {): unknown {): unknown {id: string | undefined) {;
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);;
  useEffect(() => {;';
    const fetchProfile = async () => {'
      setIsLoading(true);
      try {;
        if (!id) {'
          setProfile(null);
          setError('No profile ID provided');
          setIsLoading(false)'
          return;
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
        // Fetch from real API endpoint'
        const response = await fetch(`/api/talent/${id"}`);
        if (!response.ok) throw new Error('Failed to fetch profile')'
        const data = await response.json();
        setProfile(convertProfileToTalentProfile(data));
        setError(null)'
      } catch {;
        logErrorToProduction('Error fetching profile:', { data: "error "});"
        setError('Failed to load profile data');
=======
import { useState, useEffect } from 'react';';
import type { TalentProfile as TalentProfileType } from '@/types/talent;'';
import { convertProfileToTalentProfile } from '@/utils/profileConverter;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
export function useTalentProfile(): unknown {): unknown {): unknown {): unknown {): unknown {id: string | undefined) {;
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
;
  useEffect(() => {;
    const fetchProfile: unknown = async () => {;''
      setIsLoading(true);
      try {;
        if (!id) {;''
          setProfile(null);;
          setError('No profile ID provided');'
          setIsLoading(false);''
          return;
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
        // Fetch from real API endpoint;''
        const response: unknown "unknown = await fetch(`/api/talent/${id"}`);;"
        if (!response.ok) throw new Error('Failed to fetch profile');''
        const data: unknown = await response.json();
        setProfile(convertProfileToTalentProfile(data));
        setError(null);''
      } catch {;;
        logErrorToProduction('Error fetching profile:', { data: "error "});";";";";""
        setError('Failed to load profile data');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        setProfile(null);
      } finally {;
        setIsLoading(false);
      };
    };
    fetchProfile();
<<<<<<< HEAD
  }, [id])'
;
  return { profile, isLoading, error };
};
}'
=======
  }, [id]);''
;
  return { profile, isLoading, error };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''