#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutomationLauncher {
  constructor() {
    this.processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'automation-launcher.log');
    this.ensureLogDirectory();
    this.startTime = Date.now();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startSystem(name, scriptPath, args = [], options = {}) {
    try {
      this.log(`🚀 Starting ${name}...`);
      
      const child = spawn('node', [scriptPath, ...args], {
        stdio: 'pipe',
        detached: false,
        ...options
      });

      child.stdout.on('data', (data) => {
        this.log(`[${name}] ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        this.log(`[${name}] ERROR: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        this.log(`[${name}] Process exited with code ${code}`);
        this.processes.delete(name);
      });

      child.on('error', (error) => {
        this.log(`[${name}] Process error: ${error.message}`);
        this.processes.delete(name);
      });

      this.processes.set(name, child);
      this.log(`✅ ${name} started successfully`);
      
      return child;
    } catch (error) {
      this.log(`❌ Failed to start ${name}: ${error.message}`);
      return null;
    }
  }

  async startAllSystems() {
    this.log('🚀 Starting all automation systems...');
    
    const systems = [
      { name: 'intelligent-orchestrator', script: 'intelligent-orchestrator.cjs', args: ['continuous'] },
      { name: 'automation-dashboard', script: 'automation-dashboard.cjs', args: ['start'] },
      { name: 'lint-monitor', script: 'lint-monitor.cjs', args: ['start'] },
      { name: 'code-quality', script: 'code-quality-monitor.cjs', args: [] },
      { name: 'performance', script: 'performance-optimizer.cjs', args: [] },
      { name: 'security-scanner', script: 'security-scanner.cjs', args: [] },
      { name: 'seo-optimizer', script: 'seo-optimizer.cjs', args: [] },
      { name: 'test-generator', script: 'test-generator.cjs', args: [] }
    ];

    for (const system of systems) {
      const scriptPath = path.join(__dirname, system.script);
      if (fs.existsSync(scriptPath)) {
        await this.startSystem(system.name, scriptPath, system.args || []);
        
        // Add delay between starts
        await this.sleep(2000);
      } else {
        this.log(`⚠️ Script not found: ${system.script}`);
      }
    }

    this.log(`📊 Started ${this.processes.size} automation systems`);
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all automation systems...');
    
    for (const [name, process] of this.processes) {
      this.log(`🛑 Stopping ${name}...`);
      process.kill('SIGTERM');
    }
    
    this.processes.clear();
    this.log('✅ All systems stopped');
  }

  getStatus() {
    const status = {
      running: this.processes.size,
      systems: Array.from(this.processes.keys()),
      totalSystems: this.processes.size
    };
    
    this.log(`📊 Status: ${status.running} systems running`);
    this.log(`📊 Systems: ${status.systems.join(', ')}`);
    
    return status;
  }

  async restartSystem(name) {
    const process = this.processes.get(name);
    if (process) {
      this.log(`🔄 Restarting ${name}...`);
      process.kill('SIGTERM');
      await this.sleep(1000);
    }
    
    const scriptPath = path.join(__dirname, `${name}.cjs`);
    if (fs.existsSync(scriptPath)) {
      await this.startSystem(name, scriptPath);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      runningSystems: Array.from(this.processes.keys()),
      totalSystems: this.processes.size,
      uptime: this.getUptime()
    };

    const reportPath = path.join(__dirname, 'logs', 'automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  getUptime() {
    // Simple uptime calculation
    return Date.now() - this.startTime;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async monitor() {
    this.log('👀 Starting automation monitoring...');
    
    setInterval(() => {
      this.log(`📊 Monitoring: ${this.processes.size} systems running`);
      
      for (const [name, process] of this.processes) {
        if (process.killed) {
          this.log(`⚠️ ${name} has stopped, restarting...`);
          this.restartSystem(name);
        }
      }
    }, 30000); // Check every 30 seconds
  }
}

// CLI handling
const launcher = new AutomationLauncher();
const command = process.argv[2];

switch (command) {
  case 'start':
    launcher.startAllSystems();
    break;
  case 'stop':
    launcher.stopAllSystems();
    process.exit(0);
    break;
  case 'status':
    launcher.getStatus();
    process.exit(0);
    break;
  case 'restart':
    const systemName = process.argv[3];
    if (systemName) {
      launcher.restartSystem(systemName);
    } else {
      console.log('Usage: node launch-all-automation.cjs restart <system-name>');
    }
    break;
  case 'report':
    launcher.generateReport();
    process.exit(0);
    break;
  case 'monitor':
    launcher.monitor();
    break;
  default:
    console.log('Usage: node launch-all-automation.cjs [start|stop|status|restart|report|monitor] [system-name]');
    console.log('\nCommands:');
    console.log('  start     - Start all automation systems');
    console.log('  stop      - Stop all automation systems');
    console.log('  status    - Show current status');
    console.log('  restart   - Restart a specific system');
    console.log('  report    - Generate automation report');
    console.log('  monitor   - Start monitoring mode');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});
