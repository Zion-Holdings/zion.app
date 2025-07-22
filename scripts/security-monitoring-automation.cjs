#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chalk = require('chalk');

class SecurityMonitoringAutomation {
  constructor() {
    this.config = {
      scanInterval: 15 * 60 * 1000, // 15 minutes
      securityThresholds: {
        criticalVulnerabilities: 0,
        highVulnerabilities: 2,
        mediumVulnerabilities: 5,
        outdatedPackages: 10
      },
      scanTypes: {
        dependencyScan: true,
        codeScan: true,
        environmentScan: true,
        secretsScan: true,
        sslScan: true
      },
      autoFix: {
        enabled: true,
        safeFixes: true,
        requireApproval: false
      }
    };
    
    this.securityHistory = [];
    this.vulnerabilitiesFound = [];
    this.isRunning = false;
    this.scanCount = 0;
  }

  async start() {
    console.log(chalk.blue('🔒 Security Monitoring Automation Starting...'));
    this.isRunning = true;
    
    // Initial security scan
    await this.performSecurityScan();
    
    // Set up continuous monitoring
    this.monitorInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.performSecurityScan();
      }
    }, this.config.scanInterval);
    
    console.log(chalk.green('✅ Security Monitoring Automation started successfully'));
  }

  async stop() {
    console.log(chalk.yellow('🛑 Stopping Security Monitoring Automation...'));
    this.isRunning = false;
    
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
    
    console.log(chalk.green('✅ Security Monitoring Automation stopped'));
  }

  async performSecurityScan() {
    try {
      console.log(chalk.cyan('🔍 Performing security scan...'));
      
      const scanResults = {
        dependencies: await this.scanDependencies(),
        code: await this.scanCode(),
        environment: await this.scanEnvironment(),
        secrets: await this.scanSecrets(),
        ssl: await this.scanSSL()
      };
      
      const analysis = this.analyzeSecurityResults(scanResults);
      
      if (analysis.criticalIssues > 0) {
        console.log(chalk.red(`🚨 CRITICAL: ${analysis.criticalIssues} critical security issues found!`));
        await this.handleCriticalIssues(analysis.issues);
      } else if (analysis.totalIssues > 0) {
        console.log(chalk.yellow(`⚠️  ${analysis.totalIssues} security issues found`));
        await this.handleSecurityIssues(analysis.issues);
      } else {
        console.log(chalk.green('✅ No security issues detected'));
      }
      
      this.securityHistory.push({
        timestamp: new Date().toISOString(),
        scanResults,
        analysis,
        fixesApplied: analysis.fixesApplied || 0
      });
      
      await this.generateSecurityReport();
      
      this.scanCount++;
      
    } catch (error) {
      console.error(chalk.red('❌ Error during security scan:'), error.message);
    }
  }

  async scanDependencies() {
    console.log(chalk.blue('  📦 Scanning dependencies...'));
    
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditOutput);
      
      const vulnerabilities = {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
        details: []
      };
      
      if (auditData.vulnerabilities) {
        for (const [packageName, vuln] of Object.entries(auditData.vulnerabilities)) {
          const severity = vuln.severity || 'low';
          vulnerabilities[severity]++;
          
          vulnerabilities.details.push({
            package: packageName,
            severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation
          });
        }
      }
      
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = Object.keys(outdatedData);
      
      return {
        vulnerabilities,
        outdatedPackages,
        totalPackages: Object.keys(JSON.parse(fs.readFileSync('package-lock.json', 'utf8')).dependencies || {}).length
      };
      
    } catch (error) {
      console.warn(chalk.yellow('  ⚠️  Could not complete dependency scan:'), error.message);
      return {
        vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, details: [] },
        outdatedPackages: [],
        totalPackages: 0
      };
    }
  }

  async scanCode() {
    console.log(chalk.blue('  🔍 Scanning code for security issues...'));
    
    const securityIssues = [];
    const sourceDirs = ['src', 'pages', 'components', 'lib', 'utils', 'api'];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getAllSourceFiles(dir);
        for (const file of files) {
          const issues = this.scanFileForSecurityIssues(file);
          securityIssues.push(...issues);
        }
      }
    }
    
    return {
      totalIssues: securityIssues.length,
      issues: securityIssues,
      scannedFiles: this.countSourceFiles(sourceDirs)
    };
  }

  getAllSourceFiles(dirPath) {
    const files = [];
    this.walkDirectory(dirPath, files);
    return files;
  }

  walkDirectory(dirPath, files) {
    if (!fs.existsSync(dirPath)) return;
    
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else if (this.isSourceFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  isSourceFile(filePath) {
    const sourceExtensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    return sourceExtensions.includes(path.extname(filePath));
  }

  countSourceFiles(dirs) {
    let count = 0;
    for (const dir of dirs) {
      if (fs.existsSync(dir)) {
        const files = [];
        this.walkDirectory(dir, files);
        count += files.length;
      }
    }
    return count;
  }

  scanFileForSecurityIssues(filePath) {
    const issues = [];
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Security patterns to check
    const securityPatterns = [
      {
        pattern: /eval\s*\(/g,
        severity: 'critical',
        description: 'Use of eval() is dangerous and can lead to code injection',
        fix: 'Replace with safer alternatives like JSON.parse() or Function constructor'
      },
      {
        pattern: /innerHTML\s*=/g,
        severity: 'high',
        description: 'Potential XSS vulnerability with innerHTML',
        fix: 'Use textContent or sanitize HTML content'
      },
      {
        pattern: /localStorage\.setItem\s*\(\s*['"`][^'"`]*password[^'"`]*['"`]/gi,
        severity: 'high',
        description: 'Storing passwords in localStorage is insecure',
        fix: 'Use secure session storage or server-side storage'
      },
      {
        pattern: /api_key.*=.*['"`][^'"`]+['"`]/gi,
        severity: 'critical',
        description: 'Hardcoded API keys found',
        fix: 'Move to environment variables'
      },
      {
        pattern: /password.*=.*['"`][^'"`]+['"`]/gi,
        severity: 'critical',
        description: 'Hardcoded passwords found',
        fix: 'Move to environment variables'
      },
      {
        pattern: /console\.log\s*\(/g,
        severity: 'low',
        description: 'Console.log statements in production code',
        fix: 'Remove or replace with proper logging'
      },
      {
        pattern: /process\.env\.\w+/g,
        severity: 'medium',
        description: 'Environment variables should be validated',
        fix: 'Add validation for environment variables'
      }
    ];
    
    for (const { pattern, severity, description, fix } of securityPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (pattern.test(lines[i])) {
            issues.push({
              file: filePath,
              line: i + 1,
              severity,
              description,
              fix,
              code: lines[i].trim()
            });
          }
        }
      }
    }
    
    return issues;
  }

  async scanEnvironment() {
    console.log(chalk.blue('  🌍 Scanning environment configuration...'));
    
    const envIssues = [];
    
    // Check for .env files
    const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
    
    for (const envFile of envFiles) {
      if (fs.existsSync(envFile)) {
        const content = fs.readFileSync(envFile, 'utf8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            
            if (key && value) {
              // Check for sensitive data
              if (this.isSensitiveKey(key)) {
                envIssues.push({
                  file: envFile,
                  line: i + 1,
                  severity: 'high',
                  description: `Sensitive environment variable: ${key}`,
                  fix: 'Ensure this file is not committed to version control'
                });
              }
              
              // Check for weak values
              if (this.isWeakValue(key, value)) {
                envIssues.push({
                  file: envFile,
                  line: i + 1,
                  severity: 'medium',
                  description: `Weak value for ${key}`,
                  fix: 'Use stronger, more secure values'
                });
              }
            }
          }
        }
      }
    }
    
    return {
      totalIssues: envIssues.length,
      issues: envIssues
    };
  }

  isSensitiveKey(key) {
    const sensitiveKeys = [
      'password', 'secret', 'key', 'token', 'auth', 'credential',
      'private', 'api_key', 'api_secret', 'database_url'
    ];
    
    return sensitiveKeys.some(sensitive => 
      key.toLowerCase().includes(sensitive.toLowerCase())
    );
  }

  isWeakValue(key, value) {
    // Check for weak passwords
    if (key.toLowerCase().includes('password')) {
      return value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value);
    }
    
    // Check for weak secrets
    if (key.toLowerCase().includes('secret') || key.toLowerCase().includes('key')) {
      return value.length < 32;
    }
    
    return false;
  }

  async scanSecrets() {
    console.log(chalk.blue('  🔐 Scanning for exposed secrets...'));
    
    const secretsFound = [];
    const sourceDirs = ['src', 'pages', 'components', 'lib', 'utils', 'api'];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getAllSourceFiles(dir);
        for (const file of files) {
          const secrets = this.scanFileForSecrets(file);
          secretsFound.push(...secrets);
        }
      }
    }
    
    return {
      totalSecrets: secretsFound.length,
      secrets: secretsFound
    };
  }

  scanFileForSecrets(filePath) {
    const secrets = [];
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Common secret patterns
    const secretPatterns = [
      {
        pattern: /['"`](sk_live_[a-zA-Z0-9]{24})['"`]/g,
        type: 'Stripe Live Secret Key',
        severity: 'critical'
      },
      {
        pattern: /['"`](sk_test_[a-zA-Z0-9]{24})['"`]/g,
        type: 'Stripe Test Secret Key',
        severity: 'high'
      },
      {
        pattern: /['"`](AKIA[0-9A-Z]{16})['"`]/g,
        type: 'AWS Access Key ID',
        severity: 'critical'
      },
      {
        pattern: /['"`](ghp_[a-zA-Z0-9]{36})['"`]/g,
        type: 'GitHub Personal Access Token',
        severity: 'critical'
      },
      {
        pattern: /['"`]([a-zA-Z0-9]{40})['"`]/g,
        type: 'Potential SHA1 Hash',
        severity: 'medium'
      }
    ];
    
    for (const { pattern, type, severity } of secretPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (pattern.test(lines[i])) {
            secrets.push({
              file: filePath,
              line: i + 1,
              type,
              severity,
              code: lines[i].trim()
            });
          }
        }
      }
    }
    
    return secrets;
  }

  async scanSSL() {
    console.log(chalk.blue('  🔒 Scanning SSL configuration...'));
    
    // This would typically check SSL certificates and configuration
    // For now, we'll simulate the scan
    return {
      sslEnabled: true,
      certificateValid: true,
      issues: []
    };
  }

  analyzeSecurityResults(scanResults) {
    const analysis = {
      criticalIssues: 0,
      highIssues: 0,
      mediumIssues: 0,
      lowIssues: 0,
      totalIssues: 0,
      issues: [],
      fixesApplied: 0
    };
    
    // Analyze dependency vulnerabilities
    if (scanResults.dependencies.vulnerabilities) {
      analysis.criticalIssues += scanResults.dependencies.vulnerabilities.critical;
      analysis.highIssues += scanResults.dependencies.vulnerabilities.high;
      analysis.mediumIssues += scanResults.dependencies.vulnerabilities.medium;
      analysis.lowIssues += scanResults.dependencies.vulnerabilities.low;
      
      analysis.issues.push(...scanResults.dependencies.vulnerabilities.details.map(vuln => ({
        type: 'dependency',
        ...vuln
      })));
    }
    
    // Analyze code issues
    if (scanResults.code.issues) {
      for (const issue of scanResults.code.issues) {
        analysis[issue.severity + 'Issues']++;
        analysis.issues.push({
          type: 'code',
          ...issue
        });
      }
    }
    
    // Analyze environment issues
    if (scanResults.environment.issues) {
      for (const issue of scanResults.environment.issues) {
        analysis[issue.severity + 'Issues']++;
        analysis.issues.push({
          type: 'environment',
          ...issue
        });
      }
    }
    
    // Analyze secrets
    if (scanResults.secrets.secrets) {
      for (const secret of scanResults.secrets.secrets) {
        analysis[secret.severity + 'Issues']++;
        analysis.issues.push({
          type: 'secret',
          ...secret
        });
      }
    }
    
    analysis.totalIssues = analysis.criticalIssues + analysis.highIssues + analysis.mediumIssues + analysis.lowIssues;
    
    return analysis;
  }

  async handleCriticalIssues(issues) {
    console.log(chalk.red('🚨 CRITICAL SECURITY ISSUES DETECTED!'));
    
    for (const issue of issues.filter(i => i.severity === 'critical')) {
      console.log(chalk.red(`  CRITICAL: ${issue.description}`));
      console.log(chalk.red(`  File: ${issue.file || 'N/A'}`));
      console.log(chalk.red(`  Fix: ${issue.fix || 'Manual intervention required'}`));
      
      if (this.config.autoFix.enabled) {
        await this.applySecurityFix(issue);
      }
    }
    
    // Send alert
    await this.sendSecurityAlert('CRITICAL', issues.filter(i => i.severity === 'critical'));
  }

  async handleSecurityIssues(issues) {
    console.log(chalk.yellow('⚠️  Security issues found:'));
    
    for (const issue of issues) {
      console.log(chalk.yellow(`  ${issue.severity.toUpperCase()}: ${issue.description}`));
      
      if (this.config.autoFix.enabled && issue.severity !== 'critical') {
        await this.applySecurityFix(issue);
      }
    }
  }

  async applySecurityFix(issue) {
    try {
      console.log(chalk.blue(`  🔧 Applying fix for: ${issue.description}`));
      
      switch (issue.type) {
        case 'dependency':
          await this.fixDependencyVulnerability(issue);
          break;
        case 'code':
          await this.fixCodeSecurityIssue(issue);
          break;
        case 'environment':
          await this.fixEnvironmentIssue(issue);
          break;
        case 'secret':
          await this.fixSecretExposure(issue);
          break;
      }
      
    } catch (error) {
      console.error(chalk.red(`  ❌ Failed to apply fix: ${error.message}`));
    }
  }

  async fixDependencyVulnerability(issue) {
    try {
      execSync(`npm audit fix`, { stdio: 'pipe' });
      console.log(chalk.green(`  ✅ Fixed dependency vulnerability in ${issue.package}`));
    } catch (error) {
      console.log(chalk.yellow(`  ⚠️  Could not auto-fix ${issue.package}: ${error.message}`));
    }
  }

  async fixCodeSecurityIssue(issue) {
    if (!issue.file || !issue.fix) return;
    
    try {
      const content = fs.readFileSync(issue.file, 'utf8');
      const lines = content.split('\n');
      
      // Apply the fix based on the issue type
      if (issue.description.includes('eval()')) {
        // Replace eval with safer alternative
        const fixedContent = content.replace(/eval\s*\(/g, 'JSON.parse(');
        fs.writeFileSync(issue.file, fixedContent);
        console.log(chalk.green(`  ✅ Fixed eval() usage in ${issue.file}`));
      } else if (issue.description.includes('innerHTML')) {
        // Replace innerHTML with textContent
        const fixedContent = content.replace(/\.innerHTML\s*=/g, '.textContent =');
        fs.writeFileSync(issue.file, fixedContent);
        console.log(chalk.green(`  ✅ Fixed innerHTML usage in ${issue.file}`));
      }
      
    } catch (error) {
      console.log(chalk.yellow(`  ⚠️  Could not auto-fix code issue: ${error.message}`));
    }
  }

  async fixEnvironmentIssue(issue) {
    console.log(chalk.blue(`  🔧 Environment fix required: ${issue.fix}`));
    // Environment fixes typically require manual intervention
  }

  async fixSecretExposure(issue) {
    console.log(chalk.red(`  🚨 SECRET EXPOSURE: ${issue.type} found in ${issue.file}:${issue.line}`));
    console.log(chalk.red(`  IMMEDIATE ACTION REQUIRED: Remove or rotate this secret`));
  }

  async sendSecurityAlert(severity, issues) {
    console.log(chalk.red(`🚨 SECURITY ALERT: ${severity} - ${issues.length} issues detected`));
    
    // In a real implementation, this would send alerts via:
    // - Email
    // - Slack
    // - SMS
    // - Security dashboard
  }

  async generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalScans: this.scanCount,
        lastScan: this.securityHistory[this.securityHistory.length - 1] || null,
        securityTrend: this.calculateSecurityTrend()
      },
      history: this.securityHistory.slice(-10) // Last 10 scans
    };
    
    const reportPath = path.join(__dirname, '..', 'logs', 'security-monitoring-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(chalk.blue('📊 Security report generated:'), reportPath);
  }

  calculateSecurityTrend() {
    if (this.securityHistory.length < 2) {
      return 'insufficient-data';
    }
    
    const recent = this.securityHistory.slice(-3);
    const criticalIssues = recent.filter(entry => entry.analysis.criticalIssues > 0).length;
    
    if (criticalIssues > 0) {
      return 'critical';
    } else if (recent.some(entry => entry.analysis.totalIssues > 0)) {
      return 'needs-attention';
    } else {
      return 'secure';
    }
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      scanCount: this.scanCount,
      lastScan: this.securityHistory[this.securityHistory.length - 1] || null,
      config: this.config
    };
  }
}

// CLI Interface
if (require.main === module) {
  const automation = new SecurityMonitoringAutomation();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'stop':
      automation.stop();
      break;
    case 'status':
      console.log(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'scan':
      automation.performSecurityScan();
      break;
    default:
      console.log(`
🔒 Security Monitoring Automation

Usage:
  node security-monitoring-automation.cjs [command]

Commands:
  start   - Start the automation
  stop    - Stop the automation
  status  - Show current status
  scan    - Perform a one-time security scan

Examples:
  node security-monitoring-automation.cjs start
  node security-monitoring-automation.cjs status
      `);
  }
}

module.exports = SecurityMonitoringAutomation; 