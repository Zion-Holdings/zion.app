#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-NETLIFY-FUNCTIONS] ${message}`;
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

function runGit(args, options = {}) {
  return run("git", args, options);
}

function ensureRepoRoot() {
  const gitDir = path.join(process.cwd(), ".git");
  if (!fs.existsSync(gitDir)) {
    throw new Error(`No .git directory found in ${process.cwd()}`);
  }
}

function getNetlifyFunctionsList() {
  try {
    const functionsDir = path.join(process.cwd(), "netlify", "functions");
    if (!fs.existsSync(functionsDir)) {
      log("Netlify functions directory not found");
      return [];
    }
    
    const functions = [];
    const items = fs.readdirSync(functionsDir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory()) {
        const functionPath = path.join(functionsDir, item.name);
        const indexFile = path.join(functionPath, "index.js");
        if (fs.existsSync(indexFile)) {
          functions.push(item.name);
        }
      }
    }
    
    log(`Found ${functions.length} Netlify functions`);
    return functions;
  } catch (err) {
    log(`Error reading functions directory: ${String(err)}`);
    return [];
  }
}

function generateFunctionsManifest(functions) {
  try {
    const manifest = {
      generatedAt: new Date().toISOString(),
      functions: functions,
      redundancyInfo: {
        generatedBy: "pm2-redundancy-system",
        purpose: "backup-for-netlify-automation",
        timestamp: new Date().toISOString()
      }
    };
    
    const manifestPath = path.join(process.cwd(), "netlify", "functions", "functions-manifest-redundancy.json");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    log(`Functions manifest generated: ${manifestPath}`);
    return manifestPath;
  } catch (err) {
    log(`Error generating manifest: ${String(err)}`);
    return null;
  }
}

