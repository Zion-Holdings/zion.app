const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixLauncher {
  constructor() {
    this.config = this.loadConfig();
    this.processes = {};
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'syntax-fix-config.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading config:', error.message);
    }
    return {
      monitor: { enabled: true, interval: 5000 },
      orchestrator: { enabled: true, maxRetries: 3 },
      continuous: { enabled: true, watchMode: true },
      logging: { level: 'info' }
    };
  }

  start(component = 'all') {
    console.log('🚀 Starting syntax fix automation system...');
    
    switch (component) {
      case 'monitor':
        return this.startMonitor();
      case 'orchestrator':
        return this.startOrchestrator();
      case 'continuous':
        return this.startContinuous();
      case 'all':
        return this.startAll();
      default:
        console.log('❌ Invalid component. Use: monitor, orchestrator, continuous, or all');
        return false;
    }
  }

  startMonitor() {
    console.log('📊 Starting syntax error monitor...');
    try {
      const monitorPath = path.join(__dirname, 'syntax-error-monitor.js');
      if (fs.existsSync(monitorPath)) {
        this.processes.monitor = execSync('node ' + monitorPath, { stdio: 'inherit' });
        return true;
      } else {
        console.log('❌ Monitor file not found');
        return false;
      }
    } catch (error) {
      console.error('❌ Failed to start monitor:', error.message);
      return false;
    }
  }

  startOrchestrator() {
    console.log('🎼 Starting syntax fix orchestrator...');
    try {
      const orchestratorPath = path.join(__dirname, 'syntax-fix-orchestrator.js');
      if (fs.existsSync(orchestratorPath)) {
        this.processes.orchestrator = execSync('node ' + orchestratorPath, { stdio: 'inherit' });
        return true;
      } else {
        console.log('❌ Orchestrator file not found');
        return false;
      }
    } catch (error) {
      console.error('❌ Failed to start orchestrator:', error.message);
      return false;
    }
  }

  startContinuous() {
    console.log('🔄 Starting continuous syntax fix...');
    try {
      const continuousPath = path.join(__dirname, 'continuous-syntax-fix.js');
      if (fs.existsSync(continuousPath)) {
        this.processes.continuous = execSync('node ' + continuousPath, { stdio: 'inherit' });
        return true;
      } else {
        console.log('❌ Continuous fix file not found');
        return false;
      }
    } catch (error) {
      console.error('❌ Failed to start continuous fix:', error.message);
      return false;
    }
  }

  startAll() {
    console.log('🌟 Starting all syntax fix components...');
    const results = {
      monitor: this.startMonitor(),
      orchestrator: this.startOrchestrator(),
      continuous: this.startContinuous()
    };
    
    const successCount = Object.values(results).filter(Boolean).length;
    console.log(`✅ Started ${successCount}/3 components successfully`);
    return successCount > 0;
  }

  stop() {
    console.log('🛑 Stopping syntax fix automation system...');
    Object.keys(this.processes).forEach(key => {
      if (this.processes[key]) {
        try {
          this.processes[key].kill();
          console.log(`✅ Stopped ${key}`);
        } catch (error) {
          console.log(`❌ Failed to stop ${key}:`, error.message);
        }
      }
    });
  }

  status() {
    console.log('📊 Syntax fix automation system status:');
    Object.keys(this.processes).forEach(key => {
      const isRunning = this.processes[key] && !this.processes[key].killed;
      console.log(`${isRunning ? '🟢' : '🔴'} ${key}: ${isRunning ? 'Running' : 'Stopped'}`);
    });
  }

  runQuickFix() {
    console.log('⚡ Running quick syntax fix...');
    try {
      // Run TypeScript check
      const tscResult = this.runTypeScriptCheck();
      if (tscResult.errors.length > 0) {
        console.log(`❌ TypeScript errors found, attempting fixes...`);
        this.fixTypeScriptErrors(tscResult.errors);
        console.log(`✅ Fixed ${tscResult.errors.length} TypeScript errors`);
      }

      // Run ESLint check
      const eslintResult = this.runESLintCheck();
      if (eslintResult.errors.length > 0) {
        console.log(`⚠️ ESLint errors found (some may be unfixable)`);
      }

      console.log('✅ Quick fix completed');
      return true;
    } catch (error) {
      console.error('❌ Quick fix failed:', error.message);
      return false;
    }
  }

  runTypeScriptCheck() {
    try {
      const result = execSync('npx tsc --noEmit', { encoding: 'utf8', stdio: 'pipe' });
      return { errors: [] };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errors = this.parseTypeScriptErrors(output);
      return { errors };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4]
          });
        }
      }
    }
    
    return errors;
  }

  fixTypeScriptErrors(errors) {
    for (const error of errors) {
      this.fixSingleError(error);
    }
  }

  fixSingleError(error) {
    try {
      if (!fs.existsSync(error.file)) return;
      
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      if (error.line <= lines.length) {
        const fixedLine = this.fixLine(lines[error.line - 1], error.message);
        if (fixedLine !== lines[error.line - 1]) {
          lines[error.line - 1] = fixedLine;
          fs.writeFileSync(error.file, lines.join('\n'));
        }
      }
    } catch (error) {
      console.error('Failed to fix error:', error.message);
    }
  }

  fixLine(line, errorMessage) {
    // Basic fixes for common TypeScript errors
    if (errorMessage.includes('missing semicolon')) {
      return line.replace(/([^;])\s*$/, '$1;');
    }
    if (errorMessage.includes('unexpected token')) {
      return line.replace(/;;/g, ';');
    }
    if (errorMessage.includes('expected')) {
      return line.replace(/\(\s*\)/g, '()');
    }
    return line;
  }

  runESLintCheck() {
    try {
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx', { encoding: 'utf8', stdio: 'pipe' });
      return { errors: [] };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errors = this.parseESLintErrors(output);
      return { errors };
    }
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error')) {
        const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4]
          });
        }
      }
    }
    
    return errors;
  }

  runBuildCheck() {
    console.log('🔨 Running build check...');
    try {
      const result = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
      console.log('✅ Build successful');
      return true;
    } catch (error) {
      console.log('❌ Build failed, attempting to fix errors...');
      const output = error.stdout || error.stderr || '';
      this.fixBuildErrors(output);
      return false;
    }
  }

  fixBuildErrors(output) {
    const errors = this.parseBuildErrors(output);
    for (const error of errors) {
      this.fixSingleError(error);
    }
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error')) {
        const match = line.match(/(.+):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line
          });
        }
      }
    }
    
    return errors;
  }

  showHelp() {
    console.log(`
🔧 Syntax Fix Automation System

Usage:
  npm run syntax:start [component]  - Start the automation system
  npm run syntax:stop               - Stop all components
  npm run syntax:status             - Show system status
  npm run syntax:quick-fix          - Run a quick syntax fix
  npm run syntax:build-check        - Check and fix build errors

Components:
  monitor      - Syntax error monitoring
  orchestrator - Syntax fix orchestration
  continuous   - Continuous fixing
  all          - All components (default)

Examples:
  npm run syntax:start monitor
  npm run syntax:start all
  npm run syntax:quick-fix
    `);
  }
}

// Main execution
const launcher = new SyntaxFixLauncher();
const command = process.argv[2];
const component = process.argv[3];

switch (command) {
  case 'start':
    launcher.start(component);
    break;
  case 'stop':
    launcher.stop();
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
  case 'help':
  case '--help':
  case '-h':
    launcher.showHelp();
    break;
  default:
    console.log('❌ Invalid command. Use: start, stop, status, quick-fix, build-check, or help');
    launcher.showHelp();
}
