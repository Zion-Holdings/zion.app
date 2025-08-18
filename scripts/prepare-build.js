#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Preparing build environment...');

// Check if we're in a Netlify environment
const isNetlify = process.env.NETLIFY === 'true';
console.log(`🌐 Environment: ${isNetlify ? 'Netlify' : 'Local'}`);

// Force reinstall of React packages to ensure correct versions
console.log('📦 Reinstalling React packages to ensure correct versions...');

try {
  // Remove existing React packages
  execSync('rm -rf node_modules/react node_modules/react-dom', { stdio: 'inherit' });
  console.log('✅ Removed existing React packages');
  
  // Reinstall React packages with exact versions
  execSync('npm install react@18.2.0 react-dom@18.2.0 --no-save', { stdio: 'inherit' });
  console.log('✅ Reinstalled React packages');
  
  // Verify versions
  const reactPackagePath = path.join(process.cwd(), 'node_modules', 'react', 'package.json');
  const reactDomPackagePath = path.join(process.cwd(), 'node_modules', 'react-dom', 'package.json');
  
  if (fs.existsSync(reactPackagePath) && fs.existsSync(reactDomPackagePath)) {
    const reactInstalled = JSON.parse(fs.readFileSync(reactPackagePath, 'utf8'));
    const reactDomInstalled = JSON.parse(fs.readFileSync(reactDomPackagePath, 'utf8'));
    
    console.log(`📦 React version: ${reactInstalled.version}`);
    console.log(`📦 React DOM version: ${reactDomInstalled.version}`);
    
    if (reactInstalled.version !== '18.2.0' || reactDomInstalled.version !== '18.2.0') {
      throw new Error('React versions are not correct after reinstall');
    }
  }
  
  console.log('✅ React versions verified successfully');
  
} catch (error) {
  console.error('❌ Failed to prepare build environment:', error.message);
  process.exit(1);
}

// Create a .babelrc file to ensure consistent React compilation
const babelrc = {
  presets: [
    ['@babel/preset-react', {
      runtime: 'automatic',
      importSource: 'react'
    }]
  ]
};

fs.writeFileSync('.babelrc', JSON.stringify(babelrc, null, 2));
console.log('✅ Created .babelrc configuration');

console.log('🎉 Build environment prepared successfully!');