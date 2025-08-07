#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SecurityScanner {
  constructor() {
    this.vulnerabilities = [];
    this.securityScore = 100;
  }

  async scanSecurity() {
    this.scanDependencies();
    this.scanCode();
    this.scanConfiguration();
    
    console.log(`Security scan completed. Score: ${this.securityScore}/100`);
    return {
      score: this.securityScore,
      vulnerabilities: this.vulnerabilities
    };
  }

  scanDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment']; // Example
      for (const [pkg, version] of Object.entries(dependencies)) {
        if (vulnerablePackages.includes(pkg)) {
          this.vulnerabilities.push({
            type: 'vulnerable-dependency',
            package: pkg,
            version: version,
            severity: 'medium'
          });
          this.securityScore -= 10;
        }
      }
    } catch (error) {
      console.error('Error scanning dependencies:', error.message);
    }
  }

  scanCode() {
    const patterns = [
      { pattern: /eval\(/, description: 'Use of eval() function', severity: 'high' },
      { pattern: /innerHTML/, description: 'Potential XSS vulnerability', severity: 'medium' },
      { pattern: /localStorage/, description: 'Sensitive data in localStorage', severity: 'low' }
    ];
    
    this.scanFiles(patterns);
  }

  scanConfiguration() {
    // Check for security headers
    const nextConfig = path.join(__dirname, '..', '..', 'next.config.js');
    if (fs.existsSync(nextConfig)) {
      const content = fs.readFileSync(nextConfig, 'utf8');
      if (!content.includes('securityHeaders')) {
        this.vulnerabilities.push({
          type: 'missing-security-headers',
          description: 'No security headers configured',
          severity: 'medium'
        });
        this.securityScore -= 15;
      }
    }
  }

  scanFiles(patterns) {
    const directories = ['pages', 'components', 'utils'];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, '..', '..', dir);
      if (fs.existsSync(dirPath)) {
        this.scanDirectory(dirPath, patterns);
      }
    }
  }

  scanDirectory(dir, patterns) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.scanDirectory(filePath, patterns);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        this.scanFile(filePath, patterns);
      }
    }
  }

  scanFile(filePath, patterns) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    for (const pattern of patterns) {
      if (pattern.pattern.test(content)) {
        this.vulnerabilities.push({
          type: 'code-vulnerability',
          file: filePath,
          description: pattern.description,
          severity: pattern.severity
        });
        
        if (pattern.severity === 'high') this.securityScore -= 20;
        else if (pattern.severity === 'medium') this.securityScore -= 10;
        else this.securityScore -= 5;
      }
    }
  }
}

const scanner = new SecurityScanner();
scanner.scanSecurity();
