#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class IntelligentAutomationLauncher {
  constructor() {
    this.automationSystems = [
      {
        name: 'ultimate-intelligent-automation-system',
        script: 'ultimate-intelligent-automation-system.js',
        priority: 'critical',
        description: 'Ultimate intelligent automation system with advanced AI capabilities',
        capabilities: ['intelligence', 'diversification', 'growth', 'innovation'],
        isRunning: false,
        pid: null
      },
      {
        name: 'enhanced-intelligent-automation-orchestrator',
        script: 'enhanced-intelligent-automation-orchestrator.js',
        priority: 'critical',
        description: 'Enhanced intelligent automation orchestrator for system coordination',
        capabilities: ['coordination', 'intelligence', 'diversification', 'growth'],
        isRunning: false,
        pid: null
      },
      {
        name: 'master-automation-coordinator',
        script: 'master-automation-coordinator.js',
        priority: 'critical',
        description: 'Master automation coordinator for system management',
        capabilities: ['coordination', 'monitoring', 'optimization', 'health'],
        isRunning: false,
        pid: null
      },
      {
        name: 'ultimate-automation-factory-system',
        script: 'ultimate-automation-factory-system.js',
        priority: 'high',
        description: 'Ultimate automation factory system for capability generation',
        capabilities: ['factory', 'evolution', 'capabilities', 'optimization'],
        isRunning: false,
        pid: null
      },
      {
        name: 'continuous-automation-improvement-system',
        script: 'continuous-automation-improvement-system.js',
        priority: 'high',
        description: 'Continuous automation improvement system',
        capabilities: ['improvement', 'optimization', 'evolution', 'monitoring'],
        isRunning: false,
        pid: null
      },
      {
        name: 'intelligent-diversification-system',
        script: 'intelligent-diversification-system.js',
        priority: 'high',
        description: 'Intelligent diversification system for content and market expansion',
        capabilities: ['diversification', 'content', 'markets', 'intelligence'],
        isRunning: false,
        pid: null
      },
      {
        name: 'growth-automation-system',
        script: 'growth-automation-system.js',
        priority: 'high',
        description: 'Growth automation system for strategic growth implementation',
        capabilities: ['growth', 'seo', 'marketing', 'optimization'],
        isRunning: false,
        pid: null
      }
    ];
    
    this.launchConfig = {
      intelligence: {
        learningRate: 0.3,
        adaptationSpeed: 0.2,
        evolutionRate: 0.1
      },
      diversification: {
        contentTypes: 30,
        marketSegments: 25,
        technologies: 25
      },
      growth: {
        strategies: 20,
        platforms: 20,
        optimization: 0.9
      },
      coordination: {
        frequency: 15000,
        healthChecks: 30000,
        evolution: 300000
      }
    };
    
    this.monitoring = {
      startTime: Date.now(),
      launchedSystems: 0,
      failedLaunches: 0,
      healthChecks: 0,
      logs: []
    };
    
    this.isRunning = false;
  }

  async initialize() {
    console.log('🚀 Initializing Intelligent Automation Launcher...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Check system requirements
      await this.checkSystemRequirements();
      
      // Initialize launch sequence
      this.initializeLaunchSequence();
      
      // Start monitoring
      this.startMonitoring();
      
      this.isRunning = true;
      console.log('✅ Intelligent Automation Launcher initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Intelligent Automation Launcher:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'launch-logs',
      'system-status',
      'health-reports',
      'performance-metrics',
      'coordination-data',
      'evolution-tracking'
    ];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, dir);
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }
    }
  }

  async checkSystemRequirements() {
    console.log('🔍 Checking system requirements...');
    
    // Check Node.js version
    try {
      const { stdout } = await execAsync('node --version');
      const version = stdout.trim();
      this.log(`Node.js version: ${version}`);
      
      if (!version.startsWith('v16') && !version.startsWith('v18') && !version.startsWith('v20')) {
        this.log('⚠️ Warning: Recommended Node.js version 16+ for optimal performance', 'warn');
      }
    } catch (error) {
      this.log('❌ Error checking Node.js version', 'error');
    }
    
    // Check available memory
    try {
      const { stdout } = await execAsync('sysctl hw.memsize');
      const memoryBytes = parseInt(stdout.split(':')[1].trim());
      const memoryGB = memoryBytes / (1024 * 1024 * 1024);
      this.log(`Available memory: ${memoryGB.toFixed(1)} GB`);
      
      if (memoryGB < 4) {
        this.log('⚠️ Warning: Low memory may affect performance', 'warn');
      }
    } catch (error) {
      this.log('⚠️ Could not check memory usage', 'warn');
    }
    
    console.log('✅ System requirements check completed');
  }

  initializeLaunchSequence() {
    console.log('🚀 Initializing launch sequence...');
    
    // Sort systems by priority
    this.automationSystems.sort((a, b) => {
      const priorityOrder = { 'critical': 3, 'high': 2, 'medium': 1, 'low': 0 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    console.log('✅ Launch sequence initialized');
  }

  async launchAllSystems() {
    console.log('🚀 Launching all intelligent automation systems...');
    
    const launchPromises = this.automationSystems.map(system => 
      this.launchSystem(system)
    );
    
    try {
      await Promise.allSettled(launchPromises);
      
      // Wait for systems to stabilize
      await this.waitForSystemsToStabilize();
      
      // Verify all critical systems are running
      await this.verifyCriticalSystems();
      
      console.log('✅ All intelligent automation systems launched successfully');
    } catch (error) {
      console.error('❌ Error launching systems:', error);
      throw error;
    }
  }

  async launchSystem(system) {
    try {
      this.log(`🚀 Launching ${system.name}...`);
      
      const scriptPath = path.join(__dirname, system.script);
      
      // Check if script exists
      try {
        await fs.access(scriptPath);
      } catch (error) {
        this.log(`❌ Script not found: ${system.script}`, 'error');
        system.isRunning = false;
        this.monitoring.failedLaunches++;
        return;
      }
      
      // Launch the system
      const child = spawn('node', [scriptPath], {
        stdio: 'pipe',
        detached: false
      });
      
      // Store PID
      system.pid = child.pid;
      system.isRunning = true;
      this.monitoring.launchedSystems++;
      
      // Handle process events
      child.on('error', (error) => {
        this.log(`❌ Error in ${system.name}: ${error.message}`, 'error');
        system.isRunning = false;
        system.pid = null;
      });
      
      child.on('exit', (code) => {
        if (code !== 0) {
          this.log(`⚠️ ${system.name} exited with code ${code}`, 'warn');
        }
        system.isRunning = false;
        system.pid = null;
      });
      
      // Log output
      child.stdout.on('data', (data) => {
        const output = data.toString().trim();
        if (output) {
          this.log(`[${system.name}] ${output}`);
        }
      });
      
      child.stderr.on('data', (data) => {
        const error = data.toString().trim();
        if (error) {
          this.log(`[${system.name}] ERROR: ${error}`, 'error');
        }
      });
      
      this.log(`✅ ${system.name} launched successfully (PID: ${system.pid})`);
      
    } catch (error) {
      this.log(`❌ Failed to launch ${system.name}: ${error.message}`, 'error');
      system.isRunning = false;
      this.monitoring.failedLaunches++;
    }
  }

  async waitForSystemsToStabilize() {
    console.log('⏳ Waiting for systems to stabilize...');
    
    // Wait for 10 seconds for systems to start
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Check system health
    await this.checkSystemHealth();
    
    console.log('✅ Systems stabilized');
  }

  async verifyCriticalSystems() {
    console.log('🔍 Verifying critical systems...');
    
    const criticalSystems = this.automationSystems.filter(system => 
      system.priority === 'critical'
    );
    
    const runningCriticalSystems = criticalSystems.filter(system => 
      system.isRunning
    );
    
    if (runningCriticalSystems.length < criticalSystems.length) {
      const failedSystems = criticalSystems.filter(system => !system.isRunning);
      this.log(`⚠️ Warning: ${failedSystems.length} critical systems failed to launch`, 'warn');
      
      for (const system of failedSystems) {
        this.log(`❌ Failed critical system: ${system.name}`, 'error');
      }
    } else {
      this.log('✅ All critical systems are running');
    }
  }

  async checkSystemHealth() {
    this.monitoring.healthChecks++;
    
    const runningSystems = this.automationSystems.filter(system => system.isRunning);
    const totalSystems = this.automationSystems.length;
    
    this.log(`Health check: ${runningSystems.length}/${totalSystems} systems running`);
    
    // Check individual system health
    for (const system of runningSystems) {
      try {
        const isHealthy = await this.checkProcessHealth(system.pid);
        if (!isHealthy) {
          this.log(`⚠️ System health issue: ${system.name}`, 'warn');
        }
      } catch (error) {
        this.log(`❌ Error checking health for ${system.name}: ${error.message}`, 'error');
      }
    }
  }

  async checkProcessHealth(pid) {
    try {
      const { stdout } = await execAsync(`ps -p ${pid} -o pid=`);
      return stdout.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  startMonitoring() {
    // Monitor system health every 30 seconds
    setInterval(() => {
      this.checkSystemHealth();
    }, 30000);
    
    // Save system status every 5 minutes
    setInterval(async () => {
      await this.saveSystemStatus();
    }, 300000);
  }

  async saveSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      monitoring: this.monitoring,
      systems: this.automationSystems.map(system => ({
        name: system.name,
        isRunning: system.isRunning,
        pid: system.pid,
        priority: system.priority
      }))
    };
    
    const statusPath = path.join(__dirname, 'launch-status.json');
    await fs.writeFile(statusPath, JSON.stringify(status, null, 2));
  }

  async getSystemStatus() {
    const runningSystems = this.automationSystems.filter(system => system.isRunning);
    const criticalSystems = this.automationSystems.filter(system => system.priority === 'critical');
    const runningCriticalSystems = criticalSystems.filter(system => system.isRunning);
    
    return {
      isRunning: this.isRunning,
      launchedSystems: this.monitoring.launchedSystems,
      failedLaunches: this.monitoring.failedLaunches,
      healthChecks: this.monitoring.healthChecks,
      systems: {
        total: this.automationSystems.length,
        running: runningSystems.length,
        critical: criticalSystems.length,
        runningCritical: runningCriticalSystems.length
      },
      uptime: Date.now() - this.monitoring.startTime
    };
  }

  async stopAllSystems() {
    console.log('🛑 Stopping all automation systems...');
    
    for (const system of this.automationSystems) {
      if (system.isRunning && system.pid) {
        try {
          await execAsync(`kill ${system.pid}`);
          this.log(`🛑 Stopped ${system.name} (PID: ${system.pid})`);
          system.isRunning = false;
          system.pid = null;
        } catch (error) {
          this.log(`❌ Error stopping ${system.name}: ${error.message}`, 'error');
        }
      }
    }
    
    console.log('✅ All systems stopped');
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message
    };
    this.monitoring.logs.push(logEntry);
    console.log(`[${logEntry.timestamp}] [${level.toUpperCase()}] ${message}`);
  }
}

async function main() {
  const launcher = new IntelligentAutomationLauncher();
  
  try {
    await launcher.initialize();
    
    // Launch all systems
    await launcher.launchAllSystems();
    
    console.log('🚀 All intelligent automation systems are now running...');
    
    // Keep the launcher running
    setInterval(async () => {
      const status = await launcher.getSystemStatus();
      console.log(`📊 Status: ${status.systems.running}/${status.systems.total} systems running`);
    }, 60000); // Log status every minute
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('🛑 Shutting down Intelligent Automation Launcher...');
      await launcher.stopAllSystems();
      await launcher.saveSystemStatus();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Failed to start Intelligent Automation Launcher:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = IntelligentAutomationLauncher;


  async getStatus() {
    return {
      systemName: 'launch-all-intelligent-automations',
      isRunning: this.isRunning,
      startTime: this.startTime,
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0
    };
  }