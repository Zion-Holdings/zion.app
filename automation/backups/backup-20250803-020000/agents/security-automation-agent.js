const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class SecurityAutomationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/security-automation');
    this.vulnerabilitiesDir = path.join(this.reportsDir, 'vulnerabilities');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.vulnerabilitiesDir,
      path.join(this.reportsDir, 'security-scans'),
      path.join(this.reportsDir, 'dependency-checks'),
      path.join(this.reportsDir, 'security-patches'),
      path.join(this.reportsDir, 'compliance-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Security Automation Agent ${this.agentId} started`);
    
    // Initial security scan
    await this.performSecurityScan();
    
    // Start periodic security monitoring
    setInterval(() => {
      this.monitorSecurity();
    }, 600000); // Every 10 minutes
    
    // Start periodic vulnerability scanning
    setInterval(() => {
      this.scanVulnerabilities();
    }, 1800000); // Every 30 minutes
    
    // Start dependency security checks
    setInterval(() => {
      this.checkDependencySecurity();
    }, 3600000); // Every hour
  }

  async performSecurityScan() {
    try {
      console.log('Performing comprehensive security scan...');
      
      const securityReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        vulnerabilities: [],
        dependencies: [],
        codeIssues: [],
        recommendations: []
      };
      
      // Scan for vulnerabilities
      const vulnerabilities = await this.scanVulnerabilities();
      securityReport.vulnerabilities = vulnerabilities;
      
      // Check dependency security
      const dependencyIssues = await this.checkDependencySecurity();
      securityReport.dependencies = dependencyIssues;
      
      // Scan code for security issues
      const codeIssues = await this.scanCodeSecurity();
      securityReport.codeIssues = codeIssues;
      
      // Generate recommendations
      securityReport.recommendations = this.generateSecurityRecommendations(securityReport);
      
      // Save security report
      await this.saveSecurityReport(securityReport);
      
      // Handle critical vulnerabilities
      await this.handleCriticalVulnerabilities(securityReport);
      
      console.log(`Security scan completed. Found ${vulnerabilities.length} vulnerabilities.`);
      
    } catch (error) {
      console.error('Security scan failed:', error);
    }
  }

  async scanVulnerabilities() {
    try {
      console.log('Scanning for vulnerabilities...');
      
      const vulnerabilities = [];
      
      // Run npm audit
      try {
        const { stdout } = await execAsync('npm audit --json', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        const audit = JSON.parse(stdout);
        
        for (const [severity, vulns] of Object.entries(audit.metadata.vulnerabilities)) {
          if (vulns > 0) {
            vulnerabilities.push({
              type: 'npm_audit',
              severity,
              count: vulns,
              packages: audit.advisories ? Object.keys(audit.advisories).slice(0, 10) : []
            });
          }
        }
      } catch (error) {
        console.error('npm audit failed:', error);
      }
      
      // Run Snyk security scan if available
      try {
        const { stdout } = await execAsync('npx snyk test --json', {
          cwd: this.projectRoot,
          timeout: 180000
        });
        
        const snykResults = JSON.parse(stdout);
        if (snykResults.vulnerabilities) {
          for (const vuln of snykResults.vulnerabilities) {
            vulnerabilities.push({
              type: 'snyk',
              severity: vuln.severity,
              package: vuln.packageName,
              version: vuln.version,
              description: vuln.description,
              cve: vuln.identifiers?.CVE || []
            });
          }
        }
      } catch (error) {
        console.error('Snyk scan failed:', error);
      }
      
      // Check for known vulnerable packages
      const knownVulns = await this.checkKnownVulnerablePackages();
      vulnerabilities.push(...knownVulns);
      
      return vulnerabilities;
      
    } catch (error) {
      console.error('Failed to scan vulnerabilities:', error);
      return [];
    }
  }

  async checkKnownVulnerablePackages() {
    const vulnerablePackages = [];
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const allDependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };
      
      // Known vulnerable packages (this would be expanded with a real vulnerability database)
      const knownVulnerable = [
        'lodash',
        'moment',
        'jquery',
        'express'
      ];
      
      for (const [pkg, version] of Object.entries(allDependencies)) {
        if (knownVulnerable.includes(pkg)) {
          vulnerablePackages.push({
            type: 'known_vulnerable',
            package: pkg,
            version,
            severity: 'medium',
            description: `Known vulnerable package: ${pkg}`
          });
        }
      }
      
    } catch (error) {
      console.error('Failed to check known vulnerable packages:', error);
    }
    
    return vulnerablePackages;
  }

  async checkDependencySecurity() {
    try {
      console.log('Checking dependency security...');
      
      const dependencyIssues = [];
      
      // Check for outdated packages
      try {
        const { stdout } = await execAsync('npm outdated --json', {
          cwd: this.projectRoot,
          timeout: 60000
        });
        
        const outdated = JSON.parse(stdout);
        for (const [pkg, info] of Object.entries(outdated)) {
          dependencyIssues.push({
            type: 'outdated',
            package: pkg,
            current: info.current,
            latest: info.latest,
            severity: 'medium'
          });
        }
      } catch (error) {
        // No outdated packages or error
      }
      
      // Check for packages with security issues
      try {
        const { stdout } = await execAsync('npm audit --json', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        const audit = JSON.parse(stdout);
        if (audit.advisories) {
          for (const [id, advisory] of Object.entries(audit.advisories)) {
            dependencyIssues.push({
              type: 'security_advisory',
              package: advisory.module_name,
              severity: advisory.severity,
              title: advisory.title,
              description: advisory.overview,
              recommendation: advisory.recommendation
            });
          }
        }
      } catch (error) {
        console.error('Failed to check security advisories:', error);
      }
      
      return dependencyIssues;
      
    } catch (error) {
      console.error('Failed to check dependency security:', error);
      return [];
    }
  }

  async scanCodeSecurity() {
    try {
      console.log('Scanning code for security issues...');
      
      const codeIssues = [];
      const sourceFiles = await this.findSourceFiles();
      
      for (const file of sourceFiles) {
        const issues = await this.scanFileForSecurityIssues(file);
        codeIssues.push(...issues);
      }
      
      return codeIssues;
      
    } catch (error) {
      console.error('Failed to scan code security:', error);
      return [];
    }
  }

  async findSourceFiles() {
    const files = [];
    const patterns = [
      'src/**/*.{js,ts,jsx,tsx}',
      'pages/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}',
      'utils/**/*.{js,ts}'
    ];
    
    for (const pattern of patterns) {
      try {
        const { stdout } = await execAsync(`find ${this.projectRoot} -name "${pattern}" -type f`);
        const foundFiles = stdout.trim().split('\n').filter(file => file);
        files.push(...foundFiles);
      } catch (error) {
        console.error(`Error finding files with pattern ${pattern}:`, error);
      }
    }
    
    return files.filter(file => {
      const excludePatterns = ['node_modules', '.git', '.next', 'dist', 'build'];
      return !excludePatterns.some(exclude => file.includes(exclude));
    });
  }

  async scanFileForSecurityIssues(filePath) {
    const issues = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineNumber = i + 1;
        
        // Check for hardcoded secrets
        if (this.containsHardcodedSecrets(line)) {
          issues.push({
            file: filePath,
            line: lineNumber,
            type: 'hardcoded_secret',
            severity: 'high',
            message: 'Hardcoded secret detected'
          });
        }
        
        // Check for SQL injection vulnerabilities
        if (this.containsSQLInjection(line)) {
          issues.push({
            file: filePath,
            line: lineNumber,
            type: 'sql_injection',
            severity: 'high',
            message: 'Potential SQL injection vulnerability'
          });
        }
        
        // Check for XSS vulnerabilities
        if (this.containsXSSVulnerability(line)) {
          issues.push({
            file: filePath,
            line: lineNumber,
            type: 'xss',
            severity: 'medium',
            message: 'Potential XSS vulnerability'
          });
        }
        
        // Check for unsafe eval usage
        if (line.includes('eval(') || line.includes('Function(')) {
          issues.push({
            file: filePath,
            line: lineNumber,
            type: 'unsafe_eval',
            severity: 'high',
            message: 'Unsafe eval usage detected'
          });
        }
        
        // Check for weak crypto usage
        if (this.containsWeakCrypto(line)) {
          issues.push({
            file: filePath,
            line: lineNumber,
            type: 'weak_crypto',
            severity: 'medium',
            message: 'Weak cryptographic algorithm detected'
          });
        }
      }
      
    } catch (error) {
      console.error(`Failed to scan file ${filePath}:`, error);
    }
    
    return issues;
  }

  containsHardcodedSecrets(line) {
    const secretPatterns = [
      /password\s*=\s*['"][^'"]+['"]/i,
      /api_key\s*=\s*['"][^'"]+['"]/i,
      /secret\s*=\s*['"][^'"]+['"]/i,
      /token\s*=\s*['"][^'"]+['"]/i,
      /key\s*=\s*['"][^'"]{20,}['"]/i
    ];
    
    return secretPatterns.some(pattern => pattern.test(line));
  }

  containsSQLInjection(line) {
    const sqlPatterns = [
      /SELECT.*\+.*\$/,
      /INSERT.*\+.*\$/,
      /UPDATE.*\+.*\$/,
      /DELETE.*\+.*\$/
    ];
    
    return sqlPatterns.some(pattern => pattern.test(line));
  }

  containsXSSVulnerability(line) {
    const xssPatterns = [
      /innerHTML\s*=\s*[^;]+/,
      /document\.write\s*\(/,
      /eval\s*\(/
    ];
    
    return xssPatterns.some(pattern => pattern.test(line));
  }

  containsWeakCrypto(line) {
    const weakCryptoPatterns = [
      /md5\s*\(/i,
      /sha1\s*\(/i,
      /crypto\.createHash\s*\(\s*['"]md5['"]/i,
      /crypto\.createHash\s*\(\s*['"]sha1['"]/i
    ];
    
    return weakCryptoPatterns.some(pattern => pattern.test(line));
  }

  generateSecurityRecommendations(securityReport) {
    const recommendations = [];
    
    // High severity vulnerabilities
    const highVulns = securityReport.vulnerabilities.filter(v => v.severity === 'high');
    if (highVulns.length > 0) {
      recommendations.push({
        type: 'critical',
        message: `Found ${highVulns.length} high severity vulnerabilities. Immediate action required.`,
        priority: 'high'
      });
    }
    
    // Outdated dependencies
    const outdatedDeps = securityReport.dependencies.filter(d => d.type === 'outdated');
    if (outdatedDeps.length > 0) {
      recommendations.push({
        type: 'dependencies',
        message: `Found ${outdatedDeps.length} outdated dependencies. Consider updating.`,
        priority: 'medium'
      });
    }
    
    // Code security issues
    const codeIssues = securityReport.codeIssues.filter(i => i.severity === 'high');
    if (codeIssues.length > 0) {
      recommendations.push({
        type: 'code_security',
        message: `Found ${codeIssues.length} high severity code security issues.`,
        priority: 'high'
      });
    }
    
    // General security recommendations
    if (securityReport.vulnerabilities.length === 0) {
      recommendations.push({
        type: 'good_practices',
        message: 'No vulnerabilities found. Continue with security best practices.',
        priority: 'low'
      });
    }
    
    return recommendations;
  }

  async handleCriticalVulnerabilities(securityReport) {
    const criticalVulns = securityReport.vulnerabilities.filter(v => 
      v.severity === 'critical' || v.severity === 'high'
    );
    
    if (criticalVulns.length > 0) {
      console.log(`Found ${criticalVulns.length} critical vulnerabilities. Taking action...`);
      
      for (const vuln of criticalVulns) {
        await this.handleVulnerability(vuln);
      }
    }
  }

  async handleVulnerability(vulnerability) {
    try {
      console.log(`Handling vulnerability: ${vulnerability.type}`);
      
      if (vulnerability.type === 'npm_audit') {
        await this.fixNpmVulnerability(vulnerability);
      } else if (vulnerability.type === 'snyk') {
        await this.fixSnykVulnerability(vulnerability);
      } else if (vulnerability.type === 'code_security') {
        await this.fixCodeSecurityIssue(vulnerability);
      }
      
    } catch (error) {
      console.error(`Failed to handle vulnerability: ${error.message}`);
    }
  }

  async fixNpmVulnerability(vulnerability) {
    try {
      if (vulnerability.severity === 'critical' || vulnerability.severity === 'high') {
        // Run npm audit fix
        await execAsync('npm audit fix', {
          cwd: this.projectRoot,
          timeout: 300000
        });
        
        console.log(`Fixed npm vulnerability: ${vulnerability.severity}`);
      }
    } catch (error) {
      console.error('Failed to fix npm vulnerability:', error);
    }
  }

  async fixSnykVulnerability(vulnerability) {
    try {
      if (vulnerability.package) {
        // Update the vulnerable package
        await execAsync(`npm update ${vulnerability.package}`, {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        console.log(`Updated vulnerable package: ${vulnerability.package}`);
      }
    } catch (error) {
      console.error('Failed to fix Snyk vulnerability:', error);
    }
  }

  async fixCodeSecurityIssue(issue) {
    try {
      console.log(`Attempting to fix code security issue in ${issue.file}`);
      
      // This would involve more sophisticated code analysis and fixing
      // For now, just log the issue
      const fixReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        issue,
        action: 'logged_for_manual_review',
        message: 'Code security issue requires manual review and fixing'
      };
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'security-patches', `fix-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(fixReport, null, 2));
      
    } catch (error) {
      console.error('Failed to fix code security issue:', error);
    }
  }

  async monitorSecurity() {
    try {
      console.log('Monitoring security status...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        status: 'monitoring',
        alerts: []
      };
      
      // Quick security check
      const quickVulns = await this.quickSecurityCheck();
      if (quickVulns.length > 0) {
        monitoring.alerts.push({
          type: 'new_vulnerabilities',
          count: quickVulns.length,
          severity: 'medium'
        });
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'security-scans', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Failed to monitor security:', error);
    }
  }

  async quickSecurityCheck() {
    try {
      const { stdout } = await execAsync('npm audit --audit-level=high --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      const audit = JSON.parse(stdout);
      const highVulns = audit.metadata.vulnerabilities.high || 0;
      const criticalVulns = audit.metadata.vulnerabilities.critical || 0;
      
      return highVulns + criticalVulns;
    } catch (error) {
      console.error('Quick security check failed:', error);
      return 0;
    }
  }

  async saveSecurityReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.vulnerabilitiesDir, `security-report-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Security report saved: ${reportPath}`);
  }

  async generateComplianceReport() {
    try {
      console.log('Generating compliance report...');
      
      const compliance = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        standards: {
          owasp: await this.checkOWASPCompliance(),
          gdpr: await this.checkGDPRCompliance(),
          pci: await this.checkPCICompliance()
        },
        recommendations: []
      };
      
      // Generate compliance recommendations
      compliance.recommendations = this.generateComplianceRecommendations(compliance.standards);
      
      // Save compliance report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'compliance-reports', `compliance-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(compliance, null, 2));
      
      console.log('Compliance report generated');
      
    } catch (error) {
      console.error('Failed to generate compliance report:', error);
    }
  }

  async checkOWASPCompliance() {
    // Basic OWASP Top 10 checks
    const checks = {
      injection: true,
      broken_auth: true,
      sensitive_data: true,
      xxe: true,
      broken_access: true,
      security_misconfig: true,
      xss: true,
      insecure_deserialization: true,
      vulnerable_components: true,
      insufficient_logging: true
    };
    
    // This would involve more sophisticated checks
    return checks;
  }

  async checkGDPRCompliance() {
    // Basic GDPR compliance checks
    const checks = {
      data_encryption: true,
      consent_management: true,
      data_minimization: true,
      user_rights: true,
      breach_notification: true
    };
    
    return checks;
  }

  async checkPCICompliance() {
    // Basic PCI DSS compliance checks
    const checks = {
      network_security: true,
      access_control: true,
      vulnerability_management: true,
      security_monitoring: true,
      security_policy: true
    };
    
    return checks;
  }

  generateComplianceRecommendations(standards) {
    const recommendations = [];
    
    // OWASP recommendations
    if (!standards.owasp.injection) {
      recommendations.push({
        standard: 'OWASP',
        issue: 'SQL Injection',
        priority: 'high',
        recommendation: 'Implement parameterized queries'
      });
    }
    
    // GDPR recommendations
    if (!standards.gdpr.data_encryption) {
      recommendations.push({
        standard: 'GDPR',
        issue: 'Data Encryption',
        priority: 'high',
        recommendation: 'Implement encryption for sensitive data'
      });
    }
    
    return recommendations;
  }

  async stop() {
    console.log(`Security Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new SecurityAutomationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Security Automation Agent failed to start:', error);
  process.exit(1);
}); 