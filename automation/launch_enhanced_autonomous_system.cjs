#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class EnhancedAutonomousSystem {
  constructor() {
    this.logDir = path.join(__dirname, 'autonomous-systems-logs');
    this.pidDir = path.join(__dirname, 'autonomous-systems-pids');
    this.statusDir = path.join(__dirname, 'status');
    
    // Ensure directories exist
    [this.logDir, this.pidDir, this.statusDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log('🚀 Launching Enhanced Autonomous System...');
    
    const systems = [
      'comprehensive-sync-orchestrator.js',
      'master-sync-controller.js',
      'high-frequency-git-sync.js',
      'git-sync-automation.js',
      'syntax-error-monitor.js',
      'continuous-syntax-fix.js',
      'code-quality-automation-system.js'
    ];

    for (const system of systems) {
      await this.launchSystem(system);
    }

    console.log('✅ Enhanced Autonomous System launched successfully!');
  }

  async launchSystem(systemName) {
    const systemPath = path.join(__dirname, systemName);
    
    if (!fs.existsSync(systemPath)) {
      console.log(`⚠️  System not found: ${systemName}`);
      return;
    }

    const logFile = path.join(this.logDir, `${systemName.replace('.js', '')}.log`);
    const pidFile = path.join(this.pidDir, `${systemName.replace('.js', '')}.pid`);
    const statusFile = path.join(this.statusDir, `${systemName.replace('.js', '')}.status`);

    // Check if already running
    if (fs.existsSync(pidFile)) {
      const pid = fs.readFileSync(pidFile, 'utf8').trim();
      try {
        process.kill(pid, 0); // Check if process exists
        console.log(`⏸️  ${systemName} already running (PID: ${pid})`);
        return;
      } catch (error) {
        // Process not running, remove stale PID file
        fs.unlinkSync(pidFile);
      }
    }

    console.log(`🚀 Starting ${systemName}...`);

    const child = spawn('node', [systemPath], {
      detached: true,
      stdio: ['ignore', 'pipe', 'pipe']
    });

    // Save PID
    fs.writeFileSync(pidFile, child.pid.toString());
    
    // Update status
    fs.writeFileSync(statusFile, JSON.stringify({
      status: 'running',
      pid: child.pid,
      started: new Date().toISOString()
    }));

    // Handle output
    child.stdout.on('data', (data) => {
      fs.appendFileSync(logFile, data.toString());
    });

    child.stderr.on('data', (data) => {
      fs.appendFileSync(logFile, `ERROR: ${data.toString()}`);
    });

    child.on('exit', (code) => {
      console.log(`🛑 ${systemName} exited with code ${code}`);
      if (fs.existsSync(pidFile)) {
        fs.unlinkSync(pidFile);
      }
      fs.writeFileSync(statusFile, JSON.stringify({
        status: 'stopped',
        exitCode: code,
        stopped: new Date().toISOString()
      }));
    });

    console.log(`✅ ${systemName} started (PID: ${child.pid})`);
  }

  status() {
    console.log('📊 Enhanced Autonomous System Status:');
    
    const systems = [
      'comprehensive-sync-orchestrator',
      'master-sync-controller', 
      'high-frequency-git-sync',
      'git-sync-automation',
      'syntax-error-monitor',
      'continuous-syntax-fix',
      'code-quality-automation-system'
    ];

    for (const system of systems) {
      const statusFile = path.join(this.statusDir, `${system}.status`);
      const pidFile = path.join(this.pidDir, `${system}.pid`);
      
      if (fs.existsSync(statusFile)) {
        const status = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
        const statusIcon = status.status === 'running' ? '🟢' : '🔴';
        console.log(`${statusIcon} ${system}: ${status.status}`);
      } else {
        console.log(`⚪ ${system}: not started`);
      }
    }
  }

  stop() {
    console.log('🛑 Stopping Enhanced Autonomous System...');
    
    const pidFiles = fs.readdirSync(this.pidDir);
    
    for (const pidFile of pidFiles) {
      const pidPath = path.join(this.pidDir, pidFile);
      const pid = fs.readFileSync(pidPath, 'utf8').trim();
      
      try {
        process.kill(parseInt(pid), 'SIGTERM');
        console.log(`🛑 Stopped process ${pid} (${pidFile})`);
        fs.unlinkSync(pidPath);
      } catch (error) {
        console.log(`⚠️  Process ${pid} not found or already stopped`);
        if (fs.existsSync(pidPath)) {
          fs.unlinkSync(pidPath);
        }
      }
    }
    
    console.log('✅ Enhanced Autonomous System stopped');
  }
}

// CLI handling
const command = process.argv[2] || 'start';

const system = new EnhancedAutonomousSystem();

switch (command) {
  case 'start':
    system.start();
    break;
  case 'status':
    system.status();
    break;
  case 'stop':
    system.stop();
    break;
  default:
    console.log('Usage: npm run autonomous <start|status|stop>');
    process.exit(1);
}