function triggerNetlifyBuild() {
  log("Triggering Netlify build...");
  
  try {
    const siteId = process.env.NETLIFY_SITE_ID;
    const accessToken = process.env.NETLIFY_ACCESS_TOKEN;
    
    if (!siteId || !accessToken) {
      log("Netlify credentials not found, skipping build trigger");
      return { success: false, reason: "missing-credentials" };
    }
    
    // Trigger build via Netlify API
    const buildResult = spawnSync("curl", [
      "-X", "POST",
      "-H", `Authorization: Bearer ${accessToken}`,
      "-H", "Content-Type: application/json",
      `https://api.netlify.com/api/v1/sites/${siteId}/builds`
    ], {
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    
    if (buildResult.status === 0) {
      log("Netlify build triggered successfully");
      return { success: true, response: buildResult.stdout };
    } else {
      log(`Netlify build trigger failed: ${buildResult.stderr}`);
      return { success: false, reason: "api-call-failed", error: buildResult.stderr };
    }
  } catch (err) {
    log(`Netlify build trigger error: ${String(err)}`);
    return { success: false, reason: "execution-error", error: String(err) };
  }
}

function runNetlifyFunctionsLocally() {
  log("Running Netlify functions locally for testing...");
  
  try {
    // Check if netlify-cli is available
    const netlifyCheck = run("netlify", ["--version"]);
    if (netlifyCheck.status !== 0) {
      log("Netlify CLI not found, skipping local function testing");
      return { success: false, reason: "netlify-cli-not-found" };
    }
    
    // Run functions locally
    const functionsResult = run("netlify", ["dev", "--functions", "--port", "8888"], {
      cwd: process.cwd(),
      timeout: 30000 // 30 seconds timeout
    });
    
    if (functionsResult.status === 0) {
      log("Netlify functions local testing completed");
      return { success: true, output: functionsResult.stdout };
    } else {
      log(`Netlify functions local testing failed: ${functionsResult.stderr}`);
      return { success: false, reason: "local-testing-failed", error: functionsResult.stderr };
    }
  } catch (err) {
    log(`Netlify functions local testing error: ${String(err)}`);
    return { success: false, reason: "execution-error", error: String(err) };
  }
}

function validateFunctionsHealth() {
  log("Validating Netlify functions health...");
  
  try {
    const functions = getNetlifyFunctionsList();
    const healthResults = [];
    
    for (const funcName of functions) {
      const functionPath = path.join(process.cwd(), "netlify", "functions", funcName);
      const indexFile = path.join(functionPath, "index.js");
      
      try {
        // Basic syntax check
        const syntaxCheck = run("node", ["--check", indexFile]);
        const isHealthy = syntaxCheck.status === 0;
        
        healthResults.push({
          function: funcName,
          healthy: isHealthy,
          error: isHealthy ? null : syntaxCheck.stderr
        });
        
        log(`Function ${funcName}: ${isHealthy ? '✅ Healthy' : '❌ Unhealthy'}`);
      } catch (err) {
        healthResults.push({
          function: funcName,
          healthy: false,
          error: String(err)
        });
        log(`Function ${funcName}: ❌ Error during validation`);
      }
    }
    
    return {
      total: functions.length,
      healthy: healthResults.filter(r => r.healthy).length,
      unhealthy: healthResults.filter(r => !r.healthy).length,
      results: healthResults
    };
  } catch (err) {
    log(`Functions health validation error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      unhealthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function generateRedundancyReport(functions, manifestPath, buildResult, localTestResult, healthResult) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "netlify-functions",
    functions: {
      total: functions.length,
      list: functions
    },
    operations: {
      manifestGeneration: !!manifestPath,
      buildTrigger: buildResult,
      localTesting: localTestResult,
      healthValidation: healthResult
    },
    summary: {
      overallHealth: "healthy",
      issues: []
    }
  };
  
  // Determine overall health
  if (!manifestPath) report.summary.issues.push("manifest-generation-failed");
  if (!buildResult.success) report.summary.issues.push("build-trigger-failed");
  if (!localTestResult.success) report.summary.issues.push("local-testing-failed");
  if (healthResult.unhealthy > 0) report.summary.issues.push("unhealthy-functions");
  
  if (report.summary.issues.length > 0) {
    report.summary.overallHealth = "degraded";
  }
  
  const reportPath = path.join(process.cwd(), "netlify-functions-redundancy-report.md");
  const reportContent = `# Netlify Functions Redundancy Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Total Functions**: ${report.functions.total}
- **Issues Found**: ${report.summary.issues.length}

## Functions Status
${report.functions.list.map(f => `- ${f}`).join('\n')}

## Operations Status
- **Manifest Generation**: ${report.operations.manifestGeneration ? '✅ Success' : '❌ Failed'}
- **Build Trigger**: ${report.operations.buildTrigger.success ? '✅ Success' : '❌ Failed'}${report.operations.buildTrigger.reason ? ` (${report.operations.buildTrigger.reason})` : ''}
- **Local Testing**: ${report.operations.localTesting.success ? '✅ Success' : '❌ Failed'}${report.operations.localTesting.reason ? ` (${report.operations.localTesting.reason})` : ''}
- **Health Validation**: ${report.operations.healthValidation.healthy}/${report.operations.healthValidation.total} functions healthy

## Health Validation Details
${report.operations.healthValidation.results.map(r => `- **${r.function}**: ${r.healthy ? '✅ Healthy' : '❌ Unhealthy'}${r.error ? ` (${r.error})` : ''}`).join('\n')}

## Redundancy Status
This report was generated by the PM2 redundancy system, providing backup for Netlify automation functions.

## Next Steps
- Monitor function health
- Check build status
- Review any validation errors
- Ensure all functions are properly configured
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Redundancy report generated: ${reportPath}`);
  return reportPath;
}

async function commitRedundancyReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update netlify-functions redundancy report"]);
      
      log("Redundancy report committed successfully");
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
  log("Starting Netlify Functions Redundancy Process");
  
  try {
    ensureRepoRoot();
    
    // Get list of Netlify functions
    const functions = getNetlifyFunctionsList();
    
    // Generate functions manifest
    log("Generating functions manifest...");
    const manifestPath = generateFunctionsManifest(functions);
    
    // Trigger Netlify build
    log("Triggering Netlify build...");
    const buildResult = triggerNetlifyBuild();
    
    // Run local function testing
    log("Running local function testing...");
    const localTestResult = runNetlifyFunctionsLocally();
    
    // Validate functions health
    log("Validating functions health...");
    const healthResult = validateFunctionsHealth();
    
    // Generate redundancy report
    log("Generating redundancy report...");
    const reportPath = generateRedundancyReport(functions, manifestPath, buildResult, localTestResult, healthResult);
    
    // Commit report if changed
    log("Committing redundancy report if changed...");
    await commitRedundancyReport(reportPath);
    
    log("Netlify Functions Redundancy Process completed");
    log(`Results: Functions=${functions.length}, Health=${healthResult.healthy}/${healthResult.total}, Build=${buildResult.success ? 'OK' : 'FAILED'}`);
    
    // Exit with appropriate code
    if (reportPath && buildResult.success && healthResult.unhealthy === 0) {
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
  getNetlifyFunctionsList, 
  generateFunctionsManifest, 
  triggerNetlifyBuild, 
  runNetlifyFunctionsLocally, 
  validateFunctionsHealth,
  generateRedundancyReport 
};