#!/usr/bin/env node

/**
 * Production Build Validator
 * Validates production build integrity and readiness
 */

const fs = require('fs');
const path = require('path');

class BuildValidator {
  constructor() {
    this.buildPath = '.next';
    this.checks = [];
  }

  validateBuildExists() {
    const exists = fs.existsSync(this.buildPath);
    this.checks.push({
      name: 'Build Directory',
      status: exists ? 'pass' : 'fail',
      details: exists ? 'Build directory exists' : 'No build found - run npm run build'
    });
  }

  validateStaticFiles() {
    const staticPath = path.join(this.buildPath, 'static');
    const exists = fs.existsSync(staticPath);
    this.checks.push({
      name: 'Static Assets',
      status: exists ? 'pass' : 'fail', 
      details: exists ? 'Static assets generated' : 'Static assets missing'
    });
  }

  validateServerFiles() {
    const serverPath = path.join(this.buildPath, 'server');
    const exists = fs.existsSync(serverPath);
    this.checks.push({
      name: 'Server Build',
      status: exists ? 'pass' : 'fail',
      details: exists ? 'Server build complete' : 'Server build missing'
    });
  }

  validateManifest() {
    const manifestPath = path.join(this.buildPath, 'build-manifest.json');
    const exists = fs.existsSync(manifestPath);
    this.checks.push({
      name: 'Build Manifest',
      status: exists ? 'pass' : 'fail',
      details: exists ? 'Build manifest present' : 'Build manifest missing'
    });
  }

  run() {
    console.log('🔍 Validating Production Build...\n');
    
    this.validateBuildExists();
    this.validateStaticFiles();
    this.validateServerFiles();
    this.validateManifest();
    
    console.log('Build Validation Results:');
    this.checks.forEach(check => {
      const emoji = check.status === 'pass' ? '✅' : '❌';
      console.log(`  ${emoji} ${check.name}: ${check.details}`);
    });
    
    const allPassed = this.checks.every(check => check.status === 'pass');
    console.log(`\n🏗️ Build Status: ${allPassed ? '✅ VALID' : '❌ INVALID'}`);
    
    return allPassed;
  }
}

if (require.main === module) {
  const validator = new BuildValidator();
  const isValid = validator.run();
  process.exit(isValid ? 0 : 1);
}

module.exports = BuildValidator;
