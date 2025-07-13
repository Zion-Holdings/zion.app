#!/usr/bin/env node

/**
 * Auth0 Environment Setup Script for Zion Tech Marketplace
 * Helps configure required environment variables for Auth0 authentication
 */

const fs = require('fs');
const path = require('path');
const _crypto = require('crypto');

const auth0EnvExample = `# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_APP_ENV=production

# Auth0 Configuration (Required)
# Get these from your Auth0 application dashboard: https://manage.auth0.com/dashboard
AUTH0_SECRET=your_auth0_secret_here_generate_with_openssl_rand_hex_32
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com
AUTH0_CLIENT_ID=your_auth0_client_id_here
AUTH0_CLIENT_SECRET=your_auth0_client_secret_here

# OPTIONAL: Auth0 API audience (if using Auth0 APIs)
AUTH0_AUDIENCE=https://your-api-identifier

# Wallet & Web3 Configuration
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key_here
NEXT_PUBLIC_ZION_TOKEN_CONTRACT_ADDRESS=your_token_contract_address_here
NEXT_PUBLIC_ZION_TOKEN_NETWORK_ID=1
NEXT_PUBLIC_SNAPSHOT_SPACE_ID=yourproject.eth
NEXT_PUBLIC_SNAPSHOT_HUB_URL=https://hub.snapshot.org

# Sentry Error Monitoring
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
NEXT_PUBLIC_SENTRY_ENVIRONMENT=development
NEXT_PUBLIC_SENTRY_RELEASE=1.0.0

# Stripe Payment Processing
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# Cloudinary Media Management
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here

# Email Configuration
NEXT_PUBLIC_SUPPORT_EMAIL=support@yourcompany.com
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id_here
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here
# NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here  # Optional: Uncomment and set real key to enable PostHog
# NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com  # Optional: Uncomment to enable PostHog

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_WALLET=true
NEXT_PUBLIC_ENABLE_PAYMENTS=true

# External APIs
OPENAI_API_KEY=your_openai_api_key_here
EXAMPLE_API_URL=https://api.example.com
`;

const auth0EnvLocal = `# Local Development Environment for Auth0
# Copy this file to .env.local and update with your actual values

NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Auth0 - Get these from your Auth0 application dashboard
# https://manage.auth0.com/dashboard/applications/YOUR_APP_ID/settings
AUTH0_SECRET=${_crypto.randomBytes(32).toString('hex')}
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com
AUTH0_CLIENT_ID=your_auth0_client_id_here
AUTH0_CLIENT_SECRET=your_auth0_client_secret_here

# OPTIONAL: Auth0 API audience
AUTH0_AUDIENCE=https://your-api-identifier

# Wallet Integration - Get from Reown/WalletConnect
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_ZION_TOKEN_CONTRACT_ADDRESS=your_token_contract_address_here
NEXT_PUBLIC_ZION_TOKEN_NETWORK_ID=1
NEXT_PUBLIC_SNAPSHOT_SPACE_ID=yourproject.eth
NEXT_PUBLIC_SNAPSHOT_HUB_URL=https://hub.snapshot.org

# Email
NEXT_PUBLIC_SUPPORT_EMAIL=support@localhost.com
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here
# NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here  # Optional: Uncomment and set real key to enable PostHog
# NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com  # Optional: Uncomment to enable PostHog

# Feature Flags for Development
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_WALLET=false
NEXT_PUBLIC_ENABLE_PAYMENTS=false

# Development APIs
EXAMPLE_API_URL=https://jsonplaceholder.typicode.com
`;

function generateAuth0Secret() {
  return _crypto.randomBytes(32).toString('hex');
}

