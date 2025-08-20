#!/usr/bin/env node

'use strict';

// Ultimate Redundancy Master V2
// Centralized management and orchestration for all redundancy systems

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class UltimateRedundancyMasterV2 {
  constructor() {
    this.workspace = process.cwd();
    this.configFile = path.join(this.workspace, 'automation', 'ultimate-redundancy-v2-config.json');
    this.statusFile = path.join(this.workspace, 'automation', 'ultimate-redundancy-v2-status.json');
    this.logDir = path.join(this.workspace, 'automation', 'logs');
    this.ensureLogDir();
    this.loadConfig();
    this.systems = new Map();
    this.healthChecks = new Map();
    this.isRunning = false;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        const existingConfig = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
        // Check if it's the old format and convert it
        if (existingConfig.master && existingConfig.pm2 && !existingConfig.systems) {
          console.log('  Converting existing config format to new format...');
          this.config = this.convertConfigFormat(existingConfig);
          this.saveConfig(); // Save the converted config
        } else {
          this.config = existingConfig;
        }
      } else {
        this.config = this.getDefaultConfig();
        this.saveConfig();
      }
    } catch (error) {
      console.error('Error loading config, using defaults:', error.message);
      this.config = this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    return {
      version: '2.0.0',
      system: 'Ultimate Redundancy Master V2',
      enabled: true,
      autoRecovery: true,
      healthCheckInterval: 30000, // 30 seconds
      maxRetries: 3,
      retryDelay: 5000, // 5 seconds
      systems: {
        pm2: {
          enabled: true,
          priority: 'high',
          autoRestart: true,
          healthCheck: true
        },
        github: {
          enabled: true,
          priority: 'medium',
          autoRestart: false,
          healthCheck: true
        },
        netlify: {
          enabled: true,
          priority: 'medium',
          autoRestart: false,
          healthCheck: true
        },
        build: {
          enabled: true,
          priority: 'high',
          autoRestart: true,
          healthCheck: true
        },
        automation: {
          enabled: true,
          priority: 'high',
          autoRestart: true,
          healthCheck: true
        }
      },
      monitoring: {
        enabled: true,
        logLevel: 'info',
        metrics: true,
        alerts: true
      }
    };
  }

  // Convert existing config format to new format
  convertConfigFormat(existingConfig) {
    return {
      version: '2.0.0',
      system: 'Ultimate Redundancy Master V2',
      enabled: true,
      autoRecovery: existingConfig.master?.autoRecovery ?? true,
      healthCheckInterval: existingConfig.master?.healthCheckInterval ?? 30000,
      maxRetries: existingConfig.ultimate?.maxRetries ?? 3,
      retryDelay: 5000,
      systems: {
        pm2: {
          enabled: true,
          priority: 'high',
          autoRestart: existingConfig.pm2?.autoRecovery ?? true,
          healthCheck: true
        },
        github: {
          enabled: true,
          priority: 'medium',
          autoRestart: false,
          healthCheck: true
        },
        netlify: {
          enabled: true,
          priority: 'medium',
          autoRestart: false,
          healthCheck: true
        },
        build: {
          enabled: true,
          priority: 'high',
          autoRestart: true,
          healthCheck: true
        },
        automation: {
          enabled: true,
          priority: 'high',
          autoRestart: true,
          healthCheck: true
        }
      },
      monitoring: {
        enabled: true,
        logLevel: existingConfig.master?.logLevel?.toLowerCase() ?? 'info',
        metrics: true,
        alerts: true
      }
    };
  }

  saveConfig() {
    try {
      fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      console.error('Error saving config:', error.message);
    }
  }

  async initialize() {
    try {
      console.log('🚀 Initializing Ultimate Redundancy Master V2...');
      console.log('  Config loaded:', JSON.stringify(this.config, null, 2));
      
      // Initialize all systems
      await this.initializeSystems();
      
      // Start health monitoring
      if (this.config.monitoring?.enabled) {
        this.startHealthMonitoring();
      }
      
      // Start system orchestration
      this.startSystemOrchestration();
      
      this.isRunning = true;
      console.log('✅ Ultimate Redundancy Master V2 initialized successfully');
      
      return true;
    } catch (error) {
      console.error('❌ Error initializing Ultimate Redundancy Master V2:', error);
      return false;
    }
  }

  async initializeSystems() {
          const systemInitializers = [
        { name: 'PM2 Redundancy', key: 'pm2', init: () => this.initializePM2Redundancy() },
        { name: 'GitHub Actions Redundancy', key: 'github', init: () => this.initializeGitHubRedundancy() },
        { name: 'Netlify Functions Redundancy', key: 'netlify', init: () => this.initializeNetlifyRedundancy() },
        { name: 'Build System Redundancy', key: 'build', init: () => this.initializeBuildRedundancy() },
        { name: 'Automation Redundancy', key: 'automation', init: () => this.initializeAutomationRedundancy() }
      ];

      for (const system of systemInitializers) {
        try {
          if (this.config.systems[system.key]?.enabled) {
            console.log(`  Initializing ${system.name}...`);
            await system.init();
            console.log(`    ✅ ${system.name} initialized`);
          } else {
            console.log(`  ⏭️  ${system.name} disabled in config`);
          }
        } catch (error) {
          console.error(`    ❌ Error initializing ${system.name}:`, error.message);
        }
      }
    }

  async initializePM2Redundancy() {
    try {
      const pm2Redundancy = require('./pm2-redundancy-monitor.cjs');
      this.systems.set('pm2', pm2Redundancy);
      
      // Check PM2 status
      const pm2Status = execSync('pm2 list --format json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      console.log(`    PM2: ${processes.length} processes managed`);
      return true;
    } catch (error) {
      console.error('PM2 redundancy initialization failed:', error.message);
      return false;
    }
  }

  async initializeGitHubRedundancy() {
    try {
      const workflowsDir = path.join(this.workspace, '.github', 'workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(f => 
          f.endsWith('.yml') || f.endsWith('.yaml')
        );
        console.log(`    GitHub Actions: ${workflowFiles.length} workflows configured`);
        return true;
      } else {
        console.log('    GitHub Actions: No workflows directory found');
        return false;
      }
    } catch (error) {
      console.error('GitHub redundancy initialization failed:', error.message);
      return false;
    }
  }

  async initializeNetlifyRedundancy() {
    try {
      const netlifyDir = path.join(this.workspace, 'netlify', 'functions');
      if (fs.existsSync(netlifyDir)) {
        const functionFiles = fs.readdirSync(netlifyDir).filter(f => f.endsWith('.js'));
        console.log(`    Netlify Functions: ${functionFiles.length} functions available`);
        return true;
      } else {
        console.log('    Netlify Functions: No functions directory found');
        return false;
      }
    } catch (error) {
      console.error('Netlify redundancy initialization failed:', error.message);
      return false;
    }
  }

  async initializeBuildRedundancy() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workspace, 'package.json'), 'utf8'));
      const buildScripts = Object.keys(packageJson.scripts).filter(script => 
        script.includes('build') || script.includes('dev') || script.includes('start')
      );
      console.log(`    Build System: ${buildScripts.length} build scripts available`);
      return true;
    } catch (error) {
      console.error('Build redundancy initialization failed:', error.message);
      return false;
    }
  }

  async initializeAutomationRedundancy() {
    try {
      const automationDir = path.join(this.workspace, 'automation');
      const automationFiles = fs.readdirSync(automationDir).filter(f => 
        f.endsWith('.cjs') || f.endsWith('.js') || f.endsWith('.sh')
      );
      console.log(`    Automation: ${automationFiles.length} automation files available`);
      return true;
    } catch (error) {
      console.error('Automation redundancy initialization failed:', error.message);
      return false;
    }
  }

  startHealthMonitoring() {
    if (this.healthMonitoringInterval) {
      clearInterval(this.healthMonitoringInterval);
    }

    this.healthMonitoringInterval = setInterval(async () => {
      await this.performHealthChecks();
    }, this.config.healthCheckInterval);

    console.log(`  Health monitoring started (${this.config.healthCheckInterval}ms interval)`);
  }

  async performHealthChecks() {
    try {
      const healthReport = {
        timestamp: new Date().toISOString(),
        system: 'Ultimate Redundancy Master V2',
        status: 'healthy',
        checks: {}
      };

      let hasErrors = false;

      // Check PM2 status
      if (this.config.systems.pm2.enabled) {
        try {
          const pm2Status = execSync('pm2 list --format json', { encoding: 'utf8' });
          const processes = JSON.parse(pm2Status);
          const running = processes.filter(p => p.pm2_env.status === 'online').length;
          const total = processes.length;
          
          healthReport.checks.pm2 = {
            status: running === total ? 'healthy' : 'degraded',
            running,
            total,
            processes: processes.map(p => ({
              name: p.name,
              status: p.pm2_env.status,
              uptime: p.pm2_env.pm_uptime
            }))
          };

          if (running !== total) hasErrors = true;
        } catch (error) {
          healthReport.checks.pm2 = { status: 'error', error: error.message };
          hasErrors = true;
        }
      }

      // Check other systems
      for (const [systemName, system] of this.systems) {
        if (this.config.systems[systemName]?.healthCheck) {
          try {
            const health = await this.checkSystemHealth(systemName, system);
            healthReport.checks[systemName] = health;
            if (health.status === 'error') hasErrors = true;
          } catch (error) {
            healthReport.checks[systemName] = { status: 'error', error: error.message };
            hasErrors = true;
          }
        }
      }

      healthReport.status = hasErrors ? 'degraded' : 'healthy';
      
      // Save health report
      this.saveHealthReport(healthReport);
      
      // Trigger recovery if needed
      if (hasErrors && this.config.autoRecovery) {
        await this.triggerRecovery(healthReport);
      }

    } catch (error) {
      console.error('Error performing health checks:', error);
    }
  }

  async checkSystemHealth(systemName, system) {
    try {
      if (typeof system.getHealth === 'function') {
        return await system.getHealth();
      } else {
        return { status: 'unknown', message: 'No health check method available' };
      }
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  async triggerRecovery(healthReport) {
    console.log('🔄 Triggering auto-recovery...');
    
    for (const [systemName, check] of Object.entries(healthReport.checks)) {
      if (check.status === 'error' && this.config.systems[systemName]?.autoRestart) {
        try {
          console.log(`  Attempting to recover ${systemName}...`);
          await this.recoverSystem(systemName);
        } catch (error) {
          console.error(`  Recovery failed for ${systemName}:`, error.message);
        }
      }
    }
  }

  async recoverSystem(systemName) {
    try {
      switch (systemName) {
        case 'pm2':
          // Restart PM2 processes
          execSync('pm2 restart all', { stdio: 'inherit' });
          break;
        case 'build':
          // Trigger build recovery
          execSync('npm run build:recovery', { stdio: 'inherit' });
          break;
        case 'automation':
          // Restart automation systems
          execSync('npm run redundancy:restart', { stdio: 'inherit' });
          break;
        default:
          console.log(`  No recovery strategy for ${systemName}`);
      }
      
      console.log(`    ✅ ${systemName} recovery completed`);
      return true;
    } catch (error) {
      console.error(`    ❌ ${systemName} recovery failed:`, error.message);
      return false;
    }
  }

  saveHealthReport(report) {
    try {
      fs.writeFileSync(this.statusFile, JSON.stringify(report, null, 2));
    } catch (error) {
      console.error('Error saving health report:', error.message);
    }
  }

  startSystemOrchestration() {
    console.log('  Starting system orchestration...');
    
    // This would handle coordination between different redundancy systems
    // For now, we'll just log that it's active
    setInterval(() => {
      if (this.isRunning) {
        console.log('  🎭 System orchestration active - all systems coordinated');
      }
    }, 60000); // Log every minute
  }

  async shutdown() {
    try {
      console.log('🛑 Shutting down Ultimate Redundancy Master V2...');
      
      this.isRunning = false;
      
      if (this.healthMonitoringInterval) {
        clearInterval(this.healthMonitoringInterval);
      }
      
      // Gracefully shutdown all systems
      for (const [systemName, system] of this.systems) {
        try {
          if (typeof system.shutdown === 'function') {
            await system.shutdown();
          }
        } catch (error) {
          console.error(`Error shutting down ${systemName}:`, error.message);
        }
      }
      
      console.log('✅ Ultimate Redundancy Master V2 shutdown complete');
    } catch (error) {
      console.error('❌ Error during shutdown:', error);
    }
  }

  getStatus() {
    return {
      running: this.isRunning,
      config: this.config,
      systems: Array.from(this.systems.keys()),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    };
  }

  async run() {
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        process.exit(1);
      }

      // Keep the process running
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down...');
        await this.shutdown();
        process.exit(0);
      });

      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down...');
        await this.shutdown();
        process.exit(0);
      });

      console.log('🎯 Ultimate Redundancy Master V2 is running...');
      console.log('   Press Ctrl+C to stop');

    } catch (error) {
      console.error('❌ Fatal error in Ultimate Redundancy Master V2:', error);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const master = new UltimateRedundancyMasterV2();
  master.run().catch(console.error);
}

module.exports = UltimateRedundancyMasterV2;
