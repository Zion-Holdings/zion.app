
const winston = require('winston');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-manager' },
  transports: [
    new winston.transports.File({ filename: 'logs/automation-manager.log' }),
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

/**
 * Comprehensive Automation Manager
 * 
 * This script provides a unified interface for:
 * - Testing all automation systems
 * - Fixing common issues
 * - Starting working systems
 * - Monitoring system health
 * - Generating reports
 */

class AutomationManager {
  constructor() {
    this.systems = new Map();
    this.testResults = new Map();
    this.fixes = [];
    this.startTime = Date.now();
  }

  async runFullAutomationCycle() {
    logger.info('🚀 Starting Full Automation Cycle');
    logger.info('='.repeat(50));

    try {
      // Step 1: Test all systems
      await this.testAllSystems();

      // Step 2: Fix issues
      await this.fixIssues();

      // Step 3: Start working systems
      await this.startWorkingSystems();

      // Step 4: Monitor and report
      await this.monitorAndReport();

      logger.info('✅ Full automation cycle completed successfully!');
    } catch (error) {
      logger.error('❌ Automation cycle failed:', error);
      throw error;
    }
  }

  async testAllSystems() {
    logger.info('🧪 Testing all automation systems...');

    try {
      // Run the test script
      const testScript = require('./test-all-automations.js');
      const tester = new testScript();
      await tester.runAllTests();

      // Parse test results
      const testReportPath = path.join(__dirname, 'test-report.json');
      if (await this.fileExists(testReportPath)) {
        const testData = JSON.parse(await fs.readFile(testReportPath, 'utf8'));
        this.testResults = new Map(
          testData.results.map(result => [result.testName, result])
        );
      }

      logger.info(`📊 Test completed: ${this.testResults.size} systems tested`);
    } catch (error) {
      logger.error('❌ Testing failed:', error.message);
    }
  }

  async fixIssues() {
    logger.info('🔧 Fixing automation system issues...');

    const fixes = [];

    // Fix common syntax errors
    fixes.push(await this.fixSyntaxErrors());
    
    // Fix missing dependencies
    fixes.push(await this.fixDependencies());
    
    // Fix configuration issues
    fixes.push(await this.fixConfigurations());

    this.fixes = fixes.flat();
    logger.info(`🔧 Applied ${this.fixes.length} fixes`);
  }

  async fixSyntaxErrors() {
    const fixes = [];

    // Fix common syntax patterns
    const syntaxFixes = [
      {
        file: 'automation/cursor-automated-communication.js',
        pattern: /apiEndpoint: config\.apiEndpoint \|\| https:\/\/api\.cursor\.sh'/g,
        replacement: "apiEndpoint: config.apiEndpoint || 'https://api.cursor.sh'"
      },
      {
        file: 'automation/core/AutomationTask.js',
        pattern: /this\.lastStatus = pending';/g,
        replacement: "this.lastStatus = 'pending';"
      }
    ];

    for (const fix of syntaxFixes) {
      try {
        if (await this.fileExists(fix.file)) {
          let content = await fs.readFile(fix.file, 'utf8');
          const originalContent = content;
          
          content = content.replace(fix.pattern, fix.replacement);
          
          if (content !== originalContent) {
            await fs.writeFile(fix.file, content, 'utf8');
            fixes.push(`Fixed syntax in ${fix.file}`);
          }
        }
      } catch (error) {
        logger.error(`Error fixing ${fix.file}:`, error.message);
      }
    }

    return fixes;
  }

  async fixDependencies() {
    const fixes = [];

    try {
      // Check if async package is installed
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
      
      if (!packageJson.dependencies.async) {
        // Add async dependency
        packageJson.dependencies.async = "^3.2.5";
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
        fixes.push('Added async dependency to package.json');
      }
    } catch (error) {
      logger.error('Error fixing dependencies:', error.message);
    }

    return fixes;
  }

  async fixConfigurations() {
    const fixes = [];

    try {
      // Ensure logs directory exists
      const logsDir = path.join(__dirname, 'logs');
      if (!await this.fileExists(logsDir)) {
        await fs.mkdir(logsDir, { recursive: true });
        fixes.push('Created logs directory');
      }

      // Ensure data directory exists
      const dataDir = path.join(__dirname, 'data');
      if (!await this.fileExists(dataDir)) {
        await fs.mkdir(dataDir, { recursive: true });
        fixes.push('Created data directory');
      }
    } catch (error) {
      logger.error('Error fixing configurations:', error.message);
    }

    return fixes;
  }

  async startWorkingSystems() {
    logger.info('🚀 Starting working automation systems...');

    try {
      const WorkingAutomationStarter = require('./start-working-automations.js');
      const starter = new WorkingAutomationStarter();
      
      // Start systems in background
      starter.startAllWorkingSystems().catch(error => {
        logger.error('Error in automation starter:', error);
      });

      this.systems.set('automationStarter', starter);
      logger.info('✅ Working systems started');
    } catch (error) {
      logger.error('❌ Failed to start working systems:', error.message);
    }
  }

  async monitorAndReport() {
    logger.info('📊 Monitoring automation systems...');

    // Start monitoring loop
    setInterval(async () => {
      await this.generateHealthReport();
    }, 300000); // Every 5 minutes

    // Generate initial report
    await this.generateHealthReport();
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime,
      systems: {
        total: this.systems.size,
        running: Array.from(this.systems.values()).filter(s => s.isRunning).length
      },
      testResults: {
        total: this.testResults.size,
        passed: Array.from(this.testResults.values()).filter(r => r.passed).length,
        failed: Array.from(this.testResults.values()).filter(r => !r.passed).length
      },
      fixes: this.fixes,
      health: await this.getSystemHealth()
    };

    // Save report
    const reportPath = path.join(__dirname, 'automation-health-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

    logger.info(`📊 Health report generated: ${report.systems.running}/${report.systems.total} systems running`);
  }

  async getSystemHealth() {
    const health = {};

    // Check if main automation system is running
    try {
      const response = await fetch('http://localhost:3001/health');
      if (response.ok) {
        const data = await response.json();
        health.mainSystem = data.status;
      } else {
        health.mainSystem = 'unhealthy';
      }
    } catch (error) {
      health.mainSystem = 'unreachable';
    }

    return health;
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async createAutomationScripts() {
    logger.info('📝 Creating automation scripts for future use...');

    const scripts = [
      {
        name: 'start-automation.sh',
        content: `#!/bin/bash
cd "$(dirname "$0")"
node automation-manager.js run
`
      },
      {
        name: 'test-automation.sh',
        content: `#!/bin/bash
cd "$(dirname "$0")"
node automation/test-all-automations.js
`
      },
      {
        name: 'fix-automation.sh',
        content: `#!/bin/bash
cd "$(dirname "$0")"
node automation-manager.js fix
`
      },
      {
        name: 'monitor-automation.sh',
        content: `#!/bin/bash
cd "$(dirname "$0")"
node automation-manager.js monitor
`
      }
    ];

    for (const script of scripts) {
      const scriptPath = path.join(process.cwd(), script.name);
      await fs.writeFile(scriptPath, script.content);
      await fs.chmod(scriptPath, 0o755); // Make executable
      logger.info(`✅ Created ${script.name}`);
    }
  }

  async runCommand(command) {
    switch (command) {
      case 'run':
        await this.runFullAutomationCycle();
        break;
      case 'test':
        await this.testAllSystems();
        break;
      case 'fix':
        await this.fixIssues();
        break;
      case 'start':
        await this.startWorkingSystems();
        break;
      case 'monitor':
        await this.monitorAndReport();
        break;
      case 'create-scripts':
        await this.createAutomationScripts();
        break;
      default:
        logger.info('Available commands: run, test, fix, start, monitor, create-scripts');
    }
  }
}

// Main execution
if (require.main === module) {
  const manager = new AutomationManager();
  
  const command = process.argv[2] || 'run';
  
  manager.runCommand(command).catch(error => {
    logger.error('Automation manager failed:', error);
    process.exit(1);
  });
}

module.exports = AutomationManager; 