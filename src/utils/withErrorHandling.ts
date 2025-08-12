import { GetServerSideProps, GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ENV_CONFIG } from './environmentConfig';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


interface ErrorPageProps {
  hasError: boolean;
  errorMessage: string;
  errorType: 'network' | 'config' | 'unknown';
  statusCode: number;
}

interface RetryConfig {
  maxRetries: number;
  retryDelay: number;
  retryCondition?: (error: Error) => boolean;
}

const defaultRetryConfig: RetryConfig = {
  maxRetries: 2,
  retryDelay: 1000,
  retryCondition: (error: Error) => {
    // Retry for network errors, but not for configuration errors
    return error.message.includes('fetch') || 
           error.message.includes('network') || 
           error.message.includes('timeout') ||
           error.message.includes('ENOTFOUND') ||
           error.message.includes('ECONNREFUSED');
  }
};

/**
 * Enhanced error handling wrapper for getServerSideProps
 */
export function withServerSideErrorHandling<P extends Record<string, any>>(
  getServerSideProps: GetServerSideProps<P>,
  retryConfig: Partial<RetryConfig> = {}
): GetServerSideProps<P | ErrorPageProps> {
  const config = { ...defaultRetryConfig, ...retryConfig };

  return async (context: any) => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        const result = await (getServerSideProps as any)(context);
        
        // If we succeeded after retries, log the recovery
        if (attempt > 0) {
          logInfo(`✅ getServerSideProps succeeded on attempt ${attempt + 1} for ${context.resolvedUrl}`);
          
          if (ENV_CONFIG.sentry.isConfigured) {
            Sentry.addBreadcrumb({
              message: `getServerSideProps succeeded on attempt ${attempt + 1}`,
              level: 'info',
              category: 'retry',
              data: { route: context.resolvedUrl, attempt }
            });
          }
        }
        
        return result;
      } catch (error: any) {
        lastError = error;
        
        logWarn('⚠️ getServerSideProps attempt ${attempt + 1}/${config.maxRetries + 1} failed for ${context.resolvedUrl}:', { data: error.message });
        
        // Log each attempt to Sentry if configured
        if (ENV_CONFIG.sentry.isConfigured) {
          Sentry.withScope((scope) => {
            scope.setTag('attempt', attempt + 1);
            scope.setTag('maxRetries', config.maxRetries);
            scope.setTag('route', context.resolvedUrl);
            scope.setTag('errorType', getErrorType(error));
            scope.setLevel(attempt < config.maxRetries ? 'warning' : 'error');
            scope.setContext('serverSideProps', {
              query: context.query,
              params: context.params,
              req: {
                url: context.req?.url,
                method: context.req?.method,
                headers: {
                  'user-agent': context.req?.headers['user-agent'],
                  'referer': context.req?.headers['referer']
                }
              }
            });
            Sentry.captureException(error);
          });
        }

        // Check if we should retry
        const shouldRetry = attempt < config.maxRetries && 
                          config.retryCondition && 
                          config.retryCondition(error);

        if (shouldRetry) {
          logInfo(`🔄 Retrying in ${config.retryDelay}ms...`);
          await new Promise(resolve => setTimeout(resolve, config.retryDelay));
          continue;
        }

        // Final attempt failed or shouldn't retry
        break;
      }
    }

    // All attempts failed
    if (lastError) {
      logErrorToProduction('❌ getServerSideProps failed after all retries for ${context.resolvedUrl}:', { data: lastError });
      
      // Log final failure to Sentry
      if (ENV_CONFIG.sentry.isConfigured) {
        Sentry.withScope((scope) => {
          scope.setTag('finalFailure', true);
          scope.setTag('route', context.resolvedUrl);
          scope.setTag('errorType', getErrorType(lastError));
          scope.setLevel('error');
          scope.setContext('serverSideProps', {
            query: context.query,
            params: context.params,
            environmentConfig: {
              supabaseConfigured: ENV_CONFIG.supabase.isConfigured,
              sentryConfigured: ENV_CONFIG.sentry.isConfigured,
              environment: ENV_CONFIG.app.environment
            }
          });
          Sentry.captureException(lastError);
        });
      }

      // Determine error type for better user messaging
      const errorType = getErrorType(lastError);

      // Set appropriate status code
      const statusCode = errorType === 'config' ? 503 : 
                        errorType === 'network' ? 502 : 500;

      if (context.res) {
        context.res.statusCode = statusCode;
      }

      return {
        props: {
          hasError: true,
          errorMessage: ENV_CONFIG.app.isDevelopment ? lastError.message : 'An error occurred while loading the page',
          errorType,
          statusCode
        } as unknown as P
      };
    }

    // This should never happen, but TypeScript needs it
    throw new Error('Unexpected error handling state');
  };
}

/**
 * Enhanced error handling wrapper for getStaticProps
 */
