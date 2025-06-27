#!/usr/bin/env node

/**
 * Performance and Health Check Script
 * Monitors various aspects of the application
 */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if it exists
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').replace(/^"(.*)"$/, '$1');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const config = {
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  timeout: 10000, // 10 seconds
};

class PerformanceChecker {
  constructor() {
    this.results = {
      overall: 'unknown',
      checks: [],
      performance: {},
      warnings: [],
      errors: []
    };
  }

  async checkServerHealth() {
    console.log('🔍 Checking server health...');
    try {
      const startTime = Date.now();
      const response = await fetch(`${config.baseUrl}/api/health`, {
        timeout: config.timeout
      });
      const endTime = Date.now();
      
      const responseTime = endTime - startTime;
      this.results.performance.serverResponseTime = responseTime;
      
      if (response.ok) {
        this.results.checks.push({
          name: 'Server Health',
          status: 'pass',
          responseTime: `${responseTime}ms`
        });
        console.log(`✅ Server healthy (${responseTime}ms)`);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Server Health',
        status: 'fail',
        error: error.message
      });
      this.results.errors.push(`Server health check failed: ${error.message}`);
      console.log(`❌ Server health check failed: ${error.message}`);
    }
  }

  async checkPageLoad() {
    console.log('🔍 Checking page load performance...');
    try {
      const startTime = Date.now();
      const response = await fetch(config.baseUrl, {
        timeout: config.timeout
      });
      const endTime = Date.now();
      
      const responseTime = endTime - startTime;
      this.results.performance.pageLoadTime = responseTime;
      
      if (response.ok) {
        const html = await response.text();
        const hasTitle = html.includes('<title>');
        const hasReact = html.includes('__NEXT_DATA__');
        
        this.results.checks.push({
          name: 'Page Load',
          status: 'pass',
          responseTime: `${responseTime}ms`,
          details: {
            hasTitle,
            hasReact,
            contentLength: html.length
          }
        });
        console.log(`✅ Page loads successfully (${responseTime}ms)`);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Page Load',
        status: 'fail',
        error: error.message
      });
      this.results.errors.push(`Page load failed: ${error.message}`);
      console.log(`❌ Page load failed: ${error.message}`);
    }
  }

  async checkImageOptimization() {
    console.log('🔍 Checking image optimization...');
    const imageUrl = `${config.baseUrl}/_next/image?url=%2Flogos%2Fzion-logo.png&w=64&q=75`;
    
    try {
      const startTime = Date.now();
      const response = await fetch(imageUrl, {
        timeout: config.timeout
      });
      const endTime = Date.now();
      
      const responseTime = endTime - startTime;
      
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        const contentLength = response.headers.get('content-length');
        
        this.results.checks.push({
          name: 'Image Optimization',
          status: 'pass',
          responseTime: `${responseTime}ms`,
          details: {
            contentType,
            contentLength: contentLength ? `${Math.round(contentLength / 1024)}KB` : 'unknown'
          }
        });
        console.log(`✅ Image optimization working (${responseTime}ms, ${contentType})`);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Image Optimization',
        status: 'fail',
        error: error.message
      });
      this.results.warnings.push(`Image optimization not working: ${error.message}`);
      console.log(`⚠️ Image optimization issue: ${error.message}`);
    }
  }

  checkFileSystem() {
    console.log('🔍 Checking file system...');
    
    const criticalFiles = [
      'package.json',
      'next.config.js',
      '.env.local',
      'public/logos/zion-logo.png',
      'pages/index.tsx'
    ];

    const missingFiles = [];
    const fileInfo = {};

    criticalFiles.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          fileInfo[file] = {
            exists: true,
            size: `${Math.round(stats.size / 1024)}KB`,
            modified: stats.mtime.toISOString()
          };
        } else {
          missingFiles.push(file);
          fileInfo[file] = { exists: false };
        }
      } catch (error) {
        missingFiles.push(file);
        fileInfo[file] = { exists: false, error: error.message };
      }
    });

    this.results.checks.push({
      name: 'File System',
      status: missingFiles.length === 0 ? 'pass' : 'warn',
      details: {
        totalFiles: criticalFiles.length,
        missingFiles: missingFiles.length,
        files: fileInfo
      }
    });

    if (missingFiles.length > 0) {
      this.results.warnings.push(`Missing files: ${missingFiles.join(', ')}`);
      console.log(`⚠️ Missing critical files: ${missingFiles.join(', ')}`);
    } else {
      console.log('✅ All critical files present');
    }
  }

  checkEnvironmentVariables() {
    console.log('🔍 Checking environment configuration...');
    
    const criticalEnvVars = [
      'NODE_ENV',
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY'
    ];

    const optionalEnvVars = [
      'NEXT_PUBLIC_SENTRY_DSN',
      'NEXT_PUBLIC_REOWN_PROJECT_ID',
      'SUPABASE_SERVICE_ROLE_KEY'
    ];

    const missing = [];
    const present = [];
    const placeholder = [];

    [...criticalEnvVars, ...optionalEnvVars].forEach(varName => {
      const value = process.env[varName];
      if (!value) {
        missing.push(varName);
      } else if (value.includes('your_') || value.includes('placeholder') || value.includes('dummy')) {
        placeholder.push(varName);
        present.push(varName);
      } else {
        present.push(varName);
      }
    });

    const criticalMissing = criticalEnvVars.filter(v => missing.includes(v));

    this.results.checks.push({
      name: 'Environment Variables',
      status: criticalMissing.length === 0 ? 'pass' : 'fail',
      details: {
        critical: {
          total: criticalEnvVars.length,
          present: criticalEnvVars.filter(v => present.includes(v)).length,
          missing: criticalMissing.length
        },
        optional: {
          total: optionalEnvVars.length,
          present: optionalEnvVars.filter(v => present.includes(v)).length,
          missing: optionalEnvVars.filter(v => missing.includes(v)).length
        },
        placeholders: placeholder.length
      }
    });

    if (criticalMissing.length > 0) {
      this.results.errors.push(`Missing critical environment variables: ${criticalMissing.join(', ')}`);
      console.log(`❌ Missing critical env vars: ${criticalMissing.join(', ')}`);
    } else {
      console.log('✅ All critical environment variables present');
    }

    if (placeholder.length > 0) {
      this.results.warnings.push(`Placeholder values detected: ${placeholder.join(', ')}`);
      console.log(`⚠️ Placeholder values: ${placeholder.join(', ')}`);
    }
  }

  calculateOverallStatus() {
    const hasErrors = this.results.errors.length > 0;
    const hasFailures = this.results.checks.some(check => check.status === 'fail');
    const hasWarnings = this.results.warnings.length > 0;

    if (hasErrors || hasFailures) {
      this.results.overall = 'fail';
    } else if (hasWarnings) {
      this.results.overall = 'warn';
    } else {
      this.results.overall = 'pass';
    }
  }

  printSummary() {
    console.log('\n📊 Performance Check Summary');
    console.log('================================');
    
    const statusEmoji = {
      pass: '✅',
      warn: '⚠️',
      fail: '❌'
    };

    console.log(`Overall Status: ${statusEmoji[this.results.overall]} ${this.results.overall.toUpperCase()}`);
    
    console.log('\nCheck Results:');
    this.results.checks.forEach(check => {
      console.log(`  ${statusEmoji[check.status]} ${check.name}: ${check.status}`);
      if (check.responseTime) {
        console.log(`    Response Time: ${check.responseTime}`);
      }
      if (check.error) {
        console.log(`    Error: ${check.error}`);
      }
    });

    if (this.results.performance.serverResponseTime) {
      console.log('\nPerformance Metrics:');
      console.log(`  Server Response: ${this.results.performance.serverResponseTime}ms`);
      if (this.results.performance.pageLoadTime) {
        console.log(`  Page Load: ${this.results.performance.pageLoadTime}ms`);
      }
    }

    if (this.results.warnings.length > 0) {
      console.log('\nWarnings:');
      this.results.warnings.forEach(warning => {
        console.log(`  ⚠️ ${warning}`);
      });
    }

    if (this.results.errors.length > 0) {
      console.log('\nErrors:');
      this.results.errors.forEach(error => {
        console.log(`  ❌ ${error}`);
      });
    }

    console.log('\n💡 Recommendations:');
    if (this.results.overall === 'pass') {
      console.log('  🎉 Everything looks great! Your application is running optimally.');
    } else if (this.results.overall === 'warn') {
      console.log('  📝 Address the warnings above to improve performance and reliability.');
    } else {
      console.log('  🔧 Fix the errors above before deploying to production.');
    }
  }

  async run() {
    console.log('🚀 Starting Performance Check');
    console.log('=============================\n');

    // Run all checks
    await this.checkServerHealth();
    await this.checkPageLoad();
    await this.checkImageOptimization();
    this.checkFileSystem();
    this.checkEnvironmentVariables();

    // Calculate overall status
    this.calculateOverallStatus();

    // Print summary
    this.printSummary();

    // Return results for programmatic use
    return this.results;
  }
}

// Run the performance check if called directly
if (require.main === module) {
  const checker = new PerformanceChecker();
  checker.run()
    .then(results => {
      process.exit(results.overall === 'fail' ? 1 : 0);
    })
    .catch(error => {
      console.error('❌ Performance check failed:', error);
      process.exit(1);
    });
}

module.exports = PerformanceChecker; 