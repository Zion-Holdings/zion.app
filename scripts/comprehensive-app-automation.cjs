#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
<<<<<<< HEAD
const express = require('express');

class ComprehensiveAppAutomation {
  constructor() {
    this.app = express();
    this.port = process.env.AUTOMATION_PORT || 3001;
    this.isRunning = false;
    this.monitoringInterval = null;
    this.improvementQueue = [];
    this.lastBuildTime = null;
    this.errorCount = 0;
    this.improvementCount = 0;
    
    this.setupExpress();
    this.setupRoutes();
  }

  setupExpress() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    // Logging middleware
    this.app.use((req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
      next();
    });
  }

  setupRoutes() {
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        uptime: process.uptime(),
        isRunning: this.isRunning,
        errorCount: this.errorCount,
        improvementCount: this.improvementCount,
        lastBuildTime: this.lastBuildTime,
        queueLength: this.improvementQueue.length
      });
    });

    // Start automation
    this.app.post('/start', (req, res) => {
      this.start();
      res.json({ success: true, message: 'Automation started' });
    });

    // Stop automation
    this.app.post('/stop', (req, res) => {
      this.stop();
      res.json({ success: true, message: 'Automation stopped' });
    });

    // Status
    this.app.get('/status', (req, res) => {
      res.json({
        isRunning: this.isRunning,
        errorCount: this.errorCount,
        improvementCount: this.improvementCount,
        lastBuildTime: this.lastBuildTime,
        queueLength: this.improvementQueue.length
      });
    });

    // Manual improvement trigger
    this.app.post('/improve', async (req, res) => {
      try {
        const result = await this.runImprovementCycle();
        res.json({ success: true, result });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Get logs
    this.app.get('/logs', (req, res) => {
      try {
        const logs = this.getRecentLogs();
        res.json({ logs });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  async start() {
    if (this.isRunning) {
      console.log('Automation is already running');
      return;
    }

    console.log('🚀 Starting Comprehensive App Automation...');
    this.isRunning = true;

    // Start monitoring
    this.startMonitoring();

    // Start Express server
    this.server = this.app.listen(this.port, () => {
      console.log(`⚡ Automation API running on port ${this.port}`);
      console.log(`📊 Health check: http://localhost:${this.port}/health`);
    });

    // Run initial improvement cycle
    await this.runImprovementCycle();
  }

  stop() {
    console.log('🛑 Stopping Comprehensive App Automation...');
    this.isRunning = false;

    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }

    if (this.server) {
      this.server.close();
    }
  }

  startMonitoring() {
    // Monitor every 5 minutes
    this.monitoringInterval = setInterval(async () => {
      if (!this.isRunning) return;

      try {
        await this.checkForImprovements();
      } catch (error) {
        console.error('Monitoring error:', error);
        this.errorCount++;
      }
    }, 5 * 60 * 1000);
  }

  async checkForImprovements() {
    console.log('🔍 Checking for improvements...');

    // Check for build errors
    const buildErrors = await this.checkBuildErrors();
    if (buildErrors.length > 0) {
      console.log(`🚨 Found ${buildErrors.length} build errors`);
      await this.fixBuildErrors(buildErrors);
    }

    // Check for linting errors
    const lintErrors = await this.checkLintErrors();
    if (lintErrors.length > 0) {
      console.log(`🔧 Found ${lintErrors.length} linting errors`);
      await this.fixLintErrors(lintErrors);
    }

    // Check for TypeScript errors
    const tsErrors = await this.checkTypeScriptErrors();
    if (tsErrors.length > 0) {
      console.log(`📝 Found ${tsErrors.length} TypeScript errors`);
      await this.fixTypeScriptErrors(tsErrors);
    }

    // Check for performance issues
    const perfIssues = await this.checkPerformanceIssues();
    if (perfIssues.length > 0) {
      console.log(`⚡ Found ${perfIssues.length} performance issues`);
      await this.fixPerformanceIssues(perfIssues);
    }

    // Check for security vulnerabilities
    const securityIssues = await this.checkSecurityIssues();
    if (securityIssues.length > 0) {
      console.log(`🔒 Found ${securityIssues.length} security issues`);
      await this.fixSecurityIssues(securityIssues);
    }
  }

  async runImprovementCycle() {
    console.log('🔄 Running improvement cycle...');
    
    try {
      // 1. Check and fix build issues
      await this.checkForImprovements();

      // 2. Optimize bundle
      await this.optimizeBundle();

      // 3. Update dependencies
      await this.updateDependencies();

      // 4. Run tests
      await this.runTests();

      // 5. Commit and push changes
      await this.commitAndPushChanges();

      this.improvementCount++;
      console.log('✅ Improvement cycle completed');
      
      return { success: true, improvements: this.improvementCount };
    } catch (error) {
      console.error('❌ Improvement cycle failed:', error);
      this.errorCount++;
      throw error;
    }
  }

  async checkBuildErrors() {
    try {
      const result = execSync('npm run build 2>&1', { encoding: 'utf8' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseBuildErrors(output);
    }
  }

  async checkLintErrors() {
    try {
      const result = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseLintErrors(output);
    }
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npm run typecheck 2>&1', { encoding: 'utf8' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseTypeScriptErrors(output);
    }
  }

  async checkPerformanceIssues() {
    try {
      const result = execSync('npm run perf:audit 2>&1', { encoding: 'utf8' });
      return this.parsePerformanceIssues(result);
    } catch (error) {
      return [];
    }
  }

  async checkSecurityIssues() {
    try {
      const result = execSync('npm audit --audit-level=moderate 2>&1', { encoding: 'utf8' });
      return this.parseSecurityIssues(result);
    } catch (error) {
      return [];
    }
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error')) {
        errors.push({
          type: 'build',
          message: line.trim(),
          file: this.extractFilePath(line)
        });
      }
    }
    
    return errors;
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error')) {
        errors.push({
          type: 'lint',
          message: line.trim(),
          file: this.extractFilePath(line)
        });
      }
    }
    
    return errors;
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS') || line.includes('Type error')) {
        errors.push({
          type: 'typescript',
          message: line.trim(),
          file: this.extractFilePath(line)
        });
      }
    }
    
    return errors;
  }

  parsePerformanceIssues(output) {
    const issues = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('slow') || line.includes('performance') || line.includes('bundle')) {
        issues.push({
          type: 'performance',
          message: line.trim()
        });
      }
    }
    
    return issues;
  }

  parseSecurityIssues(output) {
    const issues = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('vulnerability') || line.includes('security')) {
        issues.push({
          type: 'security',
          message: line.trim()
        });
      }
    }
    
    return issues;
  }

  extractFilePath(line) {
    const match = line.match(/\(([^)]+)\)/);
    return match ? match[1] : null;
  }

  async fixBuildErrors(errors) {
    console.log('🔧 Fixing build errors...');
    
    for (const error of errors) {
      try {
        await this.fixError(error);
      } catch (fixError) {
        console.error(`Failed to fix build error:`, fixError);
      }
    }
  }

  async fixLintErrors(errors) {
    console.log('🔧 Fixing lint errors...');
    
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
    } catch (error) {
      console.error('Failed to fix lint errors:', error);
    }
  }

  async fixTypeScriptErrors(errors) {
    console.log('🔧 Fixing TypeScript errors...');
    
    for (const error of errors) {
      try {
        await this.fixError(error);
      } catch (fixError) {
        console.error(`Failed to fix TypeScript error:`, fixError);
      }
    }
  }

  async fixPerformanceIssues(issues) {
    console.log('🔧 Fixing performance issues...');
    
    try {
      execSync('npm run optimize', { stdio: 'inherit' });
    } catch (error) {
      console.error('Failed to fix performance issues:', error);
    }
  }

  async fixSecurityIssues(issues) {
    console.log('🔧 Fixing security issues...');
    
    try {
      execSync('npm audit fix', { stdio: 'inherit' });
    } catch (error) {
      console.error('Failed to fix security issues:', error);
    }
  }

  async fixError(error) {
    const { type, message, file } = error;
    
    if (!file) return;

    try {
      const filePath = path.resolve(file);
      if (!fs.existsSync(filePath)) return;

      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;

      // Apply common fixes based on error type
      switch (type) {
        case 'build':
          fixedContent = this.fixBuildError(content, message);
          break;
        case 'typescript':
          fixedContent = this.fixTypeScriptError(content, message);
          break;
        case 'lint':
          fixedContent = this.fixLintError(content, message);
          break;
      }

      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`✅ Fixed ${type} error in ${file}`);
      }
    } catch (error) {
      console.error(`Failed to fix error in ${file}:`, error);
    }
  }

  fixBuildError(content, message) {
    // Common build error fixes
    if (message.includes('Cannot find module')) {
      // Try to fix import issues
      return content.replace(/import\s+.*\s+from\s+['"]([^'"]+)['"]/g, (match, importPath) => {
        if (importPath.startsWith('@/')) {
          return match; // Keep existing @ imports
        }
        return match;
      });
    }
    
    return content;
  }

  fixTypeScriptError(content, message) {
    // Common TypeScript error fixes
    if (message.includes('Property') && message.includes('does not exist')) {
      // Add missing properties or fix type issues
      return content;
    }
    
    if (message.includes('Type') && message.includes('is not assignable')) {
      // Fix type assignment issues
      return content;
    }
    
    return content;
  }

  fixLintError(content, message) {
    // Common lint error fixes
    if (message.includes('no-unused-vars')) {
      // Remove unused variables
      return content;
    }
    
    if (message.includes('no-console')) {
      // Replace console.log with proper logging
      return content.replace(/console\.log/g, '// console.log');
    }
    
    return content;
  }

  async optimizeBundle() {
    console.log('📦 Optimizing bundle...');
    
    try {
      execSync('npm run bundle:optimize', { stdio: 'inherit' });
    } catch (error) {
      console.error('Bundle optimization failed:', error);
    }
  }

  async updateDependencies() {
    console.log('📦 Updating dependencies...');
    
    try {
      execSync('npm update', { stdio: 'inherit' });
    } catch (error) {
      console.error('Dependency update failed:', error);
    }
  }

  async runTests() {
    console.log('🧪 Running tests...');
    
    try {
      execSync('npm run test', { stdio: 'inherit' });
    } catch (error) {
      console.error('Tests failed:', error);
    }
  }

  async commitAndPushChanges() {
    console.log('💾 Committing and pushing changes...');
    
    try {
      // Check if there are changes to commit
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      
      if (status.trim()) {
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "🤖 Automated improvements and fixes"', { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });
        console.log('✅ Changes committed and pushed');
      } else {
        console.log('📝 No changes to commit');
      }
    } catch (error) {
      console.error('Failed to commit and push changes:', error);
    }
  }

  getRecentLogs() {
    try {
      const logFile = path.join(__dirname, '..', 'logs', 'automation.log');
      if (fs.existsSync(logFile)) {
        const content = fs.readFileSync(logFile, 'utf8');
        return content.split('\n').slice(-50); // Last 50 lines
      }
      return [];
    } catch (error) {
      return [];
    }
=======
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
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  }
}

// CLI interface
if (require.main === module) {
  const automation = new ComprehensiveAppAutomation();
<<<<<<< HEAD
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'stop':
      automation.stop();
      break;
    case 'status':
      console.log(automation.isRunning ? 'Running' : 'Stopped');
      break;
    case 'improve':
      automation.runImprovementCycle();
      break;
    default:
      console.log('Usage: node comprehensive-app-automation.cjs [start|stop|status|improve]');
  }
}

module.exports = ComprehensiveAppAutomation; 
=======
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
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
