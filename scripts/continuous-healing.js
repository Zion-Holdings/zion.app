#!/usr/bin/env node

/**
 * Continuous Healing System
 * Runs in the background to continuously monitor and fix issues
 */

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const chokidar = require('chokidar');
const AutoFixSystem = require('./auto-fix-errors');

class ContinuousHealer {
  constructor() {
    this.isRunning = false;
    this.logFile = 'logs/continuous-healer.log';
    this.ensureLogDirectory();
    this.autoFixSystem = null;
    this.monitoringInterval = null;
    this.fileWatchers = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async startMonitoring() {
    if (this.isRunning) {
      this.log('Continuous healer is already running');
      return;
    }

    this.isRunning = true;
    this.log('Starting continuous healing system...');

    // Start file monitoring
    this.startFileMonitoring();

    // Start periodic health checks
    this.startPeriodicChecks();

    // Start build monitoring
    this.startBuildMonitoring();

    this.log('Continuous healing system started successfully');
  }

  startFileMonitoring() {
    this.log('Starting file monitoring...');

    // Monitor source files for changes
    const sourceWatcher = chokidar.watch('src/**/*.{ts,tsx,js,jsx}', {
      persistent: true,
      ignoreInitial: true,
      ignored: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**']
    });

    sourceWatcher.on('change', async (filePath) => {
      this.log(`Source file changed: ${filePath}`);
      await this.handleFileChange(filePath);
    });

    sourceWatcher.on('add', async (filePath) => {
      this.log(`New file added: ${filePath}`);
      await this.handleNewFile(filePath);
    });

    sourceWatcher.on('unlink', async (filePath) => {
      this.log(`File removed: ${filePath}`);
      await this.handleFileRemoval(filePath);
    });

    // Monitor configuration files
    const configWatcher = chokidar.watch(['package.json', 'tsconfig.json', '.eslintrc.*', 'next.config.*'], {
      persistent: true,
      ignoreInitial: true
    });

    configWatcher.on('change', async (filePath) => {
      this.log(`Configuration changed: ${filePath}`);
      await this.handleConfigChange(filePath);
    });

    this.fileWatchers.push(sourceWatcher, configWatcher);
  }

  startPeriodicChecks() {
    this.log('Starting periodic health checks...');

    this.monitoringInterval = setInterval(async () => {
      await this.runHealthCheck();
    }, 5 * 60 * 1000); // Every 5 minutes
  }

  startBuildMonitoring() {
    this.log('Starting build monitoring...');

    // Monitor for build processes
    const buildWatcher = chokidar.watch(['.next', 'dist', 'build'], {
      persistent: true,
      ignoreInitial: true
    });

    buildWatcher.on('change', async () => {
      this.log('Build output changed');
      await this.handleBuildChange();
    });

    this.fileWatchers.push(buildWatcher);
  }

  async handleFileChange(filePath) {
    try {
      // Check if the file has syntax errors
      const hasErrors = await this.checkFileForErrors(filePath);
      
      if (hasErrors) {
        this.log(`Errors detected in ${filePath}, applying fixes...`);
        await this.applyFileFixes(filePath);
      }
    } catch (error) {
      this.log(`Error handling file change: ${error.message}`, 'ERROR');
    }
  }

  async handleNewFile(filePath) {
    try {
      // Check if new file needs any setup
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        await this.setupNewFile(filePath);
      }
    } catch (error) {
      this.log(`Error handling new file: ${error.message}`, 'ERROR');
    }
  }

  async handleFileRemoval(filePath) {
    try {
      // Check for orphaned imports
      await this.checkForOrphanedImports(filePath);
    } catch (error) {
      this.log(`Error handling file removal: ${error.message}`, 'ERROR');
    }
  }

  async handleConfigChange(filePath) {
    try {
      if (filePath === 'package.json') {
        await this.handlePackageJsonChange();
      } else if (filePath === 'tsconfig.json') {
        await this.handleTsConfigChange();
      }
    } catch (error) {
      this.log(`Error handling config change: ${error.message}`, 'ERROR');
    }
  }

  async handleBuildChange() {
    try {
      // Check if build is successful
      const buildStatus = await this.checkBuildStatus();
      
      if (!buildStatus.success) {
        this.log('Build issues detected, applying fixes...');
        await this.applyBuildFixes();
      }
    } catch (error) {
      this.log(`Error handling build change: ${error.message}`, 'ERROR');
    }
  }

