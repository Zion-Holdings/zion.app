#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class EnhancedIntelligentSystemLauncher {
  constructor() {
    this.systemId = `enhanced-intelligent-launcher-${Date.now()}`;
    this.processes = new Map();
    this.config = {
      enhancedOrchestrator: {
        enabled: true,
        priority: 'critical',
        autoRestart: true,
        restartDelay: 5000
      },
      monitoring: {
        enabled: true,
        healthCheckInterval: '2m',
        performanceCheckInterval: '5m'
      }
    };
    
    this.initializeLauncher();
  }

  initializeLauncher() {
    console.log('🚀 Initializing Enhanced Intelligent System Launcher...');
    
    this.systemPath = path.join(__dirname, 'enhanced-intelligent-system');
    if (!fs.existsSync(this.systemPath)) {
      fs.mkdirSync(this.systemPath, { recursive: true });
    }
    
    this.startEnhancedSystem();
  }

  async startEnhancedSystem() {
    console.log('🎯 Starting Enhanced Intelligent Automation System...');
    
    try {
      // Start the enhanced intelligent orchestrator
      await this.startEnhancedOrchestrator();
      
      // Start monitoring
      this.startMonitoring();
      
      console.log('🎉 Enhanced Intelligent System Launcher is now running!');
      console.log('📊 Launcher Status:', this.getLauncherStatus());
      
    } catch (error) {
      console.error('❌ Error starting enhanced intelligent system:', error);
      this.handleLauncherError(error);
    }
  }

  async startEnhancedOrchestrator() {
    console.log('🧠 Starting Enhanced Intelligent Orchestrator...');
    
    try {
      const orchestratorPath = path.join(__dirname, 'enhanced-intelligent-automation-orchestrator.js');
      
      if (!fs.existsSync(orchestratorPath)) {
        throw new Error('Enhanced intelligent orchestrator not found');
      }
      
      const process = spawn('node', [orchestratorPath], {
        stdio: 'pipe',
        detached: false
      });
      
      // Store process information
      this.processes.set('enhanced-orchestrator', {
        process: process,
        startTime: new Date().toISOString(),
        restartCount: 0,
        status: 'running'
      });
      
      // Handle process events
      process.stdout.on('data', (data) => {
        console.log(`🧠 Enhanced Orchestrator: ${data.toString().trim()}`);
      });
      
      process.stderr.on('data', (data) => {
        console.error(`❌ Enhanced Orchestrator Error: ${data.toString().trim()}`);
      });
      
      process.on('close', (code) => {
        console.log(`🔄 Enhanced Orchestrator process exited with code ${code}`);
        this.handleProcessExit('enhanced-orchestrator', code);
      });
      
      process.on('error', (error) => {
        console.error('❌ Enhanced Orchestrator process error:', error);
        this.handleProcessError('enhanced-orchestrator', error);
      });
      
      console.log('✅ Enhanced Intelligent Orchestrator started successfully');
      
    } catch (error) {
      console.error('❌ Error starting enhanced orchestrator:', error);
      throw error;
    }
  }

  startMonitoring() {
    console.log('📊 Starting Enhanced System Monitoring...');
    
    // Health monitoring
    setInterval(() => {
      this.monitorSystemHealth();
    }, 2 * 60 * 1000); // Every 2 minutes
    
    // Performance monitoring
    setInterval(() => {
      this.monitorSystemPerformance();
    }, 5 * 60 * 1000); // Every 5 minutes
    
    console.log('✅ Enhanced system monitoring started');
  }

  monitorSystemHealth() {
    console.log('🏥 Monitoring enhanced system health...');
    
    this.processes.forEach((procInfo, name) => {
      if (procInfo.process && !procInfo.process.killed) {
        console.log(`✅ ${name} is healthy`);
      } else {
        console.log(`⚠️ ${name} needs attention`);
        this.restartProcess(name);
      }
    });
  }

  monitorSystemPerformance() {
    console.log('⚡ Monitoring enhanced system performance...');
    
    const performance = {
      activeProcesses: Array.from(this.processes.values()).filter(p => p.status === 'running').length,
      totalProcesses: this.processes.size,
      uptime: this.calculateUptime()
    };
    
    console.log('📊 Enhanced system performance:', performance);
  }

  handleProcessExit(processName, code) {
    console.log(`🔄 Process ${processName} exited with code ${code}`);
    
    const procInfo = this.processes.get(processName);
    if (procInfo) {
      procInfo.status = 'stopped';
      procInfo.lastExitCode = code;
      procInfo.lastExitTime = new Date().toISOString();
      
      if (this.config.enhancedOrchestrator.autoRestart && procInfo.restartCount < 3) {
        console.log(`🔄 Restarting ${processName} in ${this.config.enhancedOrchestrator.restartDelay}ms...`);
        setTimeout(() => {
          this.restartProcess(processName);
        }, this.config.enhancedOrchestrator.restartDelay);
      }
    }
  }

  handleProcessError(processName, error) {
    console.error(`❌ Process ${processName} error:`, error);
    
    const procInfo = this.processes.get(processName);
    if (procInfo) {
      procInfo.status = 'error';
      procInfo.lastError = error.message;
      procInfo.lastErrorTime = new Date().toISOString();
    }
  }

  restartProcess(processName) {
    console.log(`🔄 Restarting ${processName}...`);
    
    const procInfo = this.processes.get(processName);
    if (procInfo) {
      // Kill existing process if running
      if (procInfo.process && !procInfo.process.killed) {
        procInfo.process.kill('SIGTERM');
      }
      
      // Restart the process
      if (processName === 'enhanced-orchestrator') {
        this.startEnhancedOrchestrator();
      }
      
      procInfo.restartCount++;
      procInfo.status = 'restarting';
    }
  }

  handleLauncherError(error) {
    console.error('🚨 Enhanced launcher error detected:', error);
    this.recordLauncherError('launcher-error', error);
    
    setTimeout(() => {
      console.log('🔄 Attempting enhanced launcher recovery...');
      this.startEnhancedSystem();
    }, 10000);
  }

  recordLauncherError(context, error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      context,
      error: error.message,
      stack: error.stack,
      systemId: this.systemId
    };
    
    const errorLogPath = path.join(this.systemPath, 'launcher-error-logs.json');
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

  getLauncherStatus() {
    return {
      systemId: this.systemId,
      status: 'running',
      startTime: new Date().toISOString(),
      uptime: this.calculateUptime(),
      processes: {
        total: this.processes.size,
        running: Array.from(this.processes.values()).filter(p => p.status === 'running').length,
        stopped: Array.from(this.processes.values()).filter(p => p.status === 'stopped').length,
        error: Array.from(this.processes.values()).filter(p => p.status === 'error').length
      },
      config: this.config
    };
  }

  calculateUptime() {
    const startTime = new Date();
    const now = new Date();
    const uptimeMs = now - startTime;
    const uptimeHours = uptimeMs / (1000 * 60 * 60);
    
    return Math.round(uptimeHours * 100) / 100;
  }

  shutdown() {
    console.log('🛑 Shutting down enhanced intelligent system launcher...');
    
    this.processes.forEach((procInfo, name) => {
      if (procInfo.process && !procInfo.process.killed) {
        console.log(`🛑 Stopping ${name}...`);
        procInfo.process.kill('SIGTERM');
      }
    });
    
    setTimeout(() => {
      console.log('✅ Enhanced intelligent system launcher shutdown complete');
      process.exit(0);
    }, 5000);
  }
}

// Start the enhanced intelligent system launcher
const launcher = new EnhancedIntelligentSystemLauncher();

// Handle shutdown signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  launcher.shutdown();
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  launcher.shutdown();
});

console.log('🚀 Enhanced Intelligent System Launcher ready!');
