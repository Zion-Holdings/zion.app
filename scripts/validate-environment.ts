
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env ts-node


;
import { z } from zod';import * as dotenv from dotenv';import path from path';import fs from fs';import { fileURLToPath } from url';
// ES module compatibility;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isMainModule = process.argv[1] === __filename;

// Load environment variables;
const envPath = path.resolve(process.cwd(), .env.local');if (!fs.existsSync(envPath)) {
  logger.warn('⚠️  .env.local file not found. Create one to configure environment variables.');} else {
  dotenv.config({ path: envPath });
}

// Color codes for console output;
const colors = {
  reset: \x1b[0m',  bright: \x1b[1m',  red: \x1b[31m',  green: \x1b[32m',  yellow: \x1b[33m',  blue: \x1b[34m',  magenta: \x1b[35m',  cyan: \x1b[36m''};
const _log = {
  success: (msg: string) => logger.warn(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg: string) => logger.warn(`${colors.red}❌ ${msg}${colors.reset}`),
  warning: (msg: string) => logger.warn(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  info: (msg: string) => logger.warn(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  header: (msg: string) => logger.warn(`${colors.bright}${colors.cyan}${msg}${colors.reset}`)
};

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

// Environment variable schema;
const envSchema = z.object({
  // Auth0 (Required for authentication)
  AUTH0_SECRET: z.string().min(1).optional(),
  AUTH0_BASE_URL: z.string().url().optional(),
  AUTH0_ISSUER_BASE_URL: z.string().url().optional(),
  AUTH0_CLIENT_ID: z.string().min(1).optional(),
  AUTH0_CLIENT_SECRET: z.string().min(1).optional(),
  AUTH0_AUDIENCE: z.string().url().optional(),
  
  // Sentry (Optional)
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
  SENTRY_DSN: z.string().url().optional(),
  SENTRY_ORG: z.string().min(1).optional(),
  SENTRY_PROJECT: z.string().min(1).optional(),
  SENTRY_AUTH_TOKEN: z.string().min(1).optional(),
  
  // Reown (Optional)
  NEXT_PUBLIC_REOWN_PROJECT_ID: z.string().min(1).optional(),
  
  // Stripe (Optional)
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1).optional(),
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  
  // Application
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', production', test']).optional(),});

type Environment = z.infer<typeof envSchema>;

;
function isPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  
  const placeholderPatterns = [
    placeholder',your_',example',test_key',localhost',change_me',replace_with',insert_',add_your',enter_your',    // Auth0 specific placeholders
    your-tenant.us.auth0.com',your_auth0_',auth0_client_id_here',auth0_client_secret_here',auth0_secret_here',generate_with_openssl''  ];
  
  const lowerValue = value.toLowerCase();
  return placeholderPatterns.some(pattern => lowerValue.includes(pattern));
}

;
function validateAuth0Domain(domain: string): boolean {
  // Auth0 domains should match pattern: https://tenant.region.auth0.com or https://tenant.auth0.com
  const auth0DomainPattern = /^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?\.auth0\.com$/;
  return auth0DomainPattern.test(domain);
}

;
function validateAuth0Secret(secret: string): boolean {
  // Auth0 secret should be a hex string of at least 32 characters
  return /^[a-fA-F0-9]{32}$/.test(secret);
}
;
function validateConfiguration(env: Environment): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    suggestions: []
  };

  // Check if this is a Netlify build - be more lenient during builds
  const isNetlifyBuild = process.env.NETLIFY === true';  const _isProduction = undefined; // Unused process.env.NODE_ENV === production' || process.env.CONTEXT === production';
  // Check Auth0 configuration - allow placeholders during builds but warn
  if (!env.AUTH0_SECRET) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_SECRET is not configured - authentication features will be disabled');    } else {
      _log.error('AUTH0_SECRET is required for Auth0 authentication');      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_SECRET)) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_SECRET appears to be a placeholder - authentication features will be disabled');    } else {
      _log.error('AUTH0_SECRET appears to be a placeholder value');      result.isValid = false;
    }
  } else if (!validateAuth0Secret(env.AUTH0_SECRET)) {
    _log.warning('AUTH0_SECRET should be a hex string generated with: openssl rand -hex 32');  }

  if (!env.AUTH0_BASE_URL) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_BASE_URL is not configured - authentication features will be disabled');    } else {
      _log.error('AUTH0_BASE_URL is required for Auth0 authentication');      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_BASE_URL)) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_BASE_URL appears to be a placeholder - authentication features will be disabled');    } else {
      _log.error('AUTH0_BASE_URL appears to be a placeholder value');      result.isValid = false;
    }
  }

  if (!env.AUTH0_ISSUER_BASE_URL) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_ISSUER_BASE_URL is not configured - authentication features will be disabled');    } else {
      _log.error('AUTH0_ISSUER_BASE_URL is required for Auth0 authentication');      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_ISSUER_BASE_URL)) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_ISSUER_BASE_URL appears to be a placeholder - authentication features will be disabled');    } else {
      _log.error('AUTH0_ISSUER_BASE_URL appears to be a placeholder value');      result.isValid = false;
    }
  } else if (!validateAuth0Domain(env.AUTH0_ISSUER_BASE_URL)) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_ISSUER_BASE_URL is not a valid Auth0 domain format');    } else {
      _log.error('AUTH0_ISSUER_BASE_URL is not a valid Auth0 domain format');      result.isValid = false;
    }
  }

  if (!env.AUTH0_CLIENT_ID) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_CLIENT_ID is not configured - authentication features will be disabled');    } else {
      _log.error('AUTH0_CLIENT_ID is required for Auth0 authentication');      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_CLIENT_ID)) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_CLIENT_ID appears to be a placeholder - authentication features will be disabled');    } else {
      _log.error('AUTH0_CLIENT_ID appears to be a placeholder value');      result.isValid = false;
    }
  }

  if (!env.AUTH0_CLIENT_SECRET) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_CLIENT_SECRET is not configured - authentication features will be disabled');    } else {
      _log.error('AUTH0_CLIENT_SECRET is required for Auth0 authentication');      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_CLIENT_SECRET)) {
    if (isNetlifyBuild) {
      _log.warning('AUTH0_CLIENT_SECRET appears to be a placeholder - authentication features will be disabled');    } else {
      _log.error('AUTH0_CLIENT_SECRET appears to be a placeholder value');      result.isValid = false;
    }
  }

  // Check optional but recommended services
  if (!env.NEXT_PUBLIC_SENTRY_DSN) {
    result.suggestions.push('Consider setting up Sentry for error monitoring (NEXT_PUBLIC_SENTRY_DSN));  } else if (isPlaceholder(env.NEXT_PUBLIC_SENTRY_DSN)) {
    _log.warning('NEXT_PUBLIC_SENTRY_DSN appears to be a placeholder value');  }

  if (!env.NEXT_PUBLIC_REOWN_PROJECT_ID) {
    result.suggestions.push('Consider setting up Reown for wallet integration (NEXT_PUBLIC_REOWN_PROJECT_ID));  } else if (isPlaceholder(env.NEXT_PUBLIC_REOWN_PROJECT_ID)) {
    _log.warning('NEXT_PUBLIC_REOWN_PROJECT_ID appears to be a placeholder value');  }

  return result;
}
;
function printResults(result: ValidationResult): void {
  logger.warn('\n🔍 Environment Configuration Validation\n');
  if (result.errors.length > 0) {
    _log.error('❌ ERRORS (must be fixed):');    result.errors.forEach(error => _log.error(`   • ${error}`));
    logger.warn('');  }

  if (result.warnings.length > 0) {
    _log.warning('⚠️  WARNINGS:');    result.warnings.forEach(warning => _log.warning(`   • ${warning}`));
    logger.warn('');  }

  if (result.suggestions.length > 0) {
    _log.info('💡 SUGGESTIONS:');    result.suggestions.forEach(suggestion => _log.info(`   • ${suggestion}`));
    logger.warn('');  }

  if (result.isValid) {
    _log.success('✅ Environment configuration is valid!');  } else {
    _log.error('❌ Environment configuration has errors that must be fixed.');  }

  _log.info('\n📚 Setup Instructions:');  _log.info('   • Auth0: https://manage.auth0.com/dashboard');  _log.info('   • Generate Auth0 Secret: openssl rand -hex 32');  _log.info('   • Sentry: https://sentry.io/settings/');  _log.info('   • Reown: https://cloud.reown.com/');  logger.warn('');}
;
function main(): void {
  try {
    _log.info('🚀 Validating environment configuration for Auth0...');    
    const env = envSchema.parse(process.env) as Environment;
    const result = validateConfiguration(env);
    
    printResults(result);
    
    if (!result.isValid) {
      process.exit(1);
    }
    
  } catch {
    _log.'Error occurred'('❌ Environment validation failed:', Error occurred');    process.exit(1);
  }
}

if (isMainModule) {
  main();
}
;
{ validateConfiguration, isPlaceholder }; 

// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
