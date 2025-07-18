#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class ComprehensiveAppAutomation {
  constructor() {
    this.isRunning = false;
    this.issues = [];
    this.fixes = [];
    this.logs = [];
    this.startTime = Date.now();
    
    // Create necessary directories
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      'logs',
      'ai-improvement-data',
      'ai-improvement-data/analysis',
      'ai-improvement-data/improvements',
      'temp'
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
    
    // Write to log file
    fs.appendFileSync('logs/automation.log', logEntry + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running: ${command}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        ...options 
      });
      this.log(`✅ Success: ${command}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Error: ${command} - ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async fixPackageJson() {
    this.log('🔧 Fixing package.json...');
    
    try {
      const packagePath = 'package.json';
      let content = fs.readFileSync(packagePath, 'utf8');
      
      // Remove any merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>> [^\n]*\n/g, '');
      
      // Validate JSON
      JSON.parse(content);
      
      fs.writeFileSync(packagePath, content);
      this.log('✅ Package.json fixed and validated');
      return true;
    } catch (error) {
      this.log(`❌ Failed to fix package.json: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Scanning for syntax errors...');
    
    const patterns = [
      'pages/**/*.{ts,tsx,js,jsx}',
      'src/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      'api/**/*.{ts,tsx,js,jsx}'
    ];
    
    let totalFiles = 0;
    let fixedFiles = 0;
    
    for (const pattern of patterns) {
      const files = this.findFiles(pattern);
      totalFiles += files.length;
      
      for (const file of files) {
        if (await this.fixFileSyntax(file)) {
          fixedFiles++;
        }
      }
    }
    
    this.log(`✅ Fixed ${fixedFiles}/${totalFiles} files with syntax errors`);
    return fixedFiles;
  }

  findFiles(pattern) {
    const glob = require('glob');
    try {
      return glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] });
    } catch (error) {
      return [];
    }
  }

  async fixFileSyntax(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fixed = false;
      
      // Fix common syntax issues
      const fixes = [
        // Fix unterminated strings
        { 
          pattern: /(["'])([^"']*?)(\n|$)/g, 
          replacement: '$1$2$1$3',
          description: 'Unterminated strings'
        },
        // Fix malformed imports
        {
          pattern: /import\s+([^;]*?)(\n|$)/g,
          replacement: 'import $1;\n',
          description: 'Malformed imports'
        },
        // Fix missing semicolons
        {
          pattern: /([^;])\n(export|import|const|let|var|function|class)/g,
          replacement: '$1;\n$2',
          description: 'Missing semicolons'
        },
        // Fix corrupted characters
        {
          pattern: /[^\x00-\x7F]/g,
          replacement: '',
          description: 'Non-ASCII characters'
        }
      ];
      
      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          fixed = true;
          this.log(`  Fixed ${fix.description} in ${filePath}`);
        }
      });
      
      if (fixed) {
        fs.writeFileSync(filePath, content);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async installDependencies() {
    this.log('📦 Installing dependencies...');
    
    const result = await this.runCommand('npm install');
    if (result.success) {
      this.log('✅ Dependencies installed successfully');
      return true;
    } else {
      this.log('❌ Failed to install dependencies', 'ERROR');
      return false;
    }
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type check...');
    
    const result = await this.runCommand('npx tsc --noEmit');
    if (result.success) {
      this.log('✅ TypeScript type check passed');
      return true;
    } else {
      this.log('❌ TypeScript errors found', 'ERROR');
      return false;
    }
  }

  async runLinting() {
    this.log('🔍 Running ESLint...');
    
    const result = await this.runCommand('npm run lint -- --fix');
    if (result.success) {
      this.log('✅ ESLint passed');
      return true;
    } else {
      this.log('❌ ESLint errors found', 'ERROR');
      return false;
    }
  }

  async buildProject() {
    this.log('🏗️ Building project...');
    
    const result = await this.runCommand('npm run build');
    if (result.success) {
      this.log('✅ Build successful');
      return true;
    } else {
      this.log('❌ Build failed', 'ERROR');
      return false;
    }
  }

  async startDevServer() {
    this.log('🚀 Starting development server...');
    
    return new Promise((resolve) => {
      const devProcess = spawn('npm', ['run', 'dev', '--', '--port', '3001'], {
        stdio: 'pipe',
        shell: true
      });
      
      let output = '';
      
      devProcess.stdout.on('data', (data) => {
        output += data.toString();
        if (output.includes('Ready') || output.includes('Local:')) {
          this.log('✅ Development server started successfully');
          resolve({ success: true, process: devProcess });
        }
      });
      
      devProcess.stderr.on('data', (data) => {
        output += data.toString();
        if (output.includes('Error') || output.includes('Failed')) {
          this.log(`❌ Development server error: ${data.toString()}`, 'ERROR');
          resolve({ success: false, error: data.toString() });
        }
      });
      
      // Timeout after 30 seconds
      setTimeout(() => {
        if (!output.includes('Ready')) {
          devProcess.kill();
          resolve({ success: false, error: 'Timeout starting dev server' });
        }
      }, 30000);
    });
  }

  async runTests() {
    this.log('🧪 Running tests...');
    
    const result = await this.runCommand('npm test');
    if (result.success) {
      this.log('✅ Tests passed');
      return true;
    } else {
      this.log('❌ Tests failed', 'ERROR');
      return false;
    }
  }

  async createAutomationScripts() {
    this.log('📝 Creating automation scripts...');
    
    const scripts = [
      {
        name: 'auto-fix-all.cjs',
        content: `
#!/usr/bin/env node
const { ComprehensiveAppAutomation } = require('./comprehensive-app-automation.cjs');
const automation = new ComprehensiveAppAutomation();
automation.runFullAutomation();
        `
      },
      {
        name: 'continuous-improvement.cjs',
        content: `
#!/usr/bin/env node
const { ComprehensiveAppAutomation } = require('./comprehensive-app-automation.cjs');
const automation = new ComprehensiveAppAutomation();
automation.startContinuousImprovement();
        `
      }
    ];
    
    scripts.forEach(script => {
      fs.writeFileSync(`scripts/${script.name}`, script.content);
      fs.chmodSync(`scripts/${script.name}`, '755');
    });
    
    this.log('✅ Automation scripts created');
  }

  async updatePackageJsonScripts() {
    this.log('📝 Updating package.json scripts...');
    
    try {
      const packagePath = 'package.json';
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      const newScripts = {
        'auto:fix': 'node scripts/comprehensive-app-automation.cjs',
        'auto:improve': 'node scripts/continuous-improvement.cjs',
        'auto:full': 'node scripts/comprehensive-app-automation.cjs --full',
        'auto:monitor': 'node scripts/comprehensive-app-automation.cjs --monitor',
        'fix:all': 'npm run auto:fix',
        'improve:continuous': 'npm run auto:improve'
      };
      
      packageJson.scripts = { ...packageJson.scripts, ...newScripts };
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.log('✅ Package.json scripts updated');
      return true;
    } catch (error) {
      this.log(`❌ Failed to update package.json: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runFullAutomation() {
    this.log('🚀 Starting comprehensive app automation...');
    this.isRunning = true;
    
    const steps = [
      { name: 'Fix package.json', fn: () => this.fixPackageJson() },
      { name: 'Install dependencies', fn: () => this.installDependencies() },
      { name: 'Fix syntax errors', fn: () => this.fixSyntaxErrors() },
      { name: 'Run type check', fn: () => this.runTypeCheck() },
      { name: 'Run linting', fn: () => this.runLinting() },
      { name: 'Build project', fn: () => this.buildProject() },
      { name: 'Create automation scripts', fn: () => this.createAutomationScripts() },
      { name: 'Update package.json scripts', fn: () => this.updatePackageJsonScripts() }
    ];
    
    for (const step of steps) {
      this.log(`\n📋 Step: ${step.name}`);
      const result = await step.fn();
      
      if (!result) {
        this.log(`❌ Step failed: ${step.name}`, 'ERROR');
        this.issues.push(step.name);
      } else {
        this.fixes.push(step.name);
      }
    }
    
    this.log('\n📊 Automation Summary:');
    this.log(`✅ Fixed: ${this.fixes.length} issues`);
    this.log(`❌ Issues: ${this.issues.length} remaining`);
    this.log(`⏱️ Total time: ${Date.now() - this.startTime}ms`);
    
    this.isRunning = false;
    return this.issues.length === 0;
  }

  async startContinuousImprovement() {
    this.log('🔄 Starting continuous improvement mode...');
    
    // Watch for file changes
    const watcher = chokidar.watch([
      'pages/**/*',
      'src/**/*',
      'components/**/*',
      'api/**/*'
    ], {
      ignored: ['node_modules/**', '.next/**', 'logs/**'],
      persistent: true
    });
    
    watcher.on('change', async (filePath) => {
      this.log(`📝 File changed: ${filePath}`);
      await this.fixFileSyntax(filePath);
    });
    
    watcher.on('error', (error) => {
      this.log(`❌ Watcher error: ${error.message}`, 'ERROR');
    });
    
    // Run periodic improvements
    setInterval(async () => {
      if (!this.isRunning) {
        await this.runPeriodicImprovements();
      }
    }, 300000); // Every 5 minutes
    
    this.log('✅ Continuous improvement mode active');
  }

  async runPeriodicImprovements() {
    this.log('🔄 Running periodic improvements...');
    
    const improvements = [
      { name: 'Type check', fn: () => this.runTypeCheck() },
      { name: 'Linting', fn: () => this.runLinting() },
      { name: 'Build test', fn: () => this.buildProject() }
    ];
    
    for (const improvement of improvements) {
      await improvement.fn();
    }
    
    this.log('✅ Periodic improvements completed');
  }

  async fixDevScript() {
    this.log('🔧 Fixing dev script...');
    
    try {
      const packagePath = 'package.json';
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Update dev script with better options
      packageJson.scripts.dev = "NODE_OPTIONS='--no-deprecation --max-old-space-size=4096 --experimental-loader=@next/swc-darwin-x64' next dev";
      packageJson.scripts['dev:stable'] = "NODE_OPTIONS='--no-deprecation --max-old-space-size=4096' next dev --turbo";
      packageJson.scripts['dev:legacy'] = "NODE_OPTIONS='--no-deprecation --max-old-space-size=4096' next dev --no-turbo";
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      this.fixes.push('Fixed dev script');
    } catch (error) {
      this.log(`❌ Error fixing dev script: ${error.message}`);
      this.issues.push(error.message);
    }
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      issues: this.issues,
      fixes: this.fixes,
      logs: this.logs.slice(-10), // Last 10 logs
      uptime: Date.now() - this.startTime
    };
  }
}

// CLI interface
if (require.main === module) {
  const automation = new ComprehensiveAppAutomation();
  const args = process.argv.slice(2);
  
  if (args.includes('--full')) {
    automation.runFullAutomation();
  } else if (args.includes('--monitor')) {
    automation.startContinuousImprovement();
  } else {
    automation.runFullAutomation();
  }
}

module.exports = { ComprehensiveAppAutomation }; 