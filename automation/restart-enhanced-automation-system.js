#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

class EnhancedAutomationSystemRestarter {
  constructor() {
    this.systemId = `enhanced-restarter-${Date.now()}`;
    this.pidFiles = [];
    this.runningProcesses = new Map();
    
    this.initializeRestarter();
  }

  initializeRestarter() {
    console.log('🔄 Initializing Enhanced Automation System Restarter...');
    
    this.systemPath = path.join(__dirname, 'enhanced-restart-system');
    if (!fs.existsSync(this.systemPath)) {
      fs.mkdirSync(this.systemPath, { recursive: true });
    }
    
    this.performEnhancedRestart();
  }

  async performEnhancedRestart() {
    console.log('🚀 Performing Enhanced Automation System Restart...');
    
    try {
      // Step 1: Stop all current automation processes
      await this.stopAllCurrentProcesses();
      
      // Step 2: Clean up PID files
      await this.cleanupPidFiles();
      
      // Step 3: Start enhanced intelligent automation system
      await this.startEnhancedIntelligentSystem();
      
      // Step 4: Verify system health
      await this.verifySystemHealth();
      
      console.log('🎉 Enhanced Automation System Restart completed successfully!');
      console.log('📊 Restart Status:', this.getRestartStatus());
      
    } catch (error) {
      console.error('❌ Error during enhanced restart:', error);
      this.handleRestartError(error);
    }
  }

  async stopAllCurrentProcesses() {
    console.log('🛑 Stopping all current automation processes...');
    
    // Find all PID files
    const pidsDir = path.join(__dirname, 'pids');
    if (fs.existsSync(pidsDir)) {
      const pidFiles = fs.readdirSync(pidsDir).filter(file => file.endsWith('.pid'));
      
      for (const pidFile of pidFiles) {
        await this.stopProcessFromPidFile(path.join(pidsDir, pidFile));
      }
    }
    
    // Kill any remaining node processes related to automation
    await this.killRemainingAutomationProcesses();
    
    console.log('✅ All current processes stopped');
  }

  async stopProcessFromPidFile(pidFilePath) {
    try {
      const pid = fs.readFileSync(pidFilePath, 'utf8').trim();
      const processName = path.basename(pidFilePath, '.pid');
      
      console.log(`🛑 Stopping process ${processName} (PID: ${pid})...`);
      
      // Check if process is still running
      const isRunning = await this.isProcessRunning(pid);
      
      if (isRunning) {
        // Try graceful shutdown first
        await this.killProcessGracefully(pid);
        
        // Wait a bit and check if still running
        await this.delay(2000);
        
        if (await this.isProcessRunning(pid)) {
          // Force kill if still running
          await this.killProcessForcefully(pid);
        }
      }
      
      // Remove PID file
      if (fs.existsSync(pidFilePath)) {
        fs.unlinkSync(pidFilePath);
        console.log(`✅ Removed PID file: ${processName}`);
      }
      
    } catch (error) {
      console.error(`❌ Error stopping process from PID file ${pidFilePath}:`, error);
    }
  }

  async isProcessRunning(pid) {
    return new Promise((resolve) => {
      exec(`ps -p ${pid}`, (error, stdout) => {
        resolve(!error && stdout.trim().length > 0);
      });
    });
  }

  async killProcessGracefully(pid) {
    return new Promise((resolve) => {
      exec(`kill -TERM ${pid}`, (error) => {
        if (error) {
          console.log(`⚠️ Could not send SIGTERM to PID ${pid}:`, error.message);
        }
        resolve();
      });
    });
  }

  async killProcessForcefully(pid) {
    return new Promise((resolve) => {
      exec(`kill -KILL ${pid}`, (error) => {
        if (error) {
          console.log(`⚠️ Could not send SIGKILL to PID ${pid}:`, error.message);
        } else {
          console.log(`💀 Force killed process PID ${pid}`);
        }
        resolve();
      });
    });
  }

