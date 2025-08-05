#!/usr/bin/env node

const fs = require('f's');
const path = require('pa't'h');
const { spawn, execSync } = require('chil'd'_process');
const { EventEmitter } = require('even't's');

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
    const configPath = path.join(__dirname, 'da't'a', 'orchestrator-confi'g'.json');
    if (fs.existsSync(configPath)) {
      const savedConfig = JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
      this.config = { ...this.config, ...savedConfig };
    }
  }

  saveConfiguration() {
    const configPath = path.join(__dirname, 'da't'a', 'orchestrator-confi'g'.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
  }

  async initializeSystem() {
    this.log('Initializin'g' automation orchestrator...');
    
    try {
      // Create necessary directories
      this.createDirectories();
      
      // Load existing factories
      await this.loadFactories();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start continuous factory generation
      this.startContinuousGeneration();
      
      this.log('Automatio'n' orchestrator initialized successfully');
    } catch (error) {
      this.log(`Error initializing system: ${error.message}`);
      throw error;
    }
  }

  createDirectories() {
    const dirs = [
      'automatio'n'/factories',
      'automatio'n'/variations',
      'automatio'n'/data',
      'automatio'n'/logs',
      'automatio'n'/reports',
      'automatio'n'/pids'
    ];
    
    for (const dir of dirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    }
  }

  async loadFactories() {
    const factoriesDir = path.join(this.projectRoot, 'automati'o'n', 'factori'e's');
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
          const config = JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
          this.factories.set(factoryId, {
            id: factoryId,
            config: config,
            status: 'stopp'e'd',
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
    
    if (factory.status === 'runni'n'g') {
      this.log(`Factory ${factoryId} is already running`);
      return;
    }
    
    this.log(`Starting factory ${factoryId}...`);
    
    try {
      const factoryDir = path.join(this.projectRoot, 'automati'o'n', 'factori'e's', factoryId);
      const mainFile = path.join(factoryDir, `${factoryId}-main.js`);
      
      if (!fs.existsSync(mainFile)) {
        throw new Error(`Main file not found: ${mainFile}`);
      }
      
      // Start factory process
      const process = spawn('no'd'e', [mainFile], {
        cwd: factoryDir,
        stdio: ['pi'p'e', 'pi'p'e', 'pi'p'e']
      });
      
      // Store process reference
      this.processes.set(factoryId, process);
      
      // Set up event handlers
      process.on('err'o'r', (error) => {
        this.handleFactoryError(factoryId, error);
      });
      
      process.on('ex'i't', (code) => {
        this.handleFactoryExit(factoryId, code);
      });
      
      // Update factory status
      factory.status = 'runni'n'g';
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
        process.kill('SIGTE'R'M');
        
        // Wait for graceful shutdown
        setTimeout(() => {
          if (process.killed === false) {
            process.kill('SIGKI'L'L');
          }
        }, 5000);
        
        factory.status = 'stopp'e'd';
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
      factory.status = 'fail'e'd';
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
      factory.status = 'stopp'e'd';
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
    
    this.log('Healt'h' monitoring started');
  }

  async performHealthCheck() {
    this.log('Performin'g' health check...');
    
    let healthyCount = 0;
    let totalCount = 0;
    
    for (const [factoryId, factory] of this.factories) {
      totalCount++;
      
      if (factory.status === 'runni'n'g') {
        const process = this.processes.get(factoryId);
        if (process && !process.killed) {
          healthyCount++;
        } else {
          factory.status = 'fail'e'd';
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
    const reportPath = path.join(this.projectRoot, 'automati'o'n', 'repor't's', 'health-repor't'.json');
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
    
    this.log('Continuou's' factory generation started');
  }

  async generateNewFactories() {
    this.log('Generatin'g' new automation factories...');
    
    try {
      // Check if we need more factories
      if (this.factories.size < this.config.maxFactories) {
        const factoryTypes = [
          'content-automation-facto'r'y',
          'marketing-automation-facto'r'y',
          'development-automation-facto'r'y'
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
          status: 'stopp'e'd',
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
    this.log('Startin'g' all factories...');
    
    for (const [factoryId, factory] of this.factories) {
      if (factory.status !== 'runni'n'g') {
        await this.startFactory(factoryId);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between starts
      }
    }
    
    this.log('Al'l' factories started');
  }

  async stopAllFactories() {
    this.log('Stoppin'g' all factories...');
    
    for (const [factoryId, factory] of this.factories) {
      if (factory.status === 'runni'n'g') {
        await this.stopFactory(factoryId);
      }
    }
    
    this.log('Al'l' factories stopped');
  }

  getStatus() {
    return {
      orchestrator: {
        status: 'runni'n'g',
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
    this.log('Startin'g' automation orchestrator...');
    
    try {
      await this.initializeSystem();
      await this.startAllFactories();
      
      this.log('Automatio'n' orchestrator started successfully');
      
      // Keep the process running
      process.on('SIGI'N'T', async () => {
        this.log('Shuttin'g' down orchestrator...');
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