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

function checkPackageJson() {
  log("Checking package.json...");
  
  try {
    const packagePath = path.join(process.cwd(), "package.json");
    if (!fs.existsSync(packagePath)) {
      return { success: false, error: "package.json not found" };
    }
    
    const packageContent = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    const analysis = {
      name: packageContent.name,
      version: packageContent.version,
      dependencies: Object.keys(packageContent.dependencies || {}).length,
      devDependencies: Object.keys(packageContent.devDependencies || {}).length,
      scripts: Object.keys(packageContent.scripts || {}).length,
      engines: packageContent.engines || {},
      hasLockFile: fs.existsSync(path.join(process.cwd(), "package-lock.json"))
    };
    
    log(`Package: ${analysis.name}@${analysis.version}`);
    log(`Dependencies: ${analysis.dependencies} prod, ${analysis.devDependencies} dev`);
    
    return { success: true, analysis };
  } catch (error) {
    log(`Error checking package.json: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkOutdatedPackages() {
  log("Checking for outdated packages...");
  
  try {
    const outdatedResult = run("npm", ["outdated", "--json"]);
    let outdatedData = null;
    
    if (outdatedResult.status === 0) {
      try {
        outdatedData = JSON.parse(outdatedResult.stdout);
        const outdatedCount = Object.keys(outdatedData).length;
        log(`Found ${outdatedCount} outdated packages`);
        
        // Categorize by severity
        const severity = {
          patch: [],
          minor: [],
          major: []
        };
        
        Object.entries(outdatedData).forEach(([pkg, info]) => {
          const current = info.current;
          const latest = info.latest;
          
          if (isMajorUpdate(current, latest)) {
            severity.major.push(pkg);
          } else if (isMinorUpdate(current, latest)) {
            severity.minor.push(pkg);
          } else {
            severity.patch.push(pkg);
          }
        });
        
        return { 
          success: true, 
          count: outdatedCount, 
          severity,
          packages: outdatedData 
        };
      } catch (error) {
        log(`Error parsing outdated packages: ${String(error)}`);
        return { success: false, error: "Failed to parse outdated data" };
      }
    } else {
      log("No outdated packages found");
      return { success: true, count: 0, severity: { patch: [], minor: [], major: [] } };
    }
  } catch (error) {
    log(`Error checking outdated packages: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function isMajorUpdate(current, latest) {
  const currentParts = current.split('.').map(Number);
  const latestParts = latest.split('.').map(Number);
  return latestParts[0] > currentParts[0];
}

function isMinorUpdate(current, latest) {
  const currentParts = current.split('.').map(Number);
  const latestParts = latest.split('.').map(Number);
  return latestParts[0] === currentParts[0] && latestParts[1] > currentParts[1];
}

function checkSecurityVulnerabilities() {
  log("Checking for security vulnerabilities...");
  
  try {
    const auditResult = run("npm", ["audit", "--json"]);
    let auditData = null;
    
    if (auditResult.status === 0) {
      try {
        auditData = JSON.parse(auditResult.stdout);
        const vulnerabilities = auditData.vulnerabilities || {};
        
        const summary = {
          total: Object.keys(vulnerabilities).length,
          high: 0,
          moderate: 0,
          low: 0,
          critical: 0
        };
        
        Object.values(vulnerabilities).forEach(vuln => {
          const severity = vuln.severity || 'low';
          if (severity === 'critical') summary.critical++;
          else if (severity === 'high') summary.high++;
          else if (severity === 'moderate') summary.moderate++;
          else summary.low++;
        });
        
        log(`Vulnerabilities: ${summary.total} total (${summary.critical} critical, ${summary.high} high, ${summary.moderate} moderate, ${summary.low} low)`);
        
        return { success: true, summary, vulnerabilities: auditData };
      } catch (error) {
        log(`Error parsing audit data: ${String(error)}`);
        return { success: false, error: "Failed to parse audit data" };
      }
    } else {
      log("No security vulnerabilities found");
      return { success: true, summary: { total: 0, high: 0, moderate: 0, low: 0, critical: 0 } };
    }
  } catch (error) {
    log(`Error checking security vulnerabilities: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkNodeModulesHealth() {
  log("Checking node_modules health...");
  
  try {
    const nodeModulesPath = path.join(process.cwd(), "node_modules");
    if (!fs.existsSync(nodeModulesPath)) {
      return { success: false, error: "node_modules not found" };
    }
    
    const stats = fs.statSync(nodeModulesPath);
    const analysis = {
      exists: true,
      size: stats.size,
      modified: stats.mtime.toISOString(),
      permissions: (stats.mode & parseInt('777', 8)).toString(8)
    };
    
    // Check for common issues
    const issues = [];
    
    // Check if node_modules is too large (potential issue)
    if (stats.size > 500 * 1024 * 1024) { // 500MB
      issues.push("node_modules is very large");
    }
    
    // Check if node_modules is very old
    const daysSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceModified > 30) {
      issues.push("node_modules is over 30 days old");
    }
    
    // Check for common problematic directories
    const problematicDirs = ['.cache', 'tmp', 'temp'];
    problematicDirs.forEach(dir => {
      const dirPath = path.join(nodeModulesPath, dir);
      if (fs.existsSync(dirPath)) {
        issues.push(`Found ${dir} directory in node_modules`);
      }
    });
    
    analysis.issues = issues;
    analysis.health = issues.length === 0 ? "good" : "needs_attention";
    
    log(`node_modules health: ${analysis.health} (${issues.length} issues)`);
    return { success: true, analysis };
  } catch (error) {
    log(`Error checking node_modules: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function runDependencyScripts() {
  log("Running dependency maintenance scripts...");
  
  try {
    const scripts = [
      "automation/dependency-update-orchestrator.cjs",
      "automation/deps-auto-upgrade-runner.cjs"
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
    log(`Error running dependency scripts: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateDependencyReport() {
  const report = {
    generatedAt: nowIso(),
    packageJson: null,
    outdatedPackages: null,
    securityVulnerabilities: null,
    nodeModulesHealth: null,
    scriptResults: null,
    summary: "Dependency monitor redundancy report"
  };

  try {
    // Run all dependency checks
    report.packageJson = checkPackageJson();
    report.outdatedPackages = checkOutdatedPackages();
    report.securityVulnerabilities = checkSecurityVulnerabilities();
    report.nodeModulesHealth = checkNodeModulesHealth();
    report.scriptResults = runDependencyScripts();
    
    // Generate summary
    if (report.packageJson.success && report.outdatedPackages.success && report.securityVulnerabilities.success) {
      const outdatedCount = report.outdatedPackages.count;
      const vulnCount = report.securityVulnerabilities.summary.total;
      const nodeModulesHealth = report.nodeModulesHealth.success ? report.nodeModulesHealth.analysis.health : "unknown";
      
      if (vulnCount > 0) {
        report.summary = `Dependency check completed - ${vulnCount} security vulnerabilities found, ${outdatedCount} packages outdated`;
      } else if (outdatedCount > 0) {
        report.summary = `Dependency check completed - ${outdatedCount} packages outdated, no security issues`;
      } else if (nodeModulesHealth !== "good") {
        report.summary = `Dependency check completed - node_modules health: ${nodeModulesHealth}`;
      } else {
        report.summary = "Dependency check completed - all dependencies up to date and secure";
      }
    } else {
      report.summary = "Dependency check failed - unable to complete all checks";
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "dependency-monitor-redundancy-report.md");
    const reportContent = `# Dependency Monitor Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## Package.json Analysis
${report.packageJson ? `
- Status: ${report.packageJson.success ? "✅ Success" : "❌ Failed"}
- Name: ${report.packageJson.analysis?.name || "Unknown"}
- Version: ${report.packageJson.analysis?.version || "Unknown"}
- Dependencies: ${report.packageJson.analysis?.dependencies || 0} prod, ${report.packageJson.analysis?.devDependencies || 0} dev
- Scripts: ${report.packageJson.analysis?.scripts || 0}
- Lock File: ${report.packageJson.analysis?.hasLockFile ? "✅ Yes" : "❌ No"}
` : '- Package.json analysis not available'}

## Outdated Packages
${report.outdatedPackages ? `
- Status: ${report.outdatedPackages.success ? "✅ Success" : "❌ Failed"}
- Total Outdated: ${report.outdatedPackages.count}
- Major Updates: ${report.outdatedPackages.severity?.major?.length || 0}
- Minor Updates: ${report.outdatedPackages.severity?.minor?.length || 0}
- Patch Updates: ${report.outdatedPackages.severity?.patch?.length || 0}
` : '- Outdated packages check not available'}

## Security Vulnerabilities
${report.securityVulnerabilities ? `
- Status: ${report.securityVulnerabilities.success ? "✅ Success" : "❌ Failed"}
- Total: ${report.securityVulnerabilities.summary?.total || 0}
- Critical: ${report.securityVulnerabilities.summary?.critical || 0}
- High: ${report.securityVulnerabilities.summary?.high || 0}
- Moderate: ${report.securityVulnerabilities.summary?.moderate || 0}
- Low: ${report.securityVulnerabilities.summary?.low || 0}
` : '- Security vulnerabilities check not available'}

## Node Modules Health
${report.nodeModulesHealth ? `
- Status: ${report.nodeModulesHealth.success ? "✅ Success" : "❌ Failed"}
- Health: ${report.nodeModulesHealth.analysis?.health || "Unknown"}
- Size: ${report.nodeModulesHealth.analysis?.size ? `${(report.nodeModulesHealth.analysis.size / 1024 / 1024).toFixed(2)}MB` : "Unknown"}
- Last Modified: ${report.nodeModulesHealth.analysis?.modified || "Unknown"}
- Issues: ${report.nodeModulesHealth.analysis?.issues?.length || 0}
` : '- Node modules health check not available'}

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
    log(`Dependency report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating dependency report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

// Main execution
function main() {
  log("Starting dependency monitor redundancy process");
  
  try {
    const report = generateDependencyReport();
    log(`Dependency monitor redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Dependency monitor redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  checkPackageJson, 
  checkOutdatedPackages, 
  checkSecurityVulnerabilities, 
  checkNodeModulesHealth, 
  runDependencyScripts, 
  generateDependencyReport 
};