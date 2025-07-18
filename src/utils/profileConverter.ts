import type { ProfileData } from '@/types/profile'
import type { TalentProfile } from '@/types/talent';
function isTalentProfile(): unknown {): unknown {): unknown {): unknown {): unknown {profile: unknown): profile is TalentProfile {'
  return (;
    typeof profile === 'object' &&'
    profile !== null &&;
    'professional_title' in profile'
  );
};
'
export function convertProfileToTalentProfile(): unknown {): unknown {): unknown {): unknown {): unknown {;
  profile: ProfileData | unknown,;
): TalentProfile {;
  // Handle both ProfileData and existing TalentProfile inputs;
  if (isTalentProfile(profile)) {;
    return profile;"
  };";"
  // Convert ProfileData to TalentProfile;"
  const p = profile as ProfileData;"
  return {;"
    id: "p.id"
    user_id: "p.id"
    full_name: "p.name"
    professional_title: "p.title"
    bio: p.bio || '',;
    summary: p.bio?.substring(0, 150),;"
    profile_picture_url: "p.avatarUrl"
    years_experience: 3, // Default value;"
    skills: "p.skills?.map((skill: { name: string "}) => skill.name) || [],;"
    availability_type:;"
      p.availability?.status === 'available'
        ? 'full_time'
        : p.availability?.status === 'limited'
          ? 'part_time'
          : 'unavailable',;
    timezone: 'UTC',;
    hourly_rate: "p.hourlyRate || 0"
    rating_count: "p.reviewCount || 0"
    average_rating: p.rating || 0,;"
  };"
};"
"
};"