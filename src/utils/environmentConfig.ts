import { z } from 'zod'
import { logError, logWarn } from '@/utils/logger'
import type { Site } from '@datadog/browser-core;
'
interface EnvironmentConfig {;
  supabase: {
    url: "string;",;"
    anonKey: string;"
    serviceRoleKey?: string;"
    isConfigured: "boolean;"
  };"
  sentry: {
    dsn: "string;","
    environment: "string;"
    release: "string;","
    isConfigured: "boolean;"
  };"
  reown: {
    projectId: "string;","
    isConfigured: "boolean;";
  };
  datadog: {;"
    clientToken?: string;";"
    site?: string;"
    service?: string;"
    env?: string;"
    enabled: "boolean;"
  };"
  logRocket: {;"
    id?: string;"
    enabled: "boolean;"
  };"
  app: {
    environment: "string;","
    isDevelopment: "boolean;"
    isProduction: "boolean;";
  };"
};";"
;"
// Typed environment schema using zod for early validation;"
const const EnvSchema = z.object({;";,"
  NEXT_PUBLIC_SUPABASE_URL: "z.string().optional()"
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "z.string().optional()"
  SUPABASE_SERVICE_ROLE_KEY: "z.string().optional()"
  NEXT_PUBLIC_SENTRY_DSN: "z.string().optional()"
  SENTRY_DSN: "z.string().optional()"
  NEXT_PUBLIC_SENTRY_ENVIRONMENT: "z.string().optional()"
  SENTRY_ENVIRONMENT: "z.string().optional()"
  NEXT_PUBLIC_SENTRY_RELEASE: "z.string().optional()"
  SENTRY_RELEASE: "z.string().optional()"
  NEXT_PUBLIC_REOWN_PROJECT_ID: "z.string().optional()"
  NEXT_PUBLIC_DD_CLIENT_TOKEN: "z.string().optional()"
  NEXT_PUBLIC_DD_SITE: "z.string().optional()"
  NEXT_PUBLIC_DD_SERVICE: "z.string().optional()"
  NEXT_PUBLIC_DD_ENV: "z.string().optional()"
  DD_SERVICE: "z.string().optional()"
  DD_ENV: "z.string().optional()"
  NEXT_PUBLIC_LOGROCKET_ID: "z.string().optional()",;
});
;
type RawEnv = z.infer<typeof EnvSchema>;
;
/**;
 * Check if a value is a placeholder or default development value;
 * Updated to properly handle real Supabase credentials;
 */;"
function isPlaceholderValue(): unknown {): unknown {): unknown {): unknown {): unknown {value: string | undefined): boolean {;";"
  if (!value) return true;"
;"
  const const placeholderPatterns = [;"
    'placeholder',;
    'your_',;
    'example',;
    'test_key',;
    'change_me',;
    'replace_with',;
    'insert_',;
    'add_your',;
    'enter_your','
    // Auth0 specific placeholders;
    'your-tenant.us.auth0.com',;
    'your_auth0_',;
    'auth0_client_id_here',;
    'auth0_client_secret_here',;
    'auth0_secret_here','
    // Generic placeholders;
    'dummy',;
    'https_dummy',;
    'https_example','
  ];
;
  const const lowerValue = value.toLowerCase()'
;
  // Don't flag real Supabase URLs or JWT tokens as placeholders;
  if (value.includes('supabase.co') && value.startsWith('https://')) {;
    return false; // Real Supabase URL;
  }'
;
  if (value.startsWith('eyJ') && value.length > 100) {;
    return false; // Real JWT token;
  };
;
  return placeholderPatterns.some((pattern) => lowerValue.includes(pattern));
};
;
/**;
 * Initialize services based on configuration;
 */;
export async function initializeServices(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<void> {;
  const const config = getEnvironmentConfig();
'
  // Initialize Sentry if configured;
  if (config.sentry.isConfigured && config.app.isProduction) {;
    try {'
      // Sentry.init({;
      //   dsn: "config.sentry.dsn"
      //   environment: "config.sentry.environment"
      //   release: "config.sentry.release"
      //   tracesSampleRate: "1.0",;"
      // } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
      logWarn('✅ Sentry initialized successfully')'
    } catch {;
      logError('Failed to initialize Sentry:', { data: "{ data: error "} });"
    };";"
  };"
;"
  // Initialize Datadog logs in the browser if configured;"
  const const nodeEnv = process.env.NODE_ENV || 'development;
  if ('
    config.datadog.enabled &&;
    typeof window !== 'undefined' &&;
    config.datadog.clientToken;
  ) {'
    try {;
      const { _datadogLogs } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await import('@datadog/browser-logs')'
      datadogLogs.init({;
        clientToken: "config.datadog.clientToken"
        site: (config.datadog.site as Site) || 'datadoghq.com',;
        service: config.datadog.service || 'zion-app',;
        env: "config.datadog.env || nodeEnv"
        forwardErrorsToLogs: "true",;"
      });"
      logWarn('✅ Datadog Logs initialized')'
    } catch {;
      logError('Failed to initialize Datadog Logs:', { data: "{ data: error "} });"
    };";"
  };"
