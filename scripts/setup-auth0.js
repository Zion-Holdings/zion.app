
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      # Sentry Error Monitoring (Optional)
# NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id

# Reown Wallet Integration (Optional) 
# NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here

# Development Environment
NODE_ENV=development
`;

  fs.writeFileSync(envPath, envContent);
  logSuccess(`Created .env.local file with Auth0 configuration`);
}

async function promptForAuth0Config() {
  logSection('AUTH0 CONFIGURATION SETUP');  
  logInfo('You need to set up an Auth0 account and application first.');  logInfo('Visit: https://manage.auth0.com/');  logInfo('Create a "Regular Web Application" and get your credentials.');  
  console.warn('\n')
const config = {};
  
  // Auth0 Domain
  while (true) {
    config.issuerBaseUrl = await question('Enter your Auth0 domain (e.g., https://dev-xyz.us.auth0.com): );    if (validateAuth0Domain(config.issuerBaseUrl)) {
      logSuccess('Valid Auth0 domain format');      break;
    } else {
      logErrorToProduction('Invalid Auth0 domain format. Must be https://tenant.region.auth0.com');    }
  }
  
  // Base URL
  config.baseUrl = await question('Enter your application base URL [http://localhost:3000]: ) || http://localhost:3000';  
  // Client ID
  while (true) {
    config.clientId = await question('Enter your Auth0 Client ID: );    if (config.clientId && config.clientId.length > 10 && !isPlaceholderValue(config.clientId)) {
      logSuccess('Client ID looks valid');      break;
    } else {
      logErrorToProduction('Please enter a valid Auth0 Client ID (32+ characters));    }
  }
  
  // Client Secret
  while (true) {
    config.clientSecret = await question('Enter your Auth0 Client Secret: );    if (config.clientSecret && config.clientSecret.length > 20 && !isPlaceholderValue(config.clientSecret)) {
      logSuccess('Client Secret looks valid');      break;
    } else {
      logErrorToProduction('Please enter a valid Auth0 Client Secret (64+ characters));    }
  }
  
  // Generate secret
  config.secret = generateAuth0Secret();
  logSuccess(`Generated secure AUTH0_SECRET: ${config.secret.substring(0, 16)}...`);
  
  // Optional audience
  config.audience = await question('Enter Auth0 API Audience (optional, press Enter to skip): );  
  return config;
}

async function testConfiguration() {
  logSection('TESTING CONFIGURATION');  
  logStep(1, Loading environment variables');  
  // Re-read the env file
  require('dotenv').config({ path: .env.local' });  
  const requiredVars = [
    AUTH0_SECRET',AUTH0_BASE_URL',AUTH0_ISSUER_BASE_URL', AUTH0_CLIENT_ID',AUTH0_CLIENT_SECRET''  ]
const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    logErrorToProduction(`Missing environment variables: ${missing.join(', )}`);    return false;
  }
  
  logSuccess('All required environment variables are set');  
  logStep(2, Testing Auth0 domain connectivity');  
  try {
    const fetch = require('node-fetch');    const wellKnownUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/.well-known/openid_configuration`;
    
    console.warn(`Testing: ${wellKnownUrl}`)
const response = await fetch(wellKnownUrl);
    
    if (response.ok) {
      const data = await response.json();
      logSuccess('Auth0 domain is reachable');      logInfo(`Issuer: ${data.issuer}`);
      return true;
    } else {
      logErrorToProduction(`Auth0 domain test failed: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch {
    logErrorToProduction(`Auth0 domain test failed: ${_'Error occurred'}`);    return false;
  }
}

async function displayNextSteps() {
  logSection('NEXT STEPS');  
  console.warn('');  logStep(1, Configure Auth0 Application Settings');  logInfo('In your Auth0 Dashboard → Applications → Settings, add:');  console.warn('');  console.warn('  Allowed Callback URLs:', yellow');  console.warn('    http://localhost:3000/api/auth/callback');  console.warn('    https://yourdomain.com/api/auth/callback');  console.warn('');  console.warn('  Allowed Logout URLs:', yellow');  console.warn('    http://localhost:3000');  console.warn('    https://yourdomain.com');  console.warn('');  console.warn('  Allowed Web Origins:', yellow');  console.warn('    http://localhost:3000');  console.warn('    https://yourdomain.com');  
  logStep(2, Grant Management API Permissions');  logInfo('In Auth0 Dashboard → Applications → APIs → Machine to Machine:');  console.warn('  • Authorize your app for "Auth0 Management API"');  console.warn('  • Grant scopes: create:users, read:users, update:users');  
  logStep(3, Restart Your Application');  console.warn('  npm run dev', cyan');  console.warn('  # or', white');  console.warn('  yarn dev', cyan');  
  logStep(4, Test the Signup Flow');  console.warn('  1. Visit: http://localhost:3000/signup', cyan');  console.warn('  2. Fill out the form with test data', cyan');  console.warn('  3. Verify no error messages appear', cyan');  console.warn('  4. Check email for verification link', cyan');  
  logStep(5, Verify Health Check');  console.warn('  Visit: http://localhost:3000/api/auth/health', cyan');  console.warn('  Should return: {"status": "ok", ...}, cyan');  
  console.warn('');  logSuccess('Setup complete! Follow the steps above to finish the configuration.');  
  console.warn('');  logInfo('For detailed instructions, see: AUTH0_SETUP_GUIDE_ISSUE_1.md');  logInfo('For troubleshooting, check the Auth0 Dashboard → Monitoring → Logs');}

async function main() {
  console.clear();
  
  logSection('ZION AI MARKETPLACE - AUTH0 SETUP');  log('Fixing Critical Issue #1: Sign-up fails due to missing Auth0 configuration', yellow');  
  try {
    // Check if already configured
    const isConfigured = await checkExistingEnv();
    
    if (isConfigured) {
      logInfo('Auth0 appears to be already configured.');      const reconfigure = await question('Do you want to reconfigure anyway? (y/N): );      
      if (reconfigure.toLowerCase() !== y') {'        logInfo('Skipping configuration. Testing existing setup...');        const testPassed = await testConfiguration();
        
        if (testPassed) {
          logSuccess('Existing configuration is working correctly!');          await displayNextSteps();
          rl.close();
          return;
        } else {
          logWarning('Existing configuration has issues. Continuing with setup...');        }
      }
    }
    
    // Get Auth0 configuration
    const config = await promptForAuth0Config();
    
    // Create .env.local file
    await createEnvFile(config);
    
    // Test the configuration
    const testPassed = await testConfiguration();
    
    if (testPassed) {
      logSuccess('Configuration test passed!');    } else {
      logWarning('Configuration test failed. Please review the settings.');    }
    
    // Display next steps
    await displayNextSteps();
    
  } catch {
    logErrorToProduction(`Setup failed: ${_'Error occurred'}`);    console.error(_error);
  } finally {
    rl.close();
  }
}

// Handle script termination
process.on('SIGINT', () => {'  console.warn('\n');  logInfo('Setup cancelled by user');  rl.close();
  process.exit(0);
});

// Check if node-fetch is available, install if needed
try {
  require('node-fetch');} catch {
  logWarning('node-fetch not found. Please install it:');  log('npm install node-fetch', cyan');  process.exit(1);
}

// Check if dotenv is available
try {
  require('dotenv');} catch {
  logWarning('dotenv not found. Please install it:');  log('npm install dotenv', cyan');  process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  checkExistingEnv,
  generateAuth0Secret,
  validateAuth0Domain,
  isPlaceholderValue
};
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
