#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");

class DependencyHealthChecker {
  constructor() {
    this.packageJsonPath = path.resolve(__dirname, "../package.json");
    this.packageLockPath = path.resolve(__dirname, "../package-lock.json");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.backupDir = path.resolve(__dirname, "backups");
    this.healthData = {};
    this.securityIssues = [];
    this.updateRecommendations = [];
    
    this.ensureDirectories();
    this.loadConfiguration();
  }

  ensureDirectories() {
    [this.reportsDir, this.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    this.config = {
      autoUpdate: {
        patch: true,
        minor: true,
        major: false,
        security: true
      },
      maxConcurrentUpdates: 5,
      rollbackOnFailure: true,
      testAfterUpdate: true,
      excludePackages: [
        'typescript', // Often requires manual migration
        'next', // Major version updates need testing
        'react', // Major version updates need testing
        'react-dom' // Major version updates need testing
      ],
      criticalPackages: [
        'eslint',
        'prettier',
        'husky',
        'lint-staged'
      ]
    };
  }

  async checkDependencyHealth() {
    console.log("🔍 Checking dependency health...");
    
    try {
      // Backup current state
      await this.backupCurrentState();
      
      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      
      // Check for security vulnerabilities
      const securityVulnerabilities = await this.checkSecurityVulnerabilities();
      
      // Analyze dependency health
      const healthAnalysis = await this.analyzeDependencyHealth(outdatedPackages, securityVulnerabilities);
      
      // Generate update recommendations
      this.updateRecommendations = this.generateUpdateRecommendations(healthAnalysis);
      
      // Save health report
      this.saveHealthReport(healthAnalysis);
      
      // Auto-update if configured
      if (this.shouldAutoUpdate(healthAnalysis)) {
        await this.performAutoUpdate(healthAnalysis);
      }
      
      return healthAnalysis;
      
    } catch (error) {
      console.error("❌ Error checking dependency health:", error);
      throw error;
    }
  }

  async backupCurrentState() {
    console.log("💾 Backing up current dependency state...");
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(this.backupDir, `deps-${timestamp}`);
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Backup package.json and package-lock.json
    if (fs.existsSync(this.packageJsonPath)) {
      fs.copyFileSync(this.packageJsonPath, path.join(backupDir, 'package.json'));
    }
    
    if (fs.existsSync(this.packageLockPath)) {
      fs.copyFileSync(this.packageLockPath, path.join(backupDir, 'package-lock.json'));
    }
    
    // Backup node_modules info
    try {
      const nodeModulesInfo = execSync('npm list --depth=0 --json', { 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      fs.writeFileSync(path.join(backupDir, 'node-modules-info.json'), nodeModulesInfo);
    } catch (error) {
      console.warn("⚠️  Could not backup node_modules info:", error.message);
    }
    
    console.log(`✅ Backup saved to: ${backupDir}`);
    return backupDir;
  }

  async checkOutdatedPackages() {
    console.log("📦 Checking for outdated packages...");
    
    try {
      const output = execSync('npm outdated --json', { 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      
      const outdated = JSON.parse(output);
      console.log(`Found ${Object.keys(outdated).length} outdated packages`);
      
      return outdated;
    } catch (error) {
      if (error.status === 1) {
        // npm outdated returns 1 when there are outdated packages
        const output = error.stdout?.toString() || '{}';
        try {
          const outdated = JSON.parse(output);
          console.log(`Found ${Object.keys(outdated).length} outdated packages`);
          return outdated;
        } catch (parseError) {
          console.warn("⚠️  Could not parse outdated packages output");
          return {};
        }
      } else {
        console.warn("⚠️  Could not check outdated packages:", error.message);
        return {};
      }
    }
  }

  async checkSecurityVulnerabilities() {
    console.log("🔒 Checking for security vulnerabilities...");
    
    try {
      const output = execSync('npm audit --json', { 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      
      const audit = JSON.parse(output);
      const vulnerabilities = audit.vulnerabilities || {};
      
      console.log(`Found ${Object.keys(vulnerabilities).length} packages with vulnerabilities`);
      
      return {
        vulnerabilities,
        summary: audit.metadata?.vulnerabilities || {},
        audit: audit
      };
    } catch (error) {
      if (error.status === 1) {
        // npm audit returns 1 when vulnerabilities are found
        const output = error.stdout?.toString() || '{}';
        try {
          const audit = JSON.parse(output);
          const vulnerabilities = audit.vulnerabilities || {};
          
          console.log(`Found ${Object.keys(vulnerabilities).length} packages with vulnerabilities`);
          
          return {
            vulnerabilities,
            summary: audit.metadata?.vulnerabilities || {},
            audit: audit
          };
        } catch (parseError) {
          console.warn("⚠️  Could not parse security audit output");
          return { vulnerabilities: {}, summary: {}, audit: {} };
        }
      } else {
        console.warn("⚠️  Could not check security vulnerabilities:", error.message);
        return { vulnerabilities: {}, summary: {}, audit: {} };
      }
    }
  }

  async analyzeDependencyHealth(outdatedPackages, securityData) {
    console.log("📊 Analyzing dependency health...");
    
    const analysis = {
      timestamp: new Date().toISOString(),
      totalPackages: 0,
      outdatedPackages: {},
      securityIssues: {},
      healthScore: 100,
      recommendations: [],
      criticalIssues: [],
      updatePlan: {}
    };
    
    // Analyze outdated packages
    for (const [packageName, packageInfo] of Object.entries(outdatedPackages)) {
      const current = packageInfo.current;
      const latest = packageInfo.latest;
      const wanted = packageInfo.wanted;
      
      const updateType = this.determineUpdateType(current, wanted, latest);
      const priority = this.determineUpdatePriority(packageName, updateType, securityData.vulnerabilities[packageName]);
      
      analysis.outdatedPackages[packageName] = {
        current,
        wanted,
        latest,
        updateType,
        priority,
        securityRisk: !!securityData.vulnerabilities[packageName]
      };
      
      // Calculate health score impact
      if (priority === 'critical') {
        analysis.healthScore -= 20;
        analysis.criticalIssues.push(`Critical: ${packageName} is ${updateType} versions behind`);
      } else if (priority === 'high') {
        analysis.healthScore -= 10;
      } else if (priority === 'medium') {
        analysis.healthScore -= 5;
      }
    }
    
    // Analyze security issues
    for (const [packageName, vulnInfo] of Object.entries(securityData.vulnerabilities)) {
      const severity = vulnInfo.severity || 'moderate';
      const severityScore = this.getSeverityScore(severity);
      
      analysis.securityIssues[packageName] = {
        severity,
        severityScore,
        via: vulnInfo.via || [],
        title: vulnInfo.title || 'Unknown vulnerability',
        recommendation: vulnInfo.recommendation || 'Update package'
      };
      
      // Security issues heavily impact health score
      if (severity === 'critical') {
        analysis.healthScore -= 30;
        analysis.criticalIssues.push(`Security: ${packageName} has critical vulnerability`);
      } else if (severity === 'high') {
        analysis.healthScore -= 20;
      } else if (severity === 'moderate') {
        analysis.healthScore -= 10;
      }
    }
    
    // Ensure health score doesn't go below 0
    analysis.healthScore = Math.max(0, analysis.healthScore);
    
    // Generate update plan
    analysis.updatePlan = this.generateUpdatePlan(analysis);
    
    return analysis;
  }

  determineUpdateType(current, wanted, latest) {
    const currentParts = current.split('.').map(Number);
    const wantedParts = wanted.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (currentParts[0] !== latestParts[0]) {
      return 'major';
    } else if (currentParts[1] !== latestParts[1]) {
      return 'minor';
    } else {
      return 'patch';
    }
  }

  determineUpdatePriority(packageName, updateType, hasVulnerability) {
    // Security vulnerabilities get highest priority
    if (hasVulnerability) {
      return 'critical';
    }
    
    // Critical packages get high priority
    if (this.config.criticalPackages.includes(packageName)) {
      return 'high';
    }
    
    // Excluded packages get low priority
    if (this.config.excludePackages.includes(packageName)) {
      return 'low';
    }
    
    // Update type affects priority
    switch (updateType) {
      case 'major':
        return 'medium'; // Major updates need careful consideration
      case 'minor':
        return 'high';
      case 'patch':
        return 'medium';
      default:
        return 'medium';
    }
  }

  getSeverityScore(severity) {
    const scores = {
      'critical': 100,
      'high': 75,
      'moderate': 50,
      'low': 25,
      'info': 10
    };
    
    return scores[severity.toLowerCase()] || 0;
  }

  generateUpdatePlan(analysis) {
    const plan = {
      immediate: [],
      scheduled: [],
      manual: [],
      estimated: {
        time: 0,
        risk: 'low',
        packages: 0
      }
    };
    
    // Categorize updates
    for (const [packageName, packageInfo] of Object.entries(analysis.outdatedPackages)) {
      const update = {
        package: packageName,
        from: packageInfo.current,
        to: packageInfo.latest,
        type: packageInfo.updateType,
        priority: packageInfo.priority,
        securityRisk: packageInfo.securityRisk
      };
      
      if (packageInfo.priority === 'critical' || packageInfo.securityRisk) {
        plan.immediate.push(update);
      } else if (packageInfo.priority === 'high') {
        plan.scheduled.push(update);
      } else {
        plan.manual.push(update);
      }
    }
    
    // Calculate estimates
    plan.estimated.packages = plan.immediate.length + plan.scheduled.length;
    plan.estimated.time = Math.ceil(plan.estimated.packages * 2); // 2 minutes per package
    plan.estimated.risk = this.calculateUpdateRisk(plan);
    
    return plan;
  }

  calculateUpdateRisk(plan) {
    const criticalCount = plan.immediate.filter(u => u.priority === 'critical').length;
    const majorUpdates = plan.immediate.filter(u => u.type === 'major').length + 
                        plan.scheduled.filter(u => u.type === 'major').length;
    
    if (criticalCount > 3 || majorUpdates > 2) {
      return 'high';
    } else if (criticalCount > 1 || majorUpdates > 1) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  generateUpdateRecommendations(analysis) {
    const recommendations = [];
    
    // Critical issues
    if (analysis.criticalIssues.length > 0) {
      recommendations.push({
        priority: 'critical',
        message: 'Immediate action required',
        actions: analysis.criticalIssues.map(issue => `• ${issue}`)
      });
    }
    
    // Security updates
    const securityPackages = Object.keys(analysis.securityIssues);
    if (securityPackages.length > 0) {
      recommendations.push({
        priority: 'high',
        message: `Update ${securityPackages.length} packages with security vulnerabilities`,
        actions: securityPackages.map(pkg => `• ${pkg}: ${analysis.securityIssues[pkg].severity} severity`)
      });
    }
    
    // Outdated packages
    const outdatedCount = Object.keys(analysis.outdatedPackages).length;
    if (outdatedCount > 0) {
      recommendations.push({
        priority: 'medium',
        message: `Update ${outdatedCount} outdated packages`,
        actions: [
          `• ${outdatedCount} packages are behind latest versions`,
          '• Consider automated updates for patch and minor versions',
          '• Review major version updates manually'
        ]
      });
    }
    
    // Health score recommendations
    if (analysis.healthScore < 70) {
      recommendations.push({
        priority: 'high',
        message: 'Dependency health score is low',
        actions: [
          '• Focus on security updates first',
          '• Update critical packages',
          '• Consider dependency modernization'
        ]
      });
    }
    
    return recommendations;
  }

  shouldAutoUpdate(analysis) {
    // Only auto-update if health score is low or there are critical issues
    return analysis.healthScore < 70 || analysis.criticalIssues.length > 0;
  }

  async performAutoUpdate(analysis) {
    console.log("🚀 Performing automatic dependency updates...");
    
    try {
      const updatePlan = analysis.updatePlan;
      const packagesToUpdate = [...updatePlan.immediate, ...updatePlan.scheduled];
      
      if (packagesToUpdate.length === 0) {
        console.log("✅ No packages to update automatically");
        return;
      }
      
      console.log(`📦 Updating ${packagesToUpdate.length} packages...`);
      
      // Group updates by type for safer updates
      const patchUpdates = packagesToUpdate.filter(u => u.type === 'patch');
      const minorUpdates = packagesToUpdate.filter(u => u.type === 'minor');
      const majorUpdates = packagesToUpdate.filter(u => u.type === 'major');
      
      // Update patch versions first (safest)
      if (patchUpdates.length > 0) {
        await this.updatePackages(patchUpdates, 'patch');
      }
      
      // Update minor versions (moderate risk)
      if (minorUpdates.length > 0) {
        await this.updatePackages(minorUpdates, 'minor');
      }
      
      // Major updates require manual review
      if (majorUpdates.length > 0) {
        console.log(`⚠️  ${majorUpdates.length} major updates require manual review:`);
        majorUpdates.forEach(u => console.log(`  • ${u.package}: ${u.from} → ${u.to}`));
      }
      
      // Test the updated dependencies
      if (this.config.testAfterUpdate) {
        await this.testUpdatedDependencies();
      }
      
      console.log("✅ Automatic dependency updates completed");
      
    } catch (error) {
      console.error("❌ Error during automatic update:", error);
      
      // Rollback if configured
      if (this.config.rollbackOnFailure) {
        await this.rollbackUpdates();
      }
      
      throw error;
    }
  }

  async updatePackages(packages, updateType) {
    if (packages.length === 0) return;
    
    console.log(`🔄 Updating ${packages.length} ${updateType} packages...`);
    
    try {
      // Use npm-check-updates for more control
      const packageNames = packages.map(p => p.package).join(' ');
      
      if (updateType === 'patch') {
        execSync(`npm update ${packageNames}`, { stdio: 'inherit' });
      } else {
        // For minor updates, we need to be more careful
        for (const pkg of packages) {
          try {
            execSync(`npm install ${pkg.package}@${pkg.to}`, { stdio: 'inherit' });
          } catch (error) {
            console.warn(`⚠️  Failed to update ${pkg.package}:`, error.message);
          }
        }
      }
      
      console.log(`✅ Updated ${packages.length} ${updateType} packages`);
      
    } catch (error) {
      console.error(`❌ Error updating ${updateType} packages:`, error.message);
      throw error;
    }
  }

  async testUpdatedDependencies() {
    console.log("🧪 Testing updated dependencies...");
    
    try {
      // Run basic tests
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log("✅ Type check passed");
      
      execSync('npm run lint', { stdio: 'inherit' });
      console.log("✅ Linting passed");
      
      // Try to build (non-blocking)
      try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log("✅ Build passed");
      } catch (error) {
        console.warn("⚠️  Build failed after dependency update - manual review needed");
      }
      
    } catch (error) {
      console.error("❌ Dependency tests failed:", error.message);
      throw error;
    }
  }

  async rollbackUpdates() {
    console.log("🔄 Rolling back dependency updates...");
    
    try {
      // Find the most recent backup
      const backups = fs.readdirSync(this.backupDir)
        .filter(dir => dir.startsWith('deps-'))
        .sort()
        .reverse();
      
      if (backups.length === 0) {
        console.warn("⚠️  No backups found for rollback");
        return;
      }
      
      const latestBackup = path.join(this.backupDir, backups[0]);
      
      // Restore package files
      fs.copyFileSync(path.join(latestBackup, 'package.json'), this.packageJsonPath);
      fs.copyFileSync(path.join(latestBackup, 'package-lock.json'), this.packageLockPath);
      
      // Reinstall dependencies
      execSync('npm ci', { stdio: 'inherit' });
      
      console.log("✅ Rollback completed successfully");
      
    } catch (error) {
      console.error("❌ Rollback failed:", error.message);
      throw error;
    }
  }

  saveHealthReport(analysis) {
    const reportPath = path.join(this.reportsDir, 'dependency-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
    
    console.log(`📊 Health report saved to: ${reportPath}`);
  }

  printHealthSummary(analysis) {
    console.log("\n" + "=".repeat(60));
    console.log("📦 DEPENDENCY HEALTH SUMMARY");
    console.log("=".repeat(60));
    
    console.log(`Health Score: ${analysis.healthScore}/100`);
    console.log(`Total Packages: ${analysis.totalPackages}`);
    console.log(`Outdated Packages: ${Object.keys(analysis.outdatedPackages).length}`);
    console.log(`Security Issues: ${Object.keys(analysis.securityIssues).length}`);
    console.log(`Critical Issues: ${analysis.criticalIssues.length}`);
    
    if (analysis.updatePlan.estimated.packages > 0) {
      console.log(`\n📋 UPDATE PLAN:`);
      console.log(`Immediate: ${analysis.updatePlan.immediate.length}`);
      console.log(`Scheduled: ${analysis.updatePlan.scheduled.length}`);
      console.log(`Manual: ${analysis.updatePlan.manual.length}`);
      console.log(`Estimated Time: ${analysis.updatePlan.estimated.time} minutes`);
      console.log(`Risk Level: ${analysis.updatePlan.estimated.risk}`);
    }
    
    if (this.updateRecommendations.length > 0) {
      console.log(`\n💡 RECOMMENDATIONS:`);
      this.updateRecommendations.forEach(rec => {
        console.log(`\n${rec.priority.toUpperCase()}: ${rec.message}`);
        rec.actions.forEach(action => console.log(`  ${action}`));
      });
    }
    
    console.log("=".repeat(60));
  }
}

// Run the dependency health checker
async function main() {
  try {
    const checker = new DependencyHealthChecker();
    
    // Check dependency health
    const analysis = await checker.checkDependencyHealth();
    
    // Print summary
    checker.printHealthSummary(analysis);
    
  } catch (error) {
    console.error("❌ Error running dependency health checker:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = DependencyHealthChecker;