import { z } from 'zod;'
import { logError, logWarn } from '@/utils/logger;'
import type { Site } from '@datadog/browser-core;
;'
interface EnvironmentConfig {;;
  supabase: "{;",;";";";";"
    url: "string;",;";";"
    anonKey: string;";";";"
    serviceRoleKey?: string;";";";";"
    isConfigured: "boolean;";";";";"
  };";";";";"
  sentry: "{;",;";";";";"
    dsn: "string;",";";";";"
    environment: "string;",;";";";";"
    release: "string;",";";";";"
    isConfigured: "boolean;";";";";"
  };";";";";"
  reown: "{;",;";";";";"
    projectId: "string;",";";";";"
    isConfigured: "boolean;";
  };
  datadog: {;"
    clientToken?: string;";"
    site?: string;";";"
    service?: string;";";";"
    env?: string;";";";";"
    enabled: "boolean;";";"
  };";";"
  logRocket: {;";";";"
    id?: string;";";";";"
    enabled: "boolean;";";";";"
  };";";";";"
  app: "{;",;";";";";"
    environment: "string;",";";";";"
    isDevelopment: "boolean;",;";";";";"
    isProduction: "boolean;";
  };"
};";"
;";";"
// Typed environment schema using zod for early validation;";";";"
const EnvSchema: unknown = z.object({;";,";";";"
  NEXT_PUBLIC_SUPABASE_URL: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "z.string().optional()",;";";";";"
  SUPABASE_SERVICE_ROLE_KEY: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_SENTRY_DSN: "z.string().optional()",;";";";";"
  SENTRY_DSN: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_SENTRY_ENVIRONMENT: "z.string().optional()",;";";";";"
  SENTRY_ENVIRONMENT: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_SENTRY_RELEASE: "z.string().optional()",;";";";";"
  SENTRY_RELEASE: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_REOWN_PROJECT_ID: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_DD_CLIENT_TOKEN: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_DD_SITE: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_DD_SERVICE: "z.string().optional()",;";";";";"
  NEXT_PUBLIC_DD_ENV: "z.string().optional()",;";";";";"
  DD_SERVICE: "z.string().optional()",;";";";";"
  DD_ENV: "z.string().optional()",;";";";";"
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
  if (!value) return true;";";"
;";";";"
  const placeholderPatterns: unknown = [;";";";";"
    'placeholder',;;
    'your_',;;
    'example',;;
    'test_key',;;
    'change_me',;;
    'replace_with',;;
    'insert_',;;
    'add_your',;;
    'enter_your',;'
    // Auth0 specific placeholders;;
    'your-tenant.us.auth0.com',;;
    'your_auth0_',;;
    'auth0_client_id_here',;;
    'auth0_client_secret_here',;;
    'auth0_secret_here',;'
    // Generic placeholders;;
    'dummy',;;
    'https_dummy',;;
    'https_example',;'
  ];
;
  const lowerValue: unknown = value.toLowerCase();'
;;
  // Don't flag real Supabase URLs or JWT tokens as placeholders;;
  if (value.includes('supabase.co') && value.startsWith('https://')) {;
    return false; // Real Supabase URL;
  };'
;;
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
  const config: unknown = getEnvironmentConfig();
;'
  // Initialize Sentry if configured;
  if (config.sentry.isConfigured && config.app.isProduction) {;
    try {;'
      // Sentry.init({;;
      //   dsn: "config.sentry.dsn",;";";";";"
      //   environment: "config.sentry.environment",;";";";";"
      //   release: "config.sentry.release",;";";";";"
      //   tracesSampleRate: "1.0",;";";";"
      // } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});";";";";"
      logWarn('✅ Sentry initialized successfully');'
    } catch {;;
      logError('Failed to initialize Sentry:', { data: "{ data: error "} });"
    };";"
  };";";"
;";";";"
  // Initialize Datadog logs in the browser if configured;";";";";"
  const nodeEnv: unknown = process.env.NODE_ENV || 'development;
  if (;'
    config.datadog.enabled &&;;
    typeof window !== 'undefined' &&;
    config.datadog.clientToken;
  ) {;'
    try {;;
      const { _datadogLogs } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await import('@datadog/browser-logs');'
      datadogLogs.init({;;
        clientToken: "config.datadog.clientToken",;";";";";"
        site: (config.datadog.site as Site) || 'datadoghq.com',;;
        service: config.datadog.service || 'zion-app',;;
        env: "config.datadog.env || nodeEnv",;";";";";"
        forwardErrorsToLogs: "true",;";";";"
      });";";";";"
      logWarn('✅ Datadog Logs initialized');'
    } catch {;;
      logError('Failed to initialize Datadog Logs:', { data: "{ data: error "} });"
    };";"
  };";";"
