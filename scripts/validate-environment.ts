#!/usr/bin/env ts-node

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
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isMainModule = process.argv[1] === __filename;

// Load environment variables
const envPath = path.resolve(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.warn('⚠️  .env.local file not found. Create one to configure environment variables.');
} else {
  dotenv.config({ path: envPath });
}

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

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

// Environment variable schema
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
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
});

type Environment = z.infer<typeof envSchema>;

/**
 * Check if a value is a placeholder
 */
function isPlaceholder(value: string | undefined): boolean {
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
    'auth0_secret_here',
    'generate_with_openssl'
  ];
  
  const lowerValue = value.toLowerCase();
  return placeholderPatterns.some(pattern => lowerValue.includes(pattern));
}

/**
 * Validate Auth0 domain format
 */
function validateAuth0Domain(domain: string): boolean {
  // Auth0 domains should match pattern: https://tenant.region.auth0.com or https://tenant.auth0.com
  const auth0DomainPattern = /^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?\.auth0\.com$/;
  return auth0DomainPattern.test(domain);
}

/**
 * Validate Auth0 secret format (should be hex string)
 */
function validateAuth0Secret(secret: string): boolean {
  // Auth0 secret should be a hex string of at least 32 characters
  return /^[a-fA-F0-9]{32,}$/.test(secret);
}

function validateConfiguration(env: Environment): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    suggestions: []
  };

  // Check if this is a Netlify build - be more lenient during builds
  const isNetlifyBuild = process.env.NETLIFY === 'true';
  const isProduction = process.env.NODE_ENV === 'production' || process.env.CONTEXT === 'production';

  // Check Auth0 configuration - allow placeholders during builds but warn
  if (!env.AUTH0_SECRET) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_SECRET is not configured - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_SECRET is required for Auth0 authentication');
      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_SECRET)) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_SECRET appears to be a placeholder - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_SECRET appears to be a placeholder value');
      result.isValid = false;
    }
  } else if (!validateAuth0Secret(env.AUTH0_SECRET)) {
    result.warnings.push('AUTH0_SECRET should be a hex string generated with: openssl rand -hex 32');
  }

  if (!env.AUTH0_BASE_URL) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_BASE_URL is not configured - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_BASE_URL is required for Auth0 authentication');
      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_BASE_URL)) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_BASE_URL appears to be a placeholder - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_BASE_URL appears to be a placeholder value');
      result.isValid = false;
    }
  }

  if (!env.AUTH0_ISSUER_BASE_URL) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_ISSUER_BASE_URL is not configured - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_ISSUER_BASE_URL is required for Auth0 authentication');
      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_ISSUER_BASE_URL)) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_ISSUER_BASE_URL appears to be a placeholder - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_ISSUER_BASE_URL appears to be a placeholder value');
      result.isValid = false;
    }
  } else if (!validateAuth0Domain(env.AUTH0_ISSUER_BASE_URL)) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_ISSUER_BASE_URL is not a valid Auth0 domain format');
    } else {
      result.errors.push('AUTH0_ISSUER_BASE_URL is not a valid Auth0 domain format');
      result.isValid = false;
    }
  }

  if (!env.AUTH0_CLIENT_ID) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_CLIENT_ID is not configured - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_CLIENT_ID is required for Auth0 authentication');
      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_CLIENT_ID)) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_CLIENT_ID appears to be a placeholder - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_CLIENT_ID appears to be a placeholder value');
      result.isValid = false;
    }
  }

  if (!env.AUTH0_CLIENT_SECRET) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_CLIENT_SECRET is not configured - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_CLIENT_SECRET is required for Auth0 authentication');
      result.isValid = false;
    }
  } else if (isPlaceholder(env.AUTH0_CLIENT_SECRET)) {
    if (isNetlifyBuild) {
      result.warnings.push('AUTH0_CLIENT_SECRET appears to be a placeholder - authentication features will be disabled');
    } else {
      result.errors.push('AUTH0_CLIENT_SECRET appears to be a placeholder value');
      result.isValid = false;
    }
  }

  // Check optional but recommended services
  if (!env.NEXT_PUBLIC_SENTRY_DSN) {
    result.suggestions.push('Consider setting up Sentry for error monitoring (NEXT_PUBLIC_SENTRY_DSN)');
  } else if (isPlaceholder(env.NEXT_PUBLIC_SENTRY_DSN)) {
    result.warnings.push('NEXT_PUBLIC_SENTRY_DSN appears to be a placeholder value');
  }

  if (!env.NEXT_PUBLIC_REOWN_PROJECT_ID) {
    result.suggestions.push('Consider setting up Reown for wallet integration (NEXT_PUBLIC_REOWN_PROJECT_ID)');
  } else if (isPlaceholder(env.NEXT_PUBLIC_REOWN_PROJECT_ID)) {
    result.warnings.push('NEXT_PUBLIC_REOWN_PROJECT_ID appears to be a placeholder value');
  }

  return result;
}

function printResults(result: ValidationResult): void {
  console.log('\n🔍 Environment Configuration Validation\n');

  if (result.errors.length > 0) {
    console.log('❌ ERRORS (must be fixed):');
    result.errors.forEach(error => console.log(`   • ${error}`));
    console.log('');
  }

  if (result.warnings.length > 0) {
    console.log('⚠️  WARNINGS:');
    result.warnings.forEach(warning => console.log(`   • ${warning}`));
    console.log('');
  }

  if (result.suggestions.length > 0) {
    console.log('💡 SUGGESTIONS:');
    result.suggestions.forEach(suggestion => console.log(`   • ${suggestion}`));
    console.log('');
  }

  if (result.isValid) {
    console.log('✅ Environment configuration is valid!');
  } else {
    console.log('❌ Environment configuration has errors that must be fixed.');
  }

  console.log('\n📚 Setup Instructions:');
  console.log('   • Auth0: https://manage.auth0.com/dashboard');
  console.log('   • Generate Auth0 Secret: openssl rand -hex 32');
  console.log('   • Sentry: https://sentry.io/settings/');
  console.log('   • Reown: https://cloud.reown.com/');
  console.log('');
}

function main(): void {
  try {
    console.log('🚀 Validating environment configuration for Auth0...');
    
    const env = envSchema.parse(process.env) as Environment;
    const result = validateConfiguration(env);
    
    printResults(result);
    
    if (!result.isValid) {
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Environment validation failed:', error);
    process.exit(1);
  }
}

if (isMainModule) {
  main();
}

export { validateConfiguration, isPlaceholder }; 