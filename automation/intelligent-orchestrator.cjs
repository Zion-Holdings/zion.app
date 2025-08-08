#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.logFile = path.join(__dirname, 'logs', 'intelligent-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadAutomationSystems() {
    const systems = [
      { name: 'lint-monitor', path: 'lint-monitor.cjs', priority: 'high' },
      { name: 'lint-fixer', path: 'lint-error-fixer.cjs', priority: 'high' },
      { name: 'lint-manager', path: 'lint-automation-manager.cjs', priority: 'medium' },
      { name: 'code-quality', path: 'code-quality-monitor.cjs', priority: 'medium' },
      { name: 'performance', path: 'performance-optimizer.cjs', priority: 'low' },
      { name: 'content-generator', path: 'content-generator.cjs', priority: 'low' },
      { name: 'seo-optimizer', path: 'seo-optimizer.cjs', priority: 'medium' },
      { name: 'security-scanner', path: 'security-scanner.cjs', priority: 'high' },
      { name: 'test-generator', path: 'test-generator.cjs', priority: 'medium' },
      { name: 'app-intelligence', path: 'app-intelligence-enhancer.cjs', priority: 'medium' }
    ];

    for (const system of systems) {
      const systemPath = path.join(__dirname, system.path);
      if (fs.existsSync(systemPath)) {
        this.automationSystems.set(system.name, {
          ...system,
          path: systemPath,
          status: 'available',
          lastRun: null,
          successRate: 0,
          averageExecutionTime: 0
        });
      }
    }
  }

  async runSystem(systemName, options = {}) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      this.log(`❌ System not found: ${systemName}`);
      return false;
    }

    const startTime = Date.now();
    try {
      this.log(`🚀 Running system: ${systemName}`);
      
      const result = execSync(`node "${system.path}"`, { 
        encoding: 'utf8',
        stdio: 'pipe',
        ...options
      });
      
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(systemName, true, executionTime);
      
      this.log(`✅ System completed: ${systemName} (${executionTime}ms)`);
      // Best-effort git sync after successful system run
      try {
        const syncPath = path.join(__dirname, 'git-sync.cjs');
        if (fs.existsSync(syncPath)) {
          execSync(`node "${syncPath}"`, { stdio: 'pipe' });
        }
      } catch (e) {
        this.log(`⚠️ Git sync failed: ${e.message}`);
      }
      return { success: true, output: result, executionTime };
    } catch (error) {
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(systemName, false, executionTime);
      
      this.log(`❌ System failed: ${systemName} - ${error.message}`);
      return { success: false, error: error.message, executionTime };
    }
  }

  updateSystemMetrics(systemName, success, executionTime) {
    const system = this.automationSystems.get(systemName);
    if (!system) return;

    // Update success rate
    const currentSuccessRate = system.successRate;
    const totalRuns = (system.lastRun ? 1 : 0) + 1;
    system.successRate = success ? (currentSuccessRate + 1) / totalRuns : currentSuccessRate / totalRuns;

    // Update average execution time
    const currentAvgTime = system.averageExecutionTime;
    system.averageExecutionTime = (currentAvgTime + executionTime) / totalRuns;

    system.lastRun = new Date();
    system.status = success ? 'success' : 'failed';
  }

  async runPriorityBasedExecution() {
    this.log('🎯 Running priority-based execution...');
    
    const systems = Array.from(this.automationSystems.values())
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

    const results = [];
    for (const system of systems) {
      if (system.status === 'available') {
        const result = await this.runSystem(system.name);
        results.push({ name: system.name, ...result });
        
        // Add delay between high-priority systems
        if (system.priority === 'high') {
          await this.sleep(2000);
        }
      }
    }

    this.log(`📊 Priority execution completed: ${results.length} systems`);
    return results;
  }

  async runIntelligentExecution() {
    this.log('🧠 Running intelligent execution...');
    
    // Analyze current state
    const state = await this.analyzeCurrentState();
    
    // Determine which systems to run based on state
    const systemsToRun = this.determineOptimalSystems(state);
    
    const results = [];
    for (const systemName of systemsToRun) {
      const result = await this.runSystem(systemName);
      results.push({ name: systemName, ...result });
      
      // Learn from the result
      this.learnFromExecution(systemName, result, state);
    }

    this.log(`📊 Intelligent execution completed: ${results.length} systems`);
    return results;
  }

  async analyzeCurrentState() {
    const state = {
      hasLintErrors: false,
      hasTypeScriptErrors: false,
      hasSecurityIssues: false,
      hasPerformanceIssues: false,
      hasSEOMissing: false,
      hasMissingTests: false,
      lastBuildTime: null,
      codeComplexity: 0
    };

    try {
      // Check for lint errors
      execSync('npm run lint', { stdio: 'pipe' });
    } catch (error) {
      state.hasLintErrors = true;
    }

    try {
      // Check for TypeScript errors
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
    } catch (error) {
      state.hasTypeScriptErrors = true;
    }

    // Check build time
    try {
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      state.lastBuildTime = Date.now() - buildStart;
    } catch (error) {
      // Build failed
    }

    return state;
  }

  determineOptimalSystems(state) {
    const systems = [];

    // Always run high-priority systems if there are issues
    if (state.hasLintErrors) {
      systems.push('lint-fixer');
    }
    if (state.hasTypeScriptErrors) {
      systems.push('code-quality');
    }
    if (state.hasSecurityIssues) {
      systems.push('security-scanner');
    }

    // Run medium-priority systems based on conditions
    if (state.hasSEOMissing) {
      systems.push('seo-optimizer');
    }
    if (state.hasMissingTests) {
      systems.push('test-generator');
    }

    // Run low-priority systems periodically
    const now = Date.now();
    const systemsToCheck = ['performance', 'content-generator'];
    
    for (const systemName of systemsToCheck) {
      const system = this.automationSystems.get(systemName);
      if (system && (!system.lastRun || now - system.lastRun.getTime() > 30 * 60 * 1000)) {
        systems.push(systemName);
      }
    }

    return systems;
  }

  learnFromExecution(systemName, result, state) {
    const learningKey = `${systemName}_${JSON.stringify(state)}`;
    const currentData = this.learningData.get(learningKey) || {
      totalRuns: 0,
      successfulRuns: 0,
      averageExecutionTime: 0
    };

    currentData.totalRuns++;
    if (result.success) {
      currentData.successfulRuns++;
    }
    currentData.averageExecutionTime = (currentData.averageExecutionTime + result.executionTime) / currentData.totalRuns;

    this.learningData.set(learningKey, currentData);
  }

  async runContinuousIntelligence() {
    this.log('🔄 Starting continuous intelligent automation...');
    
    // Run initial analysis
    await this.runIntelligentExecution();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running continuous intelligence cycle...');
      await this.runIntelligentExecution();
    }, 5 * 60 * 1000); // Every 5 minutes

    // Set up file watcher for immediate response
    this.startFileWatcher();
  }

  startFileWatcher() {
    this.log('👀 Starting intelligent file watcher...');
    
    // Simple file watcher using fs.watch
    const watchDirectories = ['pages', 'components', 'utils', 'hooks'];
    
    for (const dir of watchDirectories) {
      if (fs.existsSync(dir)) {
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (filename && (filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.js'))) {
            const filePath = path.join(dir, filename);
            this.log(`📝 File changed: ${filePath}`);
            setTimeout(() => {
              this.handleIntelligentFileChange(filePath);
            }, 3000);
          }
        });
      }
    }
    
    this.log('✅ Intelligent file watcher started');
  }

  async handleIntelligentFileChange(filePath) {
    // Analyze the type of change and run appropriate systems
    const fileExtension = path.extname(filePath);
    const fileName = path.basename(filePath);
    
    if (fileExtension === '.tsx' || fileExtension === '.ts') {
      // Check for lint issues first
      try {
        execSync(`npx eslint "${filePath}"`, { stdio: 'pipe' });
      } catch (error) {
        this.log(`🔧 Auto-fixing issues in: ${filePath}`);
        await this.runSystem('lint-fixer');
      }
      
      // If it's a component, consider generating tests
      if (filePath.includes('components/')) {
        const system = this.automationSystems.get('test-generator');
        if (system && (!system.lastRun || Date.now() - system.lastRun.getTime() > 10 * 60 * 1000)) {
          await this.runSystem('test-generator');
        }
      }
    }
  }

  generateIntelligenceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systems: {},
      learningData: {},
      recommendations: []
    };

    // System performance data
    for (const [name, system] of this.automationSystems) {
      report.systems[name] = {
        priority: system.priority,
        successRate: system.successRate,
        averageExecutionTime: system.averageExecutionTime,
        lastRun: system.lastRun?.toISOString(),
        status: system.status
      };
    }

    // Learning data
    for (const [key, data] of this.learningData) {
      report.learningData[key] = {
        successRate: data.successfulRuns / data.totalRuns,
        averageExecutionTime: data.averageExecutionTime,
        totalRuns: data.totalRuns
      };
    }

    // Generate recommendations
    for (const [name, system] of this.automationSystems) {
      if (system.successRate < 0.8) {
        report.recommendations.push(`Improve ${name} system reliability (success rate: ${(system.successRate * 100).toFixed(1)}%)`);
      }
      if (system.averageExecutionTime > 30000) {
        report.recommendations.push(`Optimize ${name} system performance (avg time: ${system.averageExecutionTime}ms)`);
      }
    }

    return report;
  }

  async optimizeSystems() {
    this.log('🔧 Optimizing automation systems...');
    
    const report = this.generateIntelligenceReport();
    
    // Implement optimizations based on report
    for (const recommendation of report.recommendations) {
      this.log(`💡 Recommendation: ${recommendation}`);
    }

    // Adjust system priorities based on performance
    for (const [name, system] of this.automationSystems) {
      if (system.successRate < 0.7) {
        system.priority = 'high';
        this.log(`⚠️ Increased priority for ${name} due to low success rate`);
      } else if (system.successRate > 0.95 && system.priority === 'high') {
        system.priority = 'medium';
        this.log(`✅ Decreased priority for ${name} due to high success rate`);
      }
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.log('🛑 Intelligent orchestrator stopped');
  }

  getStatus() {
    const status = {
      running: true,
      systemsCount: this.automationSystems.size,
      learningDataSize: this.learningData.size,
      report: this.generateIntelligenceReport()
    };
    
    this.log(`📊 Status: ${status.running ? 'Running' : 'Stopped'}`);
    this.log(`📊 Systems: ${status.systemsCount}`);
    this.log(`📊 Learning Data: ${status.learningDataSize} entries`);
    
    return status;
  }
}