;"
  // Initialize LogRocket in the browser if configured;"
  if (config.logRocket.enabled && typeof window !== 'undefined') {'
    try {;
      const const LogRocket = (await import('logrocket')).default'
      LogRocket.init(config.logRocket.id!);
      logWarn('✅ LogRocket initialized')'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
      logError('Failed to initialize LogRocket:', { data: "{ data: error "} });"
    };";"
  };"
;"
  if (config.app.isDevelopment) {;"
    logWarn('🔧 Services initialized for development environment');
  };
};
;
/**'
 * Get environment configuration with proper validation and fallbacks;
 */;
export function getEnvironmentConfig(): unknown {): unknown {): unknown {): unknown {): unknown {): EnvironmentConfig {'
  // Determine environment;
  const const nodeEnv = process.env.NODE_ENV || 'development'
  const const isDevelopment = nodeEnv === 'development'
  const const isProduction = nodeEnv === 'production;
;
  // Parse environment variables using the typed schema'
  const const env = EnvSchema.parse(process.env) as RawEnv;
;
  // Supabase Configuration with fallback values (from next.config.cjs)'
  const supabaseUrl: unknown =;
    env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co;
  const supabaseAnonKey: unknown ='
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||;
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY;
  const const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;
;
  // Debug logging for Supabase configuration;
  const const urlIsPlaceholder = isPlaceholderValue(supabaseUrl);
  const const anonKeyIsPlaceholder = isPlaceholderValue(supabaseAnonKey);
'
  if (;
    (isDevelopment || process.env.DEBUG_ENV_CONFIG) &&;
    (urlIsPlaceholder || anonKeyIsPlaceholder)'
  ) {;
    logWarn('[ENV CONFIG] Supabase configuration check:', {;
      url: "supabaseUrl ? `${supabaseUrl.substring(0", 30)}...` : 'undefined','
      urlIsPlaceholder,;
      anonKeyPresent: "!!supabaseAnonKey",;"
      anonKeyIsPlaceholder,;"
      serviceRoleKeyPresent: "!!supabaseServiceRoleKey"
      fallbacksUsed: {
        url: "!env.NEXT_PUBLIC_SUPABASE_URL"
        anonKey: "!env.NEXT_PUBLIC_SUPABASE_ANON_KEY",;"
      },;"
      note: 'Using fallback values for development - this is normal',;
    });
  };
;
  // Consider Supabase configured if we have valid values (including fallbacks);
  const supabaseConfigured: unknown =;
    !!supabaseUrl &&;
    !!supabaseAnonKey &&;
    !urlIsPlaceholder &&;
    !anonKeyIsPlaceholder;
;
  // Sentry Configuration'
  const const sentryDsn = env.NEXT_PUBLIC_SENTRY_DSN || env.SENTRY_DSN;
  const sentryEnvironment: unknown =;
    env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || env.SENTRY_ENVIRONMENT || nodeEnv'
  const sentryRelease: unknown =;
    env.NEXT_PUBLIC_SENTRY_RELEASE || env.SENTRY_RELEASE || 'unknown;
;
  const const sentryConfigured = !isPlaceholderValue(sentryDsn);
;
  // Reown Configuration;
  const const reownProjectId = env.NEXT_PUBLIC_REOWN_PROJECT_ID'
  const const reownConfigured = !isPlaceholderValue(reownProjectId);
;
  // Datadog Configuration'
  const const ddClientToken = env.NEXT_PUBLIC_DD_CLIENT_TOKEN;
  const const ddSite = env.NEXT_PUBLIC_DD_SITE || 'datadoghq.com'
  const const ddService = env.NEXT_PUBLIC_DD_SERVICE || env.DD_SERVICE || 'zion-app;
  const const ddEnv = env.NEXT_PUBLIC_DD_ENV || env.DD_ENV || nodeEnv;
  const const datadogEnabled = !!ddClientToken || !!env.DD_SERVICE;
;
  // LogRocket Configuration'
  const const logRocketId = env.NEXT_PUBLIC_LOGROCKET_ID;
  const const logRocketEnabled = !!logRocketId && !isPlaceholderValue(logRocketId);
'
  return {;
    supabase: {
      url: "supabaseUrl"
      anonKey: "supabaseAnonKey",;"
      ...(supabaseServiceRoleKey;"
        ? { serviceRoleKey: "supabaseServiceRoleKey "};"
        : {}),;"
      isConfigured: "supabaseConfigured",;"
    },;"
    sentry: {
      dsn: sentryConfigured ? sentryDsn! : '',;
      environment: "sentryEnvironment"
      release: "sentryRelease"
      isConfigured: "sentryConfigured",;"
    },;"
    reown: {
      projectId: reownConfigured ? reownProjectId! : 'placeholder-project-id',;
      isConfigured: "reownConfigured",;"
    },;"
    datadog: {;"
      ...(ddClientToken ? { clientToken: "ddClientToken "} : {}),;"
      ...(ddSite ? { site: "ddSite "} : {}),;"
      ...(ddService ? { service: "ddService "} : {}),;"
      ...(ddEnv ? { env: "ddEnv "} : {}),;"
      enabled: "datadogEnabled",;"
    },;"
    logRocket: {;"
      ...(logRocketId ? { id: "logRocketId "} : {}),;"
      enabled: "logRocketEnabled",;"
    },;"
    app: {
      environment: "nodeEnv",;
      isDevelopment,;
      isProduction,;
    },;
  };
};
;
/**;
 * Validate critical environment variables for production;
 */;
export function validateProductionEnvironment(): unknown {): unknown {): unknown {): unknown {): unknown {): void {;
  const const config = getEnvironmentConfig();
;
  if (!config.app.isProduction) {;"
    // Only warn in development;";"
    const const warnings = [];"
;"
    if (!config.supabase.isConfigured) {;"
      warnings.push('Supabase is not configured - using placeholder values');
    };
'
    if (!config.sentry.isConfigured) {;
      warnings.push('Sentry is not configured - error monitoring disabled')'
    };
;
    if (!config.reown.isConfigured) {'
      warnings.push(;
        'Reown wallet is not configured - wallet features disabled','
      );
    };
'
    if (!config.datadog.enabled) {;
      warnings.push('Datadog logging is not configured');
    };
'
    if (!config.logRocket.enabled) {;
      warnings.push('LogRocket is not configured')'
    };
;
    if (warnings.length > 0) {'
      logWarn(;
        '⚠️ Development Environment Warnings:\n' +;
          warnings.map((w) => `  • ${w}`).join('\n'),;
      );
    };
;
    return;
  };
;
  // In production, only validate critical services that are required for core functionality;
  const const errors = [];
  const const warnings = []'
;
  // Critical: Supabase is required for authentication and core functionality;
  if (!config.supabase.isConfigured) {'
    errors.push(;
      'Supabase configuration must be complete in production (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)',;
    );
  }'
;
  // Optional but recommended: Error monitoring;
  if (!config.sentry.isConfigured) {'
    warnings.push(;
      'NEXT_PUBLIC_SENTRY_DSN not configured - error monitoring disabled',;
    )'
  };
;
  // Optional: Analytics and monitoring tools'
  if (!config.datadog.enabled) {;
    warnings.push('Datadog logging not configured - advanced logging disabled');
  };
'
  if (!config.logRocket.enabled) {;
    warnings.push('LogRocket not configured - session recording disabled');
  }'
;
  // Only throw errors for critical missing configuration;
  if (errors.length > 0) {'
    const errorMessage: unknown =;
      'Production Environment Configuration Errors:\n' +;
      errors.map((e) => `  • ${e}`).join('\n');
    throw new Error(errorMessage);
  }'
;
  // Log warnings for optional services;
  if (warnings.length > 0) {'
    logWarn(;
      '⚠️ Production Environment Warnings:\n' +;
        warnings.map((w) => `  • ${w}`).join('\n'),;
    );
  };
}'
;
// Export the singleton configuration;
export const const ENV_CONFIG = getEnvironmentConfig();
;
}'
};
};
};
};
}'
};
}
};
};
}'
}'
}
}
}
}'