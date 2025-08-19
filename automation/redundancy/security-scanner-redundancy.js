#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY] ${message}`;
  console.log(line);
}

function run(command, args, options = {}) {
  const execCwd = options.cwd || process.cwd();
  const result = spawnSync(command, args, {
    cwd: execCwd,
    env: process.env,
    shell: false,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 20
  });
  const stdout = (result.stdout || "").trim();
  const stderr = (result.stderr || "").trim();
  const status = typeof result.status === "number" ? result.status : 0;
  if (options.verbose) {
    log(`$ ${command} ${args.join(" ")}`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  }
  return { status, stdout, stderr };
}

function runGit(args, options = {}) {
  return run("git", args, options);
}

function scanForSecrets() {
  log("Scanning for secrets and sensitive information...");
  
  try {
    const patterns = [
      { name: "API Keys", pattern: /(api[_-]?key|apikey|access[_-]?token|secret[_-]?key)/i, severity: "high" },
      { name: "Passwords", pattern: /(password|passwd|pwd|secret)/i, severity: "high" },
      { name: "Database URLs", pattern: /(mongodb|postgresql|mysql):\/\/[^\\s]+/i, severity: "medium" },
      { name: "Private Keys", pattern: /(-----BEGIN.*PRIVATE KEY-----|-----BEGIN.*RSA PRIVATE KEY-----)/, severity: "high" },
      { name: "AWS Keys", pattern: /(AKIA[0-9A-Z]{16}|aws_access_key_id|aws_secret_access_key)/i, severity: "high" },
      { name: "GitHub Tokens", pattern: /(ghp_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9_]{82})/i, severity: "high" }
    ];
    
    const secrets = [];
    const contentDirs = ["pages", "automation", "scripts"];
    
    contentDirs.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        scanDirectoryForSecrets(dirPath, dir, patterns, secrets);
      }
    });
    
    log(`Found ${secrets.length} potential security issues`);
    return { success: true, secrets, patterns: patterns.length };
  } catch (error) {
    log(`Error scanning for secrets: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function scanDirectoryForSecrets(dirPath, relativePath, patterns, secrets) {
  try {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const relativeItemPath = path.join(relativePath, item);
      
      if (fs.statSync(itemPath).isDirectory()) {
        scanDirectoryForSecrets(itemPath, relativeItemPath, patterns, secrets);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.js', '.jsx', '.ts', '.tsx', '.json', '.yml', '.yaml', '.env', '.env.local'].includes(ext)) {
          scanFileForSecrets(itemPath, relativeItemPath, patterns, secrets);
        }
      }
    });
  } catch (error) {
    log(`Error scanning directory ${dirPath}: ${String(error)}`);
  }
}

function scanFileForSecrets(filePath, relativePath, patterns, secrets) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    patterns.forEach(pattern => {
      lines.forEach((line, lineNumber) => {
        if (pattern.pattern.test(line)) {
          secrets.push({
            file: relativePath,
            line: lineNumber + 1,
            pattern: pattern.name,
            severity: pattern.severity,
            content: line.trim().substring(0, 100) + (line.length > 100 ? '...' : ''),
            fullLine: line.trim()
          });
        }
      });
    });
  } catch (error) {
    log(`Error scanning file ${filePath}: ${String(error)}`);
  }
}

function checkDependencies() {
  log("Checking dependencies for security vulnerabilities...");
  
  try {
    // Check npm audit
    const auditResult = run("npm", ["audit", "--json"]);
    let auditData = null;
    
    if (auditResult.status === 0) {
      try {
        auditData = JSON.parse(auditResult.stdout);
      } catch (error) {
        log(`Error parsing npm audit output: ${String(error)}`);
      }
    }
    
    // Check for outdated packages
    const outdatedResult = run("npm", ["outdated", "--json"]);
    let outdatedData = null;
    
    if (outdatedResult.status === 0) {
      try {
        outdatedData = JSON.parse(outdatedResult.stdout);
      } catch (error) {
        log(`Error parsing outdated packages: ${String(error)}`);
      }
    }
    
    const summary = {
      vulnerabilities: auditData ? Object.keys(auditData.vulnerabilities || {}).length : 0,
      outdated: outdatedData ? Object.keys(outdatedData).length : 0,
      highSeverity: 0,
      mediumSeverity: 0,
      lowSeverity: 0
    };
    
    if (auditData && auditData.vulnerabilities) {
      Object.values(auditData.vulnerabilities).forEach(vuln => {
        if (vuln.severity === 'high') summary.highSeverity++;
        else if (vuln.severity === 'moderate') summary.mediumSeverity++;
        else if (vuln.severity === 'low') summary.lowSeverity++;
      });
    }
    
    log(`Dependencies: ${summary.vulnerabilities} vulnerabilities, ${summary.outdated} outdated`);
    return { success: true, summary, auditData, outdatedData };
  } catch (error) {
    log(`Error checking dependencies: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkFilePermissions() {
  log("Checking file permissions...");
  
  try {
    const criticalFiles = [
      ".env",
      ".env.local",
      ".npmrc",
      "package-lock.json",
      "automation/logs"
    ];
    
    const permissionIssues = [];
    
    criticalFiles.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        try {
          const stats = fs.statSync(filePath);
          const mode = stats.mode;
          const permissions = (mode & parseInt('777', 8)).toString(8);
          
          // Check if permissions are too open
          if (permissions === '666' || permissions === '777') {
            permissionIssues.push({
              file,
              permissions,
              issue: "File permissions too open"
            });
          }
        } catch (error) {
          log(`Error checking permissions for ${file}: ${String(error)}`);
        }
      }
    });
    
    log(`File permissions: ${permissionIssues.length} issues found`);
    return { success: true, issues: permissionIssues };
  } catch (error) {
    log(`Error checking file permissions: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function runSecurityScripts() {
  log("Running security scripts...");
  
  try {
    const scripts = [
      "automation/security-scanner.cjs"
    ];
    
    const results = [];
    
    scripts.forEach(script => {
      const scriptPath = path.join(process.cwd(), script);
      if (fs.existsSync(scriptPath)) {
        log(`Running ${script}...`);
        const result = run("node", [script]);
        results.push({
          script,
          success: result.status === 0,
          output: result.stdout,
          error: result.stderr
        });
        
        if (result.status === 0) {
          log(`✓ ${script} completed successfully`);
        } else {
          log(`✗ ${script} failed`);
        }
      } else {
        log(`Script not found: ${script}`);
        results.push({
          script,
          success: false,
          error: "Script not found"
        });
      }
    });
    
    return { success: true, results };
  } catch (error) {
    log(`Error running security scripts: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateSecurityReport() {
  const report = {
    generatedAt: nowIso(),
    secretsScan: null,
    dependencies: null,
    filePermissions: null,
    scriptResults: null,
    summary: "Security scanner redundancy report"
  };

  try {
    // Run all security checks
    report.secretsScan = scanForSecrets();
    report.dependencies = checkDependencies();
    report.filePermissions = checkFilePermissions();
    report.scriptResults = runSecurityScripts();
    
    // Generate summary
    const totalSecrets = report.secretsScan.success ? report.secretsScan.secrets.length : 0;
    const totalVulnerabilities = report.dependencies.success ? report.dependencies.summary.vulnerabilities : 0;
    const totalPermissionIssues = report.filePermissions.success ? report.filePermissions.issues.length : 0;
    
    const totalIssues = totalSecrets + totalVulnerabilities + totalPermissionIssues;
    
    if (totalIssues === 0) {
      report.summary = "Security scan completed - no security issues found";
    } else {
      report.summary = `Security scan completed - ${totalIssues} security issues found (${totalSecrets} secrets, ${totalVulnerabilities} vulnerabilities, ${totalPermissionIssues} permissions)`;
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "security-scanner-redundancy-report.md");
    const reportContent = `# Security Scanner Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## Secrets Scan
- Status: ${report.secretsScan.success ? "✅ Success" : "❌ Failed"}
- Issues Found: ${totalSecrets}
- Patterns Checked: ${report.secretsScan.patterns || 0}

${totalSecrets > 0 ? `
### Secret Issues
${report.secretsScan.secrets.map(secret => 
  `- ${secret.file}:${secret.line} - ${secret.pattern} (${secret.severity} severity)`
).join('\n')}
` : ''}

## Dependencies
- Status: ${report.dependencies.success ? "✅ Success" : "❌ Failed"}
- Vulnerabilities: ${totalVulnerabilities}
- Outdated Packages: ${report.dependencies.success ? report.dependencies.summary.outdated : 'Unknown'}
- High Severity: ${report.dependencies.success ? report.dependencies.summary.highSeverity : 'Unknown'}
- Medium Severity: ${report.dependencies.success ? report.dependencies.summary.mediumSeverity : 'Unknown'}
- Low Severity: ${report.dependencies.success ? report.dependencies.summary.lowSeverity : 'Unknown'}

## File Permissions
- Status: ${report.filePermissions.success ? "✅ Success" : "❌ Failed"}
- Issues Found: ${totalPermissionIssues}

${totalPermissionIssues > 0 ? `
### Permission Issues
${report.filePermissions.issues.map(issue => 
  `- ${issue.file}: ${issue.permissions} - ${issue.issue}`
).join('\n')}
` : ''}

## Script Results
- Status: ${report.scriptResults.success ? "✅ Success" : "❌ Failed"}
- Scripts Run: ${report.scriptResults.results.length}
- Successful: ${report.scriptResults.results.filter(r => r.success).length}
- Failed: ${report.scriptResults.results.filter(r => !r.success).length}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

    fs.writeFileSync(reportPath, reportContent);
    log(`Security report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating security report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

// Main execution
function main() {
  log("Starting security scanner redundancy process");
  
  try {
    const report = generateSecurityReport();
    log(`Security scanner redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Security scanner redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  scanForSecrets, 
  checkDependencies, 
  checkFilePermissions, 
  runSecurityScripts, 
  generateSecurityReport 
};