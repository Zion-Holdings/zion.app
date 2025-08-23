import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { withApiDocsCors } from '@/middleware/cors';
import {logErrorToProduction} from '@/utils/productionLogger';


// Mock talent data for API documentation and testing
const MOCK_TALENT = [
  {
    id: "talent-123",
    full_name: "Jane Smith",
    professional_title: "Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
    hourly_rate: 75,
    availability: "full-time",
    years_experience: 5,
    location: "Remote, US",
    bio: "Experienced full stack developer with a focus on React and Node.js. Specialized in building scalable web applications and AI integrations.",
    portfolio_url: "https://janesmith.dev",
    email: "jane@example.com",
    rating: 4.9,
    completed_projects: 127,
    created_at: "2023-08-15T10:30:00Z",
    updated_at: "2024-01-15T14:20:00Z"
  },
  {
    id: "talent-456", 
    full_name: "Alex Chen",
    professional_title: "AI/ML Engineer",
    skills: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "MLOps"],
    hourly_rate: 95,
    availability: "part-time",
    years_experience: 7,
    location: "San Francisco, CA",
    bio: "ML engineer with PhD in Computer Science, specializing in computer vision and NLP. Published researcher with 15+ papers.",
    portfolio_url: "https://alexchen.ai",
    email: "alex@example.com",
    rating: 4.8,
    completed_projects: 89,
    created_at: "2023-06-20T16:45:00Z",
    updated_at: "2024-01-12T09:15:00Z"
  },
  {
    id: "talent-789",
    full_name: "Maria Garcia",
    professional_title: "UX/UI Designer",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    hourly_rate: 65,
    availability: "full-time",
    years_experience: 4,
    location: "Remote, Spain",
    bio: "Creative UX/UI designer passionate about creating intuitive and beautiful user experiences. Expert in design systems and accessibility.",
    portfolio_url: "https://mariagarcia.design",
    email: "maria@example.com",
    rating: 4.7,
    completed_projects: 156,
    created_at: "2023-09-10T11:20:00Z",
    updated_at: "2024-01-14T16:30:00Z"
  }
];

// Authentication middleware for demo purposes (same as jobs API)
function validateApiKey(req: NextApiRequest): boolean {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;
  
  const authHeaderString = Array.isArray(authHeader) ? authHeader[0] : authHeader;
  if (!authHeaderString) return false;
  
  const token = authHeaderString.replace('Bearer ', '');
  
  // Allow demo key for testing API documentation
  if (token === 'demo_key_123') return true;
  
  // In production, validate against real API keys
  return token.length > 0;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS is handled by the withApiDocsCors wrapper

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ 
      error: 'method_not_allowed',
      message: `Method ${req.method} Not Allowed` 
    });
  }

  // Validate API key
  if (!validateApiKey(req)) {
    return res.status(401).json({
      error: 'invalid_token',
      message: 'The provided API key is invalid or missing. Use "demo_key_123" for testing.'
    });
  }

  try {
    // Parse query parameters
    const { 
      skills,
      category,
      rate_min,
      rate_max,
      availability = 'all',
      limit = '20',
      offset = '0',
      sort = 'rating'
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

    // Filter talent based on query parameters
    let filteredTalent = [...MOCK_TALENT];

    // Filter by skills
    if (skills) {
      const skillsList = (skills as string).toLowerCase().split(',').map(s => s.trim());
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
    if (availability !== 'all') {
      filteredTalent = filteredTalent.filter(talent => talent.availability === availability);
    }

    // Sort talent
    if (sort === 'rating') {
      filteredTalent.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'rate') {
      filteredTalent.sort((a, b) => a.hourly_rate - b.hourly_rate);
    } else if (sort === 'experience') {
      filteredTalent.sort((a, b) => b.years_experience - a.years_experience);
    } else if (sort === 'projects') {
      filteredTalent.sort((a, b) => b.completed_projects - a.completed_projects);
    }

    // Apply pagination
    const paginatedTalent = filteredTalent.slice(offsetNum, offsetNum + limitNum);

    // Set cache headers
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    return res.status(200).json({
      talent: paginatedTalent,
      count: filteredTalent.length,
      limit: limitNum,
      offset: offsetNum,
      total: MOCK_TALENT.length
    });

  } catch (error) {
    logErrorToProduction('Talent API error:', { data: error });
    return res.status(500).json({ 
      error: 'internal_server_error',
      message: 'An internal server error occurred while fetching talent profiles' 
    });
  }
}

export default withApiDocsCors(withErrorLogging(handler)); 