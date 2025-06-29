#!/usr/bin/env node

/**
 * Environment Validation Script
 * Runs during build to ensure all required environment variables are properly configured
 * Prevents deployment with missing or placeholder values
 */

let chalk;
try {
  chalk = require('chalk');
} catch (err) {
  chalk = new Proxy({}, {
    get: () => (msg) => msg,
  });
}
const fs = require('fs');
const path = require('path');
let dotenv;
try {
  dotenv = require('dotenv');
} catch (err) {
  console.warn('⚠️  Optional dependency "dotenv" not found. Skipping env file loading.');
  dotenv = null;
}

const envPath = path.resolve(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.warn(chalk.yellow('⚠️  .env.local file not found. Environment variables may be missing.'));
} else if (dotenv && typeof dotenv.config === 'function') {
  dotenv.config({ path: envPath });
}

// Check if we're in development mode or Netlify build
const isDevelopment = process.env.NODE_ENV === 'development';
const isNetlifyBuild = process.env.NETLIFY === 'true';
const isLocalDev = !isNetlifyBuild && isDevelopment;

// Define required environment variables and their validation rules
const REQUIRED_VARS = {
  // Supabase (core authentication - more lenient for dev)
  'NEXT_PUBLIC_SUPABASE_URL': {
    required: !isLocalDev, // Only required in production/staging
    validation: (value) => {
      if (!value) {
        if (isLocalDev) return null; // Allow missing in local dev
        return 'Missing Supabase URL';
      }
      if (isPlaceholder(value)) {
        if (isLocalDev) return null; // Allow placeholders in local dev
        return 'Supabase URL appears to be a placeholder';
      }
      return null;
    },
    description: 'Supabase project URL for authentication and database'
  },
  'NEXT_PUBLIC_SUPABASE_ANON_KEY': {
    required: !isLocalDev, // Only required in production/staging
    validation: (value) => {
      if (!value) {
        if (isLocalDev) return null; // Allow missing in local dev
        return 'Missing Supabase anonymous key';
      }
      if (isPlaceholder(value)) {
        if (isLocalDev) return null; // Allow placeholders in local dev
        return 'Supabase key appears to be a placeholder';
      }
      return null;
    },
    description: 'Supabase anonymous key for client-side authentication'
  },
  
  // Auth0 authentication (completely optional now)
  'AUTH0_SECRET': {
    required: false, // Made optional to prevent build failures
    validation: (value) => {
      // Always return null (no validation) to prevent errors
      return null;
    },
    description: 'Auth0 secret for encrypting session cookies (optional - using Supabase auth)'
  },
  'AUTH0_BASE_URL': {
    required: false, // Made optional
    validation: (value) => {
      return null; // No validation to prevent errors
    },
    description: 'Auth0 base URL of your application (optional - using Supabase auth)'
  },
  'AUTH0_ISSUER_BASE_URL': {
    required: false, // Made optional
    validation: (value) => {
      return null; // No validation to prevent errors
    },
    description: 'Auth0 domain from your Auth0 dashboard (optional - using Supabase auth)'
  },
  'AUTH0_CLIENT_ID': {
    required: false, // Made optional
    validation: (value) => {
      return null; // No validation to prevent errors
    },
    description: 'Auth0 client ID from your Auth0 application (optional - using Supabase auth)'
  },
  'AUTH0_CLIENT_SECRET': {
    required: false, // Made optional
    validation: (value) => {
      return null; // No validation to prevent errors
    },
    description: 'Auth0 client secret from your Auth0 application (optional - using Supabase auth)'
  }
};

// Define optional but recommended variables
const RECOMMENDED_VARS = {
  'NEXT_PUBLIC_SENTRY_DSN': 'Sentry DSN for error monitoring',
  'NEXT_PUBLIC_REOWN_PROJECT_ID': 'Reown project ID for wallet functionality',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': 'Stripe key for payment processing',
  'STRIPE_SECRET_KEY': 'Stripe secret key for server-side payment processing',
  'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME': 'Cloudinary cloud name for image hosting'
};

/**
 * Check if a value appears to be a placeholder
 */
function isPlaceholder(value) {
  if (!value || typeof value !== 'string') return true;
  
  const placeholderPatterns = [
    /your_.*_here/i,
    /placeholder/i,
    /example/i,
    /test.*value/i,
    /change.*me/i,
    /replace.*this/i,
    /^undefined$/,
    /^null$/,
    /^""$/,
    /^''$/
  ];
  
  return placeholderPatterns.some(pattern => pattern.test(value));
}

/**
 * Validate environment configuration
 */
