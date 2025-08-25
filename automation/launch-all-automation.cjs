#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AllAutomationLauncher {
  constructor() {
    this.processes = new Map();
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDir();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  async start() {
    console.log('🚀 Starting all Zion automation systems...');
    
    const systems = [
      { name: 'enhanced-autonomous', script: 'launch-enhanced-autonomous-system.cjs', args: ['start'] },
      { name: 'ml-link-intelligence', script: 'ml-link-intelligence.cjs' },
      { name: 'link-health-scheduler', script: 'link-health-scheduler.cjs' },
      { name: 'performance-monitor', script: 'real-time-performance-monitor.cjs' },
      { name: 'autonomous-manager', script: 'autonomous-system-manager.cjs', args: ['start'] }
    ];

    for (const system of systems) {
      await this.startSystem(system);
      // Small delay between starts
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('✅ All automation systems started!');
    console.log('📊 Check status with: npm run automation:status');
  }

  async startSystem(system) {
    try {
      const scriptPath = path.join(__dirname, system.script);
      const args = system.args || [];
      
      console.log(`🔄 Starting ${system.name}...`);
      
      const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: true
      });

      const logFile = path.join(this.logDir, `${system.name}.log`);
      const logStream = fs.createWriteStream(logFile, { flags: 'a' });

      child.stdout.pipe(logStream);
      child.stderr.pipe(logStream);

      this.processes.set(system.name, {
        process: child,
        logStream,
        startTime: new Date()
      });

      console.log(`✅ ${system.name} started (PID: ${child.pid})`);
    } catch (error) {
      console.error(`❌ Failed to start ${system.name}:`, error.message);
    }
  }

  async stop() {
    console.log('🛑 Stopping all automation systems...');
    
    for (const [name, info] of this.processes) {
      try {
        console.log(`🔄 Stopping ${name}...`);
        info.process.kill('SIGTERM');
        info.logStream.end();
        console.log(`✅ ${name} stopped`);
      } catch (error) {
        console.error(`❌ Failed to stop ${name}:`, error.message);
      }
    }
    
    this.processes.clear();
    console.log('✅ All automation systems stopped!');
  }

  async status() {
    console.log('🔍 Checking automation systems status...');
    
    if (this.processes.size === 0) {
      console.log('📊 No automation systems are currently running');
      return;
    }

    for (const [name, info] of this.processes) {
      const uptime = Date.now() - info.startTime.getTime();
      const uptimeStr = this.formatUptime(uptime);
      
      try {
        // Check if process is still alive
        const isAlive = info.process.exitCode === null;
        const status = isAlive ? '🟢 Running' : '🔴 Stopped';
        
        console.log(`${status} ${name}`);
        console.log(`   PID: ${info.process.pid}`);
        console.log(`   Uptime: ${uptimeStr}`);
        console.log(`   Log: ${path.join(this.logDir, `${name}.log`)}`);
        console.log('');
      } catch (error) {
        console.log(`❌ ${name} - Error checking status: ${error.message}`);
      }
    }
  }

  async report() {
    console.log('📊 Generating automation systems report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systems: [],
      summary: {
        total: 0,
        running: 0,
        stopped: 0
      }
    };

    for (const [name, info] of this.processes) {
      const uptime = Date.now() - info.startTime.getTime();
      const isAlive = info.process.exitCode === null;
      
      report.systems.push({
        name,
        pid: info.process.pid,
        status: isAlive ? 'running' : 'stopped',
        uptime: uptime,
        startTime: info.startTime.toISOString()
      });

      report.summary.total++;
      if (isAlive) {
        report.summary.running++;
      } else {
        report.summary.stopped++;
      }
    }

    console.log('📋 Automation Systems Report');
    console.log('============================');
    console.log(`Total Systems: ${report.summary.total}`);
    console.log(`Running: ${report.summary.running}`);
    console.log(`Stopped: ${report.summary.stopped}`);
    console.log('');
    
    for (const system of report.systems) {
      const status = system.status === 'running' ? '🟢' : '🔴';
      const uptime = this.formatUptime(system.uptime);
      console.log(`${status} ${system.name} (PID: ${system.pid}) - ${uptime}`);
    }

    // Save report to file
    const reportFile = path.join(this.logDir, 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    console.log(`\n📄 Full report saved to: ${reportFile}`);
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
}

// CLI handling
async function main() {
  const launcher = new AllAutomationLauncher();
  const command = process.argv[2] || 'start';

  try {
    switch (command) {
      case 'start':
        await launcher.start();
        break;
      case 'stop':
        await launcher.stop();
        break;
      case 'status':
        await launcher.status();
        break;
      case 'report':
        await launcher.report();
        break;
      default:
        console.log('Usage: node launch-all-automation.cjs [start|stop|status|report]');
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

module.exports = AllAutomationLauncher;
