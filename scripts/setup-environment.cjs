#!/usr/bin/env node

/**
 * Environment Setup Script for Zion AI Marketplace
 * Helps configure required environment variables
 */

const fs = require('fs');
const path = require('path');

const envExample = `# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_APP_ENV=production

# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# OAuth Provider Credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

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
NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY=your_stripe_test_publishable_key_here
NEXT_PUBLIC_STRIPE_TEST_KEY=
STRIPE_TEST_SECRET_KEY=your_stripe_test_secret_key_here

# Cloudinary Media Management
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here

# Email Configuration
NEXT_PUBLIC_SUPPORT_EMAIL=support@yourcompany.com
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id_here
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_WALLET=true
NEXT_PUBLIC_ENABLE_PAYMENTS=true

# Database (if using external DB)
DATABASE_URL=your_database_url_here

# Redis (for caching)
REDIS_URL=your_redis_url_here

# External APIs
OPENAI_API_KEY=your_openai_api_key_here
EXAMPLE_API_URL=https://api.example.com
`;

const envLocal = `# Local Development Environment
# Copy this file to .env.local and update with your actual values

NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Supabase - Get these from your Supabase project dashboard
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# NextAuth - Generate a secret: openssl rand -base64 32
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000

# OAuth Provider Credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Wallet Integration - Get from WalletConnect/Reown
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_ZION_TOKEN_CONTRACT_ADDRESS=your_token_contract_address_here
NEXT_PUBLIC_ZION_TOKEN_NETWORK_ID=1
NEXT_PUBLIC_SNAPSHOT_SPACE_ID=yourproject.eth
NEXT_PUBLIC_SNAPSHOT_HUB_URL=https://hub.snapshot.org

# Email
NEXT_PUBLIC_SUPPORT_EMAIL=support@localhost.com
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here

# Feature Flags for Development
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_WALLET=false
NEXT_PUBLIC_ENABLE_PAYMENTS=false

# Development APIs
EXAMPLE_API_URL=https://jsonplaceholder.typicode.com
`;

function createEnvFiles() {
  const rootDir = path.resolve(__dirname, '..');
  
  // Create .env.example
  fs.writeFileSync(path.join(rootDir, '.env.example'), envExample);
  console.log('✅ Created .env.example');
  
  // Create .env.local.example
  fs.writeFileSync(path.join(rootDir, '.env.local.example'), envLocal);
  console.log('✅ Created .env.local.example');
  
  // Check if .env.local exists
  const envLocalPath = path.join(rootDir, '.env.local');
  if (!fs.existsSync(envLocalPath)) {
    fs.writeFileSync(envLocalPath, envLocal);
    console.log('✅ Created .env.local with development defaults');
  } else {
    console.log('ℹ️  .env.local already exists, skipping');
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Edit .env.local with your actual environment values');
  console.log('2. For Supabase: Visit https://supabase.com/dashboard');
  console.log('3. For Wallet: Visit https://cloud.walletconnect.com');
  console.log('4. Generate NextAuth secret: openssl rand -base64 32');
}

if (require.main === module) {
  createEnvFiles();
}

module.exports = { createEnvFiles }; 