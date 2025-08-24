#!/usr/bin/env node

/**
 * Autonomous Startup Script
 * 
 * Ensures the entire automation system starts automatically and runs
 * completely independently with zero manual intervention.
 */

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const os = require('os');

class AutonomousStartup {
  constructor() {
    this.config = {
      // Startup configuration
      startup: {
        autoStart: true,
        checkInterval: 30 * 1000, // 30 seconds
        maxRetries: 10,
        retryDelay: 5000, // 5 seconds
        healthCheckTimeout: 60000, // 1 minute
        pidFile: path.join(process.cwd(), '.autonomous.pid'),
        logFile: path.join(process.cwd(), 'logs', 'autonomous-startup.log')
      },
      
      // System components
      components: {
        autonomousManager: {
          script: 'autonomous-system-manager.cjs',
          priority: 'critical',
          required: true,
          dependencies: []
        },
        aiFeatureDiscovery: {
          script: 'ai-powered-feature-discovery.cjs',
          priority: 'high',
          required: false,
          dependencies: ['autonomousManager']
        },
        autonomousDaemon: {
          script: 'autonomous-automation-daemon.cjs',
          priority: 'critical',
          required: true,
          dependencies: []
        }
      },
      
      // Environment
      environment: {
        NODE_ENV: 'production',
        AUTONOMOUS_MODE: 'true',
        ZERO_INTERVENTION: 'true',
        AUTO_RECOVERY: 'true'
      }
    };
    
    this.isRunning = false;
    this.processes = new Map();
    this.startupTime = null;
    this.retryCount = 0;
    
    this.initializeStartup();
  }

  async initializeStartup() {
    try {
      console.log('🚀 Initializing Autonomous Startup System...');
      
      // Set environment variables
      this.setEnvironmentVariables();
      
      // Create necessary directories
      await this.createDirectories();
      
      // Check if already running
      if (await this.isAlreadyRunning()) {
        console.log('⚠️  Autonomous system is already running');
        process.exit(0);
      }
      
      // Create PID file
      await this.createPIDFile();
      
      // Set up process monitoring
      this.setupProcessMonitoring();
      
      // Set up signal handlers
      this.setupSignalHandlers();
      
      console.log('✅ Autonomous Startup System initialized');
      
    } catch (error) {
      console.error('❌ Failed to initialize startup system:', error.message);
      process.exit(1);
    }
  }

  setEnvironmentVariables() {
    for (const [key, value] of Object.entries(this.config.environment)) {
      process.env[key] = value;
    }
  }

