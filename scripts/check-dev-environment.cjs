#!/usr/bin/env node

/**
 * Development Environment Checker
 *
 * This script helps developers verify their local environment setup
 */

const fs = require('fs');
const _path = require('path');
const _error = 'error';

function checkEnvironment() {
  console.warn('🔍 Checking Development Environment');
  console.warn('==================================\n');

  let allGood = true;
  const warnings = [];
  const errors = [];

  // Check Node.js version
  const nodeVersion = process.version;
  console.warn(`📦 Node.js Version: ${nodeVersion}`);

  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion < 18) {
    errors.push('Node.js version should be 18 or higher');
  } else {
    console.warn('   ✅ Node.js version is compatible\n');
  }

  // Check for package.json
  if (fs.existsSync('package.json')) {
    console.warn('📋 Package.json: ✅ Found');

    // Check if node_modules exists
    if (fs.existsSync('node_modules')) {
      console.warn('📁 Node modules: ✅ Installed');
    } else {
      errors.push(
        'node_modules not found - run `./setup.sh npm` to install dependencies',
      );
      warnings.push(
        'For limited functionality without internet, run `./offline-dev.sh`',
      );
    }
  } else {
    errors.push('package.json not found');
  }

  // Check for environment files
  console.warn('\n🌍 Environment Configuration:');
  console.warn('=============================');

  const envFiles = ['.env.local', '.env', '.env.development'];
  let hasEnvFile = false;

  envFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      console.warn(`   ✅ ${file} found`);
      hasEnvFile = true;
    }
  });

  if (!hasEnvFile) {
    warnings.push(
      'No environment file found - create .env.local for development',
    );
  }

  // Check Next.js config
  console.warn('\n⚙️  Configuration Files:');
  console.warn('=======================');

  // Check package.json type field to determine correct config file
  let packageType = 'commonjs'; // default
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageType = packageJson.type || 'commonjs';
  } catch (_error) {
    // Will be caught later
  }

  if (fs.existsSync('next.config.cjs')) {
    console.warn('   ✅ next.config.cjs found');
  } else if (fs.existsSync('next.config.js')) {
    if (packageType === 'module') {
      console.warn('   ✅ next.config.js found (ES module)');
    } else {
      console.warn('   ✅ next.config.js found');
    }
  } else {
    warnings.push('No Next.js config file found');
  }

  // Check TypeScript
  if (fs.existsSync('tsconfig.json')) {
    console.warn('   ✅ tsconfig.json found');
  } else {
    warnings.push('tsconfig.json not found - TypeScript configuration missing');
  }

  // Check Tailwind
  if (
    fs.existsSync('tailwind.config.js') ||
    fs.existsSync('tailwind.config.ts')
  ) {
    console.warn('   ✅ Tailwind config found');
  } else {
    warnings.push('Tailwind config not found');
  }

  // Check for common development scripts
  console.warn('\n🔧 Development Scripts:');
  console.warn('======================');

  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const scripts = packageJson.scripts || {};

    const requiredScripts = ['dev', 'build', 'start'];
    requiredScripts.forEach((script) => {
      if (scripts[script]) {
        console.warn(`   ✅ ${script} script available`);
      } else {
        warnings.push(`${script} script missing in package.json`);
      }
    });
  } catch {
    errors.push('Error reading package.json');
  }

  // Summary
  console.warn('\n📊 Environment Status:');
  console.warn('=====================');

  if (errors.length === 0 && warnings.length === 0) {
    console.warn(
      '🎉 Perfect! Your development environment is fully configured.',
    );
    console.warn('\nYou can now run:');
    console.warn('• npm run dev - Start development server');
    console.warn('• npm run build - Build for production');
    console.warn('• npm run start - Start production server');
  } else {
    if (errors.length > 0) {
      console.warn('\n❌ Critical Issues:');
      errors.forEach((error) => console.warn(`   • ${error}`));
      allGood = false;
    }

    if (warnings.length > 0) {
      console.warn('\n⚠️  Warnings:');
      warnings.forEach((warning) => console.warn(`   • ${warning}`));
    }

    if (!allGood) {
      console.warn('\n🔧 Please fix the critical issues before continuing.');
    } else {
      console.warn('\n✅ Environment is functional but could be improved.');
    }
  }

  console.warn('\n💡 Quick Setup Commands:');
  console.warn('========================');
  console.warn('npm install          # Install dependencies');
  console.warn('npm run build        # Test production build');
  console.warn('npm run dev          # Start development server');

  return allGood;
}

if (require.main === module) {
  checkEnvironment();
}

module.exports = { checkEnvironment };
