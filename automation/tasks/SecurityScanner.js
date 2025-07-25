#!/usr/bin/env node

/**
 * Security Scanner Task
 * 
 * Scans for security vulnerabilities, code issues, and potential threats
 * in the codebase and dependencies.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Simple logger
const logger = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
  warn: (msg) => console.warn(`[WARN] ${msg}`),
  debug: (msg) => console.log(`[DEBUG] ${msg}`)
};

class SecurityScanner {
  constructor(config = {}) {
    this.config = {
      name: 'SecurityScanner',
      schedule: '0 */6 * * *', // Every 6 hours
      enabled: true,
      autoFix: false, // Don't auto-fix by default
      severityThreshold: 'medium',
      scanTypes: ['npm', 'code', 'secrets', 'dependencies'],
      ...config
    };
    
    this.scanHistory = [];
    this.vulnerabilities = [];
    this.lastStatus = 'idle';
    this.lastRun = null;
    this.lastError = null;
  }

  async run() {
    logger.info('🔒 Starting security scan...');
    
    try {
      const scanResults = {
        timestamp: new Date().toISOString(),
        npmVulnerabilities: [],
        codeIssues: [],
        secretsFound: [],
        dependencyIssues: [],
        summary: {}
      };
      
      // Run different types of scans
      if (this.config.scanTypes.includes('npm')) {
        scanResults.npmVulnerabilities = await this.scanNpmVulnerabilities();
      }
      
      if (this.config.scanTypes.includes('code')) {
        scanResults.codeIssues = await this.scanCodeSecurity();
      }
      
      if (this.config.scanTypes.includes('secrets')) {
        scanResults.secretsFound = await this.scanForSecrets();
      }
      
      if (this.config.scanTypes.includes('dependencies')) {
        scanResults.dependencyIssues = await this.scanDependencies();
      }
      
      // Generate summary
      scanResults.summary = this.generateSummary(scanResults);
      
      // Store results
      this.scanHistory.push(scanResults);
      this.vulnerabilities = this.extractVulnerabilities(scanResults);
      
      // Check if any high-severity issues found
      const highSeverityIssues = this.vulnerabilities.filter(v => v.severity === 'high' || v.severity === 'critical');
      
      if (highSeverityIssues.length > 0) {
        logger.warn(`⚠️ Found ${highSeverityIssues.length} high-severity security issues`);
        await this.handleHighSeverityIssues(highSeverityIssues);
      }
      
      // Auto-fix if enabled and issues are low-medium severity
      if (this.config.autoFix) {
        await this.autoFixIssues(scanResults);
      }
      
      // Generate report
      await this.generateSecurityReport(scanResults);
      
      this.lastStatus = 'success';
      this.lastRun = new Date();
      
      return scanResults;
      
    } catch (error) {
      logger.error('❌ Security scan failed:', error);
      this.lastStatus = 'failed';
      this.lastError = error.message;
      this.lastRun = new Date();
      
      throw error;
    }
  }

  async scanNpmVulnerabilities() {
    logger.info('📦 Scanning npm vulnerabilities...');
    
    try {
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(output);
      const vulnerabilities = [];
      
      if (audit.vulnerabilities) {
        for (const [packageName, vuln] of Object.entries(audit.vulnerabilities)) {
          vulnerabilities.push({
            type: 'npm',
            package: packageName,
            severity: vuln.severity || 'medium',
            title: vuln.title || 'Unknown vulnerability',
            description: vuln.description || 'No description available',
            recommendation: vuln.recommendation || 'Update package',
            via: vuln.via || []
          });
        }
      }
      
      logger.info(`📦 Found ${vulnerabilities.length} npm vulnerabilities`);
      return vulnerabilities;
      
    } catch (error) {
      logger.error('❌ npm audit failed:', error.message);
      return [];
    }
  }

  async scanCodeSecurity() {
    logger.info('🔍 Scanning code for security issues...');
    
    const issues = [];
    const codeFiles = await this.findCodeFiles();
    
    for (const file of codeFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeCodeSecurity(content, file);
        issues.push(...fileIssues);
      } catch (error) {
        logger.warn(`⚠️ Could not read file ${file}: ${error.message}`);
      }
    }
    
    logger.info(`🔍 Found ${issues.length} code security issues`);
    return issues;
  }

  async findCodeFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.py', '.php', '.java', '.rb'];
    const files = [];
    
    const scanDirectory = async (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules, .git, etc.
            if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
              await scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        logger.warn(`⚠️ Could not scan directory ${dir}: ${error.message}`);
      }
    };
    
    await scanDirectory(process.cwd());
    return files;
  }

  analyzeCodeSecurity(content, filePath) {
    const issues = [];
    
    // Check for hardcoded secrets
    const secretPatterns = [
      /password\s*=\s*['"][^'"]+['"]/gi,
      /api_key\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi,
      /private_key\s*=\s*['"][^'"]+['"]/gi
    ];
    
    secretPatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          type: 'hardcoded_secret',
          file: filePath,
          line: this.findLineNumber(content, matches[0]),
          severity: 'high',
          description: 'Hardcoded secret found',
          recommendation: 'Move secrets to environment variables'
        });
      }
    });
    
    // Check for SQL injection patterns
    const sqlPatterns = [
      /query\s*\(\s*['"][^'"]*\$\{[^}]+\}[^'"]*['"]/gi,
      /execute\s*\(\s*['"][^'"]*\$\{[^}]+\}[^'"]*['"]/gi
    ];
    
    sqlPatterns.forEach((pattern) => {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          type: 'sql_injection',
          file: filePath,
          line: this.findLineNumber(content, matches[0]),
          severity: 'high',
          description: 'Potential SQL injection',
          recommendation: 'Use parameterized queries'
        });
      }
    });
    
    return issues;
  }

  findLineNumber(content, match) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(match)) {
        return i + 1;
      }
    }
    return 1;
  }

  async scanForSecrets() {
    logger.info('🔐 Scanning for secrets in files...');
    
    const secrets = [];
    const secretPatterns = [
      /sk-[a-zA-Z0-9]{48}/g, // OpenAI API key
      /pk-[a-zA-Z0-9]{48}/g, // OpenAI API key
      /ghp_[a-zA-Z0-9]{36}/g, // GitHub token
      /gho_[a-zA-Z0-9]{36}/g, // GitHub token
      /ghu_[a-zA-Z0-9]{36}/g, // GitHub token
      /ghs_[a-zA-Z0-9]{36}/g, // GitHub token
      /ghr_[a-zA-Z0-9]{36}/g, // GitHub token
      /[a-zA-Z0-9]{40}/g, // Generic 40-char token
    ];
    
    const files = await this.findCodeFiles();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        secretPatterns.forEach((pattern) => {
          const matches = content.match(pattern);
          if (matches) {
                    secrets.push({
          type: 'secret',
          file: file,
          pattern: pattern.source,
          count: matches.length,
          severity: 'critical',
          description: 'Secret found in code',
          recommendation: 'Remove secrets from code and use environment variables'
        });
          }
        });
      } catch (error) {
        logger.warn(`⚠️ Could not read file ${file}: ${error.message}`);
      }
    }
    
    logger.info(`🔐 Found ${secrets.length} potential secrets`);
    return secrets;
  }

  async scanDependencies() {
    logger.info('📋 Scanning dependencies...');
    
    const issues = [];
    
    try {
      // Check package.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for old packages
      const oldPackages = await this.checkForOldPackages(dependencies);
      issues.push(...oldPackages);
      
      // Check for known vulnerable packages
      const vulnerablePackages = await this.checkForVulnerablePackages(dependencies);
      issues.push(...vulnerablePackages);
      
    } catch (error) {
      logger.error('❌ Failed to scan dependencies:', error.message);
    }
    
    logger.info(`📋 Found ${issues.length} dependency issues`);
    return issues;
  }

  async checkForOldPackages(dependencies) {
    const issues = [];
    const cutoffDate = new Date();
    cutoffDate.setFullYear(cutoffDate.getFullYear() - 2); // 2 years old
    
    for (const [packageName, version] of Object.entries(dependencies)) {
      try {
        const response = await fetch(`https://registry.npmjs.org/${packageName}`);
        const data = await response.json();
        
        if (data.time && data.time.created) {
          const createdDate = new Date(data.time.created);
          if (createdDate < cutoffDate) {
            issues.push({
              type: 'old_package',
              package: packageName,
              version: version,
              created: data.time.created,
              severity: 'medium',
              description: 'Package is older than 2 years',
              recommendation: 'Consider updating to a newer version'
            });
          }
        }
      } catch (error) {
        logger.debug(`Could not check package ${packageName}: ${error.message}`);
      }
    }
    
    return issues;
  }

  async checkForVulnerablePackages(dependencies) {
    // This would typically use a vulnerability database
    // For now, return empty array
    return [];
  }

  generateSummary(scanResults) {
    const totalIssues = 
      scanResults.npmVulnerabilities.length +
      scanResults.codeIssues.length +
      scanResults.secretsFound.length +
      scanResults.dependencyIssues.length;
    
    const severityCounts = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    };
    
    // Count by severity
    [...scanResults.npmVulnerabilities, ...scanResults.codeIssues, ...scanResults.secretsFound, ...scanResults.dependencyIssues]
      .forEach(issue => {
        severityCounts[issue.severity] = (severityCounts[issue.severity] || 0) + 1;
      });
    
    return {
      totalIssues,
      severityCounts,
      scanTypes: this.config.scanTypes,
      timestamp: scanResults.timestamp
    };
  }

  extractVulnerabilities(scanResults) {
    return [
      ...scanResults.npmVulnerabilities,
      ...scanResults.codeIssues,
      ...scanResults.secretsFound,
      ...scanResults.dependencyIssues
    ];
  }

  async handleHighSeverityIssues(issues) {
    logger.warn(`🚨 Handling ${issues.length} high-severity issues`);
    
    // Send alerts
    await this.sendSecurityAlert(issues);
    
    // Create detailed report
    await this.createSecurityReport(issues);
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(issues);
    logger.info('📋 Security recommendations:', recommendations);
  }

  async sendSecurityAlert(issues) {
    // This would send alerts via Slack, email, etc.
    logger.warn('🚨 Security alert would be sent here');
  }

  async createSecurityReport(issues) {
    const report = {
      timestamp: new Date().toISOString(),
      issues: issues,
      summary: {
        total: issues.length,
        critical: issues.filter(i => i.severity === 'critical').length,
        high: issues.filter(i => i.severity === 'high').length
      }
    };
    
    const reportPath = path.join(process.cwd(), 'security-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    logger.info(`📄 Security report saved to ${reportPath}`);
  }

  generateRecommendations(issues) {
    const recommendations = [];
    
    const secretIssues = issues.filter(i => i.type === 'secret' || i.type === 'hardcoded_secret');
    if (secretIssues.length > 0) {
      recommendations.push('Move all secrets to environment variables');
    }
    
    const sqlIssues = issues.filter(i => i.type === 'sql_injection');
    if (sqlIssues.length > 0) {
      recommendations.push('Use parameterized queries to prevent SQL injection');
    }
    
    const npmIssues = issues.filter(i => i.type === 'npm');
    if (npmIssues.length > 0) {
      recommendations.push('Update vulnerable npm packages');
    }
    
    return recommendations;
  }

  async autoFixIssues(scanResults) {
    logger.info('🔧 Attempting to auto-fix issues...');
    
    let fixedCount = 0;
    
    // Auto-fix low severity issues
    const lowSeverityIssues = this.vulnerabilities.filter(v => v.severity === 'low');
    
    for (const issue of lowSeverityIssues) {
      try {
        if (issue.type === 'hardcoded_secret') {
          await this.removeSensitiveLogs(issue.file);
          fixedCount++;
        }
      } catch (error) {
        logger.warn(`⚠️ Could not auto-fix issue: ${error.message}`);
      }
    }
    
    logger.info(`🔧 Auto-fixed ${fixedCount} issues`);
  }

  async removeSensitiveLogs(filePath) {
    // This would remove or mask sensitive information in logs
    logger.info(`🔧 Removing sensitive logs from ${filePath}`);
  }

  async generateSecurityReport(scanResults) {
    const report = {
      timestamp: scanResults.timestamp,
      summary: scanResults.summary,
      details: scanResults
    };
    
    const reportPath = path.join(process.cwd(), 'security-scan-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    logger.info(`📄 Security scan report saved to ${reportPath}`);
  }

  getStatus() {
    return {
      name: this.config.name,
      status: this.lastStatus,
      lastRun: this.lastRun,
      lastError: this.lastError,
      totalScans: this.scanHistory.length,
      totalVulnerabilities: this.vulnerabilities.length
    };
  }
}

// CLI support
if (require.main === module) {
  const scanner = new SecurityScanner();
  
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🔒 Security Scanner

Usage: node SecurityScanner.js [options]

Options:
  --help, -h     Show this help message
  --run          Run security scan
  --status       Show scanner status

Examples:
  node SecurityScanner.js --run
  node SecurityScanner.js --status
    `);
    process.exit(0);
  }
  
  if (args.includes('--run')) {
    scanner.run().then(() => {
      console.log('✅ Security scan completed');
      process.exit(0);
    }).catch((error) => {
      console.error('❌ Security scan failed:', error);
      process.exit(1);
    });
  } else if (args.includes('--status')) {
    console.log(JSON.stringify(scanner.getStatus(), null, 2));
  } else {
    console.log('Use --help for usage information');
  }
}

module.exports = SecurityScanner; 