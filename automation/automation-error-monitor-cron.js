#!/usr/bin/env node

/**
 * Automation Error Monitor Cron Job
 * 
 * This cron job continuously monitors for automation errors and creates
 * new autonomous agents to fix them without modifying existing systems.
 */

const fs = require('fs-extra');
const path = require('path');
const cron = require('node-cron');
const { exec } = require('child_process');

class AutomationErrorMonitorCron {
  constructor() {
    this.config = {
      scanInterval: '*/2 * * * *', // Every 2 minutes
      errorThreshold: 3,
      maxConcurrentFixes: 5,
      fixTimeout: 300000, // 5 minutes
      reportInterval: '0 */10 * * * *' // Every 10 minutes
    };
    
    this.monitoringData = {
      errors: [],
      activeFixes: [],
      errorPatterns: {},
      fixHistory: [],
      lastScan: null
    };
    
    this.directories = {
      logs: path.join(__dirname, 'error-monitor-cron-logs'),
      reports: path.join(__dirname, 'error-monitor-cron-reports'),
      fixes: path.join(__dirname, 'error-fixes'),
      agents: path.join(__dirname, 'error-fixing-agents'),
      patterns: path.join(__dirname, 'error-patterns')
    };
    
    this.ensureDirectories();
  }

  async ensureDirectories() {
    for (const [name, dir] of Object.entries(this.directories)) {
      await fs.ensureDir(dir);
    }
  }

