#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawn, exec } = require("child_process");
const os = require("os");

class EnhancedAutomationOrchestrator {
  constructor() {
    this.logDir = path.join(__dirname, "logs");
    this.configFile = path.join(__dirname, "enhanced-automation-config.json");
    this.stateFile = path.join(__dirname, "enhanced-automation-state.json");
    this.ensureLogDir();
    this.loadConfig();
    this.loadState();
    this.processes = new Map();
    this.workflows = new Map();
    this.metrics = {
      totalExecutions: 0,
      successfulExecutions: 0,
      failedExecutions: 0,
      lastExecution: null,
      uptime: Date.now()
    };
  }

  ensureLogDir() {
    try {
      fs.mkdirSync(this.logDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create log directory:', error.message);
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        this.config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      } else {
        this.config = this.getDefaultConfig();
        this.saveConfig();
      }
    } catch (error) {
      console.error('Failed to load config, using defaults:', error.message);
      this.config = this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    return {
      pm2Services: {
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
      githubWorkflows: {
        'cloud-autonomous': {
          enabled: true,
          schedule: '*/15 * * * *',
          lastRun: null,
          nextRun: null,
          priority: 'high'
        },
        'a11y-contrast-guardian': {
          enabled: true,
          schedule: '0 */6 * * *',
          lastRun: null,
          nextRun: null,
          priority: 'medium'
        },
        'dependency-update': {
          enabled: true,
          schedule: '0 2 * * *',
          lastRun: null,
          nextRun: null,
          priority: 'high'
        },
        'image-optimizer': {
          enabled: true,
          schedule: '0 */4 * * *',
          lastRun: null,
          nextRun: null,
          priority: 'medium'
        }
      },
      automationScripts: {
        'site-link-crawler': {
          enabled: true,
          script: 'site-link-crawler.cjs',
          interval: 3600000, // 1 hour
          lastRun: null,
          nextRun: null,
          priority: 'medium'
        },
        'seo-meta-audit': {
          enabled: true,
          script: 'seo-meta-audit.cjs',
          interval: 7200000, // 2 hours
          lastRun: null,
          nextRun: null,
          priority: 'medium'
        },
        'sitemap-keeper': {
          enabled: true,
          script: 'sitemap-keeper.cjs',
          interval: 1800000, // 30 minutes
          lastRun: null,
          nextRun: null,
          priority: 'high'
        }
      },
      monitoring: {
        healthCheckInterval: 30000,
        logRotationSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 5,
        alertThresholds: {
          cpu: { warning: 70, critical: 90 },
          memory: { warning: 80, critical: 95 },
          restartCount: { warning: 3, critical: 5 },
          failedExecutions: { warning: 5, critical: 10 }
        }
      }
    };
  }

  saveConfig() {
    try {
      fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      console.error('Failed to save config:', error.message);
    }
  }

  loadState() {
    try {
      if (fs.existsSync(this.stateFile)) {
        this.state = JSON.parse(fs.readFileSync(this.stateFile, 'utf8'));
      } else {
        this.state = {
          lastHealthCheck: null,
          lastMetricsUpdate: null,
          serviceStatus: {},
          workflowStatus: {},
          scriptStatus: {}
        };
        this.saveState();
      }
    } catch (error) {
      console.error('Failed to load state, using defaults:', error.message);
      this.state = {
        lastHealthCheck: null,
        lastMetricsUpdate: null,
        serviceStatus: {},
        workflowStatus: {},
        scriptStatus: {}
      };
    }
  }

  saveState() {
    try {
      fs.writeFileSync(this.stateFile, JSON.stringify(this.state, null, 2));
    } catch (error) {
      console.error('Failed to save state:', error.message);
    }
  }

  log(component, message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${component}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `enhanced-automation-orchestrator.runtime.log`);
    try {
      fs.appendFileSync(logFile, logMessage + '\n', 'utf8');
    } catch (error) {
      console.error(`Failed to write to log file ${logFile}:`, error.message);
    }
  }

  async executeScript(scriptName, scriptConfig) {
    if (!scriptConfig.enabled) {
      this.log('SCRIPT', `Script ${scriptName} is disabled`);
      return { success: false, reason: 'disabled' };
    }

    const scriptPath = path.join(__dirname, scriptConfig.script);
    if (!fs.existsSync(scriptPath)) {
      this.log('SCRIPT', `Script not found: ${scriptPath}`, 'ERROR');
      return { success: false, reason: 'script_not_found' };
    }

    this.log('SCRIPT', `Executing script: ${scriptName}`);
    
    return new Promise((resolve) => {
      const process = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: __dirname
      });

      let stdout = '';
      let stderr = '';

      process.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      process.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      process.on('close', (code) => {
        const success = code === 0;
        if (success) {
          this.log('SCRIPT', `Script ${scriptName} completed successfully`);
          this.metrics.successfulExecutions++;
        } else {
          this.log('SCRIPT', `Script ${scriptName} failed with code ${code}`, 'ERROR');
          this.metrics.failedExecutions++;
        }
        
        this.metrics.totalExecutions++;
        this.metrics.lastExecution = Date.now();
        
        // Update script status
        this.state.scriptStatus[scriptName] = {
          lastRun: Date.now(),
          success,
          exitCode: code,
          stdout: stdout.substring(0, 1000), // Limit output size
          stderr: stderr.substring(0, 1000)
        };
        
        this.saveState();
        resolve({ success, exitCode: code, stdout, stderr });
      });

      process.on('error', (error) => {
        this.log('SCRIPT', `Failed to execute ${scriptName}: ${error.message}`, 'ERROR');
        this.metrics.failedExecutions++;
        this.metrics.totalExecutions++;
        this.metrics.lastExecution = Date.now();
        resolve({ success: false, reason: 'execution_error', error: error.message });
      });
    });
  }

  async triggerGitHubWorkflow(workflowName, workflowConfig) {
    if (!workflowConfig.enabled) {
      this.log('WORKFLOW', `Workflow ${workflowName} is disabled`);
      return { success: false, reason: 'disabled' };
    }

    this.log('WORKFLOW', `Triggering GitHub workflow: ${workflowName}`);
    
    try {
      // This would require GitHub API integration
      // For now, we'll simulate the workflow trigger
      this.state.workflowStatus[workflowName] = {
        lastTriggered: Date.now(),
        status: 'triggered'
      };
      
      this.saveState();
      return { success: true, status: 'triggered' };
    } catch (error) {
      this.log('WORKFLOW', `Failed to trigger workflow ${workflowName}: ${error.message}`, 'ERROR');
      return { success: false, reason: 'trigger_failed', error: error.message };
    }
  }

  async checkPM2ServiceHealth(serviceName) {
    try {
      const { stdout } = await new Promise((resolve, reject) => {
        exec(`pm2 show ${serviceName}`, (error, stdout, stderr) => {
          if (error) reject(error);
          else resolve({ stdout, stderr });
        });
      });

      const isOnline = stdout.includes('status            │ online');
      const memoryMatch = stdout.match(/memory\s+│\s+([\d.]+)mb/);
      const cpuMatch = stdout.match(/cpu\s+│\s+([\d.]+)%/);

      return {
        name: serviceName,
        online: isOnline,
        memory: memoryMatch ? parseFloat(memoryMatch[1]) : null,
        cpu: cpuMatch ? parseFloat(cpuMatch[1]) : null,
        timestamp: Date.now()
      };
    } catch (error) {
      this.log('HEALTH', `Failed to check PM2 service ${serviceName}: ${error.message}`, 'ERROR');
      return {
        name: serviceName,
        online: false,
        error: error.message,
        timestamp: Date.now()
      };
    }
  }

  async runHealthCheck() {
    this.log('HEALTH', 'Starting comprehensive health check...');
    
    const healthResults = {
      timestamp: Date.now(),
      pm2Services: {},
      workflows: {},
      scripts: {},
      system: {
        platform: os.platform(),
        arch: os.arch(),
        nodeVersion: process.version,
        memory: process.memoryUsage(),
        uptime: process.uptime()
      }
    };

    // Check PM2 services
    for (const [serviceName, serviceConfig] of Object.entries(this.config.pm2Services)) {
      if (serviceConfig.enabled) {
        healthResults.pm2Services[serviceName] = await this.checkPM2ServiceHealth(serviceName);
      }
    }

    // Check workflow status
    for (const [workflowName, workflowConfig] of Object.entries(this.config.githubWorkflows)) {
      if (workflowConfig.enabled) {
        healthResults.workflows[workflowName] = {
          enabled: workflowConfig.enabled,
          lastRun: this.state.workflowStatus[workflowName]?.lastTriggered || null,
          nextRun: this.calculateNextRun(workflowConfig.schedule),
          status: this.state.workflowStatus[workflowName]?.status || 'unknown'
        };
      }
    }

    // Check script status
    for (const [scriptName, scriptConfig] of Object.entries(this.config.automationScripts)) {
      if (scriptConfig.enabled) {
        healthResults.scripts[scriptName] = {
          enabled: scriptConfig.enabled,
          lastRun: this.state.scriptStatus[scriptName]?.lastRun || null,
          nextRun: this.calculateNextRun(scriptConfig.interval),
          lastSuccess: this.state.scriptStatus[scriptName]?.success || false
        };
      }
    }

    this.state.lastHealthCheck = Date.now();
    this.saveState();

    // Check for critical issues
    const criticalIssues = this.analyzeHealthResults(healthResults);
    if (criticalIssues.length > 0) {
      this.log('HEALTH', `Critical health issues found: ${criticalIssues.join(', ')}`, 'ERROR');
    } else {
      this.log('HEALTH', 'All systems healthy');
    }

    return healthResults;
  }

  calculateNextRun(schedule) {
    // Simple calculation for cron-like schedules
    // In a production system, you'd use a proper cron parser
    if (typeof schedule === 'number') {
      // Interval in milliseconds
      return Date.now() + schedule;
    }
    // For cron strings, you'd parse and calculate next run
    return null;
  }

  analyzeHealthResults(healthResults) {
    const issues = [];

    // Check PM2 services
    for (const [serviceName, service] of Object.entries(healthResults.pm2Services)) {
      if (!service.online) {
        issues.push(`PM2 service ${serviceName} is offline`);
      }
      if (service.memory && service.memory > this.config.monitoring.alertThresholds.memory.warning) {
        issues.push(`PM2 service ${serviceName} memory usage high: ${service.memory}MB`);
      }
    }

    // Check execution metrics
    if (this.metrics.failedExecutions > this.config.monitoring.alertThresholds.failedExecutions.warning) {
      issues.push(`High failure rate: ${this.metrics.failedExecutions} failed executions`);
    }

    return issues;
  }

  async startScheduledTasks() {
    this.log('SCHEDULER', 'Starting scheduled task scheduler...');
    
    // Schedule PM2 service health checks
    setInterval(async () => {
      await this.runHealthCheck();
    }, this.config.monitoring.healthCheckInterval);

    // Schedule automation script execution
    for (const [scriptName, scriptConfig] of Object.entries(this.config.automationScripts)) {
      if (scriptConfig.enabled) {
        setInterval(async () => {
          await this.executeScript(scriptName, scriptConfig);
        }, scriptConfig.interval);
      }
    }

    // Schedule workflow triggers (simulated)
    for (const [workflowName, workflowConfig] of Object.entries(this.config.githubWorkflows)) {
      if (workflowConfig.enabled) {
        // In a real implementation, you'd parse cron schedules and trigger accordingly
        this.log('SCHEDULER', `Scheduled workflow ${workflowName} for execution`);
      }
    }
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      config: {
        pm2Services: Object.keys(this.config.pm2Services).filter(name => this.config.pm2Services[name].enabled),
        workflows: Object.keys(this.config.githubWorkflows).filter(name => this.config.githubWorkflows[name].enabled),
        scripts: Object.keys(this.config.automationScripts).filter(name => this.config.automationScripts[name].enabled)
      },
      state: this.state
    };
  }

  printStatus() {
    const status = this.getStatus();
    console.log('\n=== Enhanced Automation Orchestrator Status ===');
    console.log(`Timestamp: ${status.timestamp}`);
    console.log(`Uptime: ${Math.floor((Date.now() - status.metrics.uptime) / 1000)} seconds`);
    console.log(`Total Executions: ${status.metrics.totalExecutions}`);
    console.log(`Success Rate: ${status.metrics.totalExecutions > 0 ? ((status.metrics.successfulExecutions / status.metrics.totalExecutions) * 100).toFixed(2) : 0}%`);
    
    console.log('\nPM2 Services:');
    for (const serviceName of status.config.pm2Services) {
      console.log(`  🟢 ${serviceName}`);
    }
    
    console.log('\nGitHub Workflows:');
    for (const workflowName of status.config.workflows) {
      console.log(`  🔄 ${workflowName}`);
    }
    
    console.log('\nAutomation Scripts:');
    for (const scriptName of status.config.scripts) {
      console.log(`  📜 ${scriptName}`);
    }
    
    console.log('\n===============================================\n');
  }

  async start() {
    this.log('ORCHESTRATOR', 'Starting Enhanced Automation Orchestrator...');
    
    try {
      await this.startScheduledTasks();
      this.log('ORCHESTRATOR', 'Enhanced Automation Orchestrator started successfully');
      
      // Keep the process alive
      setInterval(() => {
        // Periodic status update
      }, 60000);
      
    } catch (error) {
      this.log('ORCHESTRATOR', `Failed to start orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stop() {
    this.log('ORCHESTRATOR', 'Stopping Enhanced Automation Orchestrator...');
    // Cleanup logic here
    this.log('ORCHESTRATOR', 'Enhanced Automation Orchestrator stopped');
  }
}

// CLI interface
async function main() {
  const orchestrator = new EnhancedAutomationOrchestrator();
  const command = process.argv[2] || 'start';

  // Handle graceful shutdown
  const shutdown = async () => {
    console.log('\nShutting down Enhanced Automation Orchestrator...');
    await orchestrator.stop();
    setTimeout(() => {
      console.log('Shutdown complete');
      process.exit(0);
    }, 2000);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  try {
    switch (command) {
      case 'start':
        console.log('Starting Enhanced Automation Orchestrator...');
        await orchestrator.start();
        break;
        
      case 'stop':
        console.log('Stopping Enhanced Automation Orchestrator...');
        await orchestrator.stop();
        break;
        
      case 'status':
        orchestrator.printStatus();
        break;
        
      case 'health':
        const health = await orchestrator.runHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
        
      case 'execute':
        const scriptName = process.argv[3];
        if (!scriptName) {
          console.log('Usage: node enhanced-automation-orchestrator.cjs execute <script-name>');
          process.exit(1);
        }
        const scriptConfig = orchestrator.config.automationScripts[scriptName];
        if (!scriptConfig) {
          console.log(`Script ${scriptName} not found in configuration`);
          process.exit(1);
        }
        const result = await orchestrator.executeScript(scriptName, scriptConfig);
        console.log(JSON.stringify(result, null, 2));
        break;
        
      default:
        console.log('Usage: node enhanced-automation-orchestrator.cjs [start|stop|status|health|execute]');
        console.log('  start   - Start the orchestrator');
        console.log('  stop    - Stop the orchestrator');
        console.log('  status  - Show system status');
        console.log('  health  - Run health check');
        console.log('  execute <script> - Execute a specific automation script');
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

module.exports = EnhancedAutomationOrchestrator;
