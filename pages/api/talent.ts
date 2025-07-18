import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { withApiDocsCors } from '@/middleware/cors';
import { logErrorToProduction } from '@/utils/productionLogger';

// Authentication middleware for demo purposes (same as jobs API);
function validateApiKey(req: NextApiRequest): boolean {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;
  const authHeaderString = Array.isArray(authHeader) ? authHeader[0] : authHeader;
  if (!authHeaderString) return false;
  const token = authHeaderString.replace('Bearer ', '');'
  // Allow demo key for testing API documentation
  if (token === 'demo_key_123') return true;'
  // In production, validate against real API keys
  return token.length > 0;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS is handled by the withApiDocsCors wrapper
  if (req.method !== 'GET') {'
    res.setHeader('Allow', 'GET');'
    res.status(405).json({
      error: 'method_not_allowed','
      message: `Method ${req.method} Not Allowed`
    });
    return;
  }
  // Validate API key
  if (!validateApiKey(req)) {
    res.status(401).json({
      error: 'invalid_token','
      message: 'The provided API key is invalid or missing. Use "demo_key_123" for testing.''
    });
    return;
  }
  try {
    // Parse query parameters
    const {
      skills,
      category,
      rate_min,
      rate_max,
      availability = 'all','
      limit = '20','
      offset = '0','
      sort = 'rating','
    } = req.query as {
      skills?: string | string[];
      category?: string | string[];
      rate_min?: string | string[];
      rate_max?: string | string[];
      availability?: string | string[];
      limit?: string | string[];
      offset?: string | string[];
      sort?: string | string[];
    };
    const limitNum = Math.min(parseInt(limit as string, 10) || 20, 100);
    const offsetNum = parseInt(offset as string, 10) || 0;
    const rateMin = rate_min ? parseInt(rate_min as string, 10) : undefined;
    const rateMax = rate_max ? parseInt(rate_max as string, 10) : undefined;
    // Use mock data for talent filtering and sorting
    const MOCK_TALENT = [
      {
        id: 'talent-1','
        name: 'Alice','
        professional_title: 'AI Engineer','
        skills: ['python', 'machine learning', 'deep learning'],'
        category: 'engineering','
        hourly_rate: 100,
        years_experience: 5,
        completed_projects: 12,
        rating: 4.9,
        availability: 'available','
      },
      {
        id: 'talent-2','
        name: 'Bob','
        professional_title: 'Frontend Developer','
        skills: ['react', 'typescript', 'css'],'
        category: 'frontend','
        hourly_rate: 80,
        years_experience: 3,
        completed_projects: 8,
        rating: 4.7,
        availability: 'busy','
      },
      {
        id: 'talent-3','
        name: 'Carol','
        professional_title: 'Data Scientist','
        skills: ['python', 'data analysis', 'statistics'],'
        category: 'data','
        hourly_rate: 120,
        years_experience: 7,
        completed_projects: 20,
        rating: 4.8,
        availability: 'available','
      },
    ];
    let filteredTalent = [...MOCK_TALENT];
    // Filter by skills
    if (skills) {
      const skillsList = (skills as string).toLowerCase().split(',').map(s => s.trim());'
      filteredTalent = filteredTalent.filter(talent =>
        skillsList.some(skill =>
          talent.skills.some(talentSkill =>
            talentSkill.toLowerCase().includes(skill)
          )
        )
      );
    }
    // Filter by category (fuzzy match against professional title)
    if (category) {
      const categoryLower = (category as string).toLowerCase();
      filteredTalent = filteredTalent.filter(talent =>
        talent.professional_title.toLowerCase().includes(categoryLower)
      );
    }
    // Filter by rate range
    if (rateMin !== undefined) {
      filteredTalent = filteredTalent.filter(talent => talent.hourly_rate >= rateMin);
    }
    if (rateMax !== undefined) {
      filteredTalent = filteredTalent.filter(talent => talent.hourly_rate <= rateMax);
    }
    // Filter by availability
    if (availability !== 'all') {'
      filteredTalent = filteredTalent.filter(talent => talent.availability === availability);
    }
    // Sort talent
    if (sort === 'rating') {'
      filteredTalent.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'rate') {'
      filteredTalent.sort((a, b) => a.hourly_rate - b.hourly_rate);
    } else if (sort === 'experience') {'
      filteredTalent.sort((a, b) => b.years_experience - a.years_experience);
    } else if (sort === 'projects') {'
      filteredTalent.sort((a, b) => b.completed_projects - a.completed_projects);
    }
    // Apply pagination
    const paginatedTalent = filteredTalent.slice(offsetNum, offsetNum + limitNum);
    // Set cache headers
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');'
    res.status(200).json({
      talent: paginatedTalent,
      count: filteredTalent.length,
      limit: limitNum,
      offset: offsetNum,
      total: MOCK_TALENT.length,
    });
    return;
  } catch (error) {
    logErrorToProduction('Talent API error:', { data: error });'
    res.status(500).json({
      error: 'internal_server_error','
      message: 'An internal server error occurred while fetching talent profiles''
    });
    return;
  }
}
;
export default withApiDocsCors(withErrorLogging(handler));