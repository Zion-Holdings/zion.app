#!/usr/bin/env node

/**
 * Development Environment Checker
 * 
 * This script helps developers verify their local environment setup
 */

const fs = require('fs');
const path = require('path');

function checkEnvironment() {
  console.log('🔍 Checking Development Environment');
  console.log('==================================\n');

  let allGood = true;
  const warnings = [];
  const errors = [];

  // Check Node.js version
  const nodeVersion = process.version;
  console.log(`📦 Node.js Version: ${nodeVersion}`);
  
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion < 18) {
    errors.push('Node.js version should be 18 or higher');
  } else {
    console.log('   ✅ Node.js version is compatible\n');
  }

  // Check for package.json
  if (fs.existsSync('package.json')) {
    console.log('📋 Package.json: ✅ Found');
    
    // Check if node_modules exists
    if (fs.existsSync('node_modules')) {
      console.log('📁 Node modules: ✅ Installed');
    } else {
      errors.push('node_modules not found - run `npm install`');
    }
  } else {
    errors.push('package.json not found');
  }

  // Check for environment files
  console.log('\n🌍 Environment Configuration:');
  console.log('=============================');
  
  const envFiles = ['.env.local', '.env', '.env.development'];
  let hasEnvFile = false;
  
  envFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✅ ${file} found`);
      hasEnvFile = true;
    }
  });
  
  if (!hasEnvFile) {
    warnings.push('No environment file found - create .env.local for development');
  }

  // Check Next.js config
  console.log('\n⚙️  Configuration Files:');
  console.log('=======================');
  
  // Check package.json type field to determine correct config file
  let packageType = 'commonjs'; // default
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageType = packageJson.type || 'commonjs';
  } catch (error) {
    // Will be caught later
  }

  if (fs.existsSync('next.config.cjs')) {
    console.log('   ✅ next.config.cjs found');
  } else if (fs.existsSync('next.config.js')) {
    if (packageType === 'module') {
      console.log('   ✅ next.config.js found (ES module)');
    } else {
      console.log('   ✅ next.config.js found');
    }
  } else {
    warnings.push('No Next.js config file found');
  }

  // Check TypeScript
  if (fs.existsSync('tsconfig.json')) {
    console.log('   ✅ tsconfig.json found');
  } else {
    warnings.push('tsconfig.json not found - TypeScript configuration missing');
  }

  // Check Tailwind
  if (fs.existsSync('tailwind.config.js') || fs.existsSync('tailwind.config.ts')) {
    console.log('   ✅ Tailwind config found');
  } else {
    warnings.push('Tailwind config not found');
  }

  // Check for common development scripts
  console.log('\n🔧 Development Scripts:');
  console.log('======================');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const scripts = packageJson.scripts || {};
    
    const requiredScripts = ['dev', 'build', 'start'];
    requiredScripts.forEach(script => {
      if (scripts[script]) {
        console.log(`   ✅ ${script} script available`);
      } else {
        warnings.push(`${script} script missing in package.json`);
      }
    });
  } catch (error) {
    errors.push('Error reading package.json');
  }

  // Summary
  console.log('\n📊 Environment Status:');
  console.log('=====================');
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('🎉 Perfect! Your development environment is fully configured.');
    console.log('\nYou can now run:');
    console.log('• npm run dev - Start development server');
    console.log('• npm run build - Build for production');
    console.log('• npm run start - Start production server');
  } else {
    if (errors.length > 0) {
      console.log('\n❌ Critical Issues:');
      errors.forEach(error => console.log(`   • ${error}`));
      allGood = false;
    }
    
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warning => console.log(`   • ${warning}`));
    }
    
    if (!allGood) {
      console.log('\n🔧 Please fix the critical issues before continuing.');
    } else {
      console.log('\n✅ Environment is functional but could be improved.');
    }
  }

  console.log('\n💡 Quick Setup Commands:');
  console.log('========================');
  console.log('npm install          # Install dependencies');
  console.log('npm run build        # Test production build');
  console.log('npm run dev          # Start development server');
  
  return allGood;
}

if (require.main === module) {
  checkEnvironment();
}

module.exports = { checkEnvironment }; 