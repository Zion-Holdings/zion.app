#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorLogPath = path.join(this.projectRoot, 'automation', 'lint-errors.json');
    this.statsPath = path.join(this.projectRoot, 'automation', 'lint-stats.json');
    this.lastCheck = 0;
    this.checkInterval = 15000; // 15 seconds
    this.errorThreshold = 10; // Maximum errors before alert
  }

  async init() {
    console.log('🔍 Initializing Lint Monitor...');
    
    // Ensure directories exist
    this.ensureDirectories();
    
    // Initialize stats
    this.initializeStats();
    
    console.log('✅ Lint Monitor initialized');
  }

  ensureDirectories() {
    const automationDir = path.join(this.projectRoot, 'automation');
    if (!fs.existsSync(automationDir)) {
      fs.mkdirSync(automationDir, { recursive: true });
    }
  }

  initializeStats() {
    if (!fs.existsSync(this.statsPath)) {
      const initialStats = {
        totalChecks: 0,
        totalErrors: 0,
        lastCheck: null,
        errorHistory: [],
        filesWithErrors: {},
        errorTypes: {}
      };
      fs.writeFileSync(this.statsPath, JSON.stringify(initialStats, null, 2));
    }
  }

  async runLintCheck() {
    try {
      console.log('🔍 Running lint check...');
      
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=json', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(result);
      await this.processLintResults(lintResults);
      
    } catch (error) {
      if (error.status === 1) {
        // ESLint found errors
        try {
          const errorOutput = error.stdout || error.stderr;
          const lintResults = JSON.parse(errorOutput);
          await this.processLintResults(lintResults);
        } catch (parseError) {
          console.error('❌ Failed to parse lint results:', parseError.message);
        }
      } else {
        console.error('❌ Lint check failed:', error.message);
      }
    }
  }

  async processLintResults(results) {
    const errors = [];
    const errorTypes = {};
    const filesWithErrors = {};
    
    results.forEach(fileResult => {
      if (fileResult.messages && fileResult.messages.length > 0) {
        const filePath = fileResult.filePath;
        filesWithErrors[filePath] = fileResult.messages.length;
        
        fileResult.messages.forEach(message => {
          const error = {
            file: filePath,
            line: message.line,
            column: message.column,
            severity: message.severity,
            message: message.message,
            ruleId: message.ruleId,
            fix: message.fix
          };
          
          errors.push(error);
          
          // Count error types
          const ruleId = message.ruleId || 'unknown';
          errorTypes[ruleId] = (errorTypes[ruleId] || 0) + 1;
        });
      }
    });
    
    // Save errors to file
    await this.saveErrors(errors);
    
    // Update stats
    await this.updateStats(errors, errorTypes, filesWithErrors);
    
    // Generate report
    await this.generateReport(errors, errorTypes, filesWithErrors);
    
    // Check for alerts
    if (errors.length > this.errorThreshold) {
      await this.sendAlert(errors.length);
    }
    
    console.log(`📊 Found ${errors.length} lint errors in ${Object.keys(filesWithErrors).length} files`);
  }

  async saveErrors(errors) {
    const errorData = {
      timestamp: new Date().toISOString(),
      totalErrors: errors.length,
      errors: errors
    };
    
    fs.writeFileSync(this.errorLogPath, JSON.stringify(errorData, null, 2));
  }

  async updateStats(errors, errorTypes, filesWithErrors) {
    const stats = JSON.parse(fs.readFileSync(this.statsPath, 'utf8'));
    
    stats.totalChecks++;
    stats.totalErrors += errors.length;
    stats.lastCheck = new Date().toISOString();
    
    // Update error history (keep last 100 entries)
    stats.errorHistory.push({
      timestamp: new Date().toISOString(),
      errorCount: errors.length,
      fileCount: Object.keys(filesWithErrors).length
    });
    
    if (stats.errorHistory.length > 100) {
      stats.errorHistory = stats.errorHistory.slice(-100);
    }
    
    // Update files with errors
    Object.assign(stats.filesWithErrors, filesWithErrors);
    
    // Update error types
    Object.keys(errorTypes).forEach(type => {
      stats.errorTypes[type] = (stats.errorTypes[type] || 0) + errorTypes[type];
    });
    
    fs.writeFileSync(this.statsPath, JSON.stringify(stats, null, 2));
  }

  async generateReport(errors, errorTypes, filesWithErrors) {
    const reportPath = path.join(this.projectRoot, 'automation', 'lint-report.json');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: errors.length,
        filesAffected: Object.keys(filesWithErrors).length,
        mostCommonErrors: Object.entries(errorTypes)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 10)
      },
      filesWithErrors: filesWithErrors,
      errorTypes: errorTypes,
      topErrors: errors.slice(0, 20) // Top 20 errors
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  async sendAlert(errorCount) {
    const alertPath = path.join(this.projectRoot, 'automation', 'lint-alert.json');
    
    const alert = {
      timestamp: new Date().toISOString(),
      type: 'high_error_count',
      message: `High number of lint errors detected: ${errorCount}`,
      errorCount: errorCount,
      threshold: this.errorThreshold
    };
    
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));
    console.log(`🚨 ALERT: High number of lint errors (${errorCount})`);
  }

  async startMonitoring() {
    console.log('🔄 Starting continuous lint monitoring...');
    
    // Run initial check
    await this.runLintCheck();
    
    // Set up periodic monitoring
    setInterval(async () => {
      await this.runLintCheck();
    }, this.checkInterval);
    
    console.log(`✅ Monitoring started. Checking every ${this.checkInterval / 1000} seconds.`);
  }

  async getStats() {
    if (fs.existsSync(this.statsPath)) {
      return JSON.parse(fs.readFileSync(this.statsPath, 'utf8'));
    }
    return null;
  }

  async getLatestErrors() {
    if (fs.existsSync(this.errorLogPath)) {
      return JSON.parse(fs.readFileSync(this.errorLogPath, 'utf8'));
    }
    return null;
  }
}

// CLI interface
async function main() {
  const monitor = new LintMonitor();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'monitor';
  
  try {
    await monitor.init();
    
    switch (command) {
      case 'check':
        await monitor.runLintCheck();
        break;
      case 'stats':
        const stats = await monitor.getStats();
        console.log(JSON.stringify(stats, null, 2));
        break;
      case 'errors':
        const errors = await monitor.getLatestErrors();
        console.log(JSON.stringify(errors, null, 2));
        break;
      case 'monitor':
      default:
        await monitor.startMonitoring();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = LintMonitor;