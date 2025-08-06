#!/usr/bin/env node

let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};
const { spawn } = require('child_process');
let chalk;
try {
  chalk = require('chalk');
} catch (error) {
  console.error('Failed to require chalk:', error);
  process.exit(1);
};
const { default: ora } = require('ora');
const { default: inquirer } = require('inquirer');

class AutonomousSystemLauncher {
  constructor() {
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
  constructor() {
    this.performanceMetrics = {
      startTime: Date.now(),
      operationsCompleted: 0,
      averageResponseTime: 0
    };
  } {
  constructor() {
    this.scriptDir = __dirname;
    this.logDir = path.join(this.scriptDir, 'logs');
    this.pidDir = path.join(this.scriptDir, 'pids');
    this.analyticsDir = path.join(this.scriptDir, 'analytics');
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    const dirs = [this.logDir, this.pidDir, this.analyticsDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logDir, 'launcher.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    
    const color = level === 'ERROR' ? 'red' : level === 'WARN' ? 'yellow' : 'green';
    this.log(chalk[color](`[${level}] ${message}`, 'info'));
  }

  /**
 * checkDependencies
 * @returns {Promise<void>}
 */
async checkDependencies() {
    const spinner = ora('Checking dependencies...').start();
    
    try {
      // Check Node.js version
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      
      if (majorVersion < 20) {
        throw new Error(`Node.js version ${nodeVersion} is too old. Please upgrade to Node.js 20 or higher.`);
      }
      
      // Check if package.json exists
      const packageJsonPath = path.join(this.scriptDir, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found. Please run npm install first.');
      }
      
      // Check if node_modules exists
      const nodeModulesPath = path.join(this.scriptDir, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('Installing dependencies...', 'WARN');
        await this.installDependencies();
      }
      
      spinner.succeed('Dependencies check passed');
      return true;
    } catch (error) {
      spinner.fail(`Dependencies check failed: ${error.message}`);
      return false;
    }
  }

  /**
 * installDependencies
 * @returns {Promise<void>}
 */
async installDependencies() {
    return new Promise((resolve, reject) => {
      const npm = spawn('npm', ['install'], {
        cwd: this.scriptDir,
        stdio: 'pipe'
      });
      
      npm.on('close', (code) => {
        if (code === 0) {
          this.log('Dependencies installed successfully');
          resolve();
        } else {
          reject(new Error(`npm install failed with code ${code}`));
        }
      });
      
      npm.on('error', (error) => {
        reject(error);
      });
    });
  }

  /**
 * showMainMenu
 * @returns {Promise<void>}
 */
async showMainMenu() {
    this.log(chalk.blue('\n🤖 Autonomous Agent System Launcher\n', 'info'));
    
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          { name: '🚀 Start Complete System', value: 'start-complete' },
          { name: '🔍 Start Website Analyzer', value: 'start-analyzer' },
          { name: '📝 Start Content Generator', value: 'start-generator' },
          { name: '🔧 Start Error Fixer', value: 'start-fixer' },
          { name: '⚡ Start Improvement Agent', value: 'start-improvement' },
          { name: '🔗 Start Content Integrator', value: 'start-integrator' },
          { name: '📊 View System Status', value: 'status' },
          { name: '📋 View Logs', value: 'logs' },
          { name: '🛑 Stop All Agents', value: 'stop-all' },
          { name: '🧹 Clean System', value: 'clean' },
          { name: '❌ Exit', value: 'exit' }
        ]
      }
    ]);
    
    return action;
  }

  /**
 * startCompleteSystem
 * @returns {Promise<void>}
 */
async startCompleteSystem() {
    const spinner = ora('Starting complete autonomous system...').start();
    
    try {
      // Start master orchestrator
      await this.startMasterOrchestrator();
      
      // Start all agents
      await this.startAllAgents();
      
      // Start cron system
      await this.startCronSystem();
      
      spinner.succeed('Complete autonomous system started successfully');
      this.log('Complete system launched');
      
    } catch (error) {
      spinner.fail(`Failed to start complete system: ${error.message}`);
      this.log(`Error starting complete system: ${error.message}`, 'ERROR');
    }
  }

  /**
 * startMasterOrchestrator
 * @returns {Promise<void>}
 */
