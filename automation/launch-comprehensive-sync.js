#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class ComprehensiveSyncLauncher {
  constructor() {
    this.id = 'comprehensive-sync-launcher';
    this.version = '1.0.0';
    this.process = null;
    this.status = 'stopped';
    this.pidFile = path.join(__dirname, 'comprehensive-sync-pid.json');
    this.logFile = path.join(__dirname, 'comprehensive-sync-logs', 'launcher.log');
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'comprehensive-sync-logs',
      'comprehensive-sync-pids'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async launch() {
    console.log('🚀 Launching Comprehensive Sync Orchestrator...');
    
    try {
      // Check if already running
      if (this.isRunning()) {
        console.log('⚠️  Comprehensive Sync Orchestrator is already running');
        return;
      }
      
      // Start the sync process
      const syncScript = path.join(__dirname, 'comprehensive-sync-orchestrator.js');
      
      this.process = spawn('node', [syncScript], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });
      
      // Save PID
      this.savePid();
      
      // Set up event handlers
      this.setupEventHandlers();
      
      this.status = 'running';
      console.log('✅ Comprehensive Sync Orchestrator launched successfully');
      
      // Log launch
      this.log('Launched Comprehensive Sync Orchestrator');
      
    } catch (error) {
      console.error('❌ Failed to launch Comprehensive Sync Orchestrator:', error);
      this.status = 'error';
      this.log(`Launch failed: ${error.message}`);
      throw error;
    }
  }

  setupEventHandlers() {
    if (!this.process) return;
    
    this.process.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[Comprehensive Sync] ${output.trim()}`);
      this.log(`STDOUT: ${output.trim()}`);
    });
    
    this.process.stderr.on('data', (data) => {
      const output = data.toString();
      console.error(`[Comprehensive Sync ERROR] ${output.trim()}`);
      this.log(`STDERR: ${output.trim()}`);
    });
    
    this.process.on('close', (code) => {
      console.log(`[Comprehensive Sync] Process exited with code ${code}`);
      this.log(`Process exited with code ${code}`);
      this.status = 'stopped';
      this.cleanup();
    });
    
    this.process.on('error', (error) => {
      console.error(`[Comprehensive Sync] Process error:`, error);
      this.log(`Process error: ${error.message}`);
      this.status = 'error';
    });
  }

  isRunning() {
    try {
      if (fs.existsSync(this.pidFile)) {
        const pidData = JSON.parse(fs.readFileSync(this.pidFile, 'utf8'));
        const pid = pidData.pid;
        
        // Check if process is still running
        try {
          process.kill(pid, 0);
          return true;
        } catch (error) {
          // Process is not running
          this.cleanup();
          return false;
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  savePid() {
    if (this.process) {
      const pidData = {
        pid: this.process.pid,
        timestamp: new Date().toISOString(),
        launcher: this.id,
        version: this.version
      };
      
      fs.writeFileSync(this.pidFile, JSON.stringify(pidData, null, 2));
    }
  }

  cleanup() {
    if (fs.existsSync(this.pidFile)) {
      fs.unlinkSync(this.pidFile);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async stop() {
    console.log('🛑 Stopping Comprehensive Sync Orchestrator...');
    
    try {
      if (this.process) {
        this.process.kill('SIGTERM');
        
        // Wait for process to terminate
        await new Promise((resolve) => {
          setTimeout(() => {
            if (this.process && !this.process.killed) {
              this.process.kill('SIGKILL');
            }
            resolve();
          }, 5000);
        });
      }
      
      this.cleanup();
      this.status = 'stopped';
      console.log('✅ Comprehensive Sync Orchestrator stopped');
      this.log('Stopped Comprehensive Sync Orchestrator');
      
    } catch (error) {
      console.error('❌ Failed to stop Comprehensive Sync Orchestrator:', error);
      this.log(`Stop failed: ${error.message}`);
    }
  }

  getStatus() {
    return {
      id: this.id,
      version: this.version,
      status: this.status,
      isRunning: this.isRunning(),
      timestamp: new Date().toISOString()
    };
  }
}

// Auto-start if run directly
if (require.main === module) {
  const launcher = new ComprehensiveSyncLauncher();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, stopping...');
    await launcher.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, stopping...');
    await launcher.stop();
    process.exit(0);
  });
  
  launcher.launch().catch(error => {
    console.error('❌ Launcher failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveSyncLauncher;



