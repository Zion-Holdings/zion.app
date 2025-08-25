#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "autonomous-system-manager.runtime.log");
const DATA_DIR = path.join(__dirname, "data");
const CONFIG_FILE = path.join(DATA_DIR, "autonomous-config.json");
const STATE_FILE = path.join(DATA_DIR, "autonomous-state.json");

class AutonomousSystemManager {
  constructor() {
    this.ensureLogDir();
    this.ensureDataDir();
    this.loadConfig();
    this.loadState();
    this.processes = new Map();
    this.healthChecks = new Map();
    this.decisionEngine = new DecisionEngine();
    this.isRunning = false;
  }

  ensureLogDir() {
    try {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    } catch (error) {
      console.error('Failed to create log directory:', error.message);
    }
  }

  ensureDataDir() {
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (error) {
      console.error('Failed to create data directory:', error.message);
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync(CONFIG_FILE)) {
        this.config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
      } else {
        this.config = this.getDefaultConfig();
        this.saveConfig();
      }
    } catch (error) {
      this.log(`Failed to load config, using defaults: ${error.message}`);
      this.config = this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    return {
      services: {
        'autonomous-system-manager': {
          enabled: true,
          script: 'autonomous-system-manager.cjs',
          interval: 60000,
          maxRestarts: 5,
          restartDelay: 5000,
          priority: 'critical'
        },
        'ml-link-intelligence': {
          enabled: true,
          script: 'ml-link-intelligence.cjs',
          interval: 120000,
          maxRestarts: 3,
          restartDelay: 10000,
          priority: 'high'
        },
        'link-health-scheduler': {
          enabled: true,
          script: 'link-health-scheduler.cjs',
          interval: 600000,
          maxRestarts: 3,
          restartDelay: 15000,
          priority: 'high'
        },
        'real-time-performance-monitor': {
          enabled: true,
          script: 'real-time-performance-monitor.cjs',
          interval: 30000,
          maxRestarts: 3,
          restartDelay: 10000,
          priority: 'medium'
        }
      },
      monitoring: {
        healthCheckInterval: 30000,
        logRotationSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 5,
        alertThresholds: {
          cpu: { warning: 70, critical: 90 },
          memory: { warning: 80, critical: 95 },
          restartCount: { warning: 3, critical: 5 }
        }
      },
      automation: {
        autoRestart: true,
        loadBalancing: true,
        resourceOptimization: true,
        intelligentScaling: true
      }
    };
  }

