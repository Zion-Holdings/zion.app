import * as Sentry from '@sentry/nextjs';

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
  app: {
    environment: string;
    isDevelopment: boolean;
    isProduction: boolean;
  };
}

/**
 * Check if a value is a placeholder or invalid
 */
function isPlaceholderValue(value?: string): boolean {
  if (!value) return true;
  
  const lowercaseValue = value.toLowerCase();
  
  // Specific placeholder patterns to detect
  const placeholderPatterns = [
    'your_',
    'placeholder',
    'dummy',
    'fallback',
    'example',
    'test-key',
    'mock',
    'https://placeholder.supabase.co',
    'https://example'
  ];
  
  // Check for placeholder patterns
  const hasPlaceholderPattern = placeholderPatterns.some(pattern => 
    lowercaseValue.includes(pattern.toLowerCase())
  );
  
  // Additional validation for Supabase URLs - they should be valid URLs with proper format
  if (lowercaseValue.includes('supabase.co')) {
    // Valid Supabase URL pattern: https://[project-id].supabase.co
    const supabaseUrlPattern = /^https:\/\/[a-zA-Z0-9-]+\.supabase\.co$/;
    const isValidSupabaseUrl = supabaseUrlPattern.test(value);
    
    // If it contains supabase.co but doesn't match valid pattern, it's likely a placeholder
    if (!isValidSupabaseUrl && !hasPlaceholderPattern) {
      return true;
    }
    
    // If it's a valid Supabase URL format, don't treat as placeholder
    if (isValidSupabaseUrl) {
      return false;
    }
  }
  
  return hasPlaceholderPattern;
}

/**
 * Get environment configuration with proper validation and fallbacks
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  // Determine environment
  const nodeEnv = process.env.NODE_ENV || 'development';
  const isDevelopment = nodeEnv === 'development';
  const isProduction = nodeEnv === 'production';

  // Supabase Configuration
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  // Debug logging for Supabase configuration
  const urlIsPlaceholder = isPlaceholderValue(supabaseUrl);
  const keyIsPlaceholder = isPlaceholderValue(supabaseAnonKey);
  
  if (isDevelopment || process.env.DEBUG_ENV_CONFIG) {
    console.log('[ENV CONFIG] Supabase configuration check:', {
      url: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'undefined',
      urlIsPlaceholder,
      keyPresent: !!supabaseAnonKey,
      keyIsPlaceholder
    });
  }
  
  const supabaseConfigured = !urlIsPlaceholder && !keyIsPlaceholder;

  // Sentry Configuration
  const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;
  const sentryEnvironment = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.SENTRY_ENVIRONMENT || nodeEnv;
  const sentryRelease = process.env.NEXT_PUBLIC_SENTRY_RELEASE || process.env.SENTRY_RELEASE || 'unknown';
  
  const sentryConfigured = !isPlaceholderValue(sentryDsn);

  // Reown Configuration
  const reownProjectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
  const reownConfigured = !isPlaceholderValue(reownProjectId);

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
    errors.push('NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be configured in production');
  }
  
  if (!config.sentry.isConfigured) {
    errors.push('NEXT_PUBLIC_SENTRY_DSN must be configured in production for error monitoring');
  }
  
  if (errors.length > 0) {
    const errorMessage = 'Production Environment Configuration Errors:\n' + errors.map(e => `  • ${e}`).join('\n');
    throw new Error(errorMessage);
  }
}

/**
 * Initialize services based on environment configuration
 */
export function initializeServices(): void {
  const config = getEnvironmentConfig();
  
  // Initialize Sentry if configured
  if (config.sentry.isConfigured) {
    console.log('🔍 Initializing Sentry with configured DSN...');
    
    // Sentry is already initialized by sentry.client.config.js and sentry.server.config.js
    // This just sets additional context
    Sentry.setTag('environmentConfigured', 'true');
    Sentry.setTag('supabaseConfigured', config.supabase.isConfigured.toString());
    Sentry.setTag('reownConfigured', config.reown.isConfigured.toString());
  } else {
    console.warn('⚠️ Sentry not configured - error monitoring disabled');
  }
  
  // Log configuration status
  console.log('🚀 Environment Configuration Status:');
  console.log(`  Environment: ${config.app.environment}`);
  console.log(`  Supabase: ${config.supabase.isConfigured ? '✅ Configured' : '⚠️ Using fallbacks'}`);
  console.log(`  Sentry: ${config.sentry.isConfigured ? '✅ Configured' : '⚠️ Disabled'}`);
  console.log(`  Reown Wallet: ${config.reown.isConfigured ? '✅ Configured' : '⚠️ Using fallbacks'}`);
}

/**
 * Export environment config instance for use throughout the app
 */
export const ENV_CONFIG = getEnvironmentConfig(); 