  async createDirectories() {
    const dirs = [
      path.join(process.cwd(), 'logs'),
      path.join(process.cwd(), 'data'),
      path.join(process.cwd(), 'config')
    ];

    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        console.warn(`Failed to create directory ${dir}: ${error.message}`);
      }
    }
  }

  async isAlreadyRunning() {
    try {
      const pid = await fs.readFile(this.config.startup.pidFile, 'utf8');
      const isRunning = await this.checkProcessRunning(parseInt(pid));
      return isRunning;
    } catch (error) {
      return false;
    }
  }

  async checkProcessRunning(pid) {
    return new Promise((resolve) => {
      try {
        process.kill(pid, 0);
        resolve(true);
      } catch (error) {
        resolve(false);
      }
    });
  }

  async createPIDFile() {
    try {
      const pid = process.pid;
      await fs.writeFile(this.config.startup.pidFile, pid.toString());
      console.log(`📝 PID file created: ${pid}`);
    } catch (error) {
      console.error(`Failed to create PID file: ${error.message}`);
      throw error;
    }
  }

  setupProcessMonitoring() {
    // Monitor all processes
    setInterval(() => {
      this.monitorProcesses();
    }, this.config.startup.checkInterval);
  }

  setupSignalHandlers() {
    // Handle graceful shutdown
    process.on('SIGINT', () => this.gracefulShutdown());
    process.on('SIGTERM', () => this.gracefulShutdown());
    process.on('SIGQUIT', () => this.gracefulShutdown());
    
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error);
      this.log('error', `Uncaught Exception: ${error.message}`);
      this.gracefulShutdown();
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection:', reason);
      this.log('error', `Unhandled Rejection: ${reason}`);
    });
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️  Autonomous startup is already running');
      return;
    }

    this.isRunning = true;
    this.startupTime = Date.now();
    console.log('🚀 Starting Autonomous System...');

    try {
      // Start critical components first
      await this.startCriticalComponents();
      
      // Start high priority components
      await this.startHighPriorityComponents();
      
      // Start remaining components
      await this.startRemainingComponents();
      
      console.log('✅ Autonomous System started successfully');
      this.log('info', 'Autonomous System started successfully');
      
      // Keep the process alive
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Failed to start autonomous system:', error.message);
      this.log('error', `Failed to start autonomous system: ${error.message}`);
      await this.gracefulShutdown();
    }
  }

  async startCriticalComponents() {
    console.log('🔧 Starting critical components...');
    
    const criticalComponents = Object.entries(this.config.components)
      .filter(([name, config]) => config.priority === 'critical')
      .map(([name, config]) => name);

    for (const componentName of criticalComponents) {
      await this.startComponent(componentName);
    }
  }

  async startHighPriorityComponents() {
    console.log('🔧 Starting high priority components...');
    
    const highPriorityComponents = Object.entries(this.config.components)
      .filter(([name, config]) => config.priority === 'high')
      .map(([name, config]) => name);

    for (const componentName of highPriorityComponents) {
      await this.startComponent(componentName);
    }
  }

  async startRemainingComponents() {
    console.log('🔧 Starting remaining components...');
    
    const remainingComponents = Object.entries(this.config.components)
      .filter(([name, config]) => config.priority !== 'critical' && config.priority !== 'high')
      .map(([name, config]) => name);

    for (const componentName of remainingComponents) {
      await this.startComponent(componentName);
    }
  }

  async startComponent(name) {
    const config = this.config.components[name];
    if (!config) {
      console.error(`❌ Unknown component: ${name}`);
      return;
    }

    // Check dependencies
    for (const dependency of config.dependencies) {
      if (!this.processes.has(dependency)) {
        console.warn(`⚠️  Dependency ${dependency} not running, skipping ${name}`);
        return;
      }
    }

    try {
      console.log(`🚀 Starting component: ${name}`);

      const scriptPath = path.join(__dirname, config.script);
      const process = spawn('node', [scriptPath, 'start'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false,
        env: { ...process.env, ...this.config.environment }
      });

      this.processes.set(name, {
        process,
        config,
        startTime: Date.now(),
        status: 'starting',
        restartCount: 0,
        lastHealthCheck: Date.now()
      });

      process.stdout.on('data', (data) => {
        const output = data.toString().trim();
        console.log(`${name}: ${output}`);
        this.log('info', `${name}: ${output}`);
      });

      process.stderr.on('data', (data) => {
        const error = data.toString().trim();
        console.error(`${name} Error: ${error}`);
        this.log('error', `${name} Error: ${error}`);
      });

      process.on('close', (code) => {
        console.warn(`⚠️  ${name} process exited with code ${code}`);
        this.log('warn', `${name} process exited with code ${code}`);
        
        const proc = this.processes.get(name);
        if (proc) {
          proc.status = 'stopped';
          proc.exitCode = code;
          proc.process = null;
        }

        // Auto-restart if required or enabled
        if (config.required || (config.autoRestart && proc.restartCount < this.config.startup.maxRetries)) {
          setTimeout(() => {
            if (this.isRunning) {
              this.restartComponent(name);
            }
          }, this.config.startup.retryDelay);
        }
      });

      process.on('error', (error) => {
        console.error(`${name} process error: ${error.message}`);
        this.log('error', `${name} process error: ${error.message}`);
        
        const proc = this.processes.get(name);
        if (proc) {
          proc.status = 'error';
        }
      });

      // Mark as running after health check
      setTimeout(async () => {
        await this.healthCheckComponent(name);
      }, this.config.startup.healthCheckTimeout);

    } catch (error) {
      console.error(`❌ Failed to start component ${name}: ${error.message}`);
      this.log('error', `Failed to start component ${name}: ${error.message}`);
    }
  }

  async healthCheckComponent(name) {
    const proc = this.processes.get(name);
    if (!proc) return;

    try {
      // Check if process is still running
      if (proc.process) {
        proc.process.kill(0); // Send signal 0 to check if process exists
        proc.status = 'running';
        proc.lastHealthCheck = Date.now();
        console.log(`✅ ${name} health check passed`);
        this.log('info', `${name} health check passed`);
      }
    } catch (error) {
      console.warn(`⚠️  ${name} health check failed`);
      this.log('warn', `${name} health check failed`);
      proc.status = 'unhealthy';
      
      // Restart if required
      if (proc.config.required) {
        await this.restartComponent(name);
      }
    }
  }

  async restartComponent(name) {
    const proc = this.processes.get(name);
    if (proc) {
      proc.restartCount++;
      console.log(`🔄 Restarting component: ${name} (attempt ${proc.restartCount})`);
      this.log('info', `Restarting component: ${name} (attempt ${proc.restartCount})`);
    }

    await this.stopComponent(name);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.startComponent(name);
  }

  async stopComponent(name) {
    const proc = this.processes.get(name);
    if (!proc || !proc.process) {
      return;
    }

    try {
      console.log(`🛑 Stopping component: ${name}`);
      this.log('info', `Stopping component: ${name}`);
      
      proc.process.kill('SIGTERM');

      // Force kill after 5 seconds
      setTimeout(() => {
        if (proc.process) {
          proc.process.kill('SIGKILL');
        }
      }, 5000);

    } catch (error) {
      console.error(`Failed to stop component ${name}: ${error.message}`);
      this.log('error', `Failed to stop component ${name}: ${error.message}`);
    }
  }

  monitorProcesses() {
    for (const [name, proc] of this.processes) {
      // Check for stuck processes
      if (proc.status === 'starting' && Date.now() - proc.startTime > 60000) {
        console.warn(`⚠️  Component ${name} is stuck in starting state`);
        this.log('warn', `Component ${name} is stuck in starting state`);
        proc.status = 'stuck';
        
        if (proc.config.required) {
          this.restartComponent(name);
        }
      }

      // Check for unhealthy processes
      if (proc.status === 'running' && Date.now() - proc.lastHealthCheck > 120000) {
        this.healthCheckComponent(name);
      }
    }
  }

  async gracefulShutdown() {
    console.log('🛑 Initiating graceful shutdown...');
    this.log('info', 'Initiating graceful shutdown');
    
    this.isRunning = false;

    // Stop all processes
    for (const [name, proc] of this.processes) {
      await this.stopComponent(name);
    }

    // Wait for processes to stop
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Remove PID file
    try {
      await fs.unlink(this.config.startup.pidFile);
    } catch (error) {
      console.warn(`Failed to remove PID file: ${error.message}`);
    }

    console.log('✅ Graceful shutdown completed');
    this.log('info', 'Graceful shutdown completed');
    process.exit(0);
  }

  keepAlive() {
    // Keep the process alive indefinitely
    setInterval(() => {
      const uptime = Date.now() - this.startupTime;
      console.log(`🔄 Autonomous system running for ${Math.floor(uptime / 1000)} seconds`);
    }, 60000); // Log every minute
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] [AUTONOMOUS-STARTUP] ${message}`;
    
    // Write to log file
    fs.appendFile(this.config.startup.logFile, logMessage + '\n').catch(() => {});
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      uptime: this.startupTime ? Date.now() - this.startupTime : 0,
      processes: Array.from(this.processes.entries()).map(([name, proc]) => ({
        name,
        status: proc.status,
        uptime: Date.now() - proc.startTime,
        restartCount: proc.restartCount
      })),
      retryCount: this.retryCount
    };
  }
}

// CLI Interface
async function main() {
  const startup = new AutonomousStartup();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      await startup.start();
      break;
    case 'status':
      console.log(JSON.stringify(startup.getStatus(), null, 2));
      break;
    case 'stop':
      await startup.gracefulShutdown();
      break;
    default:
      console.log(`
🚀 Autonomous Startup System

Usage:
  node autonomous-startup.cjs [command]

Commands:
  start   - Start autonomous system
  status  - Show system status
  stop    - Stop autonomous system

Features:
  - Zero manual intervention
  - Automatic component startup
  - Health monitoring
  - Auto-recovery
  - Graceful shutdown
  - Process dependency management

Examples:
  node autonomous-startup.cjs start
  node autonomous-startup.cjs status

The system will automatically:
- Start all required components
- Monitor health and restart failed processes
- Handle dependencies between components
- Provide zero-intervention operation
      `);
      break;
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('Autonomous Startup failed:', error.message);
    process.exit(1);
  });
}

module.exports = AutonomousStartup; 