export function withStaticErrorHandling<P extends Record<string, any>>(
  getStaticProps: GetStaticProps<P>,
  retryConfig: Partial<RetryConfig> = {}
): GetStaticProps<P> {
  const config = { ...defaultRetryConfig, ...retryConfig };

  return async (context: any) => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        const result = await (getStaticProps as any)(context);
        
        // If we succeeded after retries, log the recovery
        if (attempt > 0) {
          logInfo(`✅ getStaticProps succeeded on attempt ${attempt + 1}`);
          
          if (ENV_CONFIG.sentry.isConfigured) {
            Sentry.addBreadcrumb({
              message: `getStaticProps succeeded on attempt ${attempt + 1}`,
              level: 'info',
              category: 'retry',
              data: { attempt }
            });
          }
        }
        
        return result;
      } catch (error: any) {
        lastError = error;
        
        logWarn('⚠️ getStaticProps attempt ${attempt + 1}/${config.maxRetries + 1} failed:', { data: error.message });
        
        // Log each attempt to Sentry if configured
        if (ENV_CONFIG.sentry.isConfigured) {
          Sentry.withScope((scope) => {
            scope.setTag('attempt', attempt + 1);
            scope.setTag('maxRetries', config.maxRetries);
            scope.setTag('staticGeneration', true);
            scope.setTag('errorType', getErrorType(error));
            scope.setLevel(attempt < config.maxRetries ? 'warning' : 'error');
            scope.setContext('staticProps', {
              params: context.params,
              environmentConfig: {
                supabaseConfigured: ENV_CONFIG.supabase.isConfigured,
                sentryConfigured: ENV_CONFIG.sentry.isConfigured,
                environment: ENV_CONFIG.app.environment
              }
            });
            Sentry.captureException(error);
          });
        }

        // Check if we should retry
        const shouldRetry = attempt < config.maxRetries && 
                          config.retryCondition && 
                          config.retryCondition(error);

        if (shouldRetry) {
          logInfo(`🔄 Retrying in ${config.retryDelay}ms...`);
          await new Promise(resolve => setTimeout(resolve, config.retryDelay));
          continue;
        }

        // Final attempt failed or shouldn't retry
        break;
      }
    }

    // All attempts failed - for static props, we should return empty data rather than crash the build
    if (lastError) {
      logErrorToProduction('❌ getStaticProps failed after all retries:', { data: lastError });
      
      // Log final failure to Sentry
      if (ENV_CONFIG.sentry.isConfigured) {
        Sentry.withScope((scope) => {
          scope.setTag('finalFailure', true);
          scope.setTag('staticGeneration', true);
          scope.setTag('errorType', getErrorType(lastError));
          scope.setLevel('error');
          Sentry.captureException(lastError);
        });
      }

      // For static props, return empty/fallback data instead of crashing the build
      logWarn('⚠️ Returning fallback data for failed getStaticProps');
      return {
        props: {} as P,
        revalidate: 60 // Try to regenerate more frequently
      };
    }

    // This should never happen, but TypeScript needs it
    throw new Error('Unexpected error handling state');
  };
}

/**
 * Determine error type based on error message and properties
 */
function getErrorType(error: Error): 'config' | 'network' | 'unknown' {
  const message = error.message.toLowerCase();
  
  if (message.includes('supabase') || 
      message.includes('environment') ||
      message.includes('configuration') ||
      message.includes('not configured') ||
      message.includes('placeholder')) {
    return 'config';
  }
  
  if (message.includes('fetch') || 
      message.includes('network') ||
      message.includes('timeout') ||
      message.includes('enotfound') ||
      message.includes('econnrefused') ||
      message.includes('offline')) {
    return 'network';
  }
  
  return 'unknown';
}

/**
 * Utility to check if environment variables are properly configured
 */
export function validateEnvironment(requiredVars: string[]): void {
  const missing: string[] = [];
  const placeholder: string[] = [];

  requiredVars.forEach(varName => {
    const value = process.env[varName];
    
    if (!value) {
      missing.push(varName);
    } else if (value.includes('YOUR_') || 
               value.includes('placeholder') || 
               value === 'dummy' ||
               value === 'fallback') {
      placeholder.push(varName);
    }
  });

  if (missing.length > 0 || placeholder.length > 0) {
    const errorMessage = [
      'Environment configuration error:',
      missing.length > 0 ? `Missing variables: ${missing.join(', ')}` : '',
      placeholder.length > 0 ? `Placeholder values: ${placeholder.join(', ')}` : ''
    ].filter(Boolean).join('\n');

    throw new Error(errorMessage);
  }
}

/**
 * Safe fetch wrapper with retry logic
 */
export async function safeFetch(
  url: string, 
  options?: RequestInit, 
  retryConfig: Partial<RetryConfig> = {}
): Promise<Response> {
  const config = { ...defaultRetryConfig, ...retryConfig };
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error: any) {
      lastError = error;

      const shouldRetry = attempt < config.maxRetries && 
                        config.retryCondition && 
                        config.retryCondition(error);

      if (shouldRetry) {
        logWarn('🔄 Fetch attempt ${attempt + 1} failed, retrying in ${config.retryDelay}ms:', { data: error.message });
        await new Promise(resolve => setTimeout(resolve, config.retryDelay));
        continue;
      }

      break;
    }
  }

  throw lastError;
}

