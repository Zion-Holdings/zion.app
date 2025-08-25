#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationCoordinator {
  constructor() {
    this.automationSystems = new Map();
    this.coordinationLog = path.join(__dirname, 'logs', 'master-coordinator.log');
    this.ensureLogDir();
    this.loadConfiguration();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.coordinationLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadConfiguration() {
    this.config = {
      systems: [
        {
          name: 'enhanced-autonomous',
          script: 'launch-enhanced-autonomous-system.cjs',
          args: ['start'],
          autoRestart: true,
          healthCheck: true,
          priority: 'high'
        },
        {
          name: 'ml-link-intelligence',
          script: 'ml-link-intelligence.cjs',
          autoRestart: true,
          healthCheck: true,
          priority: 'medium'
        },
        {
          name: 'link-health-scheduler',
          script: 'link-health-scheduler.cjs',
          autoRestart: true,
          healthCheck: true,
          priority: 'medium'
        },
        {
          name: 'performance-monitor',
          script: 'real-time-performance-monitor.cjs',
          autoRestart: true,
          healthCheck: true,
          priority: 'high'
        },
        {
          name: 'autonomous-manager',
          script: 'autonomous-system-manager.cjs',
          args: ['start'],
          autoRestart: true,
          healthCheck: true,
          priority: 'high'
        }
      ],
      coordination: {
        healthCheckInterval: 30000, // 30 seconds
        restartDelay: 5000, // 5 seconds
        maxRestartAttempts: 3,
        logRotation: true
      }
    };
  }

  async start() {
    console.log('🎯 Starting Master Automation Coordinator...');
    this.log('Master coordinator started');
    
    // Start all automation systems
    await this.startAllSystems();
    
    // Start health monitoring
    this.startHealthMonitoring();
    
    // Start log rotation
    if (this.config.coordination.logRotation) {
      this.startLogRotation();
    }
    
    console.log('✅ Master coordinator is now running');
    console.log('📊 Monitor with: npm run automation:coordinator status');
  }

  async startAllSystems() {
    console.log('🚀 Starting all automation systems...');
    
    for (const systemConfig of this.config.systems) {
      await this.startSystem(systemConfig);
      // Staggered start to avoid resource conflicts
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  async startSystem(systemConfig) {
    try {
      const scriptPath = path.join(__dirname, systemConfig.script);
      const args = systemConfig.args || [];
      
      console.log(`🔄 Starting ${systemConfig.name} (${systemConfig.priority} priority)...`);
      
      const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: true
      });

      const systemInfo = {
        config: systemConfig,
        process: child,
        startTime: new Date(),
        restartCount: 0,
        lastHealthCheck: new Date(),
        status: 'starting'
      };

      this.automationSystems.set(systemConfig.name, systemInfo);
      
      // Set up logging
      const logFile = path.join(__dirname, 'logs', `${systemConfig.name}-coordinated.log`);
      const logStream = fs.createWriteStream(logFile, { flags: 'a' });
      
      child.stdout.pipe(logStream);
      child.stderr.pipe(logStream);
      
      systemInfo.logStream = logStream;
      
      // Monitor process exit
      child.on('exit', (code, signal) => {
        this.handleSystemExit(systemConfig.name, code, signal);
      });

      // Wait a bit to see if it starts successfully
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      if (child.exitCode === null) {
        systemInfo.status = 'running';
        console.log(`✅ ${systemConfig.name} started successfully (PID: ${child.pid})`);
        this.log(`${systemConfig.name} started successfully`);
      } else {
        systemInfo.status = 'failed';
        console.log(`❌ ${systemConfig.name} failed to start`);
        this.log(`${systemConfig.name} failed to start`);
      }
      
    } catch (error) {
      console.error(`❌ Failed to start ${systemConfig.name}:`, error.message);
      this.log(`Error starting ${systemConfig.name}: ${error.message}`);
    }
  }

  handleSystemExit(systemName, code, signal) {
    const systemInfo = this.automationSystems.get(systemName);
    if (!systemInfo) return;

    console.log(`⚠️ ${systemName} exited with code ${code} (signal: ${signal})`);
    this.log(`${systemName} exited: code=${code}, signal=${signal}`);

    systemInfo.status = 'stopped';
    systemInfo.logStream.end();

    if (systemInfo.config.autoRestart && systemInfo.restartCount < this.config.coordination.maxRestartAttempts) {
      console.log(`🔄 Auto-restarting ${systemName} in ${this.config.coordination.restartDelay/1000}s...`);
      this.log(`Auto-restarting ${systemName} (attempt ${systemInfo.restartCount + 1})`);
      
      setTimeout(() => {
        this.restartSystem(systemName);
      }, this.config.coordination.restartDelay);
    } else if (systemInfo.restartCount >= this.config.coordination.maxRestartAttempts) {
      console.log(`🚫 ${systemName} exceeded max restart attempts, manual intervention required`);
      this.log(`${systemName} exceeded max restart attempts`);
    }
  }

  async restartSystem(systemName) {
    const systemInfo = this.automationSystems.get(systemName);
    if (!systemInfo) return;

    systemInfo.restartCount++;
    console.log(`🔄 Restarting ${systemName} (attempt ${systemInfo.restartCount})`);
    
    // Remove old process info
    this.automationSystems.delete(systemName);
    
    // Start fresh
    await this.startSystem(systemInfo.config);
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.performHealthChecks();
    }, this.config.coordination.healthCheckInterval);
    
    console.log(`🔍 Health monitoring started (${this.config.coordination.healthCheckInterval/1000}s intervals)`);
  }

  async performHealthChecks() {
    for (const [systemName, systemInfo] of this.automationSystems) {
      if (!systemInfo.config.healthCheck) continue;
      
      try {
        const isAlive = systemInfo.process.exitCode === null;
        const uptime = Date.now() - systemInfo.startTime.getTime();
        
        if (isAlive) {
          systemInfo.status = 'running';
          systemInfo.lastHealthCheck = new Date();
          
          // Log if uptime is significant
          if (uptime > 300000) { // 5 minutes
            this.log(`${systemName} healthy - uptime: ${Math.floor(uptime/1000)}s`);
          }
        } else {
          systemInfo.status = 'stopped';
          console.log(`⚠️ Health check: ${systemName} is not running`);
          this.log(`Health check failed for ${systemName}`);
        }
      } catch (error) {
        console.error(`❌ Health check error for ${systemName}:`, error.message);
        this.log(`Health check error for ${systemName}: ${error.message}`);
      }
    }
  }

  startLogRotation() {
    // Rotate logs daily
    setInterval(() => {
      this.rotateLogs();
    }, 24 * 60 * 60 * 1000); // 24 hours
    
    console.log('📄 Log rotation scheduled (daily)');
  }

  rotateLogs() {
    const logDir = path.dirname(this.coordinationLog);
    const timestamp = new Date().toISOString().split('T')[0];
    
    try {
      for (const [systemName, systemInfo] of this.automationSystems) {
        if (systemInfo.logStream) {
          const oldLogFile = path.join(logDir, `${systemName}-coordinated.log`);
          const newLogFile = path.join(logDir, `${systemName}-coordinated-${timestamp}.log`);
          
          if (fs.existsSync(oldLogFile)) {
            fs.renameSync(oldLogFile, newLogFile);
            // Create new log stream
            systemInfo.logStream = fs.createWriteStream(oldLogFile, { flags: 'a' });
          }
        }
      }
      
      this.log(`Log rotation completed for ${timestamp}`);
    } catch (error) {
      console.error('❌ Log rotation failed:', error.message);
      this.log(`Log rotation failed: ${error.message}`);
    }
  }

  async stop() {
    console.log('🛑 Stopping Master Automation Coordinator...');
    this.log('Master coordinator stopping');
    
    // Stop all automation systems
    for (const [systemName, systemInfo] of this.automationSystems) {
      try {
        console.log(`🛑 Stopping ${systemName}...`);
        systemInfo.process.kill('SIGTERM');
        systemInfo.logStream.end();
        console.log(`✅ ${systemName} stopped`);
      } catch (error) {
        console.error(`❌ Failed to stop ${systemName}:`, error.message);
      }
    }
    
    this.automationSystems.clear();
    console.log('✅ Master coordinator stopped');
  }

  async status() {
    console.log('📊 Master Automation Coordinator Status');
    console.log('=====================================');
    
    const summary = {
      total: this.automationSystems.size,
      running: 0,
      stopped: 0,
      failed: 0
    };

    for (const [systemName, systemInfo] of this.automationSystems) {
      const uptime = Date.now() - systemInfo.startTime.getTime();
      const uptimeStr = this.formatUptime(uptime);
      
      let status = '❓ Unknown';
      if (systemInfo.status === 'running') {
        status = '🟢 Running';
        summary.running++;
      } else if (systemInfo.status === 'stopped') {
        status = '🔴 Stopped';
        summary.stopped++;
      } else if (systemInfo.status === 'failed') {
        status = '❌ Failed';
        summary.failed++;
      }
      
      console.log(`${status} ${systemName}`);
      console.log(`   Priority: ${systemInfo.config.priority}`);
      console.log(`   PID: ${systemInfo.process.pid}`);
      console.log(`   Uptime: ${uptimeStr}`);
      console.log(`   Restarts: ${systemInfo.restartCount}`);
      console.log(`   Last Health Check: ${systemInfo.lastHealthCheck.toLocaleTimeString()}`);
      console.log('');
    }

    console.log('📋 Summary');
    console.log(`Total Systems: ${summary.total}`);
    console.log(`Running: ${summary.running}`);
    console.log(`Stopped: ${summary.stopped}`);
    console.log(`Failed: ${summary.failed}`);
    
    if (summary.running === summary.total) {
      console.log('\n🎉 All systems are running optimally!');
    } else {
      console.log('\n⚠️ Some systems need attention');
    }
  }

  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.coordinationLog, logEntry);
    } catch (error) {
      console.error('Failed to write to coordination log:', error.message);
    }
  }
}

// CLI handling
async function main() {
  const coordinator = new MasterAutomationCoordinator();
  const command = process.argv[2] || 'start';

  try {
    switch (command) {
      case 'start':
        await coordinator.start();
        // Keep the process running
        process.on('SIGINT', async () => {
          console.log('\n🛑 Received SIGINT, shutting down gracefully...');
          await coordinator.stop();
          process.exit(0);
        });
        break;
      case 'stop':
        await coordinator.stop();
        break;
      case 'status':
        await coordinator.status();
        break;
      default:
        console.log('Usage: node master-automation-coordinator.js [start|stop|status]');
        process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MasterAutomationCoordinator;