async startMasterOrchestrator() {
    return new Promise((resolve, reject) => {
      const orchestratorPath = path.join(this.scriptDir, 'autonomous-master-orchestrator.js');
      
      if (!fs.existsSync(orchestratorPath)) {
        reject(new Error('Master orchestrator script not found'));
        return;
      }
      
      const process = spawn('node', [orchestratorPath], {
        cwd: this.scriptDir,
        stdio: 'pipe',
        env: { ...process.env, NODE_ENV: 'production' }
      });
      
      process.stdout.on('data', (data) => {
        this.log(`[Orchestrator] ${data.toString().trim()}`);
      });
      
      process.stderr.on('data', (data) => {
        this.log(`[Orchestrator ERROR] ${data.toString().trim()}`, 'ERROR');
      });
      
      process.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Orchestrator exited with code ${code}`));
        }
      });
      
      // Save PID
      const pidFile = path.join(this.pidDir, 'master-orchestrator.pid');
      fs.writeFileSync(pidFile, process.pid.toString());
    });
  }

  /**
 * startAllAgents
 * @returns {Promise<void>}
 */
async startAllAgents() {
    const agents = [
      { name: 'Website Analyzer', script: 'enhanced-website-analyzer-agent.js' },
      { name: 'Content Generator', script: 'enhanced-content-generator-agent.js' },
      { name: 'Error Fixer', script: 'error-fixer-agent.js' },
      { name: 'Improvement Agent', script: 'autonomous-improvement-agent.js' },
      { name: 'Content Integrator', script: 'content-integration-agent.js' };
    ];
    
    for (const agent of agents) {
      await this.startAgent(agent.name, agent.script);
    }
  }

  /**
 * startAgent
 * @returns {Promise<void>}
 */
async startAgent() {
    return new Promise((resolve, reject) => {
      const scriptPath = path.join(this.scriptDir, scriptName);
      
      if (!fs.existsSync(scriptPath)) {
        this.log(`Agent script not found: ${scriptName}`, 'WARN');
        resolve();
        return;
      }
      
      const process = spawn('node', [scriptPath], {
        cwd: this.scriptDir,
        stdio: 'pipe',
        env: {
          ...process.env,
          NODE_ENV: 'production',
          AGENT_TYPE: agentName.toLowerCase().replace(/\s+/g, '-')
        };
      });
      
      process.stdout.on('data', (data) => {
        this.log(`[${agentName}] ${data.toString().trim()}`);
      });
      
      process.stderr.on('data', (data) => {
        this.log(`[${agentName} ERROR] ${data.toString().trim()}`, 'ERROR');
      });
      
      process.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`${agentName} exited with code ${code}`));
        }
      });
      
      // Save PID
      const pidFile = path.join(this.pidDir, `${agentName.toLowerCase().replace(/\s+/g, '-')}.pid`);
      fs.writeFileSync(pidFile, process.pid.toString());
    });
  }

  /**
 * startCronSystem
 * @returns {Promise<void>}
 */
async startCronSystem() {
    return new Promise((resolve, reject) => {
      const cronScriptPath = path.join(this.scriptDir, 'comprehensive-cron-system.sh');
      
      if (!fs.existsSync(cronScriptPath)) {
        reject(new Error('Cron system script not found'));
        return;
      }
      
      // Make script executable
      fs.chmodSync(cronScriptPath, 0o755);
      
      const process = spawn('bash', [cronScriptPath], {
        cwd: this.scriptDir,
        stdio: 'pipe';
      });
      
      process.stdout.on('data', (data) => {
        this.log(`[Cron System] ${data.toString().trim()}`);
      });
      
      process.stderr.on('data', (data) => {
        this.log(`[Cron System ERROR] ${data.toString().trim()}`, 'ERROR');
      });
      
      process.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Cron system exited with code ${code}`));
        }
      });
    });
  }

  /**
 * showSystemStatus
 * @returns {Promise<void>}
 */
