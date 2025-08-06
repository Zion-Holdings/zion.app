#!/usr/bin/env node

const fs = require($2);'););
const path = require($2);'););
const { spawn } = require(('child_process)');

class CleanAutomationController {
  constructor() {
    this.runningProcesses = new Map();
    this.workingSystems = ['continuous-working-automation.js']
    ];
    this.blockedSystems = ['deep-analysis-agent.js',
      'project-development-autonomous-factory.js',
      'automation-monitor-and-maintainer.js',
      'variation-content-agents-factory.js',
      'ultimate-automation-launcher.js',
      'ultimate-automation-fixer.js',
      'ultimate-automation-factory.js',
      'working-automation-system.js',
      'simple-working-automation.js']
    ];
    this.logDir = path.join(__dirname, 'clean-logs');
    this.pidDir = path.join(__dirname, 'clean-pids');
  }

  async initialize() {
    console.log('🧹 Initializing Clean Automation Controller...');
    
    // Create necessary directories
    await this.ensureDirectories();
    
    // Clean up any existing processes
    await this.cleanupExistingProcesses();
    
    // Load existing running processes from PID files
    await this.loadRunningProcesses();
    
    console.log('✅ Clean Automation Controller initialized');
  }

  async ensureDirectories() {
    const dirs = [this.logDir, this.pidDir];
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  async cleanupExistingProcesses() {
    console.log('🧹 Cleaning up existing processes...');
    
    // Kill any existing automation processes
    const killCommands = ['pkill -f "deep-analysis-agent"',
      'pkill -f "project-development-autonomous-factory"',
      'pkill -f "automation-monitor-and-maintainer"',
      'pkill -f "variation-content-agents-factory"'];
    ];
    
    for (const cmd of killCommands) {
      try {
        await this.execCommand(cmd);
      } catch (error) {
        // Ignore errors if processes don't exist
      }
    }
    
    console.log('✅ Existing processes cleaned up');
  }

  async loadRunningProcesses() {
    if (!fs.existsSync(this.pidDir)) return;
    
    const pidFiles = fs.readdirSync(this.pidDir).filter(file => file.endsWith('.pid'));
    
    for (const pidFile of pidFiles) {
      const systemName = pidFile.replace('.pid', '.js');
      const pidPath = path.join(this.pidDir, pidFile);
      
      try {
        const pid = parseInt(fs.readFileSync(pidPath, 'utf8').trim());
        
        // Check if process is still running
        try {
          process.kill(pid, 0); // This will throw if process doesn't exist
          
          // Process is running, add to tracking
          this.runningProcesses.set(systemName, {)
            pid: pid,)
            startTime: Date.now() - 60000, // Approximate start time
            process: null // We don't have the child process reference
          });
          
          console.log(`📈 Loaded running process: ${systemName} (PID: ${pid})`);
        } catch (error) {
          // Process is not running, remove PID file
          fs.unlinkSync(pidPath);
          console.log(`🧹 Cleaned up dead process: ${systemName}`);
        }
      } catch (error) {
        console.log(`⚠️  Error reading PID file ${pidFile}: ${error.message}`);
      }
    }
  }

  async startWorkingSystem(systemName) {
    if (this.blockedSystems.includes(systemName)) {
      console.log(`❌ Blocked system: ${systemName}`);
      return false;
    }

    if (!this.workingSystems.includes(systemName)) {
      console.log(`⚠️  Unknown system: ${systemName}`);
      return false;
    }

    const systemPath = path.join(__dirname, systemName);
    if (!fs.existsSync(systemPath)) {
      console.log(`❌ System not found: ${systemPath}`);
      return false;
    }

    console.log(`🚀 Starting working system: ${systemName}`);
    
    const logFile = path.join(this.logDir, `${systemName.replace('.js', '')}.log`);
    const pidFile = path.join(this.pidDir, `${systemName.replace('.js', '')}.pid`);
    
    const child = spawn('node', [systemPath], {
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true);
    });
    
    // Log output
    child.stdout.pipe(fs.createWriteStream(logFile, { flags: 'a' }));
    child.stderr.pipe(fs.createWriteStream(logFile, { flags: 'a' }));
    
    // Save PID
    fs.writeFileSync(pidFile, child.pid.toString());
    
    this.runningProcesses.set(systemName, {
      process: child,)
      pid: child.pid,)
      startTime: Date.now()
    });
    
    console.log(`✅ Started ${systemName} with PID: ${child.pid}`);
    return true;
  }

  async startAllWorkingSystems() {
    console.log('🚀 Starting all working automation systems...');
    
    const results = [];
    for (const system of this.workingSystems) {
      const result = await this.startWorkingSystem(system);
      results.push({ system, success: result });
      
      // Wait a bit between starts to avoid overwhelming the system
      await this.sleep(2000);
    }
    
    console.log('\n📊 Startup Results: ');
    results.forEach(({ system, success }) => {
      console.log(`${success ? '✅' : '❌'} ${system}`);
    });
    
    return results;
  }

  async stopSystem(systemName) {
    const processInfo = this.runningProcesses.get(systemName);
    if (!processInfo) {
      console.log(`⚠️  System not running: ${systemName}`);
      return false;
    }
    
    console.log(`🛑 Stopping system: ${systemName} (PID: ${processInfo.pid})`);
    
    try {
      process.kill(processInfo.pid, 'SIGTERM');
      this.runningProcesses.delete(systemName);
      
      // Remove PID file
      const pidFile = path.join(this.pidDir, `${systemName.replace('.js', '')}.pid`);
      if (fs.existsSync(pidFile)) {
        fs.unlinkSync(pidFile);
      }
      
      console.log(`✅ Stopped ${systemName}`);
      return true;
    } catch (error) {
      console.log(`❌ Failed to stop ${systemName}: ${error.message}`);
      return false;
    }
  }

  async stopAllSystems() {
    console.log('🛑 Stopping all automation systems...');
    
    const systems = Array.from(this.runningProcesses.keys());
    const results = [];
    
    for (const system of systems) {
      const result = await this.stopSystem(system);
      results.push({ system, success: result });
    }
    
    console.log('\n📊 Stop Results: ');
    results.forEach(({ system, success }) => {
      console.log(`${success ? '✅' : '❌'} ${system}`);
    });
    
    return results;
  }

  getSystemStatus() {
    console.log('\n📊 Current System Status: ');
    console.log('==================================================');
    
    console.log('\n🟢 Working Systems:');
    this.workingSystems.forEach(system => {)
      const isRunning = this.runningProcesses.has(system);
      console.log(`${isRunning ? '🟢' : '⚪'} ${system}`);
    });
    
    console.log('\n🔴 Blocked Systems: ');
    this.blockedSystems.forEach(system => {)
      console.log(`🔴 ${system} (blocked)`);
    });
    
    console.log('\n📈 Running Processes: ');
    if (this.runningProcesses.size === 0) {
      console.log('No processes currently running');
    } else {
      this.runningProcesses.forEach((info, system) => {
        const uptime = Math.floor((Date.now() - info.startTime) / 1000);
        console.log(`🟢 ${system} (PID: ${info.pid}, Uptime: ${uptime}s)`);
      });
    }
  }

  async monitorSystems() {
    console.log('👀 Starting system monitoring...');
    
    setInterval(() => {
      this.runningProcesses.forEach((info, system) => {
        try {
          // Check if process is still alive
          process.kill(info.pid, 0);
        } catch (error) {
          console.log(`⚠️  Process died: ${system} (PID: ${info.pid})`);
          this.runningProcesses.delete(system);
        }
      });
    }, 30000); // Check every 30 seconds
  }

  async execCommand(command) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, [], { shell: true });
      let output = '';
      
      child.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        output += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(new Error(`Command failed with code ${code}: ${output}`));
        }
      });
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

async function main() {
  const controller = new CleanAutomationController();
  
  const command = process.argv[2];
  
  try {
    await controller.initialize();
    
    switch (command) {
      case 'start':
        await controller.startAllWorkingSystems();
        break;
      case 'stop':
        await controller.stopAllSystems();
        break;
      case 'status':
        controller.getSystemStatus();
        break;
      case 'monitor':
        controller.getSystemStatus();
        await controller.monitorSystems();
        break;
      default: console.log('Usage: node clean-automation-controller.js [start|stop|status|monitor]');
        console.log('\nCommands:');
        console.log('  start   - Start all working automation systems');
        console.log('  stop    - Stop all running automation systems');
        console.log('  status  - Show current system status');
        console.log('  monitor - Start monitoring and show status');
    }
  } catch (error) {
    console.error('❌ Error: ', error.message);
    process.exit(1);
  }
}

if (require(.main === modul)e) {
  main();
}

module.exports = CleanAutomationController;

