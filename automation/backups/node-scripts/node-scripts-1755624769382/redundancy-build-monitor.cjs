#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class RedundancyBuildMonitor {
  constructor() {
    this.config = {
      buildCheckInterval: parseInt(process.env.BUILD_CHECK_INTERVAL) || 600000, // 10 minutes
      buildTimeout: parseInt(process.env.BUILD_TIMEOUT) || 300000, // 5 minutes
      maxBuildFailures: parseInt(process.env.MAX_BUILD_FAILURES) || 3,
      logDir: "automation/logs",
      maxLogSize: 5 * 1024 * 1024, // 5MB
      maxLogFiles: 15,
      buildScripts: ["build", "build:health-check", "build:validate"],
      healthThresholds: {
        maxBuildTime: 300000, // 5 minutes
        maxMemoryUsage: 1024 * 1024 * 1024 * 2, // 2GB
        maxCpuUsage: 80 // 80%
      }
    };
    
    this.buildHistory = [];
    this.failureCount = 0;
    this.lastBuildTime = 0;
    this.isBuilding = false;
    this.currentBuild = null;
    
    this.ensureLogDirectory();
    this.startMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logDir, `redundancy-build-monitor-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: this.config.buildTimeout,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error,
        signal: result.signal
      });
    });
  }

  async checkBuildEnvironment() {
    try {
      this.log("Checking build environment...", "INFO");
      
      // Check package.json
      if (!fs.existsSync("package.json")) {
        throw new Error("package.json not found");
      }

      const packageJson = JSON.parse(fs.readFileSync("package.json", 'utf8'));
      
      // Check required scripts
      const missingScripts = this.config.buildScripts.filter(script => 
        !packageJson.scripts || !packageJson.scripts[script]
      );

      if (missingScripts.length > 0) {
        throw new Error(`Missing build scripts: ${missingScripts.join(', ')}`);
      }

      // Check dependencies
      if (!fs.existsSync("node_modules")) {
        this.log("node_modules not found, installing dependencies...", "WARN");
        const installResult = await this.runCommand("npm", ["install"]);
        if (installResult.status !== 0) {
          throw new Error(`Dependency installation failed: ${installResult.stderr}`);
        }
      }

      // Check Node.js version
      const nodeVersion = await this.runCommand("node", ["--version"]);
      if (nodeVersion.status !== 0) {
        throw new Error("Node.js not accessible");
      }

      // Check npm version
      const npmVersion = await this.runCommand("npm", ["--version"]);
      if (npmVersion.status !== 0) {
        throw new Error("npm not accessible");
      }

      this.log("Build environment check passed", "INFO");
      return {
        healthy: true,
        nodeVersion: nodeVersion.stdout.trim(),
        npmVersion: npmVersion.stdout.trim(),
        availableScripts: Object.keys(packageJson.scripts || {}),
        dependencies: fs.existsSync("node_modules")
      };

    } catch (error) {
      this.log(`Build environment check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async checkBuildHealth() {
    try {
      this.log("Running build health check...", "INFO");
      
      const healthCheckResult = await this.runCommand("npm", ["run", "build:health-check"]);
      
      if (healthCheckResult.status !== 0) {
        throw new Error(`Health check failed: ${healthCheckResult.stderr}`);
      }

      return { healthy: true, output: healthCheckResult.stdout };
    } catch (error) {
      this.log(`Build health check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async validateBuild() {
    try {
      this.log("Running build validation...", "INFO");
      
      const validationResult = await this.runCommand("npm", ["run", "build:validate"]);
      
      if (validationResult.status !== 0) {
        throw new Error(`Build validation failed: ${validationResult.stderr}`);
      }

      return { healthy: true, output: validationResult.stdout };
    } catch (error) {
      this.log(`Build validation failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async performBuild() {
    try {
      if (this.isBuilding) {
        this.log("Build already in progress, skipping...", "WARN");
        return { success: false, skipped: true };
      }

      this.isBuilding = true;
      const buildStart = Date.now();
      
      this.log("Starting build process...", "INFO");
      
      // Check environment first
      const envCheck = await this.checkBuildEnvironment();
      if (!envCheck.healthy) {
        throw new Error(`Environment check failed: ${envCheck.error}`);
      }

      // Run health check
      const healthCheck = await this.checkBuildHealth();
      if (!healthCheck.healthy) {
        this.log("Build health check failed, attempting recovery...", "WARN");
        
        // Try to fix common issues
        const recoveryResult = await this.attemptBuildRecovery();
        if (!recoveryResult.success) {
          throw new Error(`Build recovery failed: ${recoveryResult.error}`);
        }
      }

      // Run validation
      const validation = await this.validateBuild();
      if (!validation.healthy) {
        this.log("Build validation failed, attempting recovery...", "WARN");
        
        const recoveryResult = await this.attemptBuildRecovery();
        if (!recoveryResult.success) {
          throw new Error(`Build validation recovery failed: ${recoveryResult.error}`);
        }
      }

      // Perform actual build
      this.log("Performing main build...", "INFO");
      const buildResult = await this.runCommand("npm", ["run", "build"]);
      
      if (buildResult.status !== 0) {
        throw new Error(`Build failed: ${buildResult.stderr}`);
      }

      const buildTime = Date.now() - buildStart;
      this.log(`Build completed successfully in ${buildTime}ms`, "INFO");

      // Record build success
      const buildRecord = {
        timestamp: new Date().toISOString(),
        success: true,
        buildTime,
        environment: envCheck,
        healthCheck: healthCheck.healthy,
        validation: validation.healthy,
        output: buildResult.stdout
      };

      this.buildHistory.push(buildRecord);
      if (this.buildHistory.length > 100) {
        this.buildHistory = this.buildHistory.slice(-100);
      }

      this.lastBuildTime = Date.now();
      this.failureCount = 0;
      this.isBuilding = false;

      return { success: true, buildTime, record: buildRecord };

    } catch (error) {
      this.log(`Build failed: ${error.message}`, "ERROR");
      this.failureCount++;
      this.isBuilding = false;

      const buildRecord = {
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        failureCount: this.failureCount
      };

      this.buildHistory.push(buildRecord);
      if (this.buildHistory.length > 100) {
        this.buildHistory = this.buildHistory.slice(-100);
      }

      return { success: false, error: error.message };
    }
  }

  async attemptBuildRecovery() {
    try {
      this.log("Attempting build recovery...", "INFO");
      
      // Try to clean and reinstall dependencies
      this.log("Cleaning node_modules and reinstalling...", "INFO");
      
      if (fs.existsSync("node_modules")) {
        const removeResult = await this.runCommand("rm", ["-rf", "node_modules"]);
        if (removeResult.status !== 0) {
          this.log("Failed to remove node_modules", "WARN");
        }
      }

      if (fs.existsSync("package-lock.json")) {
        const removeLockResult = await this.runCommand("rm", ["-f", "package-lock.json"]);
        if (removeLockResult.status !== 0) {
          this.log("Failed to remove package-lock.json", "WARN");
        }
      }

      // Reinstall dependencies
      const installResult = await this.runCommand("npm", ["install"]);
      if (installResult.status !== 0) {
        throw new Error(`Dependency reinstallation failed: ${installResult.stderr}`);
      }

      // Try health check again
      const healthCheck = await this.checkBuildHealth();
      if (!healthCheck.healthy) {
        throw new Error("Health check still failing after recovery");
      }

      this.log("Build recovery successful", "INFO");
      return { success: true };

    } catch (error) {
      this.log(`Build recovery failed: ${error.message}`, "ERROR");
      return { success: false, error: error.message };
    }
  }

  async checkBuildArtifacts() {
    try {
      this.log("Checking build artifacts...", "INFO");
      
      const artifacts = [];
      
      // Check for common build outputs
      const commonOutputs = [
        ".next",
        "out",
        "dist",
        "build",
        "public"
      ];

      for (const output of commonOutputs) {
        if (fs.existsSync(output)) {
          const stats = fs.statSync(output);
          artifacts.push({
            name: output,
            exists: true,
            size: stats.size,
            modified: stats.mtime
          });
        } else {
          artifacts.push({
            name: output,
            exists: false
          });
        }
      }

      // Check for specific build files
      const buildFiles = [
        "package-lock.json",
        "tsconfig.tsbuildinfo",
        ".next/build-manifest.json"
      ];

      for (const file of buildFiles) {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          artifacts.push({
            name: file,
            exists: true,
            size: stats.size,
            modified: stats.mtime
          });
        } else {
          artifacts.push({
            name: file,
            exists: false
          });
        }
      }

      const hasArtifacts = artifacts.some(a => a.exists);
      
      return {
        healthy: hasArtifacts,
        artifacts,
        hasArtifacts
      };

    } catch (error) {
      this.log(`Build artifacts check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async checkSystemResources() {
    try {
      this.log("Checking system resources...", "INFO");
      
      // Get memory usage
      const memoryUsage = process.memoryUsage();
      const memoryUsageMB = Math.round(memoryUsage.heapUsed / 1024 / 1024);
      
      // Get CPU usage (approximate)
      const startUsage = process.cpuUsage();
      await new Promise(resolve => setTimeout(resolve, 100));
      const endUsage = process.cpuUsage(startUsage);
      const cpuUsagePercent = Math.round((endUsage.user + endUsage.system) / 1000);
      
      const memoryHealthy = memoryUsage.heapUsed < this.config.healthThresholds.maxMemoryUsage;
      const cpuHealthy = cpuUsagePercent < this.config.healthThresholds.maxCpuUsage;
      
      return {
        healthy: memoryHealthy && cpuHealthy,
        memory: {
          used: memoryUsageMB,
          total: Math.round(memoryUsage.heapTotal / 1024 / 1024),
          healthy: memoryHealthy
        },
        cpu: {
          usage: cpuUsagePercent,
          healthy: cpuHealthy
        }
      };

    } catch (error) {
      this.log(`System resources check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async performComprehensiveCheck() {
    this.log("Starting comprehensive build check...", "INFO");
    
    const startTime = Date.now();
    const results = {};

    try {
      // Run all checks in parallel
      const [environment, health, validation, artifacts, resources] = await Promise.all([
        this.checkBuildEnvironment(),
        this.checkBuildHealth(),
        this.validateBuild(),
        this.checkBuildArtifacts(),
        this.checkSystemResources()
      ]);

      results.environment = environment;
      results.health = health;
      results.validation = validation;
      results.artifacts = artifacts;
      results.resources = resources;

      // Calculate overall health
      const allHealthy = [environment, health, validation, artifacts, resources].every(r => r.healthy);
      const checkTime = Date.now() - startTime;

      // Log results
      this.log("Comprehensive build check results:", "INFO");
      this.log(`  Environment: ${environment.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Health Check: ${health.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Validation: ${validation.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Artifacts: ${artifacts.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Resources: ${resources.healthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Overall: ${allHealthy ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Check time: ${checkTime}ms`, "INFO");

      return {
        timestamp: new Date().toISOString(),
        overall: allHealthy,
        checkTime,
        results
      };

    } catch (error) {
      this.log(`Comprehensive check error: ${error.message}`, "ERROR");
      return { timestamp: new Date().toISOString(), overall: false, error: error.message };
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logDir)
        .filter(file => file.startsWith('redundancy-build-monitor-') && file.endsWith('.log'))
        .map(file => ({
          name: file,
          path: path.join(this.config.logDir, file),
          stats: fs.statSync(path.join(this.config.logDir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      // Remove old log files
      if (logFiles.length > this.config.maxLogFiles) {
        const filesToRemove = logFiles.slice(this.config.maxLogFiles);
        for (const file of filesToRemove) {
          fs.unlinkSync(file.path);
          this.log(`Removed old log file: ${file.name}`, "INFO");
        }
      }

      // Check log file sizes
      for (const file of logFiles) {
        if (file.stats.size > this.config.maxLogSize) {
          const backupPath = file.path.replace('.log', `.${Date.now()}.log`);
          fs.renameSync(file.path, backupPath);
          this.log(`Rotated large log file: ${file.name} -> ${path.basename(backupPath)}`, "INFO");
        }
      }
    } catch (error) {
      this.log(`Log rotation error: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    this.log("Starting redundancy build monitor...", "INFO");
    
    // Initial comprehensive check
    this.performComprehensiveCheck();
    
    // Set up periodic monitoring
    setInterval(async () => {
      try {
        await this.performComprehensiveCheck();
        await this.rotateLogs();
      } catch (error) {
        this.log(`Periodic monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.buildCheckInterval);
    
    this.log(`Build monitor started with ${this.config.buildCheckInterval}ms interval`, "INFO");
  }

  getStatus() {
    return {
      system: "Redundancy Build Monitor",
      version: "1.0.0",
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      lastBuildTime: this.lastBuildTime,
      failureCount: this.failureCount,
      isBuilding: this.isBuilding,
      buildHistory: this.buildHistory.slice(-10), // Last 10 records
      timestamp: new Date().toISOString()
    };
  }
}

// Export the class
module.exports = RedundancyBuildMonitor;

// If run directly, start the monitor
if (require.main === module) {
  const buildMonitor = new RedundancyBuildMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    buildMonitor.log("Shutting down build monitor...", "INFO");
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    buildMonitor.log("Shutting down build monitor...", "INFO");
    process.exit(0);
  });
  
  buildMonitor.log("Build monitor started", "INFO");
}