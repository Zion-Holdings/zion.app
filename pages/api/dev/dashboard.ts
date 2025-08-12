import type { NextApiRequest, NextApiResponse } from 'next';
// import { getCacheStats, cacheCategory } from '@/lib/serverCache';
import { withErrorLogging } from '@/utils/withErrorLogging';
import {logErrorToProduction} from '@/utils/productionLogger';


interface SystemMetrics {
  cache: {
    short: any;
    medium: any;
    long: any;
  };
  build: {
    timestamp: string;
    version: string;
    environment: string;
  };
  runtime: {
    uptime: number;
    memory: NodeJS.MemoryUsage;
    platform: string;
    nodeVersion: string;
  };
  environment: {
    supabaseConfigured: boolean;
    stripeConfigured: boolean;
    sentryConfigured: boolean;
    reownConfigured: boolean;
  };
}

interface DashboardResponse {
  status: 'healthy' | 'warning' | 'error';
  metrics: SystemMetrics;
  timestamp: string;
  buildInfo: {
    successful: boolean;
    totalPages: number;
    bundleSize: string;
  };
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DashboardResponse | { error: string }>
) {
  // Only allow in development or with proper auth
  if (process.env.NODE_ENV === 'production' && !req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Gather cache statistics (disabled for now)
    const cacheMetrics = {
      short: null, // getCacheStats(cacheCategory.SHORT),
      medium: null, // getCacheStats(cacheCategory.MEDIUM),
      long: null, // getCacheStats(cacheCategory.LONG),
    };

    // System runtime metrics
    const runtimeMetrics = {
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      platform: process.platform,
      nodeVersion: process.version,
    };

    // Environment configuration checks
    const environmentMetrics = {
      supabaseConfigured: !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      stripeConfigured: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      sentryConfigured: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
      reownConfigured: !!process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
    };

    // Build information (would be set during build process)
    const buildMetrics = {
      timestamp: process.env.BUILD_TIMESTAMP || new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
    };

    // Determine overall system status
    let status: 'healthy' | 'warning' | 'error' = 'healthy';
    
    // Check for warnings
    if (!environmentMetrics.supabaseConfigured) {
      status = 'warning';
    }
    
    // Check memory usage (warning if over 500MB)
    if (runtimeMetrics.memory.heapUsed > 500 * 1024 * 1024) {
      status = 'warning';
    }

    const dashboardData: DashboardResponse = {
      status,
      metrics: {
        cache: cacheMetrics,
        build: buildMetrics,
        runtime: runtimeMetrics,
        environment: environmentMetrics,
      },
      timestamp: new Date().toISOString(),
      buildInfo: {
        successful: true, // This would be determined by build process
        totalPages: 152,  // Updated from recent build
        bundleSize: '776 kB',
      },
    };

    // Set headers for proper caching
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('X-Dashboard-Status', status);

    return res.status(200).json(dashboardData);

  } catch (error: any) {
    logErrorToProduction('Dashboard metrics error:', { data: error });
    return res.status(500).json({ error: 'Failed to gather system metrics' });
  }
}

export default withErrorLogging(handler); 