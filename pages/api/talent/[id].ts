import { TALENT_PROFILES, TalentProfileData } from '@/data/talentData'; // Assuming TalentProfileData is the type of items in TALENT_PROFILES
import type { NextApiRequest, NextApiResponse } from 'next';

// Basic ObjectId validation helper
const isValidObjectId = (id: string): boolean => /^[0-9a-fA-F]{24}$/.test(id);

// Define the structure of the response profile, including the added social links
interface TalentProfileWithSocial extends TalentProfileData {
  social: {
    twitter: string;
    linkedin: string;
  };
}

interface ErrorResponse {
  error: string;
}

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse<TalentProfileWithSocial | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const rawId = req.query?.id;
  const id = typeof rawId === 'string' ? rawId : '';

  // It seems the ID format check `isValidObjectId` might be a leftover if IDs are like `t-xxxx`.
  // If IDs are always like `t-xxxx`, this check might not be relevant.
  // For now, keeping it as per original logic.
  if (!id) { // Simple check if ID is missing
    return res.status(400).json({ error: 'Missing id' });
  }
  
  // The original code implies IDs might or might not have 't-' prefix,
  // and it tries to normalize it.
  let searchId = id;
  if (!id.startsWith('t-') && isValidObjectId(id)) { // Only prepend if it's a valid ObjectId-like string without prefix
     // This logic seems a bit mixed. If TALENT_PROFILES uses 't-' prefixed IDs,
     // then the isValidObjectId check might be for a different ID type altogether.
     // Assuming TALENT_PROFILES uses 't-' prefixed string IDs.
     // The isValidObjectId might be a red herring or for a different system.
     // If IDs in TALENT_PROFILES are NOT 't-' prefixed, then this logic is reversed.
     // Given `searchId = `t-${searchId}`, it implies the array uses prefixed IDs.
     // Let's assume for now the intent is to find by 't-' prefixed ID.
     // The original `if (searchId && !searchId.startsWith('t-'))` was simpler.
     // Reverting to simpler logic: if it doesn't start with 't-', prepend it.
     // The isValidObjectId check seems inconsistent with 't-' prefixed IDs.
  }
  if (!id.startsWith('t-')) {
      searchId = `t-${id}`;
  }


  const profile = TALENT_PROFILES.find(t => t.id === searchId);

  if (!profile) {
    return res.status(404).json({ error: 'Talent not found' });
  }

  // Assuming profile.full_name is always a non-empty string
  const firstName = profile.full_name ? profile.full_name.split(' ')[0].toLowerCase() : 'user';

  const socialLinks = {
    twitter: `https://twitter.com/${firstName}`,
    linkedin: `https://linkedin.com/in/${firstName}`,
  };

  const responseProfile: TalentProfileWithSocial = {
    ...profile,
    social: socialLinks,
  };

  return res.status(200).json(responseProfile);
}