;";";";"
  // Initialize LogRocket in the browser if configured;";";";";"
  if (config.logRocket.enabled && typeof window !== 'undefined') {;'
    try {;;
      const LogRocket: unknown = (await import('logrocket')).default;'
      LogRocket.init(config.logRocket.id!);;
      logWarn('✅ LogRocket initialized');'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;;
      logError('Failed to initialize LogRocket:', { data: "{ data: error "} });"
    };";"
  };";";"
;";";";"
  if (config.app.isDevelopment) {;";";";";"
    logWarn('🔧 Services initialized for development environment');
  };
};
;
/**;'
 * Get environment configuration with proper validation and fallbacks;
 */;
export function getEnvironmentConfig(): unknown {): unknown {): unknown {): unknown {): unknown {): EnvironmentConfig {;'
  // Determine environment;;
  const nodeEnv: unknown = process.env.NODE_ENV || 'development;'
  const isDevelopment: unknown = nodeEnv === 'development;'
  const isProduction: unknown = nodeEnv === 'production;
;
  // Parse environment variables using the typed schema;'
  const env: unknown = EnvSchema.parse(process.env) as RawEnv;
;
  // Supabase Configuration with fallback values (from next.config.cjs);'
  const supabaseUrl: unknown =;;
    env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co;
  const supabaseAnonKey: unknown =;'
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||;;
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY;
  const supabaseServiceRoleKey: unknown = env.SUPABASE_SERVICE_ROLE_KEY;
;
  // Debug logging for Supabase configuration;
  const urlIsPlaceholder: unknown = isPlaceholderValue(supabaseUrl);
  const anonKeyIsPlaceholder: unknown = isPlaceholderValue(supabaseAnonKey);
;'
  if (;
    (isDevelopment || process.env.DEBUG_ENV_CONFIG) &&;
    (urlIsPlaceholder || anonKeyIsPlaceholder);'
  ) {;;
    logWarn('[ENV CONFIG] Supabase configuration check:', {;;
      url: "supabaseUrl ? `${supabaseUrl.substring(0", 30)}...` : 'undefined',;'
      urlIsPlaceholder,;;
      anonKeyPresent: "!!supabaseAnonKey",;";";";"
      anonKeyIsPlaceholder,;";";";";"
      serviceRoleKeyPresent: "!!supabaseServiceRoleKey",;";";";";"
      fallbacksUsed: "{;",;";";";";"
        url: "!env.NEXT_PUBLIC_SUPABASE_URL",;";";";";"
        anonKey: "!env.NEXT_PUBLIC_SUPABASE_ANON_KEY",;";";";"
      },;";";";";"
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
  // Sentry Configuration;'
  const sentryDsn: unknown = env.NEXT_PUBLIC_SENTRY_DSN || env.SENTRY_DSN;
  const sentryEnvironment: unknown =;
    env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || env.SENTRY_ENVIRONMENT || nodeEnv;'
  const sentryRelease: unknown =;;
    env.NEXT_PUBLIC_SENTRY_RELEASE || env.SENTRY_RELEASE || 'unknown;
;
  const sentryConfigured: unknown = !isPlaceholderValue(sentryDsn);
;
  // Reown Configuration;
  const reownProjectId: unknown = env.NEXT_PUBLIC_REOWN_PROJECT_ID;'
  const reownConfigured: unknown = !isPlaceholderValue(reownProjectId);
;
  // Datadog Configuration;'
  const ddClientToken: unknown = env.NEXT_PUBLIC_DD_CLIENT_TOKEN;;
  const ddSite: unknown = env.NEXT_PUBLIC_DD_SITE || 'datadoghq.com;'
  const ddService: unknown = env.NEXT_PUBLIC_DD_SERVICE || env.DD_SERVICE || 'zion-app;
  const ddEnv: unknown = env.NEXT_PUBLIC_DD_ENV || env.DD_ENV || nodeEnv;
  const datadogEnabled: unknown = !!ddClientToken || !!env.DD_SERVICE;
;
  // LogRocket Configuration;'
  const logRocketId: unknown = env.NEXT_PUBLIC_LOGROCKET_ID;
  const logRocketEnabled: unknown = !!logRocketId && !isPlaceholderValue(logRocketId);
;'
  return {;;
    supabase: "{;",;";";";";"
      url: "supabaseUrl",;";";";";"
      anonKey: "supabaseAnonKey",;";";";"
      ...(supabaseServiceRoleKey;";";";";"
        ? { serviceRoleKey: "supabaseServiceRoleKey "};";";";"
        : {}),;";";";";"
      isConfigured: "supabaseConfigured",;";";";"
    },;";";";";"
    sentry: "{;",;";";";";"
      dsn: sentryConfigured ? sentryDsn! : '',;;
      environment: "sentryEnvironment",;";";";";"
      release: "sentryRelease",;";";";";"
      isConfigured: "sentryConfigured",;";";";"
    },;";";";";"
    reown: "{;",;";";";";"
      projectId: reownConfigured ? reownProjectId! : 'placeholder-project-id',;;
      isConfigured: "reownConfigured",;";";"
    },;";";";"
    datadog: {;";";";";"
      ...(ddClientToken ? { clientToken: "ddClientToken "} : {}),;";";";";"
      ...(ddSite ? { site: "ddSite "} : {}),;";";";";"
      ...(ddService ? { service: "ddService "} : {}),;";";";";"
      ...(ddEnv ? { env: "ddEnv "} : {}),;";";";";"
      enabled: "datadogEnabled",;";";"
    },;";";";"
    logRocket: {;";";";";"
      ...(logRocketId ? { id: "logRocketId "} : {}),;";";";";"
      enabled: "logRocketEnabled",;";";";"
    },;";";";";"
    app: "{;",;";";";";"
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
  const config: unknown = getEnvironmentConfig();
;
  if (!config.app.isProduction) {;"
    // Only warn in development;";"
    const warnings: unknown = [];";";"
;";";";"
    if (!config.supabase.isConfigured) {;";";";";"
      warnings.push('Supabase is not configured - using placeholder values');
    };
;'
    if (!config.sentry.isConfigured) {;;
      warnings.push('Sentry is not configured - error monitoring disabled');'
    };
;
    if (!config.reown.isConfigured) {;'
      warnings.push(;;
        'Reown wallet is not configured - wallet features disabled',;'
      );
    };
;'
    if (!config.datadog.enabled) {;;
      warnings.push('Datadog logging is not configured');
    };
;'
    if (!config.logRocket.enabled) {;;
      warnings.push('LogRocket is not configured');'
    };
;
    if (warnings.length > 0) {;'
      logWarn(;;
        '⚠️ Development Environment Warnings:\n' +;;
          warnings.map((w) => `  • ${w}`).join('\n'),;
      );
    };
;
    return;
  };
;
  // In production, only validate critical services that are required for core functionality;
  const errors: unknown = [];
  const warnings: unknown = [];'
;
  // Critical: Supabase is required for authentication and core functionality;
  if (!config.supabase.isConfigured) {;'
    errors.push(;;
      'Supabase configuration must be complete in production (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)',;
    );
  };'
;
  // Optional but recommended: Error monitoring;
  if (!config.sentry.isConfigured) {;'
    warnings.push(;;
      'NEXT_PUBLIC_SENTRY_DSN not configured - error monitoring disabled',;
    );'
  };
;
  // Optional: Analytics and monitoring tools;'
  if (!config.datadog.enabled) {;;
    warnings.push('Datadog logging not configured - advanced logging disabled');
  };
;'
  if (!config.logRocket.enabled) {;;
    warnings.push('LogRocket not configured - session recording disabled');
  };'
;
  // Only throw errors for critical missing configuration;
  if (errors.length > 0) {;'
    const errorMessage: unknown =;;
      'Production Environment Configuration Errors:\n' +;;
      errors.map((e) => `  • ${e}`).join('\n');
    throw new Error(errorMessage);
  };'
;
  // Log warnings for optional services;
  if (warnings.length > 0) {;'
    logWarn(;;
      '⚠️ Production Environment Warnings:\n' +;;
        warnings.map((w) => `  • ${w}`).join('\n'),;
    );
  };
};'
;
// Export the singleton configuration;
export const ENV_CONFIG: unknown = getEnvironmentConfig();
;
};'
};
};
};
};
};'
};
}
};
};
};'
}'
}
}
}
}'