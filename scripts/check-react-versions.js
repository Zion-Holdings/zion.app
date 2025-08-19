#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking React version consistency...');

// Read package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Check React versions in package.json
const reactVersion = packageJson.dependencies.react;
const reactDomVersion = packageJson.dependencies['react-dom'];

console.log(`📦 Package.json React version: ${reactVersion}`);
console.log(`📦 Package.json React DOM version: ${reactDomVersion}`);

// Check if versions match
if (reactVersion !== reactDomVersion) {
  console.error('❌ React and React DOM versions do not match!');
  console.error(`   React: ${reactVersion}`);
  console.error(`   React DOM: ${reactDomVersion}`);
  process.exit(1);
}

// Check if versions are pinned (not using ^ or ~)
if (reactVersion.includes('^') || reactVersion.includes('~')) {
  console.warn('⚠️  Warning: React version is not pinned. Consider using exact version.');
}

if (reactDomVersion.includes('^') || reactDomVersion.includes('~')) {
  console.warn('⚠️  Warning: React DOM version is not pinned. Consider using exact version.');
}

console.log('✅ React versions are consistent!');
console.log(`   Both React and React DOM are using version: ${reactVersion}`);

// Check if node_modules exists and verify installed versions
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  try {
    const reactPackagePath = path.join(nodeModulesPath, 'react', 'package.json');
    const reactDomPackagePath = path.join(nodeModulesPath, 'react-dom', 'package.json');
    
    if (fs.existsSync(reactPackagePath) && fs.existsSync(reactDomPackagePath)) {
      const reactInstalled = JSON.parse(fs.readFileSync(reactPackagePath, 'utf8'));
      const reactDomInstalled = JSON.parse(fs.readFileSync(reactDomPackagePath, 'utf8'));
      
      console.log(`📦 Installed React version: ${reactInstalled.version}`);
      console.log(`📦 Installed React DOM version: ${reactDomInstalled.version}`);
      
      if (reactInstalled.version !== reactDomInstalled.version) {
        console.error('❌ Installed React and React DOM versions do not match!');
        process.exit(1);
      }
      
      if (reactInstalled.version !== reactVersion.replace(/^[\^~]/, '')) {
        console.warn('⚠️  Warning: Installed version differs from package.json version.');
        console.warn('   Consider running: npm install');
      }
    }
  } catch (error) {
    console.warn('⚠️  Could not verify installed versions:', error.message);
  }
}

console.log('🎉 React version check completed successfully!');