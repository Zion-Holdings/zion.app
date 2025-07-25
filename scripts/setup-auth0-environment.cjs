
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
      #!/usr/bin/env node



const fs = require('fs')
const path = require('path')
const _crypto = require('crypto')
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
`
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
`
function generateAuth0Secret() {
  return _crypto.randomBytes(32).toString('hex');
}

function createEnvFiles() {
  const envExamplePath = path.join(process.cwd(), '.env.example')
const envLocalPath = path.join(process.cwd(), '.env.local');

  logger.warn('🔧 Creating Auth0 environment configuration files...\n');

  // Create .env.example
  if (!fs.existsSync(envExamplePath)) {
    fs.writeFileSync(envExamplePath, auth0EnvExample);
    logger.warn('✅ Created .env.example');
  } else {
    logger.warn('⚠️  .env.example already exists, skipping...');
  }

  // Create .env.local if it doesn't exist
  if (!fs.existsSync(envLocalPath)) {
    const localEnvWithSecret = auth0EnvLocal.replace(
      "AUTH0_SECRET=${_crypto.randomBytes(32).toString('hex')}",
      `AUTH0_SECRET=${generateAuth0Secret()}`,
    );
    fs.writeFileSync(envLocalPath, localEnvWithSecret);
    logger.warn('✅ Created .env.local with generated AUTH0_SECRET');
  } else {
    logger.warn('⚠️  .env.local already exists, skipping...');
    logger.warn('   You may need to manually add Auth0 variables');
  }
}

function printInstructions() {
  logger.warn('\n📚 Auth0 Setup Instructions:\n');

  logger.warn('1. 🏗️  Create Auth0 Application:');
  logger.warn('   • Go to https://manage.auth0.com/dashboard');
  logger.warn('   • Create new application or use existing one');
  logger.warn('   • Choose "Single Page Application" type');
  logger.warn('   • Note down your Domain, Client ID, and Client Secret\n');

  logger.warn('2. ⚙️  Configure Auth0 Application Settings:');
  logger.warn(
    '   • Allowed Callback URLs: http://localhost:3000/api/auth/callback',
  );
  logger.warn('   • Allowed Logout URLs: http://localhost:3000');
  logger.warn('   • Allowed Web Origins: http://localhost:3000\n');

  logger.warn('3. 🔐 Update .env.local with your Auth0 credentials:');
  logger.warn('   • AUTH0_ISSUER_BASE_URL=https://your-tenant.us.auth0.com');
  logger.warn('   • AUTH0_CLIENT_ID='your_actual_client_id');
  logger.warn('   • AUTH0_CLIENT_SECRET='your_actual_client_secret');
  logger.warn('   • AUTH0_SECRET is already generated for you!\n');

  logger.warn('4. 🌐 For Production (Netlify):');
  logger.warn('   • Set all Auth0 variables in Netlify UI');
  logger.warn('   • Update AUTH0_BASE_URL to your production domain');
  logger.warn('   • Add production URLs to Auth0 application settings\n');

  logger.warn('5. ✅ Validate Configuration:');
  logger.warn('   • Run: npm run validate-env');
  logger.warn('   • Start development: npm run dev');
  logger.warn('   • Test authentication flow\n');

  logger.warn('📖 Additional Resources:');
  logger.warn(
    '   • Auth0 Next.js Guide: https://auth0.com/docs/quickstart/webapp/nextjs',
  );
  logger.warn('   • Migration Guide: docs/AUTH0_MIGRATION_GUIDE.md');
  logger.warn('   • Environment Setup: docs/ENVIRONMENT_SETUP.md\n');
}

function checkDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }
const hasAuth0 = '@auth0/nextjs-auth0' in dependencies
const hasSupabase = '@supabase/supabase-js' in dependencies;

    logger.warn('\n🔍 Dependency Check:');

    if (hasAuth0) {
      logger.warn('✅ @auth0/nextjs-auth0 is installed');
    } else {
      logger.warn('❌ @auth0/nextjs-auth0 is NOT installed');
      logger.warn('   Run: npm install @auth0/nextjs-auth0');
    }

    if (hasSupabase) {
      logger.warn('⚠️  Supabase dependencies still installed');
      logger.warn(
        '   Consider removing: npm uninstall @supabase/supabase-js @supabase/auth-ui-react',
      );
    } else {
      logger.warn('✅ Supabase dependencies have been removed');
    }

    logger.warn('');
  }
}

function main() {
  logger.warn('🚀 Auth0 Environment Setup for Zion Tech Marketplace\n');

  try {
    createEnvFiles();
    checkDependencies();
    printInstructions();

    logger.warn('🎉 Auth0 environment setup complete!');
    logger.warn(
      '   Next steps: Update .env.local with your Auth0 credentials and run npm run validate-env\n',
    );
  } catch (_error) {
    logger.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  generateAuth0Secret,
  createEnvFiles,
  printInstructions,
};


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
