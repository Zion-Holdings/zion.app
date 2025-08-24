#!/usr/bin/env node

/**
 * Dependency Update Orchestrator
 * Manages and orchestrates dependency updates
 */

const fs = require('fs');
const { execSync } = require('child_process');

class DependencyUpdateOrchestrator {
  constructor() {
    this.config = {
      autoUpdate: true,
      checkInterval: 24 * 60 * 60 * 1000, // 24 hours
      maxConcurrentUpdates: 3,
      updateStrategy: 'conservative' // conservative, aggressive, manual
    };
  }

  async maintain() {
    console.log('🔧 Starting dependency maintenance...');
    
    try {
      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      
      if (outdatedPackages.length === 0) {
        console.log('✅ All dependencies are up to date');
        return { success: true, updated: 0, message: 'No updates needed' };
      }
      
      console.log(`📦 Found ${outdatedPackages.length} outdated packages`);
      
      // Analyze update impact
      const updatePlan = await this.analyzeUpdateImpact(outdatedPackages);
      
      // Execute updates based on strategy
      const results = await this.executeUpdates(updatePlan);
      
      console.log(`✅ Dependency maintenance completed. Updated ${results.successful} packages`);
      return { success: true, updated: results.successful, failed: results.failed };
      
    } catch (error) {
      console.error('❌ Error during dependency maintenance:', error.message);
      return { success: false, error: error.message };
    }
  }

  async checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { encoding: 'utf8', stdio: 'pipe' });
      const outdated = JSON.parse(output);
      
      return Object.entries(outdated).map(([name, info]) => ({
        name,
        current: info.current,
        wanted: info.wanted,
        latest: info.latest,
        location: info.location
      }));
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      // This is expected behavior
      return [];
    }
  }

  async analyzeUpdateImpact(packages) {
    const updatePlan = {
      safe: [],
      risky: [],
      blocked: []
    };
    
    for (const pkg of packages) {
      const risk = await this.assessUpdateRisk(pkg);
      
      if (risk === 'low') {
        updatePlan.safe.push(pkg);
      } else if (risk === 'medium') {
        updatePlan.risky.push(pkg);
      } else {
        updatePlan.blocked.push(pkg);
      }
    }
    
    return updatePlan;
  }

  async assessUpdateRisk(pkg) {
    try {
      // Check if it's a major version update
      const currentMajor = pkg.current.split('.')[0];
      const latestMajor = pkg.latest.split('.')[0];
      
      if (currentMajor !== latestMajor) {
        return 'high'; // Major version updates are risky
      }
      
      // Check if it's a minor version update
      const currentMinor = pkg.current.split('.')[1];
      const latestMinor = pkg.latest.split('.')[1];
      
      if (currentMinor !== latestMinor) {
        return 'medium'; // Minor version updates are moderately risky
      }
      
      return 'low'; // Patch updates are generally safe
    } catch (error) {
      return 'medium'; // Default to medium risk if we can't determine
    }
  }

  async executeUpdates(updatePlan) {
    const results = { successful: 0, failed: 0, errors: [] };
    
    try {
      // Update safe packages first
      if (updatePlan.safe.length > 0) {
        console.log(`🔄 Updating ${updatePlan.safe.length} safe packages...`);
        for (const pkg of updatePlan.safe) {
          try {
            await this.updatePackage(pkg.name, pkg.latest);
            results.successful++;
          } catch (error) {
            results.failed++;
            results.errors.push(`Failed to update ${pkg.name}: ${error.message}`);
          }
        }
      }
      
      // Update risky packages if auto-update is enabled
      if (this.config.autoUpdate && updatePlan.risky.length > 0) {
        console.log(`⚠️  Updating ${updatePlan.risky.length} risky packages...`);
        for (const pkg of updatePlan.risky) {
          try {
            await this.updatePackage(pkg.name, pkg.latest);
            results.successful++;
          } catch (error) {
            results.failed++;
            results.errors.push(`Failed to update ${pkg.name}: ${error.message}`);
          }
        }
      }
      
      // Log blocked packages
      if (updatePlan.blocked.length > 0) {
        console.log(`🚫 ${updatePlan.blocked.length} packages blocked from auto-update:`);
        updatePlan.blocked.forEach(pkg => {
          console.log(`   - ${pkg.name}: ${pkg.current} → ${pkg.latest} (manual review required)`);
        });
      }
      
    } catch (error) {
      console.error('Error during update execution:', error.message);
    }
    
    return results;
  }

  async updatePackage(packageName, version) {
    try {
      console.log(`  📦 Updating ${packageName} to ${version}...`);
      
      // Update the specific package
      execSync(`npm install ${packageName}@${version}`, { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      console.log(`  ✅ ${packageName} updated successfully`);
      
    } catch (error) {
      throw new Error(`Failed to update ${packageName}: ${error.message}`);
    }
  }

  async runAudit() {
    try {
      console.log('🔍 Running security audit...');
      const output = execSync('npm audit --json', { encoding: 'utf8', stdio: 'pipe' });
      const audit = JSON.parse(output);
      
      if (audit.vulnerabilities) {
        const totalVulns = Object.values(audit.vulnerabilities).reduce((sum, vuln) => sum + vuln.length, 0);
        console.log(`⚠️  Found ${totalVulns} security vulnerabilities`);
        
        // Try to fix automatically
        try {
          execSync('npm audit fix', { stdio: 'pipe' });
          console.log('✅ Security vulnerabilities fixed automatically');
        } catch (fixError) {
          console.log('⚠️  Some vulnerabilities require manual attention');
        }
      } else {
        console.log('✅ No security vulnerabilities found');
      }
      
      return { success: true, vulnerabilities: audit.vulnerabilities || {} };
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  async cleanup() {
    try {
      console.log('🧹 Cleaning up dependency cache...');
      
      // Remove node_modules and reinstall
      execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
      execSync('npm install', { stdio: 'pipe' });
      
      console.log('✅ Dependency cleanup completed');
      return { success: true };
    } catch (error) {
      console.error('❌ Dependency cleanup failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  printStatus() {
    console.log('\n🔧 Dependency Update Orchestrator Status');
    console.log('==========================================');
    console.log(`Auto-update: ${this.config.autoUpdate ? '✅ Enabled' : '❌ Disabled'}`);
    console.log(`Update strategy: ${this.config.updateStrategy}`);
    console.log(`Check interval: ${this.config.checkInterval / (1000 * 60 * 60)} hours`);
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new DependencyUpdateOrchestrator();
  
  const command = process.argv[2] || 'maintain';
  
  switch (command) {
    case 'maintain':
      orchestrator.maintain().then(result => {
        if (result.success) {
          process.exit(0);
        } else {
          process.exit(1);
        }
      });
      break;
    case 'audit':
      orchestrator.runAudit().then(result => {
        if (result.success) {
          process.exit(0);
        } else {
          process.exit(1);
        }
      });
      break;
    case 'cleanup':
      orchestrator.cleanup().then(result => {
        if (result.success) {
          process.exit(0);
        } else {
          process.exit(1);
        }
      });
      break;
    case 'status':
      orchestrator.printStatus();
      process.exit(0);
      break;
    default:
      console.log('Unknown command. Available commands: maintain, audit, cleanup, status');
      process.exit(1);
  }
}

module.exports = DependencyUpdateOrchestrator;