#!/usr/bin/env node

/**
 * Environment Validation Script
 * Runs during build to ensure all required environment variables are properly configured
 * Prevents deployment with missing or placeholder values
 */

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// Define required environment variables and their validation rules
const REQUIRED_VARS = {
  // Critical for authentication
  'NEXT_PUBLIC_SUPABASE_URL': {
    required: true,
    validation: (value) => {
      if (!value) return 'Missing Supabase URL';
      if (isPlaceholder(value)) return 'Supabase URL appears to be a placeholder';
      if (!value.includes('.supabase.co')) return 'Invalid Supabase URL format';
      return null;
    },
    description: 'Supabase project URL from dashboard Settings > API'
  },
  'NEXT_PUBLIC_SUPABASE_ANON_KEY': {
    required: true,
    validation: (value) => {
      if (!value) return 'Missing Supabase anonymous key';
      if (isPlaceholder(value)) return 'Supabase anon key appears to be a placeholder';
      if (value.length < 100) return 'Supabase anon key appears to be invalid (too short)';
      return null;
    },
    description: 'Supabase anonymous key from dashboard Settings > API'
  },
  
  // Important for production
  'NEXT_PUBLIC_SENTRY_DSN': {
    required: process.env.NODE_ENV === 'production',
    validation: (value) => {
      if (!value && process.env.NODE_ENV === 'production') return 'Sentry DSN required for production';
      if (value && isPlaceholder(value)) return 'Sentry DSN appears to be a placeholder';
      return null;
    },
    description: 'Sentry DSN for error monitoring'
  }
};

// Define optional but recommended variables
const RECOMMENDED_VARS = {
  'SUPABASE_SERVICE_ROLE_KEY': 'Service role key for server-side operations',
  'NEXT_PUBLIC_REOWN_PROJECT_ID': 'Reown project ID for wallet functionality',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': 'Stripe key for payment processing'
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
    console.log(chalk.yellow('1. Go to your Netlify dashboard'));
    console.log(chalk.yellow('2. Navigate to Site settings > Environment variables'));
    console.log(chalk.yellow('3. Add the missing variables with actual values'));
    console.log(chalk.yellow('4. Redeploy your site\n'));
    
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
  
  if (suggestions.length > 0) {
    console.log(chalk.cyan('💡 RECOMMENDATIONS:'));
    console.log(chalk.cyan('===================\n'));
    
    suggestions.forEach(({ variable, description, current }) => {
      console.log(chalk.cyan(`• ${variable}`));
      console.log(chalk.gray(`  ${description}`));
      console.log(chalk.gray(`  Current: ${current}\n`));
    });
  }
  
  if (errors.length === 0) {
    console.log(chalk.green('✅ Environment validation passed!'));
    console.log(chalk.green('All critical environment variables are properly configured.\n'));
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

### 🔑 Supabase Configuration (CRITICAL)
- NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anonymous key
- SUPABASE_SERVICE_ROLE_KEY: Your Supabase service role key

Get these from: https://app.supabase.com/project/YOUR_PROJECT_ID/settings/api

### 📊 Error Monitoring (RECOMMENDED)
- NEXT_PUBLIC_SENTRY_DSN: Your Sentry DSN for error tracking

### 🔗 Optional Integrations
- NEXT_PUBLIC_REOWN_PROJECT_ID: For wallet functionality
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: For payments
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
  
  if (!result.isValid) {
    generateSetupGuide();
  }
}

module.exports = { validateEnvironment, isPlaceholder }; 