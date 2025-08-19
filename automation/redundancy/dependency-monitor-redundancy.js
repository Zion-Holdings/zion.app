#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-DEPENDENCY-MONITOR] ${message}`;
  console.log(message);
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

function checkOutdatedDependencies() {
  try {
    log("Checking outdated dependencies...");
    
    const outdatedResult = run("npm", ["outdated", "--json"], { verbose: false });
    
    if (outdatedResult.status === 0) {
      return {
        outdated: {
          count: 0,
          packages: [],
          timestamp: nowIso()
        }
      };
    } else {
      try {
        const outdatedData = JSON.parse(outdatedResult.stdout);
        const packages = Object.keys(outdatedData);
        
        return {
          outdated: {
            count: packages.length,
            packages: packages.map(pkg => ({
              name: pkg,
              current: outdatedData[pkg].current,
              latest: outdatedData[pkg].latest
            })),
            timestamp: nowIso()
          }
        };
      } catch (parseErr) {
        return {
          outdated: {
            count: 1,
            packages: [{ name: "unknown", current: "unknown", latest: "unknown" }],
            timestamp: nowIso()
          }
        };
      }
    }
  } catch (err) {
    log(`Outdated dependencies check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkVulnerabilities() {
  try {
    log("Checking vulnerabilities...");
    
    const auditResult = run("npm", ["audit", "--json"], { verbose: false });
    
    if (auditResult.status === 0) {
      return {
        vulnerabilities: {
          count: 0,
          level: "none",
          timestamp: nowIso()
        }
      };
    } else {
      try {
        const auditData = JSON.parse(auditResult.stdout);
        const vulnCount = auditData.metadata?.vulnerabilities?.total || 0;
        
        return {
          vulnerabilities: {
            count: vulnCount,
            level: vulnCount > 0 ? "found" : "none",
            timestamp: nowIso()
          }
        };
      } catch (parseErr) {
        return {
          vulnerabilities: {
            count: 1,
            level: "unknown",
            timestamp: nowIso()
          }
        };
      }
    }
  } catch (err) {
    log(`Vulnerabilities check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkPackageHealth() {
  try {
    log("Checking package health...");
    
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    
    const totalDeps = Object.keys(dependencies).length + Object.keys(devDependencies).length;
    
    return {
      packageHealth: {
        totalDependencies: totalDeps,
        production: Object.keys(dependencies).length,
        development: Object.keys(devDependencies).length,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Package health check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function generateDependencyReport(outdated, vulnerabilities, packageHealth) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    dependencyMonitor: {
      outdated,
      vulnerabilities,
      packageHealth,
      summary: {
        overallHealth: "good",
        issues: []
      }
    }
  };
  
  // Analyze overall health
  if (outdated.outdated?.count > 0) {
    report.dependencyMonitor.summary.issues.push(`${outdated.outdated.count} outdated dependencies`);
  }
  
  if (vulnerabilities.vulnerabilities?.count > 0) {
    report.dependencyMonitor.summary.issues.push(`${vulnerabilities.vulnerabilities.count} security vulnerabilities`);
  }
  
  if (report.dependencyMonitor.summary.issues.length > 0) {
    report.dependencyMonitor.summary.overallHealth = "needs_attention";
  }

  const reportPath = path.join(process.cwd(), "dependency-monitor-redundancy-report.md");
  const reportContent = `# Dependency Monitor Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall Health: ${report.dependencyMonitor.summary.overallHealth.toUpperCase()}

## Issues Detected
${report.dependencyMonitor.summary.issues.length > 0 ? 
  report.dependencyMonitor.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No dependency issues detected"}

## Outdated Dependencies
- Count: ${outdated.outdated?.count || 0} ${outdated.outdated?.count > 0 ? "❌" : "✅"}
${outdated.outdated?.packages?.length > 0 ? 
  outdated.outdated.packages.map(pkg => `  - ${pkg.name}: ${pkg.current} → ${pkg.latest}`).join("\n") : 
  "- All dependencies are up to date"}

## Security Vulnerabilities
- Count: ${vulnerabilities.vulnerabilities?.count || 0} ${vulnerabilities.vulnerabilities?.count > 0 ? "❌" : "✅"}
- Level: ${vulnerabilities.vulnerabilities?.level || "unknown"}

## Package Health
- Total Dependencies: ${packageHealth.packageHealth?.totalDependencies || 0} 📦
- Production: ${packageHealth.packageHealth?.production || 0} 🚀
- Development: ${packageHealth.packageHealth?.development || 0} 🛠️

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Dependency report generated: ${reportPath}`);
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
    run("git", ["commit", "-m", `chore(redundancy): dependency monitoring via PM2 redundancy`]);

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
    log("Starting dependency monitor redundancy process...");
    
    const outdated = checkOutdatedDependencies();
    const vulnerabilities = checkVulnerabilities();
    const packageHealth = checkPackageHealth();
    
    const report = generateDependencyReport(outdated, vulnerabilities, packageHealth);
    
    await commitAndPush();
    
    log("Dependency monitor redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Dependency monitor redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkOutdatedDependencies, checkVulnerabilities, checkPackageHealth, generateDependencyReport };