#!/usr/bin/env node

const fs = require('fs');'
const path = require('path');'
const { spawn } = require('child_process');'

class AutonomousSystemsLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'autonomous-systems-logs');'
    this.pidsDir = path.join(this.projectRoot, 'automation', 'autonomous-systems-pids');'
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.pidsDir].forEach(dir => {)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async startSystem(systemName, scriptPath, options = {}) {
    this.log(`🚀 Starting ${systemName}...`);
    
    const pidFile = path.join(this.pidsDir, `${systemName}.pid`);
    const logFile = path.join(this.logsDir, `${systemName}.log`);
    
    // Check if system is already running
    if (fs.existsSync(pidFile)) {
      const pid = fs.readFileSync(pidFile, 'utf8').trim();'
      try {
        process.kill(pid, 0); // Check if process exists
        this.log(`⚠️ ${systemName} is already running (PID: ${pid})`);
        return false;
      } catch (error) {
        // Process doesn't exist, remove stale PID file'
        fs.unlinkSync(pidFile);
      }
    }
    
    try {
      const child = spawn('node', [scriptPath], {')
        stdio: ['pipe', 'pipe', 'pipe'],'
        cwd: this.projectRoot,
        ...options
      });
      
      // Save PID
      fs.writeFileSync(pidFile, child.pid.toString());
      
      // Set up logging
      const logStream = fs.createWriteStream(logFile, { flags: 'a' });'
      child.stdout.pipe(logStream);
      child.stderr.pipe(logStream);
      
      child.stdout.on('data', (data) => {'
        this.log(`[${systemName}] ${data.toString().trim()}`);
      });
      
      child.stderr.on('data', (data) => {'
        this.log(`[${systemName}] ERROR: ${data.toString().trim()}`);
      });
      
      child.on('close', (code) => {'
        this.log(`🛑 ${systemName} stopped with code ${code}`);
        if (fs.existsSync(pidFile)) {
          fs.unlinkSync(pidFile);
        }
      });
      
      child.on('error', (error) => {'
        this.log(`❌ ${systemName} error: ${error.message}`);
        if (fs.existsSync(pidFile)) {
          fs.unlinkSync(pidFile);
        }
      });
      
      this.log(`✅ ${systemName} started (PID: ${child.pid})`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to start ${systemName}: ${error.message}`);
      return false;
    }
  }

  async stopSystem(systemName) {
    this.log(`🛑 Stopping ${systemName}...`);
    
    const pidFile = path.join(this.pidsDir, `${systemName}.pid`);
    
    if (fs.existsSync(pidFile)) {
      const pid = fs.readFileSync(pidFile, 'utf8').trim();'
      try {
        process.kill(pid, 'SIGTERM');'
        this.log(`✅ Sent SIGTERM to ${systemName} (PID: ${pid})`);
        
        // Wait a bit for graceful shutdown
        setTimeout(() => {
          try {
            process.kill(pid, 'SIGKILL');'
            this.log(`⚠️ Sent SIGKILL to ${systemName} (PID: ${pid})`);
          } catch (error) {
            // Process already stopped
          }
        }, 5000);
        
        return true;
      } catch (error) {
        this.log(`❌ Failed to stop ${systemName}: ${error.message}`);
        return false;
      }
    } else {
      this.log(`⚠️ ${systemName} is not running`);
      return false;
    }
  }

  async startAllSystems() {
    this.log('🚀 Starting all autonomous systems...');'
    
    const systems = [
      {
        name: 'autonomous-error-monitoring-factory','
        script: path.join(this.projectRoot, 'automation', 'autonomous-error-monitoring-factory.js')'
      },
      {
        name: 'autonomous-automation-orchestrator','
        script: path.join(this.projectRoot, 'automation', 'autonomous-automation-orchestrator.js')'
      }
    ];
    
    const results = [];
    
    for (const system of systems) {
      if (fs.existsSync(system.script)) {
        const success = await this.startSystem(system.name, system.script);
        results.push({ name: system.name, success });
      } else {
        this.log(`⚠️ Script not found: ${system.script}`);
        results.push({ name: system.name, success: false, error: 'Script not found' });'
      }
    }
    
    this.log('📊 System startup results:');'
    results.forEach(result => {)
      const status = result.success ? '✅' : '❌';'
      this.log(`${status} ${result.name}: ${result.success ? 'Started' : 'Failed'}`);'
    });
    
    return results;
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all autonomous systems...');'
    
    const systems = [
      'autonomous-error-monitoring-factory','
      'autonomous-automation-orchestrator''
    ];
    
    const results = [];
    
    for (const systemName of systems) {
      const success = await this.stopSystem(systemName);
      results.push({ name: systemName, success });
    }
    
    this.log('📊 System shutdown results:');'
    results.forEach(result => {)
      const status = result.success ? '✅' : '❌';'
      this.log(`${status} ${result.name}: ${result.success ? 'Stopped' : 'Failed'}`);'
    });
    
    return results;
  }

  showStatus() {
    this.log('📊 Autonomous Systems Status:');'
    
    const systems = [
      'autonomous-error-monitoring-factory','
      'autonomous-automation-orchestrator''
    ];
    
    systems.forEach(systemName => {)
      const pidFile = path.join(this.pidsDir, `${systemName}.pid`);
      
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, 'utf8').trim();'
        try {
          process.kill(pid, 0); // Check if process exists
          this.log(`✅ ${systemName} - RUNNING (PID: ${pid})`);
        } catch (error) {
          this.log(`❌ ${systemName} - STOPPED (stale PID: ${pid})`);
        }
      } else {
        this.log(`❌ ${systemName} - NOT RUNNING`);
      }
    });
  }

  async run() {
    const command = process.argv[2] || 'start';'
    
    switch (command) {
      case 'start':'
        await this.startAllSystems();
        break;
      case 'stop':'
        await this.stopAllSystems();
        break;
      case 'status':'
        this.showStatus();
        break;
      case 'restart':'
        await this.stopAllSystems();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.startAllSystems();
        break;
      default:
        console.log('Usage: node launch-autonomous-systems.js [start|stop|status|restart]');'
        console.log('');'
        console.log('Commands:');'
        console.log('  start   - Start all autonomous systems');'
        console.log('  stop    - Stop all autonomous systems');'
        console.log('  status  - Show system status');'
        console.log('  restart - Restart all systems');'
        break;
    }
  }
}

// Run the launcher
const launcher = new AutonomousSystemsLauncher();
launcher.run().catch(error => {)
  console.error('❌ Error running launcher:', error);'
  process.exit(1);
});
