import { GetServerSideProps, GetStaticProps, GetServerSidePropsContext, GetStaticPropsContext, GetServerSidePropsResult, GetStaticPropsResult } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ENV_CONFIG } from './environmentConfig';
import { logInfo, logWarn, logErrorToProduction } from './productionLogger';


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
export function withServerSideErrorHandling<P extends Record<string, unknown>>(
  getServerSideProps: GetServerSideProps<P>,
  retryConfig: Partial<RetryConfig> = {}
): GetServerSideProps<P | ErrorPageProps> {
  const config = { ...defaultRetryConfig, ...retryConfig };

  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P | ErrorPageProps>> => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        const result = await getServerSideProps(context);
        
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
      } catch (error: unknown) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        logWarn('⚠️ getServerSideProps attempt ${attempt + 1}/${config.maxRetries + 1} failed for ${context.resolvedUrl}:', { data: lastError ? lastError.message : 'Unknown error' });
        
        // Log each attempt to Sentry if configured
        if (ENV_CONFIG.sentry.isConfigured) {
          Sentry.withScope((scope) => {
            scope.setTag('attempt', String(attempt + 1));
            scope.setTag('maxRetries', String(config.maxRetries));
            scope.setTag('route', context.resolvedUrl);
            scope.setTag('errorType', lastError instanceof Error ? getErrorType(lastError) : 'unknown');
            scope.setLevel(attempt < config.maxRetries ? 'warning' : 'error');
            scope.setContext('serverSideProps', {
              query: (context as unknown as { query?: unknown }).query,
              params: (context as unknown as { params?: unknown }).params,
              req: {
                url: (context as unknown as { req?: { url?: string } }).req?.url,
                method: (context as unknown as { req?: { method?: string } }).req?.method,
                headers: {
                  'user-agent': (context as unknown as { req?: { headers?: Record<string, string> } }).req?.headers?.['user-agent'],
                  'referer': (context as unknown as { req?: { headers?: Record<string, string> } }).req?.headers?.['referer']
                }
              }
            });
            Sentry.captureException(lastError);
          });
        }

        // Check if we should retry
        const shouldRetry = attempt < config.maxRetries && 
                          config.retryCondition && 
                          config.retryCondition(lastError);

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
          scope.setTag('finalFailure', String(true));
          scope.setTag('route', context.resolvedUrl);
          scope.setTag('errorType', lastError instanceof Error ? getErrorType(lastError) : 'unknown');
          scope.setLevel('error');
          scope.setContext('serverSideProps', {
            query: (context as unknown as { query?: unknown }).query,
            params: (context as unknown as { params?: unknown }).params,
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
      const errorType = lastError instanceof Error ? getErrorType(lastError) : 'unknown';

      // Set appropriate status code
      const statusCode = errorType === 'config' ? 503 : 
                        errorType === 'network' ? 502 : 500;

      if ((context as unknown as { res?: { statusCode?: number } }).res) {
        (context as unknown as { res?: { statusCode?: number } }).res!.statusCode = statusCode;
      }

      return {
        props: {
          hasError: true,
          errorMessage: ENV_CONFIG.app.isDevelopment && lastError ? lastError.message : 'An error occurred while loading the page',
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
export function withStaticErrorHandling<P extends Record<string, unknown>>(
  getStaticProps: GetStaticProps<P>,
  retryConfig: Partial<RetryConfig> = {}
): GetStaticProps<P> {
  const config = { ...defaultRetryConfig, ...retryConfig };

  return async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<P>> => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        const result = await getStaticProps(context);
        
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
      } catch (error: unknown) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        logWarn('⚠️ getStaticProps attempt ${attempt + 1}/${config.maxRetries + 1} failed:', { data: lastError.message });
        
        // Log each attempt to Sentry if configured
        if (ENV_CONFIG.sentry.isConfigured) {
          Sentry.withScope((scope) => {
            scope.setTag('attempt', String(attempt + 1));
            scope.setTag('maxRetries', String(config.maxRetries));
            scope.setTag('staticGeneration', String(true));
            scope.setTag('errorType', lastError instanceof Error ? getErrorType(lastError) : 'unknown');
            scope.setLevel(attempt < config.maxRetries ? 'warning' : 'error');
            scope.setContext('staticProps', {
              params: (context as unknown as { params?: unknown }).params,
              environmentConfig: {
                supabaseConfigured: ENV_CONFIG.supabase.isConfigured,
                sentryConfigured: ENV_CONFIG.sentry.isConfigured,
                environment: ENV_CONFIG.app.environment
              }
            });
            Sentry.captureException(lastError);
          });
        }

        // Check if we should retry
        const shouldRetry = attempt < config.maxRetries && 
                          config.retryCondition && 
                          config.retryCondition(lastError);

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
      if (lastError) logErrorToProduction('❌ getStaticProps failed after all retries:', { data: lastError });
      
      // Log final failure to Sentry
      if (lastError && ENV_CONFIG.sentry.isConfigured) {
        Sentry.withScope((scope) => {
          scope.setTag('finalFailure', String(true));
          scope.setTag('staticGeneration', String(true));
          scope.setTag('errorType', lastError instanceof Error ? getErrorType(lastError) : 'unknown');
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
    } catch (error: unknown) {
      lastError = error instanceof Error ? error : new Error(String(error));

      const shouldRetry = attempt < config.maxRetries && 
                        config.retryCondition && 
                        config.retryCondition(lastError);

      if (shouldRetry) {
        logWarn('🔄 Fetch attempt ${attempt + 1} failed, retrying in ${config.retryDelay}ms:', { data: lastError.message });
        await new Promise(resolve => setTimeout(resolve, config.retryDelay));
        continue;
      }

      break;
    }
  }

  throw lastError;
}