async showSystemStatus() {
    this.log(chalk.blue('\n📊 System Status\n', 'info'));
    
    const status = await this.getSystemStatus();
    
    this.log(chalk.green('✅ Active Agents:', 'info'));
    status.activeAgents.forEach(agent => {
      this.log(`  • ${agent.name} (PID: ${agent.pid}, 'info')`);
    });
    
    if (status.inactiveAgents.length > 0) {
      this.log(chalk.red('❌ Inactive Agents:', 'info'));
      status.inactiveAgents.forEach(agent => {
        this.log(`  • ${agent.name}`, 'info');
      });
    }
    
    this.log(chalk.yellow('\n📈 Analytics:', 'info'));
    this.log(`  • Pages Analyzed: ${status.analytics.pagesAnalyzed}`, 'info');
    this.log(`  • Content Generated: ${status.analytics.contentGenerated}`, 'info');
    this.log(`  • Errors Fixed: ${status.analytics.errorsFixed}`, 'info');
    this.log(`  • Improvements Made: ${status.analytics.improvementsMade}`, 'info');
    
    this.log(chalk.cyan('\n💾 System Info:', 'info'));
    this.log(`  • Log Files: ${status.logFiles}`, 'info');
    this.log(`  • Generated Content: ${status.generatedContent}`, 'info');
    this.log(`  • Analysis Results: ${status.analysisResults}`, 'info');
  }

  /**
 * getSystemStatus
 * @returns {Promise<void>}
 */
async getSystemStatus() {
    const status = {
      activeAgents: [],
      inactiveAgents: [],
      analytics: {
        pagesAnalyzed: 0,
        contentGenerated: 0,
        errorsFixed: 0,
        improvementsMade: 0
      },
      logFiles: 0,
      generatedContent: 0,
      analysisResults: 0;
    };
    
    // Check agent PIDs
    const agentTypes = [
      'master-orchestrator',
      'website-analyzer',
      'content-generator',
      'error-fixer',
      'improvement-agent',
      'content-integrator';
    ];
    
    for (const agentType of agentTypes) {
      const pidFile = path.join(this.pidDir, `${agentType}.pid`);
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, 'utf8').trim();
        try {
          process.kill(pid, 0); // Check if process exists
          status.activeAgents.push({
            name: agentType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            pid: pid;
          });
        } catch (error) {
          status.inactiveAgents.push({
            name: agentType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          });
        }
      } else {
        status.inactiveAgents.push({
          name: agentType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        });
      }
    }
    
    // Count files
    status.logFiles = fs.readdirSync(this.logDir).length;
    status.generatedContent = fs.existsSync(path.join(this.scriptDir, 'generated-content')) 
      ? fs.readdirSync(path.join(this.scriptDir, 'generated-content')).length : 0;
    status.analysisResults = fs.existsSync(path.join(this.scriptDir, 'analysis-results')) 
      ? fs.readdirSync(path.join(this.scriptDir, 'analysis-results')).length : 0;
    
    // Load analytics
    const analyticsFile = path.join(this.scriptDir, 'master-analytics.json');
    if (fs.existsSync(analyticsFile)) {
      try {
        const analytics = JSON.parse(fs.readFileSync(analyticsFile, 'utf8'));
        status.analytics = { ...status.analytics, ...analytics };
      } catch (error) {
        this.log(`Error loading analytics: ${error.message}`, 'ERROR');
      }
    }
    
    return status;
  }

  /**
 * showLogs
 * @returns {Promise<void>}
 */
async showLogs() {
    this.log(chalk.blue('\n📋 Recent Logs\n', 'info'));
    
    const logFiles = fs.readdirSync(this.logDir).filter(file => file.endsWith('.log'));
    
    if (logFiles.length === 0) {
      this.log(chalk.yellow('No log files found.', 'info'));
      return;
    }
    
    const { logFile } = await inquirer.prompt([
      {
        type: 'list',
        name: 'logFile',
        message: 'Select log file to view:',
        choices: logFiles.map(file => ({ name: file, value: file }))
      }
    ]);
    
    const logPath = path.join(this.logDir, logFile);
    const logContent = fs.readFileSync(logPath, 'utf8');
    
    this.log(chalk.gray('\n--- Log Content ---', 'info'));
    this.log(logContent.slice(-1000, 'info')); // Show last 1000 characters
    this.log(chalk.gray('--- End of Log ---\n', 'info'));
  }

  /**
 * stopAllAgents
 * @returns {Promise<void>}
 */