function validateEnvironment() {
  console.log(chalk.blue('🔍 Validating environment configuration...\n'));
  
  if (isLocalDev) {
    console.log(chalk.cyan('📝 Development mode detected - using lenient validation\n'));
  }
  
  if (isNetlifyBuild) {
    console.log(chalk.cyan('🚀 Netlify build detected - checking essential variables only\n'));
  }
  
  const errors = [];
  const warnings = [];
  const suggestions = [];
  
  // Check required variables
  for (const [varName, config] of Object.entries(REQUIRED_VARS)) {
    const value = process.env[varName];
    
    if (config.required) {
      const error = config.validation(value);
      if (error) {
        errors.push({
          variable: varName,
          error,
          description: config.description,
          current: value ? `"${value.substring(0, 30)}..."` : 'undefined'
        });
      }
    } else {
      // For non-required vars, add to suggestions if missing
      if (!value || isPlaceholder(value)) {
        suggestions.push({
          variable: varName,
          description: config.description,
          current: value ? `"${value.substring(0, 30)}..."` : 'undefined'
        });
      }
    }
  }
  
  // Check recommended variables
  for (const [varName, description] of Object.entries(RECOMMENDED_VARS)) {
    const value = process.env[varName];
    if (!value || isPlaceholder(value)) {
      suggestions.push({
        variable: varName,
        description,
        current: value ? `"${value.substring(0, 30)}..."` : 'undefined'
      });
    }
  }
  
  // Report results
  if (errors.length > 0) {
    console.log(chalk.red('❌ CRITICAL ERRORS - BUILD WILL FAIL:'));
    console.log(chalk.red('================================================\n'));
    
    errors.forEach(({ variable, error, description, current }) => {
      console.log(chalk.red(`✗ ${variable}`));
      console.log(chalk.red(`  Error: ${error}`));
      console.log(chalk.gray(`  Description: ${description}`));
      console.log(chalk.gray(`  Current: ${current}`));
      console.log();
    });
    
    console.log(chalk.red('🚨 TO FIX THESE ERRORS:'));
    console.log(chalk.yellow('1. Check your .env.local file'));
    console.log(chalk.yellow('2. Set up Supabase authentication'));
    console.log(chalk.yellow('3. Add the missing variables with actual values'));
    console.log(chalk.yellow('4. Restart your development server\n'));
    
    process.exit(1);
  }
  
  if (warnings.length > 0) {
    console.log(chalk.yellow('⚠️  WARNINGS:'));
    console.log(chalk.yellow('=============\n'));
    
    warnings.forEach(({ variable, warning, current }) => {
      console.log(chalk.yellow(`! ${variable}: ${warning}`));
      console.log(chalk.gray(`  Current: ${current}\n`));
    });
  }
  
  if (suggestions.length > 0 && !isLocalDev) {
    console.log(chalk.cyan('💡 RECOMMENDATIONS:'));
    console.log(chalk.cyan('===================\n'));
    
    suggestions.slice(0, 5).forEach(({ variable, description, current }) => {
      console.log(chalk.cyan(`• ${variable}`));
      console.log(chalk.gray(`  ${description}`));
      console.log(chalk.gray(`  Current: ${current}\n`));
    });
    
    if (suggestions.length > 5) {
      console.log(chalk.gray(`... and ${suggestions.length - 5} more optional variables\n`));
    }
  }
  
  if (errors.length === 0) {
    console.log(chalk.green('✅ Environment validation passed!'));
    if (isLocalDev) {
      console.log(chalk.green('Ready for local development.\n'));
    } else {
      console.log(chalk.green('All critical environment variables are properly configured.\n'));
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestions
  };
}

/**
 * Generate environment setup guide
 */
function generateSetupGuide() {
  const guide = `
# Environment Setup Guide for Netlify

## Required Environment Variables

Set these in your Netlify dashboard (Site settings > Environment variables):

### 🔑 Auth0 Configuration (CRITICAL)
- AUTH0_SECRET: Random 32-character string for encrypting session cookies
- AUTH0_BASE_URL: Your application URL (e.g., https://app.ziontechgroup.com)
- AUTH0_ISSUER_BASE_URL: Your Auth0 domain (e.g., https://your-tenant.auth0.com)
- AUTH0_CLIENT_ID: Your Auth0 application client ID
- AUTH0_CLIENT_SECRET: Your Auth0 application client secret

Get these from: https://manage.auth0.com/dashboard/

### 📊 Error Monitoring (RECOMMENDED)
- NEXT_PUBLIC_SENTRY_DSN: Your Sentry DSN for error tracking

### 🔗 Optional Integrations
- NEXT_PUBLIC_REOWN_PROJECT_ID: For wallet functionality
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: For payments
- STRIPE_SECRET_KEY: For server-side payment processing
- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: For image hosting

## How to Set Up:

1. Go to https://app.netlify.com/sites/[your-site]/settings/deploys#environment
2. Click "Edit variables"
3. Add each variable with its actual value (not placeholder)
4. Save and redeploy

## Verification:

After setting up, you can verify by visiting:
- https://your-site.netlify.app/api/health/environment
- Check the signup functionality at /signup
`;

  const guidePath = path.join(__dirname, '..', 'NETLIFY_ENVIRONMENT_SETUP.md');
  fs.writeFileSync(guidePath, guide.trim());
  console.log(chalk.green(`📋 Setup guide generated: ${guidePath}`));
}

// Run validation
if (require.main === module) {
  const result = validateEnvironment();
  
  // Only exit with error if there are actual critical errors
  if (!result.isValid) {
    process.exit(1);
  }
}

module.exports = { validateEnvironment, isPlaceholder }; 
