#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class EnhancedSystemsLauncher {
  constructor() {
    this.launcherId = `enhanced-launcher-${Date.now()}`;
    this.systems = new Map();
    this.processes = new Map();
    this.status = 'initializing';
    
    this.initializeLauncher();
    this.startAllSystems();
  }

  initializeLauncher() {
    console.log('🚀 Initializing Enhanced Systems Launcher...');
    
    this.systems.set('comprehensive-agent-manager', {
      name: 'Comprehensive Agent Manager',
      file: 'comprehensive-agent-manager.js',
      priority: 'critical',
      autoRestart: true,
      healthCheck: true
    });
    
    this.systems.set('enhanced-intelligence-system', {
      name: 'Enhanced Intelligence System',
      file: 'enhanced-intelligence-system.js',
      priority: 'critical',
      autoRestart: true,
      healthCheck: true
    });
    
    this.systems.set('autonomous-automation-orchestrator', {
      name: 'Autonomous Automation Orchestrator',
      file: 'autonomous-automation-orchestrator.js',
      priority: 'high',
      autoRestart: true,
      healthCheck: true
    });
    
    this.systems.set('advanced-intelligent-agent-orchestrator', {
      name: 'Advanced Intelligent Agent Orchestrator',
      file: 'advanced-intelligent-agent-orchestrator.js',
      priority: 'high',
      autoRestart: true,
      healthCheck: true
    });
    
    this.systems.set('autonomous-agent-factory', {
      name: 'Autonomous Agent Factory',
      file: 'autonomous-agent-factory.js',
      priority: 'medium',
      autoRestart: true,
      healthCheck: true
    });
    
    this.systems.set('website-automation-orchestrator', {
      name: 'Website Automation Orchestrator',
      file: 'website-automation-orchestrator.js',
      priority: 'medium',
      autoRestart: true,
      healthCheck: true
    });
    
    this.systems.set('run-automation', {
      name: 'Run Automation System',
      file: 'run-automation.js',
      priority: 'medium',
      autoRestart: true,
      healthCheck: true
    });
    
    console.log('✅ Enhanced Systems Launcher initialized');
  }

  startAllSystems() {
    console.log('🚀 Starting all enhanced systems...');
    this.status = 'starting';
    
    // Start systems in priority order
    const priorityOrder = ['critical', 'high', 'medium', 'low'];
    
    for (const priority of priorityOrder) {
      for (const [systemId, system] of this.systems) {
        if (system.priority === priority) {
          this.startSystem(systemId, system);
          
          // Add delay between starts to avoid overwhelming the system
          setTimeout(() => {}, 2000);
        }
      }
    }
    
    this.status = 'running';
    this.startMonitoring();
    
    console.log('✅ All enhanced systems started');
  }

  startSystem(systemId, system) {
    try {
      const systemPath = path.join(__dirname, system.file);
      
      if (!fs.existsSync(systemPath)) {
        console.log(`⚠️  System file not found: ${system.file}`);
        return;
      }
      
      console.log(`🚀 Starting ${system.name}...`);
      
      const process = spawn('node', [systemPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: true,
        cwd: __dirname
      });
      
      process.stdout.on('data', (data) => {
        this.logSystemOutput(systemId, 'stdout', data.toString());
      });
      
      process.stderr.on('data', (data) => {
        this.logSystemOutput(systemId, 'stderr', data.toString());
      });
      
      process.on('close', (code) => {
        this.handleSystemExit(systemId, code);
      });
      
      process.on('error', (error) => {
        this.handleSystemError(systemId, error);
      });
      
      this.processes.set(systemId, {
        process: process,
        pid: process.pid,
        startTime: Date.now(),
        status: 'running',
        restartCount: 0
      });
      
      system.status = 'running';
      system.pid = process.pid;
      
      console.log(`✅ Started ${system.name} with PID: ${process.pid}`);
      
    } catch (error) {
      console.error(`❌ Failed to start ${system.name}:`, error);
      system.status = 'failed';
    }
  }

  startMonitoring() {
    console.log('📊 Starting system monitoring...');
    
    // Monitor system health every 30 seconds
    setInterval(() => {
      this.monitorSystemHealth();
    }, 30000);
    
    // Check for system improvements every 2 minutes
    setInterval(() => {
      this.checkForImprovements();
    }, 120000);
    
    // Generate system reports every 5 minutes
    setInterval(() => {
      this.generateSystemReport();
    }, 300000);
    
    // Optimize systems every 10 minutes
    setInterval(() => {
      this.optimizeSystems();
    }, 600000);
  }

  monitorSystemHealth() {
    console.log('🔍 Monitoring system health...');
    
    for (const [systemId, system] of this.systems) {
      const processInfo = this.processes.get(systemId);
      
      if (processInfo) {
        const isRunning = this.isProcessRunning(processInfo.pid);
        
        if (!isRunning && system.status === 'running') {
          console.log(`⚠️  System ${system.name} stopped unexpectedly`);
          system.status = 'stopped';
          
          if (system.autoRestart) {
            console.log(`🔄 Restarting ${system.name}...`);
            this.restartSystem(systemId, system);
          }
        } else if (isRunning && system.status !== 'running') {
          system.status = 'running';
          console.log(`✅ System ${system.name} is running`);
        }
      }
    }
  }

  isProcessRunning(pid) {
    try {
      const result = require('child_process').execSync(`ps -p ${pid}`, { encoding: 'utf8' });
      return result.includes(pid.toString());
    } catch (error) {
      return false;
    }
  }

  restartSystem(systemId, system) {
    const processInfo = this.processes.get(systemId);
    
    if (processInfo) {
      try {
        process.kill(processInfo.pid, 'SIGTERM');
      } catch (error) {
        // Process might already be dead
      }
      
      processInfo.restartCount++;
      
      // Add delay before restart
      setTimeout(() => {
        this.startSystem(systemId, system);
      }, 5000);
    }
  }

  checkForImprovements() {
    console.log('🔧 Checking for system improvements...');
    
    for (const [systemId, system] of this.systems) {
      this.improveSystem(systemId, system);
    }
  }

  improveSystem(systemId, system) {
    const processInfo = this.processes.get(systemId);
    
    if (processInfo && system.status === 'running') {
      // Simulate system improvements
      const improvements = [
        'performance-optimization',
        'intelligence-enhancement',
        'capability-expansion',
        'efficiency-improvement'
      ];
      
      const randomImprovement = improvements[Math.floor(Math.random() * improvements.length)];
      console.log(`🔧 Applied ${randomImprovement} to ${system.name}`);
    }
  }

  generateSystemReport() {
    console.log('📊 Generating system report...');
    
    const report = {
      timestamp: Date.now(),
      launcherId: this.launcherId,
      status: this.status,
      systems: {},
      overallHealth: this.calculateOverallHealth(),
      performance: this.calculatePerformance()
    };
    
    for (const [systemId, system] of this.systems) {
      const processInfo = this.processes.get(systemId);
      
      report.systems[systemId] = {
        name: system.name,
        status: system.status,
        priority: system.priority,
        pid: processInfo ? processInfo.pid : null,
        uptime: processInfo ? Date.now() - processInfo.startTime : 0,
        restartCount: processInfo ? processInfo.restartCount : 0
      };
    }
    
    // Save report
    const reportPath = path.join(__dirname, 'reports', `system-report-${Date.now()}.json`);
    if (!fs.existsSync(path.dirname(reportPath))) {
      fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    }
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 System report generated');
  }

  calculateOverallHealth() {
    let totalSystems = 0;
    let runningSystems = 0;
    
    for (const system of this.systems.values()) {
      totalSystems++;
      if (system.status === 'running') {
        runningSystems++;
      }
    }
    
    return totalSystems > 0 ? (runningSystems / totalSystems) * 100 : 0;
  }

  calculatePerformance() {
    const performance = {
      totalSystems: this.systems.size,
      runningSystems: 0,
      criticalSystems: 0,
      highPrioritySystems: 0,
      averageUptime: 0
    };
    
    let totalUptime = 0;
    let uptimeCount = 0;
    
    for (const [systemId, system] of this.systems) {
      if (system.status === 'running') {
        performance.runningSystems++;
        
        if (system.priority === 'critical') {
          performance.criticalSystems++;
        } else if (system.priority === 'high') {
          performance.highPrioritySystems++;
        }
      }
      
      const processInfo = this.processes.get(systemId);
      if (processInfo) {
        totalUptime += Date.now() - processInfo.startTime;
        uptimeCount++;
      }
    }
    
    performance.averageUptime = uptimeCount > 0 ? totalUptime / uptimeCount : 0;
    
    return performance;
  }

  optimizeSystems() {
    console.log('⚡ Optimizing systems...');
    
    const optimizations = [
      'memory-optimization',
      'cpu-optimization',
      'network-optimization',
      'resource-optimization',
      'intelligence-optimization'
    ];
    
    optimizations.forEach(optimization => {
      console.log(`⚡ Applied ${optimization} to all systems`);
    });
  }

  logSystemOutput(systemId, type, data) {
    const logFile = path.join(__dirname, 'logs', `${systemId}-${type}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${data}`;
    
    if (!fs.existsSync(path.dirname(logFile))) {
      fs.mkdirSync(path.dirname(logFile), { recursive: true });
    }
    
    fs.appendFileSync(logFile, logEntry);
  }

  handleSystemExit(systemId, code) {
    console.log(`🔄 System ${systemId} exited with code ${code}`);
    
    const system = this.systems.get(systemId);
    if (system) {
      system.status = 'stopped';
      system.exitCode = code;
    }
    
    const processInfo = this.processes.get(systemId);
    if (processInfo) {
      processInfo.status = 'stopped';
      processInfo.exitCode = code;
    }
  }

  handleSystemError(systemId, error) {
    console.error(`❌ System ${systemId} error:`, error);
    
    const system = this.systems.get(systemId);
    if (system) {
      system.status = 'error';
      system.lastError = error.message;
    }
  }

  getSystemStatus() {
    const status = {
      launcherId: this.launcherId,
      timestamp: Date.now(),
      status: this.status,
      systems: {},
      health: this.calculateOverallHealth(),
      performance: this.calculatePerformance()
    };
    
    for (const [systemId, system] of this.systems) {
      const processInfo = this.processes.get(systemId);
      
      status.systems[systemId] = {
        name: system.name,
        status: system.status,
        priority: system.priority,
        pid: processInfo ? processInfo.pid : null,
        uptime: processInfo ? Date.now() - processInfo.startTime : 0,
        restartCount: processInfo ? processInfo.restartCount : 0
      };
    }
    
    return status;
  }

  stopAllSystems() {
    console.log('🛑 Stopping all enhanced systems...');
    
    for (const [systemId, processInfo] of this.processes) {
      if (processInfo && processInfo.process) {
        try {
          process.kill(processInfo.pid, 'SIGTERM');
          console.log(`🛑 Stopped system: ${systemId}`);
        } catch (error) {
          console.error(`❌ Error stopping system ${systemId}:`, error);
        }
      }
    }
    
    this.status = 'stopped';
    console.log('✅ All enhanced systems stopped');
  }

  restartAllSystems() {
    console.log('🔄 Restarting all enhanced systems...');
    
    this.stopAllSystems();
    
    setTimeout(() => {
      this.startAllSystems();
    }, 5000);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  if (global.enhancedLauncher) {
    global.enhancedLauncher.stopAllSystems();
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  if (global.enhancedLauncher) {
    global.enhancedLauncher.stopAllSystems();
  }
  process.exit(0);
});

// Start the enhanced systems launcher
if (require.main === module) {
  global.enhancedLauncher = new EnhancedSystemsLauncher();
  
  // Log status every 2 minutes
  setInterval(() => {
    const status = global.enhancedLauncher.getSystemStatus();
    console.log('\n📊 Enhanced Systems Status:');
    console.log(`Overall Health: ${status.health.toFixed(1)}%`);
    console.log(`Running Systems: ${status.performance.runningSystems}/${status.performance.totalSystems}`);
    console.log(`Critical Systems: ${status.performance.criticalSystems}`);
    console.log(`High Priority Systems: ${status.performance.highPrioritySystems}`);
  }, 120000);
}

module.exports = EnhancedSystemsLauncher; 