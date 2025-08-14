#!/usr/bin/env node

/**
 * Enhanced Build Automation System
 * Features: Self-healing, Performance tracking, Advanced error recovery
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const { checkServicesHealth, validateBuildTimeNetwork } = require('../utils/network-utils');

class EnhancedBuildAutomation {
  constructor() {
    this.buildLog = [];
    this.errors = [];
    this.warnings = [];
    this.startTime = Date.now();
    this.performanceMetrics = {};
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 3;
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    
    this.buildLog.push(logEntry);
    console.log(logEntry);
    
    if (type === 'error') this.errors.push(message);
    if (type === 'warning') this.warnings.push(message);
  }

  // Enhanced error recovery with self-healing
  async attemptErrorRecovery() {
    this.log('🔧 Attempting error recovery...');
    
    let recoverySuccess = false;
    
    for (const error of this.errors) {
      if (await this.canRecoverFromError(error)) {
        this.log(`🔄 Attempting to recover from: ${error}`);
        
        try {
          await this.recoverFromError(error);
          this.log(`✅ Successfully recovered from: ${error}`);
          recoverySuccess = true;
          
          // Remove the error from the list since it's been recovered
          this.errors = this.errors.filter(e => e !== error);
        } catch (recoveryError) {
          this.log(`❌ Recovery failed for: ${error} - ${recoveryError.message}`, 'error');
        }
      }
    }
    
    return recoverySuccess;
  }

  async canRecoverFromError(error) {
    const recoverableErrors = [
      'missing _headers',
      'missing _redirects',
      'network timeout',
      'memory limit exceeded',
      'dependency installation failed',
      'build cache corrupted'
    ];
    
    return recoverableErrors.some(recoverable => error.includes(recoverable));
  }

  async recoverFromError(error) {
    if (error.includes('missing _headers')) {
      await this.createHeadersFile();
    } else if (error.includes('missing _redirects')) {
      await this.createRedirectsFile();
    } else if (error.includes('network timeout')) {
      await this.retryWithFallback();
    } else if (error.includes('memory limit exceeded')) {
      await this.optimizeMemoryUsage();
    } else if (error.includes('dependency installation failed')) {
      await this.reinstallDependencies();
    } else if (error.includes('build cache corrupted')) {
      await this.repairBuildCache();
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

  async retryWithFallback() {
    this.log('🔄 Retrying with fallback strategy...');
    
    // Implement exponential backoff with fallback endpoints
    const fallbackEndpoints = [
      'https://api1.example.com',
      'https://api2.example.com',
      'https://api3.example.com'
    ];
    
    for (let attempt = 0; attempt < this.maxRecoveryAttempts; attempt++) {
      for (const endpoint of fallbackEndpoints) {
        try {
          const response = await this.testEndpoint(endpoint);
          if (response.ok) {
            this.log(`✅ Successfully connected to fallback endpoint: ${endpoint}`);
            return true;
          }
        } catch (error) {
          this.log(`⚠️  Fallback endpoint ${endpoint} failed: ${error.message}`);
        }
      }
      
      if (attempt < this.maxRecoveryAttempts - 1) {
        const delay = Math.pow(2, attempt) * 1000;
        this.log(`⏳ Waiting ${delay}ms before next retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    throw new Error('All fallback endpoints failed');
  }

  async testEndpoint(endpoint) {
    return fetch(endpoint, { 
      method: 'HEAD',
      timeout: 5000 
    });
  }

  async optimizeMemoryUsage() {
    this.log('🧠 Optimizing memory usage...');
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc();
      this.log('✅ Garbage collection completed');
    }
    
    // Clear any cached data
    this.clearCachedData();
    
    // Adjust Node.js memory limits
    const currentMemory = process.memoryUsage();
    this.log(`📊 Current memory usage: ${Math.round(currentMemory.heapUsed / 1024 / 1024)}MB`);
    
    if (currentMemory.heapUsed > 1024 * 1024 * 1024) { // 1GB
      this.log('⚠️  High memory usage detected, clearing caches');
      this.clearBuildCaches();
    }
  }

  clearCachedData() {
    // Clear any in-memory caches
    if (global.__BUILD_CACHE__) {
      global.__BUILD_CACHE__.clear();
      this.log('✅ Cleared global build cache');
    }
  }

  clearBuildCaches() {
    try {
      execSync('rm -rf .next/cache', { stdio: 'inherit' });
      execSync('rm -rf node_modules/.cache', { stdio: 'inherit' });
      this.log('✅ Cleared build caches');
    } catch (error) {
      this.log(`⚠️  Could not clear some caches: ${error.message}`);
    }
  }

  async reinstallDependencies() {
    this.log('📦 Reinstalling dependencies...');
    
    try {
      // Clear npm cache
      execSync('npm cache clean --force', { stdio: 'inherit' });
      this.log('✅ Cleared npm cache');
      
      // Remove node_modules and reinstall
      execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
      this.log('✅ Removed existing dependencies');
      
      execSync('npm install', { stdio: 'inherit' });
      this.log('✅ Dependencies reinstalled successfully');
    } catch (error) {
      throw new Error(`Dependency reinstallation failed: ${error.message}`);
    }
  }

  async repairBuildCache() {
    this.log('🔧 Repairing build cache...');
    
    try {
      // Clear corrupted caches
      execSync('rm -rf .next out tsconfig.tsbuildinfo', { stdio: 'inherit' });
      this.log('✅ Cleared corrupted build artifacts');
      
      // Rebuild cache
      execSync('npm run build', { 
        stdio: 'inherit',
        env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider' }
      });
      this.log('✅ Build cache repaired');
    } catch (error) {
      throw new Error(`Cache repair failed: ${error.message}`);
    }
  }

  // Performance tracking and metrics
  startPerformanceTracking() {
    this.log('📊 Starting performance tracking...');
    
    this.performanceMetrics = {
      startTime: Date.now(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      buildStages: new Map(),
      cacheMetrics: {
        hits: 0,
        misses: 0,
        efficiency: 0
      }
    };
  }

  trackBuildStage(stage, action = 'start') {
    if (action === 'start') {
      this.performanceMetrics.buildStages.set(stage, {
        startTime: Date.now(),
        memoryUsage: process.memoryUsage()
      });
      this.log(`📊 Started tracking: ${stage}`);
    } else if (action === 'end') {
      const stageData = this.performanceMetrics.buildStages.get(stage);
      if (stageData) {
        const duration = Date.now() - stageData.startTime;
        const memoryDelta = process.memoryUsage().heapUsed - stageData.memoryUsage.heapUsed;
        
        this.log(`📊 ${stage} completed in ${duration}ms, memory delta: ${Math.round(memoryDelta / 1024)}KB`);
        
        stageData.duration = duration;
        stageData.memoryDelta = memoryDelta;
      }
    }
  }

  calculateBuildEfficiency() {
    const totalTime = Date.now() - this.performanceMetrics.startTime;
    const activeTime = Array.from(this.performanceMetrics.buildStages.values())
      .reduce((sum, stage) => sum + (stage.duration || 0), 0);
    
    return {
      totalTime,
      activeTime,
      efficiency: (activeTime / totalTime) * 100,
      idleTime: totalTime - activeTime
    };
  }

  async generatePerformanceReport() {
    const efficiency = this.calculateBuildEfficiency();
    const finalMemoryUsage = process.memoryUsage();
    
    const report = {
      timestamp: new Date().toISOString(),
      performance: {
        totalBuildTime: efficiency.totalTime,
        activeBuildTime: efficiency.activeTime,
        buildEfficiency: efficiency.efficiency.toFixed(2) + '%',
        idleTime: efficiency.idleTime,
        memoryUsage: {
          start: {
            heapUsed: Math.round(this.performanceMetrics.memoryUsage.heapUsed / 1024 / 1024) + 'MB',
            heapTotal: Math.round(this.performanceMetrics.memoryUsage.heapTotal / 1024 / 1024) + 'MB'
          },
          end: {
            heapUsed: Math.round(finalMemoryUsage.heapUsed / 1024 / 1024) + 'MB',
            heapTotal: Math.round(finalMemoryUsage.heapTotal / 1024 / 1024) + 'MB'
          },
          peak: Math.round(Math.max(
            this.performanceMetrics.memoryUsage.heapUsed,
            finalMemoryUsage.heapUsed
          ) / 1024 / 1024) + 'MB'
        },
        buildStages: Object.fromEntries(
          Array.from(this.performanceMetrics.buildStages.entries()).map(([stage, data]) => [
            stage,
            {
              duration: data.duration + 'ms',
              memoryDelta: Math.round(data.memoryDelta / 1024) + 'KB'
            }
          ])
        )
      }
    };
    
    // Save performance report
    const reportPath = 'build-performance-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Performance report saved to ${reportPath}`);
    
    return report;
  }

  // Enhanced validation with retry logic
  async validateWithRetry(validationFunction, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.log(`🔄 Validation attempt ${attempt}/${maxRetries}`);
        return await validationFunction();
      } catch (error) {
        this.log(`❌ Validation attempt ${attempt} failed: ${error.message}`);
        
        if (attempt === maxRetries) {
          throw error;
        }
        
        // Wait before retry with exponential backoff
        const delay = Math.pow(2, attempt) * 1000;
        this.log(`⏳ Waiting ${delay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // Main enhanced build process
  async runEnhancedBuild() {
    this.log('🚀 Starting enhanced build automation...');
    
    try {
      this.startPerformanceTracking();
      
      // Run validations with retry logic
      this.trackBuildStage('validation', 'start');
      await this.validateWithRetry(async () => {
        await this.validateEnvironment();
        await this.validateFiles();
        await this.checkDependencies();
        await this.validateNetwork();
      });
      this.trackBuildStage('validation', 'end');
      
      // Attempt to recover from any existing errors
      if (this.errors.length > 0) {
        this.trackBuildStage('error-recovery', 'start');
        const recoverySuccess = await this.attemptErrorRecovery();
        this.trackBuildStage('error-recovery', 'end');
        
        if (!recoverySuccess && this.errors.length > 0) {
          this.log('❌ Error recovery failed, cannot proceed with build');
          return false;
        }
      }
      
      // Run build if all validations pass
      if (this.errors.length === 0) {
        this.trackBuildStage('build-execution', 'start');
        const buildSuccess = await this.runBuild();
        this.trackBuildStage('build-execution', 'end');
        
        if (!buildSuccess) {
          // Try to recover from build failure
          this.trackBuildStage('build-recovery', 'start');
          const buildRecovery = await this.attemptErrorRecovery();
          this.trackBuildStage('build-recovery', 'end');
          
          if (buildRecovery) {
            // Retry build after recovery
            this.trackBuildStage('build-retry', 'start');
            const retrySuccess = await this.runBuild();
            this.trackBuildStage('build-retry', 'end');
            
            if (!retrySuccess) {
              this.log('❌ Build retry failed after recovery');
              return false;
            }
          } else {
            return false;
          }
        }
      }
      
      // Generate comprehensive reports
      const performanceReport = await this.generatePerformanceReport();
      const buildReport = await this.generateBuildReport();
      
      // Print summary
      this.printEnhancedSummary(performanceReport, buildReport);
      
      return this.errors.length === 0;
      
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'error');
      return false;
    }
  }

  // Enhanced build execution
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

  // Enhanced build report
  async generateBuildReport() {
    this.log('📊 Generating enhanced build report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      success: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      buildLog: this.buildLog,
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      summary: {
        totalChecks: this.buildLog.length,
        errors: this.errors.length,
        warnings: this.warnings.length,
        recoveryAttempts: this.recoveryAttempts.size
      }
    };
    
    // Save report to file
    const reportPath = 'enhanced-build-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Enhanced build report saved to ${reportPath}`);
    
    return report;
  }

  // Enhanced summary with performance metrics
  printEnhancedSummary(performanceReport, buildReport) {
    console.log('\n' + '='.repeat(60));
    console.log('🏁 ENHANCED BUILD AUTOMATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Success: ${buildReport.success ? 'YES' : 'NO'}`);
    console.log(`❌ Errors: ${buildReport.summary.errors}`);
    console.log(`⚠️  Warnings: ${buildReport.summary.warnings}`);
    console.log(`🔧 Recovery Attempts: ${buildReport.summary.recoveryAttempts}`);
    console.log(`📊 Total Checks: ${buildReport.summary.totalChecks}`);
    
    console.log('\n📈 PERFORMANCE METRICS');
    console.log(`⏱️  Total Build Time: ${performanceReport.performance.totalBuildTime}ms`);
    console.log(`⚡ Build Efficiency: ${performanceReport.performance.buildEfficiency}`);
    console.log(`🧠 Peak Memory Usage: ${performanceReport.performance.memoryUsage.peak}`);
    
    if (buildReport.errors.length > 0) {
      console.log('\n❌ ERRORS:');
      buildReport.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (buildReport.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      buildReport.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    console.log('\n📊 BUILD STAGES:');
    Object.entries(performanceReport.performance.buildStages).forEach(([stage, data]) => {
      console.log(`  - ${stage}: ${data.duration}, Memory: ${data.memoryDelta}`);
    });
  }

  // Stub methods for compatibility
  async validateEnvironment() {
    this.log('🔍 Validating build environment...');
    const nodeVersion = process.version;
    this.log(`Node.js version: ${nodeVersion}`);
    
    if (!nodeVersion.startsWith('v20')) {
      this.warnings.push(`Node.js version ${nodeVersion} is not v20.x`);
    }
    
    const requiredEnvVars = ['NODE_VERSION', 'NODE_OPTIONS'];
    for (const envVar of requiredEnvVars) {
      if (process.env[envVar]) {
        this.log(`${envVar}: ${process.env[envVar]}`);
      } else {
        this.warnings.push(`Environment variable ${envVar} not set`);
      }
    }
    
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

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    try {
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
    const criticalEndpoints = [];
    
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
}

// Run if called directly
if (require.main === module) {
  const automation = new EnhancedBuildAutomation();
  automation.runEnhancedBuild().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = EnhancedBuildAutomation;