async stopAllAgents() {
    const spinner = ora('Stopping all agents...').start();
    
    try {
      const pidFiles = fs.readdirSync(this.pidDir).filter(file => file.endsWith('.pid'));
      
      for (const pidFile of pidFiles) {
        const pidPath = path.join(this.pidDir, pidFile);
        const pid = fs.readFileSync(pidPath, 'utf8').trim();
        
        try {
          process.kill(pid, 'SIGTERM');
          this.log(`Stopped agent: ${pidFile.replace('.pid', '')}`);
        } catch (error) {
          this.log(`Failed to stop agent: ${pidFile.replace('.pid', '')}`, 'WARN');
        }
        
        // Remove PID file
        fs.unlinkSync(pidPath);
      }
      
      spinner.succeed('All agents stopped successfully');
      
    } catch (error) {
      spinner.fail(`Failed to stop agents: ${error.message}`);
      this.log(`Error stopping agents: ${error.message}`, 'ERROR');
    }
  }

  /**
 * cleanSystem
 * @returns {Promise<void>}
 */
async cleanSystem() {
    const spinner = ora('Cleaning system...').start();
    
    try {
      // Clean logs
      const logFiles = fs.readdirSync(this.logDir);
      for (const file of logFiles) {
        if (file.endsWith('.log')) {
          fs.unlinkSync(path.join(this.logDir, file));
        }
      }
      
      // Clean PID files
      const pidFiles = fs.readdirSync(this.pidDir);
      for (const file of pidFiles) {
        if (file.endsWith('.pid')) {
          fs.unlinkSync(path.join(this.pidDir, file));
        }
      }
      
      // Clean generated content (optional)
      const { cleanContent } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'cleanContent',
          message: 'Do you want to clean generated content as well?',
          default: false
        }
      ]);
      
      if (cleanContent) {
        const generatedDir = path.join(this.scriptDir, 'generated-content');
        const analysisDir = path.join(this.scriptDir, 'analysis-results');
        
        if (fs.existsSync(generatedDir)) {
          fs.rmSync(generatedDir, { recursive: true, force: true });
        }
        
        if (fs.existsSync(analysisDir)) {
          fs.rmSync(analysisDir, { recursive: true, force: true });
        }
      }
      
      spinner.succeed('System cleaned successfully');
      
    } catch (error) {
      spinner.fail(`Failed to clean system: ${error.message}`);
      this.log(`Error cleaning system: ${error.message}`, 'ERROR');
    }
  }

  /**
 * run
 * @returns {Promise<void>}
 */
async run() {
    this.log(chalk.blue('🤖 Autonomous Agent System Launcher', 'info'));
    this.log(chalk.gray('Version 1.0.0\n', 'info'));
    
    // Check dependencies
    const depsOk = await this.checkDependencies();
    if (!depsOk) {
      this.log(chalk.red('❌ Dependencies check failed. Please fix the issues and try again.', 'info'));
      process.exit(1);
    }
    
    // Main loop
    while (true) {
      try {
        const action = await this.showMainMenu();
        
        switch (action) {
          case 'start-complete':
            await this.startCompleteSystem();
            break;
          case 'start-analyzer':
            await this.startAgent('Website Analyzer', 'enhanced-website-analyzer-agent.js');
            break;
          case 'start-generator':
            await this.startAgent('Content Generator', 'enhanced-content-generator-agent.js');
            break;
          case 'start-fixer':
            await this.startAgent('Error Fixer', 'error-fixer-agent.js');
            break;
          case 'start-improvement':
            await this.startAgent('Improvement Agent', 'autonomous-improvement-agent.js');
            break;
          case 'start-integrator':
            await this.startAgent('Content Integrator', 'content-integration-agent.js');
            break;
          case 'status':
            await this.showSystemStatus();
            break;
          case 'logs':
            await this.showLogs();
            break;
          case 'stop-all':
            await this.stopAllAgents();
            break;
          case 'clean':
            await this.cleanSystem();
            break;
          case 'exit':
            this.log(chalk.green('👋 Goodbye!', 'info'));
            process.exit(0);
        }
        
        // Wait for user input before showing menu again
        if (action !== 'exit') {
          await inquirer.prompt([
            {
              type: 'input',
              name: 'continue',
              message: 'Press Enter to continue...'
            }
          ]);
        }
        
      } catch (error) {
        this.log(`Error in main loop: ${error.message}`, 'ERROR');
        this.log(chalk.red(`❌ Error: ${error.message}`, 'info'));
      }
    }
  }
}

// Run the launcher
if (require.main === module) {
  const launcher = new AutonomousSystemLauncher();
  launcher.run().catch(error => {
    console.error(chalk.red(`❌ Fatal error: ${error.message}`));
    process.exit(1);
  });
}

module.exports = AutonomousSystemLauncher;