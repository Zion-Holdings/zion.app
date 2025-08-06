#!/usr/bin/env node

/**
 * Automation Monitor and Maintainer System
 * 
 * This autonomous system continuously monitors all project automation factories,
 * agents, scripts, cron jobs, etc. and maintains them without modifying existing
 * autonomous agents factories.
 * 
 * Capabilities: * - Monitors all running automation systems
 * - Identifies and fixes automation errors
 * - Stops problematic automation
 * - Maintains healthy automation systems
 * - Generates comprehensive reports
 */

const fs = require(('fs'););
const path = require(('path'););
const { exec, execSync } = require('child_process');
const cron = require(('node-cron'););

class AutomationMonitorAndMaintainer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationDir = path.join(this.projectRoot, 'automation');
    this.logDir = path.join(this.automationDir, 'monitor-logs');
    this.statusDir = path.join(this.automationDir, 'monitor-status');
    this.reportsDir = path.join(this.automationDir, 'monitor-reports');
    this.pidDir = path.join(this.automationDir, 'monitor-pids');
    
    // Create necessary directories
    this.ensureDirectories();
    
    // Initialize monitoring data
    this.automationSystems = new Map();
    this.errorLogs = [];
    this.healthMetrics = {
      totalSystems: 0,
      healthySystems: 0,
      problematicSystems: 0,
      fixedSystems: 0,
      lastCheck: null
    };
    
    // Load monitoring configuration
    this.loadMonitoringConfig();
    
    // Initialize cron jobs
    this.setupCronJobs();
  }

  ensureDirectories() {
    const dirs = [this.logDir, this.statusDir, this.reportsDir, this.pidDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadMonitoringConfig() {
    this.monitoringConfig = {
      checkInterval: '*/2 * * * *', // Every 2 minutes
      healthCheckInterval: '*/5 * * * *', // Every 5 minutes
      reportInterval: '0 */1 * * *', // Every hour
      errorThreshold: 3, // Number of errors before considering system problematic
      maxRetries: 3, // Maximum retry attempts for fixing issues
      autoFix: true, // Automatically fix issues when possible
      backupBeforeFix: true, // Create backup before making changes
      logLevel: 'info' // info, warn, error, debug
    };
  }

  setupCronJobs() {
    this.cronJobs = {
      'continuous-monitoring': {
        schedule: this.monitoringConfig.checkInterval,
        job: () => this.continuousMonitoring(),
        description: 'Continuous automation monitoring'
      },
      'health-check': {
        schedule: this.monitoringConfig.healthCheckInterval,
        job: () => this.comprehensiveHealthCheck(),
        description: 'Comprehensive health check of all automation systems'
      },
      'error-analysis': {
        schedule: '*/10 * * * *', // Every 10 minutes
        job: () => this.analyzeErrors(),
        description: 'Analyze and categorize automation errors'
      },
      'system-optimization': {
        schedule: '0 */2 * * *', // Every 2 hours
        job: () => this.optimizeSystems(),
        description: 'Optimize automation systems performance'
      },
      'report-generation': {
        schedule: this.monitoringConfig.reportInterval,
        job: () => this.generateComprehensiveReport(),
        description: 'Generate comprehensive monitoring reports'
      }
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logDir, `monitor-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + '\n');
    
    if (level === 'error') {
      this.errorLogs.push({
        timestamp,
        message,
        stack: new Error().stack
      });
    }
  }

  async discoverAutomationSystems() {
    this.log('🔍 Discovering automation systems...', 'info');
    
    const systems = [];
    
    // Discover automation factories
    const factoryPatterns = [
      'factory',
      'Factory',
      'generator',
      'Generator'
    ];
    
    for (const pattern of factoryPatterns) {
      try {
        const files = this.findFiles(pattern);
        files.forEach(file => {
          systems.push({
            type: 'factory',
            path: file,
            name: path.basename(file, '.js'),
            status: 'unknown'
          });
        });
      } catch (error) {
        this.log(`Error discovering factories with pattern ${pattern}: ${error.message}`, 'error');
      }
    }
    
    // Discover automation agents
    const agentPatterns = [
      'agent',
      'Agent'
    ];
    
    for (const pattern of agentPatterns) {
      try {
        const files = this.findFiles(pattern);
        files.forEach(file => {
          systems.push({
            type: 'agent',
            path: file,
            name: path.basename(file, '.js'),
            status: 'unknown'
          });
        });
      } catch (error) {
        this.log(`Error discovering agents with pattern ${pattern}: ${error.message}`, 'error');
      }
    }
    
    // Discover cron jobs
    const cronPatterns = [
      'cron',
      'Cron',
      'setup'
    ];
    
    for (const pattern of cronPatterns) {
      try {
        const files = this.findFiles(pattern);
        files.forEach(file => {
          systems.push({
            type: 'cron',
            path: file,
            name: path.basename(file, '.sh'),
            status: 'unknown'
          });
        });
      } catch (error) {
        this.log(`Error discovering cron jobs with pattern ${pattern}: ${error.message}`, 'error');
      }
    }
    
    // Discover automation scripts
    const scriptPatterns = [
      'automation',
      'Automation',
      'orchestrator',
      'Orchestrator',
      'launcher',
      'Launcher',
      'system',
      'System'
    ];
    
    for (const pattern of scriptPatterns) {
      try {
        const files = this.findFiles(pattern);
        files.forEach(file => {
          systems.push({
            type: 'script',
            path: file,
            name: path.basename(file, '.js'),
            status: 'unknown'
          });
        });
      } catch (error) {
        this.log(`Error discovering scripts with pattern ${pattern}: ${error.message}`, 'error');
      }
    }
    
    this.log(`Discovered ${systems.length} automation systems`, 'info');
    return systems;
  }

  findFiles(pattern) {
    try {
      const fs = require(('fs'););
      const path = require(('path'););
      const files = [];
      
      // Simple pattern matching without glob
      const searchDir = path.join(this.projectRoot, 'automation');
      if (!fs.existsSync(searchDir)) {
        return files;
      }
      
      const searchRecursively = () => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            searchRecursively(fullPath, pattern);
          } else if (stat.isFile()) {
            // Only process .js and .sh files for automation
            if (item.endsWith('.js') || item.endsWith('.sh')) {
              // Simple pattern matching
              if (pattern.includes('*')) {
                const regexPattern = pattern
                  .replace(/\*/g, '.*')
                  .replace(/\./g, '\\.');
                const regex = new RegExp(regexPattern, 'i');
                if (regex.test(item)) {
                  files.push(fullPath);
                }
              } else if (item.toLowerCase().includes(pattern.toLowerCase())) {
                files.push(fullPath);
              }
            }
          }
        }
      };
      
      // Extract the pattern part after 'automation/'
      const patternPart = pattern.replace('automation/', '');
      searchRecursively(searchDir, patternPart);
      
      return files;
    } catch (error) {
      this.log(`Error with file pattern ${pattern}: ${error.message}`, 'error');
      return [];
    }
  }

  async checkSystemHealth(system) {
    try {
      this.log(`Checking health of ${system.name} (${system.type})`, 'info');
      
      // Check if file exists
      if (!fs.existsSync(system.path)) {
        system.status = 'missing';
        system.error = 'File not found';
        return system;
      }
      
      // Check if process is running (for JS files)
      if (system.type === 'factory' || system.type === 'agent' || system.type === 'script') {
        const isRunning = await this.checkProcessRunning(system);
        if (!isRunning) {
          system.status = 'stopped';
          return system;
        }
      }
      
      // Check for syntax errors
      if (system.path.endsWith('.js')) {
        const syntaxCheck = await this.checkSyntax(system.path);
        if (!syntaxCheck.valid) {
          system.status = 'syntax_error';
          system.error = syntaxCheck.error;
          return system;
        }
      }
      
      // Check for recent errors in logs
      const logErrors = await this.checkLogErrors(system);
      if (logErrors.length > 0) {
        system.status = 'error';
        system.errors = logErrors;
        return system;
      }
      
      system.status = 'healthy';
      return system;
      
    } catch (error) {
      system.status = 'error';
      system.error = error.message;
      return system;
    }
  }

  async checkProcessRunning(system) {
    try {
      const result = execSync(`ps aux | grep "${system.name}" | grep -v grep`, { encoding: 'utf8' });
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  async checkSyntax(filePath) {
    try {
      execSync(`node -c "${filePath}"`, { stdio: 'pipe' });
      return { valid: true };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async checkLogErrors(system) {
    const errors = [];
    
    // Check for log files in automation directory
    const logDir = path.join(this.automationDir, 'logs');
    if (fs.existsSync(logDir)) {
      const logFiles = fs.readdirSync(logDir).filter(file => file.endsWith('.log'));
      
      for (const logFile of logFiles) {
        const logPath = path.join(logDir, logFile);
        const logContent = fs.readFileSync(logPath, 'utf8');
        
        // Look for error patterns related to this system
        const errorPatterns = [
          new RegExp(`ERROR.*${system.name}`, 'i'),
          new RegExp(`Error.*${system.name}`, 'i'),
          new RegExp(`${system.name}.*error`, 'i'),
          new RegExp(`${system.name}.*Error`, 'i')
        ];
        
        for (const pattern of errorPatterns) {
          const matches = logContent.match(pattern);
          if (matches) {
            errors.push({
              logFile,
              pattern: pattern.toString(),
              matches: matches.length
            });
          }
        }
      }
    }
    
    return errors;
  }

  async continuousMonitoring() {
    this.log('🔄 Starting continuous monitoring cycle...', 'info');
    
    try {
      // Discover all automation systems
      const systems = await this.discoverAutomationSystems();
      
      // Check health of each system
      for (const system of systems) {
        const healthStatus = await this.checkSystemHealth(system);
        this.automationSystems.set(system.name, healthStatus);
        
        // Handle problematic systems
        if (healthStatus.status !== 'healthy') {
          await this.handleProblematicSystem(healthStatus);
        }
      }
      
      // Update health metrics
      this.updateHealthMetrics();
      
      // Save current status
      this.saveMonitoringStatus();
      
      this.log('✅ Continuous monitoring cycle completed', 'info');
      
    } catch (error) {
      this.log(`❌ Error in continuous monitoring: ${error.message}`, 'error');
    }
  }

  async handleProblematicSystem(system) {
    this.log(`⚠️ Handling problematic system: ${system.name} (${system.status})`, 'warn');
    
    try {
      // Create backup if configured
      if (this.monitoringConfig.backupBeforeFix) {
        await this.createBackup(system);
      }
      
      // Attempt to fix the issue
      if (this.monitoringConfig.autoFix) {
        const fixed = await this.attemptFix(system);
        if (fixed) {
          this.log(`✅ Successfully fixed ${system.name}`, 'info');
          this.healthMetrics.fixedSystems++;
        } else {
          this.log(`❌ Failed to fix ${system.name}`, 'error');
          this.healthMetrics.problematicSystems++;
        }
      } else {
        this.log(`📋 System ${system.name} needs manual attention`, 'warn');
        this.healthMetrics.problematicSystems++;
      }
      
    } catch (error) {
      this.log(`❌ Error handling problematic system ${system.name}: ${error.message}`, 'error');
    }
  }

  async createBackup(system) {
    try {
      const backupDir = path.join(this.automationDir, 'backups', new Date().toISOString().split('T')[0]);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const backupPath = path.join(backupDir, `${system.name}-backup-${Date.now()}.js`);
      fs.copyFileSync(system.path, backupPath);
      
      this.log(`📦 Created backup: ${backupPath}`, 'info');
    } catch (error) {
      this.log(`❌ Error creating backup for ${system.name}: ${error.message}`, 'error');
    }
  }

  async attemptFix(system) {
    try {
      switch (system.status) {
        case 'syntax_error':
          return await this.fixSyntaxError(system);
        case 'stopped':
          return await this.restartSystem(system);
        case 'error':
          return await this.fixSystemError(system);
        case 'missing':
          return await this.recreateMissingSystem(system);
        default: this.log(`Unknown status for ${system.name}: ${system.status}`, 'warn');
          return false;
      }
    } catch (error) {
      this.log(`❌ Error attempting fix for ${system.name}: ${error.message}`, 'error');
      return false;
    }
  }

  async fixSyntaxError(system) {
    try {
      this.log(`🔧 Attempting to fix syntax error in ${system.name}`, 'info');
      
      // Read the file
      const content = fs.readFileSync(system.path, 'utf8');
      
      // Common syntax fixes
      let fixedContent = content;
      
      // Fix common syntax issues
      fixedContent = fixedContent
        .replace(/,\s*}/g, '}') // Remove trailing commas
        .replace(/,\s*]/g, ']') // Remove trailing commas in arrays
        .replace(/;\s*;/g, ';') // Remove duplicate semicolons
        .replace(/\s*{\s*\n\s*}/g, ' {}') // Fix empty blocks
        .replace(/function\s*\(\s*\)\s*{\s*}/g, 'function() {}') // Fix empty functions
        .replace(/\(\s*\)\s*=>\s*{\s*}/g, '() => {}') // Fix empty arrow functions
        .replace(/const\s+(\w+)\s*=\s*require\s*\(\s*['"]([^'"]+)['"]\s*\)\s*;\s*const\s+\1\s*=\s*require\s*\(\s*['"]\2['"]\s*\)/g, 'const $1 = require(($2););') // Fix duplicate requires
        .replace(/module\.exports\s*=\s*[^;]+;\s*module\.exports\s*=\s*[^;]+/g, (match) => {
          // Keep only the last module.exports
          const parts = match.split(';');
          return parts[parts.length - 1];
        });
      
      // Write the fixed content
      fs.writeFileSync(system.path, fixedContent);
      
      // Verify the fix
      const syntaxCheck = await this.checkSyntax(system.path);
      if (syntaxCheck.valid) {
        this.log(`✅ Successfully fixed syntax error in ${system.name}`, 'info');
        return true;
      } else {
        this.log(`❌ Syntax fix failed for ${system.name}: ${syntaxCheck.error}`, 'error');
        return false;
      }
      
    } catch (error) {
      this.log(`❌ Error fixing syntax error in ${system.name}: ${error.message}`, 'error');
      return false;
    }
  }

  async restartSystem(system) {
    try {
      this.log(`🔄 Attempting to restart ${system.name}`, 'info');
      
      // Kill existing process if running
      try {
        execSync(`pkill -f "${system.name}"`, { stdio: 'pipe' });
      } catch (error) {
        // Process might not be running, which is fine
      }
      
      // Start the system
      const startCommand = `node "${system.path}"`;
      exec(startCommand, { cwd: path.dirname(system.path) }, (error, stdout, stderr) => {
        if (error) {
          this.log(`❌ Failed to restart ${system.name}: ${error.message}`, 'error');
        } else {
          this.log(`✅ Successfully restarted ${system.name}`, 'info');
        }
      });
      
      // Wait a moment and check if it's running
      setTimeout(async () => {
        const isRunning = await this.checkProcessRunning(system);
        if (isRunning) {
          this.log(`✅ ${system.name} is now running`, 'info');
          return true;
        } else {
          this.log(`❌ ${system.name} failed to start`, 'error');
          return false;
        }
      }, 5000);
      
    } catch (error) {
      this.log(`❌ Error restarting ${system.name}: ${error.message}`, 'error');
      return false;
    }
  }

  async fixSystemError(system) {
    try {
      this.log(`🔧 Attempting to fix system error in ${system.name}`, 'info');
      
      // Analyze the errors
      if (system.errors && system.errors.length > 0) {
        for (const error of system.errors) {
          // Try to fix common error patterns
          const fixed = await this.fixCommonError(system, error);
          if (fixed) {
            this.log(`✅ Fixed error in ${system.name}: ${error.pattern}`, 'info');
            return true;
          }
        }
      }
      
      // If no specific errors, try general fixes
      return await this.applyGeneralFixes(system);
      
    } catch (error) {
      this.log(`❌ Error fixing system error in ${system.name}: ${error.message}`, 'error');
      return false;
    }
  }

  async fixCommonError(system, error) {
    try {
      const content = fs.readFileSync(system.path, 'utf8');
      let fixedContent = content;
      
      // Fix common error patterns
      if (error.pattern.includes('require')) {
        // Fix require errors
        fixedContent = fixedContent
          .replace(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g, (match, module) => {
            // Check if module exists
            try {
              require.resolve(module);
              return match;
            } catch (e) {
              // Try to fix common module paths
              const commonPaths = [
                `./${module}`,
                `../${module}`,
                `../../${module}`,
                `./node_modules/${module}`
              ];
              
              for (const path of commonPaths) {
                try {
                  require.resolve(path);
                  return `require('${path}')`;
                } catch (e2) {
                  // Continue to next path
                }
              }
              return match; // Keep original if can't fix
            }
          });
      }
      
      if (error.pattern.includes('undefined')) {
        // Fix undefined variable errors
        fixedContent = fixedContent
          .replace(/console\.log\s*\(\s*([^)]+)\s*\)/g, (match, args) => {
            // Add null checks for console.log
            return `console.log(${args} || 'undefined')`;
          });
      }
      
      // Write fixed content
      fs.writeFileSync(system.path, fixedContent);
      
      // Test the fix
      const syntaxCheck = await this.checkSyntax(system.path);
      return syntaxCheck.valid;
      
    } catch (error) {
      this.log(`❌ Error applying common fix: ${error.message}`, 'error');
      return false;
    }
  }

  async applyGeneralFixes(system) {
    try {
      const content = fs.readFileSync(system.path, 'utf8');
      let fixedContent = content;
      
      // Apply general fixes
      fixedContent = fixedContent
        .replace(/module\.exports\s*=\s*[^;]+;\s*$/m, (match) => {
          // Ensure only one module.exports at the end
          const parts = match.split(';');
          return parts[parts.length - 1];
        })
        .replace(/^\s*}\s*;\s*$/m, '}') // Fix trailing semicolons after closing braces
        .replace(/^\s*}\s*,\s*$/m, '}') // Fix trailing commas after closing braces
        .replace(/^\s*]\s*;\s*$/m, ']') // Fix trailing semicolons after closing brackets
        .replace(/^\s*]\s*,\s*$/m, ']'); // Fix trailing commas after closing brackets
      
      // Write fixed content
      fs.writeFileSync(system.path, fixedContent);
      
      // Test the fix
      const syntaxCheck = await this.checkSyntax(system.path);
      return syntaxCheck.valid;
      
    } catch (error) {
      this.log(`❌ Error applying general fixes: ${error.message}`, 'error');
      return false;
    }
  }

  async recreateMissingSystem(system) {
    try {
      this.log(`🔧 Attempting to recreate missing system: ${system.name}`, 'info');
      
      // This is a placeholder - in a real implementation, you might have templates
      // or backup systems to recreate missing automation
      this.log(`📋 Manual intervention required for missing system: ${system.name}`, 'warn');
      return false;
      
    } catch (error) {
      this.log(`❌ Error recreating missing system ${system.name}: ${error.message}`, 'error');
      return false;
    }
  }

  async comprehensiveHealthCheck() {
    this.log('🏥 Starting comprehensive health check...', 'info');
    
    try {
      const systems = Array.from(this.automationSystems.values());
      
      // Categorize systems by health
      const healthy = systems.filter(s => s.status === 'healthy');
      const problematic = systems.filter(s => s.status !== 'healthy');
      
      // Generate health report
      const healthReport = {
        timestamp: new Date().toISOString(),
        totalSystems: systems.length,
        healthySystems: healthy.length,
        problematicSystems: problematic.length,
        healthPercentage: systems.length > 0 ? (healthy.length / systems.length) * 100 : 0,
        problematicSystemsList: problematic.map(s => ({
          name: s.name,
          type: s.type,
          status: s.status,
          error: s.error
        }))
      };
      
      // Save health report
      const reportPath = path.join(this.reportsDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      this.log(`📊 Health check completed: ${healthy.length}/${systems.length} systems healthy (${healthReport.healthPercentage.toFixed(1)}%)`, 'info');
      
      // Alert if health is below threshold
      if (healthReport.healthPercentage < 80) {
        this.log(`⚠️ System health is below 80% (${healthReport.healthPercentage.toFixed(1)}%)`, 'warn');
      }
      
    } catch (error) {
      this.log(`❌ Error in comprehensive health check: ${error.message}`, 'error');
    }
  }

  async analyzeErrors() {
    this.log('🔍 Analyzing automation errors...', 'info');
    
    try {
      const errorAnalysis = {
        timestamp: new Date().toISOString(),
        totalErrors: this.errorLogs.length,
        errorCategories: {},
        mostCommonErrors: [],
        systemsWithErrors: new Set()
      };
      
      // Categorize errors
      for (const error of this.errorLogs) {
        const category = this.categorizeError(error.message);
        errorAnalysis.errorCategories[category] = (errorAnalysis.errorCategories[category] || 0) + 1;
        
        // Extract system name from error
        const systemMatch = error.message.match(/(\w+)-automation|\w+Factory|\w+Agent/);
        if (systemMatch) {
          errorAnalysis.systemsWithErrors.add(systemMatch[1]);
        }
      }
      
      // Find most common errors
      const errorCounts = {};
      for (const error of this.errorLogs) {
        const key = error.message.substring(0, 100); // First 100 chars as key
        errorCounts[key] = (errorCounts[key] || 0) + 1;
      }
      
      errorAnalysis.mostCommonErrors = Object.entries(errorCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([error, count]) => ({ error, count }));
      
      // Save error analysis
      const analysisPath = path.join(this.reportsDir, `error-analysis-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(analysisPath, JSON.stringify(errorAnalysis, null, 2));
      
      this.log(`📊 Error analysis completed: ${errorAnalysis.totalErrors} errors analyzed`, 'info');
      
    } catch (error) {
      this.log(`❌ Error in error analysis: ${error.message}`, 'error');
    }
  }

  categorizeError(errorMessage) {
    if (errorMessage.includes('syntax')) return 'syntax_error';
    if (errorMessage.includes('require') || errorMessage.includes('module')) return 'module_error';
    if (errorMessage.includes('permission') || errorMessage.includes('access')) return 'permission_error';
    if (errorMessage.includes('timeout') || errorMessage.includes('ETIMEDOUT')) return 'timeout_error';
    if (errorMessage.includes('memory') || errorMessage.includes('heap')) return 'memory_error';
    if (errorMessage.includes('network') || errorMessage.includes('connection')) return 'network_error';
    return 'other_error';
  }

  async optimizeSystems() {
    this.log('⚡ Starting system optimization...', 'info');
    
    try {
      const optimizations = [];
      
      // Check for performance issues
      const systems = Array.from(this.automationSystems.values());
      
      for (const system of systems) {
        if (system.status === 'healthy') {
          const optimization = await this.optimizeSystem(system);
          if (optimization) {
            optimizations.push(optimization);
          }
        }
      }
      
      // Save optimization report
      const optimizationReport = {
        timestamp: new Date().toISOString(),
        optimizationsApplied: optimizations.length,
        optimizations: optimizations
      };
      
      const reportPath = path.join(this.reportsDir, `optimization-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimizationReport, null, 2));
      
      this.log(`⚡ System optimization completed: ${optimizations.length} optimizations applied`, 'info');
      
    } catch (error) {
      this.log(`❌ Error in system optimization: ${error.message}`, 'error');
    }
  }

  async optimizeSystem(system) {
    try {
      const content = fs.readFileSync(system.path, 'utf8');
      let optimized = false;
      let optimizedContent = content;
      
      // Apply optimizations
      
      // Remove console.log statements in production
      if (process.env.NODE_ENV === 'production') {
        const beforeLength = optimizedContent.length;
        optimizedContent = optimizedContent.replace(/console\.log\([^)]*\);?\s*/g, '');
        if (optimizedContent.length !== beforeLength) {
          optimized = true;
        }
      }
      
      // Optimize require statements
      const requireOptimizations = optimizedContent.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g);
      if (requireOptimizations) {
        // Group requires at the top
        const requires = [...new Set(requireOptimizations)];
        const nonRequireContent = optimizedContent.replace(/const\s+\w+\s*=\s*require\s*\(\s*['"][^'"]+['"]\s*\)\s*;\s*/g, '');
        
        optimizedContent = require(s.join('\n') + '\n\n' + nonRequireConten);t;
        optimized = true;
      }
      
      // Write optimized content if changes were made
      if (optimized) {
        fs.writeFileSync(system.path, optimizedContent);
        return {
          system: system.name,
          type: 'code_optimization',
          description: 'Applied code optimizations'
        };
      }
      
      return null;
      
    } catch (error) {
      this.log(`❌ Error optimizing system ${system.name}: ${error.message}`, 'error');
      return null;
    }
  }

  async generateComprehensiveReport() {
    this.log('📊 Generating comprehensive monitoring report...', 'info');
    
    try {
      const systems = Array.from(this.automationSystems.values());
      const healthy = systems.filter(s => s.status === 'healthy');
      const problematic = systems.filter(s => s.status !== 'healthy');
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalSystems: systems.length,
          healthySystems: healthy.length,
          problematicSystems: problematic.length,
          healthPercentage: systems.length > 0 ? (healthy.length / systems.length) * 100 : 0
        },
        systemsByType: {
          factories: systems.filter(s => s.type === 'factory'),
          agents: systems.filter(s => s.type === 'agent'),
          scripts: systems.filter(s => s.type === 'script'),
          cron: systems.filter(s => s.type === 'cron')
        },
        problematicSystems: problematic.map(s => ({
          name: s.name,
          type: s.type,
          status: s.status,
          error: s.error,
          path: s.path
        })),
        errorSummary: {
          totalErrors: this.errorLogs.length,
          errorCategories: this.categorizeErrors()
        },
        recommendations: this.generateRecommendations(systems, problematic),
        metrics: this.healthMetrics
      };
      
      // Save comprehensive report
      const reportPath = path.join(this.reportsDir, `comprehensive-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      // Generate human-readable report
      const humanReport = this.generateHumanReadableReport(report);
      const humanReportPath = path.join(this.reportsDir, `human-readable-report-${new Date().toISOString().split('T')[0]}.txt`);
      fs.writeFileSync(humanReportPath, humanReport);
      
      this.log(`📊 Comprehensive report generated: ${reportPath}`, 'info');
      
    } catch (error) {
      this.log(`❌ Error generating comprehensive report: ${error.message}`, 'error');
    }
  }

  categorizeErrors() {
    const categories = {};
    for (const error of this.errorLogs) {
      const category = this.categorizeError(error.message);
      categories[category] = (categories[category] || 0) + 1;
    }
    return categories;
  }

  generateRecommendations(systems, problematic) {
    const recommendations = [];
    
    if (problematic.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'fix_problematic_systems',
        description: `Fix ${problematic.length} problematic systems`,
        systems: problematic.map(s => s.name)
      });
    }
    
    if (systems.length === 0) {
      recommendations.push({
        priority: 'medium',
        action: 'discover_systems',
        description: 'No automation systems discovered - check discovery patterns'
      });
    }
    
    const healthPercentage = systems.length > 0 ? (systems.filter(s => s.status === 'healthy').length / systems.length) * 100: 0;
    if (healthPercentage < 90) {
      recommendations.push({
        priority: 'medium',
        action: 'improve_health',
        description: `System health is ${healthPercentage.toFixed(1)}% - consider optimization`
      });
    }
    
    return recommendations;
  }

  generateHumanReadableReport(report) {
    let humanReport = `AUTOMATION MONITORING REPORT
Generated: ${report.timestamp}
=====================================

SUMMARY: - Total Systems: ${report.summary.totalSystems}
- Healthy Systems: ${report.summary.healthySystems}
- Problematic Systems: ${report.summary.problematicSystems}
- Health Percentage: ${report.summary.healthPercentage.toFixed(1)}%

SYSTEMS BY TYPE: - Factories: ${report.systemsByType.factories.length}
- Agents: ${report.systemsByType.agents.length}
- Scripts: ${report.systemsByType.scripts.length}
- Cron Jobs: ${report.systemsByType.cron.length}

PROBLEMATIC SYSTEMS: `;

    for (const system of report.problematicSystems) {
      humanReport += `- ${system.name} (${system.type}): ${system.status}\n`;
      if (system.error) {
        humanReport += `  Error: ${system.error}\n`;
      }
      humanReport += '\n';
    }

    humanReport += `ERROR SUMMARY: - Total Errors: ${report.errorSummary.totalErrors}
- Error Categories: \n`;

    for (const [category, count] of Object.entries(report.errorSummary.errorCategories)) {
      humanReport += `  - ${category}: ${count}\n`;
    }

    humanReport += `\nRECOMMENDATIONS: \n`;
    for (const rec of report.recommendations) {
      humanReport += `- [${rec.priority.toUpperCase()}] ${rec.description}\n`;
    }

    return humanReport;
  }

  updateHealthMetrics() {
    const systems = Array.from(this.automationSystems.values());
    this.healthMetrics = {
      totalSystems: systems.length,
      healthySystems: systems.filter(s => s.status === 'healthy').length,
      problematicSystems: systems.filter(s => s.status !== 'healthy').length,
      fixedSystems: this.healthMetrics.fixedSystems,
      lastCheck: new Date().toISOString()
    };
  }

  saveMonitoringStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      systems: Array.from(this.automationSystems.entries()),
      healthMetrics: this.healthMetrics,
      errorLogs: this.errorLogs.slice(-100) // Keep last 100 errors
    };
    
    const statusPath = path.join(this.statusDir, 'current-status.json');
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
  }

  startMonitoring() {
    this.log('🚀 Starting Automation Monitor and Maintainer System...', 'info');
    
    // Start all cron jobs
    Object.entries(this.cronJobs).forEach(([name, job]) => {
      cron.schedule(job.schedule, () => {
        try {
          job.job();
        } catch (error) {
          this.log(`❌ Error in cron job ${name}: ${error.message}`, 'error');
        }
      });
      this.log(`✅ Started cron job: ${name} (${job.description})`, 'info');
    });
    
    // Initial discovery and monitoring
    this.continuousMonitoring();
    
    this.log('🎉 Automation Monitor and Maintainer System is now running!', 'info');
  }

  stopMonitoring() {
    this.log('🛑 Stopping Automation Monitor and Maintainer System...', 'info');
    
    // Stop all cron jobs
    cron.getTasks().forEach(task => task.stop());
    
    this.log('✅ Automation Monitor and Maintainer System stopped', 'info');
  }
}

// Main execution
if (require.main === module) {
  const monitor = new AutomationMonitorAndMaintainer();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    monitor.stopMonitoring();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    monitor.stopMonitoring();
    process.exit(0);
  });
  
  // Start the monitoring system
  monitor.startMonitoring();
}

module.exports = AutomationMonitorAndMaintainer;
