import { GetServerSideProps, GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';

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
        const result = await getServerSideProps(context);
        
        // If we succeeded after retries, log the recovery
        if (attempt > 0) {
          Sentry.addBreadcrumb({
            message: `getServerSideProps succeeded on attempt ${attempt + 1}`,
            level: 'info',
            category: 'retry'
          });
        }
        
        return result;
      } catch (error: any) {
        lastError = error;
        
        // Log each attempt
        Sentry.withScope((scope) => {
          scope.setTag('attempt', attempt + 1);
          scope.setTag('maxRetries', config.maxRetries);
          scope.setTag('route', context.resolvedUrl);
          scope.setLevel('warning');
          Sentry.captureException(error);
        });

        // Check if we should retry
        const shouldRetry = attempt < config.maxRetries && 
                          config.retryCondition && 
                          config.retryCondition(error);

        if (shouldRetry) {
          console.warn(`getServerSideProps attempt ${attempt + 1} failed, retrying in ${config.retryDelay}ms:`, error.message);
          await new Promise(resolve => setTimeout(resolve, config.retryDelay));
          continue;
        }

        // Final attempt failed or shouldn't retry
        break;
      }
    }

    // All attempts failed
    if (lastError) {
      console.error('getServerSideProps failed after all retries:', lastError);
      
      // Log final failure to Sentry
      Sentry.withScope((scope) => {
        scope.setTag('finalFailure', true);
        scope.setTag('route', context.resolvedUrl);
        scope.setLevel('error');
        Sentry.captureException(lastError);
      });

      // Determine error type for better user messaging
      const errorType = lastError.message.includes('Supabase') || 
                       lastError.message.includes('environment') ||
                       lastError.message.includes('configuration')
                       ? 'config'
                       : lastError.message.includes('fetch') ||
                         lastError.message.includes('network')
                       ? 'network'
                       : 'unknown';

      // Set appropriate status code
      const statusCode = errorType === 'config' ? 503 : 
                        errorType === 'network' ? 502 : 500;

      if (context.res) {
        context.res.statusCode = statusCode;
      }

      return {
        props: {
          hasError: true,
          errorMessage: lastError.message,
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
        const result = await getStaticProps(context);
        
        // If we succeeded after retries, log the recovery
        if (attempt > 0) {
          Sentry.addBreadcrumb({
            message: `getStaticProps succeeded on attempt ${attempt + 1}`,
            level: 'info',
            category: 'retry'
          });
        }
        
        return result;
      } catch (error: any) {
        lastError = error;
        
        // Log each attempt
        Sentry.withScope((scope) => {
          scope.setTag('attempt', attempt + 1);
          scope.setTag('maxRetries', config.maxRetries);
          scope.setTag('staticGeneration', true);
          scope.setLevel('warning');
          Sentry.captureException(error);
        });

        // Check if we should retry
        const shouldRetry = attempt < config.maxRetries && 
                          config.retryCondition && 
                          config.retryCondition(error);

        if (shouldRetry) {
          console.warn(`getStaticProps attempt ${attempt + 1} failed, retrying in ${config.retryDelay}ms:`, error.message);
          await new Promise(resolve => setTimeout(resolve, config.retryDelay));
          continue;
        }

        // Final attempt failed or shouldn't retry
        break;
      }
    }

    // All attempts failed - for static props, we should return empty data rather than crash the build
    if (lastError) {
      console.error('getStaticProps failed after all retries:', lastError);
      
      // Log final failure to Sentry
      Sentry.withScope((scope) => {
        scope.setTag('finalFailure', true);
        scope.setTag('staticGeneration', true);
        scope.setLevel('error');
        Sentry.captureException(lastError);
      });

      // For static props, return empty/fallback data instead of crashing the build
      console.warn('Returning fallback data for failed getStaticProps');
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
        console.warn(`Fetch attempt ${attempt + 1} failed, retrying in ${config.retryDelay}ms:`, error.message);
        await new Promise(resolve => setTimeout(resolve, config.retryDelay));
        continue;
      }

      break;
    }
  }

  throw lastError;
}

export type { ErrorPageProps, RetryConfig }; 