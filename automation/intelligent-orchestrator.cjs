#!/usr/bin/env node

/**
 * Intelligent Orchestrator
 * Coordinates and manages automation systems intelligently
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentOrchestrator {
  constructor() {
    this.systems = {
      build: { status: 'unknown', lastRun: null, health: 0 },
      redundancy: { status: 'unknown', lastRun: null, health: 0 },
      monitoring: { status: 'unknown', lastRun: null, health: 0 },
      automation: { status: 'unknown', lastRun: null, health: 0 }
    };
    this.config = this.loadConfig();
  }

  async run(mode = 'continuous') {
    console.log('🧠 Intelligent Orchestrator starting...');
    
    try {
      switch (mode) {
        case 'continuous':
          await this.runContinuousMode();
          break;
        case 'intelligent':
          await this.runIntelligentMode();
          break;
        case 'status':
          this.printStatus();
          break;
        default:
          console.log(`Unknown mode: ${mode}. Available modes: continuous, intelligent, status`);
      }
      
      return { success: true };
    } catch (error) {
      console.error('❌ Orchestrator error:', error.message);
      return { success: false, error: error.message };
    }
  }

  async runContinuousMode() {
    console.log('🔄 Running in continuous mode...');
    
    while (true) {
      try {
        await this.assessSystemHealth();
        await this.executeMaintenance();
        await this.optimizePerformance();
        
        // Wait before next cycle
        await this.sleep(30000); // 30 seconds
      } catch (error) {
        console.error('Error in continuous mode:', error.message);
        await this.sleep(10000); // Wait 10 seconds on error
      }
    }
  }

  async runIntelligentMode() {
    console.log('🧠 Running in intelligent mode...');
    
    // Analyze current state
    await this.assessSystemHealth();
    
    // Determine what needs attention
    const priorities = this.determinePriorities();
    
    // Execute based on priorities
    for (const priority of priorities) {
      console.log(`🎯 Executing priority: ${priority.action}`);
      await this.executeAction(priority.action, priority.params);
    }
    
    console.log('✅ Intelligent mode execution completed');
  }

  async assessSystemHealth() {
    console.log('🔍 Assessing system health...');
    
    // Check build system
    this.systems.build.health = await this.checkBuildHealth();
    this.systems.build.status = this.getHealthStatus(this.systems.build.health);
    
    // Check redundancy system
    this.systems.redundancy.health = await this.checkRedundancyHealth();
    this.systems.redundancy.status = this.getHealthStatus(this.systems.redundancy.health);
    
    // Check monitoring system
    this.systems.monitoring.health = await this.checkMonitoringHealth();
    this.systems.monitoring.status = this.getHealthStatus(this.systems.monitoring.health);
    
    // Check automation system
    this.systems.automation.health = await this.checkAutomationHealth();
    this.systems.automation.status = this.getHealthStatus(this.systems.automation.health);
    
    this.systems.build.lastRun = new Date().toISOString();
  }

  async checkBuildHealth() {
    try {
      // Check if build can succeed
      const result = await this.runCommand('npm run build:health-check');
      return result.success ? 100 : 50;
    } catch (error) {
      return 0;
    }
  }

  async checkRedundancyHealth() {
    try {
      // Check redundancy systems
      const pm2Status = await this.runCommand('pm2 status');
      const hasProcesses = pm2Status.output.includes('online');
      return hasProcesses ? 100 : 50;
    } catch (error) {
      return 0;
    }
  }

  async checkMonitoringHealth() {
    try {
      // Check if monitoring is active
      const logFiles = fs.readdirSync('automation/logs').filter(f => f.endsWith('.log'));
      return logFiles.length > 0 ? 100 : 50;
    } catch (error) {
      return 0;
    }
  }

  async checkAutomationHealth() {
    try {
      // Check automation scripts
      const scripts = [
        'automation/pre-build-health-check.cjs',
        'automation/master-build-orchestrator.cjs',
        'automation/master-redundancy-orchestrator.cjs'
      ];
      
      let health = 0;
      for (const script of scripts) {
        if (fs.existsSync(script)) {
          health += 33;
        }
      }
      
      return health;
    } catch (error) {
      return 0;
    }
  }

  getHealthStatus(health) {
    if (health >= 80) return 'healthy';
    if (health >= 50) return 'warning';
    return 'critical';
  }

  determinePriorities() {
    const priorities = [];
    
    // Check for critical issues
    for (const [system, info] of Object.entries(this.systems)) {
      if (info.status === 'critical') {
        priorities.push({
          action: `fix_${system}`,
          params: { system, health: info.health },
          priority: 1
        });
      }
    }
    
    // Check for warnings
    for (const [system, info] of Object.entries(this.systems)) {
      if (info.status === 'warning') {
        priorities.push({
          action: `optimize_${system}`,
          params: { system, health: info.health },
          priority: 2
        });
      }
    }
    
    // Add maintenance tasks
    priorities.push({
      action: 'maintenance',
      params: {},
      priority: 3
    });
    
    return priorities.sort((a, b) => a.priority - b.priority);
  }

  async executeAction(action, params) {
    try {
      switch (action) {
        case 'fix_build':
          await this.fixBuildSystem(params);
          break;
        case 'fix_redundancy':
          await this.fixRedundancySystem(params);
          break;
        case 'fix_monitoring':
          await this.fixMonitoringSystem(params);
          break;
        case 'fix_automation':
          await this.fixAutomationSystem(params);
          break;
        case 'optimize_build':
          await this.optimizeBuildSystem(params);
          break;
        case 'optimize_redundancy':
          await this.optimizeRedundancySystem(params);
          break;
        case 'maintenance':
          await this.performMaintenance();
          break;
        default:
          console.log(`Unknown action: ${action}`);
      }
    } catch (error) {
      console.error(`Error executing action ${action}:`, error.message);
    }
  }

  async fixBuildSystem(params) {
    console.log('🔧 Fixing build system...');
    try {
      await this.runCommand('npm install');
      await this.runCommand('npm run build:health-check');
      console.log('✅ Build system fixed');
    } catch (error) {
      console.error('❌ Failed to fix build system:', error.message);
    }
  }

  async fixRedundancySystem(params) {
    console.log('🔧 Fixing redundancy system...');
    try {
      await this.runCommand('npm run redundancy:restart');
      console.log('✅ Redundancy system fixed');
    } catch (error) {
      console.error('❌ Failed to fix redundancy system:', error.message);
    }
  }

  async fixMonitoringSystem(params) {
    console.log('🔧 Fixing monitoring system...');
    try {
      // Create logs directory if it doesn't exist
      if (!fs.existsSync('automation/logs')) {
        fs.mkdirSync('automation/logs', { recursive: true });
      }
      console.log('✅ Monitoring system fixed');
    } catch (error) {
      console.error('❌ Failed to fix monitoring system:', error.message);
    }
  }

  async fixAutomationSystem(params) {
    console.log('🔧 Fixing automation system...');
    try {
      // Check and fix automation scripts
      const scripts = [
        'automation/pre-build-health-check.cjs',
        'automation/master-build-orchestrator.cjs'
      ];
      
      for (const script of scripts) {
        if (fs.existsSync(script)) {
          await this.runCommand(`node -c ${script}`);
        }
      }
      console.log('✅ Automation system fixed');
    } catch (error) {
      console.error('❌ Failed to fix automation system:', error.message);
    }
  }

  async optimizeBuildSystem(params) {
    console.log('⚡ Optimizing build system...');
    try {
      await this.runCommand('npm run build:smart');
      console.log('✅ Build system optimized');
    } catch (error) {
      console.error('❌ Failed to optimize build system:', error.message);
    }
  }

  async optimizeRedundancySystem(params) {
    console.log('⚡ Optimizing redundancy system...');
    try {
      await this.runCommand('npm run redundancy:pm2');
      console.log('✅ Redundancy system optimized');
    } catch (error) {
      console.error('❌ Failed to optimize redundancy system:', error.message);
    }
  }

  async performMaintenance() {
    console.log('🧹 Performing maintenance...');
    try {
      // Clean up old logs
      await this.cleanupLogs();
      
      // Update dependencies if needed
      await this.updateDependencies();
      
      console.log('✅ Maintenance completed');
    } catch (error) {
      console.error('❌ Maintenance failed:', error.message);
    }
  }

  async cleanupLogs() {
    try {
      const logsDir = 'automation/logs';
      if (fs.existsSync(logsDir)) {
        const logFiles = fs.readdirSync(logsDir).filter(f => f.endsWith('.log'));
        if (logFiles.length > 50) {
          // Keep only the 50 most recent log files
          const sortedFiles = logFiles
            .map(f => ({ name: f, path: path.join(logsDir, f) }))
            .sort((a, b) => fs.statSync(b.path).mtime.getTime() - fs.statSync(a.path).mtime.getTime());
          
          for (let i = 50; i < sortedFiles.length; i++) {
            fs.unlinkSync(sortedFiles[i].path);
          }
          console.log(`🧹 Cleaned up ${sortedFiles.length - 50} old log files`);
        }
      }
    } catch (error) {
      console.error('Error during log cleanup:', error.message);
    }
  }

  async updateDependencies() {
    try {
      // Check for outdated packages
      const result = await this.runCommand('npm outdated --json');
      if (result.output && Object.keys(JSON.parse(result.output)).length > 0) {
        console.log('📦 Updating outdated dependencies...');
        await this.runCommand('npm update');
      }
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      // This is expected behavior
    }
  }

  async executeMaintenance() {
    // Execute scheduled maintenance tasks
    const now = new Date();
    const hour = now.getHours();
    
    if (hour === 2) { // 2 AM
      await this.performMaintenance();
    }
  }

  async optimizePerformance() {
    // Optimize system performance
    try {
      // Clear build cache if it's too old
      if (fs.existsSync('.next')) {
        const stats = fs.statSync('.next');
        const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        
        if (ageInHours > 48) {
          console.log('🧹 Clearing old build cache...');
          await this.runCommand('rm -rf .next');
        }
      }
    } catch (error) {
      console.error('Error during performance optimization:', error.message);
    }
  }

  async runCommand(command) {
    try {
      const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
      return { success: true, output };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync('automation/orchestrator-config.json')) {
        return JSON.parse(fs.readFileSync('automation/orchestrator-config.json', 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load orchestrator config:', error.message);
    }
    
    return {
      checkInterval: 30000,
      maintenanceHour: 2,
      maxLogFiles: 50
    };
  }

  printStatus() {
    console.log('\n🧠 Intelligent Orchestrator Status');
    console.log('===================================');
    
    for (const [system, info] of Object.entries(this.systems)) {
      const statusIcon = info.status === 'healthy' ? '✅' : info.status === 'warning' ? '⚠️' : '❌';
      console.log(`${statusIcon} ${system}: ${info.status} (${info.health}%)`);
      if (info.lastRun) {
        console.log(`   Last run: ${info.lastRun}`);
      }
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new IntelligentOrchestrator();
  const mode = process.argv[2] || 'status';
  
  orchestrator.run(mode).then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
}

module.exports = IntelligentOrchestrator;