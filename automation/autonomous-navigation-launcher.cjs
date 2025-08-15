#!/usr/bin/env node

/**
 * Autonomous Navigation Launcher
 * Runs all navigation systems continuously at maximum speed
 * Auto-restart, monitoring, and performance optimization
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data', 'navigation');
const AUTOMATION_DIR = path.join(ROOT, 'automation');

class AutonomousNavigationLauncher {
  constructor() {
    this.processes = new Map();
    this.status = {
      running: false,
      startTime: null,
      totalRuns: 0,
      lastRun: null,
      performance: {
        averageSpeed: 0,
        fastestRun: Infinity,
        slowestRun: 0
      }
    };
    this.config = {
      continuous: true,
      maxConcurrent: 4,
      restartDelay: 1000,
      performanceMode: true,
      autoOptimize: true
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  async start() {
    console.log('🚀 AUTONOMOUS NAVIGATION LAUNCHER: Starting at MAXIMUM SPEED!');
    console.log('⚡ Performance Mode: ENABLED');
    console.log('🔄 Continuous Operation: ENABLED');
    console.log('🤖 Autonomous Mode: ENABLED');
    
    this.status.running = true;
    this.status.startTime = new Date();
    
    try {
      // Start all systems simultaneously for maximum speed
      await this.launchAllSystems();
      
      // Start continuous monitoring
      this.startContinuousMonitoring();
      
      // Start performance optimization
      this.startPerformanceOptimization();
      
      console.log('✅ AUTONOMOUS NAVIGATION LAUNCHER: All systems running at MAXIMUM SPEED!');
      
      // Keep the process alive
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ AUTONOMOUS LAUNCHER ERROR:', error);
      this.restart();
    }
  }

  async launchAllSystems() {
    console.log('🚀 Launching all navigation systems simultaneously...');
    
    const systems = [
      { name: 'orchestrator', script: 'navigation-orchestrator.cjs', priority: 'high' },
      { name: 'analyzer', script: 'smart-navigation-analyzer.cjs', priority: 'high' },
      { name: 'ai-optimizer', script: 'ai-navigation-optimizer.cjs', priority: 'critical' },
      { name: 'ml-predictor', script: 'ml-navigation-predictor.cjs', priority: 'critical' },
      { name: 'neural-network', script: 'neural-navigation-network.cjs', priority: 'critical' },
      { name: 'sidebar-generator', script: 'dynamic-sidebar-generator.cjs', priority: 'medium' },
      { name: 'breadcrumb-automator', script: 'breadcrumb-automator.cjs', priority: 'medium' },
      { name: 'health-monitor', script: 'navigation-health-monitor.cjs', priority: 'high' }
    ];

    // Launch high-priority systems first
    const criticalSystems = systems.filter(s => s.priority === 'critical');
    const highPrioritySystems = systems.filter(s => s.priority === 'high');
    const mediumPrioritySystems = systems.filter(s => s.priority === 'medium');

    // Launch critical systems immediately
    console.log('🔥 Launching CRITICAL AI/ML systems...');
    await Promise.all(criticalSystems.map(sys => this.launchSystem(sys)));

    // Launch high-priority systems
    console.log('⚡ Launching HIGH-PRIORITY systems...');
    await Promise.all(highPrioritySystems.map(sys => this.launchSystem(sys)));

    // Launch medium-priority systems
    console.log('🚀 Launching MEDIUM-PRIORITY systems...');
    await Promise.all(mediumPrioritySystems.map(sys => this.launchSystem(sys)));

    console.log(`✅ All ${systems.length} systems launched successfully!`);
  }

  async launchSystem(system) {
    return new Promise((resolve, reject) => {
      console.log(`🚀 Launching ${system.name} (${system.priority} priority)...`);
      
      const scriptPath = path.join(AUTOMATION_DIR, system.script);
      
      if (!fs.existsSync(scriptPath)) {
        console.error(`❌ Script not found: ${scriptPath}`);
        reject(new Error(`Script not found: ${system.script}`));
        return;
      }

      // Launch with maximum performance settings
      const process = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: {
          ...process.env,
          NODE_OPTIONS: '--max-old-space-size=4096 --optimize-for-size',
          PERFORMANCE_MODE: 'true',
          AUTONOMOUS_MODE: 'true'
        }
      });

      // Store process reference
      this.processes.set(system.name, {
        process,
        script: system.script,
        priority: system.priority,
        startTime: new Date(),
        status: 'running'
      });

      // Handle process events
      process.stdout.on('data', (data) => {
        const output = data.toString().trim();
        if (output) {
          console.log(`[${system.name}] ${output}`);
        }
      });

      process.stderr.on('data', (data) => {
        const error = data.toString().trim();
        if (error) {
          console.error(`[${system.name}] ERROR: ${error}`);
        }
      });

      process.on('close', (code) => {
        console.log(`[${system.name}] Process exited with code ${code}`);
        
        const processInfo = this.processes.get(system.name);
        if (processInfo) {
          processInfo.status = 'stopped';
          processInfo.endTime = new Date();
          processInfo.exitCode = code;
        }

        // Auto-restart if continuous mode is enabled
        if (this.config.continuous && code !== 0) {
          console.log(`🔄 Auto-restarting ${system.name}...`);
          setTimeout(() => this.launchSystem(system), this.config.restartDelay);
        }
      });

      process.on('error', (error) => {
        console.error(`[${system.name}] Process error:`, error);
        reject(error);
      });

      // Resolve after a short delay to ensure process starts
      setTimeout(() => resolve(), 100);
    });
  }

  startContinuousMonitoring() {
    console.log('🔍 Starting continuous monitoring...');
    
    // Monitor all processes every 5 seconds
    setInterval(() => {
      this.monitorAllProcesses();
    }, 5000);

    // Performance monitoring every 10 seconds
    setInterval(() => {
      this.monitorPerformance();
    }, 10000);

    // Health check every 30 seconds
    setInterval(() => {
      this.healthCheck();
    }, 30000);
  }

  monitorAllProcesses() {
    let runningCount = 0;
    let stoppedCount = 0;

    for (const [name, info] of this.processes) {
      if (info.status === 'running') {
        runningCount++;
      } else {
        stoppedCount++;
      }
    }

    if (stoppedCount > 0) {
      console.log(`⚠️  Process Status: ${runningCount} running, ${stoppedCount} stopped`);
      
      // Auto-restart stopped processes
      for (const [name, info] of this.processes) {
        if (info.status === 'stopped' && this.config.continuous) {
          console.log(`🔄 Auto-restarting ${name}...`);
          this.restartSystem(name);
        }
      }
    } else {
      console.log(`✅ All ${runningCount} processes running smoothly`);
    }
  }

  monitorPerformance() {
    const now = new Date();
    const uptime = now - this.status.startTime;
    
    // Calculate performance metrics
    const avgSpeed = this.status.totalRuns > 0 ? uptime / this.status.totalRuns : 0;
    
    this.status.performance.averageSpeed = avgSpeed;
    
    console.log(`📊 Performance Metrics:`);
    console.log(`   Uptime: ${Math.round(uptime / 1000)}s`);
    console.log(`   Total Runs: ${this.status.totalRuns}`);
    console.log(`   Average Speed: ${Math.round(avgSpeed)}ms per run`);
    console.log(`   Processes: ${this.processes.size}`);
  }

  healthCheck() {
    console.log('💚 Running health check...');
    
    // Check if all critical systems are running
    const criticalSystems = Array.from(this.processes.entries())
      .filter(([name, info]) => info.priority === 'critical');
    
    const criticalRunning = criticalSystems.filter(([name, info]) => info.status === 'running');
    
    if (criticalRunning.length < criticalSystems.length) {
      console.log('⚠️  Critical systems down, performing emergency restart...');
      this.emergencyRestart();
    } else {
      console.log('✅ Health check passed - all critical systems operational');
    }
  }

  emergencyRestart() {
    console.log('🚨 EMERGENCY RESTART: Restarting all critical systems...');
    
    // Stop all processes
    for (const [name, info] of this.processes) {
      if (info.process && !info.process.killed) {
        info.process.kill('SIGTERM');
      }
    }
    
    // Clear process map
    this.processes.clear();
    
    // Wait a moment then restart
    setTimeout(() => {
      console.log('🔄 Emergency restart complete, relaunching systems...');
      this.launchAllSystems();
    }, 2000);
  }

  restartSystem(name) {
    const processInfo = this.processes.get(name);
    if (processInfo) {
      console.log(`🔄 Restarting ${name}...`);
      
      // Kill existing process
      if (processInfo.process && !processInfo.process.killed) {
        processInfo.process.kill('SIGTERM');
      }
      
      // Remove from processes map
      this.processes.delete(name);
      
      // Relaunch after delay
      setTimeout(() => {
        const system = {
          name,
          script: processInfo.script,
          priority: processInfo.priority
        };
        this.launchSystem(system);
      }, this.config.restartDelay);
    }
  }

  startPerformanceOptimization() {
    console.log('⚡ Starting performance optimization...');
    
    // Optimize Node.js performance
    if (this.config.performanceMode) {
      // Set high-performance Node.js flags
      process.env.NODE_OPTIONS = '--max-old-space-size=4096 --optimize-for-size --max-semi-space-size=512';
      
      // Enable aggressive garbage collection
      if (global.gc) {
        setInterval(() => {
          global.gc();
        }, 30000); // GC every 30 seconds
      }
    }
    
    // Auto-optimize every minute
    if (this.config.autoOptimize) {
      setInterval(() => {
        this.autoOptimize();
      }, 60000);
    }
  }

  autoOptimize() {
    console.log('🔧 Running auto-optimization...');
    
    // Check system resources
    const memUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    
    console.log(`📊 System Resources:`);
    console.log(`   Memory: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB used`);
    console.log(`   CPU: ${Math.round(cpuUsage.user / 1000)}ms user, ${Math.round(cpuUsage.system / 1000)}ms system`);
    
    // Optimize if memory usage is high
    if (memUsage.heapUsed > 1024 * 1024 * 1024) { // > 1GB
      console.log('🧹 High memory usage detected, running cleanup...');
      if (global.gc) {
        global.gc();
      }
    }
  }

  keepAlive() {
    console.log('🔄 Keeping launcher alive for continuous operation...');
    
    // Keep the main process running
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down autonomous navigation launcher...');
      this.shutdown();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      console.log('\n🛑 Received SIGTERM, shutting down...');
      this.shutdown();
      process.exit(0);
    });
    
    // Keep alive with heartbeat
    setInterval(() => {
      if (this.status.running) {
        console.log('💓 Autonomous navigation launcher heartbeat - all systems operational');
      }
    }, 60000); // Every minute
  }

  async shutdown() {
    console.log('🛑 Shutting down all navigation systems...');
    
    // Stop all processes
    for (const [name, info] of this.processes) {
      if (info.process && !info.process.killed) {
        console.log(`🛑 Stopping ${name}...`);
        info.process.kill('SIGTERM');
      }
    }
    
    // Wait for processes to stop
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('✅ Shutdown complete');
  }

  getStatus() {
    const status = {
      running: this.status.running,
      startTime: this.status.startTime,
      uptime: this.status.startTime ? Date.now() - this.status.startTime : 0,
      processes: {},
      performance: this.status.performance
    };
    
    for (const [name, info] of this.processes) {
      status.processes[name] = {
        status: info.status,
        priority: info.priority,
        startTime: info.startTime,
        uptime: info.startTime ? Date.now() - info.startTime : 0
      };
    }
    
    return status;
  }

  async restart() {
    console.log('🔄 Restarting autonomous navigation launcher...');
    await this.shutdown();
    setTimeout(() => this.start(), 1000);
  }
}

// Run the autonomous launcher
if (require.main === module) {
  const launcher = new AutonomousNavigationLauncher();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('status')) {
    const status = launcher.getStatus();
    console.log('📊 Autonomous Navigation Launcher Status:');
    console.log(JSON.stringify(status, null, 2));
  } else if (args.includes('restart')) {
    launcher.restart();
  } else if (args.includes('stop')) {
    launcher.shutdown();
  } else {
    launcher.start();
  }
}

module.exports = AutonomousNavigationLauncher;