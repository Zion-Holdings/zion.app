#!/usr/bin/env node

/**
 * Build Automation Runner
 * Executes the build process and handles errors automatically
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildAutomationRunner {
  constructor() {
    this.buildLog = [];
    this.errors = [];
    this.warnings = [];
    this.startTime = Date.now();
  }

  async run() {
    console.log('🚀 Starting Build Automation...');
    console.log('================================');
    
    try {
      // Pre-build health check
      await this.preBuildHealthCheck();
      
      // Run the build
      await this.executeBuild();
      
      // Post-build validation
      await this.postBuildValidation();
      
      // Generate build report
      this.generateBuildReport();
      
      console.log('✅ Build Automation completed successfully');
      
    } catch (error) {
      console.error('❌ Build Automation failed:', error.message);
      this.errors.push(error.message);
      this.generateBuildReport();
      throw error;
    }
  }

  async preBuildHealthCheck() {
    console.log('🔍 Running pre-build health check...');
    
    // Check if package.json exists
    if (!fs.existsSync('package.json')) {
      throw new Error('package.json not found');
    }
    
    // Check if node_modules exists
    if (!fs.existsSync('node_modules')) {
      console.log('📦 Installing dependencies...');
      execSync('npm install', { stdio: 'inherit' });
    }
    
    // Check Node.js version
    const nodeVersion = process.version;
    console.log(`📱 Node.js version: ${nodeVersion}`);
    
    // Check npm version
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`📦 npm version: ${npmVersion}`);
    
    console.log('✅ Pre-build health check completed');
  }

  async executeBuild() {
    console.log('🔨 Executing build process...');
    
    try {
      // Run the build command
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe',
        maxBuffer: 1024 * 1024 * 10 // 10MB buffer
      });
      
      this.buildLog.push('Build output:');
      this.buildLog.push(buildOutput);
      
      console.log('✅ Build completed successfully');
      
    } catch (error) {
      console.error('❌ Build failed, attempting to fix...');
      
      // Try to fix common build issues
      await this.attemptBuildFix();
      
      // Try building again
      try {
        const retryOutput = execSync('npm run build', { 
          encoding: 'utf8',
          stdio: 'pipe',
          maxBuffer: 1024 * 1024 * 10
        });
        
        this.buildLog.push('Retry build output:');
        this.buildLog.push(retryOutput);
        
        console.log('✅ Build completed successfully after fixes');
        
      } catch (retryError) {
        console.error('❌ Build still failing after fixes');
        this.errors.push(`Build failed: ${retryError.message}`);
        throw retryError;
      }
    }
  }

  async attemptBuildFix() {
    console.log('🔧 Attempting to fix build issues...');
    
    try {
      // Fix linting issues
      console.log('  - Fixing linting issues...');
      try {
        execSync('npm run fix:all', { stdio: 'pipe' });
        console.log('    ✅ Linting issues fixed');
      } catch (lintError) {
        console.log('    ⚠️ Could not fix all linting issues');
      }
      
      // Run type checking
      console.log('  - Running type checking...');
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        console.log('    ✅ Type checking passed');
      } catch (typeError) {
        console.log('    ⚠️ Type checking issues found');
        this.warnings.push(`Type checking: ${typeError.message}`);
      }
      
      // Try smart build
      console.log('  - Attempting smart build...');
      try {
        execSync('npm run build:smart', { stdio: 'pipe' });
        console.log('    ✅ Smart build successful');
        return; // Exit early if smart build works
      } catch (smartError) {
        console.log('    ⚠️ Smart build failed');
      }
      
      // Try build recovery
      console.log('  - Attempting build recovery...');
      try {
        execSync('npm run build:recovery', { stdio: 'pipe' });
        console.log('    ✅ Build recovery successful');
      } catch (recoveryError) {
        console.log('    ⚠️ Build recovery failed');
      }
      
    } catch (error) {
      console.log('  ❌ Build fix attempts failed');
      this.errors.push(`Build fix failed: ${error.message}`);
    }
  }

  async postBuildValidation() {
    console.log('🔍 Running post-build validation...');
    
    // Check if .next directory was created
    if (fs.existsSync('.next')) {
      console.log('✅ Next.js build output directory created');
      
      // Check build size
      const buildSize = this.getDirectorySize('.next');
      console.log(`📊 Build size: ${this.formatBytes(buildSize)}`);
      
      if (buildSize > 100 * 1024 * 1024) { // 100MB
        this.warnings.push('Build size is large (>100MB)');
      }
    } else {
      this.errors.push('.next directory not found after build');
    }
    
    // Check for build artifacts
    const buildArtifacts = [
      '.next',
      'out',
      'tsconfig.tsbuildinfo'
    ];
    
    for (const artifact of buildArtifacts) {
      if (fs.existsSync(artifact)) {
        console.log(`✅ Build artifact found: ${artifact}`);
      }
    }
    
    console.log('✅ Post-build validation completed');
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateBuildReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      success: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      buildLog: this.buildLog.slice(-100), // Last 100 lines
      summary: {
        totalErrors: this.errors.length,
        totalWarnings: this.warnings.length,
        buildDuration: duration
      }
    };
    
    // Save report to file
    const reportPath = 'automation/build-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Display summary
    console.log('\n📊 Build Report Summary:');
    console.log('==========================');
    console.log(`⏱️  Duration: ${duration}ms`);
    console.log(`❌ Errors: ${this.errors.length}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}`);
    console.log(`📁 Report saved to: ${reportPath}`);
    
    if (this.errors.length > 0) {
      console.log('\n❌ Build Errors:');
      this.errors.forEach((error, index) => {
        console.log(`  ${index + 1}. ${error}`);
      });
    }
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️  Build Warnings:');
      this.warnings.forEach((warning, index) => {
        console.log(`  ${index + 1}. ${warning}`);
      });
    }
  }
}

// CLI interface
if (require.main === module) {
  const runner = new BuildAutomationRunner();
  runner.run().catch(console.error);
}

module.exports = BuildAutomationRunner;