  async checkFileForErrors(filePath) {
    try {
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        // Run TypeScript check on the specific file
        execSync(`npx tsc --noEmit ${filePath}`, { stdio: 'pipe' });
        return false; // No errors
      }
      return false;
    } catch (error) {
      return true; // Has errors
    }
  }

  async applyFileFixes(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix common issues
      if (content.includes(': any')) {
        newContent = newContent.replace(/: any/g, ': unknown');
        modified = true;
      }

      if (content.includes('Object is possibly')) {
        newContent = newContent.replace(/\.(\w+)/g, '?.$1');
        modified = true;
      }

      if (content.includes('import React')) {
        newContent = newContent.replace(/import React from ['"]react['"];?\n?/g, '');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.log(`Applied fixes to ${filePath}`);
      }
    } catch (error) {
      this.log(`Error applying file fixes: ${error.message}`, 'ERROR');
    }
  }

  async setupNewFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Add basic React component structure if it's a TSX file
      if (filePath.endsWith('.tsx') && !content.includes('export default')) {
        const componentName = path.basename(filePath, '.tsx');
        const newContent = `import React from 'react';

interface ${componentName}Props {
  // Add props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div>
      {/* Add content here */}
    </div>
  );
};

export default ${componentName};
`;
        fs.writeFileSync(filePath, newContent);
        this.log(`Set up new component file: ${filePath}`);
      }
    } catch (error) {
      this.log(`Error setting up new file: ${error.message}`, 'ERROR');
    }
  }

  async checkForOrphanedImports(removedFilePath) {
    try {
      const fileName = path.basename(removedFilePath, path.extname(removedFilePath));
      const tsFiles = this.findTypeScriptFiles();
      
      for (const file of tsFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const importRegex = new RegExp(`import.*from ['"][^'"]*${fileName}['"]`, 'g');
        
        if (importRegex.test(content)) {
          this.log(`Found orphaned import in ${file}, removing...`);
          const newContent = content.replace(importRegex, '');
          fs.writeFileSync(file, newContent);
        }
      }
    } catch (error) {
      this.log(`Error checking for orphaned imports: ${error.message}`, 'ERROR');
    }
  }

  async handlePackageJsonChange() {
    try {
      // Check if dependencies were added
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Run npm install if package.json changed
      this.log('Package.json changed, running npm install...');
      execSync('npm install', { stdio: 'inherit' });
    } catch (error) {
      this.log(`Error handling package.json change: ${error.message}`, 'ERROR');
    }
  }

  async handleTsConfigChange() {
    try {
      // Validate tsconfig.json
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      this.log('TypeScript configuration is valid');
    } catch (error) {
      this.log('TypeScript configuration has issues', 'WARN');
    }
  }

  async checkBuildStatus() {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async applyBuildFixes() {
    try {
      // Run comprehensive auto-fixes
      const autoFix = new AutoFixSystem();
      await autoFix.run();
      
      this.log('Build fixes applied');
    } catch (error) {
      this.log(`Error applying build fixes: ${error.message}`, 'ERROR');
    }
  }

  async runHealthCheck() {
    this.log('Running periodic health check...');
    
    try {
      // Check TypeScript compilation
      const typeCheck = await this.runTypeCheck();
      
      // Check ESLint
      const linting = await this.runLinting();
      
      // Check for common issues
      await this.checkForCommonIssues();
      
      this.log('Health check completed');
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
    }
  }

  async runTypeCheck() {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      return true;
    } catch (error) {
      this.log('TypeScript errors detected during health check', 'WARN');
      return false;
    }
  }

  async runLinting() {
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      return true;
    } catch (error) {
      this.log('ESLint errors detected during health check', 'WARN');
      return false;
    }
  }

  async checkForCommonIssues() {
    try {
      // Check for console.log statements in production code
      const tsFiles = this.findTypeScriptFiles();
      
      for (const file of tsFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('console.log(') && !file.includes('.test.') && !file.includes('.spec.')) {
          this.log(`Found console.log in production file: ${file}`, 'WARN');
        }
      }
    } catch (error) {
      this.log(`Error checking for common issues: ${error.message}`, 'ERROR');
    }
  }

  findTypeScriptFiles() {
    const glob = require('glob');
    return glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
  }

  stop() {
    this.log('Stopping continuous healing system...');
    
    this.isRunning = false;
    
    // Stop file watchers
    this.fileWatchers.forEach(watcher => {
      watcher.close();
    });
    this.fileWatchers = [];
    
    // Stop periodic checks
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
    
    this.log('Continuous healing system stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      fileWatchers: this.fileWatchers.length,
      hasMonitoringInterval: !!this.monitoringInterval
    };
  }
}

// Run the continuous healer
if (require.main === module) {
  const healer = new ContinuousHealer();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    healer.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    healer.stop();
    process.exit(0);
  });

  healer.startMonitoring().catch(error => {
    console.error('Continuous healer failed:', error);
    process.exit(1);
  });
}

module.exports = ContinuousHealer; 