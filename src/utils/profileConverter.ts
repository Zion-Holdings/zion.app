
import { ProfileData } from "@/types/profile";
import { TalentProfile } from "@/types/talent";

export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
  
  // If this is already a TalentProfile, just return it
  if (profile.professional_title !== undefined) {
    return profile;
  }
  
  // Convert ProfileData to TalentProfile
  return {
    id: profile.id,
    user_id: profile.id,
    full_name: profile.name,
    professional_title: profile.title,
    bio: profile.bio || '',
    summary: profile.bio?.substring(0, 150),
    profile_picture_url: profile.avatarUrl,
    years_experience: 3, // Default value
    skills: profile.skills?.map((skill: { name: string }) => skill.name) || [],
    availability_type: profile.availability?.status === 'available' ? 'full_time' :
                      profile.availability?.status === 'limited' ? 'part_time' : 'unavailable',
    timezone: 'UTC',
    hourly_rate: profile.hourlyRate || 0,
    rating_count: profile.reviewCount || 0,
    average_rating: profile.rating || 0
  };
}
