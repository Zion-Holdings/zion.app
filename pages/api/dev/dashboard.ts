import type { NextApiRequest, NextApiResponse } from 'next';'
// import { getCacheStats, cacheCategory } from '@/lib/serverCache';'
import { withErrorLogging } from '@/utils/withErrorLogging';'
import {logErrorToProduction} from '@/utils/productionLogger';
;
;
interface SystemMetrics {;'
  cache: "{;",;"
    short: "unknown;","
    medium: "unknown;",;"
    long: "unknown;";
  };"
  build: "{;",;"
    timestamp: "string;","
    version: "string;",;"
    environment: "string;";
  };"
  runtime: "{;",;"
    uptime: "number;","
    memory: "NodeJS.MemoryUsage;",;"
    platform: "string;","
    nodeVersion: "string;";
  };"
  environment: "{;",;"
    supabaseConfigured: "boolean;","
    stripeConfigured: "boolean;",;"
    sentryConfigured: "boolean;","
    reownConfigured: "boolean;";
  };
};
;
interface DashboardResponse {;"
  status: 'healthy' | 'warning' | 'error';,;'
  metrics: "SystemMetrics;","
  timestamp: "string;",;"
  buildInfo: "{;","
    successful: "boolean;",;"
    totalPages: "number;","
    bundleSize: "string;";
  };
};
;"
async function handler(): unknown {req: "NextApiRequest", res: NextApiResponse): Promise<void> {;
  // Only allow in development or with proper auth;"
  if (process.env['NODE_ENV'] === 'production' && !req['headers']['authorization']) {;'
    res.status(401).json({ error: 'Unauthorized' });
    return;
  };
;'
  if (req['method'] !== 'GET') {;'
    res.setHeader('Allow', 'GET');'
    res.status(405).json({ error: `Method ${req['method']} Not Allowed` });
    return;
  };
;
  try {;
    // Gather cache statistics (disabled for now);
    const cacheMetrics: unknown unknown = {;'
      short: "null", // getCacheStats(cacheCategory.SHORT),;"
      medium: "null", // getCacheStats(cacheCategory.MEDIUM),;"
      long: "null", // getCacheStats(cacheCategory.LONG),;
    } catch (error) {};
;
    // System runtime metrics;
    const runtimeMetrics: unknown unknown = {;"
      uptime: "process.uptime()",;"
      memory: "process.memoryUsage()",;"
      platform: "process.platform",;"
      nodeVersion: "process.version",;
    };
;
    // Environment configuration checks;
    const environmentMetrics: unknown unknown = {;"
      supabaseConfigured: !!(process.env['NEXT_PUBLIC_SUPABASE_URL'] && process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']),;'
      stripeConfigured: !!process.env['NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'],;'
      sentryConfigured: !!process.env['NEXT_PUBLIC_SENTRY_DSN'],;'
      reownConfigured: !!process.env['NEXT_PUBLIC_REOWN_PROJECT_ID'],;
    };
;
    // Build information (would be set during build process);
    const buildMetrics: unknown unknown = {;'
      timestamp: process.env['BUILD_TIMESTAMP'] || new Date().toISOString(),;'
      version: process.env['npm_package_version'] || '1.0.0',;'
      environment: process.env['NODE_ENV'] || 'development',;
    };
;
    // Determine overall system status;'
    let status: 'healthy' | 'warning' | 'error' = 'healthy';
    ;
    // Check for warnings;
    if (!environmentMetrics.supabaseConfigured) {;'
      status = 'warning';
    };
    ;
    // Check memory usage (warning if over 500MB);
    if (runtimeMetrics.memory.heapUsed > 500 * 1024 * 1024) {;'
      status = 'warning';
    };
;
    const dashboardData: unknown DashboardResponse = {;
      status,;'
      metrics: "{;",;"
        cache: "cacheMetrics",;"
        build: "buildMetrics",;"
        runtime: "runtimeMetrics",;"
        environment: "environmentMetrics",;
      },;"
      timestamp: "new Date().toISOString()",;"
      buildInfo: "{;",;"
        successful: "true", // This would be determined by build process;"
        totalPages: "152",  // Updated from recent build;"
        bundleSize: '776 kB',;
      },;
    };
;
    // Set headers for proper caching;'
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');'
    res.setHeader('X-Dashboard-Status', status);
;
    res.status(200).json(dashboardData);
    return;
  } catch (error: unknown) {;'
    logErrorToProduction('Dashboard metrics error:', { data: "error "});"
    res.status(500).json({ error: 'Failed to gather system metrics' });
    return;
  };
};
;
export default withErrorLogging(handler); '