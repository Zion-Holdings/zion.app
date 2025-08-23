
import type { UserProfile } from "@/types/auth";

// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.
export interface SupabaseUser {
  id: string;
  email?: string | null;
}

/**
 * Maps Supabase profile data to our app's user model
 */
const userTypeMap = {
  creator: 'talent' as "talent",
  jobSeeker: 'talent' as "talent",
  employer: 'client' as "client",
  buyer: 'client' as "client",
  admin: 'admin' as "admin",
  null: null as null,
};

export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
  const userType = profile.user_type ? userTypeMap[profile.user_type as keyof typeof userTypeMap] : null;
  return {
    id: user.id,
    email: user.email || "",
    displayName: profile.display_name || "",
    userType: userType || undefined,
    profileComplete: Boolean(profile.profile_complete),
    created_at: (profile.created_at && !isNaN(new Date(profile.created_at).getTime())) ? new Date(profile.created_at).toISOString() : new Date().toISOString(),
    updated_at: (profile.updated_at && !isNaN(new Date(profile.updated_at).getTime())) ? new Date(profile.updated_at).toISOString() : new Date().toISOString(),
    avatarUrl: profile.avatar_url || undefined,
    name: profile.display_name || "",
    role: userType || "", // Map user_type to role for backward compatibility
    points: profile.points ?? 0,
    emailVerified: profile.email_verified ?? false,
    interests: profile.interests || [],
    preferredCategories: profile.preferred_categories || []
  };
}