// CLI handling
const orchestrator = new IntelligentOrchestrator();
const command = process.argv[2];
const subCommand = process.argv[3];

switch (command) {
  case 'run':
    if (subCommand === 'priority') {
      orchestrator.runPriorityBasedExecution();
    } else if (subCommand === 'intelligent') {
      orchestrator.runIntelligentExecution();
    } else {
      orchestrator.runIntelligentExecution();
    }
    break;
  case 'continuous':
    orchestrator.runContinuousIntelligence();
    break;
  case 'optimize':
    orchestrator.optimizeSystems();
    break;
  case 'status':
    orchestrator.getStatus();
    process.exit(0);
    break;
  case 'report':
    const report = orchestrator.generateIntelligenceReport();
    console.log(JSON.stringify(report, null, 2));
    process.exit(0);
    break;
  default:
    console.log('Usage: node intelligent-orchestrator.js [run|continuous|optimize|status|report] [priority|intelligent]');
    console.log('\nCommands:');
    console.log('  run priority     - Run priority-based execution');
    console.log('  run intelligent  - Run intelligent execution');
    console.log('  continuous       - Start continuous intelligent automation');
    console.log('  optimize         - Optimize systems based on performance');
    console.log('  status           - Show current status');
    console.log('  report           - Generate intelligence report');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  orchestrator.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  orchestrator.stop();
  process.exit(0);
});
