const AutomationTask = require('../continuous-improvement/AutomationTask');
const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class SecurityScanner extends AutomationTask {
  constructor(config = {}) {
    super({
      name: 'SecurityScanner',
      schedule: '0 */6 * * *', // Every 6 hours
      enabled: true,
      autoFix: false, // Don't auto-fix by default
      severityThreshold: 'medium',
      scanTypes: ['npm', 'code', 'secrets', 'dependencies'],
      ...config
    });
    
    this.scanHistory = [];
    this.vulnerabilities = [];
  }

  async run() {
    console.log('🔒 Starting security scan...');
    
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
        console.warn(`⚠️ Found ${highSeverityIssues.length} high-severity security issues`);
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
      console.error('❌ Security scan failed:', error);
      this.lastStatus = 'failed';
      this.lastError = error.message;
      this.lastRun = new Date();
      
      throw error;
    }
  }

  async scanNpmVulnerabilities() {
    console.log('📦 Scanning npm vulnerabilities...');
    
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
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            cwe: vuln.cwe,
            cvss: vuln.cvss,
            via: vuln.via
          });
        }
      }
      
      console.log(`✅ Found ${vulnerabilities.length} npm vulnerabilities`);
      return vulnerabilities;
      
    } catch (error) {
      if (error.status === 1) {
        // npm audit returns 1 when vulnerabilities are found
        return this.parseNpmAuditError(error.stdout);
      }
      throw error;
    }
  }

  parseNpmAuditError(stdout) {
    // Parse npm audit output when it returns error status
    const vulnerabilities = [];
    const lines = stdout.split('\n');
    
    for (const line of lines) {
      if (line.includes('│')) {
        const parts = line.split('│').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4) {
          vulnerabilities.push({
            type: 'npm',
            package: parts[0],
            severity: parts[1],
            title: parts[2],
            description: parts[3] || ''
          });
        }
      }
    }
    
    return vulnerabilities;
  }

  async scanCodeSecurity() {
    console.log('🔍 Scanning code for security issues...');
    
    const issues = [];
    
    try {
      // Check for common security anti-patterns
      const patterns = [
        {
          pattern: /eval\s*\(/g,
          severity: 'high',
          title: 'Use of eval()',
          description: 'eval() can execute arbitrary code and is a security risk'
        },
        {
          pattern: /innerHTML\s*=/g,
          severity: 'medium',
          title: 'Direct innerHTML assignment',
          description: 'Direct innerHTML assignment can lead to XSS attacks'
        },
        {
          pattern: /password.*=.*['"][^'"]*['"]/gi,
          severity: 'critical',
          title: 'Hardcoded password',
          description: 'Password found in code'
        },
        {
          pattern: /api[_-]?key.*=.*['"][^'"]*['"]/gi,
          severity: 'critical',
          title: 'Hardcoded API key',
          description: 'API key found in code'
        },
        {
          pattern: /console\.log.*password/gi,
          severity: 'medium',
          title: 'Password logging',
          description: 'Password being logged to console'
        }
      ];
      
      // Scan all JavaScript/TypeScript files
      const files = await this.findCodeFiles();
      
      for (const file of files) {
        try {
          const content = await fs.readFile(file, 'utf8');
          
          for (const pattern of patterns) {
            const matches = content.match(pattern.pattern);
            if (matches) {
              issues.push({
                type: 'code',
                file: file,
                severity: pattern.severity,
                title: pattern.title,
                description: pattern.description,
                matches: matches.length
              });
            }
          }
        } catch (error) {
          console.warn(`⚠️ Could not read file ${file}:`, error.message);
        }
      }
      
      console.log(`✅ Found ${issues.length} code security issues`);
      return issues;
      
    } catch (error) {
      console.error('❌ Code security scan failed:', error);
      return [];
    }
  }

  async findCodeFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];
    
    const scanDirectory = async (dir) => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory()) {
            // Skip node_modules and other build directories
            if (!['node_modules', '.next', 'dist', 'build'].includes(entry.name)) {
              await scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => entry.name.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        console.warn(`⚠️ Could not scan directory ${dir}:`, error.message);
      }
    };
    
    await scanDirectory(process.cwd());
    return files;
  }

  async scanForSecrets() {
    console.log('🔐 Scanning for secrets...');
    
    const secrets = [];
    const secretPatterns = [
      {
        pattern: /(?:password|passwd|pwd)\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        title: 'Hardcoded password',
        severity: 'critical'
      },
      {
        pattern: /(?:api[_-]?key|apikey)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        title: 'Hardcoded API key',
        severity: 'critical'
      },
      {
        pattern: /(?:secret|token)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        title: 'Hardcoded secret',
        severity: 'critical'
      },
      {
        pattern: /(?:private[_-]?key|privatekey)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        title: 'Hardcoded private key',
        severity: 'critical'
      },
      {
        pattern: /(?:aws[_-]?access[_-]?key|aws[_-]?secret[_-]?key)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        title: 'AWS credentials',
        severity: 'critical'
      }
    ];
    
    try {
      const files = await this.findCodeFiles();
      
      for (const file of files) {
        try {
          const content = await fs.readFile(file, 'utf8');
          
          for (const pattern of secretPatterns) {
            const matches = content.match(pattern.pattern);
            if (matches) {
              secrets.push({
                type: 'secret',
                file: file,
                severity: pattern.severity,
                title: pattern.title,
                description: `Found ${matches.length} potential secret(s)`,
                matches: matches.length
              });
            }
          }
        } catch (error) {
          console.warn(`⚠️ Could not read file ${file}:`, error.message);
        }
      }
      
      console.log(`✅ Found ${secrets.length} potential secrets`);
      return secrets;
      
    } catch (error) {
      console.error('❌ Secret scan failed:', error);
      return [];
    }
  }

  async scanDependencies() {
    console.log('📋 Scanning dependencies for security issues...');
    
    const issues = [];
    
    try {
      // Check for known vulnerable packages
      const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for packages with known security issues
      const vulnerablePackages = [
        'lodash', // Known for prototype pollution
        'moment', // Known for DoS vulnerabilities
        'jquery'  // Known for XSS vulnerabilities
      ];
      
      for (const [packageName, version] of Object.entries(allDeps)) {
        if (vulnerablePackages.includes(packageName)) {
          issues.push({
            type: 'dependency',
            package: packageName,
            version: version,
            severity: 'medium',
            title: `Known vulnerable package: ${packageName}`,
            description: `${packageName} has known security vulnerabilities`
          });
        }
      }
      
      // Check for packages that haven't been updated recently
      const oldPackages = await this.checkForOldPackages(allDeps);
      issues.push(...oldPackages);
      
      console.log(`✅ Found ${issues.length} dependency issues`);
      return issues;
      
    } catch (error) {
      console.error('❌ Dependency scan failed:', error);
      return [];
    }
  }

  async checkForOldPackages(dependencies) {
    const issues = [];
    const cutoffDate = new Date();
    cutoffDate.setFullYear(cutoffDate.getFullYear() - 2); // 2 years ago
    
    for (const [packageName, version] of Object.entries(dependencies)) {
      try {
        const output = execSync(`npm view ${packageName}@${version} time --json`, {
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const timeData = JSON.parse(output);
        const publishTime = new Date(timeData[version]);
        
        if (publishTime < cutoffDate) {
          issues.push({
            type: 'dependency',
            package: packageName,
            version: version,
            severity: 'low',
            title: `Old package: ${packageName}`,
            description: `${packageName}@${version} was published ${Math.floor((Date.now() - publishTime.getTime()) / (1000 * 60 * 60 * 24))} days ago`
          });
        }
      } catch (error) {
        // Ignore errors for individual packages
      }
    }
    
    return issues;
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
    const allIssues = [
      ...scanResults.npmVulnerabilities,
      ...scanResults.codeIssues,
      ...scanResults.secretsFound,
      ...scanResults.dependencyIssues
    ];
    
    for (const issue of allIssues) {
      severityCounts[issue.severity] = (severityCounts[issue.severity] || 0) + 1;
    }
    
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
    console.log('🚨 Handling high-severity security issues...');
    
    // Log issues
    for (const issue of issues) {
      console.error(`🔴 ${issue.severity.toUpperCase()}: ${issue.title} - ${issue.description}`);
    }
    
    // Send notifications if configured
    if (this.config.enableNotifications) {
      await this.sendSecurityAlert(issues);
    }
    
    // Create security report
    await this.createSecurityReport(issues);
  }

  async sendSecurityAlert(issues) {
    // This would integrate with your notification system
    console.log('📢 Sending security alert...');
    
    const alert = {
      type: 'security_alert',
      severity: 'high',
      issues: issues,
      timestamp: new Date().toISOString(),
      summary: `Found ${issues.length} high-severity security issues`
    };
    
    // Emit event for external handlers
    this.emit('securityAlert', alert);
  }

  async createSecurityReport(issues) {
    const reportPath = path.join(process.cwd(), 'reports', `security-report-${Date.now()}.json`);
    
    const report = {
      timestamp: new Date().toISOString(),
      issues: issues,
      summary: this.generateSummary({ 
        npmVulnerabilities: issues.filter(i => i.type === 'npm'),
        codeIssues: issues.filter(i => i.type === 'code'),
        secretsFound: issues.filter(i => i.type === 'secret'),
        dependencyIssues: issues.filter(i => i.type === 'dependency')
      }),
      recommendations: this.generateRecommendations(issues)
    };
    
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Security report saved to: ${reportPath}`);
  }

  generateRecommendations(issues) {
    const recommendations = [];
    
    const npmIssues = issues.filter(i => i.type === 'npm');
    if (npmIssues.length > 0) {
      recommendations.push({
        type: 'npm',
        action: 'Run npm audit fix to automatically fix vulnerabilities',
        priority: 'high'
      });
    }
    
    const secretIssues = issues.filter(i => i.type === 'secret');
    if (secretIssues.length > 0) {
      recommendations.push({
        type: 'secrets',
        action: 'Remove hardcoded secrets and use environment variables',
        priority: 'critical'
      });
    }
    
    const codeIssues = issues.filter(i => i.type === 'code');
    if (codeIssues.length > 0) {
      recommendations.push({
        type: 'code',
        action: 'Review and fix code security issues',
        priority: 'high'
      });
    }
    
    return recommendations;
  }

  async autoFixIssues(scanResults) {
    console.log('🔧 Attempting to auto-fix security issues...');
    
    try {
      // Auto-fix npm vulnerabilities
      if (scanResults.npmVulnerabilities.length > 0) {
        console.log('📦 Auto-fixing npm vulnerabilities...');
        execSync('npm audit fix', { stdio: 'pipe' });
      }
      
      // Auto-fix low-severity issues
      const lowSeverityIssues = this.vulnerabilities.filter(v => v.severity === 'low');
      
      for (const issue of lowSeverityIssues) {
        if (issue.type === 'code' && issue.title.includes('console.log')) {
          // Auto-remove console.log statements with sensitive data
          await this.removeSensitiveLogs(issue.file);
        }
      }
      
      console.log('✅ Auto-fix completed');
      
    } catch (error) {
      console.error('❌ Auto-fix failed:', error);
    }
  }

  async removeSensitiveLogs(filePath) {
    try {
      let content = await fs.readFile(filePath, 'utf8');
      
      // Remove console.log statements with password
      content = content.replace(/console\.log.*password.*;?\n?/gi, '');
      
      await fs.writeFile(filePath, content);
      console.log(`✅ Removed sensitive logs from ${filePath}`);
      
    } catch (error) {
      console.warn(`⚠️ Could not remove sensitive logs from ${filePath}:`, error.message);
    }
  }

  async generateSecurityReport(scanResults) {
    const reportPath = path.join(process.cwd(), 'reports', `security-scan-${Date.now()}.json`);
    
    await fs.writeFile(reportPath, JSON.stringify(scanResults, null, 2));
    console.log(`📄 Security scan report saved to: ${reportPath}`);
  }

  async selfHeal(error) {
    console.log('🔧 Attempting self-healing for SecurityScanner...');
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      console.log('⏳ Network issue detected, waiting before retry...');
      await new Promise(resolve => setTimeout(resolve, 30000));
      return;
    }
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      console.log('🔐 Permission issue detected, checking file permissions...');
      await this.checkFilePermissions();
      return;
    }
  }

  async checkFilePermissions() {
    try {
      const reportDir = path.join(process.cwd(), 'reports');
      await fs.access(reportDir, fs.constants.W_OK);
    } catch (error) {
      console.log('⚠️ Reports directory not writable, creating...');
      await fs.mkdir(path.join(process.cwd(), 'reports'), { recursive: true });
    }
  }

  getStatus() {
    return {
      ...super.getStatus(),
      scanHistory: this.scanHistory.slice(-5), // Last 5 scans
      totalScans: this.scanHistory.length,
      currentVulnerabilities: this.vulnerabilities.length,
      highSeverityCount: this.vulnerabilities.filter(v => v.severity === 'high' || v.severity === 'critical').length
    };
  }
}

module.exports = SecurityScanner; 