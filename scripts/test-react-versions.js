#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing React version enforcement...');

// Test 1: Check package.json versions
console.log('\n📦 Test 1: Package.json versions');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const reactVersion = packageJson.dependencies.react;
const reactDomVersion = packageJson.dependencies['react-dom'];

console.log(`   React: ${reactVersion}`);
console.log(`   React DOM: ${reactDomVersion}`);

if (reactVersion === reactDomVersion) {
  console.log('   ✅ Versions match');
} else {
  console.log('   ❌ Versions do not match');
  process.exit(1);
}

// Test 2: Check overrides
console.log('\n🔒 Test 2: Package.json overrides');
if (packageJson.overrides && packageJson.overrides.react && packageJson.overrides['react-dom']) {
  console.log('   ✅ Overrides are configured');
  console.log(`   React override: ${packageJson.overrides.react}`);
  console.log(`   React DOM override: ${packageJson.overrides['react-dom']}`);
} else {
  console.log('   ❌ Overrides are not configured');
  process.exit(1);
}

// Test 3: Check Next.js config
console.log('\n⚙️  Test 3: Next.js configuration');
if (fs.existsSync('next.config.js')) {
  const nextConfig = fs.readFileSync('next.config.js', 'utf8');
  if (nextConfig.includes('require.resolve') && nextConfig.includes('react')) {
    console.log('   ✅ Next.js config has React version enforcement');
  } else {
    console.log('   ❌ Next.js config missing React version enforcement');
    process.exit(1);
  }
} else {
  console.log('   ❌ Next.js config file not found');
  process.exit(1);
}

// Test 4: Check .npmrc
console.log('\n📋 Test 4: .npmrc configuration');
if (fs.existsSync('.npmrc')) {
  const npmrc = fs.readFileSync('.npmrc', 'utf8');
  if (npmrc.includes('legacy-peer-deps=true')) {
    console.log('   ✅ .npmrc has legacy peer deps enabled');
  } else {
    console.log('   ❌ .npmrc missing legacy peer deps');
    process.exit(1);
  }
} else {
  console.log('   ❌ .npmrc file not found');
  process.exit(1);
}

// Test 5: Check if node_modules exists and verify versions
console.log('\n📁 Test 5: Installed package versions');
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  try {
    const reactPackagePath = path.join(nodeModulesPath, 'react', 'package.json');
    const reactDomPackagePath = path.join(nodeModulesPath, 'react-dom', 'package.json');
    
    if (fs.existsSync(reactPackagePath) && fs.existsSync(reactDomPackagePath)) {
      const reactInstalled = JSON.parse(fs.readFileSync(reactPackagePath, 'utf8'));
      const reactDomInstalled = JSON.parse(fs.readFileSync(reactDomPackagePath, 'utf8'));
      
      console.log(`   Installed React: ${reactInstalled.version}`);
      console.log(`   Installed React DOM: ${reactDomInstalled.version}`);
      
      if (reactInstalled.version === reactDomInstalled.version) {
        console.log('   ✅ Installed versions match');
      } else {
        console.log('   ❌ Installed versions do not match');
        process.exit(1);
      }
      
      if (reactInstalled.version === reactVersion.replace(/^[\^~]/, '')) {
        console.log('   ✅ Installed version matches package.json');
      } else {
        console.log('   ⚠️  Installed version differs from package.json');
        console.log('      Consider running: npm install');
      }
    } else {
      console.log('   ⚠️  React packages not found in node_modules');
      console.log('      Run: npm install');
    }
  } catch (error) {
    console.log('   ⚠️  Could not verify installed versions:', error.message);
  }
} else {
  console.log('   ⚠️  node_modules not found');
  console.log('      Run: npm install');
}

console.log('\n🎉 All React version tests passed!');
console.log('   The build should now work without React version conflicts.');