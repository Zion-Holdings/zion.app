#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class EnhancedPM2Redundancy {
  constructor() {
    this.config = {
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      backupDir: "automation/backups/pm2",
      healthCheckInterval: 30000,
      maxRestartAttempts: 5,
      restartDelay: 5000,
      autoRecovery: true,
      processMonitoring: true,
      logRotation: true,
      maxLogSize: 10 * 1024 * 1024, // 10MB
      maxLogFiles: 30
    };
    
    this.ensureDirectories();
    this.initializeMonitoring();
  }

  ensureDirectories() {
    // Ensure backup directory exists
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
    
    // Ensure logs directory exists
    const logsDir = "automation/logs";
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join("automation/logs", `enhanced-pm2-redundancy-${new Date().toISOString().split('T')[0]}.log`);
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

  async backupEcosystemFiles() {
    this.log("💾 Creating backup of ecosystem files...");
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    for (const ecosystemFile of this.config.ecosystemFiles) {
      if (fs.existsSync(ecosystemFile)) {
        try {
          const backupPath = path.join(this.config.backupDir, `${ecosystemFile}.${timestamp}.backup`);
          fs.copyFileSync(ecosystemFile, backupPath);
          this.log(`✅ Backed up ${ecosystemFile} to ${backupPath}`);
          
          // Clean up old backups (keep last 10)
          await this.cleanupOldBackups(ecosystemFile);
        } catch (error) {
          this.log(`❌ Failed to backup ${ecosystemFile}: ${error.message}`, "ERROR");
        }
      }
    }
  }

  async cleanupOldBackups(ecosystemFile) {
    try {
      const files = fs.readdirSync(this.config.backupDir)
        .filter(file => file.startsWith(ecosystemFile) && file.endsWith('.backup'))
        .sort()
        .reverse();
      
      if (files.length > 10) {
        const filesToDelete = files.slice(10);
        for (const file of filesToDelete) {
          fs.unlinkSync(path.join(this.config.backupDir, file));
          this.log(`🗑️ Cleaned up old backup: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not cleanup old backups: ${error.message}`, "WARN");
    }
  }

  async validateEcosystemFile(filePath) {
    try {
      this.log(`🔍 Validating ecosystem file: ${filePath}`);
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        this.log(`❌ Ecosystem file ${filePath} not found`, "ERROR");
        return false;
      }
      
      // Check file syntax
      try {
        const ecosystem = require(path.resolve(filePath));
        if (!ecosystem.apps || !Array.isArray(ecosystem.apps)) {
          this.log(`❌ Ecosystem file ${filePath} has invalid structure`, "ERROR");
          return false;
        }
        
        this.log(`✅ Ecosystem file ${filePath} is valid with ${ecosystem.apps.length} apps`);
        return true;
      } catch (error) {
        this.log(`❌ Ecosystem file ${filePath} has syntax errors: ${error.message}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Validation failed for ${filePath}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPM2Daemon() {
    this.log("🔍 Checking PM2 daemon status...");
    
    try {
      const pingResult = await this.runCommand("pm2", ["ping"]);
      
      if (pingResult.status === 0) {
        this.log("✅ PM2 daemon is running");
        return true;
      } else {
        this.log("❌ PM2 daemon is not responding", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ PM2 daemon check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status === 0) {
        const output = statusResult.stdout;
        const processes = [];
        
        // Parse PM2 status output to extract process names
        const lines = output.split('\n');
        for (const line of lines) {
          if (line.includes('│') && !line.includes('id') && !line.includes('─')) {
            const parts = line.split('│').map(part => part.trim()).filter(part => part);
            if (parts.length >= 2) {
              processes.push({
                id: parts[0],
                name: parts[1],
                status: parts[2] || 'unknown'
              });
            }
          }
        }
        
        return processes;
      } else {
        this.log("❌ Could not get PM2 process status", "ERROR");
        return [];
      }
    } catch (error) {
      this.log(`❌ Failed to get PM2 processes: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkProcessHealth(processName) {
    try {
      this.log(`🔍 Checking process health: ${processName}`);
      
      const showResult = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      
      if (showResult.status === 0) {
        const output = showResult.stdout;
        
        // Check if process is running
        if (output.includes('status: online')) {
          this.log(`✅ Process ${processName} is online`);
          
          // Check restart count
          const restartMatch = output.match(/restart time\s*:\s*(\d+)/);
          if (restartMatch) {
            const restartCount = parseInt(restartMatch[1]);
            if (restartCount > 10) {
              this.log(`⚠️ Process ${processName} has restarted ${restartCount} times`, "WARN");
            }
          }
          
          // Check memory usage
          const memoryMatch = output.match(/memory\s*:\s*([\d.]+)\s*MB/);
          if (memoryMatch) {
            const memoryUsage = parseFloat(memoryMatch[1]);
            if (memoryUsage > 500) { // 500MB threshold
              this.log(`⚠️ Process ${processName} using high memory: ${memoryUsage}MB`, "WARN");
            }
          }
          
          return true;
        } else if (output.includes('status: errored')) {
          this.log(`❌ Process ${processName} has errors`, "ERROR");
          return false;
        } else if (output.includes('status: stopped')) {
          this.log(`⚠️ Process ${processName} is stopped`, "WARN");
          return false;
        } else {
          this.log(`⚠️ Process ${processName} has unknown status`, "WARN");
          return false;
        }
      } else {
        this.log(`❌ Process ${processName} not found`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Health check failed for ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`🔄 Restarting process: ${processName}`);
      
      const restartResult = await this.runCommand("pm2", ["restart", processName]);
      
      if (restartResult.status === 0) {
        this.log(`✅ Successfully restarted ${processName}`);
        return true;
      } else {
        this.log(`❌ Failed to restart ${processName}: ${restartResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Restart failed for ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async reloadAllProcesses() {
    try {
      this.log("🔄 Reloading all PM2 processes...");
      
      const reloadResult = await this.runCommand("pm2", ["reload", "all"]);
      
      if (reloadResult.status === 0) {
        this.log("✅ Successfully reloaded all processes");
        return true;
      } else {
        this.log(`❌ Failed to reload all processes: ${reloadResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Reload all failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startEcosystemFile(ecosystemFile) {
    try {
      this.log(`🚀 Starting ecosystem file: ${ecosystemFile}`);
      
      const startResult = await this.runCommand("pm2", ["start", ecosystemFile]);
      
      if (startResult.status === 0) {
        this.log(`✅ Successfully started ${ecosystemFile}`);
        return true;
      } else {
        this.log(`❌ Failed to start ${ecosystemFile}: ${startResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Start failed for ${ecosystemFile}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async savePM2Configuration() {
    try {
      this.log("💾 Saving PM2 configuration...");
      
      const saveResult = await this.runCommand("pm2", ["save"]);
      
      if (saveResult.status === 0) {
        this.log("✅ PM2 configuration saved successfully");
        return true;
      } else {
        this.log(`❌ Failed to save PM2 configuration: ${saveResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Save configuration failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPM2Logs() {
    try {
      this.log("📋 Checking PM2 logs for errors...");
      
      const logResult = await this.runCommand("pm2", ["logs", "--lines", "100", "--nostream"]);
      
      if (logResult.status === 0) {
        const logs = logResult.stdout;
        let hasErrors = false;
        
        // Check for various error patterns
        const errorPatterns = [
          /ERROR/,
          /FATAL/,
          /Exception/,
          /Error:/,
          /failed/,
          /timeout/,
          /crashed/
        ];
        
        for (const pattern of errorPatterns) {
          if (pattern.test(logs)) {
            hasErrors = true;
            break;
          }
        }
        
        if (hasErrors) {
          this.log("⚠️ PM2 logs contain errors, triggering recovery", "WARN");
          await this.reloadAllProcesses();
        } else {
          this.log("✅ PM2 logs look clean");
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not check PM2 logs: ${error.message}`, "WARN");
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive PM2 health check...");
    
    const results = {
      daemon: false,
      ecosystemFiles: [],
      processes: [],
      timestamp: new Date().toISOString()
    };
    
    try {
      // Check PM2 daemon
      results.daemon = await this.checkPM2Daemon();
      
      // Validate ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        const isValid = await this.validateEcosystemFile(ecosystemFile);
        results.ecosystemFiles.push({
          file: ecosystemFile,
          valid: isValid
        });
      }
      
      // Check process health
      const processes = await this.getPM2Processes();
      for (const process of processes) {
        const isHealthy = await this.checkProcessHealth(process.name);
        results.processes.push({
          name: process.name,
          id: process.id,
          status: process.status,
          healthy: isHealthy
        });
      }
      
      // Log results
      this.log("📊 PM2 Health Check Results:");
      this.log(`  Daemon: ${results.daemon ? '✅' : '❌'}`);
      this.log(`  Ecosystem Files: ${results.ecosystemFiles.filter(f => f.valid).length}/${results.ecosystemFiles.length} valid`);
      this.log(`  Processes: ${results.processes.filter(p => p.healthy).length}/${results.processes.length} healthy`);
      
      // Save results
      this.saveHealthCheckResults(results);
      
      // Trigger recovery if needed
      if (!results.daemon || results.ecosystemFiles.some(f => !f.valid) || results.processes.some(p => !p.healthy)) {
        await this.triggerRecoveryActions(results);
      }
      
      return results;
    } catch (error) {
      this.log(`❌ Comprehensive health check failed: ${error.message}`, "ERROR");
      return results;
    }
  }

  async triggerRecoveryActions(results) {
    this.log("🔄 Triggering PM2 recovery actions...");
    
    try {
      // Backup ecosystem files before recovery
      await this.backupEcosystemFiles();
      
      // If daemon is down, try to restart
      if (!results.daemon) {
        this.log("🔄 PM2 daemon is down, attempting restart...");
        await this.runCommand("pm2", ["kill"]);
        await this.startEcosystemFile("ecosystem.redundancy.cjs");
      }
      
      // Restart unhealthy processes
      for (const process of results.processes) {
        if (!process.healthy) {
          this.log(`🔄 Restarting unhealthy process: ${process.name}`);
          await this.restartProcess(process.name);
        }
      }
      
      // Save configuration after recovery
      await this.savePM2Configuration();
      
      this.log("✅ Recovery actions completed");
    } catch (error) {
      this.log(`❌ Recovery actions failed: ${error.message}`, "ERROR");
    }
  }

  saveHealthCheckResults(results) {
    try {
      const resultsFile = path.join("automation/logs", "pm2-health-check-results.json");
      const existingResults = fs.existsSync(resultsFile) ? 
        JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : [];
      
      existingResults.push(results);
      
      // Keep only last 100 results
      if (existingResults.length > 100) {
        existingResults.splice(0, existingResults.length - 100);
      }
      
      fs.writeFileSync(resultsFile, JSON.stringify(existingResults, null, 2));
    } catch (error) {
      this.log(`⚠️ Could not save health check results: ${error.message}`, "WARN");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing enhanced PM2 monitoring...");
    
    // Initial health check
    this.performComprehensiveHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performComprehensiveHealthCheck();
    }, this.config.healthCheckInterval);
    
    // Set up log checking
    setInterval(() => {
      this.checkPM2Logs();
    }, 60000); // Every minute
    
    this.log("✅ Enhanced PM2 monitoring initialized");
  }

  async gracefulShutdown() {
    this.log("🔄 Shutting down enhanced PM2 redundancy system...");
    
    // Save PM2 configuration
    await this.savePM2Configuration();
    
    this.log("✅ Enhanced PM2 redundancy system shut down gracefully");
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  if (global.enhancedPM2Redundancy) {
    global.enhancedPM2Redundancy.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

process.on('SIGTERM', () => {
  if (global.enhancedPM2Redundancy) {
    global.enhancedPM2Redundancy.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

// Start the system
if (require.main === module) {
  global.enhancedPM2Redundancy = new EnhancedPM2Redundancy();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = EnhancedPM2Redundancy;