  async log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}\n`;
    
    await fs.appendFile(path.join(this.directories.logs, `${type}.log`), logEntry);
    console.log(`[${type.toUpperCase()}] ${message}`);
  }

  async scanForErrors() {
    await this.log('🔍 Scanning for automation errors...');
    
    const errors = [];
    
    // Scan for syntax errors
    const syntaxErrors = await this.scanSyntaxErrors();
    errors.push(...syntaxErrors);
    
    // Scan for runtime errors
    const runtimeErrors = await this.scanRuntimeErrors();
    errors.push(...runtimeErrors);
    
    // Scan for configuration errors
    const configErrors = await this.scanConfigErrors();
    errors.push(...configErrors);
    
    // Scan for dependency errors
    const dependencyErrors = await this.scanDependencyErrors();
    errors.push(...dependencyErrors);
    
    // Scan for performance errors
    const performanceErrors = await this.scanPerformanceErrors();
    errors.push(...performanceErrors);
    
    this.monitoringData.errors = errors;
    this.monitoringData.lastScan = new Date().toISOString();
    
    await this.log(`✅ Found ${errors.length} errors`);
    return errors;
  }

  async scanSyntaxErrors() {
    const errors = [];
    const automationFiles = await this.findAutomationFiles();
    
    for (const file of automationFiles) {
      try {
        const content = await fs.readFile(file, 'utf8');
        
        // Check for common syntax issues
        if (content.includes(', ,') || content.includes(' ,') || content.includes(', ')) {
          errors.push({
            type: 'syntax',
            file: file,
            error: 'Comma spacing issues',
            severity: 'medium',
            timestamp: new Date().toISOString()
          });
        }
        
        if (content.includes('requi, r, e') || content.includes('requi, r, e')) {
          errors.push({
            type: 'syntax',
            file: file,
            error: 'Malformed require statements',
            severity: 'high',
            timestamp: new Date().toISOString()
          });
        }
        
        if (content.includes('con, s, t') || content.includes('le, t') || content.includes('va, r')) {
          errors.push({
            type: 'syntax',
            file: file,
            error: 'Malformed variable declarations',
            severity: 'high',
            timestamp: new Date().toISOString()
          });
        }
        
      } catch (error) {
        errors.push({
          type: 'syntax',
          file: file,
          error: `File read error: ${error.message}`,
          severity: 'high',
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return errors;
  }

  async scanRuntimeErrors() {
    const errors = [];
    
    // Check for crashed processes
    const pidsDir = path.join(__dirname, 'pids');
    if (await fs.pathExists(pidsDir)) {
      const pidFiles = await fs.readdir(pidsDir);
      
      for (const pidFile of pidFiles) {
        const pidPath = path.join(pidsDir, pidFile);
        const pid = await fs.readFile(pidPath, 'utf8').catch(() => '');
        
        if (pid) {
          try {
            process.kill(parseInt(pid), 0);
          } catch (error) {
            errors.push({
              type: 'runtime',
              process: pidFile,
              pid: pid,
              error: 'Process not running',
              severity: 'high',
              timestamp: new Date().toISOString()
            });
          }
        }
      }
    }
    
    return errors;
  }

  async scanConfigErrors() {
    const errors = [];
    
    // Check automation config
    const configFile = path.join(__dirname, 'automation-monitor-config.json');
    if (await fs.pathExists(configFile)) {
      try {
        const config = await fs.readJson(configFile);
        
        if (!config.monitoring || !config.monitoring.enabled) {
          errors.push({
            type: 'config',
            file: configFile,
            error: 'Monitoring disabled in config',
            severity: 'medium',
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        errors.push({
          type: 'config',
          file: configFile,
          error: `Config parse error: ${error.message}`,
          severity: 'high',
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return errors;
  }

  async scanDependencyErrors() {
    const errors = [];
    
    // Check package.json dependencies
    const packageFile = path.join(__dirname, 'package.json');
    if (await fs.pathExists(packageFile)) {
      try {
        const packageJson = await fs.readJson(packageFile);
        
        if (!packageJson.dependencies) {
          errors.push({
            type: 'dependency',
            file: packageFile,
            error: 'No dependencies defined',
            severity: 'medium',
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        errors.push({
          type: 'dependency',
          file: packageFile,
          error: `Package.json error: ${error.message}`,
          severity: 'high',
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return errors;
  }

  async scanPerformanceErrors() {
    const errors = [];
    
    // Check log file sizes
    const logsDir = path.join(__dirname, 'logs');
    if (await fs.pathExists(logsDir)) {
      const logFiles = await fs.readdir(logsDir);
      
      for (const logFile of logFiles) {
        const logPath = path.join(logsDir, logFile);
        const stats = await fs.stat(logPath);
        
        if (stats.size > 10 * 1024 * 1024) { // 10MB
          errors.push({
            type: 'performance',
            file: logPath,
            error: 'Log file too large',
            severity: 'medium',
            timestamp: new Date().toISOString()
          });
        }
      }
    }
    
    return errors;
  }

  async findAutomationFiles() {
    const files = [];
    const automationDir = __dirname;
    
    const scanDir = async (dir) => {
      const items = await fs.readdir(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = await fs.stat(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          await scanDir(fullPath);
        } else if (item.endsWith('.js') && !item.includes('node_modules')) {
          files.push(fullPath);
        }
      }
    };
    
    await scanDir(automationDir);
    return files;
  }

  async createErrorFixingAgent(error) {
    await this.log(`🔧 Creating fixing agent for error: ${error.error}`);
    
    const agentId = `error-fix-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const agentDir = path.join(this.directories.agents, agentId);
    await fs.ensureDir(agentDir);
    
    const agentScript = this.generateFixingAgent(error);
    const agentPath = path.join(agentDir, 'fix-agent.js');
    
    await fs.writeFile(agentPath, agentScript);
    await fs.chmod(agentPath, '755');
    
    // Start the agent
    const agentProcess = exec(`node "${agentPath}"`, {
      cwd: agentDir,
      timeout: this.config.fixTimeout
    });
    
    this.monitoringData.activeFixes.push({
      id: agentId,
      error: error,
      process: agentProcess,
      startTime: new Date().toISOString(),
      status: 'running'
    });
    
    agentProcess.on('exit', (code) => {
      this.handleAgentCompletion(agentId, code);
    });
    
    agentProcess.on('error', (error) => {
      this.handleAgentError(agentId, error);
    });
    
    await this.log(`✅ Created and started fixing agent: ${agentId}`);
    return agentId;
  }

  generateFixingAgent(error) {
    const fixStrategies = {
      syntax: this.generateSyntaxFixAgent,
      runtime: this.generateRuntimeFixAgent,
      config: this.generateConfigFixAgent,
      dependency: this.generateDependencyFixAgent,
      performance: this.generatePerformanceFixAgent
    };
    
    const strategy = fixStrategies[error.type] || this.generateGenericFixAgent;
    return strategy.call(this, error);
  }

  generateSyntaxFixAgent(error) {
    return `#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

class SyntaxFixAgent {
  constructor() {
    this.targetFile = '${error.file}';
    this.error = '${error.error}';
    this.fixLog = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);
    this.fixLog.push(\`[\${timestamp}] \${message}\`);
  }

  async fix() {
    await this.log('🔧 Starting syntax fix...');
    
    try {
      const content = await fs.readFile(this.targetFile, 'utf8');
      let fixedContent = content;
      
      // Fix comma spacing issues
      fixedContent = fixedContent.replace(/, ,/g, ', ');
      fixedContent = fixedContent.replace(/ ,/g, ', ');
      fixedContent = fixedContent.replace(/, /g, ', ');
      
      // Fix malformed require statements
      fixedContent = fixedContent.replace(/requi, r, e/g, 'require');
      
      // Fix malformed variable declarations
      fixedContent = fixedContent.replace(/con, s, t/g, 'const');
      fixedContent = fixedContent.replace(/le, t/g, 'let');
      fixedContent = fixedContent.replace(/va, r/g, 'var');
      
      if (fixedContent !== content) {
        await fs.writeFile(this.targetFile, fixedContent);
        await this.log('✅ Syntax fixes applied');
      } else {
        await this.log('ℹ️ No syntax fixes needed');
      }
      
      await this.saveFixReport();
      
    } catch (error) {
      await this.log(\`❌ Fix failed: \${error.message}\`);
      throw error;
    }
  }

  async saveFixReport() {
    const report = {
      targetFile: this.targetFile,
      error: this.error,
      fixLog: this.fixLog,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    const reportPath = path.join(__dirname, 'fix-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
  }
}

const agent = new SyntaxFixAgent();
agent.fix().catch(console.error);
`;
  }

  generateRuntimeFixAgent(error) {
    return `#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

class RuntimeFixAgent {
  constructor() {
    this.processFile = '${error.process}';
    this.pid = '${error.pid}';
    this.fixLog = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);
    this.fixLog.push(\`[\${timestamp}] \${message}\`);
  }

  async fix() {
    await this.log('🔧 Starting runtime fix...');
    
    try {
      // Remove stale PID file
      const pidPath = path.join(__dirname, '..', 'pids', this.processFile);
      if (await fs.pathExists(pidPath)) {
        await fs.remove(pidPath);
        await this.log('✅ Removed stale PID file');
      }
      
      // Restart the process if it's a known automation process
      if (this.processFile.includes('automation')) {
        await this.restartAutomationProcess();
      }
      
      await this.saveFixReport();
      
    } catch (error) {
      await this.log(\`❌ Fix failed: \${error.message}\`);
      throw error;
    }
  }

  async restartAutomationProcess() {
    const processName = this.processFile.replace('.pid', '');
    const scriptPath = path.join(__dirname, '..', \`\${processName}.js\`);
    
    if (await fs.pathExists(scriptPath)) {
      await this.log(\`🔄 Restarting \${processName}...\`);
      
      const child = exec(\`node "\${scriptPath}"\`, {
        cwd: path.dirname(scriptPath)
      });
      
      child.on('error', (error) => {
        this.log(\`❌ Failed to restart: \${error.message}\`);
      });
      
      child.on('exit', (code) => {
        this.log(\`✅ Process restarted with code: \${code}\`);
      });
    }
  }

  async saveFixReport() {
    const report = {
      processFile: this.processFile,
      pid: this.pid,
      fixLog: this.fixLog,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    const reportPath = path.join(__dirname, 'fix-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
  }
}

const agent = new RuntimeFixAgent();
agent.fix().catch(console.error);
`;
  }

  generateConfigFixAgent(error) {
    return `#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

class ConfigFixAgent {
  constructor() {
    this.configFile = '${error.file}';
    this.error = '${error.error}';
    this.fixLog = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);
    this.fixLog.push(\`[\${timestamp}] \${message}\`);
  }

  async fix() {
    await this.log('🔧 Starting config fix...');
    
    try {
      const config = await fs.readJson(this.configFile);
      
      // Ensure monitoring is enabled
      if (!config.monitoring) {
        config.monitoring = {};
      }
      
      if (config.monitoring.enabled === false) {
        config.monitoring.enabled = true;
        await this.log('✅ Enabled monitoring in config');
      }
      
      // Ensure required config sections exist
      if (!config.backup) {
        config.backup = { enabled: true, maxBackups: 10, retentionDays: 30 };
      }
      
      if (!config.cleanup) {
        config.cleanup = { enabled: true, logRetentionDays: 7, reportRetentionDays: 30 };
      }
      
      await fs.writeJson(this.configFile, config, { spaces: 2 });
      await this.log('✅ Config fixes applied');
      
      await this.saveFixReport();
      
    } catch (error) {
      await this.log(\`❌ Fix failed: \${error.message}\`);
      throw error;
    }
  }

  async saveFixReport() {
    const report = {
      configFile: this.configFile,
      error: this.error,
      fixLog: this.fixLog,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    const reportPath = path.join(__dirname, 'fix-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
  }
}

const agent = new ConfigFixAgent();
agent.fix().catch(console.error);
`;
  }

  generateDependencyFixAgent(error) {
    return `#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

class DependencyFixAgent {
  constructor() {
    this.packageFile = '${error.file}';
    this.error = '${error.error}';
    this.fixLog = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);
    this.fixLog.push(\`[\${timestamp}] \${message}\`);
  }

  async fix() {
    await this.log('🔧 Starting dependency fix...');
    
    try {
      const packageJson = await fs.readJson(this.packageFile);
      
      // Ensure dependencies exist
      if (!packageJson.dependencies) {
        packageJson.dependencies = {};
      }
      
      // Add essential automation dependencies
      const essentialDeps = {
        'fs-extra': '^11.1.1',
        'node-cron': '^3.0.3',
        'glob': '^10.3.10'
      };
      
      let updated = false;
      for (const [dep, version] of Object.entries(essentialDeps)) {
        if (!packageJson.dependencies[dep]) {
          packageJson.dependencies[dep] = version;
          updated = true;
          await this.log(\`✅ Added dependency: \${dep}\`);
        }
      }
      
      if (updated) {
        await fs.writeJson(this.packageFile, packageJson, { spaces: 2 });
        await this.log('✅ Package.json updated');
        
        // Install dependencies
        await this.installDependencies();
      } else {
        await this.log('ℹ️ No dependency fixes needed');
      }
      
      await this.saveFixReport();
      
    } catch (error) {
      await this.log(\`❌ Fix failed: \${error.message}\`);
      throw error;
    }
  }

  async installDependencies() {
    return new Promise((resolve, reject) => {
      const child = exec('npm install', {
        cwd: path.dirname(this.packageFile)
      });
      
      child.on('exit', (code) => {
        if (code === 0) {
          this.log('✅ Dependencies installed successfully');
          resolve();
        } else {
          this.log('❌ Failed to install dependencies');
          reject(new Error('npm install failed'));
        }
      });
      
      child.on('error', (error) => {
        this.log(\`❌ Install error: \${error.message}\`);
        reject(error);
      });
    });
  }

  async saveFixReport() {
    const report = {
      packageFile: this.packageFile,
      error: this.error,
      fixLog: this.fixLog,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    const reportPath = path.join(__dirname, 'fix-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
  }
}

const agent = new DependencyFixAgent();
agent.fix().catch(console.error);
`;
  }

  generatePerformanceFixAgent(error) {
    return `#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

class PerformanceFixAgent {
  constructor() {
    this.targetFile = '${error.file}';
    this.error = '${error.error}';
    this.fixLog = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);
    this.fixLog.push(\`[\${timestamp}] \${message}\`);
  }

  async fix() {
    await this.log('🔧 Starting performance fix...');
    
    try {
      // Rotate large log files
      if (this.targetFile.includes('.log')) {
        await this.rotateLogFile();
      }
      
      await this.saveFixReport();
      
    } catch (error) {
      await this.log(\`❌ Fix failed: \${error.message}\`);
      throw error;
    }
  }

  async rotateLogFile() {
    const stats = await fs.stat(this.targetFile);
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (stats.size > maxSize) {
      const backupPath = \`\${this.targetFile}.\${Date.now()}.backup\`;
      await fs.move(this.targetFile, backupPath);
      await fs.writeFile(this.targetFile, '');
      await this.log('✅ Log file rotated');
    } else {
      await this.log('ℹ️ Log file size acceptable');
    }
  }

  async saveFixReport() {
    const report = {
      targetFile: this.targetFile,
      error: this.error,
      fixLog: this.fixLog,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    const reportPath = path.join(__dirname, 'fix-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
  }
}

const agent = new PerformanceFixAgent();
agent.fix().catch(console.error);
`;
  }

  generateGenericFixAgent(error) {
    return `#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

class GenericFixAgent {
  constructor() {
    this.error = ${JSON.stringify(error)};
    this.fixLog = [];
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);
    this.fixLog.push(\`[\${timestamp}] \${message}\`);
  }

  async fix() {
    await this.log('🔧 Starting generic fix...');
    
    try {
      await this.log('ℹ️ Generic fix agent - no specific fix available');
      await this.saveFixReport();
      
    } catch (error) {
      await this.log(\`❌ Fix failed: \${error.message}\`);
      throw error;
    }
  }

  async saveFixReport() {
    const report = {
      error: this.error,
      fixLog: this.fixLog,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    const reportPath = path.join(__dirname, 'fix-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
  }
}

const agent = new GenericFixAgent();
agent.fix().catch(console.error);
`;
  }

  async handleAgentCompletion(agentId, code) {
    const fix = this.monitoringData.activeFixes.find(f => f.id === agentId);
    if (fix) {
      fix.status = code === 0 ? 'completed' : 'failed';
      fix.endTime = new Date().toISOString();
      fix.exitCode = code;
      
      await this.log(`✅ Fix agent ${agentId} completed with code: ${code}`);
      
      // Move to history
      this.monitoringData.fixHistory.push(fix);
      this.monitoringData.activeFixes = this.monitoringData.activeFixes.filter(f => f.id !== agentId);
    }
  }

  async handleAgentError(agentId, error) {
    const fix = this.monitoringData.activeFixes.find(f => f.id === agentId);
    if (fix) {
      fix.status = 'error';
      fix.error = error.message;
      fix.endTime = new Date().toISOString();
      
      await this.log(`❌ Fix agent ${agentId} failed: ${error.message}`);
      
      // Move to history
      this.monitoringData.fixHistory.push(fix);
      this.monitoringData.activeFixes = this.monitoringData.activeFixes.filter(f => f.id !== agentId);
    }
  }

  async processErrors(errors) {
    await this.log(`🔧 Processing ${errors.length} errors...`);
    
    for (const error of errors) {
      // Check if we already have a fix for this error
      const existingFix = this.monitoringData.activeFixes.find(f => 
        f.error.file === error.file && f.error.error === error.error
      );
      
      if (!existingFix && this.monitoringData.activeFixes.length < this.config.maxConcurrentFixes) {
        await this.createErrorFixingAgent(error);
      } else if (existingFix) {
        await this.log(`ℹ️ Fix already in progress for: ${error.error}`);
      } else {
        await this.log(`⚠️ Max concurrent fixes reached, queuing: ${error.error}`);
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errors: this.monitoringData.errors,
      activeFixes: this.monitoringData.activeFixes.length,
      fixHistory: this.monitoringData.fixHistory.length,
      lastScan: this.monitoringData.lastScan
    };
    
    const reportPath = path.join(this.directories.reports, `cron-report-${Date.now()}.json`);
    await fs.writeJson(reportPath, report, { spaces: 2 });
    
    await this.log(`📊 Generated cron report: ${reportPath}`);
  }

  async start() {
    await this.log('🚀 Starting Automation Error Monitor Cron...');
    
    // Start error scanning
    cron.schedule(this.config.scanInterval, async () => {
      try {
        const errors = await this.scanForErrors();
        await this.processErrors(errors);
      } catch (error) {
        await this.log(`❌ Error scanning failed: ${error.message}`);
      }
    });
    
    // Start reporting
    cron.schedule(this.config.reportInterval, async () => {
      try {
        await this.generateReport();
      } catch (error) {
        await this.log(`❌ Report generation failed: ${error.message}`);
      }
    });
    
    await this.log('✅ Automation Error Monitor Cron started successfully');
  }
}

// Start the cron job
const cronJob = new AutomationErrorMonitorCron();
cronJob.start().catch(console.error);
