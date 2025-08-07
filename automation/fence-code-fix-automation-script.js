#!/usr/bin/env node

/**
 * Fence Code Fix Automation Script
 * Comprehensive automation script that continuously searches and fixes fence code blocks errors
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Import agents
const FileScannerAgent = require('./fence-code-fix-specialized-agents/file-scanner-agent');
const CodeFixerAgent = require('./fence-code-fix-specialized-agents/code-fixer-agent');

class FenceCodeFixAutomationScript {
  constructor() {
    this.config = this.loadConfig();
    this.agents = new Map();
    this.isRunning = false;
    this.stats = {
      startTime: Date.now(),
      totalFilesScanned: 0,
      totalErrorsFound: 0,
      totalErrorsFixed: 0,
      totalBackupsCreated: 0
    };
    
    this.setupDirectories();
    this.initializeAgents();
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'fence-code-fix-autonomous-agents-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    
    return {
      scanInterval: 30000,
      maxConcurrentAgents: 5,
      fileExtensions: ['.js', '.ts', '.jsx', '.tsx', '.md', '.mdx'],
      excludePatterns: ['node_modules', '.git', '.next', 'dist', 'build'],
      createBackup: true,
      validateAfterFix: true,
      maxRetries: 3
    };
  }

  setupDirectories() {
    const dirs = [
      'fence-code-fix-logs',
      'fence-code-fix-backups',
      'fence-code-fix-status',
      'fence-code-fix-pids'
    ];

    dirs.forEach(dir => {
      const fullPath = path.join(__dirname, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
  }

  initializeAgents() {
    // Initialize File Scanner Agent
    const fileScannerAgent = new FileScannerAgent({
      scanInterval: this.config.scanInterval,
      fileExtensions: this.config.fileExtensions,
      excludePatterns: this.config.excludePatterns
    });

    // Initialize Code Fixer Agent
    const codeFixerAgent = new CodeFixerAgent({
      createBackup: this.config.createBackup,
      validateAfterFix: this.config.validateAfterFix,
      maxRetries: this.config.maxRetries
    });

    // Set up communication between agents
    fileScannerAgent.onErrorFound = (data) => {
      this.handleErrorsFound(data);
    };

    this.agents.set('file-scanner', fileScannerAgent);
    this.agents.set('code-fixer', codeFixerAgent);
  }

  async handleErrorsFound(data) {
    const { file, errors, timestamp } = data;
    
    this.log(`Processing ${errors.length} errors from ${file}`);
    this.stats.totalErrorsFound += errors.length;
    
    // Queue errors for fixing
    const codeFixerAgent = this.agents.get('code-fixer');
    if (codeFixerAgent) {
      await codeFixerAgent.queueFix(file, errors);
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('Automation script is already running');
      return;
    }

    this.isRunning = true;
    this.log('Starting Fence Code Fix Automation Script');

    // Start all agents
    for (const [name, agent] of this.agents) {
      try {
        await agent.start();
        this.log(`Started agent: ${name}`);
      } catch (error) {
        this.log(`Failed to start agent ${name}: ${error.message}`, 'error');
      }
    }

    // Start monitoring
    this.startMonitoring();

    // Start periodic stats collection
    setInterval(() => {
      this.collectStats();
    }, 60000); // Every minute

    this.log('Fence Code Fix Automation Script started successfully');
  }

  async stop() {
    this.isRunning = false;
    this.log('Stopping Fence Code Fix Automation Script');

    // Stop all agents
    for (const [name, agent] of this.agents) {
      try {
        await agent.stop();
        this.log(`Stopped agent: ${name}`);
      } catch (error) {
        this.log(`Error stopping agent ${name}: ${error.message}`, 'error');
      }
    }

    // Save final stats
    this.saveStats();
    this.log('Fence Code Fix Automation Script stopped');
  }

  startMonitoring() {
    // Monitor agent health
    setInterval(() => {
      this.checkAgentHealth();
    }, 30000); // Every 30 seconds

    // Monitor system resources
    setInterval(() => {
      this.checkSystemResources();
    }, 60000); // Every minute
  }

  checkAgentHealth() {
    for (const [name, agent] of this.agents) {
      const stats = agent.getStats();
      if (!stats.isRunning) {
        this.log(`Agent ${name} is not running, attempting restart`, 'warn');
        this.restartAgent(name);
      }
    }
  }

  async restartAgent(name) {
    try {
      const agent = this.agents.get(name);
      if (agent) {
        await agent.stop();
        await agent.start();
        this.log(`Restarted agent: ${name}`);
      }
    } catch (error) {
      this.log(`Failed to restart agent ${name}: ${error.message}`, 'error');
    }
  }

  checkSystemResources() {
    const memUsage = process.memoryUsage();
    const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    
    if (heapUsedMB > 100) {
      this.log(`High memory usage detected: ${heapUsedMB}MB`, 'warn');
      global.gc && global.gc();
    }
  }

  collectStats() {
    for (const [name, agent] of this.agents) {
      const agentStats = agent.getStats();
      
      // Aggregate stats
      if (agentStats.filesScanned) {
        this.stats.totalFilesScanned += agentStats.filesScanned;
      }
      if (agentStats.errorsFixed) {
        this.stats.totalErrorsFixed += agentStats.errorsFixed;
      }
      if (agentStats.backupsCreated) {
        this.stats.totalBackupsCreated += agentStats.backupsCreated;
      }
    }

    this.saveStats();
  }

  saveStats() {
    const statsFile = path.join(__dirname, 'fence-code-fix-status', 'automation-stats.json');
    const statsData = {
      ...this.stats,
      uptime: Date.now() - this.stats.startTime,
      timestamp: new Date().toISOString(),
      agents: Object.fromEntries(
        Array.from(this.agents.entries()).map(([name, agent]) => [
          name,
          agent.getStats()
        ])
      )
    };

    fs.writeFileSync(statsFile, JSON.stringify(statsData, null, 2));
  }

  getStatus() {
    const status = {
      isRunning: this.isRunning,
      stats: this.stats,
      agents: {}
    };

    for (const [name, agent] of this.agents) {
      status.agents[name] = agent.getStats();
    }

    return status;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [FenceCodeFixAutomation] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(__dirname, 'fence-code-fix-logs', 'automation-script.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  // Utility methods for manual operations
  async scanSpecificFile(filePath) {
    const fileScannerAgent = this.agents.get('file-scanner');
    if (fileScannerAgent) {
      const errors = await fileScannerAgent.scanFile(filePath);
      if (errors.length > 0) {
        this.log(`Found ${errors.length} errors in ${filePath}`);
        await this.handleErrorsFound({ file: filePath, errors, timestamp: Date.now() });
      } else {
        this.log(`No errors found in ${filePath}`);
      }
    }
  }

  async fixSpecificFile(filePath) {
    const fileScannerAgent = this.agents.get('file-scanner');
    const codeFixerAgent = this.agents.get('code-fixer');
    
    if (fileScannerAgent && codeFixerAgent) {
      const errors = await fileScannerAgent.scanFile(filePath);
      if (errors.length > 0) {
        await codeFixerAgent.queueFix(filePath, errors);
        this.log(`Queued ${errors.length} errors from ${filePath} for fixing`);
      } else {
        this.log(`No errors found in ${filePath}`);
      }
    }
  }

  async performFullScan() {
    const fileScannerAgent = this.agents.get('file-scanner');
    if (fileScannerAgent) {
      await fileScannerAgent.performFullScan();
    }
  }
}

// CLI interface
function showHelp() {
  console.log(`
Fence Code Fix Automation Script

Usage: node fence-code-fix-automation-script.js [COMMAND] [OPTIONS]

Commands:
  start                    - Start the automation script
  stop                     - Stop the automation script
  status                   - Show current status
  scan <file>              - Scan a specific file for errors
  fix <file>               - Fix errors in a specific file
  full-scan                - Perform a full scan of all files
  help                     - Show this help

Examples:
  node fence-code-fix-automation-script.js start
  node fence-code-fix-automation-script.js scan ./src/components/Button.js
  node fence-code-fix-automation-script.js fix ./README.md
  node fence-code-fix-automation-script.js status
`);
}

// Main execution
async function main() {
  const script = new FenceCodeFixAutomationScript();
  const command = process.argv[2];
  const args = process.argv.slice(3);

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await script.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await script.stop();
    process.exit(0);
  });

  switch (command) {
    case 'start':
      await script.start();
      break;
    case 'stop':
      await script.stop();
      break;
    case 'status':
      console.log(JSON.stringify(script.getStatus(), null, 2));
      break;
    case 'scan':
      if (args[0]) {
        await script.scanSpecificFile(args[0]);
      } else {
        console.log('Please specify a file to scan');
      }
      break;
    case 'fix':
      if (args[0]) {
        await script.fixSpecificFile(args[0]);
      } else {
        console.log('Please specify a file to fix');
      }
      break;
    case 'full-scan':
      await script.performFullScan();
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      console.log('Unknown command. Use "help" for usage information.');
      process.exit(1);
  }
}

// Run main function if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

module.exports = FenceCodeFixAutomationScript;
