
import { useState, useEffect } from "react";
import { TalentProfile as TalentProfileType } from "@/types/talent";
import { ProfileData } from "@/types/profile";
import { TALENT_PROFILES } from "@/data/talentData";
import { MOCK_PROFILES } from "@/data/mockProfiles";
import { convertProfileToTalentProfile } from "@/utils/profileConverter";

function normalizeId(value: string): string {
  const slugMatch = value.match(/^talent-(\d+)$/);
  if (slugMatch) {
    // Convert talent-001 -> t-001
    return `t-${slugMatch[1].padStart(3, "0")}`;
  }
  return value;
}

export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
          const normalized = normalizeId(id);
          const foundProfile = TALENT_PROFILES.find(talent => talent.id === normalized);

          if (foundProfile) {
            setProfile(foundProfile);
          } else {
            // Try fetching from ProfileData mock as fallback
            // This is just for development purposes
            const mockProfile = MOCK_PROFILES[normalized] || MOCK_PROFILES[id];
            if (mockProfile) {
              setMockProfileData(mockProfile);
              const convertedProfile = convertProfileToTalentProfile(mockProfile);
              setProfile(convertedProfile);
            } else {
              setError("Profile not found");
            }
          }
          setIsLoading(false);
        }, 800);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  return { profile, isLoading, error, mockProfileData };
}
