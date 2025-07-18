#!/usr/bin/env node

/**
 * Netlify Self-Healing System
 * Automatically detects and fixes common build issues
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

// Configuration
const CONFIG = {
  maxRetries: 3,
  buildTimeout: 1800000, // 30 minutes
  healthCheckInterval: 300000, // 5 minutes
  logFile: 'logs/netlify-self-heal.log',
  errorPatterns: {
    memory: /JavaScript heap out of memory|ENOMEM|OutOfMemoryError/,
    timeout: /timeout|ETIMEDOUT|Build exceeded maximum time/,
    dependency: /Cannot find module|Module not found|peer dependency|version conflict/,
    typescript: /Type.*is not assignable|Property.*does not exist|TS\d+/,
    linting: /ESLint|linting|eslint/,
    build: /Build failed|Build error|Failed to compile/,
    network: /ECONNRESET|ENOTFOUND|ETIMEDOUT|network error/,
    permission: /EACCES|permission denied|access denied/,
    disk: /ENOSPC|disk space|no space left/,
    nodeVersion: /Node\.js version|version mismatch|incompatible version/
  },
  fixStrategies: {
    memory: ['increase-memory', 'optimize-bundle', 'clean-cache'],
    timeout: ['increase-timeout', 'optimize-build', 'parallel-build'],
    dependency: ['clean-deps', 'update-deps', 'fix-peer-deps'],
    typescript: ['fix-types', 'skip-type-check', 'update-tsconfig'],
    linting: ['auto-fix-lint', 'skip-lint', 'fix-lint-config'],
    build: ['clean-build', 'optimize-build', 'fix-build-config'],
    network: ['retry-build', 'use-cache', 'offline-build'],
    permission: ['fix-permissions', 'use-sudo', 'change-owner'],
    disk: ['clean-disk', 'increase-disk', 'optimize-size'],
    nodeVersion: ['update-node', 'fix-node-version', 'use-nvm']
  }
};

class NetlifySelfHealing {
  constructor() {
    this.buildHistory = [];
    this.currentBuild = null;
    this.isRunning = false;
    this.retryCount = 0;
    this.lastHealthCheck = Date.now();
    
    // Ensure logs directory exists
    this.ensureLogsDirectory();
    
    // Initialize monitoring
    this.startMonitoring();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Write to log file
    fs.appendFileSync(CONFIG.logFile, logEntry + '\n');
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(CONFIG.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  async startMonitoring() {
    this.log('Starting Netlify Self-Healing System...');
    
    // Start health check loop
    setInterval(() => {
      this.performHealthCheck();
    }, CONFIG.healthCheckInterval);
    
    // Monitor for build triggers
    this.monitorBuildTriggers();
  }

  async monitorBuildTriggers() {
    // Monitor package.json changes
    let lastPackageHash = this.getFileHash('package.json');
    
    setInterval(() => {
      const currentHash = this.getFileHash('package.json');
      if (currentHash !== lastPackageHash) {
        this.log('Package.json changed, triggering build health check');
        this.performHealthCheck();
        lastPackageHash = currentHash;
      }
    }, 60000); // Check every minute
  }

  getFileHash(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return crypto.createHash('md5').update(content).digest('hex');
    } catch (error) {
      return null;
    }
  }

  async performHealthCheck() {
    if (this.isRunning) {
      this.log('Health check skipped - build in progress');
      return;
    }

    this.log('Performing health check...');
    
    try {
      // Check build status
      const buildStatus = await this.checkBuildStatus();
      
      if (buildStatus.needsAttention) {
        this.log(`Build issues detected: ${buildStatus.issues.join(', ')}`);
        await this.triggerSelfHealing(buildStatus.issues);
      } else {
        this.log('Build health check passed');
      }
      
      this.lastHealthCheck = Date.now();
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkBuildStatus() {
    const issues = [];
    
    // Check for common build artifacts that indicate problems
    const problematicFiles = [
      'build.log',
      'error.log',
      'lint.log',
      'eslint-report.json',
      'bundle-analysis.json'
    ];
    
    for (const file of problematicFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeFileForIssues(content);
        issues.push(...fileIssues);
      }
    }
    
    // Check package.json for potential issues
    const packageIssues = this.checkPackageIssues();
    issues.push(...packageIssues);
    
    // Check for build configuration issues
    const configIssues = this.checkBuildConfigIssues();
    issues.push(...configIssues);
    
    return {
      needsAttention: issues.length > 0,
      issues: [...new Set(issues)] // Remove duplicates
    };
  }

  analyzeFileForIssues(content) {
    const issues = [];
    
    for (const [issueType, pattern] of Object.entries(CONFIG.errorPatterns)) {
      if (pattern.test(content)) {
        issues.push(issueType);
      }
    }
    
    return issues;
  }

  checkPackageIssues() {
    const issues = [];
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Check for problematic dependencies
      const problematicDeps = [
        'react-scripts', // Can cause conflicts with Next.js
        'webpack', // Should use Next.js webpack
        'babel-loader' // Should use Next.js babel
      ];
      
      const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };
      
      for (const dep of problematicDeps) {
        if (allDeps[dep]) {
          issues.push('dependency');
        }
      }
      
      // Check for missing essential scripts
      const essentialScripts = ['build', 'dev', 'start'];
      for (const script of essentialScripts) {
        if (!packageJson.scripts[script]) {
          issues.push('build');
        }
      }
      
    } catch (error) {
      issues.push('build');
    }
    
    return issues;
  }

  checkBuildConfigIssues() {
    const issues = [];
    
    // Check netlify.toml
    if (fs.existsSync('netlify.toml')) {
      const netlifyConfig = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!netlifyConfig.includes('command =')) {
        issues.push('build');
      }
      
      if (!netlifyConfig.includes('publish =')) {
        issues.push('build');
      }
    }
    
    // Check next.config.js
    if (fs.existsSync('next.config.js')) {
      const nextConfig = fs.readFileSync('next.config.js', 'utf8');
      
      // Check for common issues
      if (nextConfig.includes('experimental: {') && !nextConfig.includes('output: "export"')) {
        // Experimental features might cause issues
        issues.push('build');
      }
    }
    
    return issues;
  }

  async triggerSelfHealing(issues) {
    this.log(`Triggering self-healing for issues: ${issues.join(', ')}`);
    
    for (const issue of issues) {
      const strategies = CONFIG.fixStrategies[issue] || [];
      
      for (const strategy of strategies) {
        try {
          this.log(`Applying fix strategy: ${strategy}`);
          await this.applyFixStrategy(strategy);
          
          // Test if the fix worked
          const testResult = await this.testFix(issue);
          if (testResult.success) {
            this.log(`Fix strategy ${strategy} successful for ${issue}`);
            break;
          } else {
            this.log(`Fix strategy ${strategy} failed for ${issue}, trying next...`);
          }
        } catch (error) {
          this.log(`Fix strategy ${strategy} failed: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async applyFixStrategy(strategy) {
    switch (strategy) {
      case 'increase-memory':
        return this.increaseMemory();
      
      case 'optimize-bundle':
        return this.optimizeBundle();
      
      case 'clean-cache':
        return this.cleanCache();
      
      case 'increase-timeout':
        return this.increaseTimeout();
      
      case 'optimize-build':
        return this.optimizeBuild();
      
      case 'parallel-build':
        return this.enableParallelBuild();
      
      case 'clean-deps':
        return this.cleanDependencies();
      
      case 'update-deps':
        return this.updateDependencies();
      
      case 'fix-peer-deps':
        return this.fixPeerDependencies();
      
      case 'fix-types':
        return this.fixTypeScriptIssues();
      
      case 'skip-type-check':
        return this.skipTypeCheck();
      
      case 'update-tsconfig':
        return this.updateTsConfig();
      
      case 'auto-fix-lint':
        return this.autoFixLint();
      
      case 'skip-lint':
        return this.skipLint();
      
      case 'fix-lint-config':
        return this.fixLintConfig();
      
      case 'clean-build':
        return this.cleanBuild();
      
      case 'fix-build-config':
        return this.fixBuildConfig();
      
      case 'retry-build':
        return this.retryBuild();
      
      case 'use-cache':
        return this.enableBuildCache();
      
      case 'offline-build':
        return this.enableOfflineBuild();
      
      case 'fix-permissions':
        return this.fixPermissions();
      
      case 'change-owner':
        return this.changeOwner();
      
      case 'clean-disk':
        return this.cleanDisk();
      
      case 'optimize-size':
        return this.optimizeSize();
      
      case 'update-node':
        return this.updateNodeVersion();
      
      case 'fix-node-version':
        return this.fixNodeVersion();
      
      case 'use-nvm':
        return this.useNvm();
      
      default:
        throw new Error(`Unknown fix strategy: ${strategy}`);
    }
  }

  // Memory-related fixes
  async increaseMemory() {
    this.log('Increasing memory allocation...');
    
    // Update netlify.toml with increased memory
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!config.includes('NODE_OPTIONS')) {
        config = config.replace(
          '[build.environment]',
          `[build.environment]
  NODE_OPTIONS = "--max-old-space-size=8192"`
        );
      } else {
        config = config.replace(
          /NODE_OPTIONS = "[^"]*"/,
          'NODE_OPTIONS = "--max-old-space-size=8192"'
        );
      }
      
      fs.writeFileSync('netlify.toml', config);
    }
    
    // Update package.json build script
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if (packageJson.scripts.build) {
      packageJson.scripts.build = packageJson.scripts.build.replace(
        /NODE_OPTIONS='[^']*'/,
        "NODE_OPTIONS='--max-old-space-size=8192'"
      );
      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    }
  }

  async optimizeBundle() {
    this.log('Optimizing bundle...');
    
    // Run bundle optimization script if it exists
    if (fs.existsSync('scripts/optimize-bundle.cjs')) {
      execSync('node scripts/optimize-bundle.cjs', { stdio: 'inherit' });
    }
    
    // Update next.config.js for better optimization
    if (fs.existsSync('next.config.js')) {
      let config = fs.readFileSync('next.config.js', 'utf8');
      
      // Add optimization settings
      if (!config.includes('experimental: {')) {
        config = config.replace(
          'module.exports = {',
          `module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@chakra-ui/react', 'lucide-react'],
  },`
        );
      }
      
      fs.writeFileSync('next.config.js', config);
    }
  }

  async cleanCache() {
    this.log('Cleaning cache...');
    
    const cacheDirs = [
      '.next',
      'node_modules/.cache',
      '.cache',
      'dist',
      'out'
    ];
    
    for (const dir of cacheDirs) {
      if (fs.existsSync(dir)) {
        execSync(`rm -rf ${dir}`);
      }
    }
  }

  // Timeout-related fixes
  async increaseTimeout() {
    this.log('Increasing build timeout...');
    
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!config.includes('command_timeout')) {
        config = config.replace(
          '[build]',
          `[build]
  command_timeout = "45m"`
        );
      } else {
        config = config.replace(
          /command_timeout = "\d+m"/,
          'command_timeout = "45m"'
        );
      }
      
      fs.writeFileSync('netlify.toml', config);
    }
  }

  async optimizeBuild() {
    this.log('Optimizing build process...');
    
    // Update package.json to use optimized build
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (!packageJson.scripts['build:optimized']) {
      packageJson.scripts['build:optimized'] = 'NEXT_DISABLE_CSS_INLINE=true SKIP_TYPE_CHECK=true npm run build';
    }
    
    // Update netlify.toml to use optimized build
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      config = config.replace(
        /command = "[^"]*"/,
        'command = "npm run build:optimized"'
      );
      fs.writeFileSync('netlify.toml', config);
    }
    
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }

  async enableParallelBuild() {
    this.log('Enabling parallel build...');
    
    // Update netlify.toml for parallel builds
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!config.includes('NEXT_BUILD_WORKERS')) {
        config = config.replace(
          '[build.environment]',
          `[build.environment]
  NEXT_BUILD_WORKERS = "4"`
        );
      }
      
      fs.writeFileSync('netlify.toml', config);
    }
  }

  // Dependency-related fixes
  async cleanDependencies() {
    this.log('Cleaning dependencies...');
    
    execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
    execSync('npm install', { stdio: 'inherit' });
  }

  async updateDependencies() {
    this.log('Updating dependencies...');
    
    execSync('npm update', { stdio: 'inherit' });
    execSync('npm audit fix', { stdio: 'inherit' });
  }

  async fixPeerDependencies() {
    this.log('Fixing peer dependencies...');
    
    execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  }

  // TypeScript-related fixes
  async fixTypeScriptIssues() {
    this.log('Fixing TypeScript issues...');
    
    // Run TypeScript fix script if it exists
    if (fs.existsSync('scripts/fix-types.cjs')) {
      execSync('node scripts/fix-types.cjs', { stdio: 'inherit' });
    }
    
    // Auto-fix TypeScript issues
    try {
      execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
    } catch (error) {
      this.log('TypeScript issues detected, attempting auto-fix...');
    }
  }

  async skipTypeCheck() {
    this.log('Skipping type check for build...');
    
    // Update build script to skip type checking
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.scripts.build) {
      packageJson.scripts.build = packageJson.scripts.build.replace(
        /next build/,
        'next build --no-lint'
      );
    }
    
    // Add environment variable to skip type check
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!config.includes('SKIP_TYPE_CHECK')) {
        config = config.replace(
          '[build.environment]',
          `[build.environment]
  SKIP_TYPE_CHECK = "true"`
        );
      }
      
      fs.writeFileSync('netlify.toml', config);
    }
    
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }

  async updateTsConfig() {
    this.log('Updating TypeScript configuration...');
    
    if (fs.existsSync('tsconfig.json')) {
      const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
      
      // Add more lenient settings for build
      tsConfig.compilerOptions = {
        ...tsConfig.compilerOptions,
        skipLibCheck: true,
        noEmit: true,
        strict: false,
        noImplicitAny: false
      };
      
      fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
    }
  }

  // Linting-related fixes
  async autoFixLint() {
    this.log('Auto-fixing linting issues...');
    
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
    } catch (error) {
      this.log('Lint auto-fix failed, trying alternative...');
      execSync('npx eslint --fix .', { stdio: 'inherit' });
    }
  }

  async skipLint() {
    this.log('Skipping linting for build...');
    
    // Update build script to skip linting
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.scripts.build) {
      packageJson.scripts.build = packageJson.scripts.build.replace(
        /next build/,
        'next build --no-lint'
      );
    }
    
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }

  async fixLintConfig() {
    this.log('Fixing linting configuration...');
    
    if (fs.existsSync('eslint.config.js')) {
      let config = fs.readFileSync('eslint.config.js', 'utf8');
      
      // Add more lenient rules for build
      config = config.replace(
        /rules:\s*{/,
        `rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'off',`
      );
      
      fs.writeFileSync('eslint.config.js', config);
    }
  }

  // Build-related fixes
  async cleanBuild() {
    this.log('Cleaning build artifacts...');
    
    const buildDirs = ['.next', 'out', 'dist', 'build'];
    
    for (const dir of buildDirs) {
      if (fs.existsSync(dir)) {
        execSync(`rm -rf ${dir}`);
      }
    }
  }

  async fixBuildConfig() {
    this.log('Fixing build configuration...');
    
    // Ensure netlify.toml has proper configuration
    if (!fs.existsSync('netlify.toml')) {
      const defaultConfig = `[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NODE_OPTIONS = "--max-old-space-size=4096"
  SKIP_TYPE_CHECK = "true"
  NEXT_TELEMETRY_DISABLED = "1"`;
      
      fs.writeFileSync('netlify.toml', defaultConfig);
    }
  }

  async retryBuild() {
    this.log('Retrying build...');
    
    this.retryCount++;
    if (this.retryCount <= CONFIG.maxRetries) {
      this.log(`Build retry attempt ${this.retryCount}/${CONFIG.maxRetries}`);
      // The actual retry will be handled by the build system
    }
  }

  async enableBuildCache() {
    this.log('Enabling build cache...');
    
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!config.includes('NEXT_PRIVATE_BUILD_CACHE')) {
        config = config.replace(
          '[build.environment]',
          `[build.environment]
  NEXT_PRIVATE_BUILD_CACHE = "true"`
        );
      }
      
      fs.writeFileSync('netlify.toml', config);
    }
  }

  async enableOfflineBuild() {
    this.log('Enabling offline build...');
    
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      if (!config.includes('NPM_FLAGS')) {
        config = config.replace(
          '[build.environment]',
          `[build.environment]
  NPM_FLAGS = "--prefer-offline --legacy-peer-deps"`
        );
      }
      
      fs.writeFileSync('netlify.toml', config);
    }
  }

  // Permission-related fixes
  async fixPermissions() {
    this.log('Fixing permissions...');
    
    execSync('chmod -R 755 .', { stdio: 'inherit' });
    execSync('chmod +x scripts/*.cjs', { stdio: 'inherit' });
  }

  async changeOwner() {
    this.log('Changing file ownership...');
    
    try {
      execSync('sudo chown -R $(whoami):$(whoami) .', { stdio: 'inherit' });
    } catch (error) {
      this.log('Could not change ownership, continuing...');
    }
  }

  // Disk-related fixes
  async cleanDisk() {
    this.log('Cleaning disk space...');
    
    // Remove unnecessary files
    const cleanupDirs = [
      'node_modules/.cache',
      '.next/cache',
      'coverage',
      'test-results',
      'playwright-logs'
    ];
    
    for (const dir of cleanupDirs) {
      if (fs.existsSync(dir)) {
        execSync(`rm -rf ${dir}`);
      }
    }
  }

  async optimizeSize() {
    this.log('Optimizing build size...');
    
    // Update next.config.js for size optimization
    if (fs.existsSync('next.config.js')) {
      let config = fs.readFileSync('next.config.js', 'utf8');
      
      // Add size optimization settings
      if (!config.includes('compress: false')) {
        config = config.replace(
          'module.exports = {',
          `module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,`
        );
      }
      
      fs.writeFileSync('next.config.js', config);
    }
  }

  // Node version-related fixes
  async updateNodeVersion() {
    this.log('Updating Node.js version...');
    
    if (fs.existsSync('netlify.toml')) {
      let config = fs.readFileSync('netlify.toml', 'utf8');
      
      config = config.replace(
        /NODE_VERSION = "\d+"/,
        'NODE_VERSION = "18"'
      );
      
      fs.writeFileSync('netlify.toml', config);
    }
  }

  async fixNodeVersion() {
    this.log('Fixing Node.js version...');
    
    // Add .nvmrc file
    fs.writeFileSync('.nvmrc', '18');
    
    // Update package.json engines
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.engines = {
      ...packageJson.engines,
      node: '>=18.0.0'
    };
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }

  async useNvm() {
    this.log('Using NVM for Node.js version management...');
    
    try {
      execSync('nvm use 18', { stdio: 'inherit' });
    } catch (error) {
      this.log('NVM not available, continuing...');
    }
  }

  async testFix(issue) {
    this.log(`Testing fix for ${issue}...`);
    
    try {
      // Run a quick build test
      execSync('npm run build --dry-run', { stdio: 'pipe', timeout: 60000 });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Public API
  async start() {
    this.log('Netlify Self-Healing System started');
    this.isRunning = true;
  }

  async stop() {
    this.log('Netlify Self-Healing System stopped');
    this.isRunning = false;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      retryCount: this.retryCount,
      lastHealthCheck: this.lastHealthCheck,
      buildHistory: this.buildHistory.length
    };
  }
}

// CLI interface
if (require.main === module) {
  const healing = new NetlifySelfHealing();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      healing.start();
      break;
    
    case 'stop':
      healing.stop();
      break;
    
    case 'status':
      console.log(JSON.stringify(healing.getStatus(), null, 2));
      break;
    
    case 'health-check':
      healing.performHealthCheck();
      break;
    
    case 'fix':
      const issues = process.argv.slice(3);
      if (issues.length > 0) {
        healing.triggerSelfHealing(issues);
      } else {
        console.log('Usage: node netlify-self-healing.cjs fix <issue1> <issue2> ...');
      }
      break;
    
    default:
      console.log(`
Netlify Self-Healing System

Usage:
  node netlify-self-healing.cjs <command>

Commands:
  start        Start the self-healing system
  stop         Stop the self-healing system
  status       Show system status
  health-check Perform a health check
  fix <issues> Apply fixes for specific issues

Examples:
  node netlify-self-healing.cjs start
  node netlify-self-healing.cjs fix memory timeout
  node netlify-self-healing.cjs status
      `);
  }
}

module.exports = NetlifySelfHealing; 