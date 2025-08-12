import type { NextApiRequest, NextApiResponse } from 'next';
import { ENV_CONFIG } from '@/utils/environmentConfig';

interface HealthCheckResult {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  environment: string;
  services: {
    supabase: {
      configured: boolean;
      status: 'ok' | 'warning' | 'error';
      details?: string;
    };
    sentry: {
      configured: boolean;
      status: 'ok' | 'warning' | 'error';
      details?: string;
    };
    authentication: {
      status: 'ok' | 'warning' | 'error';
      details?: string;
    };
  };
  warnings: string[];
  errors: string[];
}

function checkPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  
  const placeholderPatterns = [
    /your_.*_here/i,
    /placeholder/i,
    /example/i,
    /^undefined$/,
    /^null$/
  ];
  
  return placeholderPatterns.some(pattern => pattern.test(value));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthCheckResult>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const warnings: string[] = [];
  const errors: string[] = [];
  
  // Check Supabase configuration
  const supabaseConfigured = ENV_CONFIG.supabase.isConfigured;
  const supabaseUrlValid = !checkPlaceholder(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseKeyValid = !checkPlaceholder(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  
  let supabaseStatus: 'ok' | 'warning' | 'error' = 'ok';
  let supabaseDetails = '';
  
  if (!supabaseConfigured) {
    supabaseStatus = 'error';
    supabaseDetails = 'Supabase not configured - authentication will fail';
    errors.push('Supabase configuration missing');
  } else if (!supabaseUrlValid || !supabaseKeyValid) {
    supabaseStatus = 'error';
    supabaseDetails = 'Supabase credentials appear to be placeholders';
    errors.push('Supabase credentials are placeholder values');
  }
  
  // Check Sentry configuration
  const sentryConfigured = ENV_CONFIG.sentry.isConfigured;
  let sentryStatus: 'ok' | 'warning' | 'error' = 'ok';
  let sentryDetails = '';
  
  if (!sentryConfigured && process.env.NODE_ENV === 'production') {
    sentryStatus = 'warning';
    sentryDetails = 'Sentry not configured - error monitoring disabled';
    warnings.push('Error monitoring not configured for production');
  } else if (sentryConfigured && checkPlaceholder(ENV_CONFIG.sentry.dsn)) {
    sentryStatus = 'warning';
    sentryDetails = 'Sentry DSN appears to be a placeholder';
    warnings.push('Sentry DSN appears to be a placeholder value');
  }
  
  // Test authentication endpoint
  let authStatus: 'ok' | 'warning' | 'error' = 'ok';
  let authDetails = '';
  
  try {
    // Simple check - if supabase is not configured, auth will fail
    if (!supabaseConfigured) {
      authStatus = 'error';
      authDetails = 'Authentication unavailable due to missing Supabase configuration';
    }
  } catch (error) {
    authStatus = 'error';
    authDetails = `Authentication check failed: ${(error as Error).message}`;
    errors.push('Authentication system error');
  }
  
  // Determine overall status
  let overallStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';
  
  if (errors.length > 0) {
    overallStatus = 'unhealthy';
  } else if (warnings.length > 0) {
    overallStatus = 'degraded';
  }
  
  const result: HealthCheckResult = {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'unknown',
    services: {
      supabase: {
        configured: !!supabaseConfigured,
        status: supabaseStatus,
        details: supabaseDetails || undefined
      },
      sentry: {
        configured: sentryConfigured,
        status: sentryStatus,
        details: sentryDetails || undefined
      },
      authentication: {
        status: authStatus,
        details: authDetails || undefined
      }
    },
    warnings,
    errors
  };
  
  // Set appropriate HTTP status code
  const httpStatus = overallStatus === 'unhealthy' ? 503 : 
                    overallStatus === 'degraded' ? 200 : 200;
  
  return res.status(httpStatus).json(result);
} 