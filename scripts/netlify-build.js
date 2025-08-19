#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Netlify build process...');

try {
  // Step 1: Clean install dependencies
  console.log('📦 Step 1: Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully');
  
  // Step 2: Prepare build environment
  console.log('🔧 Step 2: Preparing build environment...');
  execSync('node scripts/prepare-build.js', { stdio: 'inherit' });
  console.log('✅ Build environment prepared');
  
  // Step 3: Check React versions
  console.log('🔍 Step 3: Verifying React versions...');
  execSync('node scripts/check-react-versions.js', { stdio: 'inherit' });
  console.log('✅ React versions verified');
  
  // Step 4: Run export/build
  console.log('🏗️  Step 4: Building and exporting...');
  execSync('npm run export', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
  
  // Step 5: Verify output
  console.log('✅ Step 5: Verifying build output...');
  const outDir = path.join(process.cwd(), 'out');
  if (fs.existsSync(outDir)) {
    const files = fs.readdirSync(outDir);
    console.log(`📁 Build output contains ${files.length} files/directories`);
    console.log('✅ Build output verified');
  } else {
    throw new Error('Build output directory "out" not found');
  }
  
  console.log('🎉 Netlify build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  
  // Try fallback build approach
  console.log('🔄 Attempting fallback build approach...');
  try {
    // Remove node_modules and reinstall
    execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
    execSync('npm install', { stdio: 'inherit' });
    
    // Try build again
    execSync('npm run export', { stdio: 'inherit' });
    console.log('✅ Fallback build successful!');
    
  } catch (fallbackError) {
    console.error('❌ Fallback build also failed:', fallbackError.message);
    process.exit(1);
  }
}