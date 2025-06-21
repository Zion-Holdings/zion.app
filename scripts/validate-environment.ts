#!/usr/bin/env tsx

/**
 * Environment Configuration Validator
 * 
 * This script validates that all required environment variables are properly
 * configured for Supabase authentication and other critical services.
 * 
 * Usage:
 *   npm run validate-env
 *   npx tsx scripts/validate-environment.ts
 */

import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

const log = {
  success: (msg: string) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg: string) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  warning: (msg: string) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  info: (msg: string) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  header: (msg: string) => console.log(`${colors.bright}${colors.cyan}${msg}${colors.reset}`),
};

// Environment variable schema
const envSchema = z.object({
  // Supabase (Required)
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  
  // Authentication Service
  INTERNAL_AUTH_SERVICE_URL: z.string().url().optional(),
  
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
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
});

type Environment = z.infer<typeof envSchema>;

// Placeholder detection patterns
const placeholderPatterns = [
  /^your[_-]/i,
  /placeholder/i,
  /example/i,
  /dummy/i,
  /test[_-]?key/i,
  /mock/i,
  /^https:\/\/placeholder/i,
  /^https:\/\/example/i,
  /your[_-].*[_-]here$/i,
];

function isPlaceholder(value: string): boolean {
  return placeholderPatterns.some(pattern => pattern.test(value));
}

function validateSupabaseUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.endsWith('.supabase.co') && 
           urlObj.protocol === 'https:' &&
           !isPlaceholder(url);
  } catch {
    return false;
  }
}

function validateEnvironmentFile(filePath: string): Environment | null {
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const env: Record<string, string> = {};
    
    content.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
        }
      }
    });
    
    return envSchema.parse(env);
  } catch (error) {
    log.error(`Failed to parse ${filePath}: ${error}`);
    return null;
  }
}

function validateCurrentEnvironment(): Environment {
  return envSchema.parse(process.env);
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

function validateConfiguration(env: Environment): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    suggestions: []
  };

  // Check Supabase configuration
  if (!env.NEXT_PUBLIC_SUPABASE_URL) {
    result.errors.push('NEXT_PUBLIC_SUPABASE_URL is required for Supabase authentication');
    result.isValid = false;
  } else if (isPlaceholder(env.NEXT_PUBLIC_SUPABASE_URL)) {
    result.errors.push('NEXT_PUBLIC_SUPABASE_URL appears to be a placeholder value');
    result.isValid = false;
  } else if (!validateSupabaseUrl(env.NEXT_PUBLIC_SUPABASE_URL)) {
    result.errors.push('NEXT_PUBLIC_SUPABASE_URL is not a valid Supabase URL');
    result.isValid = false;
  }

  if (!env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    result.errors.push('NEXT_PUBLIC_SUPABASE_ANON_KEY is required for Supabase authentication');
    result.isValid = false;
  } else if (isPlaceholder(env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) {
    result.errors.push('NEXT_PUBLIC_SUPABASE_ANON_KEY appears to be a placeholder value');
    result.isValid = false;
  }

  // Check authentication service
  if (!env.INTERNAL_AUTH_SERVICE_URL) {
    result.warnings.push('INTERNAL_AUTH_SERVICE_URL is not set - user registration may not work');
  } else if (isPlaceholder(env.INTERNAL_AUTH_SERVICE_URL)) {
    result.warnings.push('INTERNAL_AUTH_SERVICE_URL appears to be a placeholder value');
  }

  // Check optional but recommended services
  if (!env.NEXT_PUBLIC_SENTRY_DSN) {
    result.suggestions.push('Consider setting up Sentry for error monitoring (NEXT_PUBLIC_SENTRY_DSN)');
  } else if (isPlaceholder(env.NEXT_PUBLIC_SENTRY_DSN)) {
    result.warnings.push('NEXT_PUBLIC_SENTRY_DSN appears to be a placeholder value');
  }

  if (!env.SUPABASE_SERVICE_ROLE_KEY) {
    result.suggestions.push('SUPABASE_SERVICE_ROLE_KEY is recommended for server-side operations');
  } else if (isPlaceholder(env.SUPABASE_SERVICE_ROLE_KEY)) {
    result.warnings.push('SUPABASE_SERVICE_ROLE_KEY appears to be a placeholder value');
  }

  // Environment-specific checks
  const isProduction = env.NODE_ENV === 'production';
  const isDevelopment = env.NODE_ENV === 'development' || !env.NODE_ENV;

  if (isProduction) {
    if (!env.NEXT_PUBLIC_APP_URL) {
      result.warnings.push('NEXT_PUBLIC_APP_URL should be set in production');
    }
    
    if (!env.NEXT_PUBLIC_SENTRY_DSN) {
      result.warnings.push('Sentry should be configured in production for error monitoring');
    }
  }

  return result;
}

