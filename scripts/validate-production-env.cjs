
/**
 * Production Environment Validator
 * Validates all required environment variables for production deployment
 */

// Load environment variables from .env.local if it exists
const fs = require('fs')
const _path = require('path')
function loadEnvFile(envPath) {
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8')
const lines = envContent.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=');
          process.env[key] = value;
        }
      }
    }
    // console.warn(`✅ Loaded environment from: ${envPath}`);
  }
}

// Load from .env.local for development
loadEnvFile('.env.local')
const requiredEnvVars = {
  critical: ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'],
  authentication: [
    'AUTH0_SECRET',
    'AUTH0_BASE_URL',
    'AUTH0_ISSUER_BASE_URL',
    'AUTH0_CLIENT_ID',
    'AUTH0_CLIENT_SECRET',
  ],
  recommended: ['NEXT_PUBLIC_SENTRY_DSN', 'SENTRY_ORG', 'SENTRY_PROJECT'],
}
function validateEnvironment() {
  // console.warn('🔍 Validating Production Environment Variables\n');

  let hasErrors = false;
  let warnings = 0;

  // Check critical variables
  // console.warn('🔴 CRITICAL (Required for basic functionality):');
  requiredEnvVars.critical.forEach((envVar) => {
    if (!process.env[envVar]) {
      // console.error(`  ❌ ${envVar} - MISSING (CRITICAL)`);
      hasErrors = true;
    } else {
      // console.warn(`  ✅ ${envVar} - Configured`);
    }
  });

  // Check authentication variables
  // console.warn('\n🟡 AUTHENTICATION (Required for user login):');
  requiredEnvVars.authentication.forEach((envVar) => {
    if (!process.env[envVar]) {
      // console.error(`  ❌ ${envVar} - MISSING (AUTH REQUIRED)`);
      hasErrors = true;
    } else {
      // console.warn(`  ✅ ${envVar} - Configured`);
    }
  });

  // Check recommended variables
  // console.warn('\n🟢 RECOMMENDED (For optimal production experience):');
  requiredEnvVars.recommended.forEach((envVar) => {
    if (!process.env[envVar]) {
      // console.warn(`  ⚠️ ${envVar} - Missing (Recommended)`);
      warnings++;
    } else {
      // console.warn(`  ✅ ${envVar} - Configured`);
    }
  });

  // console.warn('\n' + '='.repeat(50));
  if (hasErrors) {
    // console.error('🚫 ENVIRONMENT VALIDATION FAILED');
    // console.error('Please configure the missing CRITICAL and AUTHENTICATION variables.');
    process.exit(1);
  } else if (warnings > 0) {
    // console.warn(`⚠️ ENVIRONMENT VALIDATION PASSED WITH ${warnings} WARNINGS`);
    // console.warn('Consider configuring recommended variables for optimal experience.');
  } else {
    // console.warn('✅ ENVIRONMENT VALIDATION PASSED');
    // console.warn('All required and recommended variables are configured!');
  }
}

if (require.main === module) {
  validateEnvironment();
}

module.exports = { validateEnvironment };
