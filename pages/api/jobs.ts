import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { withApiDocsCors } from '@/middleware/cors';

// Mock jobs data for API documentation and testing
const MOCK_JOBS = [
  {
    id: "job-123",
    title: "Senior React Developer",
    description: "We're looking for an experienced React developer to join our growing team and help build next-generation AI-powered applications.",
    category: "development",
    budget: {
      min: 5000,
      max: 10000,
      currency: "USD"
    },
    status: "open",
    location: "Remote",
    company: "AI Solutions Inc.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "Experience with AI/ML integrations"
    ],
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "job-456",
    title: "AI/ML Engineer",
    description: "Join our AI team to develop cutting-edge machine learning models and integrate them into production systems.",
    category: "ai-ml",
    budget: {
      min: 8000,
      max: 15000,
      currency: "USD"
    },
    status: "open",
    location: "San Francisco, CA",
    company: "TechGenius Corp",
    requirements: [
      "PhD or Masters in Computer Science/AI",
      "Experience with TensorFlow/PyTorch",
      "Published research preferred"
    ],
    created_at: "2024-01-10T14:20:00Z",
    updated_at: "2024-01-12T09:15:00Z"
  },
  {
    id: "job-789",
    title: "DevOps Engineer",
    description: "Help us scale our infrastructure and implement best practices for CI/CD, monitoring, and deployment automation.",
    category: "devops",
    budget: {
      min: 4000,
      max: 8000,
      currency: "USD"
    },
    status: "filled",
    location: "Remote",
    company: "CloudTech Solutions",
    requirements: [
      "AWS/Azure experience",
      "Kubernetes proficiency",
      "Infrastructure as Code (Terraform)"
    ],
    created_at: "2024-01-05T16:45:00Z",
    updated_at: "2024-01-14T11:30:00Z"
  }
];

// Authentication middleware for demo purposes
function validateApiKey(req: NextApiRequest): boolean {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;
  
  const token = authHeader.replace('Bearer ', '');
  
  // Allow demo key for testing API documentation
  if (token === 'demo_key_123') return true;
  
  // In production, validate against real API keys
  // For now, we'll allow any non-empty token for demo purposes
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
      status = 'all',
      category,
      limit = '20',
      offset = '0',
      sort = 'created_at'
    } = req.query;

    const limitNum = Math.min(parseInt(limit as string, 10) || 20, 100);
    const offsetNum = parseInt(offset as string, 10) || 0;

    // Filter jobs based on query parameters
    let filteredJobs = [...MOCK_JOBS];

    if (status !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.status === status);
    }

    if (category) {
      filteredJobs = filteredJobs.filter(job => 
        job.category.toLowerCase() === (category as string).toLowerCase()
      );
    }

    // Sort jobs
    if (sort === 'created_at') {
      filteredJobs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (sort === 'budget') {
      filteredJobs.sort((a, b) => b.budget.max - a.budget.max);
    }

    // Apply pagination
    const paginatedJobs = filteredJobs.slice(offsetNum, offsetNum + limitNum);

    // Set cache headers
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    return res.status(200).json({
      jobs: paginatedJobs,
      count: filteredJobs.length,
      limit: limitNum,
      offset: offsetNum,
      total: MOCK_JOBS.length
    });

  } catch (error) {
    console.error('Jobs API error:', error);
    return res.status(500).json({ 
      error: 'internal_server_error',
      message: 'An internal server error occurred while fetching jobs' 
    });
  }
}

export default withApiDocsCors(withErrorLogging(handler)); 