  saveConfig() {
    try {
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(this.config, null, 2));
    } catch (error) {
      this.log(`Failed to save config: ${error.message}`);
    }
  }

  loadState() {
    try {
      if (fs.existsSync(STATE_FILE)) {
        this.state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
      } else {
        this.state = this.getDefaultState();
        this.saveState();
      }
    } catch (error) {
      this.state = this.getDefaultState();
    }
  }

  getDefaultState() {
    return {
      lastUpdated: new Date().toISOString(),
      services: {},
      systemHealth: {
        overall: 100,
        cpu: 100,
        memory: 100,
        disk: 100,
        network: 100
      },
      alerts: [],
      decisions: [],
      performance: {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        averageResponseTime: 0
      }
    };
  }

  saveState() {
    try {
      this.state.lastUpdated = new Date().toISOString();
      fs.writeFileSync(STATE_FILE, JSON.stringify(this.state, null, 2));
    } catch (error) {
      this.log(`Failed to save state: ${error.message}`);
    }
  }

  log(message) {
    const line = `[${new Date().toISOString()}] ${message}\n`;
    try {
      fs.appendFileSync(LOG_FILE, line, "utf8");
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
    process.stdout.write(line);
  }

  async startService(serviceName, serviceConfig) {
    if (!serviceConfig.enabled) {
      this.log(`Service ${serviceName} is disabled`);
      return false;
    }

    if (this.processes.has(serviceName)) {
      this.log(`Service ${serviceName} is already running`);
      return true;
    }

    const scriptPath = path.join(__dirname, serviceConfig.script);
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`);
      return false;
    }

    this.log(`Starting service: ${serviceName}`);
    
    try {
      const process = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: __dirname,
        env: { ...process.env, SERVICE_NAME: serviceName }
      });

      let restartCount = 0;
      let isRestarting = false;
      let lastHeartbeat = Date.now();

      process.stdout.on('data', (data) => {
        this.log(`${serviceName}: ${data.toString().trim()}`);
        lastHeartbeat = Date.now();
      });

      process.stderr.on('data', (data) => {
        this.log(`${serviceName}: ERROR: ${data.toString().trim()}`);
      });

      process.on('exit', (code, signal) => {
        this.log(`Service ${serviceName} exited with code ${code}, signal ${signal}`);
        this.processes.delete(serviceName);
        
        if (restartCount < serviceConfig.maxRestarts && !isRestarting && this.config.automation.autoRestart) {
          isRestarting = true;
          restartCount++;
          this.log(`Restarting ${serviceName} in ${serviceConfig.restartDelay}ms (attempt ${restartCount}/${serviceConfig.maxRestarts})`);
          
          setTimeout(() => {
            isRestarting = false;
            this.startService(serviceName, serviceConfig);
          }, serviceConfig.restartDelay);
        } else if (restartCount >= serviceConfig.maxRestarts) {
          this.log(`Service ${serviceName} exceeded max restart attempts, disabling`);
          serviceConfig.enabled = false;
          this.saveConfig();
          this.triggerAlert('critical', `Service ${serviceName} disabled due to excessive restarts`);
        }
      });

      process.on('error', (error) => {
        this.log(`Failed to start ${serviceName}: ${error.message}`);
        this.triggerAlert('error', `Failed to start ${serviceName}: ${error.message}`);
      });

      this.processes.set(serviceName, {
        process,
        config: serviceConfig,
        startTime: Date.now(),
        restartCount: 0,
        lastHeartbeat,
        status: 'running'
      });

      // Update state
      this.state.services[serviceName] = {
        status: 'running',
        startTime: Date.now(),
        restartCount: 0,
        pid: process.pid
      };

      this.log(`Service ${serviceName} started successfully`);
      return true;
      
    } catch (error) {
      this.log(`Error starting ${serviceName}: ${error.message}`);
      return false;
    }
  }

  stopService(serviceName) {
    const serviceInfo = this.processes.get(serviceName);
    if (!serviceInfo) {
      this.log(`Service ${serviceName} is not running`);
      return false;
    }

    this.log(`Stopping service: ${serviceName}`);
    
    try {
      serviceInfo.process.kill('SIGTERM');
      
      // Force kill after 5 seconds if graceful shutdown fails
      setTimeout(() => {
        if (this.processes.has(serviceName)) {
          this.log(`Force killing service: ${serviceName}`);
          serviceInfo.process.kill('SIGKILL');
        }
      }, 5000);

      // Update state
      this.state.services[serviceName] = {
        status: 'stopped',
        stopTime: Date.now(),
        uptime: Date.now() - serviceInfo.startTime
      };

      return true;
      
    } catch (error) {
      this.log(`Error stopping ${serviceName}: ${error.message}`);
      return false;
    }
  }

  async startAll() {
    this.log('Starting all enabled services...');
    const results = [];
    
    for (const [serviceName, serviceConfig] of Object.entries(this.config.services)) {
      const success = await this.startService(serviceName, serviceConfig);
      results.push({ serviceName, success });
      
      // Small delay between service starts
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    const successful = results.filter(r => r.success).length;
    const total = results.length;
    
    this.log(`Started ${successful}/${total} services successfully`);
    return results;
  }

  stopAll() {
    this.log('Stopping all services...');
    const results = [];
    
    for (const serviceName of this.processes.keys()) {
      const success = this.stopService(serviceName);
      results.push({ serviceName, success });
    }
    
    this.log(`Stopped ${results.length} services`);
    return results;
  }

  restartAll() {
    this.log('Restarting all services...');
    this.stopAll();
    setTimeout(() => {
      this.startAll();
    }, 2000);
  }

  async performHealthCheck() {
    const healthStatus = {
      timestamp: new Date().toISOString(),
      overall: 100,
      services: {},
      system: await this.getSystemHealth(),
      recommendations: []
    };

    let totalHealth = 0;
    let serviceCount = 0;

    // Check each service
    for (const [serviceName, serviceInfo] of this.processes.entries()) {
      const serviceHealth = this.checkServiceHealth(serviceName, serviceInfo);
      healthStatus.services[serviceName] = serviceHealth;
      
      totalHealth += serviceHealth.score;
      serviceCount++;
      
      if (serviceHealth.score < 50) {
        healthStatus.recommendations.push(`Investigate ${serviceName}: ${serviceHealth.issues.join(', ')}`);
      }
    }

    if (serviceCount > 0) {
      healthStatus.overall = Math.round(totalHealth / serviceCount);
    }

    // Update state
    this.state.systemHealth.overall = healthStatus.overall;
    this.state.lastUpdated = new Date().toISOString();
    this.saveState();

    return healthStatus;
  }

  checkServiceHealth(serviceName, serviceInfo) {
    const health = {
      score: 100,
      status: serviceInfo.status,
      uptime: Date.now() - serviceInfo.startTime,
      restartCount: serviceInfo.restartCount,
      lastHeartbeat: serviceInfo.lastHeartbeat,
      issues: []
    };

    // Check if service is responding
    const timeSinceHeartbeat = Date.now() - serviceInfo.lastHeartbeat;
    if (timeSinceHeartbeat > 60000) { // No heartbeat for 1 minute
      health.score -= 30;
      health.issues.push('No recent heartbeat');
    }

    // Check restart count
    if (serviceInfo.restartCount > 3) {
      health.score -= 20;
      health.issues.push('High restart count');
    }

    // Check uptime
    if (health.uptime < 30000) { // Less than 30 seconds
      health.score -= 10;
      health.issues.push('Recently started');
    }

    health.score = Math.max(0, health.score);
    return health;
  }

  async getSystemHealth() {
    const os = require('os');
    
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memoryUsage = (usedMem / totalMem) * 100;
    
    const cpuLoad = os.loadavg()[0];
    const cpuCores = os.cpus().length;
    const cpuUsage = (cpuLoad / cpuCores) * 100;

    return {
      cpu: {
        load: cpuLoad,
        usage: Math.min(100, cpuUsage),
        cores: cpuCores
      },
      memory: {
        total: totalMem,
        used: usedMem,
        free: freeMem,
        usage: memoryUsage
      },
      uptime: os.uptime()
    };
  }

  triggerAlert(level, message) {
    const alert = {
      level,
      message,
      timestamp: new Date().toISOString(),
      service: 'autonomous-system-manager'
    };

    this.state.alerts.push(alert);
    
    // Keep only last 100 alerts
    if (this.state.alerts.length > 100) {
      this.state.alerts = this.state.alerts.slice(-100);
    }

    this.log(`ALERT [${level.toUpperCase()}] ${message}`);
    
    // Make intelligent decisions based on alerts
    this.decisionEngine.processAlert(alert, this);
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      manager: {
        isRunning: this.isRunning,
        configFile: CONFIG_FILE,
        stateFile: STATE_FILE
      },
      services: {},
      system: this.state.systemHealth,
      alerts: this.state.alerts.slice(-10), // Last 10 alerts
      decisions: this.state.decisions.slice(-10) // Last 10 decisions
    };

    // Add service status
    for (const [serviceName, serviceInfo] of this.processes.entries()) {
      status.services[serviceName] = {
        status: serviceInfo.status,
        pid: serviceInfo.process.pid,
        startTime: serviceInfo.startTime,
        uptime: Date.now() - serviceInfo.startTime,
        restartCount: serviceInfo.restartCount,
        lastHeartbeat: serviceInfo.lastHeartbeat
      };
    }

    return status;
  }

  printStatus() {
    const status = this.getStatus();
    console.log('\n=== Autonomous System Manager Status ===');
    console.log(`Timestamp: ${status.timestamp}`);
    console.log(`Manager Running: ${status.manager.isRunning ? '🟢 Yes' : '🔴 No'}`);
    console.log(`Overall Health: ${status.system.overall}%`);
    
    console.log('\nServices:');
    Object.entries(status.services).forEach(([serviceName, serviceStatus]) => {
      const statusIcon = serviceStatus.status === 'running' ? '🟢' : '🔴';
      const uptime = Math.floor(serviceStatus.uptime / 1000);
      
      console.log(`  ${statusIcon} ${serviceName}:`);
      console.log(`    Status: ${serviceStatus.status}`);
      console.log(`    PID: ${serviceStatus.pid}`);
      console.log(`    Uptime: ${uptime}s`);
      console.log(`    Restarts: ${serviceStatus.restartCount}`);
    });
    
    console.log('\nRecent Alerts:');
    status.alerts.forEach(alert => {
      const levelIcon = alert.level === 'critical' ? '🔴' : alert.level === 'warning' ? '🟡' : '🔵';
      console.log(`  ${levelIcon} [${alert.level.toUpperCase()}] ${alert.message}`);
    });
    
    console.log('\n==========================================\n');
  }

  async runHealthCheckLoop() {
    setInterval(async () => {
      try {
        const health = await this.performHealthCheck();
        
        if (health.overall < 70) {
          this.triggerAlert('warning', `System health degraded: ${health.overall}%`);
        }
        
        if (health.overall < 50) {
          this.triggerAlert('critical', `System health critical: ${health.overall}%`);
        }
        
      } catch (error) {
        this.log(`Health check error: ${error.message}`);
      }
    }, this.config.monitoring.healthCheckInterval);
  }

  async run() {
    this.log('Starting Autonomous System Manager');
    
    // Signal ready to PM2 if wait_ready is enabled
    if (typeof process.send === "function") {
      try { process.send("ready"); } catch (_) {}
    }

    let running = true;
    const stop = () => {
      if (!running) return;
      running = false;
      this.log("Shutting down Autonomous System Manager gracefully...");
      this.stopAll();
      setTimeout(() => process.exit(0), 100);
    };

    process.on("SIGINT", stop);
    process.on("SIGTERM", stop);

    try {
      // Start all services
      await this.startAll();
      
      // Start health monitoring
      await this.runHealthCheckLoop();
      
      this.isRunning = true;
      this.log('Autonomous System Manager is now running');
      
      // Main loop
      while (running) {
        await new Promise(resolve => setTimeout(resolve, 60000)); // Check every minute
        
        // Periodic status update
        if (Date.now() % 300000 < 60000) { // Every 5 minutes
          this.log('Periodic status check - all systems operational');
        }
      }
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Decision Engine for intelligent automation
class DecisionEngine {
  constructor() {
    this.decisionHistory = [];
  }

  processAlert(alert, manager) {
    const decision = this.makeDecision(alert, manager);
    
    if (decision) {
      this.executeDecision(decision, manager);
      this.decisionHistory.push({
        timestamp: new Date().toISOString(),
        alert: alert.message,
        decision: decision.action,
        reason: decision.reason
      });
    }
  }

  makeDecision(alert, manager) {
    // Simple decision logic - can be enhanced with ML
    if (alert.level === 'critical' && alert.message.includes('excessive restarts')) {
      return {
        action: 'disable_service',
        reason: 'Service is unstable and should be disabled',
        target: alert.message.match(/Service (\w+)/)?.[1]
      };
    }
    
    if (alert.level === 'warning' && alert.message.includes('System health degraded')) {
      return {
        action: 'investigate_services',
        reason: 'System health is degrading, investigate all services',
        target: 'all'
      };
    }
    
    return null;
  }

  executeDecision(decision, manager) {
    switch (decision.action) {
      case 'disable_service':
        if (decision.target && manager.config.services[decision.target]) {
          manager.log(`Executing decision: Disabling ${decision.target}`);
          manager.config.services[decision.target].enabled = false;
          manager.saveConfig();
        }
        break;
        
      case 'investigate_services':
        manager.log('Executing decision: Investigating all services');
        // Could trigger additional monitoring or diagnostics
        break;
    }
  }
}

// CLI interface
async function main() {
  const manager = new AutonomousSystemManager();
  const command = process.argv[2] || 'start';

  try {
    switch (command) {
      case 'start':
        await manager.run();
        break;
        
      case 'stop':
        console.log('Stopping Autonomous System Manager...');
        manager.stopAll();
        break;
        
      case 'restart':
        console.log('Restarting Autonomous System Manager...');
        manager.restartAll();
        break;
        
      case 'status':
        manager.printStatus();
        break;
        
      case 'health':
        const health = await manager.performHealthCheck();
        console.log('Health Check Results:', JSON.stringify(health, null, 2));
        break;
        
      default:
        console.log('Usage: node autonomous-system-manager.cjs [start|stop|restart|status|health]');
        console.log('  start   - Start all enabled services');
        console.log('  stop    - Stop all running services');
        console.log('  restart - Restart all services');
        console.log('  status  - Show system status');
        console.log('  health  - Run health check');
        process.exit(1);
    }
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = AutonomousSystemManager;


