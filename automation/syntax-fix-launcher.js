#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const SyntaxErrorMonitor = require('./syntax-error-monitor');
const SyntaxFixOrchestrator = require('./syntax-fix-orchestrator');
const ContinuousSyntaxFix = require('./continuous-syntax-fix');

class SyntaxFixLauncher {
  constructor() {
    this.processes = new Map();
    this.config = this.loadConfig();
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'syntax-fix-config.json');
    
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        console.error('Error loading config:', error.message);
      }
    }

    // Default configuration
    return {
      monitor: {
        enabled: true,
        watch: true,
        interval: 30000,
        autoFix: true
      },
      orchestrator: {
        enabled: true,
        watch: true,
        interval: 15000,
        autoFix: true,
        aggressive: false
      },
      continuous: {
        enabled: true,
        watchMode: true,
        interval: 10000,
        aggressive: false,
        autoCommit: true,
        backupFiles: true,
        maxRetries: 3
      },
      logging: {
        level: 'info',
        file: 'syntax-fix.log'
      }
    };
  }

  async start(command, options = {}) {
    const { mode = 'all', ...restOptions } = options;

    console.log(`🚀 Starting Syntax Fix System in ${mode} mode...`);

    switch (mode) {
      case 'monitor':
        await this.startMonitor(restOptions);
        break;
      case 'orchestrator':
        await this.startOrchestrator(restOptions);
        break;
      case 'continuous':
        await this.startContinuous(restOptions);
        break;
      case 'all':
        await this.startAll(restOptions);
        break;
      default:
        console.error(`❌ Unknown mode: ${mode}`);
        process.exit(1);
    }
  }

  async startMonitor(options = {}) {
    const config = { ...this.config.monitor, ...options };
    
    console.log('📊 Starting Syntax Error Monitor...');
    
    const monitor = new SyntaxErrorMonitor();
    this.processes.set('monitor', monitor);
    
    await monitor.start(config);
    
    console.log('✅ Syntax Error Monitor started');
  }

  async startOrchestrator(options = {}) {
    const config = { ...this.config.orchestrator, ...options };
    
    console.log('🎼 Starting Syntax Fix Orchestrator...');
    
    const orchestrator = new SyntaxFixOrchestrator();
    this.processes.set('orchestrator', orchestrator);
    
    await orchestrator.start(config);
    
    console.log('✅ Syntax Fix Orchestrator started');
  }

  async startContinuous(options = {}) {
    const config = { ...this.config.continuous, ...options };
    
    console.log('🔄 Starting Continuous Syntax Fix...');
    
    const continuous = new ContinuousSyntaxFix();
    this.processes.set('continuous', continuous);
    
    await continuous.start(config);
    
    console.log('✅ Continuous Syntax Fix started');
  }

  async startAll(options = {}) {
    console.log('🌟 Starting all syntax fix systems...');
    
    // Start all systems
    await this.startMonitor(options);
    await this.startOrchestrator(options);
    await this.startContinuous(options);
    
    console.log('✅ All syntax fix systems started');
  }

  stop(processName = 'all') {
    if (processName === 'all') {
      console.log('🛑 Stopping all syntax fix systems...');
      
      for (const [name, process] of this.processes) {
        try {
          process.stop();
          console.log(`✅ Stopped ${name}`);
        } catch (error) {
          console.error(`❌ Error stopping ${name}:`, error.message);
        }
      }
      
      this.processes.clear();
    } else {
      const process = this.processes.get(processName);
      if (process) {
        console.log(`🛑 Stopping ${processName}...`);
        process.stop();
        this.processes.delete(processName);
        console.log(`✅ Stopped ${processName}`);
      } else {
        console.error(`❌ Process ${processName} not found`);
      }
    }
  }

  status() {
    console.log('📊 Syntax Fix System Status:');
    console.log('=============================');
    
    for (const [name, process] of this.processes) {
      try {
        const status = process.getStatus();
        console.log(`\n${name.toUpperCase()}:`);
        console.log(`  Running: ${status.isRunning ? '✅' : '❌'}`);
        
        if (status.stats) {
          console.log(`  Total Fixes: ${status.stats.totalFixes || 0}`);
          console.log(`  Successful: ${status.stats.successfulFixes || 0}`);
          console.log(`  Failed: ${status.stats.failedFixes || 0}`);
        }
        
        if (status.fixedErrorsCount !== undefined) {
          console.log(`  Fixed Errors: ${status.fixedErrorsCount}`);
        }
      } catch (error) {
        console.log(`  Error getting status: ${error.message}`);
      }
    }
    
    if (this.processes.size === 0) {
      console.log('No active processes');
    }
  }

  async runQuickFix() {
    console.log('⚡ Running quick syntax fix...');
    
    try {
      // Run TypeScript check
      const tsResult = execSync('npx tsc --noEmit', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      console.log('✅ TypeScript check passed');
    } catch (error) {
      console.log('❌ TypeScript errors found, attempting fixes...');
      await this.fixTypeScriptErrors(error.stdout || error.stderr || '');
    }

    try {
      // Run ESLint
      const lintResult = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      console.log('✅ ESLint fixes applied');
    } catch (error) {
      console.log('⚠️ ESLint errors found (some may be unfixable)');
    }

    console.log('✅ Quick fix completed');
  }

  async fixTypeScriptErrors(output) {
    const lines = output.split('\n');
    let fixedCount = 0;

    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
        if (match) {
          try {
            await this.fixSingleError(match[1].trim(), parseInt(match[2]), match[4]);
            fixedCount++;
          } catch (error) {
            console.log(`⚠️ Could not fix error in ${match[1]}: ${match[4]}`);
          }
        }
      }
    }

    if (fixedCount > 0) {
      console.log(`✅ Fixed ${fixedCount} TypeScript errors`);
    }
  }

  async fixSingleError(filePath, lineNumber, errorMessage) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    if (lineNumber > lines.length) {
      throw new Error(`Line ${lineNumber} doesn't exist`);
    }

    const lineContent = lines[lineNumber - 1];
    const fixedLine = this.fixLine(lineContent, errorMessage);
    
    if (fixedLine !== lineContent) {
      lines[lineNumber - 1] = fixedLine;
      fs.writeFileSync(filePath, lines.join('\n'));
    }
  }

  fixLine(lineContent, errorMessage) {
    let fixedLine = lineContent;
    
    // Fix common TypeScript errors
    if (errorMessage.includes('Expected')) {
      if (errorMessage.includes(';')) {
        fixedLine = fixedLine.replace(/([^;])\s*$/, '$1;');
      } else if (errorMessage.includes('}')) {
        fixedLine = fixedLine.replace(/([^}])\s*$/, '$1}');
      } else if (errorMessage.includes(')')) {
        fixedLine = fixedLine.replace(/([^)])\s*$/, '$1)');
      }
    }
    
    return fixedLine;
  }

  async runBuildCheck() {
    console.log('🔨 Running build check...');
    
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      console.log('✅ Build successful');
      return true;
    } catch (error) {
      console.log('❌ Build failed, attempting to fix errors...');
      await this.fixBuildErrors(error.stdout || error.stderr || '');
      return false;
    }
  }

  async fixBuildErrors(output) {
    const lines = output.split('\n');
    let fixedCount = 0;

    for (const line of lines) {
      if (line.includes('Error:') || line.includes('SyntaxError:')) {
        const match = line.match(/([^:]+):(\d+):(\d+): (.+)/);
        if (match) {
          try {
            await this.fixSingleError(match[1].trim(), parseInt(match[2]), match[4]);
            fixedCount++;
          } catch (error) {
            console.log(`⚠️ Could not fix build error in ${match[1]}: ${match[4]}`);
          }
        }
      }
    }

    if (fixedCount > 0) {
      console.log(`✅ Fixed ${fixedCount} build errors`);
    }
  }

  showHelp() {
    console.log(`
🔧 Syntax Fix Launcher - Help
=============================

Usage: node syntax-fix-launcher.js <command> [options]

Commands:
  start [mode]     Start syntax fix system
  stop [process]   Stop syntax fix system
  status           Show system status
  quick-fix        Run a quick syntax fix
  build-check      Run build check and fix errors
  help             Show this help

Modes:
  monitor          Start only the monitor
  orchestrator     Start only the orchestrator
  continuous       Start only the continuous fix
  all              Start all systems (default)

Options:
  --watch          Enable file watching
  --no-watch       Disable file watching
  --interval=ms    Set check interval in milliseconds
  --aggressive     Enable aggressive fixing
  --auto-commit    Enable auto-commit
  --no-commit      Disable auto-commit
  --backup         Enable file backups
  --no-backup      Disable file backups

Examples:
  node syntax-fix-launcher.js start
  node syntax-fix-launcher.js start monitor --watch
  node syntax-fix-launcher.js start continuous --aggressive
  node syntax-fix-launcher.js stop
  node syntax-fix-launcher.js status
  node syntax-fix-launcher.js quick-fix
    `);
  }
}

// CLI interface
if (require.main === module) {
  const launcher = new SyntaxFixLauncher();
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === 'help') {
    launcher.showHelp();
    process.exit(0);
  }

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    launcher.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    launcher.stop();
    process.exit(0);
  });

  switch (command) {
    case 'start':
      const mode = args[1] || 'all';
      const options = {};
      
      // Parse options
      for (let i = 2; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
          const [key, value] = arg.slice(2).split('=');
          if (value) {
            options[key] = value;
          } else {
            options[key] = true;
          }
        }
      }
      
      launcher.start('start', { mode, ...options });
      break;
      
    case 'stop':
      const processName = args[1] || 'all';
      launcher.stop(processName);
      break;
      
    case 'status':
      launcher.status();
      break;
      
    case 'quick-fix':
      launcher.runQuickFix();
      break;
      
    case 'build-check':
      launcher.runBuildCheck();
      break;
      
    default:
      console.error(`❌ Unknown command: ${command}`);
      launcher.showHelp();
      process.exit(1);
  }
}

module.exports = SyntaxFixLauncher;
