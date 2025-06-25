import * as Sentry from '@sentry/nextjs';
import { z } from 'zod';

interface EnvironmentConfig {
  supabase: {
    url: string;
    anonKey: string;
    serviceRoleKey?: string;
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
  NEXT_PUBLIC_SUPABASE_URL: z.string().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
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
        site: config.datadog.site as any,
        service: config.datadog.service,
        env: config.datadog.env,
        forwardErrorsToLogs: true,
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

  // Supabase Configuration
  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;
  
  // Debug logging for Supabase configuration
  const urlIsPlaceholder = isPlaceholderValue(supabaseUrl);
  const anonKeyIsPlaceholder = isPlaceholderValue(supabaseAnonKey);
  
  if (isDevelopment || process.env.DEBUG_ENV_CONFIG) {
    console.log('[ENV CONFIG] Supabase configuration check:', {
      url: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'undefined',
      urlIsPlaceholder,
      anonKeyPresent: !!supabaseAnonKey,
      anonKeyIsPlaceholder,
      serviceRoleKeyPresent: !!supabaseServiceRoleKey
    });
  }
  
  const supabaseConfigured = !urlIsPlaceholder && !anonKeyIsPlaceholder;

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
    supabase: {
      url: supabaseConfigured ? supabaseUrl! : 'https://placeholder.supabase.co',
      anonKey: supabaseConfigured ? supabaseAnonKey! : 'placeholder-anon-key',
      serviceRoleKey: supabaseServiceRoleKey,
      isConfigured: supabaseConfigured
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
    
    if (!config.supabase.isConfigured) {
      warnings.push('Supabase is not configured - using placeholder values');
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
  
  if (!config.supabase.isConfigured) {
    errors.push('Supabase configuration must be complete in production (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)');
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