#!/usr/bin/env node

/**
 * Automation Health Check Script
 * 
 * Monitors automation systems health and triggers fixes when issues are detected:
 * - Checks system status
 * - Monitors error logs
 * - Triggers automatic fixes
 * - Sends alerts for critical issues
 */

const winston = require('winston');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-health-check' },
  transports: [
    new winston.transports.File({ filename: 'logs/health-check.log' }),
    new winston.transports.File({ filename: 'logs/health-check-error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

class AutomationHealthChecker {
  constructor() {
    this.config = {
      checkInterval: 300000, // 5 minutes
      errorThreshold: 10, // Number of errors before triggering fix
      maxRetries: 3,
      logsDir: path.join(__dirname, '../logs'),
      statusFile: path.join(__dirname, '../logs/health-status.json'),
    };
    
    this.status = {
      lastCheck: null,
      systems: {},
      errors: [],
      fixes: [],
      alerts: []
    };
    
    this.loadStatus();
  }

  async run() {
    logger.info('🏥 Starting Automation Health Check');
    
    try {
      // Perform health checks
      await this.checkSystemHealth();
      
      // Check for error patterns
      await this.analyzeErrorLogs();
      
      // Trigger fixes if needed
      await this.triggerFixes();
      
      // Generate health report
      await this.generateHealthReport();
      
      // Save status
      this.saveStatus();
      
      logger.info('✅ Health check completed');
      return true;
    } catch (error) {
      logger.error('❌ Health check failed:', error);
      return false;
    }
  }

  async checkSystemHealth() {
    logger.info('🔍 Checking system health...');
    
    const systems = [
      { name: 'netlify-monitor', file: 'automation/netlify-monitor.js' },
      { name: 'dependency-updater', file: 'automation/tasks/DependencyUpdater.js' },
      { name: 'core-orchestrator', file: 'automation/intelligent-automation-orchestrator.js' },
      { name: 'performance-monitor', file: 'automation/performance-monitor.js' },
      { name: 'automation-starter', file: 'automation/start-working-automations.js' }
    ];

    for (const system of systems) {
      try {
        const health = await this.checkSystem(system);
        this.status.systems[system.name] = health;
      } catch (error) {
        this.status.systems[system.name] = {
          status: 'error',
          error: error.message,
          timestamp: new Date().toISOString()
        };
      }
    }
  }

  async checkSystem(system) {
    const health = {
      status: 'unknown',
      timestamp: new Date().toISOString(),
      fileExists: false,
      syntaxValid: false,
      runtimeErrors: 0
    };

    try {
      // Check if file exists
      health.fileExists = fs.existsSync(system.file);
      
      if (!health.fileExists) {
        health.status = 'missing';
        return health;
      }

      // Check syntax
      try {
        require.resolve(path.resolve(system.file));
        health.syntaxValid = true;
      } catch (syntaxError) {
        health.status = 'syntax_error';
        health.error = syntaxError.message;
        return health;
      }

      // Check for runtime errors in logs
      health.runtimeErrors = await this.countRuntimeErrors(system.name);
      
      if (health.runtimeErrors > this.config.errorThreshold) {
        health.status = 'error';
      } else if (health.runtimeErrors > 0) {
        health.status = 'warning';
      } else {
        health.status = 'healthy';
      }

      return health;
    } catch (error) {
      health.status = 'error';
      health.error = error.message;
      return health;
    }
  }

  async countRuntimeErrors(systemName) {
    try {
      const errorLogPath = path.join(this.config.logsDir, 'error.log');
      
      if (!fs.existsSync(errorLogPath)) {
        return 0;
      }

      const logContent = fs.readFileSync(errorLogPath, 'utf8');
      const lines = logContent.split('\n');
      
      // Count errors for this system in the last hour
      const oneHourAgo = new Date(Date.now() - 3600000);
      let errorCount = 0;
      
      for (const line of lines) {
        if (line.includes(systemName) && line.includes('error')) {
          try {
            const logEntry = JSON.parse(line);
            const logTime = new Date(logEntry.timestamp);
            
            if (logTime > oneHourAgo) {
              errorCount++;
            }
          } catch (parseError) {
            // Skip malformed log entries
          }
        }
      }
      
      return errorCount;
    } catch (error) {
      logger.error(`Error counting runtime errors for ${systemName}:`, error);
      return 0;
    }
  }

  async analyzeErrorLogs() {
    logger.info('📊 Analyzing error logs...');
    
    try {
      const errorLogPath = path.join(this.config.logsDir, 'error.log');
      
      if (!fs.existsSync(errorLogPath)) {
        return;
      }

      const logContent = fs.readFileSync(errorLogPath, 'utf8');
      const lines = logContent.split('\n').filter(line => line.trim());
      
      // Analyze recent errors (last 100 lines)
      const recentLines = lines.slice(-100);
      
      for (const line of recentLines) {
        try {
          const logEntry = JSON.parse(line);
          
          if (logEntry.level === 'error') {
            this.analyzeError(logEntry);
          }
        } catch (parseError) {
          // Skip malformed log entries
        }
      }
    } catch (error) {
      logger.error('Error analyzing error logs:', error);
    }
  }

  analyzeError(logEntry) {
    const error = {
      timestamp: logEntry.timestamp,
      message: logEntry.message,
      service: logEntry.service,
      type: this.categorizeError(logEntry.message)
    };

    this.status.errors.push(error);
    
    // Keep only last 50 errors
    if (this.status.errors.length > 50) {
      this.status.errors = this.status.errors.slice(-50);
    }

    // Check for critical error patterns
    if (this.isCriticalError(error)) {
      this.status.alerts.push({
        type: 'critical',
        error: error,
        timestamp: new Date().toISOString()
      });
    }
  }

  categorizeError(message) {
    const messageLower = message.toLowerCase();
    
    if (messageLower.includes('builds.slice')) {
      return 'netlify_monitor_array_error';
    }
    
    if (messageLower.includes('npm outdated')) {
      return 'dependency_updater_command_error';
    }
    
    if (messageLower.includes('bundle metrics')) {
      return 'performance_monitor_bundle_error';
    }
    
    if (messageLower.includes('orchestrator')) {
      return 'core_orchestrator_error';
    }
    
    if (messageLower.includes('memory') || messageLower.includes('heap')) {
      return 'memory_error';
    }
    
    if (messageLower.includes('timeout')) {
      return 'timeout_error';
    }
    
    return 'generic_error';
  }

  isCriticalError(error) {
    const criticalPatterns = [
      'builds.slice is not a function',
      'npm outdated --json',
      'Failed to get bundle metrics',
      'Error checking builds',
      'Some systems may have stopped'
    ];
    
    return criticalPatterns.some(pattern => 
      error.message.includes(pattern)
    );
  }

  async triggerFixes() {
    logger.info('🔧 Checking if fixes are needed...');
    
    const needsFix = this.checkIfFixesNeeded();
    
    if (needsFix) {
      logger.info('⚠️ Issues detected, triggering fixes...');
      
      try {
        // Run the fix script
        const fixScriptPath = path.join(__dirname, 'fix-automation-errors.js');
        
        if (fs.existsSync(fixScriptPath)) {
          execSync(`node ${fixScriptPath}`, { 
            stdio: 'inherit',
            cwd: path.join(__dirname, '../..')
          });
          
          this.status.fixes.push({
            timestamp: new Date().toISOString(),
            type: 'automated_fix',
            description: 'Triggered by health check'
          });
          
          logger.info('✅ Fixes applied successfully');
        } else {
          logger.error('❌ Fix script not found');
        }
      } catch (error) {
        logger.error('❌ Failed to apply fixes:', error);
      }
    } else {
      logger.info('✅ No fixes needed');
    }
  }

  checkIfFixesNeeded() {
    // Check for critical errors
    const criticalErrors = this.status.errors.filter(error => 
      this.isCriticalError(error)
    );
    
    if (criticalErrors.length > 0) {
      return true;
    }
    
    // Check system health
    const unhealthySystems = Object.values(this.status.systems).filter(system => 
      system.status === 'error' || system.status === 'missing'
    );
    
    if (unhealthySystems.length > 0) {
      return true;
    }
    
    // Check error threshold
    const recentErrors = this.status.errors.filter(error => {
      const errorTime = new Date(error.timestamp);
      const oneHourAgo = new Date(Date.now() - 3600000);
      return errorTime > oneHourAgo;
    });
    
    if (recentErrors.length > this.config.errorThreshold) {
      return true;
    }
    
    return false;
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.getOverallStatus(),
      systems: this.status.systems,
      recentErrors: this.status.errors.slice(-10),
      recentFixes: this.status.fixes.slice(-5),
      alerts: this.status.alerts,
      recommendations: this.generateRecommendations()
    };

    try {
      const reportPath = path.join(this.config.logsDir, 'health-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      logger.info(`📄 Health report generated: ${reportPath}`);
    } catch (error) {
      logger.error('Error generating health report:', error);
    }
  }

  getOverallStatus() {
    const errorSystems = Object.values(this.status.systems).filter(system => 
      system.status === 'error'
    );
    
    const missingSystems = Object.values(this.status.systems).filter(system => 
      system.status === 'missing'
    );
    
    if (errorSystems.length > 0 || missingSystems.length > 0) {
      return 'critical';
    }
    
    const warningSystems = Object.values(this.status.systems).filter(system => 
      system.status === 'warning'
    );
    
    if (warningSystems.length > 0) {
      return 'warning';
    }
    
    return 'healthy';
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check for missing systems
    Object.entries(this.status.systems).forEach(([name, system]) => {
      if (system.status === 'missing') {
        recommendations.push(`Create missing system: ${name}`);
      }
    });
    
    // Check for syntax errors
    Object.entries(this.status.systems).forEach(([name, system]) => {
      if (system.status === 'syntax_error') {
        recommendations.push(`Fix syntax errors in: ${name}`);
      }
    });
    
    // Check for high error rates
    Object.entries(this.status.systems).forEach(([name, system]) => {
      if (system.runtimeErrors > this.config.errorThreshold) {
        recommendations.push(`Investigate high error rate in: ${name}`);
      }
    });
    
    return recommendations;
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.config.statusFile)) {
        this.status = {
          ...this.status,
          ...JSON.parse(fs.readFileSync(this.config.statusFile, 'utf8'))
        };
      }
    } catch (error) {
      logger.warn('Could not load status file:', error.message);
    }
  }

  saveStatus() {
    try {
      this.status.lastCheck = new Date().toISOString();
      
      if (!fs.existsSync(this.config.logsDir)) {
        fs.mkdirSync(this.config.logsDir, { recursive: true });
      }
      
      fs.writeFileSync(this.config.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      logger.error('Error saving status:', error);
    }
  }
}

// Run the health checker if this script is executed directly
if (require.main === module) {
  const healthChecker = new AutomationHealthChecker();
  healthChecker.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    logger.error('Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = AutomationHealthChecker; 