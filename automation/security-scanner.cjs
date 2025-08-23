#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔒 Security Scanner Starting...');

// Basic security checks
const securityChecks = {
  // Check for common security issues in package.json
  packageSecurity: () => {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const issues = [];
      
      // Check for known vulnerable packages
      if (packageJson.dependencies && packageJson.dependencies.eslint === '8.57.1') {
        issues.push('ESLint v8.57.1 is deprecated and may have security vulnerabilities');
      }
      
      return issues;
    } catch (error) {
      return [`Error reading package.json: ${error.message}`];
    }
  },
  
  // Check for exposed secrets
  secretScan: () => {
    const sensitivePatterns = [
      /api[_-]?key/i,
      /password/i,
      /secret/i,
      /token/i,
      /private[_-]?key/i
    ];
    
    const issues = [];
    
    // Scan common files for potential secrets
    const filesToScan = [
      '.env',
      '.env.local',
      '.env.production',
      'config.json',
      'secrets.json'
    ];
    
    filesToScan.forEach(file => {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        sensitivePatterns.forEach(pattern => {
          if (pattern.test(content)) {
            issues.push(`Potential secret found in ${file}`);
          }
        });
      }
    });
    
    return issues;
  },
  
  // Check file permissions
  filePermissions: () => {
    const issues = [];
    
    // Check for world-writable files
    const criticalFiles = [
      '.env',
      'package.json',
      'package-lock.json'
    ];
    
    criticalFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          const stats = fs.statSync(file);
          if ((stats.mode & 0o777) === 0o666) {
            issues.push(`${file} has world-writable permissions`);
          }
        } catch (error) {
          // Ignore permission errors
        }
      }
    });
    
    return issues;
  }
};

// Run security checks
console.log('Running security checks...');

let allIssues = [];
Object.entries(securityChecks).forEach(([checkName, checkFn]) => {
  console.log(`Running ${checkName}...`);
  const issues = checkFn();
  if (issues.length > 0) {
    allIssues.push(...issues);
  }
});

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  issues: allIssues,
  summary: {
    totalIssues: allIssues.length,
    severity: allIssues.length > 0 ? 'WARNING' : 'CLEAN'
  }
};

// Write report to file
fs.writeFileSync('security-scan-results.json', JSON.stringify(report, null, 2));

// Output summary
if (allIssues.length === 0) {
  console.log('✅ Security scan completed - No issues found');
} else {
  console.log(`⚠️  Security scan completed - ${allIssues.length} issues found:`);
  allIssues.forEach(issue => console.log(`  - ${issue}`));
}

console.log('Security scan completed');