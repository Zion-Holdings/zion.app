#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-BUILD-AUTOMATION] ${message}`;
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

function checkDependencies() {
  log("Checking dependencies...");
  
  try {
    // Check if package.json exists
    const packageJsonPath = path.join(process.cwd(), "package.json");
    if (!fs.existsSync(packageJsonPath)) {
      log("package.json not found");
      return { healthy: false, error: "package.json-missing" };
    }
    
    // Check if package-lock.json exists
    const packageLockPath = path.join(process.cwd(), "package-lock.json");
    if (!fs.existsSync(packageLockPath)) {
      log("package-lock.json not found");
      return { healthy: false, error: "package-lock.json-missing" };
    }
    
    // Check if node_modules exists
    const nodeModulesPath = path.join(process.cwd(), "node_modules");
    if (!fs.existsSync(nodeModulesPath)) {
      log("node_modules not found, running npm install...");
      const installResult = run("npm", ["install"]);
      if (installResult.status !== 0) {
        log(`npm install failed: ${installResult.stderr}`);
        return { healthy: false, error: "npm-install-failed", details: installResult.stderr };
      }
      log("npm install completed successfully");
    }
    
    // Validate package.json syntax
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      if (!packageJson.scripts || !packageJson.scripts.build) {
        log("Build script not found in package.json");
        return { healthy: false, error: "build-script-missing" };
      }
    } catch (err) {
      log(`Invalid package.json: ${String(err)}`);
      return { healthy: false, error: "invalid-package-json", details: String(err) };
    }
    
    log("Dependencies check passed");
    return { healthy: true };
  } catch (err) {
    log(`Dependencies check error: ${String(err)}`);
    return { healthy: false, error: "check-failed", details: String(err) };
  }
}

