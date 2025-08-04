const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class DependencyManagementAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/dependency-management');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'dependency-reports'),
      path.join(this.reportsDir, 'update-reports'),
      path.join(this.reportsDir, 'security-reports'),
      path.join(this.reportsDir, 'audit-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Dependency Management Agent ${this.agentId} started`);
    
    // Initial dependency analysis
    await this.analyzeDependencies();
    
    // Start periodic dependency monitoring
    setInterval(() => {
      this.monitorDependencies();
    }, 600000); // Every 10 minutes
    
    // Start security audits
    setInterval(() => {
      this.runSecurityAudit();
    }, 1800000); // Every 30 minutes
    
    // Start dependency updates
    setInterval(() => {
      this.checkForUpdates();
    }, 3600000); // Every hour
  }

  async analyzeDependencies() {
    try {
      console.log('Analyzing project dependencies...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        packageJson: {},
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
        optionalDependencies: {},
        outdatedPackages: [],
        securityIssues: [],
        recommendations: []
      };
      
      // Read package.json
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        analysis.packageJson = {
          name: packageJson.name,
          version: packageJson.version,
          description: packageJson.description,
          scripts: packageJson.scripts || {}
        };
        
        // Analyze dependencies
        analysis.dependencies = packageJson.dependencies || {};
        analysis.devDependencies = packageJson.devDependencies || {};
        analysis.peerDependencies = packageJson.peerDependencies || {};
        analysis.optionalDependencies = packageJson.optionalDependencies || {};
      }
      
      // Check for outdated packages
      analysis.outdatedPackages = await this.checkOutdatedPackages();
      
      // Run security audit
      analysis.securityIssues = await this.runSecurityAudit();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveDependencyReport(analysis);
      
      console.log('Dependency analysis completed');
      
    } catch (error) {
      console.error('Dependency analysis failed:', error);
    }
  }

  async checkOutdatedPackages() {
    const outdatedPackages = [];
    
    try {
      console.log('Checking for outdated packages...');
      
      const { stdout } = await execAsync('npm outdated --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      if (stdout.trim()) {
        const outdated = JSON.parse(stdout);
        
        for (const [packageName, info] of Object.entries(outdated)) {
          outdatedPackages.push({
            name: packageName,
            current: info.current,
            wanted: info.wanted,
            latest: info.latest,
            location: info.location,
            type: this.getDependencyType(packageName)
          });
        }
      }
      
    } catch (error) {
      console.error('Failed to check outdated packages:', error);
    }
    
    return outdatedPackages;
  }

  getDependencyType(packageName) {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (packageJson.dependencies && packageJson.dependencies[packageName]) {
        return 'dependency';
      } else if (packageJson.devDependencies && packageJson.devDependencies[packageName]) {
        return 'devDependency';
      } else if (packageJson.peerDependencies && packageJson.peerDependencies[packageName]) {
        return 'peerDependency';
      } else if (packageJson.optionalDependencies && packageJson.optionalDependencies[packageName]) {
        return 'optionalDependency';
      }
    }
    
    return 'unknown';
  }

  async runSecurityAudit() {
    const securityIssues = [];
    
    try {
      console.log('Running security audit...');
      
      // Run npm audit
      try {
        const { stdout } = await execAsync('npm audit --json', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        const audit = JSON.parse(stdout);
        
        if (audit.vulnerabilities) {
          for (const [packageName, vulnerability] of Object.entries(audit.vulnerabilities)) {
            securityIssues.push({
              package: packageName,
              severity: vulnerability.severity,
              title: vulnerability.title,
              description: vulnerability.description,
              recommendation: vulnerability.recommendation,
              via: vulnerability.via
            });
          }
        }
        
      } catch (error) {
        console.error('npm audit failed:', error);
      }
      
      // Run Snyk audit if available
      try {
        const { stdout } = await execAsync('npx snyk test --json', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        const snykResults = JSON.parse(stdout);
        
        if (snykResults.vulnerabilities) {
          for (const vulnerability of snykResults.vulnerabilities) {
            securityIssues.push({
              package: vulnerability.packageName,
              severity: vulnerability.severity,
              title: vulnerability.title,
              description: vulnerability.description,
              recommendation: vulnerability.recommendation,
              source: 'snyk'
            });
          }
        }
        
      } catch (error) {
        console.error('Snyk audit failed:', error);
      }
      
    } catch (error) {
      console.error('Security audit failed:', error);
    }
    
    return securityIssues;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Outdated packages recommendations
    for (const pkg of analysis.outdatedPackages) {
      if (pkg.type === 'dependency') {
        recommendations.push({
          type: 'update_dependency',
          priority: 'medium',
          message: `Update ${pkg.name} from ${pkg.current} to ${pkg.latest}`,
          package: pkg.name,
          currentVersion: pkg.current,
          latestVersion: pkg.latest,
          command: `npm update ${pkg.name}`
        });
      } else if (pkg.type === 'devDependency') {
        recommendations.push({
          type: 'update_dev_dependency',
          priority: 'low',
          message: `Update dev dependency ${pkg.name} from ${pkg.current} to ${pkg.latest}`,
          package: pkg.name,
          currentVersion: pkg.current,
          latestVersion: pkg.latest,
          command: `npm update ${pkg.name} --save-dev`
        });
      }
    }
    
    // Security recommendations
    for (const issue of analysis.securityIssues) {
      if (issue.severity === 'high' || issue.severity === 'critical') {
        recommendations.push({
          type: 'security_fix',
          priority: 'high',
          message: `Fix security vulnerability in ${issue.package}: ${issue.title}`,
          package: issue.package,
          severity: issue.severity,
          description: issue.description,
          recommendation: issue.recommendation
        });
      }
    }
    
    // Unused dependencies
    const unusedDeps = this.findUnusedDependencies(analysis);
    for (const dep of unusedDeps) {
      recommendations.push({
        type: 'remove_unused',
        priority: 'low',
        message: `Consider removing unused dependency: ${dep}`,
        package: dep,
        command: `npm uninstall ${dep}`
      });
    }
    
    return recommendations;
  }

  findUnusedDependencies(analysis) {
    const unusedDeps = [];
    
    try {
      // This would require more sophisticated analysis
      // For now, we'll check for common unused patterns
      const commonUnused = [
        'lodash', 'moment', 'jquery', 'underscore'
      ];
      
      for (const dep of commonUnused) {
        if (analysis.dependencies[dep] || analysis.devDependencies[dep]) {
          // Check if it's actually used in the codebase
          if (!this.isPackageUsed(dep)) {
            unusedDeps.push(dep);
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to find unused dependencies:', error);
    }
    
    return unusedDeps;
  }

  isPackageUsed(packageName) {
    try {
      // Simple check for package usage in source files
      const { stdout } = execAsync(`grep -r "from ['\"]${packageName}['\"]" src/ pages/ components/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      return stdout.trim().length > 0;
      
    } catch (error) {
      // If grep fails, assume package is used
      return true;
    }
  }

  async monitorDependencies() {
    try {
      console.log('Monitoring dependencies...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        outdatedCount: 0,
        securityIssuesCount: 0,
        recommendationsCount: 0,
        alerts: []
      };
      
      // Check for new outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      monitoring.outdatedCount = outdatedPackages.length;
      
      // Check for new security issues
      const securityIssues = await this.runSecurityAudit();
      monitoring.securityIssuesCount = securityIssues.length;
      
      // Generate recommendations
      const recommendations = this.generateRecommendations({
        outdatedPackages,
        securityIssues
      });
      monitoring.recommendationsCount = recommendations.length;
      
      // Check for critical alerts
      for (const issue of securityIssues) {
        if (issue.severity === 'critical') {
          monitoring.alerts.push({
            type: 'critical_security',
            severity: 'critical',
            message: `Critical security vulnerability in ${issue.package}`,
            package: issue.package,
            description: issue.description
          });
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'dependency-reports', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
      // Handle critical alerts
      if (monitoring.alerts.length > 0) {
        await this.handleCriticalAlerts(monitoring.alerts);
      }
      
    } catch (error) {
      console.error('Dependency monitoring failed:', error);
    }
  }

  async handleCriticalAlerts(alerts) {
    for (const alert of alerts) {
      console.log(`Critical Alert [${alert.severity.toUpperCase()}]: ${alert.message}`);
      
      if (alert.severity === 'critical') {
        await this.applySecurityFix(alert);
      }
    }
  }

  async applySecurityFix(alert) {
    try {
      console.log(`Applying security fix for ${alert.package}...`);
      
      // Try to fix the vulnerability
      await execAsync(`npm audit fix`, {
        cwd: this.projectRoot,
        timeout: 300000
      });
      
      console.log(`Security fix applied for ${alert.package}`);
      
      // Save fix report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fixReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        package: alert.package,
        fixType: 'security_patch',
        status: 'applied'
      };
      
      const reportPath = path.join(this.reportsDir, 'security-reports', `fix-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(fixReport, null, 2));
      
    } catch (error) {
      console.error(`Failed to apply security fix for ${alert.package}:`, error);
    }
  }

  async checkForUpdates() {
    try {
      console.log('Checking for dependency updates...');
      
      const updateReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        availableUpdates: [],
        appliedUpdates: [],
        errors: []
      };
      
      // Check for major updates
      const { stdout } = await execAsync('npm outdated --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      if (stdout.trim()) {
        const outdated = JSON.parse(stdout);
        
        for (const [packageName, info] of Object.entries(outdated)) {
          updateReport.availableUpdates.push({
            name: packageName,
            current: info.current,
            wanted: info.wanted,
            latest: info.latest,
            type: this.getDependencyType(packageName)
          });
        }
      }
      
      // Apply safe updates
      for (const update of updateReport.availableUpdates) {
        if (this.isSafeUpdate(update)) {
          try {
            await this.applyUpdate(update);
            updateReport.appliedUpdates.push(update);
          } catch (error) {
            updateReport.errors.push({
              package: update.name,
              error: error.message
            });
          }
        }
      }
      
      // Save update report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'update-reports', `update-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(updateReport, null, 2));
      
      console.log('Dependency update check completed');
      
    } catch (error) {
      console.error('Dependency update check failed:', error);
    }
  }

  isSafeUpdate(update) {
    // Only apply patch and minor updates automatically
    const currentParts = update.current.split('.');
    const latestParts = update.latest.split('.');
    
    // Major version updates require manual review
    if (currentParts[0] !== latestParts[0]) {
      return false;
    }
    
    // Minor version updates are generally safe
    if (currentParts[1] !== latestParts[1]) {
      return true;
    }
    
    // Patch updates are always safe
    return true;
  }

  async applyUpdate(update) {
    try {
      console.log(`Applying update for ${update.name}...`);
      
      let command = `npm update ${update.name}`;
      if (update.type === 'devDependency') {
        command += ' --save-dev';
      }
      
      await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 300000
      });
      
      console.log(`Update applied for ${update.name}`);
      
    } catch (error) {
      console.error(`Failed to apply update for ${update.name}:`, error);
      throw error;
    }
  }

  async runComprehensiveAudit() {
    try {
      console.log('Running comprehensive dependency audit...');
      
      const audit = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        npmAudit: {},
        snykAudit: {},
        dependencyAnalysis: {},
        recommendations: []
      };
      
      // Run npm audit
      try {
        const { stdout } = await execAsync('npm audit --json', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        audit.npmAudit = JSON.parse(stdout);
      } catch (error) {
        console.error('npm audit failed:', error);
      }
      
      // Run Snyk audit
      try {
        const { stdout } = await execAsync('npx snyk test --json', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        audit.snykAudit = JSON.parse(stdout);
      } catch (error) {
        console.error('Snyk audit failed:', error);
      }
      
      // Analyze dependencies
      audit.dependencyAnalysis = await this.analyzeDependencyTree();
      
      // Generate comprehensive recommendations
      audit.recommendations = this.generateComprehensiveRecommendations(audit);
      
      // Save comprehensive audit
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'audit-reports', `comprehensive-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(audit, null, 2));
      
      console.log('Comprehensive audit completed');
      
    } catch (error) {
      console.error('Comprehensive audit failed:', error);
    }
  }

  async analyzeDependencyTree() {
    const analysis = {
      totalDependencies: 0,
      directDependencies: 0,
      transitiveDependencies: 0,
      dependencyTypes: {},
      largestDependencies: [],
      potentialIssues: []
    };
    
    try {
      const { stdout } = await execAsync('npm ls --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      const tree = JSON.parse(stdout);
      
      // Analyze dependency tree
      const dependencies = this.flattenDependencyTree(tree.dependencies);
      
      analysis.totalDependencies = dependencies.length;
      analysis.directDependencies = Object.keys(tree.dependencies || {}).length;
      analysis.transitiveDependencies = analysis.totalDependencies - analysis.directDependencies;
      
      // Group by dependency types
      for (const dep of dependencies) {
        const type = this.getDependencyType(dep.name);
        analysis.dependencyTypes[type] = (analysis.dependencyTypes[type] || 0) + 1;
      }
      
      // Find largest dependencies
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        for (const [name, version] of Object.entries(allDeps)) {
          analysis.largestDependencies.push({ name, version });
        }
        
        analysis.largestDependencies.sort((a, b) => b.name.length - a.name.length);
        analysis.largestDependencies = analysis.largestDependencies.slice(0, 10);
      }
      
    } catch (error) {
      console.error('Failed to analyze dependency tree:', error);
    }
    
    return analysis;
  }

  flattenDependencyTree(dependencies, result = []) {
    if (!dependencies) return result;
    
    for (const [name, info] of Object.entries(dependencies)) {
      result.push({ name, version: info.version });
      
      if (info.dependencies) {
        this.flattenDependencyTree(info.dependencies, result);
      }
    }
    
    return result;
  }

  generateComprehensiveRecommendations(audit) {
    const recommendations = [];
    
    // Security recommendations
    if (audit.npmAudit.vulnerabilities) {
      for (const [packageName, vulnerability] of Object.entries(audit.npmAudit.vulnerabilities)) {
        recommendations.push({
          type: 'security_vulnerability',
          priority: vulnerability.severity === 'critical' ? 'high' : 'medium',
          message: `Fix ${vulnerability.severity} vulnerability in ${packageName}`,
          package: packageName,
          severity: vulnerability.severity,
          recommendation: vulnerability.recommendation
        });
      }
    }
    
    // Dependency optimization recommendations
    if (audit.dependencyAnalysis.totalDependencies > 1000) {
      recommendations.push({
        type: 'dependency_optimization',
        priority: 'medium',
        message: 'Consider reducing dependency count for better performance',
        currentCount: audit.dependencyAnalysis.totalDependencies,
        targetCount: 500
      });
    }
    
    // Update recommendations
    const outdatedPackages = this.getOutdatedPackagesFromAudit(audit);
    for (const pkg of outdatedPackages) {
      recommendations.push({
        type: 'dependency_update',
        priority: 'low',
        message: `Update ${pkg.name} to latest version`,
        package: pkg.name,
        currentVersion: pkg.current,
        latestVersion: pkg.latest
      });
    }
    
    return recommendations;
  }

  getOutdatedPackagesFromAudit(audit) {
    const outdatedPackages = [];
    
    // This would require parsing the audit data for outdated packages
    // For now, return empty array
    return outdatedPackages;
  }

  async saveDependencyReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'dependency-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Dependency report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Dependency Management Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new DependencyManagementAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Dependency Management Agent failed to start:', error);
  process.exit(1);
}); 