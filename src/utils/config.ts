<<<<<<< HEAD
import { logInfo, logWarn } from '@/utils/productionLogger;;
/**'
 * Centralized configuration utility for environment variables;
 */;
'
export interface AppConfig {
  app: {
    url: string,"
    name: "string"
    environment: string,"
    isDevelopment: "boolean"
    isProduction: "boolean"
  }"
  supabase: {
    url: string | undefined;,"
    anonKey: "string | undefined;"
    isConfigured: "boolean;"
  };"
  wallet: {
    projectId: string;,"
    isConfigured: "boolean;"
  };"
  sentry: {
    dsn: string | undefined;,"
    environment: "string;"
    release: string;,"
    isConfigured: "boolean;"
  };"
  performance: {
    monitoringEnabled: "boolean;";
  };
};"
/**;";"
 * Get application configuration;"
 */;"
export function getAppConfig(): unknown {): unknown {): unknown {): unknown {): unknown {): AppConfig {;"
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isProduction = process.env.NODE_ENV === 'production;
  // Wallet configuration with proper fallbacks'
  const walletProjectId: unknown =;
    process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || 'your_project_id_here;
  const isWalletConfigured = Boolean(;
    walletProjectId &&'
      ![;
        'your_project_id_here',;
        'YOUR_PROJECT_ID',;
        'dummy',;
        'fallback','
      ].includes(walletProjectId),;
  );
'
  return {;
    app: {
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',;
      name: process.env.NEXT_PUBLIC_APP_NAME || 'Zion AI Marketplace',;
      environment: process.env.NODE_ENV || 'development',;
      isDevelopment,;
      isProduction,'
    },;
    supabase: {
      url: "process.env.NEXT_PUBLIC_SUPABASE_URL"
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,;
      isConfigured: !!(;"
        process.env.NEXT_PUBLIC_SUPABASE_URL &&;";"
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;"
      ),;"
    },;"
    wallet: {
      projectId: "walletProjectId"
      isConfigured: isWalletConfigured,;"
    },;"
    sentry: {
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,;"
      environment:;"
        process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ||;"
        process.env.NODE_ENV ||;"
        'development',;
      release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || '1.0.0',;
      isConfigured: !!process.env.NEXT_PUBLIC_SENTRY_DSN,;"
    },;"
    performance: {;,;"
      monitoringEnabled:;"
        process.env.PERFORMANCE_MONITORING === 'true' || isDevelopment,;
    },;
  };
};
'
/**;
 * Validate required environment variables;
 */'
export function validateEnvironment(): unknown {): unknown {): unknown {): unknown {): unknown {): {;
  isValid: "boolean;"
  missingVars: "string[];";
} {;
  const config = getAppConfig();"
  const missingVars: unknown string[] = [];";"
;"
  // Only validate critical variables in production;"
  if (config.app.isProduction) {;"
    if (!config.app.url || config.app.url === 'http://localhost:3000') {;
      missingVars.push('NEXT_PUBLIC_APP_URL');
    };
'
    if (!config.supabase.isConfigured) {;
      if (!config.supabase.url) missingVars.push('NEXT_PUBLIC_SUPABASE_URL')'
      if (!config.supabase.anonKey);
        missingVars.push('NEXT_PUBLIC_SUPABASE_ANON_KEY')'
    };
  };
'
  return {;
    isValid: missingVars.length === 0,;
    missingVars,;
  };
};"
/**;";"
 * Log configuration status (only in development);"
 */;"
export function logConfigurationStatus(): unknown {): unknown {): unknown {): unknown {): unknown {): void {;"
  if (process.env.NODE_ENV !== 'development') return'
;
  const config = getAppConfig();
  const validation = validateEnvironment()'
;
  logInfo('🔧 Configuration Status:');
  logInfo(`  Environment: "${config.app.environment"}`);"
  logInfo(`  App URL: "${config.app.url"}`);"
  logInfo(;"
    `  Supabase: ${config.supabase.isConfigured ? '✅' : '⚠️'} ${config.supabase.isConfigured ? 'Configured' : 'Using fallbacks'}`,;
  )'
  logInfo(;
    `  Wallet: ${config.wallet.isConfigured ? '✅' : '⚠️'} ${config.wallet.isConfigured ? 'Configured' : 'Using placeholder'}`,;
  )'
  logInfo(;
    `  Sentry: ${config.sentry.isConfigured ? '✅' : '⚠️'} ${config.sentry.isConfigured ? 'Configured' : 'Disabled'}`,;
  );
'
  if (!validation.isValid) {;
    logWarn('⚠️ Missing environment variables:', {;
      data: "{ data: validation.missingVars "},;"
    });";"
  };"
};"
";"
};";"
};"
}";
};"
};";"
}";
=======
import { logInfo, logWarn } from '@/utils/productionLogger;'
;
/**;''
 * Centralized configuration utility for environment variables;
 */;