function printValidationResults(results: ValidationResult, environmentName: string): void {
  log.header(`\n📋 ${environmentName} Configuration Validation`);
  
  if (results.isValid) {
    log.success('All required environment variables are properly configured!');
  } else {
    log.error('Configuration validation failed!');
  }

  if (results.errors.length > 0) {
    console.log(`\n${colors.red}${colors.bright}Errors:${colors.reset}`);
    results.errors.forEach(error => log.error(error));
  }

  if (results.warnings.length > 0) {
    console.log(`\n${colors.yellow}${colors.bright}Warnings:${colors.reset}`);
    results.warnings.forEach(warning => log.warning(warning));
  }

  if (results.suggestions.length > 0) {
    console.log(`\n${colors.blue}${colors.bright}Suggestions:${colors.reset}`);
    results.suggestions.forEach(suggestion => log.info(suggestion));
  }
}

function printSetupInstructions(): void {
  log.header('\n📚 Setup Instructions');
  
  console.log(`
${colors.bright}For Local Development:${colors.reset}
1. Create a .env.local file in the project root
2. Copy the template from the documentation
3. Set actual values for Supabase variables
4. Run this validator again: npm run validate-env

${colors.bright}For Netlify Production:${colors.reset}
1. Go to Netlify Site Settings → Environment Variables
2. Set all required variables with production values
3. Deploy and verify authentication works

${colors.bright}Required Supabase Setup:${colors.reset}
1. Create a project at https://app.supabase.com
2. Get URL and anon key from Settings → API
3. Configure authentication providers as needed
4. Set up database schema for user profiles

${colors.bright}Documentation:${colors.reset}
- Detailed guide: docs/SUPABASE_AUTHENTICATION_SETUP.md
- Netlify setup: docs/NETLIFY_DEPLOYMENT_GUIDE.md
`);
}

function main(): void {
  log.header('🔧 Zion Platform Environment Configuration Validator');
  
  const currentEnv = validateCurrentEnvironment();
  const currentResults = validateConfiguration(currentEnv);
  
  printValidationResults(currentResults, 'Current Environment');
  
  // Check for local environment file
  const localEnvPath = path.join(process.cwd(), '.env.local');
  const localEnv = validateEnvironmentFile(localEnvPath);
  
  if (localEnv) {
    const localResults = validateConfiguration(localEnv);
    printValidationResults(localResults, 'Local Environment (.env.local)');
  } else if (process.env.NODE_ENV !== 'production') {
    log.warning('\nNo .env.local file found for local development');
  }
  
  // Overall status
  const hasErrors = currentResults.errors.length > 0;
  const hasWarnings = currentResults.warnings.length > 0;
  
  console.log('\n' + '='.repeat(60));
  
  if (hasErrors) {
    log.error('❌ Configuration validation FAILED');
    log.error('   Authentication and core features may not work properly');
    printSetupInstructions();
    process.exit(1);
  } else if (hasWarnings) {
    log.warning('⚠️  Configuration validation PASSED with warnings');
    log.warning('   Some features may not work optimally');
  } else {
    log.success('✅ Configuration validation PASSED');
    log.success('   All systems should work properly');
  }
  
  console.log('='.repeat(60));
}

// Run the validator
if (require.main === module) {
  main();
}

export { validateConfiguration, validateEnvironmentFile, isPlaceholder }; 