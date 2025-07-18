#!/usr/bin/env node

/**
 * Automated App Improvement System
 * 
 * This script coordinates multiple computers with Cursor installed to continuously
 * improve the app by:
 * - Running automated tests and fixes
 * - Monitoring performance and errors
 * - Applying optimizations
 * - Coordinating work across multiple machines
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');
const crypto = require('crypto');

const CursorController = require('./cursor-controller.cjs');
const MultiComputerAutomation = require('./multi-computer-automation.cjs');

class AutomatedAppImprovement {
  constructor() {
    this.cursorController = new CursorController();
    this.automation = new MultiComputerAutomation();
    this.improvementTasks = new Map();
    this.isRunning = false;
    this.startTime = Date.now();
    
    this.setupLogging();
    this.loadConfiguration();
  }

  setupLogging() {
    this.log = (level, message, data = {}) => {
      const timestamp = new Date().toISOString();
      const logEntry = {
        timestamp,
        level,
        message,
        data,
        computer: os.hostname()
      };
      
      console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`, data);
      
      // Write to log file
      fs.appendFileSync('automated-improvement.log', JSON.stringify(logEntry) + '\n');
    };
  }

  loadConfiguration() {
    const configPath = path.join(process.cwd(), 'config', 'automated-improvement.json');
    
    if (fs.existsSync(configPath)) {
      try {
        this.config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        this.log('info', 'Loaded automated improvement configuration', { configPath });
      } catch (error) {
        this.log('warn', 'Failed to load configuration, using defaults', { error: error.message });
        this.createDefaultConfiguration(configPath);
      }
    } else {
      this.createDefaultConfiguration(configPath);
    }
  }

  createDefaultConfiguration(configPath) {
    this.config = {
      improvementCycles: [
        {
          name: 'code-quality',
          description: 'Improve code quality',
          interval: 300000, // 5 minutes
          tasks: [
            { name: 'lint', command: 'npm run lint:fix', autoFix: true },
            { name: 'format', command: 'npm run format', autoFix: true },
            { name: 'typecheck', command: 'npm run typecheck', autoFix: false }
          ]
        },
        {
          name: 'performance',
          description: 'Optimize performance',
          interval: 600000, // 10 minutes
          tasks: [
            { name: 'analyze', command: 'npm run analyze', autoFix: false },
            { name: 'optimize', command: 'npm run optimize', autoFix: true },
            { name: 'bundle-analyze', command: 'npm run bundle:analyze', autoFix: false }
          ]
        },
        {
          name: 'testing',
          description: 'Run tests and fix issues',
          interval: 900000, // 15 minutes
          tasks: [
            { name: 'test', command: 'npm run test', autoFix: false },
            { name: 'test-coverage', command: 'npm run test:coverage', autoFix: false },
            { name: 'e2e-test', command: 'npm run test:e2e', autoFix: false }
          ]
        },
        {
          name: 'build-optimization',
          description: 'Optimize build process',
          interval: 1200000, // 20 minutes
          tasks: [
            { name: 'build', command: 'npm run build', autoFix: true },
            { name: 'build-analyze', command: 'npm run build:analyze', autoFix: false },
            { name: 'bundle-optimize', command: 'npm run bundle:optimize', autoFix: true }
          ]
        }
      ],
      monitoring: {
        enabled: true,
        interval: 30000, // 30 seconds
        metrics: ['cpu', 'memory', 'disk', 'network']
      },
      errorHandling: {
        autoRetry: true,
        maxRetries: 3,
        retryDelay: 5000
      },
      collaboration: {
        enabled: true,
        computers: ['localhost'],
        taskDistribution: 'round-robin'
      }
    };

    // Ensure config directory exists
    const configDir = path.dirname(configPath);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
    this.log('info', 'Created default configuration', { configPath });
  }

  async start() {
    this.log('info', 'Starting Automated App Improvement System...');
    
    try {
      // Initialize Cursor controller
      await this.initializeCursorController();
      
      // Start multi-computer automation
      await this.automation.start();
      
      // Start improvement cycles
      this.startImprovementCycles();
      
      // Start monitoring
      if (this.config.monitoring.enabled) {
        this.startMonitoring();
      }
      
      // Start collaboration
      if (this.config.collaboration.enabled) {
        this.startCollaboration();
      }
      
      this.isRunning = true;
      this.log('info', 'Automated App Improvement System started successfully');
      
    } catch (error) {
      this.log('error', 'Failed to start Automated App Improvement System', { error: error.message });
      throw error;
    }
  }

  async initializeCursorController() {
    this.log('info', 'Initializing Cursor controller...');
    
    try {
      // Open Cursor with the current project
      await this.cursorController.openCursor(process.cwd());
      this.log('info', 'Cursor controller initialized');
    } catch (error) {
      this.log('warn', 'Failed to initialize Cursor controller', { error: error.message });
    }
  }

  startImprovementCycles() {
    this.log('info', 'Starting improvement cycles...');
    
    this.config.improvementCycles.forEach(cycle => {
      setInterval(async () => {
        try {
          await this.runImprovementCycle(cycle);
        } catch (error) {
          this.log('error', 'Improvement cycle failed', { 
            cycle: cycle.name, 
            error: error.message 
          });
        }
      }, cycle.interval);
      
      this.log('info', 'Started improvement cycle', { 
        name: cycle.name, 
        interval: cycle.interval 
      });
    });
  }

  async runImprovementCycle(cycle) {
    this.log('info', 'Running improvement cycle', { name: cycle.name });
    
    const cycleId = crypto.randomUUID();
    const cycleStart = Date.now();
    
    try {
      // Run each task in the cycle
      for (const task of cycle.tasks) {
        await this.runImprovementTask(task, cycleId);
      }
      
      const cycleDuration = Date.now() - cycleStart;
      this.log('info', 'Improvement cycle completed', { 
        name: cycle.name, 
        duration: cycleDuration 
      });
      
    } catch (error) {
      this.log('error', 'Improvement cycle failed', { 
        name: cycle.name, 
        error: error.message 
      });
    }
  }

  async runImprovementTask(task, cycleId) {
    this.log('info', 'Running improvement task', { 
      cycleId, 
      task: task.name, 
      command: task.command 
    });
    
    const taskId = crypto.randomUUID();
    const taskStart = Date.now();
    
    try {
      // Execute the task
      const result = await this.executeTask(task.command);
      
      const taskDuration = Date.now() - taskStart;
      this.log('info', 'Improvement task completed', { 
        taskId, 
        task: task.name, 
        duration: taskDuration,
        result 
      });
      
      // Store task result
      this.improvementTasks.set(taskId, {
        id: taskId,
        cycleId,
        name: task.name,
        command: task.command,
        status: 'completed',
        duration: taskDuration,
        result,
        timestamp: new Date()
      });
      
    } catch (error) {
      const taskDuration = Date.now() - taskStart;
      this.log('error', 'Improvement task failed', { 
        taskId, 
        task: task.name, 
        duration: taskDuration,
        error: error.message 
      });
      
      // Store failed task
      this.improvementTasks.set(taskId, {
        id: taskId,
        cycleId,
        name: task.name,
        command: task.command,
        status: 'failed',
        duration: taskDuration,
        error: error.message,
        timestamp: new Date()
      });
      
      // Auto-fix if enabled
      if (task.autoFix && this.config.errorHandling.autoRetry) {
        await this.autoFixTask(task, taskId);
      }
    }
  }

  async executeTask(command) {
    return new Promise((resolve, reject) => {
      exec(command, { 
        cwd: process.cwd(),
        maxBuffer: 1024 * 1024 * 10 // 10MB buffer
      }, (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`${error.message}\n${stderr}`));
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  }

  async autoFixTask(task, taskId) {
    this.log('info', 'Attempting to auto-fix task', { taskId, task: task.name });
    
    let retries = 0;
    const maxRetries = this.config.errorHandling.maxRetries;
    const retryDelay = this.config.errorHandling.retryDelay;
    
    while (retries < maxRetries) {
      retries++;
      this.log('info', 'Auto-fix attempt', { taskId, attempt: retries });
      
      try {
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        
        // Try to fix the issue
        await this.fixTaskIssue(task);
        
        // Re-run the task
        const result = await this.executeTask(task.command);
        
        this.log('info', 'Auto-fix successful', { taskId, attempts: retries });
        
        // Update task status
        const taskData = this.improvementTasks.get(taskId);
        if (taskData) {
          taskData.status = 'fixed';
          taskData.fixAttempts = retries;
          taskData.fixedAt = new Date();
        }
        
        return;
        
      } catch (error) {
        this.log('warn', 'Auto-fix attempt failed', { 
          taskId, 
          attempt: retries, 
          error: error.message 
        });
      }
    }
    
    this.log('error', 'Auto-fix failed after all attempts', { taskId, attempts: maxRetries });
  }

  async fixTaskIssue(task) {
    this.log('info', 'Fixing task issue', { task: task.name });
    
    switch (task.name) {
      case 'lint':
        await this.fixLintingIssues();
        break;
      case 'build':
        await this.fixBuildIssues();
        break;
      case 'test':
        await this.fixTestIssues();
        break;
      case 'optimize':
        await this.fixOptimizationIssues();
        break;
      default:
        await this.fixGenericIssues();
    }
  }

  async fixLintingIssues() {
    try {
      // Clean and reinstall dependencies
      execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
      execSync('npm install', { stdio: 'pipe' });
      
      // Run linting fixes
      execSync('npm run lint:fix', { stdio: 'pipe' });
      
      this.log('info', 'Linting issues fixed');
    } catch (error) {
      this.log('error', 'Failed to fix linting issues', { error: error.message });
      throw error;
    }
  }

  async fixBuildIssues() {
    try {
      // Clean build artifacts
      execSync('rm -rf .next out dist', { stdio: 'pipe' });
      
      // Clear cache
      execSync('npm run clean', { stdio: 'pipe' });
      
      // Reinstall dependencies
      execSync('npm install', { stdio: 'pipe' });
      
      // Run type check
      execSync('npm run typecheck', { stdio: 'pipe' });
      
      this.log('info', 'Build issues fixed');
    } catch (error) {
      this.log('error', 'Failed to fix build issues', { error: error.message });
      throw error;
    }
  }

  async fixTestIssues() {
    try {
      // Clear test cache
      execSync('npm run test -- --clearCache', { stdio: 'pipe' });
      
      // Update test dependencies
      execSync('npm update --save-dev', { stdio: 'pipe' });
      
      this.log('info', 'Test issues fixed');
    } catch (error) {
      this.log('error', 'Failed to fix test issues', { error: error.message });
      throw error;
    }
  }

  async fixOptimizationIssues() {
    try {
      // Clear optimization cache
      execSync('rm -rf .next/cache', { stdio: 'pipe' });
      
      // Re-run optimization
      execSync('npm run optimize', { stdio: 'pipe' });
      
      this.log('info', 'Optimization issues fixed');
    } catch (error) {
      this.log('error', 'Failed to fix optimization issues', { error: error.message });
      throw error;
    }
  }

  async fixGenericIssues() {
    try {
      // Generic fixes
      execSync('npm run clean', { stdio: 'pipe' });
      execSync('npm install', { stdio: 'pipe' });
      execSync('npm run lint:fix', { stdio: 'pipe' });
      
      this.log('info', 'Generic issues fixed');
    } catch (error) {
      this.log('error', 'Failed to fix generic issues', { error: error.message });
      throw error;
    }
  }

  startMonitoring() {
    this.log('info', 'Starting monitoring system...');
    
    setInterval(() => {
      this.monitorSystemHealth();
    }, this.config.monitoring.interval);
    
    this.log('info', 'Monitoring system started');
  }

  monitorSystemHealth() {
    try {
      // Monitor CPU usage
      const cpuUsage = process.cpuUsage();
      
      // Monitor memory usage
      const memoryUsage = process.memoryUsage();
      
      // Monitor disk usage
      const diskUsage = this.getDiskUsage();
      
      // Monitor network activity
      const networkActivity = this.getNetworkActivity();
      
      this.log('debug', 'System health metrics', {
        cpu: cpuUsage,
        memory: memoryUsage,
        disk: diskUsage,
        network: networkActivity
      });
      
      // Check for critical issues
      if (memoryUsage.heapUsed > 1024 * 1024 * 1024) { // 1GB
        this.log('warn', 'High memory usage detected');
      }
      
      if (diskUsage.usagePercent > 90) {
        this.log('warn', 'High disk usage detected');
      }
      
    } catch (error) {
      this.log('error', 'Monitoring failed', { error: error.message });
    }
  }

  getDiskUsage() {
    try {
      const stats = fs.statSync(process.cwd());
      return {
        total: stats.size,
        usagePercent: 0 // Would need more complex calculation
      };
    } catch (error) {
      return { total: 0, usagePercent: 0 };
    }
  }

  getNetworkActivity() {
    // Placeholder for network monitoring
    return { bytesIn: 0, bytesOut: 0 };
  }

  startCollaboration() {
    this.log('info', 'Starting collaboration system...');
    
    // Coordinate with other computers
    this.config.collaboration.computers.forEach(computer => {
      this.coordinateWithComputer(computer);
    });
    
    this.log('info', 'Collaboration system started');
  }

  async coordinateWithComputer(computer) {
    try {
      // Send improvement tasks to other computers
      const tasks = Array.from(this.improvementTasks.values())
        .filter(task => task.status === 'failed')
        .slice(0, 5); // Send up to 5 failed tasks
      
      if (tasks.length > 0) {
        this.log('info', 'Sending tasks to computer', { computer, taskCount: tasks.length });
        // This would typically involve network communication
      }
      
    } catch (error) {
      this.log('error', 'Failed to coordinate with computer', { computer, error: error.message });
    }
  }

  getImprovementStats() {
    const tasks = Array.from(this.improvementTasks.values());
    
    return {
      total: tasks.length,
      completed: tasks.filter(t => t.status === 'completed').length,
      failed: tasks.filter(t => t.status === 'failed').length,
      fixed: tasks.filter(t => t.status === 'fixed').length,
      uptime: Date.now() - this.startTime,
      isRunning: this.isRunning
    };
  }

  async stop() {
    this.log('info', 'Stopping Automated App Improvement System...');
    
    this.isRunning = false;
    
    // Stop automation
    await this.automation.stop();
    
    // Close Cursor instances
    const instances = this.cursorController.getActiveInstances();
    for (const instance of instances) {
      await this.cursorController.closeInstance(instance.id);
    }
    
    this.log('info', 'Automated App Improvement System stopped');
  }
}

// Main execution
if (require.main === module) {
  const improvement = new AutomatedAppImprovement();
  
  process.on('SIGINT', async () => {
    console.log('\nShutting down...');
    await improvement.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\nShutting down...');
    await improvement.stop();
    process.exit(0);
  });
  
  improvement.start().catch(error => {
    console.error('Failed to start automated improvement:', error);
    process.exit(1);
  });
}

module.exports = AutomatedAppImprovement; 