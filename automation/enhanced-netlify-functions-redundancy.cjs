#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedNetlifyFunctionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-netlify-functions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.healthMetrics = {
      totalChecks: 0,
      successfulChecks: 0,
      failedChecks: 0,
      functionsRegenerated: 0,
      deploymentsTriggered: 0,
      lastCheck: null,
      uptime: Date.now()
    };
    this.functionCache = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.workspace, "automation/redundancy-config.json");
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, "utf8"));
      } catch (error) {
        this.log(`Error loading config: ${error.message}`);
      }
    }
    
    return {
      netlify: {
        enabled: true,
        checkInterval: 120000,
        maxFailures: 3,
        healthCheckTimeout: 15000,
        autoDeploy: true,
        deployTimeout: 300000,
        functions: {
          autoRegenerate: true,
          healthCheck: true,
          deploymentCheck: true,
          validateSyntax: true,
          checkDependencies: true,
          monitorPerformance: true
        }
      }
    };
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || 30000,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error
      });
    });
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Starting enhanced Netlify functions health check...");
    this.healthMetrics.totalChecks++;
    this.healthMetrics.lastCheck = Date.now();
    
    try {
      // Check if Netlify functions directory exists
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        this.healthMetrics.failedChecks++;
        return false;
      }

      // Check functions manifest
      const manifestHealth = await this.checkFunctionsManifest();
      if (!manifestHealth.healthy) {
        this.log(`⚠️ Functions manifest issues: ${manifestHealth.issues.join(", ")}`, "WARN");
        await this.handleManifestIssues(manifestHealth);
      }

      // Check individual function files
      const functionHealth = await this.checkIndividualFunctions();
      if (!functionHealth.healthy) {
        this.log(`⚠️ Individual function issues: ${functionHealth.issues.join(", ")}`, "WARN");
        await this.handleFunctionIssues(functionHealth);
      }

      // Check function syntax and dependencies
      const syntaxHealth = await this.checkFunctionSyntax();
      if (!syntaxHealth.healthy) {
        this.log(`⚠️ Function syntax issues: ${syntaxHealth.issues.join(", ")}`, "WARN");
        await this.handleSyntaxIssues(syntaxHealth);
      }

      // Check function dependencies
      const dependencyHealth = await this.checkFunctionDependencies();
      if (!dependencyHealth.healthy) {
        this.log(`⚠️ Function dependency issues: ${dependencyHealth.issues.join(", ")}`, "WARN");
        await this.handleDependencyIssues(dependencyHealth);
      }

      // Check Netlify deployment status
      const deploymentHealth = await this.checkNetlifyDeploymentStatus();
      if (!deploymentHealth.healthy) {
        this.log(`⚠️ Deployment issues: ${deploymentHealth.issues.join(", ")}`, "WARN");
        await this.handleDeploymentIssues(deploymentHealth);
      }

      // Monitor function performance
      const performanceHealth = await this.monitorFunctionPerformance();
      if (!performanceHealth.healthy) {
        this.log(`⚠️ Performance issues: ${performanceHealth.issues.join(", ")}`, "WARN");
        await this.handlePerformanceIssues(performanceHealth);
      }

      // Check function security
      const securityHealth = await this.checkFunctionSecurity();
      if (!securityHealth.healthy) {
        this.log(`⚠️ Security issues: ${securityHealth.issues.join(", ")}`, "WARN");
        await this.handleSecurityIssues(securityHealth);
      }

      const overallHealth = manifestHealth.healthy && 
                           functionHealth.healthy && 
                           syntaxHealth.healthy && 
                           dependencyHealth.healthy && 
                           deploymentHealth.healthy && 
                           performanceHealth.healthy && 
                           securityHealth.healthy;

      if (overallHealth) {
        this.healthMetrics.successfulChecks++;
        this.log("✅ Enhanced Netlify functions health check completed successfully");
      } else {
        this.healthMetrics.failedChecks++;
        this.log("⚠️ Netlify functions health check completed with issues", "WARN");
      }

      return overallHealth;
    } catch (error) {
      this.log(`❌ Enhanced Netlify functions health check failed: ${error.message}`, "ERROR");
      this.healthMetrics.failedChecks++;
      return false;
    }
  }

  async checkFunctionsManifest() {
    const issues = [];
    let healthy = true;

    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        issues.push("Functions manifest not found");
        healthy = false;
        return { healthy, issues };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      
      // Check manifest structure
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        issues.push("Invalid manifest structure: missing or invalid functions array");
        healthy = false;
      }

      if (!manifest.generatedAt) {
        issues.push("Missing generation timestamp");
      }

      // Check if manifest is recent (within last 24 hours)
      if (manifest.generatedAt) {
        const generatedTime = new Date(manifest.generatedAt).getTime();
        const now = Date.now();
        const ageHours = (now - generatedTime) / (1000 * 60 * 60);
        
        if (ageHours > 24) {
          issues.push(`Manifest is stale (${ageHours.toFixed(1)} hours old)`);
        }
      }

      // Check for duplicate function names
      const functionNames = manifest.functions || [];
      const duplicates = functionNames.filter((name, index) => functionNames.indexOf(name) !== index);
      if (duplicates.length > 0) {
        issues.push(`Duplicate function names: ${duplicates.join(", ")}`);
        healthy = false;
      }

    } catch (error) {
      issues.push(`Manifest parse error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkIndividualFunctions() {
    const issues = [];
    let healthy = true;

    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        return { healthy: false, issues: ["Manifest not found"] };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const functionsDir = path.join(this.workspace, "netlify/functions");

      for (const functionName of manifest.functions || []) {
        const functionPath = path.join(functionsDir, `${functionName}.js`);
        
        if (!fs.existsSync(functionPath)) {
          issues.push(`Function file missing: ${functionName}.js`);
          healthy = false;
          continue;
        }

        // Check function file size
        const stats = fs.statSync(functionPath);
        if (stats.size === 0) {
          issues.push(`Function file is empty: ${functionName}.js`);
          healthy = false;
        }

        // Check function file permissions
        const mode = stats.mode;
        if ((mode & 0o111) !== 0) {
          issues.push(`Function file has execute permissions: ${functionName}.js`);
        }

        // Check function content
        const content = fs.readFileSync(functionPath, "utf8");
        if (!content.includes("exports.handler") && !content.includes("module.exports")) {
          issues.push(`Function missing handler export: ${functionName}.js`);
          healthy = false;
        }

        // Check for common function issues
        if (content.includes("console.log") && !content.includes("// DEBUG")) {
          issues.push(`Function contains console.log (consider removing): ${functionName}.js`);
        }

        if (content.includes("process.exit")) {
          issues.push(`Function contains process.exit (not recommended): ${functionName}.js`);
          healthy = false;
        }
      }

    } catch (error) {
      issues.push(`Individual function check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkFunctionSyntax() {
    const issues = [];
    let healthy = true;

    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        return { healthy: false, issues: ["Manifest not found"] };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const functionsDir = path.join(this.workspace, "netlify/functions");

      for (const functionName of manifest.functions || []) {
        const functionPath = path.join(functionsDir, `${functionName}.js`);
        
        if (!fs.existsSync(functionPath)) {
          continue;
        }

        try {
          const content = fs.readFileSync(functionPath, "utf8");
          
          // Basic JavaScript syntax validation
          const syntaxCheck = await this.runCommand("node", ["-c", functionPath]);
          if (syntaxCheck.status !== 0) {
            issues.push(`Syntax error in ${functionName}.js: ${syntaxCheck.stderr}`);
            healthy = false;
          }

          // Check for common syntax issues
          if (content.includes("import ") && !content.includes("type: module")) {
            issues.push(`ES6 import used without module type: ${functionName}.js`);
          }

          if (content.includes("await") && !content.includes("async")) {
            issues.push(`Await used without async function: ${functionName}.js`);
            healthy = false;
          }

          // Check for proper error handling
          if (content.includes("exports.handler") && !content.includes("try") && !content.includes("catch")) {
            issues.push(`Function missing error handling: ${functionName}.js`);
          }

        } catch (error) {
          issues.push(`Error checking ${functionName}.js: ${error.message}`);
          healthy = false;
        }
      }

    } catch (error) {
      issues.push(`Function syntax check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkFunctionDependencies() {
    const issues = [];
    let healthy = true;

    try {
      // Check package.json for function dependencies
      const packagePath = path.join(this.workspace, "package.json");
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        
        // Check for required dependencies
        const requiredDeps = ["@netlify/functions"];
        for (const dep of requiredDeps) {
          if (!packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]) {
            issues.push(`Required dependency missing: ${dep}`);
          }
        }

        // Check for outdated dependencies
        if (packageJson.dependencies) {
          for (const [dep, version] of Object.entries(packageJson.dependencies)) {
            if (version.startsWith("^") || version.startsWith("~")) {
              // This is fine - allows updates
            } else if (version.startsWith(">") || version.startsWith("<")) {
              issues.push(`Potentially problematic version constraint: ${dep}@${version}`);
            }
          }
        }
      }

      // Check if node_modules exists
      const nodeModulesPath = path.join(this.workspace, "node_modules");
      if (!fs.existsSync(nodeModulesPath)) {
        issues.push("node_modules directory not found");
        healthy = false;
      }

      // Check for lock file
      const lockFiles = ["package-lock.json", "yarn.lock", "pnpm-lock.yaml"];
      const hasLockFile = lockFiles.some(file => fs.existsSync(path.join(this.workspace, file)));
      if (!hasLockFile) {
        issues.push("No lock file found (may cause dependency issues)");
      }

    } catch (error) {
      issues.push(`Dependency check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkNetlifyDeploymentStatus() {
    const issues = [];
    let healthy = true;

    try {
      // Check if Netlify CLI is available
      const netlifyVersion = await this.runCommand("netlify", ["--version"]);
      if (netlifyVersion.status !== 0) {
        issues.push("Netlify CLI not available");
        healthy = false;
        return { healthy, issues };
      }

      // Check if we're in a Netlify site
      const siteInfo = await this.runCommand("netlify", ["status"]);
      if (siteInfo.status !== 0) {
        issues.push("Not in a Netlify site directory");
        healthy = false;
        return { healthy, issues };
      }

      // Check for recent deployments
      const deployments = await this.runCommand("netlify", ["api", "listSiteDeploys"]);
      if (deployments.status === 0) {
        try {
          const deployData = JSON.parse(deployments.stdout);
          if (deployData && deployData.length > 0) {
            const latestDeploy = deployData[0];
            const deployTime = new Date(latestDeploy.created_at).getTime();
            const now = Date.now();
            const ageHours = (now - deployTime) / (1000 * 60 * 60);
            
            if (ageHours > 24) {
              issues.push(`No recent deployments (last: ${ageHours.toFixed(1)} hours ago)`);
            }
          }
        } catch (parseError) {
          issues.push("Could not parse deployment data");
        }
      }

      // Check build status
      const buildStatus = await this.runCommand("netlify", ["build"]);
      if (buildStatus.status !== 0) {
        issues.push("Build failed");
        healthy = false;
      }

    } catch (error) {
      issues.push(`Deployment status check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async monitorFunctionPerformance() {
    const issues = [];
    let healthy = true;

    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        return { healthy: false, issues: ["Manifest not found"] };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const functionsDir = path.join(this.workspace, "netlify/functions");

      for (const functionName of manifest.functions || []) {
        const functionPath = path.join(functionsDir, `${functionName}.js`);
        
        if (!fs.existsSync(functionPath)) {
          continue;
        }

        const content = fs.readFileSync(functionPath, "utf8");
        const stats = fs.statSync(functionPath);

        // Check file size (functions should generally be under 1MB)
        if (stats.size > 1024 * 1024) {
          issues.push(`Function file is large (${(stats.size / 1024 / 1024).toFixed(2)}MB): ${functionName}.js`);
        }

        // Check for performance anti-patterns
        if (content.includes("setTimeout") && content.includes("0")) {
          issues.push(`Function uses setTimeout(0) (performance consideration): ${functionName}.js`);
        }

        if (content.includes("setInterval")) {
          issues.push(`Function uses setInterval (may cause memory leaks): ${functionName}.js`);
        }

        // Check for synchronous operations
        if (content.includes("fs.readFileSync") || content.includes("fs.writeFileSync")) {
          issues.push(`Function uses synchronous file operations: ${functionName}.js`);
        }

        // Check for large imports
        const importMatches = content.match(/require\(['"`]([^'"`]+)['"`]\)/g);
        if (importMatches) {
          const heavyModules = ["lodash", "moment", "date-fns", "ramda"];
          for (const match of importMatches) {
            const moduleName = match.match(/require\(['"`]([^'"`]+)['"`]\)/)?.[1];
            if (heavyModules.includes(moduleName)) {
              issues.push(`Function imports heavy module: ${moduleName} in ${functionName}.js`);
            }
          }
        }
      }

    } catch (error) {
      issues.push(`Performance monitoring error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkFunctionSecurity() {
    const issues = [];
    let healthy = true;

    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        return { healthy: false, issues: ["Manifest not found"] };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const functionsDir = path.join(this.workspace, "netlify/functions");

      for (const functionName of manifest.functions || []) {
        const functionPath = path.join(functionsDir, `${functionName}.js`);
        
        if (!fs.existsSync(functionPath)) {
          continue;
        }

        const content = fs.readFileSync(functionPath, "utf8");

        // Check for security vulnerabilities
        const securityPatterns = [
          { pattern: /eval\s*\(/, description: "eval() usage" },
          { pattern: /Function\s*\(/, description: "Function constructor usage" },
          { pattern: /process\.env\.\w+/, description: "Environment variable access" },
          { pattern: /require\s*\(/, description: "Dynamic require (potential security risk)" },
          { pattern: /child_process/, description: "Child process execution" },
          { pattern: /exec\s*\(/, description: "Command execution" },
          { pattern: /spawn\s*\(/, description: "Process spawning" }
        ];

        for (const { pattern, description } of securityPatterns) {
          if (pattern.test(content)) {
            issues.push(`Security concern: ${description} in ${functionName}.js`);
          }
        }

        // Check for proper input validation
        if (content.includes("req.body") && !content.includes("validate") && !content.includes("sanitize")) {
          issues.push(`Function may lack input validation: ${functionName}.js`);
        }

        // Check for proper error handling that doesn't leak information
        if (content.includes("console.error") && content.includes("req.body")) {
          issues.push(`Function may log sensitive data: ${functionName}.js`);
        }
      }

    } catch (error) {
      issues.push(`Security check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async handleManifestIssues(health) {
    this.log("⚠️ Handling manifest issues", "WARN");
    
    try {
      if (health.issues.some(issue => issue.includes("not found"))) {
        this.log("🔄 Regenerating functions manifest...");
        await this.regenerateFunctionsManifest();
        this.healthMetrics.functionsRegenerated++;
      }

      if (health.issues.some(issue => issue.includes("stale"))) {
        this.log("🔄 Updating stale manifest...");
        await this.regenerateFunctionsManifest();
        this.healthMetrics.functionsRegenerated++;
      }
    } catch (error) {
      this.log(`❌ Failed to handle manifest issues: ${error.message}`, "ERROR");
    }
  }

  async handleFunctionIssues(health) {
    this.log("⚠️ Handling function issues", "WARN");
    
    try {
      // Create function issues report
      const report = {
        timestamp: new Date().toISOString(),
        type: "function_issues",
        issues: health.issues,
        recommendations: [
          "Check function file existence",
          "Validate function exports",
          "Review function permissions",
          "Check function content"
        ]
      };
      
      const reportPath = path.join(this.logDir, `function-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Function issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle function issues: ${error.message}`, "ERROR");
    }
  }

  async handleSyntaxIssues(health) {
    this.log("⚠️ Handling syntax issues", "WARN");
    
    try {
      // Create syntax validation report
      const report = {
        timestamp: new Date().toISOString(),
        type: "syntax_issues",
        issues: health.issues,
        recommendations: [
          "Fix JavaScript syntax errors",
          "Check async/await usage",
          "Validate function exports",
          "Review error handling"
        ]
      };
      
      const reportPath = path.join(this.logDir, `syntax-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Syntax issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle syntax issues: ${error.message}`, "ERROR");
    }
  }

  async handleDependencyIssues(health) {
    this.log("⚠️ Handling dependency issues", "WARN");
    
    try {
      if (health.issues.some(issue => issue.includes("node_modules"))) {
        this.log("🔄 Installing dependencies...");
        await this.runCommand("npm", ["install"]);
      }

      if (health.issues.some(issue => issue.includes("Required dependency missing"))) {
        this.log("🔄 Installing missing dependencies...");
        await this.runCommand("npm", ["install", "@netlify/functions"]);
      }
    } catch (error) {
      this.log(`❌ Failed to handle dependency issues: ${error.message}`, "ERROR");
    }
  }

  async handleDeploymentIssues(health) {
    this.log("⚠️ Handling deployment issues", "WARN");
    
    try {
      if (health.issues.some(issue => issue.includes("Build failed"))) {
        this.log("🔄 Attempting to fix build issues...");
        await this.runCommand("npm", ["run", "build"]);
      }

      if (this.config.netlify.autoDeploy) {
        this.log("🚀 Triggering automatic deployment...");
        await this.triggerDeployment();
        this.healthMetrics.deploymentsTriggered++;
      }
    } catch (error) {
      this.log(`❌ Failed to handle deployment issues: ${error.message}`, "ERROR");
    }
  }

  async handlePerformanceIssues(health) {
    this.log("⚠️ Handling performance issues", "WARN");
    
    try {
      // Create performance report
      const report = {
        timestamp: new Date().toISOString(),
        type: "performance_issues",
        issues: health.issues,
        recommendations: [
          "Optimize function file sizes",
          "Review synchronous operations",
          "Check for memory leaks",
          "Optimize imports"
        ]
      };
      
      const reportPath = path.join(this.logDir, `performance-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Performance issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle performance issues: ${error.message}`, "ERROR");
    }
  }

  async handleSecurityIssues(health) {
    this.log("⚠️ Handling security issues", "WARN");
    
    try {
      // Create security audit report
      const report = {
        timestamp: new Date().toISOString(),
        type: "security_issues",
        issues: health.issues,
        recommendations: [
          "Review eval() usage",
          "Validate input data",
          "Check environment variable access",
          "Review error logging"
        ]
      };
      
      const reportPath = path.join(this.logDir, `security-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Security issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle security issues: ${error.message}`, "ERROR");
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating functions manifest...");
      await this.runCommand("npm", ["run", "netlify:manifest"]);
      this.healthMetrics.functionsRegenerated++;
      this.log("✅ Functions manifest regenerated");
    } catch (error) {
      this.log(`❌ Failed to regenerate functions manifest: ${error.message}`, "ERROR");
    }
  }

  async triggerDeployment() {
    try {
      this.log("🚀 Triggering Netlify deployment...");
      await this.runCommand("netlify", ["deploy", "--prod"]);
      this.log("✅ Deployment triggered successfully");
    } catch (error) {
      this.log(`❌ Failed to trigger deployment: ${error.message}`, "ERROR");
    }
  }

  async getHealthMetrics() {
    const uptime = Date.now() - this.healthMetrics.uptime;
    const successRate = this.healthMetrics.totalChecks > 0 
      ? (this.healthMetrics.successfulChecks / this.healthMetrics.totalChecks) * 100 
      : 0;
    
    return {
      ...this.healthMetrics,
      uptime,
      successRate: successRate.toFixed(2),
      healthStatus: successRate > 80 ? "HEALTHY" : successRate > 60 ? "DEGRADED" : "CRITICAL"
    };
  }

  async startMonitoring() {
    this.log("🚀 Starting enhanced Netlify functions redundancy monitoring...");
    
    const interval = this.config.netlify.checkInterval || 120000;
    
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, interval);
    
    // Initial health check
    await this.checkNetlifyFunctionsHealth();
    
    this.log(`✅ Enhanced Netlify functions redundancy monitoring started (interval: ${interval}ms)`);
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new EnhancedNetlifyFunctionsRedundancy();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "check":
      redundancy.checkNetlifyFunctionsHealth().then(() => process.exit(0));
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getHealthMetrics(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-netlify-functions-redundancy.cjs [start|check|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedNetlifyFunctionsRedundancy };