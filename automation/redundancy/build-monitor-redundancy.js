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

function checkBuildHealth() {
  log("Checking build health...");
  
  const healthChecks = {
    packageJson: false,
    nodeModules: false,
    buildScripts: false,
    dependencies: false,
    gitStatus: false
  };
  
  try {
    // Check package.json exists
    const packagePath = path.join(process.cwd(), "package.json");
    if (fs.existsSync(packagePath)) {
      healthChecks.packageJson = true;
      log("✓ package.json found");
    } else {
      log("✗ package.json not found");
    }
    
    // Check node_modules exists
    const nodeModulesPath = path.join(process.cwd(), "node_modules");
    if (fs.existsSync(nodeModulesPath)) {
      healthChecks.nodeModules = true;
      log("✓ node_modules found");
    } else {
      log("✗ node_modules not found");
    }
    
    // Check build scripts in package.json
    if (healthChecks.packageJson) {
      try {
        const packageContent = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        if (packageContent.scripts && packageContent.scripts.build) {
          healthChecks.buildScripts = true;
          log("✓ build script found");
        } else {
          log("✗ build script not found");
        }
      } catch (error) {
        log(`✗ Error parsing package.json: ${String(error)}`);
      }
    }
    
    // Check dependencies
    if (healthChecks.packageJson) {
      try {
        const packageContent = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        if (packageContent.dependencies && Object.keys(packageContent.dependencies).length > 0) {
          healthChecks.dependencies = true;
          log("✓ dependencies found");
        } else {
          log("✗ no dependencies found");
        }
      } catch (error) {
        log(`✗ Error checking dependencies: ${String(error)}`);
      }
    }
    
    // Check git status
    const gitStatus = runGit(["status", "--porcelain"]);
    if (gitStatus.status === 0) {
      healthChecks.gitStatus = true;
      log("✓ git repository accessible");
    } else {
      log("✗ git repository not accessible");
    }
    
  } catch (error) {
    log(`Error during health check: ${String(error)}`);
  }
  
  return healthChecks;
}

function runPreBuildChecks() {
  log("Running pre-build health checks...");
  
  try {
    // Run the existing pre-build health check if available
    const preBuildScript = path.join(process.cwd(), "automation", "pre-build-health-check.cjs");
    if (fs.existsSync(preBuildScript)) {
      log("Running pre-build health check script...");
      const result = run("node", [preBuildScript]);
      if (result.status === 0) {
        log("✓ Pre-build health check passed");
        return { success: true, script: "pre-build-health-check.cjs" };
      } else {
        log("✗ Pre-build health check failed");
        return { success: false, script: "pre-build-health-check.cjs", error: result.stderr };
      }
    } else {
      log("No pre-build health check script found, running basic checks");
      const healthChecks = checkBuildHealth();
      const passedChecks = Object.values(healthChecks).filter(Boolean).length;
      const totalChecks = Object.keys(healthChecks).length;
      
      if (passedChecks >= totalChecks * 0.8) { // 80% threshold
        log(`✓ Basic health checks passed (${passedChecks}/${totalChecks})`);
        return { success: true, script: "basic-checks", passed: passedChecks, total: totalChecks };
      } else {
        log(`✗ Basic health checks failed (${passedChecks}/${totalChecks})`);
        return { success: false, script: "basic-checks", passed: passedChecks, total: totalChecks };
      }
    }
  } catch (error) {
    log(`Error running pre-build checks: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function runBuildValidation() {
  log("Running build validation...");
  
  try {
    // Run the existing build validator if available
    const validatorScript = path.join(process.cwd(), "automation", "nextjs-page-validator.cjs");
    if (fs.existsSync(validatorScript)) {
      log("Running Next.js page validator...");
      const result = run("node", [validatorScript]);
      if (result.status === 0) {
        log("✓ Build validation passed");
        return { success: true, script: "nextjs-page-validator.cjs" };
      } else {
        log("✗ Build validation failed");
        return { success: false, script: "nextjs-page-validator.cjs", error: result.stderr };
      }
    } else {
      log("No build validator script found, skipping validation");
      return { success: true, script: "none", skipped: true };
    }
  } catch (error) {
    log(`Error running build validation: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkBuildDependencies() {
  log("Checking build dependencies...");
  
  try {
    // Check if npm is available
    const npmCheck = run("npm", ["--version"]);
    if (npmCheck.status !== 0) {
      log("✗ npm not available");
      return { success: false, error: "npm not available" };
    }
    log("✓ npm available");
    
    // Check for outdated packages
    const outdatedCheck = run("npm", ["outdated", "--json"]);
    if (outdatedCheck.status === 0) {
      try {
        const outdated = JSON.parse(outdatedCheck.stdout);
        const outdatedCount = Object.keys(outdated).length;
        if (outdatedCount > 0) {
          log(`⚠ ${outdatedCount} packages are outdated`);
          return { success: true, outdated: outdatedCount, packages: Object.keys(outdated) };
        } else {
          log("✓ All packages are up to date");
          return { success: true, outdated: 0 };
        }
      } catch (error) {
        log(`Error parsing outdated packages: ${String(error)}`);
        return { success: true, outdated: "unknown" };
      }
    } else {
      log("✓ No outdated packages found");
      return { success: true, outdated: 0 };
    }
  } catch (error) {
    log(`Error checking dependencies: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateBuildReport() {
  const report = {
    generatedAt: nowIso(),
    healthChecks: null,
    preBuildChecks: null,
    buildValidation: null,
    dependencies: null,
    summary: "Build monitor redundancy report"
  };

  try {
    // Run all checks
    report.healthChecks = checkBuildHealth();
    report.preBuildChecks = runPreBuildChecks();
    report.buildValidation = runBuildValidation();
    report.dependencies = checkBuildDependencies();
    
    // Generate summary
    const healthScore = Object.values(report.healthChecks).filter(Boolean).length / Object.keys(report.healthChecks).length;
    const overallSuccess = report.preBuildChecks.success && report.buildValidation.success && healthScore >= 0.8;
    
    if (overallSuccess) {
      report.summary = "Build health check completed successfully - all systems operational";
    } else {
      report.summary = "Build health check completed with issues - some systems need attention";
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "build-monitor-redundancy-report.md");
    const reportContent = `# Build Monitor Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## Health Checks
- Package.json: ${report.healthChecks.packageJson ? "✅" : "❌"}
- Node Modules: ${report.healthChecks.nodeModules ? "✅" : "❌"}
- Build Scripts: ${report.healthChecks.buildScripts ? "✅" : "❌"}
- Dependencies: ${report.healthChecks.dependencies ? "✅" : "❌"}
- Git Status: ${report.healthChecks.gitStatus ? "✅" : "❌"}

## Pre-Build Checks
- Status: ${report.preBuildChecks.success ? "✅ Passed" : "❌ Failed"}
- Script: ${report.preBuildChecks.script}

## Build Validation
- Status: ${report.buildValidation.success ? "✅ Passed" : "❌ Failed"}
- Script: ${report.buildValidation.script}

## Dependencies
- Status: ${report.dependencies.success ? "✅ OK" : "❌ Failed"}
- Outdated: ${report.dependencies.outdated || 0}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

    fs.writeFileSync(reportPath, reportContent);
    log(`Build report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating build report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

// Main execution
function main() {
  log("Starting build monitor redundancy process");
  
  try {
    const report = generateBuildReport();
    log(`Build monitor redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Build monitor redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  checkBuildHealth, 
  runPreBuildChecks, 
  runBuildValidation, 
  checkBuildDependencies, 
  generateBuildReport 
};