function createEnvFiles() {
  const envExamplePath = path.join(process.cwd(), '.env.example');
  const envLocalPath = path.join(process.cwd(), '.env.local');

  console.warn('🔧 Creating Auth0 environment configuration files...\n');

  // Create .env.example
  if (!fs.existsSync(envExamplePath)) {
    fs.writeFileSync(envExamplePath, auth0EnvExample);
    console.warn('✅ Created .env.example');
  } else {
    console.warn('⚠️  .env.example already exists, skipping...');
  }

  // Create .env.local if it doesn't exist
  if (!fs.existsSync(envLocalPath)) {
    const localEnvWithSecret = auth0EnvLocal.replace(
      'AUTH0_SECRET=${_crypto.randomBytes(32).toString(\'hex\')}',
      `AUTH0_SECRET=${generateAuth0Secret()}`
    );
    fs.writeFileSync(envLocalPath, localEnvWithSecret);
    console.warn('✅ Created .env.local with generated AUTH0_SECRET');
  } else {
    console.warn('⚠️  .env.local already exists, skipping...');
    console.warn('   You may need to manually add Auth0 variables');
  }
}

function printInstructions() {
  console.warn('\n📚 Auth0 Setup Instructions:\n');
  
  console.warn('1. 🏗️  Create Auth0 Application:');
  console.warn('   • Go to https://manage.auth0.com/dashboard');
  console.warn('   • Create new application or use existing one');
  console.warn('   • Choose "Single Page Application" type');
  console.warn('   • Note down your Domain, Client ID, and Client Secret\n');
  
  console.warn('2. ⚙️  Configure Auth0 Application Settings:');
  console.warn('   • Allowed Callback URLs: http://localhost:3000/api/auth/callback');
  console.warn('   • Allowed Logout URLs: http://localhost:3000');
  console.warn('   • Allowed Web Origins: http://localhost:3000\n');
  
  console.warn('3. 🔐 Update .env.local with your Auth0 credentials:');
  console.warn('   • AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com');
  console.warn('   • AUTH0_CLIENT_ID=your_actual_client_id');
  console.warn('   • AUTH0_CLIENT_SECRET=your_actual_client_secret');
  console.warn('   • AUTH0_SECRET is already generated for you!\n');
  
  console.warn('4. 🌐 For Production (Netlify):');
  console.warn('   • Set all Auth0 variables in Netlify UI');
  console.warn('   • Update AUTH0_BASE_URL to your production domain');
  console.warn('   • Add production URLs to Auth0 application settings\n');
  
  console.warn('5. ✅ Validate Configuration:');
  console.warn('   • Run: npm run validate-env');
  console.warn('   • Start development: npm run dev');
  console.warn('   • Test authentication flow\n');
  
  console.warn('📖 Additional Resources:');
  console.warn('   • Auth0 Next.js Guide: https://auth0.com/docs/quickstart/webapp/nextjs');
  console.warn('   • Migration Guide: docs/AUTH0_MIGRATION_GUIDE.md');
  console.warn('   • Environment Setup: docs/ENVIRONMENT_SETUP.md\n');
}

function checkDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const hasAuth0 = '@auth0/nextjs-auth0' in dependencies;
    const hasSupabase = '@supabase/supabase-js' in dependencies;
    
    console.warn('\n🔍 Dependency Check:');
    
    if (hasAuth0) {
      console.warn('✅ @auth0/nextjs-auth0 is installed');
    } else {
      console.warn('❌ @auth0/nextjs-auth0 is NOT installed');
      console.warn('   Run: npm install @auth0/nextjs-auth0');
    }
    
    if (hasSupabase) {
      console.warn('⚠️  Supabase dependencies still installed');
      console.warn('   Consider removing: npm uninstall @supabase/supabase-js @supabase/auth-ui-react');
    } else {
      console.warn('✅ Supabase dependencies have been removed');
    }
    
    console.warn('');
  }
}

function main() {
  console.warn('🚀 Auth0 Environment Setup for Zion Tech Marketplace\n');
  
  try {
    createEnvFiles();
    checkDependencies();
    printInstructions();
    
    console.warn('🎉 Auth0 environment setup complete!');
    console.warn('   Next steps: Update .env.local with your Auth0 credentials and run npm run validate-env\n');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  generateAuth0Secret,
  createEnvFiles,
  printInstructions
}; 