function runLinting() {
  log("Running linting...");
  
  try {
    const lintResult = run("npm", ["run", "lint"]);
    if (lintResult.status === 0) {
      log("Linting passed");
      return { success: true, output: lintResult.stdout };
    } else {
      log(`Linting failed: ${lintResult.stderr}`);
      return { success: false, error: lintResult.stderr };
    }
  } catch (err) {
    log(`Linting error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function runTypeCheck() {
  log("Running type check...");
  
  try {
    const typeCheckResult = run("npm", ["run", "type-check"]);
    if (typeCheckResult.status === 0) {
      log("Type check passed");
      return { success: true, output: typeCheckResult.stdout };
    } else {
      log(`Type check failed: ${typeCheckResult.stderr}`);
      return { success: false, error: typeCheckResult.stderr };
    }
  } catch (err) {
    log(`Type check error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function runBuild() {
  log("Running build process...");
  
  try {
    const buildResult = run("npm", ["run", "build"]);
    if (buildResult.status === 0) {
      log("Build completed successfully");
      return { success: true, output: buildResult.stdout };
    } else {
      log(`Build failed: ${buildResult.stderr}`);
      return { success: false, error: buildResult.stderr };
    }
  } catch (err) {
    log(`Build error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function runBuildHealthCheck() {
  log("Running build health check...");
  
  try {
    const healthCheckResult = run("npm", ["run", "build:health-check"]);
    if (healthCheckResult.status === 0) {
      log("Build health check passed");
      return { success: true, output: healthCheckResult.stdout };
    } else {
      log(`Build health check failed: ${healthCheckResult.stderr}`);
      return { success: false, error: healthCheckResult.stderr };
    }
  } catch (err) {
    log(`Build health check error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function validateBuildOutput() {
  log("Validating build output...");
  
  try {
    const buildOutputs = [
      ".next",
      "out",
      "public"
    ];
    
    const validationResults = [];
    
    for (const output of buildOutputs) {
      const outputPath = path.join(process.cwd(), output);
      if (fs.existsSync(outputPath)) {
        const stats = fs.statSync(outputPath);
        if (stats.isDirectory()) {
          const items = fs.readdirSync(outputPath);
          validationResults.push({
            output: output,
            exists: true,
            type: "directory",
            itemCount: items.length,
            healthy: items.length > 0
          });
        } else {
          validationResults.push({
            output: output,
            exists: true,
            type: "file",
            itemCount: 1,
            healthy: true
          });
        }
      } else {
        validationResults.push({
          output: output,
          exists: false,
          type: "missing",
          itemCount: 0,
          healthy: false
        });
      }
    }
    
    const healthy = validationResults.filter(r => r.healthy).length;
    const total = validationResults.length;
    
    log(`Build output validation: ${healthy}/${total} outputs healthy`);
    return {
      total: total,
      healthy: healthy,
      results: validationResults
    };
  } catch (err) {
    log(`Build output validation error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function generateBuildReport(depsCheck, lintResult, typeCheckResult, buildResult, healthCheckResult, outputValidation) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "build-automation",
    checks: {
      dependencies: depsCheck,
      linting: lintResult,
      typeCheck: typeCheckResult,
      build: buildResult,
      healthCheck: healthCheckResult,
      outputValidation: outputValidation
    },
    summary: {
      overallHealth: "healthy",
      issues: []
    }
  };
  
  // Determine overall health
  if (!depsCheck.healthy) report.summary.issues.push("dependencies-unhealthy");
  if (!lintResult.success) report.summary.issues.push("linting-failed");
  if (!typeCheckResult.success) report.summary.issues.push("type-check-failed");
  if (!buildResult.success) report.summary.issues.push("build-failed");
  if (!healthCheckResult.success) report.summary.issues.push("health-check-failed");
  if (outputValidation.healthy < outputValidation.total) report.summary.issues.push("output-validation-failed");
  
  if (report.summary.issues.length > 0) {
    report.summary.overallHealth = "degraded";
  }
  
  const reportPath = path.join(process.cwd(), "build-automation-redundancy-report.md");
  const reportContent = `# Build Automation Redundancy Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Issues Found**: ${report.summary.issues.length}

## Check Results
- **Dependencies**: ${report.checks.dependencies.healthy ? '✅ Healthy' : '❌ Unhealthy'}${report.checks.dependencies.error ? ` (${report.checks.dependencies.error})` : ''}
- **Linting**: ${report.checks.linting.success ? '✅ Passed' : '❌ Failed'}${report.checks.linting.error ? ` (${report.checks.linting.error})` : ''}
- **Type Check**: ${report.checks.typeCheck.success ? '✅ Passed' : '❌ Failed'}${report.checks.typeCheck.error ? ` (${report.checks.typeCheck.error})` : ''}
- **Build**: ${report.checks.build.success ? '✅ Success' : '❌ Failed'}${report.checks.build.error ? ` (${report.checks.build.error})` : ''}
- **Health Check**: ${report.checks.healthCheck.success ? '✅ Passed' : '❌ Failed'}${report.checks.healthCheck.error ? ` (${report.checks.healthCheck.error})` : ''}
- **Output Validation**: ${report.checks.outputValidation.healthy}/${report.checks.outputValidation.total} outputs healthy

## Output Validation Details
${report.checks.outputValidation.results.map(r => `- **${r.output}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.type}, ${r.itemCount} items, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Redundancy Status
This report was generated by the PM2 redundancy system, providing backup for build automation processes.

## Next Steps
- Review any failed checks
- Fix dependency issues if present
- Resolve linting errors
- Check build configuration
- Validate output directories
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Build report generated: ${reportPath}`);
  return reportPath;
}

async function commitBuildReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update build-automation redundancy report"]);
      
      log("Build report committed successfully");
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
  log("Starting Build Automation Redundancy Process");
  
  try {
    ensureRepoRoot();
    
    // Check dependencies
    log("Checking dependencies...");
    const depsCheck = checkDependencies();
    
    // Run linting
    log("Running linting...");
    const lintResult = runLinting();
    
    // Run type check
    log("Running type check...");
    const typeCheckResult = runTypeCheck();
    
    // Run build
    log("Running build...");
    const buildResult = runBuild();
    
    // Run build health check
    log("Running build health check...");
    const healthCheckResult = runBuildHealthCheck();
    
    // Validate build output
    log("Validating build output...");
    const outputValidation = validateBuildOutput();
    
    // Generate build report
    log("Generating build report...");
    const reportPath = generateBuildReport(depsCheck, lintResult, typeCheckResult, buildResult, healthCheckResult, outputValidation);
    
    // Commit report if changed
    log("Committing build report if changed...");
    await commitBuildReport(reportPath);
    
    log("Build Automation Redundancy Process completed");
    log(`Results: Deps=${depsCheck.healthy ? 'OK' : 'FAILED'}, Lint=${lintResult.success ? 'OK' : 'FAILED'}, Build=${buildResult.success ? 'OK' : 'FAILED'}`);
    
    // Exit with appropriate code
    if (depsCheck.healthy && buildResult.success && outputValidation.healthy === outputValidation.total) {
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
  checkDependencies, 
  runLinting, 
  runTypeCheck, 
  runBuild, 
  runBuildHealthCheck, 
  validateBuildOutput,
  generateBuildReport 
};