#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
const cron = require("node-cron");

class ComprehensiveRedundancyAutomation {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-redundancy.log");
    this.configFile = path.join(this.workspace, "automation/redundancy-config.json");
    this.ensureLogDir();
    
    this.config = this.loadConfig();
    this.systems = new Map();
    this.monitoring = false;
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 5;
    this.recoveryInProgress = new Set();
    
    // Initialize all redundancy systems
    this.initializeSystems();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        const config = JSON.parse(fs.readFileSync(this.configFile, "utf8"));
        this.log("Loaded configuration from file");
        
        // Transform existing config to our expected format
        return this.transformConfig(config);
      }
    } catch (error) {
      this.log(`Failed to load config: ${error.message}`, "ERROR");
    }

    this.log("Using default configuration");
    
    // Default configuration
    return {
      orchestrationInterval: 30000, // 30 seconds
      healthCheckInterval: 120000, // 2 minutes
      emergencyThreshold: 2,
      autoRecovery: true,
      notificationLevel: "WARN",
      systems: {
        pm2: {
          enabled: true,
          priority: "CRITICAL",
          checkInterval: 15000,
          processes: ["zion-auto-sync", "zion-auto-sync-cron", "redundancy-automation-system"],
          ecosystemFiles: ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"]
        },
        githubActions: {
          enabled: true,
          priority: "HIGH",
          checkInterval: 30000,
          workflows: ["marketing-sync", "sync-health"],
          backupWorkflows: ["marketing-sync-backup", "sync-health-backup"]
        },
        netlifyFunctions: {
          enabled: true,
          priority: "MEDIUM",
          checkInterval: 60000,
          functionsDir: "netlify/functions",
          manifestFile: "netlify/functions/functions-manifest.json"
        },
        buildSystem: {
          enabled: true,
          priority: "CRITICAL",
          checkInterval: 300000, // 5 minutes
          buildCommand: "npm run build",
          healthCheckCommand: "npm run build:health-check"
        },
        gitSync: {
          enabled: true,
          priority: "HIGH",
          checkInterval: 45000,
          syncStrategy: "pull",
          autoCommit: true
        }
      }
    };
  }

  transformConfig(existingConfig) {
    // Transform existing config to our expected format
    return {
      orchestrationInterval: 30000,
      healthCheckInterval: 120000,
      emergencyThreshold: 2,
      autoRecovery: true,
      notificationLevel: "WARN",
      systems: {
        pm2: {
          enabled: existingConfig.pm2?.enabled || true,
          priority: "CRITICAL",
          checkInterval: existingConfig.pm2?.checkInterval || 15000,
          processes: existingConfig.pm2?.processes || ["zion-auto-sync", "zion-auto-sync-cron"],
          ecosystemFiles: ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"]
        },
        githubActions: {
          enabled: existingConfig.githubActions?.enabled || true,
          priority: "HIGH",
          checkInterval: existingConfig.githubActions?.checkInterval || 30000,
          workflows: existingConfig.githubActions?.workflows || ["marketing-sync", "sync-health"],
          backupWorkflows: ["marketing-sync-backup", "sync-health-backup"]
        },
        netlifyFunctions: {
          enabled: existingConfig.netlify?.enabled || true,
          priority: "MEDIUM",
          checkInterval: existingConfig.netlify?.checkInterval || 60000,
          functionsDir: "netlify/functions",
          manifestFile: "netlify/functions/functions-manifest.json"
        },
        buildSystem: {
          enabled: existingConfig.build?.enabled || true,
          priority: "CRITICAL",
          checkInterval: existingConfig.build?.checkInterval || 300000,
          buildCommand: "npm run build",
          healthCheckCommand: "npm run build:health-check"
        },
        gitSync: {
          enabled: existingConfig.git?.enabled || true,
          priority: "HIGH",
          checkInterval: existingConfig.git?.checkInterval || 45000,
          syncStrategy: existingConfig.git?.syncStrategy || "pull",
          autoCommit: existingConfig.git?.autoSync || true
        }
      }
    };
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [COMPREHENSIVE-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  initializeSystems() {
    this.log("Initializing comprehensive redundancy automation system...");
    
    // Initialize PM2 redundancy
    if (this.config.systems.pm2.enabled) {
      this.systems.set("pm2", {
        name: "PM2 Process Management",
        priority: this.config.systems.pm2.priority,
        status: "initializing",
        lastCheck: null,
        health: 100,
        processes: new Map(),
        ecosystemFiles: this.config.systems.pm2.ecosystemFiles
      });
    }

    // Initialize GitHub Actions redundancy
    if (this.config.systems.githubActions.enabled) {
      this.systems.set("githubActions", {
        name: "GitHub Actions Workflows",
        priority: this.config.systems.githubActions.priority,
        status: "initializing",
        lastCheck: null,
        health: 100,
        workflows: new Map(),
        backupWorkflows: this.config.systems.githubActions.backupWorkflows
      });
    }

    // Initialize Netlify Functions redundancy
    if (this.config.systems.netlifyFunctions.enabled) {
      this.systems.set("netlifyFunctions", {
        name: "Netlify Functions",
        priority: this.config.systems.netlifyFunctions.priority,
        status: "initializing",
        lastCheck: null,
        health: 100,
        functions: new Map(),
        manifestFile: this.config.systems.netlifyFunctions.manifestFile
      });
    }

    // Initialize Build System redundancy
    if (this.config.systems.buildSystem.enabled) {
      this.systems.set("buildSystem", {
        name: "Build System",
        priority: this.config.systems.buildSystem.priority,
        status: "initializing",
        lastCheck: null,
        health: 100,
        lastBuildTime: null,
        buildSuccess: true
      });
    }

    // Initialize Git Sync redundancy
    if (this.config.systems.gitSync.enabled) {
      this.systems.set("gitSync", {
        name: "Git Synchronization",
        priority: this.config.systems.gitSync.priority,
        status: "initializing",
        lastCheck: null,
        health: 100,
        lastSync: null,
        syncStatus: "unknown"
      });
    }

    this.log("✅ All redundancy systems initialized");
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }

    this.log("Starting comprehensive redundancy monitoring...");
    this.monitoring = true;

    // Start orchestration loop
    this.orchestrationInterval = setInterval(() => {
      this.orchestrateSystems();
    }, this.config.orchestrationInterval);

    // Start health check loop
    this.healthCheckInterval = setInterval(() => {
      this.performHealthChecks();
    }, this.config.healthCheckInterval);

    // Start individual system monitoring
    await this.startSystemMonitoring();

    this.log("✅ Comprehensive redundancy monitoring started");
  }

  async startSystemMonitoring() {
    for (const [systemName, system] of this.systems) {
      if (system.status === "initializing") {
        await this.startSystem(systemName);
        // Wait a moment between system starts to avoid overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  async startSystem(systemName) {
    const system = this.systems.get(systemName);
    if (!system) return;

    try {
      this.log(`Starting ${system.name}...`);
      
      switch (systemName) {
        case "pm2":
          await this.startPM2Monitoring(system);
          break;
        case "githubActions":
          await this.startGitHubActionsMonitoring(system);
          break;
        case "netlifyFunctions":
          await this.startNetlifyFunctionsMonitoring(system);
          break;
        case "buildSystem":
          await this.startBuildSystemMonitoring(system);
          break;
        case "gitSync":
          await this.startGitSyncMonitoring(system);
          break;
      }

      system.status = "running";
      system.lastCheck = new Date();
      this.log(`✅ ${system.name} started successfully`);
    } catch (error) {
      this.log(`❌ Failed to start ${system.name}: ${error.message}`, "ERROR");
      system.status = "failed";
      system.lastCheck = new Date();
      
      if (this.config.autoRecovery) {
        this.scheduleRecovery(systemName);
      }
    }
  }

  async startPM2Monitoring(system) {
    // Check PM2 processes
    const processes = await this.getPM2Processes();
    system.processes = processes;
    
    // Schedule regular PM2 health checks
    this.healthChecks.set("pm2", setInterval(async () => {
      await this.checkPM2Health(system);
    }, this.config.systems.pm2.checkInterval));
  }

  async startGitHubActionsMonitoring(system) {
    // Check GitHub Actions workflows
    const workflows = await this.getGitHubActionsWorkflows();
    system.workflows = workflows;
    
    // Schedule regular GitHub Actions health checks
    this.healthChecks.set("githubActions", setInterval(async () => {
      await this.checkGitHubActionsHealth(system);
    }, this.config.systems.githubActions.checkInterval));
  }

  async startNetlifyFunctionsMonitoring(system) {
    // Check Netlify functions
    const functions = await this.getNetlifyFunctions();
    system.functions = functions;
    
    // Schedule regular Netlify functions health checks
    this.healthChecks.set("netlifyFunctions", setInterval(async () => {
      await this.checkNetlifyFunctionsHealth(system);
    }, this.config.systems.netlifyFunctions.checkInterval));
  }

  async startBuildSystemMonitoring(system) {
    // Schedule regular build system health checks
    this.healthChecks.set("buildSystem", setInterval(async () => {
      await this.checkBuildSystemHealth(system);
    }, this.config.systems.buildSystem.checkInterval));
  }

  async startGitSyncMonitoring(system) {
    // Schedule regular git sync health checks
    this.healthChecks.set("gitSync", setInterval(async () => {
      await this.checkGitSyncHealth(system);
    }, this.config.systems.gitSync.checkInterval));
  }

  async getPM2Processes() {
    try {
      const output = execSync("pm2 jlist", { encoding: "utf8" });
      const processes = JSON.parse(output);
      const processMap = new Map();
      
      for (const process of processes) {
        processMap.set(process.name, {
          status: process.pm2_env.status,
          pm_id: process.pm_id,
          pm2_env: process.pm2_env,
          monit: process.monit
        });
      }
      
      return processMap;
    } catch (error) {
      this.log(`Failed to get PM2 processes: ${error.message}`, "ERROR");
      return new Map();
    }
  }

  async getGitHubActionsWorkflows() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflowMap = new Map();
      
      if (fs.existsSync(workflowsDir)) {
        const files = fs.readdirSync(workflowsDir);
        for (const file of files) {
          if (file.endsWith(".yml") || file.endsWith(".yaml")) {
            const workflowName = file.replace(/\.(yml|yaml)$/, "");
            const content = fs.readFileSync(path.join(workflowsDir, file), "utf8");
            
            workflowMap.set(workflowName, {
              file: file,
              content: content,
              lastModified: fs.statSync(path.join(workflowsDir, file)).mtime,
              status: "active"
            });
          }
        }
      }
      
      return workflowMap;
    } catch (error) {
      this.log(`Failed to get GitHub Actions workflows: ${error.message}`, "ERROR");
      return new Map();
    }
  }

  async getNetlifyFunctions() {
    try {
      const functionsDir = path.join(this.workspace, this.config.systems.netlifyFunctions.functionsDir);
      const functionMap = new Map();
      
      if (fs.existsSync(functionsDir)) {
        const files = fs.readdirSync(functionsDir);
        for (const file of files) {
          if (file.endsWith(".js") || file.endsWith(".ts")) {
            const functionName = file.replace(/\.(js|ts)$/, "");
            const filePath = path.join(functionsDir, file);
            
            functionMap.set(functionName, {
              file: file,
              path: filePath,
              lastModified: fs.statSync(filePath).mtime,
              status: "active"
            });
          }
        }
      }
      
      return functionMap;
    } catch (error) {
      this.log(`Failed to get Netlify functions: ${error.message}`, "ERROR");
      return new Map();
    }
  }

  async checkPM2Health(system) {
    try {
      const processes = await this.getPM2Processes();
      system.processes = processes;
      
      let healthyProcesses = 0;
      let totalProcesses = 0;
      
      for (const [name, process] of processes) {
        totalProcesses++;
        if (process.status === "online") {
          healthyProcesses++;
        }
      }
      
      system.health = totalProcesses > 0 ? (healthyProcesses / totalProcesses) * 100 : 0;
      system.lastCheck = new Date();
      
      if (system.health < 80 && system.status === "running") {
        this.log(`⚠️ PM2 health degraded: ${system.health.toFixed(1)}%`, "WARN");
        if (this.config.autoRecovery && !this.recoveryInProgress.has("pm2")) {
          await this.recoverPM2(system);
        } else if (this.recoveryInProgress.has("pm2")) {
          this.log("PM2 recovery already in progress, skipping...");
        }
      }
    } catch (error) {
      this.log(`Failed to check PM2 health: ${error.message}`, "ERROR");
      system.health = 0;
    }
  }

  async checkGitHubActionsHealth(system) {
    try {
      const workflows = await this.getGitHubActionsWorkflows();
      system.workflows = workflows;
      
      let healthyWorkflows = 0;
      let totalWorkflows = 0;
      
      for (const [name, workflow] of workflows) {
        totalWorkflows++;
        if (workflow.status === "active") {
          healthyWorkflows++;
        }
      }
      
      system.health = totalWorkflows > 0 ? (healthyWorkflows / totalWorkflows) * 100 : 0;
      system.lastCheck = new Date();
      
      if (system.health < 80) {
        this.log(`⚠️ GitHub Actions health degraded: ${system.health.toFixed(1)}%`, "WARN");
        if (this.config.autoRecovery) {
          await this.recoverGitHubActions(system);
        }
      }
    } catch (error) {
      this.log(`Failed to check GitHub Actions health: ${error.message}`, "ERROR");
      system.health = 0;
    }
  }

  async checkNetlifyFunctionsHealth(system) {
    try {
      const functions = await this.getNetlifyFunctions();
      system.functions = functions;
      
      let healthyFunctions = 0;
      let totalFunctions = 0;
      
      for (const [name, func] of functions) {
        totalFunctions++;
        if (func.status === "active") {
          healthyFunctions++;
        }
      }
      
      system.health = totalFunctions > 0 ? (healthyFunctions / totalFunctions) * 100 : 0;
      system.lastCheck = new Date();
      
      if (system.health < 80 && system.status === "running") {
        this.log(`⚠️ Netlify Functions health degraded: ${system.health.toFixed(1)}%`, "WARN");
        if (this.config.autoRecovery && !this.recoveryInProgress.has("netlifyFunctions")) {
          await this.recoverNetlifyFunctions(system);
        } else if (this.recoveryInProgress.has("netlifyFunctions")) {
          this.log("Netlify Functions recovery already in progress, skipping...");
        }
      }
    } catch (error) {
      this.log(`Failed to check Netlify Functions health: ${error.message}`, "ERROR");
      system.health = 0;
    }
  }

  async checkBuildSystemHealth(system) {
    try {
      // Check if build system is healthy
      const buildHealth = await this.checkBuildHealth();
      system.health = buildHealth;
      system.lastCheck = new Date();
      
      if (system.health < 80) {
        this.log(`⚠️ Build system health degraded: ${system.health.toFixed(1)}%`, "WARN");
        if (this.config.autoRecovery) {
          await this.recoverBuildSystem(system);
        }
      }
    } catch (error) {
      this.log(`Failed to check build system health: ${error.message}`, "ERROR");
      system.health = 0;
    }
  }

  async checkGitSyncHealth(system) {
    try {
      // Check git sync status
      const gitStatus = await this.checkGitStatus();
      system.syncStatus = gitStatus.status;
      system.health = gitStatus.health;
      system.lastCheck = new Date();
      
      if (system.health < 80) {
        this.log(`⚠️ Git sync health degraded: ${system.health.toFixed(1)}%`, "WARN");
        if (this.config.autoRecovery) {
          await this.recoverGitSync(system);
        }
      }
    } catch (error) {
      this.log(`Failed to check git sync health: ${error.message}`, "ERROR");
      system.health = 0;
    }
  }

  async checkBuildHealth() {
    try {
      // Run a quick build health check
      execSync(this.config.systems.buildSystem.healthCheckCommand, { 
        cwd: this.workspace,
        stdio: "pipe",
        timeout: 30000 
      });
      return 100; // Build health check passed
    } catch (error) {
      this.log(`Build health check failed: ${error.message}`, "WARN");
      return 50; // Build health check failed
    }
  }

  async checkGitStatus() {
    try {
      // Check git status
      const status = execSync("git status --porcelain", { 
        cwd: this.workspace,
        encoding: "utf8" 
      });
      
      const ahead = execSync("git rev-list --left-right --count HEAD...origin/main", { 
        cwd: this.workspace,
        encoding: "utf8" 
      }).split("\t")[0];
      
      if (status.trim() === "" && ahead === "0") {
        return { status: "clean", health: 100 };
      } else if (status.trim() !== "" && ahead === "0") {
        return { status: "uncommitted", health: 75 };
      } else if (ahead !== "0") {
        return { status: "ahead", health: 60 };
      } else {
        return { status: "unknown", health: 50 };
      }
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`, "ERROR");
      return { status: "error", health: 0 };
    }
  }

  async recoverPM2(system) {
    if (this.recoveryInProgress.has("pm2")) {
      this.log("PM2 recovery already in progress, skipping...");
      return;
    }
    
    this.recoveryInProgress.add("pm2");
    
    try {
      this.log("Attempting PM2 recovery...");
      
      // Restart PM2 processes
      execSync("pm2 restart all", { cwd: this.workspace, stdio: "pipe" });
      
      // Wait a moment for processes to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check health again
      await this.checkPM2Health(system);
      
      if (system.health >= 80) {
        this.log("✅ PM2 recovery successful");
      } else {
        this.log("❌ PM2 recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, "ERROR");
    } finally {
      this.recoveryInProgress.delete("pm2");
    }
  }

  async recoverGitHubActions(system) {
    try {
      this.log("Attempting GitHub Actions recovery...");
      
      // Trigger backup workflows if main workflows are failing
      for (const backupWorkflow of system.backupWorkflows) {
        try {
          execSync(`gh workflow run ${backupWorkflow}`, { 
            cwd: this.workspace, 
            stdio: "pipe" 
          });
          this.log(`Triggered backup workflow: ${backupWorkflow}`);
        } catch (error) {
          this.log(`Failed to trigger backup workflow ${backupWorkflow}: ${error.message}`, "WARN");
        }
      }
      
      // Check health again
      await this.checkGitHubActionsHealth(system);
      
      if (system.health >= 80) {
        this.log("✅ GitHub Actions recovery successful");
      } else {
        this.log("❌ GitHub Actions recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`GitHub Actions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctions(system) {
    if (this.recoveryInProgress.has("netlifyFunctions")) {
      this.log("Netlify Functions recovery already in progress, skipping...");
      return;
    }
    
    this.recoveryInProgress.add("netlifyFunctions");
    
    try {
      this.log("Attempting Netlify Functions recovery...");
      
      // Regenerate functions manifest
      try {
        execSync("npm run netlify:manifest", { 
          cwd: this.workspace, 
          stdio: "pipe" 
        });
        this.log("Regenerated Netlify functions manifest");
      } catch (error) {
        this.log(`Failed to regenerate manifest: ${error.message}`, "WARN");
      }
      
      // Wait a moment for the manifest to be processed
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check health again without triggering recovery
      try {
        const functions = await this.getNetlifyFunctions();
        system.functions = functions;
        
        let healthyFunctions = 0;
        let totalFunctions = 0;
        
        for (const [name, func] of functions) {
          totalFunctions++;
          if (func.status === "active") {
            healthyFunctions++;
          }
        }
        
        system.health = totalFunctions > 0 ? (healthyFunctions / totalFunctions) * 100 : 0;
        system.lastCheck = new Date();
        
        if (system.health >= 80) {
          this.log("✅ Netlify Functions recovery successful");
        } else {
          this.log("❌ Netlify Functions recovery failed", "ERROR");
        }
      } catch (error) {
        this.log(`Health check after recovery failed: ${error.message}`, "ERROR");
        system.health = 0;
      }
    } catch (error) {
      this.log(`Netlify Functions recovery failed: ${error.message}`, "ERROR");
    } finally {
      this.recoveryInProgress.delete("netlifyFunctions");
    }
  }

  async recoverBuildSystem(system) {
    try {
      this.log("Attempting build system recovery...");
      
      // Try to fix build issues
      try {
        execSync("npm run fix:all", { 
          cwd: this.workspace, 
          stdio: "pipe",
          timeout: 120000 
        });
        this.log("Applied automatic fixes");
      } catch (error) {
        this.log(`Automatic fixes failed: ${error.message}`, "WARN");
      }
      
      // Check health again
      await this.checkBuildSystemHealth(system);
      
      if (system.health >= 80) {
        this.log("✅ Build system recovery successful");
      } else {
        this.log("❌ Build system recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`Build system recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverGitSync(system) {
    try {
      this.log("Attempting git sync recovery...");
      
      // Try to sync with remote
      try {
        execSync("git pull origin main", { 
          cwd: this.workspace, 
          stdio: "pipe" 
        });
        this.log("Pulled latest changes from remote");
      } catch (error) {
        this.log(`Git pull failed: ${error.message}`, "WARN");
      }
      
      // Check health again
      await this.checkGitSyncHealth(system);
      
      if (system.health >= 80) {
        this.log("✅ Git sync recovery successful");
      } else {
        this.log("❌ Git sync recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`Git sync recovery failed: ${error.message}`, "ERROR");
    }
  }

  scheduleRecovery(systemName) {
    const attempts = this.recoveryAttempts.get(systemName) || 0;
    
    if (attempts < this.maxRecoveryAttempts) {
      this.recoveryAttempts.set(systemName, attempts + 1);
      
      const delay = Math.min(30000 * Math.pow(2, attempts), 300000); // Exponential backoff, max 5 minutes
      
      setTimeout(async () => {
        this.log(`Attempting recovery for ${systemName} (attempt ${attempts + 1})`);
        await this.startSystem(systemName);
      }, delay);
    } else {
      this.log(`Max recovery attempts reached for ${systemName}`, "ERROR");
    }
  }

  async orchestrateSystems() {
    try {
      let criticalIssues = 0;
      let totalHealth = 0;
      let systemCount = 0;
      
      for (const [systemName, system] of this.systems) {
        if (system.status === "running") {
          totalHealth += system.health;
          systemCount++;
          
          if (system.health < 50 && system.priority === "CRITICAL") {
            criticalIssues++;
          }
        }
      }
      
      const overallHealth = systemCount > 0 ? totalHealth / systemCount : 0;
      
      // Check for emergency conditions
      if (criticalIssues >= this.config.emergencyThreshold) {
        this.log(`🚨 EMERGENCY: ${criticalIssues} critical systems failing!`, "ERROR");
        await this.activateEmergencyMode();
      } else if (overallHealth < 70) {
        this.log(`⚠️ Overall system health degraded: ${overallHealth.toFixed(1)}%`, "WARN");
      } else {
        this.log(`✅ Overall system health: ${overallHealth.toFixed(1)}%`);
      }
    } catch (error) {
      this.log(`Orchestration failed: ${error.message}`, "ERROR");
    }
  }

  async activateEmergencyMode() {
    this.log("🚨 Activating emergency mode...");
    
    // Stop all non-critical processes
    try {
      execSync("pm2 stop all", { cwd: this.workspace, stdio: "pipe" });
      this.log("Stopped all PM2 processes");
    } catch (error) {
      this.log(`Failed to stop PM2 processes: ${error.message}`, "WARN");
    }
    
    // Restart critical systems only
    for (const [systemName, system] of this.systems) {
      if (system.priority === "CRITICAL") {
        this.log(`Restarting critical system: ${system.name}`);
        await this.startSystem(systemName);
      }
    }
    
    this.log("Emergency mode activated");
  }

  async performHealthChecks() {
    this.log("Performing comprehensive health checks...");
    
    for (const [systemName, system] of this.systems) {
      if (system.status === "running") {
        try {
          switch (systemName) {
            case "pm2":
              await this.checkPM2Health(system);
              break;
            case "githubActions":
              await this.checkGitHubActionsHealth(system);
              break;
            case "netlifyFunctions":
              await this.checkNetlifyFunctionsHealth(system);
              break;
            case "buildSystem":
              await this.checkBuildSystemHealth(system);
              break;
            case "gitSync":
              await this.checkGitSyncHealth(system);
              break;
          }
        } catch (error) {
          this.log(`Health check failed for ${systemName}: ${error.message}`, "ERROR");
        }
      }
    }
    
    this.log("Health checks completed");
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      overall: {
        monitoring: this.monitoring,
        systems: this.systems.size,
        running: 0,
        failed: 0,
        health: 0
      },
      systems: {}
    };
    
    let totalHealth = 0;
    let runningCount = 0;
    let failedCount = 0;
    
    for (const [systemName, system] of this.systems) {
      status.systems[systemName] = {
        name: system.name,
        status: system.status,
        priority: system.priority,
        health: system.health,
        lastCheck: system.lastCheck,
        details: this.getSystemDetails(systemName, system)
      };
      
      if (system.status === "running") {
        runningCount++;
        totalHealth += system.health;
      } else if (system.status === "failed") {
        failedCount++;
      }
    }
    
    status.overall.running = runningCount;
    status.overall.failed = failedCount;
    status.overall.health = runningCount > 0 ? totalHealth / runningCount : 0;
    
    return status;
  }

  getSystemDetails(systemName, system) {
    switch (systemName) {
      case "pm2":
        return {
          processes: Array.from(system.processes.keys()),
          healthyProcesses: Array.from(system.processes.values()).filter(p => p.status === "online").length,
          totalProcesses: system.processes.size
        };
      case "githubActions":
        return {
          workflows: Array.from(system.workflows.keys()),
          healthyWorkflows: Array.from(system.workflows.values()).filter(w => w.status === "active").length,
          totalWorkflows: system.workflows.size
        };
      case "netlifyFunctions":
        return {
          functions: Array.from(system.functions.keys()),
          healthyFunctions: Array.from(system.functions.values()).filter(f => f.status === "active").length,
          totalFunctions: system.functions.size
        };
      case "buildSystem":
        return {
          lastBuildTime: system.lastBuildTime,
          buildSuccess: system.buildSuccess
        };
      case "gitSync":
        return {
          syncStatus: system.syncStatus,
          lastSync: system.lastSync
        };
      default:
        return {};
    }
  }

  async stopMonitoring() {
    this.log("Stopping comprehensive redundancy monitoring...");
    
    this.monitoring = false;
    
    if (this.orchestrationInterval) {
      clearInterval(this.orchestrationInterval);
      this.orchestrationInterval = null;
    }
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    // Stop all health check intervals
    for (const [systemName, interval] of this.healthChecks) {
      clearInterval(interval);
    }
    this.healthChecks.clear();
    
    this.log("✅ Comprehensive redundancy monitoring stopped");
  }

  async runBuild() {
    try {
      this.log("Running build process...");
      
      const startTime = Date.now();
      execSync(this.config.systems.buildSystem.buildCommand, { 
        cwd: this.workspace,
        stdio: "inherit",
        timeout: 600000 // 10 minutes
      });
      
      const buildTime = Date.now() - startTime;
      this.log(`✅ Build completed successfully in ${(buildTime / 1000).toFixed(1)}s`);
      
      // Update build system status
      const buildSystem = this.systems.get("buildSystem");
      if (buildSystem) {
        buildSystem.lastBuildTime = new Date();
        buildSystem.buildSuccess = true;
        buildSystem.health = 100;
      }
      
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, "ERROR");
      
      // Update build system status
      const buildSystem = this.systems.get("buildSystem");
      if (buildSystem) {
        buildSystem.buildSuccess = false;
        buildSystem.health = 0;
      }
      
      return false;
    }
  }

  async runBuildWithRecovery() {
    this.log("Running build with recovery...");
    
    // First attempt
    if (await this.runBuild()) {
      return true;
    }
    
    // Try to fix issues
    this.log("Build failed, attempting to fix issues...");
    
    try {
      // Run linting fixes
      execSync("npm run fix:all", { 
        cwd: this.workspace, 
        stdio: "inherit",
        timeout: 120000 
      });
      
      // Try build again
      if (await this.runBuild()) {
        this.log("✅ Build succeeded after fixes");
        return true;
      }
    } catch (error) {
      this.log(`Failed to apply fixes: ${error.message}`, "ERROR");
    }
    
    // Try build recovery
    try {
      this.log("Attempting build recovery...");
      execSync("npm run build:recovery", { 
        cwd: this.workspace, 
        stdio: "inherit",
        timeout: 300000 
      });
      
      if (await this.runBuild()) {
        this.log("✅ Build succeeded after recovery");
        return true;
      }
    } catch (error) {
      this.log(`Build recovery failed: ${error.message}`, "ERROR");
    }
    
    this.log("❌ All build recovery attempts failed", "ERROR");
    return false;
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ComprehensiveRedundancyAutomation();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.startMonitoring();
      // Keep the process running
      process.on('SIGINT', async () => {
        console.log('\nReceived SIGINT, shutting down gracefully...');
        await orchestrator.stopMonitoring();
        process.exit(0);
      });
      process.on('SIGTERM', async () => {
        console.log('\nReceived SIGTERM, shutting down gracefully...');
        await orchestrator.stopMonitoring();
        process.exit(0);
      });
      break;
    case "stop":
      orchestrator.stopMonitoring();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "build":
      orchestrator.runBuild();
      break;
    case "build:recovery":
      orchestrator.runBuildWithRecovery();
      break;
    case "health":
      orchestrator.performHealthChecks();
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-automation.cjs [start|stop|status|build|build:recovery|health]");
  }
}

module.exports = { ComprehensiveRedundancyAutomation };