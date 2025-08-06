const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting custom build process...');

// Clean up any existing build artifacts
try {
  if (fs.existsSync('.next')) {
    console.log('🧹 Cleaning up existing .next directory...');
    fs.rmSync('.next', { recursive: true, force: true });
  }
} catch (error) {
  console.log('⚠️  Warning: Could not clean .next directory:', error.message);
}

// Create necessary directories
const dirs = [
  '.next',
  '.next/server',
  '.next/server/pages',
  '.next/static',
  '.next/static/chunks'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Try to run the build
try {
  console.log('🔨 Running Next.js build...');
  execSync('npx next build', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.log('❌ Build failed:', error.message);
  
  // Try alternative build approach
  console.log('🔄 Trying alternative build approach...');
  try {
    execSync('npx next build --debug', { 
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    console.log('✅ Alternative build completed successfully!');
  } catch (altError) {
    console.log('❌ Alternative build also failed:', altError.message);
    process.exit(1);
  }
}

console.log('🎉 Build process completed!');
