import type { NextApiRequest, NextApiResponse } from 'next';
import { ENV_CONFIG } from '@/utils/environmentConfig';

interface HealthCheckResult {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  environment: string;
  services: {
    auth0: {
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
  
  // Check Auth0 configuration
  const auth0Configured = process.env.AUTH0_CLIENT_ID && process.env.AUTH0_CLIENT_SECRET && process.env.AUTH0_SECRET && process.env.AUTH0_BASE_URL && process.env.AUTH0_ISSUER_BASE_URL;
  const auth0ClientIdValid = !checkPlaceholder(process.env.AUTH0_CLIENT_ID);
  const auth0SecretValid = !checkPlaceholder(process.env.AUTH0_SECRET);
  
  let auth0Status: 'ok' | 'warning' | 'error' = 'ok';
  let auth0Details = '';
  
  if (!auth0Configured) {
    auth0Status = 'error';
    auth0Details = 'Auth0 not configured - authentication will fail';
    errors.push('Auth0 configuration missing');
  } else if (!auth0ClientIdValid || !auth0SecretValid) {
    auth0Status = 'error';
    auth0Details = 'Auth0 credentials appear to be placeholders';
    errors.push('Auth0 credentials are placeholder values');
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
    // Simple check - if auth0 is not configured, auth will fail
    if (!auth0Configured) {
      authStatus = 'error';
      authDetails = 'Authentication unavailable due to missing Auth0 configuration';
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
      auth0: {
        configured: !!auth0Configured,
        status: auth0Status,
        details: auth0Details || undefined
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