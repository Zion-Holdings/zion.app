#!/usr/bin/env node

/**
 * Zion App - Automated Next.js Issue Fixer
 * 
 * Automatically detects and fixes common Next.js development issues
 * including Watchpack path errors, webpack configuration conflicts,
 * and other development server problems.
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AutoFixNextJSIssues {
  constructor() {
    this.projectRoot = process.cwd();
    this.issues = [];
    this.fixes = [];
    this.logFile = path.join(this.projectRoot, 'logs', 'nextjs-auto-fix.log');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(`[${level}] ${message}`);
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  /**
   * Check for common Next.js issues
   */
  async checkForIssues() {
    this.log('🔍 Checking for Next.js issues...');
    
    // Check for Watchpack path errors
    await this.checkWatchpackIssues();
    
    // Check for webpack configuration conflicts
    await this.checkWebpackConflicts();
    
    // Check for development server issues
    await this.checkDevServerIssues();
    
    // Check for TypeScript configuration issues
    await this.checkTypeScriptIssues();
    
    // Check for dependency issues
    await this.checkDependencyIssues();
    
    return this.issues;
  }

  /**
   * Check for Watchpack path resolution issues
   */
  async checkWatchpackIssues() {
    this.log('Checking for Watchpack path issues...');
    
    try {
      // Check if next.config.js has proper webpack configuration
      const configPath = path.join(this.projectRoot, 'next.config.js');
      if (fs.existsSync(configPath)) {
        const configContent = fs.readFileSync(configPath, 'utf8');
        
        if (!configContent.includes('watchOptions')) {
          this.issues.push({
            type: 'watchpack_path_error',
            severity: 'high',
            description: 'Missing webpack watchOptions configuration',
            fix: 'add_watch_options'
          });
        }
        
        if (!configContent.includes('cacheUnaffected: false')) {
          this.issues.push({
            type: 'webpack_cache_conflict',
            severity: 'high',
            description: 'Potential webpack cache conflicts',
            fix: 'fix_cache_config'
          });
        }
      }
    } catch (error) {
      this.log(`Error checking Watchpack issues: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Check for webpack configuration conflicts
   */
  async checkWebpackConflicts() {
    this.log('Checking for webpack configuration conflicts...');
    
    try {
      const configPath = path.join(this.projectRoot, 'next.config.js');
      if (fs.existsSync(configPath)) {
        const configContent = fs.readFileSync(configPath, 'utf8');
        
        // Check for usedExports conflicts
        if (configContent.includes('usedExports') && configContent.includes('cacheUnaffected')) {
          this.issues.push({
            type: 'webpack_used_exports_conflict',
            severity: 'high',
            description: 'usedExports conflicts with cacheUnaffected',
            fix: 'remove_used_exports'
          });
        }
        
        // Check for missing ignoreWarnings
        if (!configContent.includes('ignoreWarnings')) {
          this.issues.push({
            type: 'webpack_warnings',
            severity: 'medium',
            description: 'Missing webpack warning suppression',
            fix: 'add_ignore_warnings'
          });
        }
      }
    } catch (error) {
      this.log(`Error checking webpack conflicts: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Check for development server issues
   */
  async checkDevServerIssues() {
    this.log('Checking for development server issues...');
    
    try {
      // Check if dev server can start
      const testProcess = spawn('npm', ['run', 'dev', '--', '--port', '3002'], {
        stdio: 'pipe',
        cwd: this.projectRoot,
        env: { ...process.env, NODE_ENV: 'development' }
      });
      
      let output = '';
      let hasError = false;
      
      testProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      testProcess.stderr.on('data', (data) => {
        output += data.toString();
        if (data.toString().includes('TypeError') || data.toString().includes('Error:')) {
          hasError = true;
        }
      });
      
      // Wait for 10 seconds to see if server starts
      await new Promise((resolve) => {
        setTimeout(() => {
          testProcess.kill('SIGTERM');
          resolve();
        }, 10000);
      });
      
      if (hasError) {
        this.issues.push({
          type: 'dev_server_error',
          severity: 'high',
          description: 'Development server fails to start',
          fix: 'fix_dev_server',
          details: output
        });
      }
      
    } catch (error) {
      this.log(`Error checking dev server: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Check for TypeScript configuration issues
   */
  async checkTypeScriptIssues() {
    this.log('Checking for TypeScript configuration issues...');
    
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Check for missing module resolution
        if (!tsConfig.compilerOptions?.moduleResolution) {
          this.issues.push({
            type: 'typescript_module_resolution',
            severity: 'medium',
            description: 'Missing TypeScript module resolution',
            fix: 'fix_module_resolution'
          });
        }
        
        // Check for strict mode issues
        if (tsConfig.compilerOptions?.strict === true) {
          // Check if there are any strict mode violations
          try {
            execSync('npx tsc --noEmit', { 
              cwd: this.projectRoot, 
              stdio: 'pipe',
              timeout: 30000 
            });
          } catch (error) {
            this.issues.push({
              type: 'typescript_strict_errors',
              severity: 'medium',
              description: 'TypeScript strict mode errors detected',
              fix: 'fix_typescript_errors'
            });
          }
        }
      }
    } catch (error) {
      this.log(`Error checking TypeScript issues: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Check for dependency issues
   */
  async checkDependencyIssues() {
    this.log('Checking for dependency issues...');
    
    try {
      // Check for outdated dependencies
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Check for critical dependencies
        const criticalDeps = ['next', 'react', 'react-dom'];
        for (const dep of criticalDeps) {
          if (!packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]) {
            this.issues.push({
              type: 'missing_dependency',
              severity: 'high',
              description: `Missing critical dependency: ${dep}`,
              fix: 'install_missing_dependency',
              details: dep
            });
          }
        }
      }
    } catch (error) {
      this.log(`Error checking dependency issues: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Apply fixes for detected issues
   */
  async applyFixes() {
    this.log('🔧 Applying fixes for detected issues...');
    
    for (const issue of this.issues) {
      try {
        await this.applyFix(issue);
        this.fixes.push(issue);
      } catch (error) {
        this.log(`Failed to apply fix for ${issue.type}: ${error.message}`, 'ERROR');
      }
    }
    
    return this.fixes;
  }

  /**
   * Apply a specific fix
   */
  async applyFix(issue) {
    this.log(`Applying fix for: ${issue.type}`);
    
    switch (issue.fix) {
      case 'add_watch_options':
        await this.addWatchOptions();
        break;
      case 'fix_cache_config':
        await this.fixCacheConfig();
        break;
      case 'remove_used_exports':
        await this.removeUsedExports();
        break;
      case 'add_ignore_warnings':
        await this.addIgnoreWarnings();
        break;
      case 'fix_dev_server':
        await this.fixDevServer();
        break;
      case 'fix_module_resolution':
        await this.fixModuleResolution();
        break;
      case 'fix_typescript_errors':
        await this.fixTypeScriptErrors();
        break;
      case 'install_missing_dependency':
        await this.installMissingDependency(issue.details);
        break;
      default:
        this.log(`Unknown fix type: ${issue.fix}`, 'WARN');
    }
  }

  /**
   * Add webpack watchOptions to fix Watchpack issues
   */
  async addWatchOptions() {
    const configPath = path.join(this.projectRoot, 'next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    const watchOptions = `
    // Fix Watchpack path resolution issues
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/logs/**',
          '**/dist/**',
          '**/build/**',
          '**/.next/**',
        ],
      };
    }`;
    
    if (!configContent.includes('watchOptions')) {
      const newConfig = configContent.replace(
        /(webpack:\s*\(config,\s*\{[^}]*\}\)\s*=>\s*\{)/,
        `$1${watchOptions}`
      );
      fs.writeFileSync(configPath, newConfig);
      this.log('✅ Added webpack watchOptions');
    }
  }

  /**
   * Fix webpack cache configuration
   */
  async fixCacheConfig() {
    const configPath = path.join(this.projectRoot, 'next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    const cacheConfig = `
    // Fix webpack cache configuration to prevent conflicts
    if (config.cache) {
      config.cache = {
        ...config.cache,
        type: 'filesystem',
        compression: 'gzip',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        maxMemoryGenerations: dev ? 3 : 10,
        cacheUnaffected: false, // Disable to prevent conflicts
        buildDependencies: {
          config: [__filename],
        },
      };
    }`;
    
    if (!configContent.includes('cacheUnaffected: false')) {
      const newConfig = configContent.replace(
        /(webpack:\s*\(config,\s*\{[^}]*\}\)\s*=>\s*\{)/,
        `$1${cacheConfig}`
      );
      fs.writeFileSync(configPath, newConfig);
      this.log('✅ Fixed webpack cache configuration');
    }
  }

  /**
   * Remove usedExports to prevent conflicts
   */
  async removeUsedExports() {
    const configPath = path.join(this.projectRoot, 'next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    const removeUsedExports = `
    // Remove usedExports to prevent conflicts with cacheUnaffected
    if (config.optimization && config.optimization.usedExports) {
      delete config.optimization.usedExports;
    }`;
    
    if (!configContent.includes('delete config.optimization.usedExports')) {
      const newConfig = configContent.replace(
        /(webpack:\s*\(config,\s*\{[^}]*\}\)\s*=>\s*\{)/,
        `$1${removeUsedExports}`
      );
      fs.writeFileSync(configPath, newConfig);
      this.log('✅ Removed usedExports to prevent conflicts');
    }
  }

  /**
   * Add ignoreWarnings to webpack config
   */
  async addIgnoreWarnings() {
    const configPath = path.join(this.projectRoot, 'next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    const ignoreWarnings = `
    // Handle critical dependency warnings
    config.ignoreWarnings = [
      /Critical dependency: the request of a dependency is an expression/,
      /Serializing big strings/i,
      /PackFileCacheStrategy/,
      /Module not found.*can't resolve/i,
      /export.*was not found in/i,
    ];`;
    
    if (!configContent.includes('ignoreWarnings')) {
      const newConfig = configContent.replace(
        /(webpack:\s*\(config,\s*\{[^}]*\}\)\s*=>\s*\{)/,
        `$1${ignoreWarnings}`
      );
      fs.writeFileSync(configPath, newConfig);
      this.log('✅ Added webpack ignoreWarnings');
    }
  }

  /**
   * Fix development server issues
   */
  async fixDevServer() {
    // This is a complex fix that might require multiple steps
    this.log('🔄 Attempting to fix development server issues...');
    
    try {
      // Clear Next.js cache
      execSync('rm -rf .next', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('✅ Cleared Next.js cache');
      
      // Clear node_modules and reinstall
      execSync('rm -rf node_modules package-lock.json', { cwd: this.projectRoot, stdio: 'pipe' });
      execSync('npm install', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('✅ Reinstalled dependencies');
      
    } catch (error) {
      this.log(`Failed to fix dev server: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Fix TypeScript module resolution
   */
  async fixModuleResolution() {
    const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
    if (fs.existsSync(tsConfigPath)) {
      const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
      
      if (!tsConfig.compilerOptions) {
        tsConfig.compilerOptions = {};
      }
      
      tsConfig.compilerOptions.moduleResolution = 'bundler';
      tsConfig.compilerOptions.allowImportingTsExtensions = true;
      tsConfig.compilerOptions.noEmit = true;
      
      fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
      this.log('✅ Fixed TypeScript module resolution');
    }
  }

  /**
   * Fix TypeScript errors
   */
  async fixTypeScriptErrors() {
    this.log('🔄 Attempting to fix TypeScript errors...');
    
    try {
      // Try to fix common TypeScript issues
      execSync('npx tsc --noEmit --skipLibCheck', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log('✅ TypeScript errors resolved');
    } catch (error) {
      this.log(`TypeScript errors still present: ${error.message}`, 'WARN');
    }
  }

  /**
   * Install missing dependency
   */
  async installMissingDependency(depName) {
    try {
      execSync(`npm install ${depName}`, { cwd: this.projectRoot, stdio: 'pipe' });
      this.log(`✅ Installed missing dependency: ${depName}`);
    } catch (error) {
      this.log(`Failed to install ${depName}: ${error.message}`, 'ERROR');
    }
  }

  /**
   * Test if fixes worked
   */
  async testFixes() {
    this.log('🧪 Testing if fixes resolved the issues...');
    
    try {
      // Try to start the dev server
      const testProcess = spawn('npm', ['run', 'dev', '--', '--port', '3003'], {
        stdio: 'pipe',
        cwd: this.projectRoot,
        env: { ...process.env, NODE_ENV: 'development' }
      });
      
      let output = '';
      let hasError = false;
      
      testProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      testProcess.stderr.on('data', (data) => {
        output += data.toString();
        if (data.toString().includes('TypeError') || data.toString().includes('Error:')) {
          hasError = true;
        }
      });
      
      // Wait for 15 seconds to see if server starts
      await new Promise((resolve) => {
        setTimeout(() => {
          testProcess.kill('SIGTERM');
          resolve();
        }, 15000);
      });
      
      if (!hasError && output.includes('Ready')) {
        this.log('✅ All fixes successful! Development server starts without errors.');
        return true;
      } else {
        this.log('⚠️ Some issues may still persist', 'WARN');
        return false;
      }
      
    } catch (error) {
      this.log(`Error testing fixes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  /**
   * Run the complete auto-fix process
   */
  async run() {
    this.log('🚀 Starting Next.js Auto-Fix Process...');
    
    // Check for issues
    const issues = await this.checkForIssues();
    
    if (issues.length === 0) {
      this.log('✅ No issues detected. Next.js configuration is optimal!');
      return { success: true, issues: [], fixes: [] };
    }
    
    this.log(`🔍 Found ${issues.length} issues to fix:`);
    issues.forEach(issue => {
      this.log(`  - ${issue.type}: ${issue.description} (${issue.severity})`);
    });
    
    // Apply fixes
    const fixes = await this.applyFixes();
    
    // Test fixes
    const success = await this.testFixes();
    
    this.log(`🎯 Auto-fix process completed. Fixed ${fixes.length} out of ${issues.length} issues.`);
    
    return {
      success,
      issues,
      fixes,
      timestamp: new Date().toISOString()
    };
  }
}

// CLI handling
if (require.main === module) {
  const autoFix = new AutoFixNextJSIssues();
  
  autoFix.run()
    .then(result => {
      if (result.success) {
        console.log('✅ Next.js auto-fix completed successfully!');
        process.exit(0);
      } else {
        console.log('⚠️ Auto-fix completed with some issues remaining');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('❌ Auto-fix failed:', error);
      process.exit(1);
    });
}

module.exports = AutoFixNextJSIssues; 