  async killRemainingAutomationProcesses() {
    console.log('🔍 Finding and killing remaining automation processes...');
    
    return new Promise((resolve) => {
      exec("ps aux | grep -E '(node.*automation|enhanced-content-generator)' | grep -v grep", (error, stdout) => {
        if (stdout.trim()) {
          const lines = stdout.trim().split('\n');
          lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            if (parts.length > 1) {
              const pid = parts[1];
              console.log(`🛑 Killing remaining automation process PID ${pid}...`);
              this.killProcessForcefully(pid);
            }
          });
        }
        resolve();
      });
    });
  }

  async cleanupPidFiles() {
    console.log('🧹 Cleaning up PID files...');
    
    const pidsDir = path.join(__dirname, 'pids');
    if (fs.existsSync(pidsDir)) {
      const files = fs.readdirSync(pidsDir);
      
      for (const file of files) {
        if (file.endsWith('.pid')) {
          const filePath = path.join(pidsDir, file);
          try {
            fs.unlinkSync(filePath);
            console.log(`✅ Removed PID file: ${file}`);
          } catch (error) {
            console.error(`❌ Error removing PID file ${file}:`, error);
          }
        }
      }
    }
    
    console.log('✅ PID files cleanup completed');
  }

  async startEnhancedIntelligentSystem() {
    console.log('🚀 Starting Enhanced Intelligent Automation System...');
    
    try {
      // Start the enhanced intelligent system launcher
      const launcherPath = path.join(__dirname, 'launch-enhanced-intelligent-system.js');
      
      if (!fs.existsSync(launcherPath)) {
        throw new Error('Enhanced intelligent system launcher not found');
      }
      
      const process = spawn('node', [launcherPath], {
        stdio: 'pipe',
        detached: false
      });
      
      // Store process information
      this.runningProcesses.set('enhanced-intelligent-launcher', {
        process: process,
        startTime: new Date().toISOString(),
        status: 'starting'
      });
      
      // Handle process events
      process.stdout.on('data', (data) => {
        console.log(`🚀 Enhanced Launcher: ${data.toString().trim()}`);
      });
      
      process.stderr.on('data', (data) => {
        console.error(`❌ Enhanced Launcher Error: ${data.toString().trim()}`);
      });
      
      process.on('close', (code) => {
        console.log(`🔄 Enhanced Launcher process exited with code ${code}`);
        this.handleProcessExit('enhanced-intelligent-launcher', code);
      });
      
      process.on('error', (error) => {
        console.error('❌ Enhanced Launcher process error:', error);
        this.handleProcessError('enhanced-intelligent-launcher', error);
      });
      
      // Wait for system to start
      await this.delay(5000);
      
      // Update status
      const procInfo = this.runningProcesses.get('enhanced-intelligent-launcher');
      if (procInfo) {
        procInfo.status = 'running';
      }
      
      console.log('✅ Enhanced Intelligent System started successfully');
      
    } catch (error) {
      console.error('❌ Error starting enhanced intelligent system:', error);
      throw error;
    }
  }

  async verifySystemHealth() {
    console.log('🏥 Verifying enhanced system health...');
    
    // Wait for system to stabilize
    await this.delay(10000);
    
    // Check if processes are running
    let healthyProcesses = 0;
    let totalProcesses = this.runningProcesses.size;
    
    this.runningProcesses.forEach((procInfo, name) => {
      if (procInfo.process && !procInfo.process.killed && procInfo.status === 'running') {
        healthyProcesses++;
        console.log(`✅ ${name} is healthy`);
      } else {
        console.log(`⚠️ ${name} needs attention`);
      }
    });
    
    const healthScore = totalProcesses > 0 ? healthyProcesses / totalProcesses : 0;
    
    if (healthScore >= 0.8) {
      console.log(`✅ Enhanced system health verified: ${(healthScore * 100).toFixed(1)}%`);
    } else {
      console.log(`⚠️ Enhanced system health degraded: ${(healthScore * 100).toFixed(1)}%`);
      await this.performRecovery();
    }
  }

  async performRecovery() {
    console.log('🔄 Performing enhanced system recovery...');
    
    // Restart failed processes
    this.runningProcesses.forEach((procInfo, name) => {
      if (procInfo.status !== 'running') {
        console.log(`🔄 Restarting ${name}...`);
        this.restartProcess(name);
      }
    });
    
    // Wait for recovery
    await this.delay(5000);
    
    // Verify recovery
    await this.verifySystemHealth();
  }

  handleProcessExit(processName, code) {
    console.log(`🔄 Process ${processName} exited with code ${code}`);
    
    const procInfo = this.runningProcesses.get(processName);
    if (procInfo) {
      procInfo.status = 'stopped';
      procInfo.lastExitCode = code;
      procInfo.lastExitTime = new Date().toISOString();
    }
  }

  handleProcessError(processName, error) {
    console.error(`❌ Process ${processName} error:`, error);
    
    const procInfo = this.runningProcesses.get(processName);
    if (procInfo) {
      procInfo.status = 'error';
      procInfo.lastError = error.message;
      procInfo.lastErrorTime = new Date().toISOString();
    }
  }

  restartProcess(processName) {
    console.log(`🔄 Restarting ${processName}...`);
    
    const procInfo = this.runningProcesses.get(processName);
    if (procInfo) {
      // Kill existing process if running
      if (procInfo.process && !procInfo.process.killed) {
        procInfo.process.kill('SIGTERM');
      }
      
      // Restart the process
      if (processName === 'enhanced-intelligent-launcher') {
        this.startEnhancedIntelligentSystem();
      }
      
      procInfo.status = 'restarting';
    }
  }

  handleRestartError(error) {
    console.error('🚨 Enhanced restart error detected:', error);
    this.recordRestartError('restart-error', error);
    
    setTimeout(() => {
      console.log('🔄 Attempting enhanced restart recovery...');
      this.performEnhancedRestart();
    }, 15000);
  }

  recordRestartError(context, error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      context,
      error: error.message,
      stack: error.stack,
      systemId: this.systemId
    };
    
    const errorLogPath = path.join(this.systemPath, 'restart-error-logs.json');
    let errorLogs = [];
    
    try {
      if (fs.existsSync(errorLogPath)) {
        errorLogs = JSON.parse(fs.readFileSync(errorLogPath, 'utf8'));
      }
    } catch (e) {
      // File doesn't exist or is invalid, start fresh
    }
    
    errorLogs.push(errorLog);
    fs.writeFileSync(errorLogPath, JSON.stringify(errorLogs, null, 2));
  }

  getRestartStatus() {
    return {
      systemId: this.systemId,
      status: 'completed',
      startTime: new Date().toISOString(),
      processes: {
        total: this.runningProcesses.size,
        running: Array.from(this.runningProcesses.values()).filter(p => p.status === 'running').length,
        stopped: Array.from(this.runningProcesses.values()).filter(p => p.status === 'stopped').length,
        error: Array.from(this.runningProcesses.values()).filter(p => p.status === 'error').length
      }
    };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Start the enhanced automation system restarter
const restarter = new EnhancedAutomationSystemRestarter();

// Handle shutdown signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  process.exit(0);
});

console.log('🔄 Enhanced Automation System Restarter ready!');
