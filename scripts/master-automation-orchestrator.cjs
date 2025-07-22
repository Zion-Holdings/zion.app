#!/usr/bin/env node

/**
 * Master Automation Orchestrator
 * 
 * Coordinates and manages all independent automation systems,
 * providing unified control, monitoring, and intelligent scheduling.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const https = require('https');
const http = require('http');

class MasterAutomationOrchestrator extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      // Automation systems
      systems: {
        aiCodeReview: {
          name: 'AI Code Review',
          script: 'scripts/ai-code-review-automation.cjs',
          enabled: true,
          priority: 'high',
          schedule: {
            startDelay: 0,
            interval: 10 * 60 * 1000, // 10 minutes
            maxConcurrent: 1
          }
        },
        aiDiscovery: {
          name: 'AI Discovery',
          script: 'scripts/ai-discovery-automation.cjs',
          enabled: true,
          priority: 'medium',
          schedule: {
            startDelay: 30 * 1000, // 30 seconds
            interval: 30 * 60 * 1000, // 30 minutes
            maxConcurrent: 1
          }
        },
        performanceOptimization: {
          name: 'Performance Optimization',
          script: 'scripts/performance-optimization-automation.cjs',
          enabled: true,
          priority: 'high',
          schedule: {
            startDelay: 60 * 1000, // 1 minute
            interval: 15 * 60 * 1000, // 15 minutes
            maxConcurrent: 1
          }
        },
        securityMonitoring: {
          name: 'Security Monitoring',
          script: 'scripts/security-monitoring-automation.cjs',
          enabled: true,
          priority: 'critical',
          schedule: {
            startDelay: 15 * 1000, // 15 seconds
            interval: 5 * 60 * 1000, // 5 minutes
            maxConcurrent: 1
          }
        },
        uxEnhancement: {
          name: 'UX Enhancement',
          script: 'scripts/ux-enhancement-automation.cjs',
          enabled: true,
          priority: 'medium',
          schedule: {
            startDelay: 45 * 1000, // 45 seconds
            interval: 20 * 60 * 1000, // 20 minutes
            maxConcurrent: 1
          }
        },
        databaseHealth: {
          name: 'Database Health',
          script: 'scripts/database-health-automation.cjs',
          enabled: true,
          priority: 'high',
          schedule: {
            startDelay: 90 * 1000, // 1.5 minutes
            interval: 25 * 60 * 1000, // 25 minutes
            maxConcurrent: 1
          }
        }
      },
      
      // Orchestration settings
      orchestration: {
        maxConcurrentSystems: 3,
        healthCheckInterval: 30 * 1000, // 30 seconds
        restartOnFailure: true,
        maxRestartAttempts: 3,
        gracefulShutdown: true,
        loadBalancing: true
      },
      
      // Communication settings
      communication: {
        webhookUrl: process.env.WEBHOOK_URL,
        slackChannel: process.env.SLACK_CHANNEL,
        emailNotifications: process.env.EMAIL_NOTIFICATIONS === 'true',
        notificationLevel: 'warning' // debug, info, warning, error, critical
      },
      
      // Paths
      paths: {
        projectRoot: process.cwd(),
        logs: path.join(process.cwd(), 'logs'),
        reports: path.join(process.cwd(), 'reports'),
        config: path.join(process.cwd(), 'config'),
        temp: path.join(process.cwd(), 'temp')
      }
    };
    
    this.isRunning = false;
    this.activeSystems = new Map();
    this.systemStatus = new Map();
    this.systemProcesses = new Map();
    this.restartAttempts = new Map();
    this.systemMetrics = new Map();
    this.stats = {
      totalSystems: 0,
      activeSystems: 0,
      failedSystems: 0,
      totalRestarts: 0,
      lastOrchestration: null
    };
    
    this.initializeDirectories();
    this.initializeSystems();
  }

  async initializeDirectories() {
    const dirs = [
      this.config.paths.logs,
      this.config.paths.reports,
      this.config.paths.config,
      this.config.paths.temp
    ];

    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        this.log('warn', `Failed to create directory ${dir}: ${error.message}`);
      }
    }
  }

  initializeSystems() {
    for (const [systemId, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.systemStatus.set(systemId, {
          status: 'stopped',
          lastStart: null,
          lastStop: null,
          uptime: 0,
          restarts: 0,
          errors: [],
          metrics: {}
        });
        
        this.restartAttempts.set(systemId, 0);
        this.systemMetrics.set(systemId, []);
        
        this.stats.totalSystems++;
      }
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('warn', 'Master Automation Orchestrator is already running');
      return;
    }

    this.log('info', '🚀 Starting Master Automation Orchestrator...');
    this.isRunning = true;

    // Start health monitoring
    this.startHealthMonitoring();

    // Start all enabled systems
    await this.startAllSystems();

    // Start load balancing
    if (this.config.orchestration.loadBalancing) {
      this.startLoadBalancing();
    }

    this.log('info', '✅ Master Automation Orchestrator started successfully');
    this.emit('started');
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'Master Automation Orchestrator is not running');
      return;
    }

    this.log('info', '🛑 Stopping Master Automation Orchestrator...');
    this.isRunning = false;

    // Stop health monitoring
    if (this.healthTimer) {
      clearInterval(this.healthTimer);
    }

    // Stop load balancing
    if (this.loadBalancingTimer) {
      clearInterval(this.loadBalancingTimer);
    }

    // Stop all systems gracefully
    await this.stopAllSystems();

    this.log('info', '✅ Master Automation Orchestrator stopped');
    this.emit('stopped');
  }

  async startAllSystems() {
    const systemEntries = Object.entries(this.config.systems)
      .filter(([, config]) => config.enabled)
      .sort((a, b) => {
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        return priorityOrder[a[1].priority] - priorityOrder[b[1].priority];
      });

    for (const [systemId, systemConfig] of systemEntries) {
      try {
        // Start system with delay
        setTimeout(async () => {
          await this.startSystem(systemId);
        }, systemConfig.schedule.startDelay);
      } catch (error) {
        this.log('error', `Failed to schedule system ${systemId}: ${error.message}`);
      }
    }
  }

  async startSystem(systemId) {
    const systemConfig = this.config.systems[systemId];
    if (!systemConfig || !systemConfig.enabled) {
      return;
    }

    if (this.activeSystems.has(systemId)) {
      this.log('warn', `System ${systemId} is already running`);
      return;
    }

    if (this.getActiveSystemCount() >= this.config.orchestration.maxConcurrentSystems) {
      this.log('warn', `Maximum concurrent systems reached. Queuing ${systemId}`);
      this.queueSystem(systemId);
      return;
    }

    try {
      this.log('info', `🚀 Starting system: ${systemConfig.name}`);
      
      // Start the system process
      const process = spawn('node', [systemConfig.script, 'start'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });

      // Store process reference
      this.systemProcesses.set(systemId, process);
      this.activeSystems.set(systemId, {
        process,
        startTime: Date.now(),
        config: systemConfig
      });

      // Update status
      const status = this.systemStatus.get(systemId);
      status.status = 'running';
      status.lastStart = Date.now();
      status.restarts++;

      this.stats.activeSystems++;

      // Handle process events
      process.stdout.on('data', (data) => {
        this.log('info', `[${systemId}] ${data.toString().trim()}`);
      });

      process.stderr.on('data', (data) => {
        this.log('error', `[${systemId}] ${data.toString().trim()}`);
      });

      process.on('close', (code) => {
        this.handleSystemExit(systemId, code);
      });

      process.on('error', (error) => {
        this.handleSystemError(systemId, error);
      });

      this.log('info', `✅ System ${systemConfig.name} started successfully`);
      this.emit('systemStarted', { systemId, systemConfig });

    } catch (error) {
      this.log('error', `Failed to start system ${systemId}: ${error.message}`);
      this.handleSystemError(systemId, error);
    }
  }

  async stopSystem(systemId) {
    const activeSystem = this.activeSystems.get(systemId);
    if (!activeSystem) {
      this.log('warn', `System ${systemId} is not running`);
      return;
    }

    try {
      this.log('info', `🛑 Stopping system: ${systemId}`);
      
      const process = activeSystem.process;
      
      if (this.config.orchestration.gracefulShutdown) {
        // Try graceful shutdown first
        process.kill('SIGTERM');
        
        // Wait for graceful shutdown
        setTimeout(() => {
          if (process.killed === false) {
            process.kill('SIGKILL');
          }
        }, 5000);
      } else {
        process.kill('SIGKILL');
      }

      // Update status
      const status = this.systemStatus.get(systemId);
      status.status = 'stopped';
      status.lastStop = Date.now();
      status.uptime += Date.now() - activeSystem.startTime;

      this.activeSystems.delete(systemId);
      this.systemProcesses.delete(systemId);
      this.stats.activeSystems--;

      this.log('info', `✅ System ${systemId} stopped`);
      this.emit('systemStopped', { systemId });

    } catch (error) {
      this.log('error', `Failed to stop system ${systemId}: ${error.message}`);
    }
  }

  async stopAllSystems() {
    const systemIds = Array.from(this.activeSystems.keys());
    
    for (const systemId of systemIds) {
      await this.stopSystem(systemId);
    }
  }

  handleSystemExit(systemId, code) {
    const systemConfig = this.config.systems[systemId];
    const status = this.systemStatus.get(systemId);
    
    this.log('info', `System ${systemId} exited with code ${code}`);
    
    // Update status
    status.status = 'stopped';
    status.lastStop = Date.now();
    
    if (code !== 0) {
      status.errors.push({
        timestamp: Date.now(),
        type: 'exit',
        code,
        message: `System exited with code ${code}`
      });
      
      this.stats.failedSystems++;
      
      // Attempt restart if enabled
      if (this.config.orchestration.restartOnFailure) {
        this.attemptRestart(systemId);
      }
    }
    
    this.activeSystems.delete(systemId);
    this.systemProcesses.delete(systemId);
    this.stats.activeSystems--;
    
    this.emit('systemExited', { systemId, code });
  }

  handleSystemError(systemId, error) {
    const status = this.systemStatus.get(systemId);
    
    this.log('error', `System ${systemId} error: ${error.message}`);
    
    // Update status
    status.errors.push({
      timestamp: Date.now(),
      type: 'error',
      message: error.message
    });
    
    this.stats.failedSystems++;
    
    // Attempt restart if enabled
    if (this.config.orchestration.restartOnFailure) {
      this.attemptRestart(systemId);
    }
    
    this.emit('systemError', { systemId, error });
  }

  async attemptRestart(systemId) {
    const restartAttempts = this.restartAttempts.get(systemId) || 0;
    const maxAttempts = this.config.orchestration.maxRestartAttempts;
    
    if (restartAttempts >= maxAttempts) {
      this.log('error', `System ${systemId} exceeded maximum restart attempts (${maxAttempts})`);
      this.sendNotification('critical', `System ${systemId} failed to restart after ${maxAttempts} attempts`);
      return;
    }
    
    this.restartAttempts.set(systemId, restartAttempts + 1);
    this.stats.totalRestarts++;
    
    this.log('info', `Attempting to restart system ${systemId} (attempt ${restartAttempts + 1}/${maxAttempts})`);
    
    // Wait before restart
    setTimeout(async () => {
      await this.startSystem(systemId);
    }, 5000 * (restartAttempts + 1)); // Exponential backoff
  }

  startHealthMonitoring() {
    this.healthTimer = setInterval(async () => {
      if (this.isRunning) {
        await this.checkSystemHealth();
      }
    }, this.config.orchestration.healthCheckInterval);
  }

  async checkSystemHealth() {
    for (const [systemId, activeSystem] of this.activeSystems) {
      try {
        const health = await this.getSystemHealth(systemId);
        this.systemMetrics.get(systemId).push({
          timestamp: Date.now(),
          health
        });
        
        // Keep only recent metrics
        const metrics = this.systemMetrics.get(systemId);
        if (metrics.length > 100) {
          metrics.splice(0, metrics.length - 100);
        }
        
        // Check for health issues
        if (health.status === 'unhealthy') {
          this.log('warn', `System ${systemId} health check failed`);
          this.sendNotification('warning', `System ${systemId} is unhealthy`);
        }
        
      } catch (error) {
        this.log('error', `Health check failed for system ${systemId}: ${error.message}`);
      }
    }
  }

  async getSystemHealth(systemId) {
    const activeSystem = this.activeSystems.get(systemId);
    if (!activeSystem) {
      return { status: 'stopped', uptime: 0, memory: 0, cpu: 0 };
    }
    
    const process = activeSystem.process;
    const uptime = Date.now() - activeSystem.startTime;
    
    try {
      // Get process memory usage
      const memoryUsage = process.memoryUsage ? process.memoryUsage() : { heapUsed: 0 };
      const memoryMB = Math.round(memoryUsage.heapUsed / 1024 / 1024);
      
      // Get CPU usage (simplified)
      const cpuUsage = process.cpuUsage ? process.cpuUsage() : { user: 0, system: 0 };
      
      return {
        status: process.killed ? 'stopped' : 'healthy',
        uptime,
        memory: memoryMB,
        cpu: cpuUsage
      };
    } catch (error) {
      return {
        status: 'unknown',
        uptime,
        memory: 0,
        cpu: 0,
        error: error.message
      };
    }
  }

  startLoadBalancing() {
    this.loadBalancingTimer = setInterval(async () => {
      if (this.isRunning) {
        await this.performLoadBalancing();
      }
    }, 60 * 1000); // Every minute
  }

  async performLoadBalancing() {
    const systemLoads = await this.getSystemLoads();
    const totalLoad = systemLoads.reduce((sum, load) => sum + load.load, 0);
    const averageLoad = totalLoad / systemLoads.length;
    
    // Check for overloaded systems
    for (const systemLoad of systemLoads) {
      if (systemLoad.load > averageLoad * 1.5) {
        this.log('warn', `System ${systemLoad.systemId} is overloaded (${systemLoad.load} vs avg ${averageLoad})`);
        
        // Consider redistributing load or restarting system
        if (systemLoad.load > averageLoad * 2) {
          this.log('info', `Restarting overloaded system ${systemLoad.systemId}`);
          await this.stopSystem(systemLoad.systemId);
          setTimeout(() => this.startSystem(systemLoad.systemId), 5000);
        }
      }
    }
  }

  async getSystemLoads() {
    const loads = [];
    
    for (const [systemId, activeSystem] of this.activeSystems) {
      try {
        const health = await this.getSystemHealth(systemId);
        const load = health.memory + health.cpu.user / 1000000; // Simplified load calculation
        loads.push({ systemId, load });
      } catch (error) {
        this.log('warn', `Failed to get load for system ${systemId}: ${error.message}`);
      }
    }
    
    return loads;
  }

  getActiveSystemCount() {
    return this.activeSystems.size;
  }

  queueSystem(systemId) {
    // Simple queue implementation
    if (!this.systemQueue) {
      this.systemQueue = [];
    }
    
    if (!this.systemQueue.includes(systemId)) {
      this.systemQueue.push(systemId);
      this.log('info', `System ${systemId} queued for start`);
    }
  }

  async processQueue() {
    if (!this.systemQueue || this.systemQueue.length === 0) {
      return;
    }
    
    while (this.systemQueue.length > 0 && 
           this.getActiveSystemCount() < this.config.orchestration.maxConcurrentSystems) {
      const systemId = this.systemQueue.shift();
      await this.startSystem(systemId);
    }
  }

  async sendNotification(level, message) {
    const notificationLevels = ['debug', 'info', 'warning', 'error', 'critical'];
    const configLevel = notificationLevels.indexOf(this.config.communication.notificationLevel);
    const messageLevel = notificationLevels.indexOf(level);
    
    if (messageLevel < configLevel) {
      return; // Don't send notification
    }
    
    const notification = {
      timestamp: Date.now(),
      level,
      message,
      orchestrator: 'Master Automation Orchestrator'
    };
    
    // Send webhook notification
    if (this.config.communication.webhookUrl) {
      try {
        await this.sendWebhook(notification);
      } catch (error) {
        this.log('error', `Failed to send webhook notification: ${error.message}`);
      }
    }
    
    // Send Slack notification
    if (this.config.communication.slackChannel) {
      try {
        await this.sendSlackNotification(notification);
      } catch (error) {
        this.log('error', `Failed to send Slack notification: ${error.message}`);
      }
    }
    
    // Send email notification
    if (this.config.communication.emailNotifications) {
      try {
        await this.sendEmailNotification(notification);
      } catch (error) {
        this.log('error', `Failed to send email notification: ${error.message}`);
      }
    }
  }

  async sendWebhook(notification) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(notification);
      const url = new URL(this.config.communication.webhookUrl);
      
      const options = {
        hostname: url.hostname,
        port: url.port || 443,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
      };
      
      const req = https.request(options, (res) => {
        resolve();
      });
      
      req.on('error', reject);
      req.write(data);
      req.end();
    });
  }

  async sendSlackNotification(notification) {
    // Implementation for Slack notification
    this.log('info', `Slack notification: ${notification.message}`);
  }

  async sendEmailNotification(notification) {
    // Implementation for email notification
    this.log('info', `Email notification: ${notification.message}`);
  }

  async generateOrchestrationReport() {
    const report = {
      timestamp: Date.now(),
      stats: this.stats,
      systemStatus: Object.fromEntries(this.systemStatus),
      activeSystems: Array.from(this.activeSystems.keys()),
      systemMetrics: Object.fromEntries(this.systemMetrics),
      summary: {
        totalSystems: this.stats.totalSystems,
        activeSystems: this.stats.activeSystems,
        successRate: ((this.stats.totalSystems - this.stats.failedSystems) / this.stats.totalSystems * 100).toFixed(2),
        averageUptime: this.calculateAverageUptime(),
        topIssues: this.getTopIssues()
      }
    };

    const reportPath = path.join(this.config.paths.reports, `orchestration-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    this.log('info', `Generated orchestration report: ${reportPath}`);
    return report;
  }

  calculateAverageUptime() {
    const uptimes = Array.from(this.systemStatus.values())
      .map(status => status.uptime)
      .filter(uptime => uptime > 0);
    
    if (uptimes.length === 0) return 0;
    
    const totalUptime = uptimes.reduce((sum, uptime) => sum + uptime, 0);
    return Math.round(totalUptime / uptimes.length / 1000); // Convert to seconds
  }

  getTopIssues() {
    const issues = [];
    
    for (const [systemId, status] of this.systemStatus) {
      if (status.errors.length > 0) {
        issues.push({
          systemId,
          errorCount: status.errors.length,
          lastError: status.errors[status.errors.length - 1]
        });
      }
    }
    
    return issues
      .sort((a, b) => b.errorCount - a.errorCount)
      .slice(0, 5);
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] [ORCHESTRATOR] ${message}`;
    
    console.log(logMessage);
    
    // Save to log file
    const logPath = path.join(this.config.paths.logs, 'master-orchestrator.log');
    fs.appendFile(logPath, logMessage + '\n').catch(() => {});
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      activeSystems: Array.from(this.activeSystems.keys()),
      systemStatus: Object.fromEntries(this.systemStatus),
      lastOrchestration: this.stats.lastOrchestration
    };
  }

  async listSystems() {
    const systems = [];
    
    for (const [systemId, systemConfig] of Object.entries(this.config.systems)) {
      const status = this.systemStatus.get(systemId);
      const isActive = this.activeSystems.has(systemId);
      
      systems.push({
        id: systemId,
        name: systemConfig.name,
        enabled: systemConfig.enabled,
        priority: systemConfig.priority,
        status: status ? status.status : 'unknown',
        isActive,
        uptime: status ? status.uptime : 0,
        restarts: status ? status.restarts : 0,
        errors: status ? status.errors.length : 0
      });
    }
    
    return systems;
  }
}

// CLI Interface
async function main() {
  const orchestrator = new MasterAutomationOrchestrator();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      await orchestrator.start();
      break;
    case 'stop':
      await orchestrator.stop();
      break;
    case 'status':
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case 'list':
      const systems = await orchestrator.listSystems();
      console.log(JSON.stringify(systems, null, 2));
      break;
    case 'report':
      await orchestrator.generateOrchestrationReport();
      break;
    default:
      console.log('Usage: node master-automation-orchestrator.cjs [start|stop|status|list|report]');
      break;
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('Master Automation Orchestrator failed:', error.message);
    process.exit(1);
  });
}

module.exports = MasterAutomationOrchestrator; 