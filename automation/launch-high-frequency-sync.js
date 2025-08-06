#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class HighFrequencySyncLauncher {
  constructor() {
    this.id = 'high-frequency-sync-launcher';
    this.version = '1.0.0';
    this.process = null;
    this.status = 'stopped';
    this.pidFile = path.join(__dirname, 'high-frequency-sync-pid.json');
    this.logFile = path.join(__dirname, 'high-frequency-sync-logs', 'launcher.log');
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'high-frequency-sync-logs',
      'high-frequency-sync-pids'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async launch() {
    console.log('🚀 Launching High Frequency Git Sync...');
    
    try {
      // Check if already running
      if (this.isRunning()) {
        console.log('⚠️  High Frequency Git Sync is already running');
        return;
      }
      
      // Start the sync process
      const syncScript = path.join(__dirname, 'high-frequency-git-sync.js');
      
      this.process = spawn('node', [syncScript], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });
      
      // Save PID
      this.savePid();
      
      // Set up event handlers
      this.setupEventHandlers();
      
      this.status = 'running';
      console.log('✅ High Frequency Git Sync launched successfully');
      
      // Log launch
      this.log('Launched High Frequency Git Sync');
      
    } catch (error) {
      console.error('❌ Failed to launch High Frequency Git Sync:', error);
      this.status = 'error';
      this.log(`Launch failed: ${error.message}`);
      throw error;
    }
  }

  setupEventHandlers() {
    if (!this.process) return;
    
    this.process.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[High Frequency Sync] ${output.trim()}`);
      this.log(`STDOUT: ${output.trim()}`);
    });
    
    this.process.stderr.on('data', (data) => {
      const output = data.toString();
      console.error(`[High Frequency Sync ERROR] ${output.trim()}`);
      this.log(`STDERR: ${output.trim()}`);
    });
    
    this.process.on('close', (code) => {
      console.log(`[High Frequency Sync] Process exited with code ${code}`);
      this.log(`Process exited with code ${code}`);
      this.status = 'stopped';
      this.cleanup();
    });
    
    this.process.on('error', (error) => {
      console.error(`[High Frequency Sync] Process error:`, error);
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
    console.log('🛑 Stopping High Frequency Git Sync...');
    
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
      console.log('✅ High Frequency Git Sync stopped');
      this.log('Stopped High Frequency Git Sync');
      
    } catch (error) {
      console.error('❌ Failed to stop High Frequency Git Sync:', error);
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
  const launcher = new HighFrequencySyncLauncher();
  
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

module.exports = HighFrequencySyncLauncher;



