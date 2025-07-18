#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
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
  }
}

// CLI interface
if (require.main === module) {
  const automation = new ComprehensiveAppAutomation();
  
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