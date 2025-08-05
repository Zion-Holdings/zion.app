#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const { EventEmitter } = require('events');

class AutomationOrchestrator extends EventEmitter {
  constructor() {
    super();
    this.projectRoot = process.cwd();
    this.factories = new Map();
    this.processes = new Map();
    this.health = {
      totalFactories: 0,
      activeFactories: 0,
      failedFactories: 0,
      uptime: Date.now()
    };
    
    this.config = {
      maxFactories: 100,
      healthCheckInterval: 30000, // 30 seconds
      restartThreshold: 3, // Restart after 3 failures
      maxRestarts: 5
    };
    
    this.loadConfiguration();
    this.initializeSystem();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] 🎼 ORCHESTRATOR: ${message}`);
  }

  loadConfiguration() {
    const configPath = path.join(__dirname, 'data', 'orchestrator-config.json');
    if (fs.existsSync(configPath)) {
      const savedConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      this.config = { ...this.config, ...savedConfig };
    }
  }

  saveConfiguration() {
    const configPath = path.join(__dirname, 'data', 'orchestrator-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
  }

  async initializeSystem() {
    this.log('Initializing automation orchestrator...');
    
    try {
      // Create necessary directories
      this.createDirectories();
      
      // Load existing factories
      await this.loadFactories();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start continuous factory generation
      this.startContinuousGeneration();
      
      this.log('Automation orchestrator initialized successfully');
    } catch (error) {
      this.log(`Error initializing system: ${error.message}`);
      throw error;
    }
  }

  createDirectories() {
    const dirs = [
      'automation/factories',
      'automation/variations',
      'automation/data',
      'automation/logs',
      'automation/reports',
      'automation/pids'
    ];
    
    for (const dir of dirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    }
  }

  async loadFactories() {
    const factoriesDir = path.join(this.projectRoot, 'automation', 'factories');
    if (!fs.existsSync(factoriesDir)) {
      return;
    }
    
    const factoryDirs = fs.readdirSync(factoriesDir).filter(dir => {
      return fs.statSync(path.join(factoriesDir, dir)).isDirectory();
    });
    
    for (const factoryDir of factoryDirs) {
      const factoryId = factoryDir;
      const configPath = path.join(factoriesDir, factoryDir, `${factoryId}-config.json`);
      
      if (fs.existsSync(configPath)) {
        try {
          const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
          this.factories.set(factoryId, {
            id: factoryId,
            config: config,
            status: 'stopped',
            failures: 0,
            restarts: 0,
            lastStarted: null
          });
        } catch (error) {
          this.log(`Error loading factory ${factoryId}: ${error.message}`);
        }
      }
    }
    
    this.health.totalFactories = this.factories.size;
    this.log(`Loaded ${this.factories.size} factories`);
  }

  async startFactory(factoryId) {
    const factory = this.factories.get(factoryId);
    if (!factory) {
      throw new Error(`Factory ${factoryId} not found`);
    }
    
    if (factory.status === 'running') {
      this.log(`Factory ${factoryId} is already running`);
      return;
    }
    
    this.log(`Starting factory ${factoryId}...`);
    
    try {
      const factoryDir = path.join(this.projectRoot, 'automation', 'factories', factoryId);
      const mainFile = path.join(factoryDir, `${factoryId}-main.js`);
      
      if (!fs.existsSync(mainFile)) {
        throw new Error(`Main file not found: ${mainFile}`);
      }
      
      // Start factory process
      const process = spawn('node', [mainFile], {
        cwd: factoryDir,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      // Store process reference
      this.processes.set(factoryId, process);
      
      // Set up event handlers
      process.on('error', (error) => {
        this.handleFactoryError(factoryId, error);
      });
      
      process.on('exit', (code) => {
        this.handleFactoryExit(factoryId, code);
      });
      
      // Update factory status
      factory.status = 'running';
      factory.lastStarted = new Date().toISOString();
      factory.failures = 0;
      
      this.health.activeFactories++;
      
      this.log(`Factory ${factoryId} started successfully`);
      
    } catch (error) {
      this.handleFactoryError(factoryId, error);
    }
  }

  async stopFactory(factoryId) {
    const factory = this.factories.get(factoryId);
    if (!factory) {
      return;
    }
    
    const process = this.processes.get(factoryId);
    if (process) {
      this.log(`Stopping factory ${factoryId}...`);
      
      try {
        process.kill('SIGTERM');
        
        // Wait for graceful shutdown
        setTimeout(() => {
          if (process.killed === false) {
            process.kill('SIGKILL');
          }
        }, 5000);
        
        factory.status = 'stopped';
        this.health.activeFactories--;
        
        this.processes.delete(factoryId);
        
        this.log(`Factory ${factoryId} stopped`);
      } catch (error) {
        this.log(`Error stopping factory ${factoryId}: ${error.message}`);
      }
    }
  }

  async restartFactory(factoryId) {
    this.log(`Restarting factory ${factoryId}...`);
    
    await this.stopFactory(factoryId);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    await this.startFactory(factoryId);
  }

  handleFactoryError(factoryId, error) {
    const factory = this.factories.get(factoryId);
    if (factory) {
      factory.failures++;
      factory.status = 'failed';
      this.health.failedFactories++;
      this.health.activeFactories--;
      
      this.log(`Factory ${factoryId} error: ${error.message}`);
      
      // Auto-restart if within threshold
      if (factory.failures <= this.config.restartThreshold && factory.restarts < this.config.maxRestarts) {
        factory.restarts++;
        setTimeout(() => {
          this.restartFactory(factoryId);
        }, 5000); // Wait 5 seconds before restart
      }
    }
  }

  handleFactoryExit(factoryId, code) {
    const factory = this.factories.get(factoryId);
    if (factory) {
      factory.status = 'stopped';
      this.health.activeFactories--;
      
      this.log(`Factory ${factoryId} exited with code: ${code}`);
      
      // Remove process reference
      this.processes.delete(factoryId);
    }
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log('Health monitoring started');
  }

  async performHealthCheck() {
    this.log('Performing health check...');
    
    let healthyCount = 0;
    let totalCount = 0;
    
    for (const [factoryId, factory] of this.factories) {
      totalCount++;
      
      if (factory.status === 'running') {
        const process = this.processes.get(factoryId);
        if (process && !process.killed) {
          healthyCount++;
        } else {
          factory.status = 'failed';
          this.health.failedFactories++;
          this.health.activeFactories--;
        }
      }
    }
    
    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    
    this.log(`Health check: ${healthyCount}/${totalCount} factories healthy (${healthPercentage.toFixed(1)}%)`);
    
    // Save health report
    this.saveHealthReport(healthyCount, totalCount, healthPercentage);
  }

  saveHealthReport(healthyCount, totalCount, healthPercentage) {
    const reportPath = path.join(this.projectRoot, 'automation', 'reports', 'health-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      health: {
        healthyCount,
        totalCount,
        healthPercentage,
        activeFactories: this.health.activeFactories,
        failedFactories: this.health.failedFactories
      },
      uptime: Date.now() - this.health.uptime,
      config: this.config
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  startContinuousGeneration() {
    setInterval(async () => {
      await this.generateNewFactories();
    }, 300000); // Every 5 minutes
    
    this.log('Continuous factory generation started');
  }

  async generateNewFactories() {
    this.log('Generating new automation factories...');
    
    try {
      // Check if we need more factories
      if (this.factories.size < this.config.maxFactories) {
        const factoryTypes = [
          'content-automation-factory',
          'marketing-automation-factory',
          'development-automation-factory'
        ];
        
        const randomType = factoryTypes[Math.floor(Math.random() * factoryTypes.length)];
        
        // Generate new factory
        const factoryGenerator = require('./continuous-automation-factory-generator.js');
        const generator = new factoryGenerator();
        
        const factoryId = await generator.generateAutomationFactory(randomType, {
          maxOutputs: Math.floor(Math.random() * 1000) + 100,
          qualityThreshold: Math.random() * 0.5 + 0.5,
          autoImprove: true,
          monitoring: true
        });
        
        // Add to orchestrator
        const factory = {
          id: factoryId,
          config: {
            type: randomType,
            generatedAt: new Date().toISOString()
          },
          status: 'stopped',
          failures: 0,
          restarts: 0,
          lastStarted: null
        };
        
        this.factories.set(factoryId, factory);
        this.health.totalFactories++;
        
        // Start the new factory
        await this.startFactory(factoryId);
        
        this.log(`Generated and started new factory: ${factoryId}`);
      }
    } catch (error) {
      this.log(`Error generating new factories: ${error.message}`);
    }
  }

  async startAllFactories() {
    this.log('Starting all factories...');
    
    for (const [factoryId, factory] of this.factories) {
      if (factory.status !== 'running') {
        await this.startFactory(factoryId);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between starts
      }
    }
    
    this.log('All factories started');
  }

  async stopAllFactories() {
    this.log('Stopping all factories...');
    
    for (const [factoryId, factory] of this.factories) {
      if (factory.status === 'running') {
        await this.stopFactory(factoryId);
      }
    }
    
    this.log('All factories stopped');
  }

  getStatus() {
    return {
      orchestrator: {
        status: 'running',
        uptime: Date.now() - this.health.uptime,
        config: this.config
      },
      health: this.health,
      factories: Array.from(this.factories.values()).map(factory => ({
        id: factory.id,
        status: factory.status,
        failures: factory.failures,
        restarts: factory.restarts,
        lastStarted: factory.lastStarted
      }))
    };
  }

  async start() {
    this.log('Starting automation orchestrator...');
    
    try {
      await this.initializeSystem();
      await this.startAllFactories();
      
      this.log('Automation orchestrator started successfully');
      
      // Keep the process running
      process.on('SIGINT', async () => {
        this.log('Shutting down orchestrator...');
        await this.stopAllFactories();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`Error starting orchestrator: ${error.message}`);
      throw error;
    }
  }
}

module.exports = AutomationOrchestrator;

// Auto-start if run directly
if (require.main === module) {
  const orchestrator = new AutomationOrchestrator();
  orchestrator.start().catch(console.error);
} 