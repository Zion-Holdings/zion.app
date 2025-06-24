import * as Sentry from '@sentry/nextjs';
import { z } from 'zod';

interface EnvironmentConfig {
  auth0: {
    secret: string;
    baseUrl: string;
    issuerBaseUrl: string;
    clientId: string;
    clientSecret: string;
    audience?: string;
    isConfigured: boolean;
  };
  sentry: {
    dsn: string;
    environment: string;
    release: string;
    isConfigured: boolean;
  };
  reown: {
    projectId: string;
    isConfigured: boolean;
  };
  datadog: {
    clientToken?: string;
    site?: string;
    service?: string;
    env?: string;
    enabled: boolean;
  };
  app: {
    environment: string;
    isDevelopment: boolean;
    isProduction: boolean;
  };
}

// Typed environment schema using zod for early validation
const EnvSchema = z.object({
  AUTH0_SECRET: z.string().optional(),
  AUTH0_BASE_URL: z.string().optional(),
  AUTH0_ISSUER_BASE_URL: z.string().optional(),
  AUTH0_CLIENT_ID: z.string().optional(),
  AUTH0_CLIENT_SECRET: z.string().optional(),
  AUTH0_AUDIENCE: z.string().optional(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
  NEXT_PUBLIC_SENTRY_ENVIRONMENT: z.string().optional(),
  SENTRY_ENVIRONMENT: z.string().optional(),
  NEXT_PUBLIC_SENTRY_RELEASE: z.string().optional(),
  SENTRY_RELEASE: z.string().optional(),
  NEXT_PUBLIC_REOWN_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_DD_CLIENT_TOKEN: z.string().optional(),
  NEXT_PUBLIC_DD_SITE: z.string().optional(),
  NEXT_PUBLIC_DD_SERVICE: z.string().optional(),
  NEXT_PUBLIC_DD_ENV: z.string().optional(),
  DD_SERVICE: z.string().optional(),
  DD_ENV: z.string().optional(),
});

type RawEnv = z.infer<typeof EnvSchema>;

/**
 * Check if a value is a placeholder or default development value
 */
function isPlaceholderValue(value: string | undefined): boolean {
  if (!value) return true;
  
  const placeholderPatterns = [
    'placeholder',
    'your_',
    'example',
    'test_key',
    'localhost',
    'change_me',
    'replace_with',
    'insert_',
    'add_your',
    'enter_your',
    // Auth0 specific placeholders
    'your-tenant.us.auth0.com',
    'your_auth0_',
    'auth0_client_id_here',
    'auth0_client_secret_here',
    'auth0_secret_here'
  ];
  
  const lowerValue = value.toLowerCase();
  return placeholderPatterns.some(pattern => lowerValue.includes(pattern));
}

/**
 * Initialize services based on configuration
 */
export async function initializeServices(): Promise<void> {
  const config = getEnvironmentConfig();
  
  // Initialize Sentry if configured
  if (config.sentry.isConfigured && config.app.isProduction) {
    try {
      Sentry.init({
        dsn: config.sentry.dsn,
        environment: config.sentry.environment,
        release: config.sentry.release,
        tracesSampleRate: 1.0,
      });
      console.log('✅ Sentry initialized successfully');
    } catch (error) {
      console.warn('Failed to initialize Sentry:', error);
    }
  }

  // Initialize Datadog logs in the browser if configured
  if (config.datadog.enabled && typeof window !== 'undefined') {
    try {
      const { datadogLogs } = await import('@datadog/browser-logs');
      datadogLogs.init({
        clientToken: config.datadog.clientToken!,
        site: config.datadog.site,
        service: config.datadog.service,
        env: config.datadog.env,
        forwardErrorsToLogs: true,
        sampleRate: 100,
      });
      console.log('✅ Datadog Logs initialized');
    } catch (error) {
      console.warn('Failed to initialize Datadog Logs:', error);
    }
  }
  
  if (config.app.isDevelopment) {
    console.log('🔧 Services initialized for development environment');
  }
}

/**
 * Get environment configuration with proper validation and fallbacks
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  // Determine environment
  const nodeEnv = process.env.NODE_ENV || 'development';
  const isDevelopment = nodeEnv === 'development';
  const isProduction = nodeEnv === 'production';

  // Parse environment variables using the typed schema
  const env = EnvSchema.parse(process.env) as RawEnv;

  // Auth0 Configuration
  const auth0Secret = env.AUTH0_SECRET;
  const auth0BaseUrl = env.AUTH0_BASE_URL;
  const auth0IssuerBaseUrl = env.AUTH0_ISSUER_BASE_URL;
  const auth0ClientId = env.AUTH0_CLIENT_ID;
  const auth0ClientSecret = env.AUTH0_CLIENT_SECRET;
  const auth0Audience = env.AUTH0_AUDIENCE;
  
  // Debug logging for Auth0 configuration
  const secretIsPlaceholder = isPlaceholderValue(auth0Secret);
  const baseUrlIsPlaceholder = isPlaceholderValue(auth0BaseUrl);
  const issuerIsPlaceholder = isPlaceholderValue(auth0IssuerBaseUrl);
  const clientIdIsPlaceholder = isPlaceholderValue(auth0ClientId);
  const clientSecretIsPlaceholder = isPlaceholderValue(auth0ClientSecret);
  
  if (isDevelopment || process.env.DEBUG_ENV_CONFIG) {
    console.log('[ENV CONFIG] Auth0 configuration check:', {
      secret: auth0Secret ? `${auth0Secret.substring(0, 8)}...` : 'undefined',
      secretIsPlaceholder,
      baseUrl: auth0BaseUrl ? `${auth0BaseUrl.substring(0, 30)}...` : 'undefined',
      baseUrlIsPlaceholder,
      issuer: auth0IssuerBaseUrl ? `${auth0IssuerBaseUrl.substring(0, 30)}...` : 'undefined',
      issuerIsPlaceholder,
      clientIdPresent: !!auth0ClientId,
      clientIdIsPlaceholder,
      clientSecretPresent: !!auth0ClientSecret,
      clientSecretIsPlaceholder
    });
  }
  
  const auth0Configured = !secretIsPlaceholder && !baseUrlIsPlaceholder && 
                         !issuerIsPlaceholder && !clientIdIsPlaceholder && 
                         !clientSecretIsPlaceholder;

  // Sentry Configuration
  const sentryDsn = env.NEXT_PUBLIC_SENTRY_DSN || env.SENTRY_DSN;
  const sentryEnvironment = env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || env.SENTRY_ENVIRONMENT || nodeEnv;
  const sentryRelease = env.NEXT_PUBLIC_SENTRY_RELEASE || env.SENTRY_RELEASE || 'unknown';
  
  const sentryConfigured = !isPlaceholderValue(sentryDsn);

  // Reown Configuration
  const reownProjectId = env.NEXT_PUBLIC_REOWN_PROJECT_ID;
  const reownConfigured = !isPlaceholderValue(reownProjectId);

  // Datadog Configuration
  const ddClientToken = env.NEXT_PUBLIC_DD_CLIENT_TOKEN;
  const ddSite = env.NEXT_PUBLIC_DD_SITE || 'datadoghq.com';
  const ddService = env.NEXT_PUBLIC_DD_SERVICE || env.DD_SERVICE || 'zion-app';
  const ddEnv = env.NEXT_PUBLIC_DD_ENV || env.DD_ENV || nodeEnv;
  const datadogEnabled = !!ddClientToken || !!env.DD_SERVICE;

  return {
    auth0: {
      secret: auth0Configured ? auth0Secret! : 'placeholder-secret',
      baseUrl: auth0Configured ? auth0BaseUrl! : 'http://localhost:3000',
      issuerBaseUrl: auth0Configured ? auth0IssuerBaseUrl! : 'https://placeholder.us.auth0.com',
      clientId: auth0Configured ? auth0ClientId! : 'placeholder-client-id',
      clientSecret: auth0Configured ? auth0ClientSecret! : 'placeholder-client-secret',
      audience: auth0Audience,
      isConfigured: auth0Configured
    },
    sentry: {
      dsn: sentryConfigured ? sentryDsn! : '',
      environment: sentryEnvironment,
      release: sentryRelease,
      isConfigured: sentryConfigured
    },
    reown: {
      projectId: reownConfigured ? reownProjectId! : 'placeholder-project-id',
      isConfigured: reownConfigured
    },
    datadog: {
      clientToken: ddClientToken,
      site: ddSite,
      service: ddService,
      env: ddEnv,
      enabled: datadogEnabled
    },
    app: {
      environment: nodeEnv,
      isDevelopment,
      isProduction
    }
  };
}

/**
 * Validate critical environment variables for production
 */
export function validateProductionEnvironment(): void {
  const config = getEnvironmentConfig();
  
  if (!config.app.isProduction) {
    // Only warn in development
    const warnings = [];
    
    if (!config.auth0.isConfigured) {
      warnings.push('Auth0 is not configured - using placeholder values');
    }
    
    if (!config.sentry.isConfigured) {
      warnings.push('Sentry is not configured - error monitoring disabled');
    }
    
    if (!config.reown.isConfigured) {
      warnings.push('Reown wallet is not configured - wallet features disabled');
    }
    
    if (warnings.length > 0) {
      console.warn('⚠️ Development Environment Warnings:\n' + warnings.map(w => `  • ${w}`).join('\n'));
    }
    
    return;
  }

  // Strict validation for production
  const errors = [];
  
  if (!config.auth0.isConfigured) {
    errors.push('Auth0 configuration must be complete in production (AUTH0_SECRET, AUTH0_BASE_URL, AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET)');
  }

  if (!config.sentry.isConfigured) {
    errors.push('NEXT_PUBLIC_SENTRY_DSN must be configured in production for error monitoring');
  }

  if (!config.datadog.enabled) {
    errors.push('Datadog logging must be configured in production (NEXT_PUBLIC_DD_CLIENT_TOKEN)');
  }
  
  if (errors.length > 0) {
    const errorMessage = 'Production Environment Configuration Errors:\n' + errors.map(e => `  • ${e}`).join('\n');
    throw new Error(errorMessage);
  }
}

// Export the singleton configuration
export const ENV_CONFIG = getEnvironmentConfig(); 