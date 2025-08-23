#!/usr/bin/env node

/**
 * Smart Dependency Manager
 * Intelligent dependency updates with risk assessment and automated management
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

class SmartDependencyManager {
  constructor() {
    this.riskLevels = {
      low: 'low',
      medium: 'medium',
      high: 'high',
      critical: 'critical'
    };
    
    this.updateStrategies = {
      automatic: 'automatic',
      manual: 'manual',
      staged: 'staged',
      blocked: 'blocked'
    };
    
    this.dependencyCache = new Map();
    this.updateHistory = [];
    this.riskProfiles = this.loadRiskProfiles();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  loadRiskProfiles() {
    // Load predefined risk profiles for common packages
    const riskProfiles = {
      // High-risk packages that require careful updates
      'next': { riskLevel: 'high', requiresTesting: true, breakingChanges: true },
      'react': { riskLevel: 'high', requiresTesting: true, breakingChanges: true },
      'typescript': { riskLevel: 'high', requiresTesting: true, breakingChanges: true },
      'webpack': { riskLevel: 'high', requiresTesting: true, breakingChanges: true },
      
      // Medium-risk packages with potential breaking changes
      'eslint': { riskLevel: 'medium', requiresTesting: true, breakingChanges: true },
      'prettier': { riskLevel: 'medium', requiresTesting: false, breakingChanges: false },
      'tailwindcss': { riskLevel: 'medium', requiresTesting: true, breakingChanges: true },
      
      // Low-risk packages that can be updated automatically
      'lodash': { riskLevel: 'low', requiresTesting: false, breakingChanges: false },
      'axios': { riskLevel: 'low', requiresTesting: false, breakingChanges: false },
      'uuid': { riskLevel: 'low', requiresTesting: false, breakingChanges: false }
    };
    
    return riskProfiles;
  }

  async analyzeDependencies() {
    this.log('🔍 Analyzing dependencies for smart updates...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const analysis = {
        timestamp: new Date().toISOString(),
        totalDependencies: Object.keys(dependencies).length,
        outdated: [],
        vulnerable: [],
        riskAssessment: {},
        updateRecommendations: []
      };
      
      // Get outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
        const outdated = JSON.parse(outdatedOutput);
        analysis.outdated = Object.entries(outdated).map(([name, info]) => ({
          name,
          current: info.current,
          latest: info.latest,
          wanted: info.wanted,
          location: info.location
        }));
      } catch (error) {
        this.log('ℹ️  No outdated packages found');
      }
      
      // Get security vulnerabilities
      try {
        const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
        const audit = JSON.parse(auditOutput);
        
        if (audit.metadata && audit.metadata.vulnerabilities) {
          analysis.vulnerable = this.processVulnerabilities(audit);
        }
      } catch (error) {
        this.log('⚠️  Could not run security audit', 'warning');
      }
      
      // Assess risk for each outdated package
      for (const pkg of analysis.outdated) {
        const riskAssessment = await this.assessPackageRisk(pkg);
        analysis.riskAssessment[pkg.name] = riskAssessment;
      }
      
      // Generate update recommendations
      analysis.updateRecommendations = this.generateUpdateRecommendations(analysis);
      
      // Save analysis
      await this.saveDependencyAnalysis(analysis);
      
      this.log(`✅ Dependency analysis completed. Found ${analysis.outdated.length} outdated packages`);
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Dependency analysis failed: ${error.message}`, 'error');
      throw error;
    }
  }

  processVulnerabilities(audit) {
    const vulnerabilities = [];
    
    if (audit.advisories) {
      for (const [id, advisory] of Object.entries(audit.advisories)) {
        vulnerabilities.push({
          id,
          title: advisory.title,
          severity: advisory.severity,
          package: advisory.module_name,
          vulnerableVersions: advisory.vulnerable_versions,
          patchedVersions: advisory.patched_versions,
          recommendation: advisory.recommendation
        });
      }
    }
    
    return vulnerabilities;
  }

  async assessPackageRisk(packageInfo) {
    const { name, current, latest } = packageInfo;
    
    // Check predefined risk profiles
    if (this.riskProfiles[name]) {
      const profile = this.riskProfiles[name];
      return {
        riskLevel: profile.riskLevel,
        requiresTesting: profile.requiresTesting,
        breakingChanges: profile.breakingChanges,
        confidence: 'high',
        reason: 'Predefined risk profile'
      };
    }
    
    // Analyze version changes
    const versionRisk = this.analyzeVersionRisk(current, latest);
    
    // Check for breaking changes indicators
    const breakingChangeRisk = await this.checkBreakingChanges(name, current, latest);
    
    // Check package popularity and maintenance
    const maintenanceRisk = await this.assessMaintenanceRisk(name);
    
    // Calculate overall risk
    const overallRisk = this.calculateOverallRisk(versionRisk, breakingChangeRisk, maintenanceRisk);
    
    return {
      riskLevel: overallRisk.level,
      requiresTesting: overallRisk.requiresTesting,
      breakingChanges: overallRisk.breakingChanges,
      confidence: overallRisk.confidence,
      reason: overallRisk.reason,
      details: {
        versionRisk,
        breakingChangeRisk,
        maintenanceRisk
      }
    };
  }

  analyzeVersionRisk(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    // Major version change (breaking changes likely)
    if (latestParts[0] > currentParts[0]) {
      return {
        level: 'high',
        type: 'major',
        description: 'Major version update - breaking changes likely'
      };
    }
    
    // Minor version change (new features, potentially breaking)
    if (latestParts[1] > currentParts[1]) {
      return {
        level: 'medium',
        type: 'minor',
        description: 'Minor version update - new features, test thoroughly'
      };
    }
    
    // Patch version change (bug fixes, generally safe)
    if (latestParts[2] > currentParts[2]) {
      return {
        level: 'low',
        type: 'patch',
        description: 'Patch update - bug fixes, generally safe'
      };
    }
    
    return {
      level: 'low',
      type: 'none',
      description: 'No version change needed'
    };
  }

  async checkBreakingChanges(packageName, currentVersion, latestVersion) {
    try {
      // Check for breaking changes in changelog or release notes
      const breakingChanges = await this.fetchBreakingChanges(packageName, currentVersion, latestVersion);
      
      return {
        hasBreakingChanges: breakingChanges.length > 0,
        changes: breakingChanges,
        confidence: breakingChanges.length > 0 ? 'high' : 'medium'
      };
    } catch (error) {
      return {
        hasBreakingChanges: false,
        changes: [],
        confidence: 'low',
        error: error.message
      };
    }
  }

  async fetchBreakingChanges(packageName, currentVersion, latestVersion) {
    // This is a simplified implementation
    // In production, you'd integrate with npm registry API, GitHub releases, etc.
    
    const breakingChanges = [];
    
    // Check for common breaking change indicators in package.json
    try {
      const currentPackageJson = JSON.parse(
        execSync(`npm view ${packageName}@${currentVersion} package.json --json`, { encoding: 'utf8' })
      );
      
      const latestPackageJson = JSON.parse(
        execSync(`npm view ${packageName}@${latestVersion} package.json --json`, { encoding: 'utf8' })
      );
      
      // Check for peer dependency changes
      if (currentPackageJson.peerDependencies && latestPackageJson.peerDependencies) {
        const currentPeers = Object.keys(currentPackageJson.peerDependencies);
        const latestPeers = Object.keys(latestPackageJson.peerDependencies);
        
        if (currentPeers.length !== latestPeers.length || 
            !currentPeers.every(peer => latestPeers.includes(peer))) {
          breakingChanges.push('Peer dependencies changed');
        }
      }
      
      // Check for engine requirements changes
      if (currentPackageJson.engines && latestPackageJson.engines) {
        if (JSON.stringify(currentPackageJson.engines) !== JSON.stringify(latestPackageJson.engines)) {
          breakingChanges.push('Engine requirements changed');
        }
      }
      
    } catch (error) {
      // Package.json comparison failed
    }
    
    return breakingChanges;
  }

  async assessMaintenanceRisk(packageName) {
    try {
      // Get package statistics from npm
      const stats = execSync(`npm view ${packageName} --json`, { encoding: 'utf8' });
      const packageInfo = JSON.parse(stats);
      
      const maintenanceScore = this.calculateMaintenanceScore(packageInfo);
      
      return {
        score: maintenanceScore,
        level: maintenanceScore > 80 ? 'low' : maintenanceScore > 60 ? 'medium' : 'high',
        details: {
          lastPublish: packageInfo.time?.modified,
          maintainers: packageInfo.maintainers?.length || 0,
          repository: packageInfo.repository?.url,
          homepage: packageInfo.homepage
        }
      };
    } catch (error) {
      return {
        score: 50,
        level: 'medium',
        details: { error: 'Could not fetch package information' }
      };
    }
  }

  calculateMaintenanceScore(packageInfo) {
    let score = 100;
    
    // Deduct points for old packages
    if (packageInfo.time?.modified) {
      const lastUpdate = new Date(packageInfo.time.modified);
      const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysSinceUpdate > 365) score -= 30;
      else if (daysSinceUpdate > 180) score -= 20;
      else if (daysSinceUpdate > 90) score -= 10;
    }
    
    // Deduct points for few maintainers
    if (packageInfo.maintainers && packageInfo.maintainers.length < 2) {
      score -= 20;
    }
    
    // Deduct points for missing repository
    if (!packageInfo.repository?.url) {
      score -= 15;
    }
    
    return Math.max(0, score);
  }

  calculateOverallRisk(versionRisk, breakingChangeRisk, maintenanceRisk) {
    let riskScore = 0;
    let requiresTesting = false;
    let breakingChanges = false;
    
    // Version risk scoring
    switch (versionRisk.level) {
      case 'high': riskScore += 40; requiresTesting = true; breakingChanges = true; break;
      case 'medium': riskScore += 25; requiresTesting = true; break;
      case 'low': riskScore += 10; break;
    }
    
    // Breaking changes risk scoring
    if (breakingChangeRisk.hasBreakingChanges) {
      riskScore += 30;
      requiresTesting = true;
      breakingChanges = true;
    }
    
    // Maintenance risk scoring
    switch (maintenanceRisk.level) {
      case 'high': riskScore += 20; break;
      case 'medium': riskScore += 10; break;
      case 'low': riskScore += 0; break;
    }
    
    // Determine overall risk level
    let level;
    if (riskScore >= 70) level = 'critical';
    else if (riskScore >= 50) level = 'high';
    else if (riskScore >= 30) level = 'medium';
    else level = 'low';
    
    return {
      level,
      score: riskScore,
      requiresTesting,
      breakingChanges,
      confidence: 'medium',
      reason: `Risk score: ${riskScore}/100`
    };
  }

  generateUpdateRecommendations(analysis) {
    const recommendations = [];
    
    // Group packages by risk level
    const packagesByRisk = {
      critical: [],
      high: [],
      medium: [],
      low: []
    };
    
    for (const [name, risk] of Object.entries(analysis.riskAssessment)) {
      packagesByRisk[risk.riskLevel].push(name);
    }
    
    // Generate recommendations for each risk level
    if (packagesByRisk.critical.length > 0) {
      recommendations.push({
        priority: 'critical',
        action: `Review ${packagesByRisk.critical.length} critical-risk packages manually`,
        packages: packagesByRisk.critical,
        reason: 'Critical risk packages require immediate attention and manual review'
      });
    }
    
    if (packagesByRisk.high.length > 0) {
      recommendations.push({
        priority: 'high',
        action: `Update ${packagesByRisk.high.length} high-risk packages with testing`,
        packages: packagesByRisk.high,
        reason: 'High risk packages should be updated with thorough testing'
      });
    }
    
    if (packagesByRisk.medium.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: `Update ${packagesByRisk.medium.length} medium-risk packages`,
        packages: packagesByRisk.medium,
        reason: 'Medium risk packages can be updated with basic testing'
      });
    }
    
    if (packagesByRisk.low.length > 0) {
      recommendations.push({
        priority: 'low',
        action: `Automatically update ${packagesByRisk.low.length} low-risk packages`,
        packages: packagesByRisk.low,
        reason: 'Low risk packages can be updated automatically'
      });
    }
    
    // Add security-specific recommendations
    if (analysis.vulnerable.length > 0) {
      recommendations.push({
        priority: 'critical',
        action: `Fix ${analysis.vulnerable.length} security vulnerabilities immediately`,
        packages: analysis.vulnerable.map(v => v.package),
        reason: 'Security vulnerabilities pose immediate risk'
      });
    }
    
    return recommendations;
  }

  async executeUpdateStrategy(analysis) {
    this.log('🚀 Executing smart update strategy...');
    
    const updateResults = {
      timestamp: new Date().toISOString(),
      strategy: 'smart',
      updates: {
        automatic: [],
        manual: [],
        staged: [],
        blocked: []
      },
      results: [],
      summary: {
        total: 0,
        successful: 0,
        failed: 0,
        blocked: 0
      }
    };
    
    // Process packages by risk level
    for (const [name, risk] of Object.entries(analysis.riskAssessment)) {
      const updateStrategy = this.determineUpdateStrategy(risk);
      updateResults.updates[updateStrategy].push(name);
      updateResults.summary.total++;
    }
    
    // Execute automatic updates for low-risk packages
    if (updateResults.updates.automatic.length > 0) {
      this.log(`🔄 Executing automatic updates for ${updateResults.updates.automatic.length} low-risk packages...`);
      
      for (const packageName of updateResults.updates.automatic) {
        try {
          const result = await this.updatePackage(packageName, 'automatic');
          updateResults.results.push(result);
          
          if (result.success) {
            updateResults.summary.successful++;
          } else {
            updateResults.summary.failed++;
          }
        } catch (error) {
          updateResults.results.push({
            package: packageName,
            success: false,
            error: error.message,
            strategy: 'automatic'
          });
          updateResults.summary.failed++;
        }
      }
    }
    
    // Create staged update plan for medium-risk packages
    if (updateResults.updates.staged.length > 0) {
      this.log(`📋 Creating staged update plan for ${updateResults.updates.staged.length} medium-risk packages...`);
      
      const stagedPlan = await this.createStagedUpdatePlan(updateResults.updates.staged);
      updateResults.stagedPlan = stagedPlan;
    }
    
    // Block critical and high-risk packages
    if (updateResults.updates.blocked.length > 0) {
      this.log(`🚫 Blocked ${updateResults.updates.blocked.length} critical/high-risk packages for manual review...`);
      updateResults.summary.blocked = updateResults.updates.blocked.length;
    }
    
    // Save update results
    await this.saveUpdateResults(updateResults);
    
    // Print summary
    this.printUpdateSummary(updateResults);
    
    return updateResults;
  }

  determineUpdateStrategy(risk) {
    switch (risk.riskLevel) {
      case 'critical':
      case 'high':
        return 'blocked';
      case 'medium':
        return 'staged';
      case 'low':
        return 'automatic';
      default:
        return 'manual';
    }
  }

  async updatePackage(packageName, strategy) {
    this.log(`📦 Updating ${packageName} using ${strategy} strategy...`);
    
    try {
      const startTime = Date.now();
      
      // Get current and target versions
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdated = JSON.parse(outdatedOutput);
      const packageInfo = outdated[packageName];
      
      if (!packageInfo) {
        return {
          package: packageName,
          success: false,
          error: 'Package not found in outdated list',
          strategy
        };
      }
      
      // Update the package
      execSync(`npm install ${packageName}@${packageInfo.latest}`, { stdio: 'inherit' });
      
      const updateTime = Date.now() - startTime;
      
      // Test the update if required
      let testResult = { passed: true, details: 'No testing required' };
      if (strategy === 'automatic') {
        testResult = await this.quickTestPackage(packageName);
      }
      
      return {
        package: packageName,
        success: true,
        strategy,
        fromVersion: packageInfo.current,
        toVersion: packageInfo.latest,
        updateTime,
        testResult
      };
      
    } catch (error) {
      return {
        package: packageName,
        success: false,
        error: error.message,
        strategy
      };
    }
  }

  async quickTestPackage(packageName) {
    try {
      // Run basic tests to ensure the package still works
      const testResult = execSync('npm test', { 
        stdio: 'pipe',
        timeout: 30000 // 30 second timeout
      });
      
      return {
        passed: true,
        details: 'Basic tests passed',
        output: testResult.toString()
      };
    } catch (error) {
      return {
        passed: false,
        details: 'Basic tests failed',
        error: error.message
      };
    }
  }

  async createStagedUpdatePlan(packages) {
    const stagedPlan = {
      stages: [],
      estimatedTime: 0,
      riskMitigation: []
    };
    
    // Group packages by potential conflicts
    const groups = this.groupPackagesByCompatibility(packages);
    
    for (const [stage, groupPackages] of Object.entries(groups)) {
      const stagePlan = {
        stage: parseInt(stage),
        packages: groupPackages,
        estimatedTime: groupPackages.length * 5 * 60 * 1000, // 5 minutes per package
        testingRequired: true,
        rollbackPlan: `Rollback to previous package-lock.json if stage ${stage} fails`
      };
      
      stagedPlan.stages.push(stagePlan);
      stagedPlan.estimatedTime += stagePlan.estimatedTime;
    }
    
    // Add risk mitigation strategies
    stagedPlan.riskMitigation = [
      'Run tests after each stage',
      'Monitor application performance',
      'Have rollback plan ready',
      'Update in non-production environment first'
    ];
    
    return stagedPlan;
  }

  groupPackagesByCompatibility(packages) {
    // This is a simplified grouping strategy
    // In production, you'd analyze actual dependency conflicts
    
    const groups = {
      1: packages.slice(0, Math.ceil(packages.length / 3)),
      2: packages.slice(Math.ceil(packages.length / 3), Math.ceil(2 * packages.length / 3)),
      3: packages.slice(Math.ceil(2 * packages.length / 3))
    };
    
    return groups;
  }

  async saveDependencyAnalysis(analysis) {
    const reportPath = 'dependency-analysis-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
    this.log(`📄 Dependency analysis saved to ${reportPath}`);
  }

  async saveUpdateResults(results) {
    const reportPath = 'dependency-update-results.json';
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    this.log(`📄 Update results saved to ${reportPath}`);
  }

  printUpdateSummary(results) {
    console.log('\n' + '='.repeat(60));
    console.log('📦 SMART DEPENDENCY UPDATE SUMMARY');
    console.log('='.repeat(60));
    console.log(`📊 Total Packages: ${results.summary.total}`);
    console.log(`✅ Successful Updates: ${results.summary.successful}`);
    console.log(`❌ Failed Updates: ${results.summary.failed}`);
    console.log(`🚫 Blocked Updates: ${results.summary.blocked}`);
    
    console.log('\n📋 UPDATE STRATEGIES:');
    console.log(`  🔄 Automatic: ${results.updates.automatic.length} packages`);
    console.log(`  📋 Staged: ${results.updates.staged.length} packages`);
    console.log(`  🚫 Blocked: ${results.updates.blocked.length} packages`);
    
    if (results.stagedPlan) {
      console.log('\n📋 STAGED UPDATE PLAN:');
      results.stagedPlan.stages.forEach(stage => {
        console.log(`  Stage ${stage.stage}: ${stage.packages.length} packages (${stage.estimatedTime / 60000}min)`);
      });
    }
    
    console.log('\n' + '='.repeat(60));
  }

  // Main execution method
  async runSmartDependencyManagement() {
    this.log('🚀 Starting smart dependency management...');
    
    try {
      // Phase 1: Analyze dependencies
      const analysis = await this.analyzeDependencies();
      
      // Phase 2: Execute update strategy
      const updateResults = await this.executeUpdateStrategy(analysis);
      
      // Phase 3: Generate recommendations
      const recommendations = this.generateUpdateRecommendations(analysis);
      
      this.log('✅ Smart dependency management completed successfully');
      
      return {
        analysis,
        updateResults,
        recommendations
      };
      
    } catch (error) {
      this.log(`💥 Smart dependency management failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new SmartDependencyManager();
  manager.runSmartDependencyManagement().catch(error => {
    console.error('Smart dependency management failed:', error);
    process.exit(1);
  });
}

module.exports = SmartDependencyManager;