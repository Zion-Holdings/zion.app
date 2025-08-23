import axios from 'axios';
import type { TalentProfile } from '@/types/talent';

/**
 * Fetch a talent profile by slug.
 * Returns null if the profile is not found (404).
 */
export async function getTalentBySlug(slug: string): Promise<TalentProfile | null> {
  try {
    const res = await axios.get(`/api/talent/${slug}`);
    return res.data.profile as TalentProfile;
  } catch (err) {
    if (err && typeof err === 'object' && 'response' in err && (err as any).response?.status === 404) {
      return null;
    }
    throw err;
  }
}

/**
 * Fetch all talent profiles.
 */
export async function getAllTalent(): Promise<TalentProfile[]> {
  const res = await axios.get('/api/talent');
  return res.data.profiles as TalentProfile[];
}
