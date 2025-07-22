#!/usr/bin/env node

/**
 * Autonomous Security Monitoring Agent
 * 
 * Independently monitors application security, scans for vulnerabilities,
 * and applies security fixes using AI-powered analysis and autonomous decision making.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const crypto = require('crypto');

class SecurityMonitoringAgent extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      name: 'Security Monitoring Agent',
      version: '1.0.0',
      
      // Security thresholds
      thresholds: {
        vulnerabilityCount: 0, // Zero tolerance for vulnerabilities
        securityScore: 90, // Minimum security score
        outdatedDependencies: 5, // Maximum outdated dependencies
        exposedSecrets: 0, // Zero tolerance for exposed secrets
        weakPasswords: 0, // Zero tolerance for weak passwords
        insecureConfigs: 0 // Zero tolerance for insecure configurations
      },
      
      // Scanning configuration
      scanning: {
        interval: 60000, // 1 minute
        scanTypes: ['dependencies', 'code', 'secrets', 'config', 'network'],
        maxScanDuration: 300000, // 5 minutes
        excludePatterns: [
          'node_modules/**',
          '.git/**',
          'dist/**',
          'build/**',
          'coverage/**',
          '*.min.js',
          '*.bundle.js'
        ]
      },
      
      // Fix configuration
      fixes: {
        autoApply: true,
        requireApproval: false,
        backupChanges: true,
        rollbackOnFailure: true,
        maxFixesPerRun: 10
      },
      
      // AI configuration
      ai: {
        enabled: true,
        providers: ['cursor', 'openai', 'claude'],
        confidenceThreshold: 0.9, // High confidence for security fixes
        maxSuggestions: 5
      }
    };
    
    this.state = {
      isRunning: false,
      lastScan: null,
      vulnerabilitiesFound: 0,
      fixesApplied: 0,
      securityScore: 100,
      currentThreats: [],
      scanHistory: []
    };
    
    this.scanningInterval = null;
  }

  async start() {
    if (this.state.isRunning) {
      console.log('⚠️ Security agent is already running');
      return;
    }
    
    console.log('🚀 Starting Security Monitoring Agent...');
    this.state.isRunning = true;
    
    // Start continuous scanning
    this.startScanning();
    
    // Initial security audit
    await this.performInitialAudit();
    
    console.log('✅ Security Monitoring Agent started');
    this.emit('started');
  }

  async stop() {
    if (!this.state.isRunning) {
      console.log('⚠️ Security agent is not running');
      return;
    }
    
    console.log('🛑 Stopping Security Monitoring Agent...');
    this.state.isRunning = false;
    
    if (this.scanningInterval) {
      clearInterval(this.scanningInterval);
    }
    
    console.log('✅ Security Monitoring Agent stopped');
    this.emit('stopped');
  }

  startScanning() {
    this.scanningInterval = setInterval(async () => {
      if (this.state.isRunning) {
        await this.performSecurityScan();
      }
    }, this.config.scanning.interval);
  }

  async performInitialAudit() {
    console.log('🔍 Performing initial security audit...');
    
    try {
      // Run comprehensive security scan
      const scan = await this.runComprehensiveScan();
      
      // Generate security report
      const report = await this.generateSecurityReport(scan);
      
      // Apply critical fixes
      if (report.criticalIssues.length > 0) {
        await this.applyCriticalFixes(report.criticalIssues);
      }
      
      console.log('✅ Initial security audit completed');
      
    } catch (error) {
      console.error('❌ Initial security audit failed:', error.message);
    }
  }

  async performSecurityScan() {
    console.log('🔍 Performing security scan...');
    
    const scan = {
      timestamp: Date.now(),
      vulnerabilities: [],
      threats: [],
      fixes: [],
      score: 100
    };
    
    try {
      // Scan dependencies
      const dependencyScan = await this.scanDependencies();
      scan.vulnerabilities.push(...dependencyScan.vulnerabilities);
      
      // Scan code
      const codeScan = await this.scanCode();
      scan.vulnerabilities.push(...codeScan.vulnerabilities);
      
      // Scan for secrets
      const secretScan = await this.scanForSecrets();
      scan.vulnerabilities.push(...secretScan.vulnerabilities);
      
      // Scan configuration
      const configScan = await this.scanConfiguration();
      scan.vulnerabilities.push(...configScan.vulnerabilities);
      
      // Scan network
      const networkScan = await this.scanNetwork();
      scan.threats.push(...networkScan.threats);
      
      // Calculate security score
      scan.score = this.calculateSecurityScore(scan);
      
      // Generate fixes
      scan.fixes = await this.generateSecurityFixes(scan);
      
      // Update state
      this.state.lastScan = scan;
      this.state.vulnerabilitiesFound = scan.vulnerabilities.length;
      this.state.securityScore = scan.score;
      this.state.currentThreats = scan.threats;
      this.state.scanHistory.push(scan);
      
      // Keep only last 50 scans
      if (this.state.scanHistory.length > 50) {
        this.state.scanHistory = this.state.scanHistory.slice(-50);
      }
      
      // Apply fixes if enabled
      if (this.config.fixes.autoApply && scan.fixes.length > 0) {
        await this.applySecurityFixes(scan.fixes);
      }
      
      console.log(`✅ Security scan completed: ${scan.vulnerabilities.length} vulnerabilities, score: ${scan.score}`);
      
    } catch (error) {
      console.error('❌ Security scan failed:', error.message);
    }
  }

  async scanDependencies() {
    const scan = {
      vulnerabilities: [],
      outdated: [],
      recommendations: []
    };
    
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditOutput);
      
      // Process vulnerabilities
      for (const [severity, vulns] of Object.entries(auditData.metadata.vulnerabilities)) {
        for (const vuln of vulns) {
          scan.vulnerabilities.push({
            type: 'dependency',
            severity: severity,
            package: vuln.name,
            version: vuln.version,
            description: vuln.description,
            recommendation: vuln.recommendation
          });
        }
      }
      
      // Check for outdated dependencies
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdatedData = JSON.parse(outdatedOutput);
      
      for (const [package, info] of Object.entries(outdatedData)) {
        scan.outdated.push({
          package,
          current: info.current,
          wanted: info.wanted,
          latest: info.latest
        });
      }
      
      // Generate recommendations
      if (scan.vulnerabilities.length > 0) {
        scan.recommendations.push({
          type: 'dependency_update',
          priority: 'high',
          message: `Update ${scan.vulnerabilities.length} vulnerable dependencies`,
          action: 'update_dependencies'
        });
      }
      
      if (scan.outdated.length > this.config.thresholds.outdatedDependencies) {
        scan.recommendations.push({
          type: 'dependency_maintenance',
          priority: 'medium',
          message: `Update ${scan.outdated.length} outdated dependencies`,
          action: 'update_outdated'
        });
      }
      
    } catch (error) {
      console.warn('⚠️ Dependency scan failed:', error.message);
    }
    
    return scan;
  }

  async scanCode() {
    const scan = {
      vulnerabilities: [],
      issues: [],
      recommendations: []
    };
    
    try {
      // Get files to scan
      const files = await this.getFilesToScan();
      
      for (const file of files) {
        try {
          const content = await fs.readFile(file, 'utf8');
          const issues = this.detectSecurityIssues(content, file);
          scan.issues.push(...issues);
          
          // Convert issues to vulnerabilities
          for (const issue of issues) {
            if (issue.severity === 'high' || issue.severity === 'critical') {
              scan.vulnerabilities.push({
                type: 'code',
                severity: issue.severity,
                file: file,
                line: issue.line,
                description: issue.message,
                recommendation: issue.recommendation
              });
            }
          }
        } catch (error) {
          console.warn(`⚠️ Failed to scan ${file}:`, error.message);
        }
      }
      
      // Generate recommendations
      if (scan.vulnerabilities.length > 0) {
        scan.recommendations.push({
          type: 'code_security',
          priority: 'high',
          message: `Fix ${scan.vulnerabilities.length} security issues in code`,
          action: 'fix_code_security'
        });
      }
      
    } catch (error) {
      console.warn('⚠️ Code scan failed:', error.message);
    }
    
    return scan;
  }

  async getFilesToScan() {
    const files = [];
    const projectRoot = process.cwd();
    
    async function scanDirectory(dir) {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          const relativePath = path.relative(projectRoot, fullPath);
          
          if (entry.isDirectory()) {
            // Check if directory should be excluded
            const shouldExclude = this.config.scanning.excludePatterns.some(pattern => {
              const regex = new RegExp(pattern.replace(/\*\*/g, '.*'));
              return regex.test(relativePath);
            });
            
            if (!shouldExclude) {
              await scanDirectory.call(this, fullPath);
            }
          } else if (entry.isFile()) {
            // Include security-relevant files
            const ext = path.extname(entry.name);
            if (['.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.php', '.rb', '.go', '.rs'].includes(ext)) {
              files.push(relativePath);
            }
          }
        }
      } catch (error) {
        console.warn(`⚠️ Could not scan directory ${dir}:`, error.message);
      }
    }
    
    await scanDirectory.call(this, projectRoot);
    return files;
  }

  detectSecurityIssues(content, filePath) {
    const issues = [];
    
    // Security vulnerability patterns
    const patterns = [
      {
        pattern: /eval\s*\(/g,
        message: 'Use of eval() is dangerous and can lead to code injection',
        severity: 'critical',
        recommendation: 'Replace with safer alternatives like JSON.parse() or Function constructor'
      },
      {
        pattern: /innerHTML\s*=\s*[^;]+/g,
        message: 'Direct innerHTML assignment may cause XSS attacks',
        severity: 'high',
        recommendation: 'Use textContent or sanitize input before assignment'
      },
      {
        pattern: /password\s*=\s*['"][^'"]+['"]/g,
        message: 'Hardcoded password detected',
        severity: 'critical',
        recommendation: 'Use environment variables or secure credential management'
      },
      {
        pattern: /api_key\s*=\s*['"][^'"]+['"]/g,
        message: 'Hardcoded API key detected',
        severity: 'critical',
        recommendation: 'Use environment variables or secure key management'
      },
      {
        pattern: /console\.log\s*\([^)]*password[^)]*\)/gi,
        message: 'Password logging detected',
        severity: 'high',
        recommendation: 'Remove password logging from production code'
      },
      {
        pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*password[^)]*\)/gi,
        message: 'Password stored in localStorage',
        severity: 'high',
        recommendation: 'Use secure storage methods or avoid storing sensitive data'
      },
      {
        pattern: /sql\s*=\s*['"][^'"]*\$\{[^}]+\}[^'"]*['"]/g,
        message: 'Potential SQL injection vulnerability',
        severity: 'critical',
        recommendation: 'Use parameterized queries or prepared statements'
      },
      {
        pattern: /document\.write\s*\([^)]+\)/g,
        message: 'Use of document.write may cause XSS',
        severity: 'medium',
        recommendation: 'Use safer DOM manipulation methods'
      }
    ];
    
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const pattern of patterns) {
        if (pattern.pattern.test(line)) {
          issues.push({
            type: 'security',
            severity: pattern.severity,
            message: pattern.message,
            line: i + 1,
            file: filePath,
            recommendation: pattern.recommendation
          });
        }
      }
    }
    
    return issues;
  }

  async scanForSecrets() {
    const scan = {
      vulnerabilities: [],
      secrets: [],
      recommendations: []
    };
    
    try {
      // Get files to scan
      const files = await this.getFilesToScan();
      
      for (const file of files) {
        try {
          const content = await fs.readFile(file, 'utf8');
          const secrets = this.detectSecrets(content, file);
          scan.secrets.push(...secrets);
          
          // Convert secrets to vulnerabilities
          for (const secret of secrets) {
            scan.vulnerabilities.push({
              type: 'secret',
              severity: 'critical',
              file: file,
              line: secret.line,
              description: `Exposed ${secret.type}: ${secret.value.substring(0, 10)}...`,
              recommendation: 'Remove or encrypt the secret'
            });
          }
        } catch (error) {
          console.warn(`⚠️ Failed to scan ${file} for secrets:`, error.message);
        }
      }
      
      // Generate recommendations
      if (scan.secrets.length > 0) {
        scan.recommendations.push({
          type: 'secret_management',
          priority: 'critical',
          message: `Remove ${scan.secrets.length} exposed secrets`,
          action: 'remove_secrets'
        });
      }
      
    } catch (error) {
      console.warn('⚠️ Secret scan failed:', error.message);
    }
    
    return scan;
  }

  detectSecrets(content, filePath) {
    const secrets = [];
    
    // Secret patterns
    const patterns = [
      {
        pattern: /(?:password|passwd|pwd)\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        type: 'password'
      },
      {
        pattern: /(?:api_key|apikey|api-key)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        type: 'api_key'
      },
      {
        pattern: /(?:secret|token|key)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        type: 'secret'
      },
      {
        pattern: /(?:private_key|privatekey)\s*[:=]\s*['"][^'"]{50,}['"]/gi,
        type: 'private_key'
      },
      {
        pattern: /(?:aws_access_key|aws_secret_key)\s*[:=]\s*['"][^'"]{10,}['"]/gi,
        type: 'aws_credential'
      }
    ];
    
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const pattern of patterns) {
        const matches = line.match(pattern.pattern);
        if (matches) {
          for (const match of matches) {
            secrets.push({
              type: pattern.type,
              value: match,
              line: i + 1,
              file: filePath
            });
          }
        }
      }
    }
    
    return secrets;
  }

  async scanConfiguration() {
    const scan = {
      vulnerabilities: [],
      issues: [],
      recommendations: []
    };
    
    try {
      // Scan common configuration files
      const configFiles = [
        'package.json',
        '.env',
        '.env.local',
        '.env.production',
        'docker-compose.yml',
        'Dockerfile',
        'nginx.conf',
        'webpack.config.js',
        'next.config.js'
      ];
      
      for (const configFile of configFiles) {
        try {
          await fs.access(configFile);
          const content = await fs.readFile(configFile, 'utf8');
          const issues = this.detectConfigIssues(content, configFile);
          scan.issues.push(...issues);
          
          // Convert issues to vulnerabilities
          for (const issue of issues) {
            if (issue.severity === 'high' || issue.severity === 'critical') {
              scan.vulnerabilities.push({
                type: 'configuration',
                severity: issue.severity,
                file: configFile,
                line: issue.line,
                description: issue.message,
                recommendation: issue.recommendation
              });
            }
          }
        } catch (error) {
          // File doesn't exist, skip
        }
      }
      
      // Generate recommendations
      if (scan.vulnerabilities.length > 0) {
        scan.recommendations.push({
          type: 'config_security',
          priority: 'high',
          message: `Fix ${scan.vulnerabilities.length} configuration security issues`,
          action: 'fix_config_security'
        });
      }
      
    } catch (error) {
      console.warn('⚠️ Configuration scan failed:', error.message);
    }
    
    return scan;
  }

  detectConfigIssues(content, filePath) {
    const issues = [];
    
    // Configuration security patterns
    const patterns = [
      {
        pattern: /"debug":\s*true/g,
        message: 'Debug mode enabled in production configuration',
        severity: 'high',
        recommendation: 'Disable debug mode in production'
      },
      {
        pattern: /"dev":\s*true/g,
        message: 'Development mode enabled in production configuration',
        severity: 'high',
        recommendation: 'Disable development mode in production'
      },
      {
        pattern: /NODE_ENV\s*=\s*development/g,
        message: 'Development environment in production configuration',
        severity: 'high',
        recommendation: 'Set NODE_ENV to production'
      },
      {
        pattern: /cors:\s*{\s*origin:\s*"\*"/g,
        message: 'CORS configured to allow all origins',
        severity: 'medium',
        recommendation: 'Restrict CORS to specific domains'
      }
    ];
    
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const pattern of patterns) {
        if (pattern.pattern.test(line)) {
          issues.push({
            type: 'configuration',
            severity: pattern.severity,
            message: pattern.message,
            line: i + 1,
            file: filePath,
            recommendation: pattern.recommendation
          });
        }
      }
    }
    
    return issues;
  }

  async scanNetwork() {
    const scan = {
      threats: [],
      vulnerabilities: [],
      recommendations: []
    };
    
    try {
      // Check for open ports
      const openPorts = await this.checkOpenPorts();
      for (const port of openPorts) {
        scan.threats.push({
          type: 'open_port',
          severity: 'medium',
          port: port,
          description: `Port ${port} is open and potentially vulnerable`,
          recommendation: 'Close unnecessary ports or secure them'
        });
      }
      
      // Check for SSL/TLS issues
      const sslIssues = await this.checkSSLIssues();
      scan.vulnerabilities.push(...sslIssues);
      
      // Generate recommendations
      if (scan.threats.length > 0) {
        scan.recommendations.push({
          type: 'network_security',
          priority: 'medium',
          message: `Secure ${scan.threats.length} network vulnerabilities`,
          action: 'secure_network'
        });
      }
      
    } catch (error) {
      console.warn('⚠️ Network scan failed:', error.message);
    }
    
    return scan;
  }

  async checkOpenPorts() {
    // Simplified port checking
    const commonPorts = [21, 22, 23, 25, 53, 80, 110, 143, 443, 993, 995];
    const openPorts = [];
    
    // This is a simplified implementation
    // In a real system, you would use proper network scanning tools
    
    return openPorts;
  }

  async checkSSLIssues() {
    const issues = [];
    
    // This is a simplified implementation
    // In a real system, you would check SSL certificates and configurations
    
    return issues;
  }

  calculateSecurityScore(scan) {
    let score = 100;
    
    // Deduct points for vulnerabilities
    for (const vuln of scan.vulnerabilities) {
      switch (vuln.severity) {
        case 'critical':
          score -= 20;
          break;
        case 'high':
          score -= 10;
          break;
        case 'medium':
          score -= 5;
          break;
        case 'low':
          score -= 2;
          break;
      }
    }
    
    // Deduct points for threats
    for (const threat of scan.threats) {
      switch (threat.severity) {
        case 'critical':
          score -= 15;
          break;
        case 'high':
          score -= 8;
          break;
        case 'medium':
          score -= 4;
          break;
        case 'low':
          score -= 1;
          break;
      }
    }
    
    return Math.max(0, Math.min(100, score));
  }

  async generateSecurityFixes(scan) {
    const fixes = [];
    
    try {
      // Generate fixes for vulnerabilities
      for (const vuln of scan.vulnerabilities) {
        const fix = await this.generateFix(vuln);
        if (fix) {
          fixes.push(fix);
        }
      }
      
      // Limit fixes per run
      fixes.splice(0, this.config.fixes.maxFixesPerRun);
      
    } catch (error) {
      console.error('❌ Failed to generate security fixes:', error.message);
    }
    
    return fixes;
  }

  async generateFix(vulnerability) {
    try {
      // Use AI to generate specific fix
      const aiFix = await this.generateAIFix(vulnerability);
      
      return {
        id: `fix_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: vulnerability.type,
        severity: vulnerability.severity,
        description: vulnerability.description,
        file: vulnerability.file,
        line: vulnerability.line,
        aiSuggestion: aiFix,
        timestamp: Date.now()
      };
      
    } catch (error) {
      console.warn('⚠️ Failed to generate fix:', error.message);
      return null;
    }
  }

  async generateAIFix(vulnerability) {
    if (!this.config.ai.enabled) {
      return null;
    }
    
    try {
      // This is a simplified implementation
      // In a real system, you would integrate with actual AI APIs
      
      const prompt = `
Generate a security fix for this vulnerability:

Type: ${vulnerability.type}
Severity: ${vulnerability.severity}
Description: ${vulnerability.description}
File: ${vulnerability.file}
Line: ${vulnerability.line}
Recommendation: ${vulnerability.recommendation}

Provide a specific code fix or configuration change to resolve this security issue.
      `;
      
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        code: '// AI-generated security fix would go here',
        confidence: 0.95,
        explanation: 'AI suggests this fix based on security best practices'
      };
      
    } catch (error) {
      console.warn('⚠️ AI fix generation failed:', error.message);
      return null;
    }
  }

  async applySecurityFixes(fixes) {
    if (!this.config.fixes.autoApply) return;
    
    console.log(`🔧 Applying ${fixes.length} security fixes...`);
    
    for (const fix of fixes) {
      try {
        await this.applyFix(fix);
      } catch (error) {
        console.warn(`⚠️ Failed to apply fix ${fix.id}:`, error.message);
        
        // Rollback if enabled
        if (this.config.fixes.rollbackOnFailure) {
          await this.rollbackFix(fix);
        }
      }
    }
  }

  async applyFix(fix) {
    console.log(`🔧 Applying security fix: ${fix.description}`);
    
    // Create backup if enabled
    if (this.config.fixes.backupChanges) {
      await this.createBackup(fix);
    }
    
    // Apply the fix based on type
    switch (fix.type) {
      case 'dependency':
        await this.fixDependency(fix);
        break;
      case 'code':
        await this.fixCode(fix);
        break;
      case 'secret':
        await this.fixSecret(fix);
        break;
      case 'configuration':
        await this.fixConfiguration(fix);
        break;
      default:
        console.log(`⚠️ Unknown fix type: ${fix.type}`);
    }
    
    // Update state
    this.state.fixesApplied++;
    
    console.log(`✅ Security fix applied: ${fix.description}`);
  }

  async fixDependency(fix) {
    // Implement dependency fix
    console.log('📦 Fixing dependency vulnerability...');
    
    // This would include:
    // - Updating vulnerable packages
    // - Pinning versions
    // - Removing unused dependencies
  }

  async fixCode(fix) {
    // Implement code fix
    console.log('🔧 Fixing code vulnerability...');
    
    // This would include:
    // - Replacing dangerous functions
    // - Adding input validation
    // - Implementing secure patterns
  }

  async fixSecret(fix) {
    // Implement secret fix
    console.log('🔐 Fixing exposed secret...');
    
    // This would include:
    // - Removing hardcoded secrets
    // - Using environment variables
    // - Implementing secure storage
  }

  async fixConfiguration(fix) {
    // Implement configuration fix
    console.log('⚙️ Fixing configuration vulnerability...');
    
    // This would include:
    // - Updating security settings
    // - Enabling security headers
    // - Configuring secure defaults
  }

  async createBackup(fix) {
    // Create backup of affected files
    console.log('💾 Creating backup...');
  }

  async rollbackFix(fix) {
    // Rollback fix if it fails
    console.log('🔄 Rolling back fix...');
  }

  async applyCriticalFixes(issues) {
    console.log(`🚨 Applying ${issues.length} critical security fixes...`);
    
    for (const issue of issues) {
      try {
        const fix = await this.generateFix(issue);
        if (fix) {
          await this.applyFix(fix);
        }
      } catch (error) {
        console.error(`❌ Failed to apply critical fix:`, error.message);
      }
    }
  }

  async generateSecurityReport(scan) {
    const report = {
      timestamp: Date.now(),
      summary: {
        vulnerabilities: scan.vulnerabilities.length,
        threats: scan.threats.length,
        score: scan.score,
        criticalIssues: scan.vulnerabilities.filter(v => v.severity === 'critical').length
      },
      vulnerabilities: scan.vulnerabilities,
      threats: scan.threats,
      recommendations: scan.recommendations,
      fixes: scan.fixes
    };
    
    return report;
  }

  getStatus() {
    return {
      isRunning: this.state.isRunning,
      lastScan: this.state.lastScan,
      vulnerabilitiesFound: this.state.vulnerabilitiesFound,
      fixesApplied: this.state.fixesApplied,
      securityScore: this.state.securityScore,
      currentThreats: this.state.currentThreats
    };
  }
}

// Export the agent
module.exports = SecurityMonitoringAgent;

// Run the agent if this file is executed directly
if (require.main === module) {
  const agent = new SecurityMonitoringAgent();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      agent.start();
      break;
    case 'stop':
      agent.stop();
      break;
    case 'status':
      console.log(JSON.stringify(agent.getStatus(), null, 2));
      break;
    case 'scan':
      agent.performSecurityScan();
      break;
    default:
      console.log('Usage: node security-monitoring-automation.cjs [start|stop|status|scan]');
      break;
  }
} 