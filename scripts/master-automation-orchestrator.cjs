#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');

class MasterAutomationOrchestrator {
  constructor() {
    this.automations = {
      aiCodeReview: {
        name: 'AI Code Review',
        script: 'ai-code-review-automation.cjs',
        status: 'stopped',
        process: null,
        config: {
          enabled: true,
          autoStart: true,
          interval: 5 * 60 * 1000 // 5 minutes
        }
      },
      performanceOptimization: {
        name: 'Performance Optimization',
        script: 'performance-optimization-automation.cjs',
        status: 'stopped',
        process: null,
        config: {
          enabled: true,
          autoStart: true,
          interval: 10 * 60 * 1000 // 10 minutes
        }
      },
      securityMonitoring: {
        name: 'Security Monitoring',
        script: 'security-monitoring-automation.cjs',
        status: 'stopped',
        process: null,
        config: {
          enabled: true,
          autoStart: true,
          interval: 15 * 60 * 1000 // 15 minutes
        }
      },
      uxEnhancement: {
        name: 'UX Enhancement',
        script: 'ux-enhancement-automation.cjs',
        status: 'stopped',
        process: null,
        config: {
          enabled: true,
          autoStart: true,
          interval: 20 * 60 * 1000 // 20 minutes
        }
      },
      databaseHealth: {
        name: 'Database Health',
        script: 'database-health-automation.cjs',
        status: 'stopped',
        process: null,
        config: {
          enabled: true,
          autoStart: true,
          interval: 30 * 60 * 1000 // 30 minutes
        }
      }
    };
    
    this.isRunning = false;
    this.startTime = null;
    this.logs = [];
    this.config = {
      logRetention: 1000, // Keep last 1000 log entries
      healthCheckInterval: 60 * 1000, // 1 minute
      autoRestart: true,
      maxRestartAttempts: 3
    };
  }

  async start() {
    console.log(chalk.blue('🎯 Master Automation Orchestrator Starting...'));
    this.isRunning = true;
    this.startTime = new Date();
    
    // Start all enabled automations
    for (const [key, automation] of Object.entries(this.automations)) {
      if (automation.config.enabled && automation.config.autoStart) {
        await this.startAutomation(key);
      }
    }
    
    // Start health monitoring
    this.startHealthMonitoring();
    
    // Start dashboard
    this.startDashboard();
    
    console.log(chalk.green('✅ Master Automation Orchestrator started successfully'));
    this.log('Master orchestrator started', 'info');
  }

  async stop() {
    console.log(chalk.yellow('🛑 Stopping Master Automation Orchestrator...'));
    this.isRunning = false;
    
    // Stop all automations
    for (const [key, automation] of Object.entries(this.automations)) {
      if (automation.status === 'running') {
        await this.stopAutomation(key);
      }
    }
    
    console.log(chalk.green('✅ Master Automation Orchestrator stopped'));
    this.log('Master orchestrator stopped', 'info');
  }

  async startAutomation(key) {
    const automation = this.automations[key];
    
    if (automation.status === 'running') {
      console.log(chalk.yellow(`⚠️  ${automation.name} is already running`));
      return;
    }
    
    try {
      console.log(chalk.blue(`🚀 Starting ${automation.name}...`));
      
      const scriptPath = path.join(__dirname, automation.script);
      
      if (!fs.existsSync(scriptPath)) {
        throw new Error(`Script not found: ${scriptPath}`);
      }
      
      automation.process = spawn('node', [scriptPath, 'start'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });
      
      automation.status = 'running';
      automation.startTime = new Date();
      automation.restartAttempts = 0;
      
      // Handle process events
      automation.process.stdout.on('data', (data) => {
        const output = data.toString().trim();
        this.log(`${automation.name}: ${output}`, 'info');
      });
      
      automation.process.stderr.on('data', (data) => {
        const error = data.toString().trim();
        this.log(`${automation.name} Error: ${error}`, 'error');
      });
      
      automation.process.on('close', (code) => {
        this.log(`${automation.name} process exited with code ${code}`, 'warn');
        automation.status = 'stopped';
        automation.process = null;
        
        // Auto-restart if enabled
        if (this.config.autoRestart && automation.restartAttempts < this.config.maxRestartAttempts) {
          automation.restartAttempts++;
          setTimeout(() => {
            if (this.isRunning) {
              this.startAutomation(key);
            }
          }, 5000); // Wait 5 seconds before restart
        }
      });
      
      automation.process.on('error', (error) => {
        this.log(`${automation.name} process error: ${error.message}`, 'error');
        automation.status = 'error';
      });
      
      console.log(chalk.green(`✅ ${automation.name} started successfully`));
      this.log(`${automation.name} started`, 'info');
      
    } catch (error) {
      console.error(chalk.red(`❌ Failed to start ${automation.name}:`), error.message);
      automation.status = 'error';
      this.log(`Failed to start ${automation.name}: ${error.message}`, 'error');
    }
  }

