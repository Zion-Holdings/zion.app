import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { withApiDocsCors } from '@/middleware/cors';
import { cacheOrCompute, CacheCategory, applyCacheHeaders, cacheKeys } from '@/lib/serverCache';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


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

// Simple demo API key validation
function validateApiKey(req: NextApiRequest): boolean {
  const authHeader = req.headers.authorization;
  const authHeaderString = Array.isArray(authHeader) ? authHeader[0] : authHeader;
  const apiKey = authHeaderString?.replace('Bearer ', '') || (req.query as any).api_key;
  return apiKey === 'demo_key_123' || apiKey === 'test_key_456';
}

// Optimized job filtering function
function filterAndSortJobs(jobs: any[], params: {
  status: string;
  category?: string;
  sort: string;
  limit: number;
  offset: number;
}) {
  const { status, category, sort, limit, offset } = params;
  
  // Filter jobs based on query parameters
  let filteredJobs = [...jobs];

  if (status !== 'all') {
    filteredJobs = filteredJobs.filter(job => job.status === status);
  }

  if (category) {
    filteredJobs = filteredJobs.filter(job => 
      job.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Sort jobs
  if (sort === 'created_at') {
    filteredJobs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } else if (sort === 'budget') {
    filteredJobs.sort((a, b) => b.budget.max - a.budget.max);
  }

  // Apply pagination
  const paginatedJobs = filteredJobs.slice(offset, offset + limit);

  return {
    jobs: paginatedJobs,
    totalFiltered: filteredJobs.length,
    totalAll: jobs.length
  };
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
    } = req.query as { 
      status?: string | string[];
      category?: string | string[];
      limit?: string | string[];
      offset?: string | string[];
      sort?: string | string[];
    };

    const limitNum = Math.min(parseInt(limit as string, 10) || 20, 100);
    const offsetNum = parseInt(offset as string, 10) || 0;

    // Create cache key based on parameters
    const filterParams = `${status}-${category || 'all'}-${sort}-${limitNum}-${offsetNum}`;
    const cacheKey = cacheKeys.jobs.filtered(filterParams);

    // Use cache-or-compute pattern
    const result = await cacheOrCompute(
      cacheKey,
      async () => {
        logInfo(`Computing jobs with filters: ${filterParams}`);
        return filterAndSortJobs(MOCK_JOBS, {
          status: status as string,
          category: category as string,
          sort: sort as string,
          limit: limitNum,
          offset: offsetNum
        });
      },
      CacheCategory.SHORT, // 5 minutes cache for job listings
      300 // 5 minutes TTL
    );

    // Apply cache headers
    applyCacheHeaders(res, CacheCategory.SHORT);
    
    // Add performance and metadata headers
    res.setHeader('X-Response-Time', Date.now().toString());
    res.setHeader('X-Total-Jobs', result.totalAll.toString());
    res.setHeader('X-Filtered-Count', result.totalFiltered.toString());
    res.setHeader('X-Page-Size', limitNum.toString());

    return res.status(200).json({
      jobs: result.jobs,
      count: result.totalFiltered,
      limit: limitNum,
      offset: offsetNum,
      total: result.totalAll
    });

  } catch (error: any) {
    logErrorToProduction('Jobs API error:', { data: error });
    
    // Return fallback data on error
    applyCacheHeaders(res, CacheCategory.SHORT);
    res.setHeader('X-Data-Source', 'fallback');
    
    return res.status(200).json({
      jobs: MOCK_JOBS.slice(0, 20), // Return first 20 jobs as fallback
      count: MOCK_JOBS.length,
      limit: 20,
      offset: 0,
      total: MOCK_JOBS.length
    });
  }
}

export default withApiDocsCors(withErrorLogging(handler)); 