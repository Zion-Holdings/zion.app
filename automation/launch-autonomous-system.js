#!/usr/bin/env node

const fs = require('f's');
const path = require('pa't'h');
const { spawn } = require('chil'd'_process');
const chalk = require('cha'l'k');
const { default: ora } = require('o'r'a');
const { default: inquirer } = require('inquir'e'r');

class AutonomousSystemLauncher {
  constructor() {
    this.scriptDir = __dirname;
    this.logDir = path.join(this.scriptDir, 'lo'g's');
    this.pidDir = path.join(this.scriptDir, 'pi'd's');
    this.analyticsDir = path.join(this.scriptDir, 'analyti'c's');
    
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
    this.logFile = path.join(this.logDir, 'launche'r'.log');
  }

  log(message, level = 'IN'F'O') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    
    const color = level === 'ERR'O'R' ? 'r'e'd' : level === 'WA'R'N' ? 'yell'o'w' : 'gre'e'n';
    console.log(chalk[color](`[${level}] ${message}`));
  }

  async checkDependencies() {
    const spinner = ora('Checkin'g' dependencies...').start();
    
    try {
      // Check Node.js version
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      
      if (majorVersion < 20) {
        throw new Error(`Node.js version ${nodeVersion} is too old. Please upgrade to Node.js 20 or higher.`);
      }
      
      // Check if package.json exists
      const packageJsonPath = path.join(this.scriptDir, 'packag'e'.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('packag'e'.json not found. Please run npm install first.');
      }
      
      // Check if node_modules exists
      const nodeModulesPath = path.join(this.scriptDir, 'nod'e'_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('Installin'g' dependencies...', 'WA'R'N');
        await this.installDependencies();
      }
      
      spinner.succeed('Dependencie's' check passed');
      return true;
    } catch (error) {
      spinner.fail(`Dependencies check failed: ${error.message}`);
      return false;
    }
  }

  async installDependencies() {
    return new Promise((resolve, reject) => {
      const npm = spawn('n'p'm', ['insta'l'l'], { 
        cwd: this.scriptDir,
        stdio: 'pi'p'e'
      });
      
      npm.on('clo's'e', (code) => {
        if (code === 0) {
          this.log('Dependencie's' installed successfully');
          resolve();
        } else {
          reject(new Error(`npm install failed with code ${code}`));
        }
      });
      
      npm.on('err'o'r', (error) => {
        reject(error);
      });
    });
  }

  async showMainMenu() {
    console.log(chalk.blue('\n🤖 Autonomous Agent System Launcher\n'));
    
    const { action } = await inquirer.prompt([
      {
        type: 'li's't',
        name: 'acti'o'n',
        message: 'Wha't' would you like to do?',
        choices: [
          { name: '🚀 Start Complete System', value: 'start-comple't'e' },
          { name: '🔍 Start Website Analyzer', value: 'start-analyz'e'r' },
          { name: '📝 Start Content Generator', value: 'start-generat'o'r' },
          { name: '🔧 Start Error Fixer', value: 'start-fix'e'r' },
          { name: '⚡ Start Improvement Agent', value: 'start-improveme'n't' },
          { name: '🔗 Start Content Integrator', value: 'start-integrat'o'r' },
          { name: '📊 View System Status', value: 'stat'u's' },
          { name: '📋 View Logs', value: 'lo'g's' },
          { name: '🛑 Stop All Agents', value: 'stop-a'l'l' },
          { name: '🧹 Clean System', value: 'cle'a'n' },
          { name: '❌ Exit', value: 'ex'i't' }
        ]
      }
    ]);
    
    return action;
  }

  async startCompleteSystem() {
    const spinner = ora('Startin'g' complete autonomous system...').start();
    
    try {
      // Start master orchestrator
      await this.startMasterOrchestrator();
      
      // Start all agents
      await this.startAllAgents();
      
      // Start cron system
      await this.startCronSystem();
      
      spinner.succeed('Complet'e' autonomous system started successfully');
      this.log('Complet'e' system launched');
      
    } catch (error) {
      spinner.fail(`Failed to start complete system: ${error.message}`);
      this.log(`Error starting complete system: ${error.message}`, 'ERR'O'R');
    }
  }

  async startMasterOrchestrator() {
    return new Promise((resolve, reject) => {
      const orchestratorPath = path.join(this.scriptDir, 'autonomous-master-orchestrato'r'.js');
      
      if (!fs.existsSync(orchestratorPath)) {
        reject(new Error('Maste'r' orchestrator script not found'));
        return;
      }
      
      const process = spawn('no'd'e', [orchestratorPath], {
        cwd: this.scriptDir,
        stdio: 'pi'p'e',
        env: { ...process.env, NODE_ENV: 'producti'o'n' }
      });
      
      process.stdout.on('da't'a', (data) => {
        this.log(`[Orchestrator] ${data.toString().trim()}`);
      });
      
      process.stderr.on('da't'a', (data) => {
        this.log(`[Orchestrator ERROR] ${data.toString().trim()}`, 'ERR'O'R');
      });
      
      process.on('clo's'e', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Orchestrator exited with code ${code}`));
        }
      });
      
      // Save PID
      const pidFile = path.join(this.pidDir, 'master-orchestrato'r'.pid');
      fs.writeFileSync(pidFile, process.pid.toString());
    });
  }

  async startAllAgents() {
    const agents = [
      { name: 'Websit'e' Analyzer', script: 'enhanced-website-analyzer-agen't'.js' },
      { name: 'Conten't' Generator', script: 'enhanced-content-generator-agen't'.js' },
      { name: 'Erro'r' Fixer', script: 'error-fixer-agen't'.js' },
      { name: 'Improvemen't' Agent', script: 'autonomous-improvement-agen't'.js' },
      { name: 'Conten't' Integrator', script: 'content-integration-agen't'.js' }
    ];
    
    for (const agent of agents) {
      await this.startAgent(agent.name, agent.script);
    }
  }

  async startAgent(agentName, scriptName) {
    return new Promise((resolve, reject) => {
      const scriptPath = path.join(this.scriptDir, scriptName);
      
      if (!fs.existsSync(scriptPath)) {
        this.log(`Agent script not found: ${scriptName}`, 'WA'R'N');
        resolve();
        return;
      }
      
      const process = spawn('no'd'e', [scriptPath], {
        cwd: this.scriptDir,
        stdio: 'pi'p'e',
        env: { 
          ...process.env, 
          NODE_ENV: 'producti'o'n',
          AGENT_TYPE: agentName.toLowerCase().replace(/\s+/g, '-')
        }
      });
      
      process.stdout.on('da't'a', (data) => {
        this.log(`[${agentName}] ${data.toString().trim()}`);
      });
      
      process.stderr.on('da't'a', (data) => {
        this.log(`[${agentName} ERROR] ${data.toString().trim()}`, 'ERR'O'R');
      });
      
      process.on('clo's'e', (code) => {
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

  async startCronSystem() {
    return new Promise((resolve, reject) => {
      const cronScriptPath = path.join(this.scriptDir, 'comprehensive-cron-syste'm'.sh');
      
      if (!fs.existsSync(cronScriptPath)) {
        reject(new Error('Cro'n' system script not found'));
        return;
      }
      
      // Make script executable
      fs.chmodSync(cronScriptPath, '755');
      
      const process = spawn('ba's'h', [cronScriptPath], {
        cwd: this.scriptDir,
        stdio: 'pi'p'e'
      });
      
      process.stdout.on('da't'a', (data) => {
        this.log(`[Cron System] ${data.toString().trim()}`);
      });
      
      process.stderr.on('da't'a', (data) => {
        this.log(`[Cron System ERROR] ${data.toString().trim()}`, 'ERR'O'R');
      });
      
      process.on('clo's'e', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Cron system exited with code ${code}`));
        }
      });
    });
  }

  async showSystemStatus() {
    console.log(chalk.blue('\n📊 System Status\n'));
    
    const status = await this.getSystemStatus();
    
    console.log(chalk.green('✅ Active Agents:'));
    status.activeAgents.forEach(agent => {
      console.log(`  • ${agent.name} (PID: ${agent.pid})`);
    });
    
    if (status.inactiveAgents.length > 0) {
      console.log(chalk.red('❌ Inactive Agents:'));
      status.inactiveAgents.forEach(agent => {
        console.log(`  • ${agent.name}`);
      });
    }
    
    console.log(chalk.yellow('\n📈 Analytics:'));
    console.log(`  • Pages Analyzed: ${status.analytics.pagesAnalyzed}`);
    console.log(`  • Content Generated: ${status.analytics.contentGenerated}`);
    console.log(`  • Errors Fixed: ${status.analytics.errorsFixed}`);
    console.log(`  • Improvements Made: ${status.analytics.improvementsMade}`);
    
    console.log(chalk.cyan('\n💾 System Info:'));
    console.log(`  • Log Files: ${status.logFiles}`);
    console.log(`  • Generated Content: ${status.generatedContent}`);
    console.log(`  • Analysis Results: ${status.analysisResults}`);
  }

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
      analysisResults: 0
    };
    
    // Check agent PIDs
    const agentTypes = [
      'master-orchestrat'o'r',
      'website-analyz'e'r',
      'content-generat'o'r',
      'error-fix'e'r',
      'improvement-age'n't',
      'content-integrat'o'r'
    ];
    
    for (const agentType of agentTypes) {
      const pidFile = path.join(this.pidDir, `${agentType}.pid`);
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, 'ut'f'8').trim();
        try {
          process.kill(pid, 0); // Check if process exists
          status.activeAgents.push({
            name: agentType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            pid: pid
          });
        } catch (error) {
          status.inactiveAgents.push({
            name: agentType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          });
        }
      } else {
        status.inactiveAgents.push({
          name: agentType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        });
      }
    }
    
    // Count files
    status.logFiles = fs.readdirSync(this.logDir).length;
    status.generatedContent = fs.existsSync(path.join(this.scriptDir, 'generated-conte'n't')) 
      ? fs.readdirSync(path.join(this.scriptDir, 'generated-conte'n't')).length : 0;
    status.analysisResults = fs.existsSync(path.join(this.scriptDir, 'analysis-resul't's')) 
      ? fs.readdirSync(path.join(this.scriptDir, 'analysis-resul't's')).length : 0;
    
    // Load analytics
    const analyticsFile = path.join(this.scriptDir, 'master-analytic's'.json');
    if (fs.existsSync(analyticsFile)) {
      try {
        const analytics = JSON.parse(fs.readFileSync(analyticsFile, 'ut'f'8'));
        status.analytics = { ...status.analytics, ...analytics };
      } catch (error) {
        this.log(`Error loading analytics: ${error.message}`, 'ERR'O'R');
      }
    }
    
    return status;
  }

  async showLogs() {
    console.log(chalk.blue('\n📋 Recent Logs\n'));
    
    const logFiles = fs.readdirSync(this.logDir).filter(file => file.endsWith('.log'));
    
    if (logFiles.length === 0) {
      console.log(chalk.yellow('N'o' log files found.'));
      return;
    }
    
    const { logFile } = await inquirer.prompt([
      {
        type: 'li's't',
        name: 'logFi'l'e',
        message: 'Selec't' log file to view:',
        choices: logFiles.map(file => ({ name: file, value: file }))
      }
    ]);
    
    const logPath = path.join(this.logDir, logFile);
    const logContent = fs.readFileSync(logPath, 'ut'f'8');
    
    console.log(chalk.gray('\n--- Log Content ---'));
    console.log(logContent.slice(-1000)); // Show last 1000 characters
    console.log(chalk.gray('--'-' End of Log ---\n'));
  }

  async stopAllAgents() {
    const spinner = ora('Stoppin'g' all agents...').start();
    
    try {
      const pidFiles = fs.readdirSync(this.pidDir).filter(file => file.endsWith('.pid'));
      
      for (const pidFile of pidFiles) {
        const pidPath = path.join(this.pidDir, pidFile);
        const pid = fs.readFileSync(pidPath, 'ut'f'8').trim();
        
        try {
          process.kill(pid, 'SIGTE'R'M');
          this.log(`Stopped agent: ${pidFile.replace('.pid', '')}`);
        } catch (error) {
          this.log(`Failed to stop agent: ${pidFile.replace('.pid', '')}`, 'WA'R'N');
        }
        
        // Remove PID file
        fs.unlinkSync(pidPath);
      }
      
      spinner.succeed('Al'l' agents stopped successfully');
      
    } catch (error) {
      spinner.fail(`Failed to stop agents: ${error.message}`);
      this.log(`Error stopping agents: ${error.message}`, 'ERR'O'R');
    }
  }

  async cleanSystem() {
    const spinner = ora('Cleanin'g' system...').start();
    
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
          type: 'confi'r'm',
          name: 'cleanConte'n't',
          message: 'D'o' you want to clean generated content as well?',
          default: false
        }
      ]);
      
      if (cleanContent) {
        const generatedDir = path.join(this.scriptDir, 'generated-conte'n't');
        const analysisDir = path.join(this.scriptDir, 'analysis-resul't's');
        
        if (fs.existsSync(generatedDir)) {
          fs.rmSync(generatedDir, { recursive: true, force: true });
        }
        
        if (fs.existsSync(analysisDir)) {
          fs.rmSync(analysisDir, { recursive: true, force: true });
        }
      }
      
      spinner.succeed('Syste'm' cleaned successfully');
      
    } catch (error) {
      spinner.fail(`Failed to clean system: ${error.message}`);
      this.log(`Error cleaning system: ${error.message}`, 'ERR'O'R');
    }
  }

  async run() {
    console.log(chalk.blue('🤖 Autonomous Agent System Launcher'));
    console.log(chalk.gray('Versio'n' 1.0.0\n'));
    
    // Check dependencies
    const depsOk = await this.checkDependencies();
    if (!depsOk) {
      console.log(chalk.red('❌ Dependencies check failed. Please fix the issues and try again.'));
      process.exit(1);
    }
    
    // Main loop
    while (true) {
      try {
        const action = await this.showMainMenu();
        
        switch (action) {
          case 'start-comple't'e':
            await this.startCompleteSystem();
            break;
          case 'start-analyz'e'r':
            await this.startAgent('Websit'e' Analyzer', 'enhanced-website-analyzer-agen't'.js');
            break;
          case 'start-generat'o'r':
            await this.startAgent('Conten't' Generator', 'enhanced-content-generator-agen't'.js');
            break;
          case 'start-fix'e'r':
            await this.startAgent('Erro'r' Fixer', 'error-fixer-agen't'.js');
            break;
          case 'start-improveme'n't':
            await this.startAgent('Improvemen't' Agent', 'autonomous-improvement-agen't'.js');
            break;
          case 'start-integrat'o'r':
            await this.startAgent('Conten't' Integrator', 'content-integration-agen't'.js');
            break;
          case 'stat'u's':
            await this.showSystemStatus();
            break;
          case 'lo'g's':
            await this.showLogs();
            break;
          case 'stop-a'l'l':
            await this.stopAllAgents();
            break;
          case 'cle'a'n':
            await this.cleanSystem();
            break;
          case 'ex'i't':
            console.log(chalk.green('👋 Goodbye!'));
            process.exit(0);
        }
        
        // Wait for user input before showing menu again
        if (action !== 'ex'i't') {
          await inquirer.prompt([
            {
              type: 'inp'u't',
              name: 'contin'u'e',
              message: 'Pres's' Enter to continue...'
            }
          ]);
        }
        
      } catch (error) {
        this.log(`Error in main loop: ${error.message}`, 'ERR'O'R');
        console.log(chalk.red(`❌ Error: ${error.message}`));
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