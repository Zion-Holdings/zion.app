#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-SECURITY-HEALTH] ${message}`;
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

function ensureRepoRoot() {
  const gitDir = path.join(process.cwd(), ".git");
  if (!fs.existsSync(gitDir)) {
    throw new Error(`No .git directory found in ${process.cwd()}`);
  }
}

function runSecurityScan() {
  log("Running security scan...");
  
  try {
    const securityResult = run("npm", ["run", "security:scan"]);
    if (securityResult.status === 0) {
      log("Security scan completed successfully");
      return { success: true, output: securityResult.stdout };
    } else {
      log(`Security scan failed: ${securityResult.stderr}`);
      return { success: false, error: securityResult.stderr };
    }
  } catch (err) {
    log(`Security scan error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function runNpmAudit() {
  log("Running npm audit...");
  
  try {
    const auditResult = run("npm", ["audit", "--audit-level=high"]);
    if (auditResult.status === 0) {
      log("NPM audit completed successfully");
      return { success: true, output: auditResult.stdout };
    } else {
      log(`NPM audit failed: ${auditResult.stderr}`);
      return { success: false, error: auditResult.stderr };
    }
  } catch (err) {
    log(`NPM audit error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function checkVulnerableDependencies() {
  log("Checking for vulnerable dependencies...");
  
  try {
    const packageLockPath = path.join(process.cwd(), "package-lock.json");
    if (!fs.existsSync(packageLockPath)) {
      log("package-lock.json not found");
      return { healthy: false, error: "package-lock-missing" };
    }
    
    // Parse package-lock.json to check for known vulnerable packages
    const packageLock = JSON.parse(fs.readFileSync(packageLockPath, "utf8"));
    const vulnerablePackages = [];
    
    // Check for common vulnerable packages (this is a basic check)
    const knownVulnerable = [
      "lodash",
      "moment",
      "jquery",
      "express",
      "axios"
    ];
    
    for (const pkg of knownVulnerable) {
      if (packageLock.dependencies && packageLock.dependencies[pkg]) {
        vulnerablePackages.push({
          package: pkg,
          version: packageLock.dependencies[pkg].version,
          risk: "medium"
        });
      }
    }
    
    if (vulnerablePackages.length > 0) {
      log(`Found ${vulnerablePackages.length} potentially vulnerable packages`);
      return { healthy: false, vulnerable: vulnerablePackages };
    } else {
      log("No known vulnerable packages found");
      return { healthy: true, vulnerable: [] };
    }
  } catch (err) {
    log(`Vulnerable dependencies check error: ${String(err)}`);
    return { healthy: false, error: String(err) };
  }
}

function validateSecurityFiles() {
  log("Validating security files...");
  
  try {
    const securityFiles = [
      ".eslintrc.js",
      ".eslintrc.json",
      ".pre-commit-config.yaml",
      ".pre-commit-hooks.yaml",
      "SECURITY.md"
    ];
    
    const validationResults = [];
    
    for (const file of securityFiles) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        validationResults.push({
          file: file,
          exists: true,
          size: stats.size,
          healthy: stats.size > 0
        });
      } else {
        validationResults.push({
          file: file,
          exists: false,
          size: 0,
          healthy: false
        });
      }
    }
    
    const healthy = validationResults.filter(r => r.healthy).length;
    const total = validationResults.length;
    
    log(`Security files validation: ${healthy}/${total} files healthy`);
    return {
      total: total,
      healthy: healthy,
      results: validationResults
    };
  } catch (err) {
    log(`Security files validation error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function checkEnvironmentSecurity() {
  log("Checking environment security...");
  
  try {
    const envFile = path.join(process.cwd(), ".env");
    const envLocalFile = path.join(process.cwd(), ".env.local");
    
    const envResults = [];
    
    // Check for .env file
    if (fs.existsSync(envFile)) {
      const envContent = fs.readFileSync(envFile, "utf8");
      const hasSecrets = envContent.includes("SECRET") || envContent.includes("PASSWORD") || envContent.includes("TOKEN");
      envResults.push({
        file: ".env",
        exists: true,
        hasSecrets: hasSecrets,
        healthy: !hasSecrets,
        risk: hasSecrets ? "high" : "low"
      });
    } else {
      envResults.push({
        file: ".env",
        exists: false,
        hasSecrets: false,
        healthy: true,
        risk: "none"
      });
    }
    
    // Check for .env.local file
    if (fs.existsSync(envLocalFile)) {
      const envLocalContent = fs.readFileSync(envLocalFile, "utf8");
      const hasSecrets = envLocalContent.includes("SECRET") || envLocalContent.includes("PASSWORD") || envLocalContent.includes("TOKEN");
      envResults.push({
        file: ".env.local",
        exists: true,
        hasSecrets: hasSecrets,
        healthy: !hasSecrets,
        risk: hasSecrets ? "high" : "low"
      });
    } else {
      envResults.push({
        file: ".env.local",
        exists: false,
        hasSecrets: false,
        healthy: true,
        risk: "none"
      });
    }
    
    const healthy = envResults.filter(r => r.healthy).length;
    const total = envResults.length;
    
    log(`Environment security check: ${healthy}/${total} files secure`);
    return {
      total: total,
      healthy: healthy,
      results: envResults
    };
  } catch (err) {
    log(`Environment security check error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function runHealthChecks() {
  log("Running health checks...");
  
  try {
    const healthResults = [];
    
    // Check if automation directory exists
    const automationDir = path.join(process.cwd(), "automation");
    if (fs.existsSync(automationDir)) {
      const automationItems = fs.readdirSync(automationDir);
      healthResults.push({
        check: "automation-directory",
        healthy: automationItems.length > 0,
        details: `${automationItems.length} automation files found`
      });
    } else {
      healthResults.push({
        check: "automation-directory",
        healthy: false,
        details: "Automation directory not found"
      });
    }
    
    // Check if scripts directory exists
    const scriptsDir = path.join(process.cwd(), "scripts");
    if (fs.existsSync(scriptsDir)) {
      const scriptsItems = fs.readdirSync(scriptsDir);
      healthResults.push({
        check: "scripts-directory",
        healthy: scriptsItems.length > 0,
        details: `${scriptsItems.length} script files found`
      });
    } else {
      healthResults.push({
        check: "scripts-directory",
        healthy: false,
        details: "Scripts directory not found"
      });
    }
    
    // Check if logs directory exists and is writable
    const logsDir = path.join(process.cwd(), "automation", "logs");
    if (fs.existsSync(logsDir)) {
      try {
        fs.accessSync(logsDir, fs.constants.W_OK);
        healthResults.push({
          check: "logs-directory",
          healthy: true,
          details: "Logs directory exists and writable"
        });
      } catch (err) {
        healthResults.push({
          check: "logs-directory",
          healthy: false,
          details: "Logs directory not writable"
        });
      }
    } else {
      healthResults.push({
        check: "logs-directory",
        healthy: false,
        details: "Logs directory not found"
      });
    }
    
    const healthy = healthResults.filter(r => r.healthy).length;
    const total = healthResults.length;
    
    log(`Health checks: ${healthy}/${total} checks passed`);
    return {
      total: total,
      healthy: healthy,
      results: healthResults
    };
  } catch (err) {
    log(`Health checks error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function generateSecurityHealthReport(securityScan, npmAudit, vulnerableDeps, securityFiles, envSecurity, healthChecks) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "security-health",
    checks: {
      securityScan: securityScan,
      npmAudit: npmAudit,
      vulnerableDependencies: vulnerableDeps,
      securityFiles: securityFiles,
      environmentSecurity: envSecurity,
      healthChecks: healthChecks
    },
    summary: {
      overallHealth: "healthy",
      issues: []
    }
  };
  
  // Determine overall health
  if (!securityScan.success) report.summary.issues.push("security-scan-failed");
  if (!npmAudit.success) report.summary.issues.push("npm-audit-failed");
  if (!vulnerableDeps.healthy) report.summary.issues.push("vulnerable-dependencies-found");
  if (securityFiles.healthy < securityFiles.total) report.summary.issues.push("security-files-missing");
  if (envSecurity.healthy < envSecurity.total) report.summary.issues.push("environment-security-issues");
  if (healthChecks.healthy < healthChecks.total) report.summary.issues.push("health-checks-failed");
  
  if (report.summary.issues.length > 0) {
    report.summary.overallHealth = "degraded";
  }
  
  const reportPath = path.join(process.cwd(), "security-health-redundancy-report.md");
  const reportContent = `# Security and Health Redundancy Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Issues Found**: ${report.summary.issues.length}

## Security Check Results
- **Security Scan**: ${report.checks.securityScan.success ? '✅ Success' : '❌ Failed'}${report.checks.securityScan.error ? ` (${report.checks.securityScan.error})` : ''}
- **NPM Audit**: ${report.checks.npmAudit.success ? '✅ Success' : '❌ Failed'}${report.checks.npmAudit.error ? ` (${report.checks.npmAudit.error})` : ''}
- **Vulnerable Dependencies**: ${report.checks.vulnerableDependencies.healthy ? '✅ None Found' : '❌ Found'}${report.checks.vulnerableDependencies.vulnerable ? ` (${report.checks.vulnerableDependencies.vulnerable.length} packages)` : ''}
- **Security Files**: ${report.checks.securityFiles.healthy}/${report.checks.securityFiles.total} files healthy
- **Environment Security**: ${report.checks.environmentSecurity.healthy}/${report.checks.environmentSecurity.total} files secure
- **Health Checks**: ${report.checks.healthChecks.healthy}/${report.checks.healthChecks.total} checks passed

## Security Files Validation
${securityFiles.results.map(r => `- **${r.file}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.size} bytes, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Environment Security Details
${envSecurity.results.map(r => `- **${r.file}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.hasSecrets ? '⚠️ Contains secrets' : '✅ No secrets'}, Risk: ${r.risk})`).join('\n')}

## Health Check Details
${healthChecks.results.map(r => `- **${r.check}**: ${r.healthy ? '✅ Passed' : '❌ Failed'} (${r.details})`).join('\n')}

## Vulnerable Dependencies
${vulnerableDeps.vulnerable ? vulnerableDeps.vulnerable.map(v => `- **${v.package}** (${v.version}) - Risk: ${v.risk}`).join('\n') : 'None found'}

## Redundancy Status
This report was generated by the PM2 redundancy system, providing backup for security and health monitoring automation processes.

## Next Steps
- Review any failed security checks
- Update vulnerable dependencies
- Ensure security files are properly configured
- Check environment variables for exposed secrets
- Monitor system health metrics
- Run additional security scans if needed
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Security health report generated: ${reportPath}`);
  return reportPath;
}

async function commitSecurityHealthReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update security-health redundancy report"]);
      
      log("Security health report committed successfully");
      return true;
    } else {
      log("No changes to commit");
      return true;
    }
  } catch (err) {
    log(`Commit error: ${String(err)}`);
    return false;
  }
}

async function main() {
  log("Starting Security and Health Redundancy Process");
  
  try {
    ensureRepoRoot();
    
    // Run security scan
    log("Running security scan...");
    const securityScan = runSecurityScan();
    
    // Run npm audit
    log("Running npm audit...");
    const npmAudit = runNpmAudit();
    
    // Check for vulnerable dependencies
    log("Checking vulnerable dependencies...");
    const vulnerableDeps = checkVulnerableDependencies();
    
    // Validate security files
    log("Validating security files...");
    const securityFiles = validateSecurityFiles();
    
    // Check environment security
    log("Checking environment security...");
    const envSecurity = checkEnvironmentSecurity();
    
    // Run health checks
    log("Running health checks...");
    const healthChecks = runHealthChecks();
    
    // Generate security health report
    log("Generating security health report...");
    const reportPath = generateSecurityHealthReport(securityScan, npmAudit, vulnerableDeps, securityFiles, envSecurity, healthChecks);
    
    // Commit report if changed
    log("Committing security health report if changed...");
    await commitSecurityHealthReport(reportPath);
    
    log("Security and Health Redundancy Process completed");
    log(`Results: Security=${securityScan.success ? 'OK' : 'FAILED'}, Audit=${npmAudit.success ? 'OK' : 'FAILED'}, Health=${healthChecks.healthy}/${healthChecks.total}`);
    
    // Exit with appropriate code
    if (securityScan.success && npmAudit.success && healthChecks.healthy === healthChecks.total) {
      process.exit(0);
    } else {
      process.exit(1);
    }
    
  } catch (error) {
    log(`Fatal error: ${String(error)}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    log(`Unhandled error: ${String(error)}`);
    process.exit(1);
  });
}

module.exports = { 
  main, 
  runSecurityScan, 
  runNpmAudit, 
  checkVulnerableDependencies, 
  validateSecurityFiles, 
  checkEnvironmentSecurity, 
  runHealthChecks,
  generateSecurityHealthReport 
};