// Temporary script to replicate scripts/check-env.ts functionality

// process is already a global in Node.js - no need to require it

// Simplified logger functions - using proper structured logging
function logInfo(message, ...args) {
  // eslint-disable-next-line no-console
  console.log(`[INFO] ${message}`, ...args);
}

function logWarn(message, ...args) {
  console.warn(`[WARN] ${message}`, ...args);
}

// Replicated isPlaceholderValue function from src/utils/environmentConfig.ts
function isPlaceholderValue(value) {
  if (!value) return true;

  const placeholderPatterns = [
    'placeholder', 'your_', 'example', 'test_key', 'change_me',
    'replace_with', 'insert_', 'add_your', 'enter_your',
    'your-tenant.us.auth0.com', 'your_auth0_', 'auth0_client_id_here',
    'auth0_client_secret_here', 'auth0_secret_here', 'dummy',
    'https_dummy', 'https_example'
  ];

  const lowerValue = value.toLowerCase();

  if (value.includes('supabase.co') && value.startsWith('https://')) {
    return false; // Real Supabase URL
  }

  if (value.startsWith('eyJ') && value.length > 100) {
    return false; // Real JWT token
  }

  return placeholderPatterns.some(pattern => lowerValue.includes(pattern));
}

// Simplified getEnvironmentConfig function
function getEnvironmentConfig() {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const isDevelopment = nodeEnv === 'development';
  const isProduction = nodeEnv === 'production';

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gnwtggeptzkqnduuthto.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3RnZ2VwdHprcW5kdXV0aHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTQyMjcsImV4cCI6MjA2MDk5MDIyN30.mIyYJWh3S1FLCmjwoJ7FNHz0XLRiUHBd3r9we-E4DIY';

  const urlIsPlaceholder = isPlaceholderValue(supabaseUrl);
  const anonKeyIsPlaceholder = isPlaceholderValue(supabaseAnonKey);
  const supabaseConfigured = !!supabaseUrl && !!supabaseAnonKey && !urlIsPlaceholder && !anonKeyIsPlaceholder;

  const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;
  const sentryConfigured = !isPlaceholderValue(sentryDsn);

  const reownProjectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
  const reownConfigured = !isPlaceholderValue(reownProjectId);

  const ddClientToken = process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN;
  const datadogEnabled = !!ddClientToken || !!process.env.DD_SERVICE;

  const logRocketId = process.env.NEXT_PUBLIC_LOGROCKET_ID;
  const logRocketEnabled = !!logRocketId && !isPlaceholderValue(logRocketId);

  return {
    supabase: {
      isConfigured: supabaseConfigured,
      url: supabaseUrl, // For logging purposes
      anonKey: supabaseAnonKey // For logging purposes
    },
    sentry: { isConfigured: sentryConfigured },
    reown: { isConfigured: reownConfigured },
    datadog: { enabled: datadogEnabled },
    logRocket: { enabled: logRocketEnabled },
    app: {
      isDevelopment,
      isProduction,
      environment: nodeEnv
    }
  };
}

// Replicated validateProductionEnvironment function
function validateProductionEnvironment() {
  const config = getEnvironmentConfig();

  // For debugging the script itself
  // logInfo('Current NODE_ENV:', process.env.NODE_ENV);
  // logInfo('Config App Env:', config.app.environment);
  // logInfo('Is Production:', config.app.isProduction);
  // logInfo('Supabase configured:', config.supabase.isConfigured);
  // logInfo('Supabase URL placeholder:', isPlaceholderValue(config.supabase.url));
  // logInfo('Supabase Key placeholder:', isPlaceholderValue(config.supabase.anonKey));


  if (!config.app.isProduction) {
    const warnings = [];
    if (!config.supabase.isConfigured) warnings.push('Supabase is not configured - using placeholder values');
    if (!config.sentry.isConfigured) warnings.push('Sentry is not configured - error monitoring disabled');
    if (!config.reown.isConfigured) warnings.push('Reown wallet is not configured - wallet features disabled');
    if (!config.datadog.enabled) warnings.push('Datadog logging is not configured');
    if (!config.logRocket.enabled) warnings.push('LogRocket is not configured');

    if (warnings.length > 0) {
      logWarn('⚠️ Development Environment Warnings:\n' + warnings.map(w => `  • ${w}`).join('\n'));
    } else {
      logInfo('✅ Development environment configuration looks good (based on available fallbacks).');
    }
    return;
  }

  const errors = [];
  const warnings = [];

  if (!config.supabase.isConfigured) {
    errors.push('Supabase configuration must be complete in production (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)');
  }
  if (!config.sentry.isConfigured) {
    warnings.push('NEXT_PUBLIC_SENTRY_DSN not configured - error monitoring disabled');
  }
  if (!config.datadog.enabled) {
    warnings.push('Datadog logging not configured - advanced logging disabled');
  }
  if (!config.logRocket.enabled) {
    warnings.push('LogRocket not configured - session recording disabled');
  }

  if (errors.length > 0) {
    const errorMessage = 'Production Environment Configuration Errors:\n' + errors.map(e => `  • ${e}`).join('\n');
    // Mimicking the original script's throw
    const error = new Error(errorMessage);
    logWarn('⚠️ Environment validation warning:'); // As per original script's catch block
    logWarn(error.message); // As per original script's catch block
    // Not actually throwing to prevent script halt, just logging
    // throw error;
  } else {
     logInfo('✅ Production environment configuration has no critical errors.');
  }

  if (warnings.length > 0 && errors.length === 0) { // only show warnings if no critical errors
    logWarn('⚠️ Production Environment Warnings:\n' + warnings.map(w => `  • ${w}`).join('\n'));
  }
}

// Run the validation
try {
  validateProductionEnvironment();
  // The original script has a success message here, but validateProductionEnvironment already logs sufficiently.
  // For consistency with the original script's output structure:
  if (process.env.NODE_ENV !== 'production') { // Assuming default to dev if not set
     // logInfo('✅ Environment configuration looks good.'); // This might be redundant
  }
} catch (err) {
  // This catch is if validateProductionEnvironment itself throws an unhandled error,
  // not for the configuration errors it's designed to report.
  // The original `scripts/check-env.ts` has a top-level catch.
  logWarn('⚠️ An unexpected error occurred during environment validation:');
  logWarn(err.message);
}
