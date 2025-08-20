#!/usr/bin/env node

/**
 * Build Guardian
 * Monitors and protects the build process
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildGuardian {
  constructor() {
    this.status = {
      isHealthy: true,
      lastCheck: null,
      issues: [],
      warnings: [],
      recommendations: []
    };
  }

  async guard() {
    console.log('🛡️  Build Guardian is active...');
    
    try {
      // Perform health checks
      await this.checkBuildHealth();
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkFileSystem();
      
      // Generate report
      this.generateReport();
      
      if (this.status.isHealthy) {
        console.log('✅ Build system is healthy and ready');
        return { healthy: true, status: this.status };
      } else {
        console.log('⚠️  Build system has issues that need attention');
        return { healthy: false, status: this.status };
      }
    } catch (error) {
      console.error('❌ Build Guardian encountered an error:', error.message);
      this.status.isHealthy = false;
      this.status.issues.push(`Guardian error: ${error.message}`);
      return { healthy: false, status: this.status };
    }
  }

  async checkBuildHealth() {
    console.log('  🔍 Checking build health...');
    
    try {
      // Check if build artifacts exist
      if (fs.existsSync('.next')) {
        const stats = fs.statSync('.next');
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        
        if (ageInHours > 24) {
          this.status.warnings.push('Build artifacts are older than 24 hours');
        }
      } else {
        this.status.warnings.push('No build artifacts found - consider running a build');
      }
      
      // Check package-lock.json
      if (!fs.existsSync('package-lock.json')) {
        this.status.issues.push('package-lock.json is missing - run npm install');
        this.status.isHealthy = false;
      }
      
    } catch (error) {
      this.status.issues.push(`Build health check error: ${error.message}`);
      this.status.isHealthy = false;
    }
  }

  async checkDependencies() {
    console.log('  📦 Checking dependencies...');
    
    try {
      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        this.status.issues.push('node_modules directory is missing - run npm install');
        this.status.isHealthy = false;
        return;
      }
      
      // Check for outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8', stdio: 'pipe' });
        const outdated = JSON.parse(outdatedOutput);
        
        if (Object.keys(outdated).length > 0) {
          this.status.warnings.push(`${Object.keys(outdated).length} packages are outdated`);
        }
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        // This is expected behavior
      }
      
    } catch (error) {
      this.status.issues.push(`Dependency check error: ${error.message}`);
      this.status.isHealthy = false;
    }
  }

  async checkConfiguration() {
    console.log('  ⚙️  Checking configuration...');
    
    try {
      // Check essential config files
      const requiredFiles = [
        'package.json',
        'tsconfig.json',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.js'
      ];
      
      for (const file of requiredFiles) {
        if (!fs.existsSync(file)) {
          this.status.issues.push(`Required config file missing: ${file}`);
          this.status.isHealthy = false;
        }
      }
      
      // Check package.json scripts
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const requiredScripts = ['dev', 'build', 'start'];
        
        for (const script of requiredScripts) {
          if (!packageJson.scripts || !packageJson.scripts[script]) {
            this.status.issues.push(`Required script missing: ${script}`);
            this.status.isHealthy = false;
          }
        }
      }
      
    } catch (error) {
      this.status.issues.push(`Configuration check error: ${error.message}`);
      this.status.isHealthy = false;
    }
  }

  async checkFileSystem() {
    console.log('  💾 Checking file system...');
    
    try {
      // Check for common problematic files
      const problematicPatterns = [
        '*.log',
        '*.tmp',
        '*.pid',
        '.DS_Store'
      ];
      
      // Check automation logs directory
      const logsDir = 'automation/logs';
      if (fs.existsSync(logsDir)) {
        const logFiles = fs.readdirSync(logsDir);
        if (logFiles.length > 100) {
          this.status.warnings.push('Large number of log files detected - consider cleanup');
        }
      }
      
      // Check for PID files
      const pidFiles = this.findFiles('.pid');
      if (pidFiles.length > 0) {
        this.status.warnings.push(`${pidFiles.length} PID files found - check for stale processes`);
      }
      
    } catch (error) {
      this.status.issues.push(`File system check error: ${error.message}`);
      this.status.isHealthy = false;
    }
  }

  generateReport() {
    this.status.lastCheck = new Date().toISOString();
    
    // Generate recommendations based on issues
    if (this.status.issues.length > 0) {
      this.status.recommendations.push('Address critical issues before building');
    }
    
    if (this.status.warnings.length > 0) {
      this.status.recommendations.push('Consider addressing warnings for optimal performance');
    }
    
    if (!this.status.isHealthy) {
      this.status.recommendations.push('Run npm install to restore dependencies');
    }
  }

  findFiles(pattern) {
    const files = [];
    const searchDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            searchDir(fullPath);
          } else if (stat.isFile() && item.endsWith(pattern.replace('*', ''))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories we can't access
      }
    };
    
    searchDir('.');
    return files;
  }

  printStatus() {
    console.log('\n🛡️  Build Guardian Status Report');
    console.log('===================================');
    console.log(`Status: ${this.status.isHealthy ? '✅ Healthy' : '❌ Issues Detected'}`);
    console.log(`Last Check: ${this.status.lastCheck}`);
    
    if (this.status.issues.length > 0) {
      console.log('\n❌ Issues:');
      this.status.issues.forEach(issue => console.log(`  - ${issue}`));
    }
    
    if (this.status.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      this.status.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    if (this.status.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.status.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
  }
}

// Run if called directly
if (require.main === module) {
  const guardian = new BuildGuardian();
  guardian.guard().then(result => {
    guardian.printStatus();
    process.exit(result.healthy ? 0 : 1);
  });
}

module.exports = BuildGuardian;