import type { NextApiRequest, NextApiResponse } from 'next';
import { TALENT_PROFILES } from '@/data/talentData';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface TalentProfile {
  id: string;
  name: string;
  title: string;
  skills: string[];
  hourlyRate?: number;
  avatar?: string;
  rating?: number;
  reviewCount?: number;
  availability?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    logInfo('Marketplace talent API called with query:', { data: req.query });
    
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Get query parameters
    const page = parseInt(((req.query as any).page as string), 10) || 1;
    const limit = parseInt(((req.query as any).limit as string), 10) || 20;
    const search = ((req.query as any).search as string);
    const skills = ((req.query as any).skills as string | string[]);

    // Start with all talent profiles
    let profiles = TALENT_PROFILES || [];

    // Apply search filter
    if (search) {
      const searchTerm = search.toLowerCase();
      profiles = profiles.filter(p => 
        p.full_name?.toLowerCase().includes(searchTerm) ||
        p.professional_title?.toLowerCase().includes(searchTerm) ||
        p.skills?.some((skill: string) => skill.toLowerCase().includes(searchTerm))
      );
    }

    // Apply skills filter
    if (skills) {
      const skillsArray = Array.isArray(skills) ? skills : [skills];
      profiles = profiles.filter(p => 
        skillsArray.some(skill => 
          p.skills?.some((pSkill: string) => pSkill.toLowerCase().includes(skill.toLowerCase()))
        )
      );
    }

    // Apply pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProfiles = profiles.slice(start, end);

    // Map to marketplace interface
    const mappedProfiles: TalentProfile[] = paginatedProfiles.map(profile => ({
      id: profile.id,
      name: profile.full_name,
      title: profile.professional_title,
      skills: profile.skills || [],
      hourlyRate: profile.hourly_rate,
      avatar: profile.profile_picture_url,
      rating: profile.average_rating,
      reviewCount: profile.rating_count || 0,
      availability: profile.availability_type
    }));

    logInfo(`Returning ${mappedProfiles.length} talent profiles (page ${page}, limit ${limit})`);
    
    return res.status(200).json(mappedProfiles);
  } catch (error) {
    logErrorToProduction('Error in marketplace talent API:', { data: error });
    
    // Return fallback empty array instead of error
    return res.status(200).json([]);
  }
} 