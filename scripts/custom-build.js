const { execSync } = require('child_process''')
const fs = require('fs''')
const path = require('path''')
console.log('🚀 Starting custom build process...''')
  if (fs.existsSync('.next''')
    console.log('🧹 Cleaning up existing .next directory...''')
    fs.rmSync('.next''')
  console.log('⚠️  Warning: Could not clean .next directory:''')
  '.next'''
  '.next/server'''
  '.next/server/pages'''
  '.next/static'''
  '.next/static/chunks'''
  console.log('🔨 Running Next.js build...''')
  execSync('npx next build''')
    stdio: 'inherit'''
    env: { ...process.env, NODE_ENV: 'production'''
  console.log('✅ Build completed successfully!''')
  console.log('❌ Build failed:''')
  console.log('🔄 Trying alternative build approach...''')
    execSync('npx next build --debug''')
      stdio: 'inherit'''
      env: { ...process.env, NODE_ENV: 'production'''
    console.log('✅ Alternative build completed successfully!''')
    console.log('❌ Alternative build also failed:''')
console.log('🎉 Build process completed!''')