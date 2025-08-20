#!/usr/bin/env node

'use strict';

// Load environment variables from .env file
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'security-scan.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

class SecurityScanner {
  constructor() {
    this.workspace = process.cwd();
    this.scans = [];
    this.results = [];
    this.vulnerabilities = [];
    this.warnings = [];
    this.recommendations = [];
  }
  
  addScan(name, scanFn, critical = false) {
    this.scans.push({ name, scanFn, critical });
  }
  
  async runScans() {
    log('🔒 Starting comprehensive security scan...');
    
    for (const scan of this.scans) {
      try {
        log(`  Running: ${scan.name}`);
        const result = await scan.scanFn();
        this.results.push({
          name: scan.name,
          status: 'PASS',
          result,
          critical: scan.critical
        });
        log(`    ✅ ${scan.name}: PASS`);
      } catch (error) {
        this.results.push({
          name: scan.name,
          status: 'FAIL',
          error: error.message,
          critical: scan.critical
        });
        log(`    ❌ ${scan.name}: FAIL - ${error.message}`);
        
        if (scan.critical) {
          this.vulnerabilities.push({
            scan: scan.name,
            error: error.message,
            severity: 'CRITICAL'
          });
        } else {
          this.warnings.push({
            scan: scan.name,
            error: error.message,
            severity: 'WARNING'
          });
        }
      }
    }
    
    return this.generateReport();
  }
  
  generateReport() {
    const totalScans = this.scans.length;
    const passedScans = this.results.filter(r => r.status === 'PASS').length;
    const failedScans = this.results.filter(r => r.status === 'FAIL').length;
    const criticalVulnerabilities = this.vulnerabilities.length;
    const warnings = this.warnings.length;
    
    const securityStatus = criticalVulnerabilities === 0 ? 'SECURE' : 'VULNERABLE';
    
    return {
      summary: {
        totalScans,
        passedScans,
        failedScans,
        criticalVulnerabilities,
        warnings,
        securityStatus,
        timestamp: new Date().toISOString()
      },
      results: this.results,
      vulnerabilities: this.vulnerabilities,
      warnings: this.warnings,
      recommendations: this.generateRecommendations()
    };
  }
  
