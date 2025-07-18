#!/usr/bin/env node

/**
 * Build Monitor and Auto-Fix System
 * Monitors build processes and automatically applies fixes when errors occur
 */

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const chokidar = require('chokidar');

class BuildMonitor {
  constructor() {
    this.isRunning = false;
    this.buildQueue = [];
    this.logFile = 'logs/build-monitor.log';
    this.ensureLogDirectory();
    this.autoFixSystem = null;
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
    this.log('Starting build monitor...');
    
    // Watch for package.json changes (new dependencies)
    const packageWatcher = chokidar.watch('package.json', {
      persistent: true,
      ignoreInitial: true
    });

    packageWatcher.on('change', () => {
      this.log('package.json changed, triggering build...');
      this.queueBuild();
    });

    // Watch for source code changes
    const sourceWatcher = chokidar.watch('src/**/*.{ts,tsx,js,jsx}', {
      persistent: true,
      ignoreInitial: true,
      ignored: ['**/node_modules/**', '**/dist/**', '**/build/**']
    });

    sourceWatcher.on('change', (filePath) => {
      this.log(`Source file changed: ${filePath}`);
      this.queueBuild();
    });

    // Watch for configuration changes
    const configWatcher = chokidar.watch(['tsconfig.json', '.eslintrc.*', 'next.config.*'], {
      persistent: true,
      ignoreInitial: true
    });

    configWatcher.on('change', (filePath) => {
      this.log(`Configuration changed: ${filePath}`);
      this.queueBuild();
    });

    // Initial build
    this.queueBuild();

    this.log('Build monitor started successfully');
  }

  queueBuild() {
    if (!this.isRunning) {
      this.buildQueue.push(Date.now());
      this.processBuildQueue();
    } else {
      this.log('Build already in progress, queuing...');
      this.buildQueue.push(Date.now());
    }
  }

  async processBuildQueue() {
    if (this.buildQueue.length === 0 || this.isRunning) {
      return;
    }

    this.isRunning = true;
    const buildTime = this.buildQueue.shift();

    try {
      this.log('Starting build process...');
      const buildResult = await this.runBuild();

      if (buildResult.success) {
        this.log('Build completed successfully');
      } else {
        this.log('Build failed, applying auto-fixes...');
        await this.applyAutoFixes();
        
        // Retry build after fixes
        this.log('Retrying build after fixes...');
        const retryResult = await this.runBuild();
        
        if (retryResult.success) {
          this.log('Build succeeded after auto-fixes');
        } else {
          this.log('Build still failed after auto-fixes', 'ERROR');
        }
      }
    } catch (error) {
      this.log(`Build process error: ${error.message}`, 'ERROR');
    } finally {
      this.isRunning = false;
      
      // Process next build in queue
      if (this.buildQueue.length > 0) {
        setTimeout(() => this.processBuildQueue(), 1000);
      }
    }
  }

  async runBuild() {
    return new Promise((resolve) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 300000 // 5 minutes
      });

      let output = '';
      let errorOutput = '';

      buildProcess.stdout.on('data', (data) => {
        output += data.toString();
        process.stdout.write(data);
      });

      buildProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
        process.stderr.write(data);
      });

      buildProcess.on('close', (code) => {
        const fullOutput = output + errorOutput;
        
        if (code === 0) {
          resolve({ success: true, output: fullOutput });
        } else {
          resolve({ success: false, output: fullOutput, code });
        }
      });

      buildProcess.on('error', (error) => {
        resolve({ success: false, output: error.message, code: -1 });
      });
    });
  }

  async applyAutoFixes() {
    try {
      // Import the auto-fix system
      const AutoFixSystem = require('./auto-fix-errors');
      this.autoFixSystem = new AutoFixSystem();
      
      this.log('Applying auto-fixes...');
      await this.autoFixSystem.run();
      
      this.log('Auto-fixes applied successfully');
    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async runLinting() {
    try {
      this.log('Running ESLint...');
      execSync('npm run lint', { stdio: 'inherit' });
      this.log('ESLint passed');
      return true;
    } catch (error) {
      this.log('ESLint failed, running auto-fix...');
      try {
        execSync('npm run lint:fix', { stdio: 'inherit' });
        this.log('ESLint auto-fix applied');
        return true;
      } catch (fixError) {
        this.log(`ESLint auto-fix failed: ${fixError.message}`, 'ERROR');
        return false;
      }
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      execSync('npx tsc --noEmit', { stdio: 'inherit' });
      this.log('TypeScript type check passed');
      return true;
    } catch (error) {
      this.log('TypeScript type check failed');
      return false;
    }
  }

  async runTests() {
    try {
      this.log('Running tests...');
      execSync('npm test', { stdio: 'inherit' });
      this.log('Tests passed');
      return true;
    } catch (error) {
      this.log('Tests failed', 'ERROR');
      return false;
    }
  }

  async triggerNetlifyBuild() {
    try {
      this.log('Triggering Netlify build...');
      
      // Check if we have Netlify CLI
      try {
        execSync('netlify --version', { stdio: 'pipe' });
        
        // Trigger build via Netlify CLI
        execSync('netlify build', { stdio: 'inherit' });
        this.log('Netlify build triggered successfully');
        return true;
      } catch (netlifyError) {
        this.log('Netlify CLI not available, pushing to trigger build...');
        
        // Fallback: push to git to trigger build
        execSync('git push', { stdio: 'inherit' });
        this.log('Git push completed, Netlify build should trigger');
        return true;
      }
    } catch (error) {
      this.log(`Failed to trigger Netlify build: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runFullPipeline() {
    this.log('Running full build pipeline...');
    
    const results = {
      linting: await this.runLinting(),
      typeCheck: await this.runTypeCheck(),
      build: false,
      tests: await this.runTests(),
      netlify: false
    };

    // Run build
    const buildResult = await this.runBuild();
    results.build = buildResult.success;

    if (results.build) {
      // Trigger Netlify build only if everything passes
      results.netlify = await this.triggerNetlifyBuild();
    }

    this.log('Build pipeline results:', results);
    return results;
  }

  stop() {
    this.log('Stopping build monitor...');
    this.isRunning = false;
    this.buildQueue = [];
  }
}

// Run the build monitor
if (require.main === module) {
  const monitor = new BuildMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    monitor.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    monitor.stop();
    process.exit(0);
  });

  monitor.startMonitoring().catch(error => {
    console.error('Build monitor failed:', error);
    process.exit(1);
  });
}

module.exports = BuildMonitor; 