;'';
export interface AppConfig {;;
  app: "{;",;";";";";""
    url: "string;",";";";";""
    name: "string;",;";";";";""
    environment: "string;",";";";";""
    isDevelopment: "boolean;",;";";";";""
    isProduction: "boolean;";";";";""
  };";";";";""
  supabase: "{;",;";";";";""
    url: "string | undefined;",";";";";""
    anonKey: "string | undefined;",;";";";";""
    isConfigured: "boolean;";";";";""
  };";";";";""
  wallet: "{;",;";";";";""
    projectId: "string;",";";";";""
    isConfigured: "boolean;";";";";""
  };";";";";""
  sentry: "{;",;";";";";""
    dsn: "string | undefined;",";";";";""
    environment: "string;",;";";";";""
    release: "string;",";";";";""
    isConfigured: "boolean;";";";";""
  };";";";";""
  performance: "{;",;";";";";""
    monitoringEnabled: "boolean;";"
  };
};
;""
/**;";""
 * Get application configuration;";";""
 */;";";";"";
export function getAppConfig(): unknown {): unknown {): unknown {): unknown {): unknown {): AppConfig {;";";";";""
  const isDevelopment: unknown = process.env.NODE_ENV === 'development;''
  const isProduction: unknown = process.env.NODE_ENV === 'production;'
;
  // Wallet configuration with proper fallbacks;''
  const walletProjectId: unknown =;;
    process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || 'your_project_id_here;'
  const isWalletConfigured: unknown = Boolean(;
    walletProjectId &&;''
      ![;;
        'your_project_id_here',;;'
        'YOUR_PROJECT_ID',;;'
        'dummy',;;'
        'fallback',;''
      ].includes(walletProjectId),;
  );
;''
  return {;;
    app: "{;",;";";";";""
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',;;'
      name: process.env.NEXT_PUBLIC_APP_NAME || 'Zion AI Marketplace',;;'
      environment: process.env.NODE_ENV || 'development',;'
      isDevelopment,;
      isProduction,;''
    },;;
    supabase: "{;",;";";";";""
      url: "process.env.NEXT_PUBLIC_SUPABASE_URL",;";";";";""
      anonKey: "process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY",;"
      isConfigured: !!(;""
        process.env.NEXT_PUBLIC_SUPABASE_URL &&;";""
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;";";""
      ),;";";";""
    },;";";";";""
    wallet: "{;",;";";";";""
      projectId: "walletProjectId",;";";";";""
      isConfigured: "isWalletConfigured",;";";";""
    },;";";";";""
    sentry: "{;",;";";";";""
      dsn: "process.env.NEXT_PUBLIC_SENTRY_DSN",;";""
      environment:;";";""
        process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ||;";";";""
        process.env.NODE_ENV ||;";";";";""
        'development',;;'
      release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || '1.0.0',;;'
      isConfigured: "!!process.env.NEXT_PUBLIC_SENTRY_DSN",;";";";""
    },;";";";";""
    performance: "{;",;";";";""
      monitoringEnabled:;";";";";""
        process.env.PERFORMANCE_MONITORING === 'true' || isDevelopment,;'
    },;
  };
};
;''
/**;
 * Validate required environment variables;
 */;'';
export function validateEnvironment(): unknown {): unknown {): unknown {): unknown {): unknown {): {;;
  isValid: "boolean;",;";";";";""
  missingVars: "string[];";"
} {;
  const config: unknown = getAppConfig();""
  const missingVars: unknown string[] = [];";""
;";";""
  // Only validate critical variables in production;";";";""
  if (config.app.isProduction) {;";";";";""
    if (!config.app.url || config.app.url === 'http://localhost:3000') {;;'
      missingVars.push('NEXT_PUBLIC_APP_URL');'
    };
;''
    if (!config.supabase.isConfigured) {;;
      if (!config.supabase.url) missingVars.push('NEXT_PUBLIC_SUPABASE_URL');''
      if (!config.supabase.anonKey);;
        missingVars.push('NEXT_PUBLIC_SUPABASE_ANON_KEY');''
    };
  };
;''
  return {;;
    isValid: "missingVars.length === 0",;"
    missingVars,;
  };
};
;""
/**;";""
 * Log configuration status (only in development);";";""
 */;";";";"";
export function logConfigurationStatus(): unknown {): unknown {): unknown {): unknown {): unknown {): void {;";";";";""
  if (process.env.NODE_ENV !== 'development') return;''
;
  const config: unknown = getAppConfig();
  const validation: unknown = validateEnvironment();''
;;
  logInfo(' Configuration Status:');;'
  logInfo(`  Environment: "${config.app.environment"}`);";";";";""
  logInfo(`  App URL: "${config.app.url"}`);";";";""
  logInfo(;";";";";""
    `  Supabase: ${config.supabase.isConfigured ? '' : ''} ${config.supabase.isConfigured ? 'Configured' : 'Using fallbacks'}`,;'
  );''
  logInfo(;;
    `  Wallet: ${config.wallet.isConfigured ? '' : ''} ${config.wallet.isConfigured ? 'Configured' : 'Using placeholder'}`,;'
  );''
  logInfo(;;
    `  Sentry: ${config.sentry.isConfigured ? '' : ''} ${config.sentry.isConfigured ? 'Configured' : 'Disabled'}`,;'
  );
;''
  if (!validation.isValid) {;;
    logWarn(' Missing environment variables:', {;;'
      data: "{ data: validation.missingVars "},;""
    });";""
  };";";""
};";";";""
";""
};";""
};";";""
}";"
};""
};";""
}";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
};""
}""
}
}
}""