  async stopAutomation(key) {
    const automation = this.automations[key];
    
    if (automation.status !== 'running' || !automation.process) {
      console.log(chalk.yellow(`⚠️  ${automation.name} is not running`));
      return;
    }
    
    try {
      console.log(chalk.yellow(`🛑 Stopping ${automation.name}...`));
      
      automation.process.kill('SIGTERM');
      
      // Wait for graceful shutdown
      setTimeout(() => {
        if (automation.process && automation.status === 'running') {
          automation.process.kill('SIGKILL');
        }
      }, 5000);
      
      automation.status = 'stopping';
      this.log(`${automation.name} stopping`, 'info');
      
    } catch (error) {
      console.error(chalk.red(`❌ Failed to stop ${automation.name}:`), error.message);
      this.log(`Failed to stop ${automation.name}: ${error.message}`, 'error');
    }
  }

  async restartAutomation(key) {
    const automation = this.automations[key];
    
    console.log(chalk.blue(`🔄 Restarting ${automation.name}...`));
    
    if (automation.status === 'running') {
      await this.stopAutomation(key);
      
      // Wait for process to stop
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    await this.startAutomation(key);
  }

  startHealthMonitoring() {
    this.healthInterval = setInterval(() => {
      if (this.isRunning) {
        this.performHealthCheck();
      }
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    const healthStatus = {
      timestamp: new Date().toISOString(),
      automations: {},
      overall: 'healthy'
    };
    
    let unhealthyCount = 0;
    
    for (const [key, automation] of Object.entries(this.automations)) {
      const status = {
        status: automation.status,
        uptime: automation.startTime ? Date.now() - automation.startTime.getTime() : 0,
        restartAttempts: automation.restartAttempts || 0,
        healthy: automation.status === 'running'
      };
      
      healthStatus.automations[key] = status;
      
      if (!status.healthy) {
        unhealthyCount++;
      }
    }
    
    if (unhealthyCount > 0) {
      healthStatus.overall = unhealthyCount === Object.keys(this.automations).length ? 'critical' : 'warning';
    }
    
    // Log health status
    if (healthStatus.overall !== 'healthy') {
      this.log(`Health check: ${healthStatus.overall} (${unhealthyCount} unhealthy automations)`, 'warn');
    }
    
    // Save health status
    await this.saveHealthStatus(healthStatus);
  }

  async saveHealthStatus(status) {
    const statusPath = path.join(__dirname, '..', 'logs', 'master-automation-health.json');
    fs.mkdirSync(path.dirname(statusPath), { recursive: true });
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
  }

  startDashboard() {
    const dashboardPort = 3010;
    
    try {
      const dashboard = spawn('node', ['-e', `
        const http = require('http');
        const fs = require('fs');
        const path = require('path');
        
        const server = http.createServer((req, res) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          
          const statusPath = path.join(__dirname, '..', 'logs', 'master-automation-health.json');
          let status = { overall: 'unknown', automations: {} };
          
          if (fs.existsSync(statusPath)) {
            status = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
          }
          
          const html = \`
            <!DOCTYPE html>
            <html>
            <head>
              <title>Master Automation Dashboard</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .status { padding: 10px; margin: 10px 0; border-radius: 5px; }
                .healthy { background-color: #d4edda; color: #155724; }
                .warning { background-color: #fff3cd; color: #856404; }
                .critical { background-color: #f8d7da; color: #721c24; }
                .automation { margin: 10px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
                .running { border-left: 5px solid #28a745; }
                .stopped { border-left: 5px solid #dc3545; }
                .error { border-left: 5px solid #ffc107; }
              </style>
            </head>
            <body>
              <h1>🎯 Master Automation Dashboard</h1>
              <div class="status \${status.overall}">
                <h2>Overall Status: \${status.overall.toUpperCase()}</h2>
                <p>Last Updated: \${status.timestamp}</p>
              </div>
              
              <h3>Automation Status</h3>
              \${Object.entries(status.automations).map(([key, auto]) => \`
                <div class="automation \${auto.status}">
                  <h4>\${key}</h4>
                  <p>Status: \${auto.status}</p>
                  <p>Uptime: \${Math.floor(auto.uptime / 1000 / 60)} minutes</p>
                  <p>Restart Attempts: \${auto.restartAttempts}</p>
                </div>
              \`).join('')}
              
              <script>
                setTimeout(() => location.reload(), 30000);
              </script>
            </body>
            </html>
          \`;
          
          res.end(html);
        });
        
        server.listen(${dashboardPort}, () => {
          console.log('Dashboard running on http://localhost:${dashboardPort}');
        });
      `], { stdio: 'pipe' });
      
      this.dashboardProcess = dashboard;
      console.log(chalk.blue(`📊 Dashboard started at http://localhost:${dashboardPort}`));
      
    } catch (error) {
      console.error(chalk.red('❌ Failed to start dashboard:'), error.message);
    }
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message
    };
    
    this.logs.push(logEntry);
    
    // Keep only recent logs
    if (this.logs.length > this.config.logRetention) {
      this.logs = this.logs.slice(-this.config.logRetention);
    }
    
    // Save logs to file
    this.saveLogs();
  }

  saveLogs() {
    const logsPath = path.join(__dirname, '..', 'logs', 'master-automation-logs.json');
    fs.mkdirSync(path.dirname(logsPath), { recursive: true });
    fs.writeFileSync(logsPath, JSON.stringify(this.logs, null, 2));
  }

  getStatus() {
    const status = {
      isRunning: this.isRunning,
      startTime: this.startTime,
      automations: {},
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0
    };
    
    for (const [key, automation] of Object.entries(this.automations)) {
      status.automations[key] = {
        name: automation.name,
        status: automation.status,
        enabled: automation.config.enabled,
        autoStart: automation.config.autoStart,
        uptime: automation.startTime ? Date.now() - automation.startTime.getTime() : 0,
        restartAttempts: automation.restartAttempts || 0
      };
    }
    
    return status;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalAutomations: Object.keys(this.automations).length,
        runningAutomations: Object.values(this.automations).filter(a => a.status === 'running').length,
        stoppedAutomations: Object.values(this.automations).filter(a => a.status === 'stopped').length,
        errorAutomations: Object.values(this.automations).filter(a => a.status === 'error').length
      },
      automations: this.automations,
      logs: this.logs.slice(-100), // Last 100 log entries
      health: await this.getHealthStatus()
    };
    
    const reportPath = path.join(__dirname, '..', 'logs', 'master-automation-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }

  async getHealthStatus() {
    const healthPath = path.join(__dirname, '..', 'logs', 'master-automation-health.json');
    
    if (fs.existsSync(healthPath)) {
      return JSON.parse(fs.readFileSync(healthPath, 'utf8'));
    }
    
    return { overall: 'unknown', automations: {} };
  }

  enableAutomation(key) {
    if (this.automations[key]) {
      this.automations[key].config.enabled = true;
      console.log(chalk.green(`✅ ${this.automations[key].name} enabled`));
      this.log(`${this.automations[key].name} enabled`, 'info');
    } else {
      console.error(chalk.red(`❌ Automation '${key}' not found`));
    }
  }

  disableAutomation(key) {
    if (this.automations[key]) {
      this.automations[key].config.enabled = false;
      console.log(chalk.yellow(`⚠️  ${this.automations[key].name} disabled`));
      this.log(`${this.automations[key].name} disabled`, 'info');
      
      // Stop if running
      if (this.automations[key].status === 'running') {
        this.stopAutomation(key);
      }
    } else {
      console.error(chalk.red(`❌ Automation '${key}' not found`));
    }
  }

  listAutomations() {
    console.log(chalk.blue('\n📋 Available Automations:'));
    console.log(chalk.blue('='.repeat(50)));
    
    for (const [key, automation] of Object.entries(this.automations)) {
      const status = automation.status === 'running' ? 
        chalk.green('🟢 RUNNING') : 
        automation.status === 'stopped' ? 
        chalk.red('🔴 STOPPED') : 
        chalk.yellow('🟡 ERROR');
      
      console.log(`${chalk.cyan(key)}: ${automation.name} - ${status}`);
      console.log(`  Enabled: ${automation.config.enabled ? chalk.green('Yes') : chalk.red('No')}`);
      console.log(`  Auto-start: ${automation.config.autoStart ? chalk.green('Yes') : chalk.red('No')}`);
      
      if (automation.startTime) {
        const uptime = Math.floor((Date.now() - automation.startTime.getTime()) / 1000 / 60);
        console.log(`  Uptime: ${uptime} minutes`);
      }
      
      console.log('');
    }
  }
}

// CLI Interface
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  const command = process.argv[2];
  const automationKey = process.argv[3];
  
  switch (command) {
    case 'start':
      orchestrator.start();
      break;
    case 'stop':
      orchestrator.stop();
      break;
    case 'status':
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case 'list':
      orchestrator.listAutomations();
      break;
    case 'start-automation':
      if (automationKey) {
        orchestrator.startAutomation(automationKey);
      } else {
        console.error(chalk.red('❌ Please specify automation key'));
      }
      break;
    case 'stop-automation':
      if (automationKey) {
        orchestrator.stopAutomation(automationKey);
      } else {
        console.error(chalk.red('❌ Please specify automation key'));
      }
      break;
    case 'restart-automation':
      if (automationKey) {
        orchestrator.restartAutomation(automationKey);
      } else {
        console.error(chalk.red('❌ Please specify automation key'));
      }
      break;
    case 'enable':
      if (automationKey) {
        orchestrator.enableAutomation(automationKey);
      } else {
        console.error(chalk.red('❌ Please specify automation key'));
      }
      break;
    case 'disable':
      if (automationKey) {
        orchestrator.disableAutomation(automationKey);
      } else {
        console.error(chalk.red('❌ Please specify automation key'));
      }
      break;
    case 'report':
      orchestrator.generateReport().then(report => {
        console.log(chalk.green('📊 Report generated successfully'));
        console.log(JSON.stringify(report.summary, null, 2));
      });
      break;
    default:
      console.log(`
🎯 Master Automation Orchestrator

Usage:
  node master-automation-orchestrator.cjs [command] [automation-key]

Commands:
  start                    - Start all automations
  stop                     - Stop all automations
  status                   - Show current status
  list                     - List all automations
  start-automation <key>   - Start specific automation
  stop-automation <key>    - Stop specific automation
  restart-automation <key> - Restart specific automation
  enable <key>             - Enable automation
  disable <key>            - Disable automation
  report                   - Generate status report

Automation Keys:
  aiCodeReview             - AI Code Review Automation
  performanceOptimization  - Performance Optimization Automation
  securityMonitoring       - Security Monitoring Automation
  uxEnhancement           - UX Enhancement Automation
  databaseHealth          - Database Health Automation

Examples:
  node master-automation-orchestrator.cjs start
  node master-automation-orchestrator.cjs list
  node master-automation-orchestrator.cjs start-automation aiCodeReview
  node master-automation-orchestrator.cjs status
      `);
  }
}

module.exports = MasterAutomationOrchestrator; 