#!/usr/bin/env node

/**
 * Comprehensive Build Automation Script
 * Integrates all fixes and provides monitoring capabilities
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { checkServicesHealth, validateBuildTimeNetwork } = require('../utils/network-utils');

class BuildAutomation {
  constructor() {
    this.buildLog = [];
    this.errors = [];
    this.warnings = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    
    this.buildLog.push(logEntry);
    console.log(logEntry);
    
    if (type === 'error') this.errors.push(message);
    if (type === 'warning') this.warnings.push(message);
  }

  async validateEnvironment() {
    this.log('🔍 Validating build environment...');
    
    // Check Node.js version
    const nodeVersion = process.version;
    this.log(`Node.js version: ${nodeVersion}`);
    
    if (!nodeVersion.startsWith('v20')) {
      this.warnings.push(`Node.js version ${nodeVersion} is not v20.x`);
    }
    
    // Check required environment variables
    const requiredEnvVars = ['NODE_VERSION', 'NODE_OPTIONS'];
    for (const envVar of requiredEnvVars) {
      if (process.env[envVar]) {
        this.log(`${envVar}: ${process.env[envVar]}`);
      } else {
        this.warnings.push(`Environment variable ${envVar} not set`);
      }
    }
    
    // Check available memory
    const memUsage = process.memoryUsage();
    this.log(`Memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
    
    return true;
  }

  async validateFiles() {
    this.log('📁 Validating required files...');
    
    const requiredFiles = ['_headers', '_redirects', 'package.json', 'next.config.js'];
    const missingFiles = [];
    
    for (const file of requiredFiles) {
      if (fs.existsSync(file)) {
        this.log(`✅ ${file} found`);
      } else {
        missingFiles.push(file);
        this.log(`❌ ${file} missing`, 'error');
      }
    }
    
    if (missingFiles.length > 0) {
      this.log(`Creating missing files: ${missingFiles.join(', ')}`);
      await this.createMissingFiles(missingFiles);
    }
    
    return missingFiles.length === 0;
  }

  async createMissingFiles(missingFiles) {
    for (const file of missingFiles) {
      switch (file) {
        case '_headers':
          await this.createHeadersFile();
          break;
        case '_redirects':
          await this.createRedirectsFile();
          break;
        default:
          this.log(`⚠️  Cannot auto-create ${file}`, 'warning');
      }
    }
  }

  async createHeadersFile() {
    const headersContent = `/*
  Cache-Control: public, max-age=0, must-revalidate, no-transform
  Content-Security-Policy: upgrade-insecure-requests
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/og/*
  Cache-Control: public, max-age=31536000, immutable
`;
    
    fs.writeFileSync('_headers', headersContent);
    this.log('✅ Created _headers file');
  }

  async createRedirectsFile() {
    const redirectsContent = `/*    /index.html   200`;
    fs.writeFileSync('_redirects', redirectsContent);
    this.log('✅ Created _redirects file');
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdated = JSON.parse(outdatedOutput);
      
      if (Object.keys(outdated).length > 0) {
        this.log(`⚠️  Found ${Object.keys(outdated).length} outdated packages`, 'warning');
        for (const [pkg, info] of Object.entries(outdated)) {
          this.log(`  ${pkg}: ${info.current} → ${info.latest}`);
        }
      } else {
        this.log('✅ All packages are up to date');
      }
    } catch (error) {
      this.log('ℹ️  No outdated packages found');
    }
    
    // Check for security vulnerabilities
    try {
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditOutput);
      
      if (audit.metadata.vulnerabilities) {
        const { critical, high, moderate, low } = audit.metadata.vulnerabilities;
        this.log(`🔒 Security audit: ${critical} critical, ${high} high, ${moderate} moderate, ${low} low`);
        
        if (critical > 0 || high > 0) {
          this.log('⚠️  Critical/High vulnerabilities found - consider running npm audit fix', 'warning');
        }
      } else {
        this.log('✅ No security vulnerabilities found');
      }
    } catch (error) {
      this.log('⚠️  Could not run security audit', 'warning');
    }
  }

  async validateNetwork() {
    this.log('🌐 Validating network connectivity...');
    
    // Add your critical endpoints here
    const criticalEndpoints = [
      // 'https://api.example.com/health',
      // 'https://database.example.com/status'
    ];
    
    if (criticalEndpoints.length === 0) {
      this.log('ℹ️  No critical endpoints configured for validation');
      return true;
    }
    
    try {
      const isHealthy = await validateBuildTimeNetwork(criticalEndpoints);
      return isHealthy;
    } catch (error) {
      this.log(`❌ Network validation failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runBuild() {
    this.log('🚀 Starting build process...');
    
    try {
      // Clean previous builds
      this.log('🧹 Cleaning previous builds...');
      execSync('rm -rf .next out tsconfig.tsbuildinfo', { stdio: 'inherit' });
      
      // Run build
      this.log('🔨 Running Next.js build...');
      execSync('npm run build', { 
        stdio: 'inherit',
        env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider' }
      });
      
      // Copy required files
      this.log('📋 Copying required files...');
      if (fs.existsSync('_redirects')) {
        execSync('cp -f _redirects out/_redirects', { stdio: 'inherit' });
      }
      if (fs.existsSync('_headers')) {
        execSync('cp -f _headers out/_headers', { stdio: 'inherit' });
      }
      
      this.log('✅ Build completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'error');
      return false;
    }
  }

  async generateReport() {
    this.log('📊 Generating build report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      success: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      buildLog: this.buildLog,
      summary: {
        totalChecks: this.buildLog.length,
        errors: this.errors.length,
        warnings: this.warnings.length
      }
    };
    
    // Save report to file
    const reportPath = 'build-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Build report saved to ${reportPath}`);
    
    // Print summary
    console.log('\n' + '='.repeat(50));
    console.log('🏁 BUILD AUTOMATION SUMMARY');
    console.log('='.repeat(50));
    console.log(`✅ Success: ${report.success ? 'YES' : 'NO'}`);
    console.log(`❌ Errors: ${report.summary.errors}`);
    console.log(`⚠️  Warnings: ${report.summary.warnings}`);
    console.log(`📊 Total Checks: ${report.summary.totalChecks}`);
    
    if (report.errors.length > 0) {
      console.log('\n❌ ERRORS:');
      report.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (report.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      report.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    return report;
  }

  async run() {
    this.log('🚀 Starting comprehensive build automation...');
    
    try {
      // Run all validation steps
      await this.validateEnvironment();
      await this.validateFiles();
      await this.checkDependencies();
      await this.validateNetwork();
      
      // Run build if all validations pass
      if (this.errors.length === 0) {
        await this.runBuild();
      } else {
        this.log('❌ Build skipped due to validation errors', 'error');
      }
      
      // Generate final report
      const report = await this.generateReport();
      
      // Exit with appropriate code
      process.exit(report.success ? 0 : 1);
      
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automation = new BuildAutomation();
  automation.run();
}

module.exports = BuildAutomation;