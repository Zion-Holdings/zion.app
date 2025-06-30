#!/usr/bin/env node

// Load environment variables from .env files if the dotenv package is available
let dotenvAvailable = true;
try {
  require('dotenv').config({ path: '.env.local' });
  require('dotenv').config({ path: '.env.development' }); // often used for dev defaults
  require('dotenv').config({ path: '.env' }); // for any base defaults
} catch (err) {
  dotenvAvailable = false;
  console.warn('⚠️  Optional dependency "dotenv" not found. Skipping env file loading.');
}

/**
 * Pre-build Check Script
 * This script runs before the build process to ensure all required environment variables
 * are properly configured in Netlify. It provides clear instructions for fixing issues.
 */

const { validateEnvironment } = require('./validate-environment.cjs');

console.log('🚀 Pre-build Environment Check');
console.log('================================\n');

// Verify essential dependencies are installed
function checkDependencies() {
  console.log('🔍 Checking dependencies...');
  const required = [
    'react',
    'react-dom',
    'react-router-dom',
    'lucide-react',
    '@tanstack/react-query'
  ];
  const missing = required.filter(dep => {
    try {
      require.resolve(dep);
      return false;
    } catch {
      return true;
    }
  });

  if (missing.length > 0) {
    console.error(`❌ Missing dependencies: ${missing.join(', ')}`);
    console.error('Please run "./setup.sh npm" to install required packages.');
    process.exit(1);
  }

  console.log('✅ All required dependencies found.\n');
}

checkDependencies();

// Special handling for Netlify environment
if (process.env.NETLIFY === 'true') {
  console.log('🌐 Detected Netlify build environment');
  console.log(`📦 Deploy context: ${process.env.CONTEXT || 'unknown'}`);
  console.log(`🌍 Deploy URL: ${process.env.DEPLOY_URL || 'unknown'}`);
  console.log(`🔗 Site URL: ${process.env.URL || 'unknown'}\n`);
  
  // Check if this is a production deploy
  if (process.env.CONTEXT === 'production') {
    console.log('🔥 PRODUCTION DEPLOYMENT - Extra validation required\n');
  }
}

// Run the validation
const result = validateEnvironment();

if (!result.isValid) {
  console.log('\n🚨 NETLIFY SETUP INSTRUCTIONS:');
  console.log('==============================\n');
  
  console.log('1. 🌐 Go to your Netlify dashboard:');
  console.log('   https://app.netlify.com/sites/[your-site-name]/settings/deploys#environment\n');
  
  console.log('2. 📝 Click "Edit variables" and add these required variables:\n');
  
  result.errors.forEach(error => {
    console.log(`   ✏️  ${error.variable}`);
    console.log(`       Description: ${error.description}`);
    console.log(`       Current: ${error.current}\n`);
  });
  
  console.log('3. 🔧 Get your Auth0 credentials:');
  console.log('   - Go to https://manage.auth0.com/dashboard/');
  console.log('   - Select your application');
  console.log('   - Copy the Domain, Client ID, and Client Secret');
  console.log('   - Generate a random 32-character secret for AUTH0_SECRET\n');
  
  console.log('4. 💾 Click "Save" and then "Deploy site"\n');
  
  console.log('5. 🔍 Verify the setup by visiting:');
  console.log('   https://your-site.netlify.app/api/health/environment\n');
  
  console.log('❌ Build stopped to prevent deployment with missing configuration.');
  console.log('Please fix the environment variables and try again.\n');
  
  process.exit(1);
}

console.log('✅ Pre-build check passed! Proceeding with build...\n'); 
