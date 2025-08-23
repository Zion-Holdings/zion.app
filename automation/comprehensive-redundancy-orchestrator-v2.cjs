#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensiveRedundancyOrchestratorV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.log("INFO", "Comprehensive Redundancy Orchestrator v2.0 initialized");
  }
  
  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }
  
  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, "comprehensive-redundancy-orchestrator-v2.log");
    fs.appendFileSync(logFile, logMessage + "\n");
  }
  
  async start() {
    this.log("INFO", "Starting Comprehensive Redundancy Orchestrator v2.0...");
    
    try {
      // Start PM2 ecosystem
      this.startPM2Ecosystem();
      
      // Start monitoring
      this.startMonitoring();
      
      this.log("INFO", "Comprehensive Redundancy Orchestrator v2.0 started successfully");
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      this.log("ERROR", `Failed to start orchestrator: ${error.message}`);
      process.exit(1);
    }
  }
  
  startPM2Ecosystem() {
    this.log("INFO", "Starting PM2 ecosystem...");
    
    try {
      // Check if ecosystem file exists
      const ecosystemFile = "ecosystem.comprehensive-redundancy-v2.cjs";
      if (fs.existsSync(ecosystemFile)) {
        this.log("INFO", `Starting PM2 ecosystem: ${ecosystemFile}`);
        spawnSync("pm2", ["start", ecosystemFile], { stdio: "pipe" });
      } else {
        this.log("WARN", "Ecosystem file not found, using fallback");
        spawnSync("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs"], { stdio: "pipe" });
      }
      
      this.log("INFO", "PM2 ecosystem started");
      
    } catch (error) {
      this.log("ERROR", `Failed to start PM2 ecosystem: ${error.message}`);
    }
  }
  
  startMonitoring() {
    this.log("INFO", "Starting monitoring...");
    
    // Health check interval
    setInterval(() => {
      this.performHealthCheck();
    }, 60000); // Every minute
    
    this.log("INFO", "Monitoring started");
  }
  
  async performHealthCheck() {
    this.log("INFO", "Performing health check...");
    
    try {
      // Check PM2 health
      const pm2Status = spawnSync("pm2", ["ping"], { stdio: "pipe" });
      if (pm2Status.status === 0) {
        this.log("INFO", "✓ PM2 health check passed");
      } else {
        this.log("WARN", "⚠ PM2 health check warning");
      }
    } catch (error) {
      this.log("ERROR", `Health check error: ${error.message}`);
    }
  }
  
  async stop() {
    this.log("INFO", "Stopping Comprehensive Redundancy Orchestrator v2.0...");
    
    // Stop PM2 processes
    try {
      spawnSync("pm2", ["stop", "all"], { stdio: "pipe" });
      spawnSync("pm2", ["delete", "all"], { stdio: "pipe" });
    } catch (error) {
      this.log("ERROR", `Error stopping PM2 processes: ${error.message}`);
    }
    
    this.log("INFO", "Comprehensive Redundancy Orchestrator v2.0 stopped");
    process.exit(0);
  }
  
  getStatus() {
    return {
      uptime: Date.now() - this.startTime,
      status: "running"
    };
  }
  
  keepAlive() {
    // Keep the process running
    process.on("SIGINT", () => this.stop());
    process.on("SIGTERM", () => this.stop());
    
    // Keep alive
    setInterval(() => {
      // Heartbeat
    }, 60000);
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ComprehensiveRedundancyOrchestratorV2();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.start();
      break;
    case "stop":
      orchestrator.stop();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-orchestrator-v2.cjs {start|stop|status}");
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancyOrchestratorV2;