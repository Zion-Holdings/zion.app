#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-SECURITY-SCANNER] ${message}`;
  console.log(line);
}

function run(command, args, options = {}) {
  const execCwd = options.cwd || options.cwd || process.cwd();
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

function runSecurityAudit() {
  try {
    log("Running security audit...");
    
    const auditResult = run("npm", ["audit", "--audit-level=high", "--json"], { verbose: false });
    
    if (auditResult.status === 0) {
      return {
        vulnerabilities: {
          count: 0,
          level: "none",
          details: []
        },
        timestamp: nowIso()
      };
    } else {
      try {
        const auditData = JSON.parse(auditResult.stdout);
        const vulnerabilities = auditData.vulnerabilities || {};
        const vulnCount = Object.keys(vulnerabilities).length;
        
        return {
          vulnerabilities: {
            count: vulnCount,
            level: "high",
            details: Object.values(vulnerabilities).map(v => ({
              name: v.name,
              severity: v.severity,
              title: v.title
            }))
          },
          timestamp: nowIso()
        };
      } catch (parseErr) {
        return {
          vulnerabilities: {
            count: 1,
            level: "unknown",
            details: [{ name: "unknown", severity: "unknown", title: "Parse error in audit output" }]
          },
          timestamp: nowIso()
        };
      }
    }
  } catch (err) {
    log(`Security audit failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkEnvironmentVariables() {
  try {
    log("Checking environment variables...");
    
    const sensitiveVars = [
      "NODE_ENV",
      "LINKEDIN_ACCESS_TOKEN",
      "IG_ACCESS_TOKEN",
      "NETLIFY_ACCESS_TOKEN",
      "GITHUB_TOKEN"
    ];
    
    const envIssues = [];
    for (const varName of sensitiveVars) {
      if (process.env[varName]) {
        envIssues.push({
          variable: varName,
          issue: "Sensitive variable exposed in environment",
          severity: "high"
        });
      }
    }
    
    return {
      environment: {
        issues: envIssues,
        count: envIssues.length
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`Environment check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkFilePermissions() {
  try {
    log("Checking file permissions...");
    
    const criticalFiles = [
      ".env",
      ".env.local",
      ".env.production",
      "package.json",
      "package-lock.json"
    ];
    
    const permissionIssues = [];
    for (const file of criticalFiles) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const mode = stats.mode.toString(8);
        
        if (mode.endsWith("666") || mode.endsWith("777")) {
          permissionIssues.push({
            file,
            issue: "Overly permissive file permissions",
            severity: "medium"
          });
        }
      }
    }
    
    return {
      permissions: {
        issues: permissionIssues,
        count: permissionIssues.length
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`Permission check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function generateSecurityReport(audit, environment, permissions) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    security: {
      audit,
      environment,
      permissions,
      summary: {
        overallSecurity: "secure",
        issues: []
      }
    }
  };
  
  // Analyze overall security
  if (audit.vulnerabilities?.count > 0) {
    report.security.summary.issues.push(`${audit.vulnerabilities.count} security vulnerabilities found`);
  }
  
  if (environment.environment?.count > 0) {
    report.security.summary.issues.push(`${environment.environment.count} environment security issues`);
  }
  
  if (permissions.permissions?.count > 0) {
    report.security.summary.issues.push(`${permissions.permissions.count} permission issues`);
  }
  
  if (report.security.summary.issues.length > 0) {
    report.security.summary.overallSecurity = "needs_attention";
  }

  const reportPath = path.join(process.cwd(), "security-scanner-redundancy-report.md");
  const reportContent = `# Security Scanner Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall Security: ${report.security.summary.overallSecurity.toUpperCase()}

## Issues Detected
${report.security.summary.issues.length > 0 ? 
  report.security.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No security issues detected"}

## Security Audit
- Vulnerabilities: ${audit.vulnerabilities?.count || 0} ❌
- Severity Level: ${audit.vulnerabilities?.level || "none"} ${audit.vulnerabilities?.level === "none" ? "✅" : "❌"}

## Environment Security
- Environment Issues: ${environment.environment?.count || 0} ❌
- Sensitive Variables: ${environment.environment?.count > 0 ? "⚠️ Exposed" : "✅ Secure"}

## File Permissions
- Permission Issues: ${permissions.permissions?.count || 0} ❌
- File Security: ${permissions.permissions?.count > 0 ? "⚠️ Needs Review" : "✅ Secure"}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Security report generated: ${reportPath}`);
  return report;
}

async function commitAndPush() {
  try {
    run("git", ["config", "user.name", "pm2-redundancy[bot]"]);
    run("git", ["config", "user.email", "redundancy@ziontechgroup.com"]);

    const status = run("git", ["status", "--porcelain"]);
    if (!status.stdout.trim()) {
      log("No changes to commit.");
      return;
    }

    run("git", ["add", "-A"]);
    run("git", ["commit", "-m", `chore(redundancy): security scan via PM2 redundancy`]);

    const pushResult = run("git", ["push", "origin", "main"]);
    if (pushResult.status === 0) {
      log("Changes pushed successfully via redundancy.");
    } else {
      log(`Push failed: ${pushResult.stderr}`);
    }
  } catch (err) {
    log(`Commit/push error: ${String(err)}`);
  }
}

async function main() {
  try {
    log("Starting security scanner redundancy process...");
    
    const audit = runSecurityAudit();
    const environment = checkEnvironmentVariables();
    const permissions = checkFilePermissions();
    
    const report = generateSecurityReport(audit, environment, permissions);
    
    await commitAndPush();
    
    log("Security scanner redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Security scanner redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, runSecurityAudit, checkEnvironmentVariables, checkFilePermissions, generateSecurityReport };