  generateRecommendations() {
    const recommendations = [];
    
    if (this.vulnerabilities.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Immediate action required',
        description: 'Critical security vulnerabilities detected'
      });
    }
    
    if (this.warnings.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Review and address warnings',
        description: 'Security warnings should be reviewed'
      });
    }
    
    // Add specific recommendations based on scan results
    this.results.forEach(result => {
      if (result.status === 'FAIL') {
        switch (result.name) {
          case 'Dependency Security':
            recommendations.push({
              priority: 'HIGH',
              action: 'Update vulnerable dependencies',
              description: 'Run npm audit fix and update packages'
            });
            break;
          case 'Environment Variables':
            recommendations.push({
              priority: 'MEDIUM',
              action: 'Review environment variables',
              description: 'Ensure sensitive data is not exposed'
            });
            break;
          case 'File Permissions':
            recommendations.push({
              priority: 'MEDIUM',
              action: 'Fix file permissions',
              description: 'Ensure proper file access controls'
            });
            break;
        }
      }
    });
    
    return recommendations;
  }
  
  async saveReport(report) {
    const reportsDir = path.join(this.workspace, 'public', 'reports', 'security');
    ensureDir(reportsDir);
    
    const reportFile = path.join(reportsDir, 'latest.json');
    const htmlFile = path.join(reportsDir, 'index.html');
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const htmlContent = this.generateHTMLReport(report);
    fs.writeFileSync(htmlFile, htmlContent);
    
    log(`📊 Security report saved to ${reportFile} and ${htmlFile}`);
  }
  
  generateHTMLReport(report) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Scan Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { background: #f0f0f0; padding: 20px; border-radius: 5px; }
        .status { font-size: 24px; font-weight: bold; }
        .status.secure { color: #28a745; }
        .status.vulnerable { color: #dc3545; }
        .summary { margin: 20px 0; }
        .scan-result { margin: 10px 0; padding: 10px; border-radius: 3px; }
        .scan-result.pass { background: #d4edda; border: 1px solid #c3e6cb; }
        .scan-result.fail { background: #f8d7da; border: 1px solid #f5c6cb; }
        .vulnerabilities { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .recommendations { background: #d1ecf1; border: 1px solid #bee5eb; padding: 15px; margin: 20px 0; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🔒 Security Scan Report</h1>
        <div class="status ${report.summary.securityStatus.toLowerCase()}">
            Status: ${report.summary.securityStatus}
        </div>
        <p>Generated: ${new Date(report.summary.timestamp).toLocaleString()}</p>
    </div>
    
    <div class="summary">
        <h2>📊 Summary</h2>
        <p>Total Scans: ${report.summary.totalScans}</p>
        <p>Passed: ${report.summary.passedScans}</p>
        <p>Failed: ${report.summary.failedScans}</p>
        <p>Critical Vulnerabilities: ${report.summary.criticalVulnerabilities}</p>
        <p>Warnings: ${report.summary.warnings}</p>
    </div>
    
    <div class="scan-results">
        <h2>🔍 Scan Results</h2>
        ${report.results.map(result => `
            <div class="scan-result ${result.status.toLowerCase()}">
                <strong>${result.name}</strong>: ${result.status}
                ${result.error ? `<br><em>Error: ${result.error}</em>` : ''}
            </div>
        `).join('')}
    </div>
    
    ${report.vulnerabilities.length > 0 ? `
        <div class="vulnerabilities">
            <h2>🚨 Critical Vulnerabilities</h2>
            ${report.vulnerabilities.map(vuln => `
                <p><strong>${vuln.scan}</strong>: ${vuln.error}</p>
            `).join('')}
        </div>
    ` : ''}
    
    ${report.recommendations.length > 0 ? `
        <div class="recommendations">
            <h2>💡 Recommendations</h2>
            ${report.recommendations.map(rec => `
                <p><strong>${rec.priority}</strong>: ${rec.action} - ${rec.description}</p>
            `).join('')}
        </div>
    ` : ''}
</body>
</html>`;
  }
}

async function main() {
  const scanner = new SecurityScanner();
  
  // Add security scans
  scanner.addScan('Dependency Security', async () => {
    try {
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);
      
      if (audit.metadata && audit.metadata.vulnerabilities) {
        const vulns = audit.metadata.vulnerabilities;
        const totalVulns = Object.values(vulns).reduce((sum, count) => sum + count, 0);
        
        if (totalVulns > 0) {
          throw new Error(`Found ${totalVulns} vulnerabilities in dependencies`);
        }
      }
      
      return { status: 'secure', vulnerabilities: 0 };
    } catch (error) {
      if (error.status === 1) {
        // npm audit found vulnerabilities
        return { status: 'vulnerable', message: 'Dependencies have security vulnerabilities' };
      }
      throw error;
    }
  }, true);
  
  scanner.addScan('Environment Variables', async () => {
    const envFile = path.join(scanner.workspace, '.env');
    const envExampleFile = path.join(scanner.workspace, '.env.example');
    
    if (fs.existsSync(envFile)) {
      const envContent = fs.readFileSync(envFile, 'utf8');
      const sensitivePatterns = [
        /API_KEY/,
        /SECRET/,
        /PASSWORD/,
        /TOKEN/,
        /PRIVATE_KEY/
      ];
      
      const sensitiveVars = sensitivePatterns.filter(pattern => 
        envContent.match(pattern)
      );
      
      if (sensitiveVars.length > 0) {
        return { 
          status: 'warning', 
          message: `Found potentially sensitive environment variables: ${sensitiveVars.join(', ')}` 
        };
      }
    }
    
    return { status: 'secure', sensitiveVars: 0 };
  });
  
  scanner.addScan('File Permissions', async () => {
    const criticalFiles = [
      '.env',
      'package.json',
      'package-lock.json',
      'next.config.js'
    ];
    
    const permissionIssues = [];
    
    for (const file of criticalFiles) {
      const filePath = path.join(scanner.workspace, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const mode = stats.mode.toString(8);
        
        // Check if file is world-writable (security risk)
        if (mode.endsWith('666') || mode.endsWith('777')) {
          permissionIssues.push(`${file}: overly permissive (${mode})`);
        }
      }
    }
    
    if (permissionIssues.length > 0) {
      return { 
        status: 'warning', 
        message: `Permission issues found: ${permissionIssues.join(', ')}` 
      };
    }
    
    return { status: 'secure', permissionIssues: 0 };
  });
  
  scanner.addScan('Package Security', async () => {
    const packageFile = path.join(scanner.workspace, 'package.json');
    const packageContent = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
    
    const securityIssues = [];
    
    // Check for potentially dangerous scripts
    if (packageContent.scripts) {
      const dangerousScripts = Object.entries(packageContent.scripts)
        .filter(([name, script]) => 
          script.includes('rm -rf') || 
          script.includes('sudo') ||
          script.includes('chmod 777')
        );
      
      if (dangerousScripts.length > 0) {
        securityIssues.push(`Potentially dangerous scripts: ${dangerousScripts.map(([name]) => name).join(', ')}`);
      }
    }
    
    if (securityIssues.length > 0) {
      return { 
        status: 'warning', 
        message: securityIssues.join('; ') 
      };
    }
    
    return { status: 'secure', securityIssues: 0 };
  });
  
  scanner.addScan('Git Security', async () => {
    const gitDir = path.join(scanner.workspace, '.git');
    
    if (fs.existsSync(gitDir)) {
      // Check for sensitive files in git
      const sensitiveFiles = [
        '.env',
        '*.pem',
        '*.key',
        'secrets.json'
      ];
      
      try {
        const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
        const trackedFiles = execSync('git ls-files', { encoding: 'utf8' });
        
        const sensitiveInGit = sensitiveFiles.some(pattern => 
          trackedFiles.includes(pattern.replace('*', ''))
        );
        
        if (sensitiveInGit) {
          return { 
            status: 'warning', 
            message: 'Potentially sensitive files found in git repository' 
          };
        }
      } catch (error) {
        // Git not available or not a git repo
        return { status: 'info', message: 'Git repository check skipped' };
      }
    }
    
    return { status: 'secure', sensitiveInGit: false };
  });
  
  try {
    const report = await scanner.runScans();
    await scanner.saveReport(report);
    
    log(`📊 Security scan complete`);
    log(`   Total scans: ${report.summary.totalScans}`);
    log(`   Passed: ${report.summary.passedScans}`);
    log(`   Failed: ${report.summary.failedScans}`);
    log(`   Critical vulnerabilities: ${report.summary.criticalVulnerabilities}`);
    log(`   Warnings: ${report.summary.warnings}`);
    log(`   Security status: ${report.summary.securityStatus}`);
    
    if (report.summary.criticalVulnerabilities > 0) {
      log(`🚨 Critical security vulnerabilities detected!`);
      process.exit(1);
    } else if (report.summary.warnings > 0) {
      log(`⚠️  Security warnings detected`);
    } else {
      log(`✅ All security checks passed`);
    }
    
  } catch (error) {
    log(`❌ Security scan failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('Security scanner error:', error);
    process.exit(1);
  });
}

module.exports = SecurityScanner;