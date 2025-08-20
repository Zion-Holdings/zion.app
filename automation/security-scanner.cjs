#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.workspace = process.cwd();
    this.scanResults = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      securityIssues: [],
      recommendations: [],
      scanStatus: 'completed'
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async scanDependencies() {
    try {
      this.log('🔍 Scanning dependencies for vulnerabilities...');
      
      // Check npm audit
      try {
        const auditResult = execSync('npm audit --json', { 
          encoding: 'utf8',
          cwd: this.workspace,
          maxBuffer: 1024 * 1024 * 10
        });
        
        const auditData = JSON.parse(auditResult);
        
        if (auditData.vulnerabilities) {
          Object.keys(auditData.vulnerabilities).forEach(pkg => {
            const vuln = auditData.vulnerabilities[pkg];
            this.scanResults.vulnerabilities.push({
              package: pkg,
              severity: vuln.severity,
              title: vuln.title,
              description: vuln.description,
              recommendation: vuln.recommendation
            });
          });
        }
      } catch (error) {
        this.log('⚠️  npm audit failed, continuing with other checks...', 'WARN');
      }
      
      this.log(`✅ Dependencies scan complete. Found ${this.scanResults.vulnerabilities.length} vulnerabilities.`);
    } catch (error) {
      this.log(`❌ Dependencies scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanFiles() {
    try {
      this.log('🔍 Scanning files for security issues...');
      
      const criticalFiles = [
        'package.json',
        'package-lock.json',
        'next.config.js',
        'tsconfig.json'
      ];
      
      for (const file of criticalFiles) {
        const filePath = path.join(this.workspace, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Check for hardcoded secrets
          const secretPatterns = [
            /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
            /password\s*[:=]\s*['"][^'"]+['"]/gi,
            /secret\s*[:=]\s*['"][^'"]+['"]/gi,
            /token\s*[:=]\s*['"][^'"]+['"]/gi
          ];
          
          secretPatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
              this.scanResults.securityIssues.push({
                file,
                type: 'HARDCODED_SECRET',
                severity: 'HIGH',
                description: 'Potential hardcoded secret detected',
                matches: matches.length
              });
            }
          });
        }
      }
      
      this.log(`✅ Files scan complete. Found ${this.scanResults.securityIssues.length} security issues.`);
    } catch (error) {
      this.log(`❌ Files scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanEnvironment() {
    try {
      this.log('🔍 Scanning environment configuration...');
      
      const envFile = path.join(this.workspace, '.env');
      if (fs.existsSync(envFile)) {
        const envContent = fs.readFileSync(envFile, 'utf8');
        const lines = envContent.split('\n');
        
        lines.forEach((line, index) => {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith('#')) {
            if (trimmed.includes('=') && !trimmed.includes('NEXT_PUBLIC_')) {
              const [key] = trimmed.split('=');
              if (key.toLowerCase().includes('secret') || 
                  key.toLowerCase().includes('key') || 
                  key.toLowerCase().includes('password') ||
                  key.toLowerCase().includes('token')) {
                this.scanResults.securityIssues.push({
                  file: '.env',
                  type: 'ENVIRONMENT_SECRET',
                  severity: 'MEDIUM',
                  description: `Environment variable ${key} may contain sensitive data`,
                  line: index + 1
                });
              }
            }
          }
        });
      }
      
      this.log('✅ Environment scan complete.');
    } catch (error) {
      this.log(`❌ Environment scan failed: ${error.message}`, 'ERROR');
    }
  }

  generateRecommendations() {
    this.log('💡 Generating security recommendations...');
    
    if (this.scanResults.vulnerabilities.length > 0) {
      this.scanResults.recommendations.push({
        priority: 'HIGH',
        action: 'Update vulnerable dependencies',
        description: `Found ${this.scanResults.vulnerabilities.length} vulnerabilities. Run 'npm audit fix' to resolve.`
      });
    }
    
    if (this.scanResults.securityIssues.some(issue => issue.type === 'HARDCODED_SECRET')) {
      this.scanResults.recommendations.push({
        priority: 'HIGH',
        action: 'Remove hardcoded secrets',
        description: 'Move sensitive data to environment variables or secure configuration management.'
      });
    }
    
    if (this.scanResults.securityIssues.some(issue => issue.type === 'ENVIRONMENT_SECRET')) {
      this.scanResults.recommendations.push({
        priority: 'MEDIUM',
        action: 'Review environment variables',
        description: 'Ensure sensitive environment variables are properly secured and not committed to version control.'
      });
    }
    
    this.scanResults.recommendations.push({
      priority: 'LOW',
      action: 'Regular security audits',
      description: 'Schedule regular security scans and dependency updates.'
    });
  }

  saveReport() {
    try {
      const reportDir = path.join(this.workspace, 'public', 'reports', 'security');
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      const reportPath = path.join(reportDir, 'latest.json');
      fs.writeFileSync(reportPath, JSON.stringify(this.scanResults, null, 2));
      
      this.log(`📊 Security report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`, 'ERROR');
    }
  }

  async runFullScan() {
    this.log('🚀 Starting comprehensive security scan...');
    
    await this.scanDependencies();
    await this.scanFiles();
    await this.scanEnvironment();
    
    this.generateRecommendations();
    this.saveReport();
    
    const totalIssues = this.scanResults.vulnerabilities.length + this.scanResults.securityIssues.length;
    
    this.log('📊 Security scan complete!');
    this.log(`   Total vulnerabilities: ${this.scanResults.vulnerabilities.length}`);
    this.log(`   Total security issues: ${this.scanResults.securityIssues.length}`);
    this.log(`   Total recommendations: ${this.scanResults.recommendations.length}`);
    
    if (totalIssues === 0) {
      this.log('✅ No security issues found!');
    } else {
      this.log(`⚠️  Found ${totalIssues} security issues that need attention.`);
    }
    
    return this.scanResults;
  }
}

async function main() {
  const scanner = new SecurityScanner();
  try {
    await scanner.runFullScan();
  } catch (error) {
    console.error('Security scan failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SecurityScanner;