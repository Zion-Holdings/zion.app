#!/usr/bin/env node

/**
 * Advanced Security Scanner
 * Multi-layer security scanning for comprehensive security analysis
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

class AdvancedSecurityScanner {
  constructor() {
    this.scanResults = {
      timestamp: new Date().toISOString(),
      npmAudit: null,
      licenseCompliance: null,
      dependencyVulnerabilities: null,
      codeSecurity: null,
      overallScore: 0,
      recommendations: []
    };
    
    this.severityWeights = {
      critical: 10,
      high: 7,
      moderate: 4,
      low: 1
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async runComprehensiveSecurityScan() {
    this.log('🔒 Starting comprehensive security scan...');
    
    try {
      // Run all security scans in parallel
      const [
        npmAuditResult,
        licenseResult,
        dependencyResult,
        codeSecurityResult
      ] = await Promise.allSettled([
        this.runNpmAudit(),
        this.runLicenseCompliance(),
        this.runDependencyVulnerabilityScan(),
        this.runCodeSecurityAnalysis()
      ]);
      
      // Process results
      this.scanResults.npmAudit = this.processNpmAuditResult(npmAuditResult);
      this.scanResults.licenseCompliance = this.processLicenseResult(licenseResult);
      this.scanResults.dependencyVulnerabilities = this.processDependencyResult(dependencyResult);
      this.scanResults.codeSecurity = this.processCodeSecurityResult(codeSecurityResult);
      
      // Calculate overall security score
      this.calculateOverallSecurityScore();
      
      // Generate recommendations
      this.generateSecurityRecommendations();
      
      // Save comprehensive report
      await this.saveSecurityReport();
      
      // Print summary
      this.printSecuritySummary();
      
      return this.scanResults;
      
    } catch (error) {
      this.log(`💥 Security scan failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async runNpmAudit() {
    this.log('📦 Running npm audit...');
    
    try {
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      return JSON.parse(auditOutput);
    } catch (error) {
      this.log('⚠️  npm audit failed, checking if vulnerabilities exist', 'warning');
      
      // Try to get basic vulnerability info
      try {
        const auditOutput = execSync('npm audit --audit-level=moderate', { encoding: 'utf8' });
        return { output: auditOutput, parsed: false };
      } catch (auditError) {
        return { error: auditError.message, parsed: false };
      }
    }
  }

  async runLicenseCompliance() {
    this.log('📜 Checking license compliance...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const licenseResults = {
        projectLicense: packageJson.license || 'Not specified',
        dependencies: {},
        compliance: {
          compatible: [],
          incompatible: [],
          unknown: []
        }
      };
      
      // Check each dependency's license
      for (const [depName, depVersion] of Object.entries(dependencies)) {
        try {
          const depPackageJson = JSON.parse(
            fs.readFileSync(`node_modules/${depName}/package.json`, 'utf8')
          );
          
          const license = depPackageJson.license || 'Not specified';
          licenseResults.dependencies[depName] = {
            version: depVersion,
            license: license,
            compliant: this.isLicenseCompliant(license)
          };
          
          if (licenseResults.dependencies[depName].compliant) {
            licenseResults.compliance.compatible.push(depName);
          } else {
            licenseResults.compliance.incompatible.push(depName);
          }
        } catch (error) {
          licenseResults.dependencies[depName] = {
            version: depVersion,
            license: 'Unknown',
            compliant: false
          };
          licenseResults.compliance.unknown.push(depName);
        }
      }
      
      return licenseResults;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  isLicenseCompliant(license) {
    // Define compatible licenses (can be customized based on your requirements)
    const compatibleLicenses = [
      'MIT', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'ISC',
      'CC0-1.0', 'Unlicense', 'WTFPL', '0BSD'
    ];
    
    if (!license || license === 'Not specified') return false;
    
    return compatibleLicenses.some(compatible => 
      license.includes(compatible) || license.toLowerCase().includes(compatible.toLowerCase())
    );
  }

  async runDependencyVulnerabilityScan() {
    this.log('🔍 Scanning for dependency vulnerabilities...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const vulnerabilityResults = {
        totalDependencies: Object.keys(dependencies).length,
        vulnerableDependencies: [],
        outdatedDependencies: [],
        securityIssues: []
      };
      
      // Check for outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
        const outdated = JSON.parse(outdatedOutput);
        vulnerabilityResults.outdatedDependencies = Object.keys(outdated);
      } catch (error) {
        // No outdated packages
      }
      
      // Check for known vulnerable packages
      for (const [depName, depVersion] of Object.entries(dependencies)) {
        const vulnerability = await this.checkPackageVulnerability(depName, depVersion);
        if (vulnerability) {
          vulnerabilityResults.vulnerableDependencies.push({
            name: depName,
            version: depVersion,
            vulnerability: vulnerability
          });
        }
      }
      
      return vulnerabilityResults;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkPackageVulnerability(packageName, packageVersion) {
    // This is a simplified check - in production, you'd integrate with
    // services like Snyk, npm audit, or GitHub Security Advisories
    
    const knownVulnerabilities = {
      'lodash': {
        '4.17.20': 'CVE-2021-23337',
        '4.17.21': 'CVE-2021-23337'
      },
      'axios': {
        '0.21.1': 'CVE-2021-3749'
      }
    };
    
    if (knownVulnerabilities[packageName] && 
        knownVulnerabilities[packageName][packageVersion]) {
      return knownVulnerabilities[packageName][packageVersion];
    }
    
    return null;
  }

  async runCodeSecurityAnalysis() {
    this.log('🔐 Analyzing code security...');
    
    try {
      const securityResults = {
        eslintSecurity: null,
        potentialIssues: [],
        securityScore: 0
      };
      
      // Run ESLint security rules if available
      try {
        const eslintOutput = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format json', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const eslintResults = JSON.parse(eslintOutput);
        securityResults.eslintSecurity = {
          totalIssues: eslintResults.length,
          securityIssues: eslintResults.filter(issue => 
            issue.ruleId && issue.ruleId.includes('security')
          ).length
        };
      } catch (error) {
        securityResults.eslintSecurity = { error: 'ESLint not available' };
      }
      
      // Check for common security anti-patterns
      securityResults.potentialIssues = await this.detectSecurityAntiPatterns();
      
      // Calculate security score
      securityResults.securityScore = this.calculateCodeSecurityScore(securityResults);
      
      return securityResults;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async detectSecurityAntiPatterns() {
    const antiPatterns = [
      {
        pattern: /eval\s*\(/g,
        description: 'Use of eval() function',
        severity: 'high',
        file: 'unknown'
      },
      {
        pattern: /innerHTML\s*=/g,
        description: 'Direct innerHTML assignment',
        severity: 'moderate',
        file: 'unknown'
      },
      {
        pattern: /process\.env\.\w+/g,
        description: 'Environment variable exposure',
        severity: 'low',
        file: 'unknown'
      }
    ];
    
    const issues = [];
    
    // Scan JavaScript/TypeScript files
    const sourceFiles = await this.findSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        for (const antiPattern of antiPatterns) {
          const matches = content.match(antiPattern.pattern);
          if (matches) {
            issues.push({
              ...antiPattern,
              file: file,
              occurrences: matches.length
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async findSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'scripts'];
    const sourceFiles = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = this.walkDirectory(dir);
        sourceFiles.push(...files.filter(file => 
          file.endsWith('.js') || file.endsWith('.jsx') || 
          file.endsWith('.ts') || file.endsWith('.tsx')
        ));
      }
    }
    
    return sourceFiles;
  }

  walkDirectory(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.walkDirectory(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  calculateCodeSecurityScore(securityResults) {
    let score = 100;
    
    // Deduct points for ESLint security issues
    if (securityResults.eslintSecurity && !securityResults.eslintSecurity.error) {
      score -= securityResults.eslintSecurity.securityIssues * 5;
    }
    
    // Deduct points for anti-patterns
    for (const issue of securityResults.potentialIssues) {
      switch (issue.severity) {
        case 'critical':
          score -= 20;
          break;
        case 'high':
          score -= 15;
          break;
        case 'moderate':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    }
    
    return Math.max(0, score);
  }

  processNpmAuditResult(result) {
    if (result.status === 'fulfilled') {
      if (result.value.parsed === false) {
        return { 
          status: 'completed',
          output: result.value.output,
          parsed: false
        };
      }
      
      const audit = result.value;
      if (audit.metadata && audit.metadata.vulnerabilities) {
        const { critical, high, moderate, low } = audit.metadata.vulnerabilities;
        return {
          status: 'completed',
          vulnerabilities: { critical, high, moderate, low },
          total: critical + high + moderate + low,
          score: this.calculateVulnerabilityScore(critical, high, moderate, low)
        };
      }
      
      return { status: 'completed', vulnerabilities: null };
    } else {
      return { status: 'failed', error: result.reason.message };
    }
  }

  processLicenseResult(result) {
    if (result.status === 'fulfilled') {
      return {
        status: 'completed',
        ...result.value
      };
    } else {
      return { status: 'failed', error: result.reason.message };
    }
  }

  processDependencyResult(result) {
    if (result.status === 'fulfilled') {
      return {
        status: 'completed',
        ...result.value
      };
    } else {
      return { status: 'failed', error: result.reason.message };
    }
  }

  processCodeSecurityResult(result) {
    if (result.status === 'fulfilled') {
      return {
        status: 'completed',
        ...result.value
      };
    } else {
      return { status: 'failed', error: result.reason.message };
    }
  }

  calculateVulnerabilityScore(critical, high, moderate, low) {
    return (
      (critical * this.severityWeights.critical) +
      (high * this.severityWeights.high) +
      (moderate * this.severityWeights.moderate) +
      (low * this.severityWeights.low)
    );
  }

  calculateOverallSecurityScore() {
    let totalScore = 0;
    let maxScore = 0;
    
    // NPM Audit Score (0-100)
    if (this.scanResults.npmAudit && this.scanResults.npmAudit.score !== undefined) {
      const npmScore = Math.max(0, 100 - this.scanResults.npmAudit.score);
      totalScore += npmScore;
      maxScore += 100;
    }
    
    // License Compliance Score (0-100)
    if (this.scanResults.licenseCompliance && this.scanResults.licenseCompliance.compliance) {
      const { compatible, incompatible, unknown } = this.scanResults.licenseCompliance.compliance;
      const total = compatible.length + incompatible.length + unknown.length;
      const licenseScore = total > 0 ? (compatible.length / total) * 100 : 100;
      totalScore += licenseScore;
      maxScore += 100;
    }
    
    // Code Security Score (0-100)
    if (this.scanResults.codeSecurity && this.scanResults.codeSecurity.securityScore !== undefined) {
      totalScore += this.scanResults.codeSecurity.securityScore;
      maxScore += 100;
    }
    
    // Dependency Vulnerability Score (0-100)
    if (this.scanResults.dependencyVulnerabilities) {
      const { totalDependencies, vulnerableDependencies, outdatedDependencies } = this.scanResults.dependencyVulnerabilities;
      const depScore = totalDependencies > 0 ? 
        Math.max(0, 100 - ((vulnerableDependencies.length + outdatedDependencies.length) / totalDependencies) * 100) : 100;
      totalScore += depScore;
      maxScore += 100;
    }
    
    this.scanResults.overallScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  }

  generateSecurityRecommendations() {
    this.scanResults.recommendations = [];
    
    // NPM Audit recommendations
    if (this.scanResults.npmAudit && this.scanResults.npmAudit.vulnerabilities) {
      const { critical, high } = this.scanResults.npmAudit.vulnerabilities;
      if (critical > 0 || high > 0) {
        this.scanResults.recommendations.push({
          priority: 'critical',
          action: 'Run npm audit fix --force to resolve critical and high vulnerabilities',
          impact: 'Security vulnerabilities may expose your application to attacks'
        });
      }
    }
    
    // License compliance recommendations
    if (this.scanResults.licenseCompliance && this.scanResults.licenseCompliance.compliance) {
      const { incompatible } = this.scanResults.licenseCompliance.compliance;
      if (incompatible.length > 0) {
        this.scanResults.recommendations.push({
          priority: 'high',
          action: `Review ${incompatible.length} dependencies with incompatible licenses`,
          impact: 'License violations may have legal implications'
        });
      }
    }
    
    // Code security recommendations
    if (this.scanResults.codeSecurity && this.scanResults.codeSecurity.potentialIssues) {
      const highSeverityIssues = this.scanResults.codeSecurity.potentialIssues.filter(
        issue => issue.severity === 'high' || issue.severity === 'critical'
      );
      
      if (highSeverityIssues.length > 0) {
        this.scanResults.recommendations.push({
          priority: 'high',
          action: `Address ${highSeverityIssues.length} high-severity security anti-patterns`,
          impact: 'Security anti-patterns may introduce vulnerabilities'
        });
      }
    }
    
    // Dependency recommendations
    if (this.scanResults.dependencyVulnerabilities) {
      const { outdatedDependencies } = this.scanResults.dependencyVulnerabilities;
      if (outdatedDependencies.length > 0) {
        this.scanResults.recommendations.push({
          priority: 'medium',
          action: `Update ${outdatedDependencies.length} outdated dependencies`,
          impact: 'Outdated dependencies may contain security vulnerabilities'
        });
      }
    }
  }

  async saveSecurityReport() {
    const reportPath = 'security-scan-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.scanResults, null, 2));
    this.log(`📄 Security report saved to ${reportPath}`);
  }

  printSecuritySummary() {
    console.log('\n' + '='.repeat(60));
    console.log('🔒 SECURITY SCAN SUMMARY');
    console.log('='.repeat(60));
    console.log(`📊 Overall Security Score: ${this.scanResults.overallScore}/100`);
    
    // NPM Audit Summary
    if (this.scanResults.npmAudit) {
      console.log('\n📦 NPM AUDIT:');
      if (this.scanResults.npmAudit.vulnerabilities) {
        const { critical, high, moderate, low } = this.scanResults.npmAudit.vulnerabilities;
        console.log(`  Critical: ${critical}, High: ${high}, Moderate: ${moderate}, Low: ${low}`);
      } else {
        console.log('  ✅ No vulnerabilities found');
      }
    }
    
    // License Compliance Summary
    if (this.scanResults.licenseCompliance && this.scanResults.licenseCompliance.compliance) {
      console.log('\n📜 LICENSE COMPLIANCE:');
      const { compatible, incompatible, unknown } = this.scanResults.licenseCompliance.compliance;
      console.log(`  Compatible: ${compatible.length}, Incompatible: ${incompatible.length}, Unknown: ${unknown.length}`);
    }
    
    // Code Security Summary
    if (this.scanResults.codeSecurity) {
      console.log('\n🔐 CODE SECURITY:');
      console.log(`  Security Score: ${this.scanResults.codeSecurity.securityScore}/100`);
      if (this.scanResults.codeSecurity.potentialIssues) {
        console.log(`  Potential Issues: ${this.scanResults.codeSecurity.potentialIssues.length}`);
      }
    }
    
    // Recommendations
    if (this.scanResults.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      this.scanResults.recommendations.forEach((rec, index) => {
        console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.action}`);
        console.log(`     Impact: ${rec.impact}`);
      });
    }
    
    console.log('\n' + '='.repeat(60));
  }
}

// Run if called directly
if (require.main === module) {
  const scanner = new AdvancedSecurityScanner();
  scanner.runComprehensiveSecurityScan().catch(error => {
    console.error('Security scan failed:', error);
    process.exit(1);
  });
}

module.exports = AdvancedSecurityScanner;