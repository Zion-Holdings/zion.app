#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-continuous-monitor.log');
const CONFIG_FILE = path.join(__dirname, 'monitor-config.json');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class NetlifyContinuousMonitor {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.isRunning = false;
    this.monitorInterval = null;
    this.stats = {
      startTime: null,
      healthChecks: 0,
      optimizations: 0,
      issues: 0,
      lastHealthCheck: null,
      lastOptimization: null
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    const defaultConfig = {
      healthCheckInterval: 5 * 60 * 1000, // 5 minutes
      optimizationThreshold: 100 * 1024 * 1024, // 100MB
      maxBuildArtifacts: 200 * 1024 * 1024, // 200MB
      autoOptimize: true,
      notifications: {
        enabled: true,
        slack: false,
        email: false
      },
      performance: {
        trackBuildTimes: true,
        trackArtifactSizes: true,
        trackOptimizationSavings: true
      }
    };

    try {
      if (fs.existsSync(CONFIG_FILE)) {
        const savedConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        return { ...defaultConfig, ...savedConfig };
      }
    } catch (error) {
      log(`Warning: Could not load config, using defaults: ${error.message}`);
    }

    // Save default config
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(defaultConfig, null, 2));
    return defaultConfig;
  }

  async start() {
    if (this.isRunning) {
      log('⚠️ Monitor is already running');
      return false;
    }

    log('🚀 Starting Netlify Continuous Monitor...');
    this.isRunning = true;
    this.stats.startTime = Date.now();

    // Initial health check
    await this.performHealthCheck();

    // Start monitoring interval
    this.monitorInterval = setInterval(async () => {
      try {
        await this.monitoringCycle();
      } catch (error) {
        log(`❌ Monitoring cycle error: ${error.message}`);
      }
    }, this.config.healthCheckInterval);

    log(`✅ Continuous monitor started (interval: ${this.config.healthCheckInterval / 1000}s)`);
    return true;
  }

  async stop() {
    if (!this.isRunning) {
      log('⚠️ Monitor is not running');
      return false;
    }

    log('🛑 Stopping Netlify Continuous Monitor...');
    
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
      this.monitorInterval = null;
    }

    this.isRunning = false;
    
    // Generate final report
    const finalReport = await this.generateFinalReport();
    const reportPath = path.join(LOG_DIR, `monitor-final-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2));
    
    log(`✅ Monitor stopped. Final report saved to: ${reportPath}`);
    return true;
  }

  async monitoringCycle() {
    log('📊 Running monitoring cycle...');
    
    try {
      // Health check
      const healthResult = await this.performHealthCheck();
      
      // Check build artifacts size
      const artifactSize = await this.checkBuildArtifactsSize();
      
      // Auto-optimize if needed
      if (this.config.autoOptimize && artifactSize > this.config.optimizationThreshold) {
        await this.performAutoOptimization();
      }
      
      // Performance tracking
      if (this.config.performance.trackBuildTimes) {
        await this.trackBuildPerformance();
      }
      
      // Update stats
      this.stats.lastHealthCheck = Date.now();
      this.stats.healthChecks++;
      
      log(`✅ Monitoring cycle completed. Health: ${healthResult.overall}, Artifacts: ${this.formatBytes(artifactSize)}`);
      
    } catch (error) {
      log(`❌ Monitoring cycle failed: ${error.message}`);
      this.stats.issues++;
    }
  }

  async performHealthCheck() {
    try {
      const orchestrator = require('./netlify-intelligent-build-orchestrator.cjs');
      const health = await orchestrator.prototype.runHealthCheck.call({});
      return health;
    } catch (error) {
      log(`❌ Health check failed: ${error.message}`);
      return { overall: 'unknown', error: error.message };
    }
  }

  async checkBuildArtifactsSize() {
    try {
      const artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      const analyzer = new artifactOptimizer();
      const analysis = await analyzer.analyzeBuildArtifacts();
      return analysis.totalSize;
    } catch (error) {
      log(`❌ Artifact size check failed: ${error.message}`);
      return 0;
    }
  }

  async performAutoOptimization() {
    try {
      log('🔧 Performing auto-optimization...');
      
      const artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      const optimizer = new artifactOptimizer();
      const result = await optimizer.runFullOptimization();
      
      this.stats.optimizations++;
      this.stats.lastOptimization = Date.now();
      
      log(`✅ Auto-optimization completed: ${result.summary.totalSavingsFormatted} saved`);
      return result;
      
    } catch (error) {
      log(`❌ Auto-optimization failed: ${error.message}`);
      throw error;
    }
  }

  async trackBuildPerformance() {
    try {
      const analytics = require('./netlify-build-analytics.cjs');
      const analyzer = new analytics();
      const result = await analyzer.runFullAnalysis();
      
      // Save performance data
      const performanceData = {
        timestamp: new Date().toISOString(),
        buildId: result.buildId,
        metrics: result.metrics,
        performance: result.performance
      };
      
      const performancePath = path.join(LOG_DIR, `performance-${Date.now()}.json`);
      fs.writeFileSync(performancePath, JSON.stringify(performanceData, null, 2));
      
      log(`📊 Performance data saved: ${performancePath}`);
      
    } catch (error) {
      log(`❌ Performance tracking failed: ${error.message}`);
    }
  }

  async generateFinalReport() {
    const duration = this.stats.startTime ? Date.now() - this.stats.startTime : 0;
    
    return {
      timestamp: new Date().toISOString(),
      session: {
        startTime: this.stats.startTime,
        duration: duration,
        durationFormatted: this.formatDuration(duration)
      },
      statistics: {
        ...this.stats,
        uptime: duration,
        uptimeFormatted: this.formatDuration(duration)
      },
      configuration: this.config,
      summary: {
        totalHealthChecks: this.stats.healthChecks,
        totalOptimizations: this.stats.optimizations,
        totalIssues: this.stats.issues,
        averageHealthCheckInterval: this.config.healthCheckInterval / 1000,
        autoOptimizationEnabled: this.config.autoOptimize
      }
    };
  }

  async getStatus() {
    return {
      isRunning: this.isRunning,
      uptime: this.stats.startTime ? Date.now() - this.stats.startTime : 0,
      uptimeFormatted: this.formatDuration(this.stats.startTime ? Date.now() - this.stats.startTime : 0),
      stats: this.stats,
      config: this.config,
      nextHealthCheck: this.monitorInterval ? 
        new Date(Date.now() + this.config.healthCheckInterval) : null
    };
  }

  async updateConfig(newConfig) {
    try {
      this.config = { ...this.config, ...newConfig };
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(this.config, null, 2));
      log('✅ Configuration updated successfully');
      return true;
    } catch (error) {
      log(`❌ Configuration update failed: ${error.message}`);
      return false;
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  async runDiagnostics() {
    log('🔍 Running system diagnostics...');
    
    const diagnostics = {
      timestamp: new Date().toISOString(),
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        memoryUsage: process.memoryUsage()
      },
      components: {},
      fileSystem: {},
      configuration: this.config
    };

    try {
      // Check component availability
      const components = [
        'netlify-intelligent-build-orchestrator.cjs',
        'netlify-build-optimizer.cjs',
        'netlify-build-analytics.cjs',
        'netlify-build-artifact-optimizer.cjs',
        'netlify-build-error-analyzer.cjs'
      ];

      for (const component of components) {
        const componentPath = path.join(__dirname, component);
        diagnostics.components[component] = {
          exists: fs.existsSync(componentPath),
          size: fs.existsSync(componentPath) ? fs.statSync(componentPath).size : 0,
          modified: fs.existsSync(componentPath) ? fs.statSync(componentPath).mtime.toISOString() : null
        };
      }

      // Check file system
      diagnostics.fileSystem = {
        logDirectory: {
          exists: fs.existsSync(LOG_DIR),
          writable: fs.accessSync ? true : false
        },
        configFile: {
          exists: fs.existsSync(CONFIG_FILE),
          readable: fs.accessSync ? true : false
        }
      };

      log('✅ Diagnostics completed successfully');
      return diagnostics;

    } catch (error) {
      log(`❌ Diagnostics failed: ${error.message}`);
      diagnostics.error = error.message;
      return diagnostics;
    }
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new NetlifyContinuousMonitor();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      monitor.start().then(success => {
        if (success) {
          log('🚀 Monitor started successfully');
          // Keep the process running
          process.on('SIGINT', async () => {
            log('🛑 Received SIGINT, shutting down...');
            await monitor.stop();
            process.exit(0);
          });
        } else {
          log('❌ Failed to start monitor');
          process.exit(1);
        }
      });
      break;
      
    case 'stop':
      monitor.stop().then(console.log);
      break;
      
    case 'status':
      monitor.getStatus().then(console.log);
      break;
      
    case 'diagnostics':
      monitor.runDiagnostics().then(console.log);
      break;
      
    case 'config':
      console.log(monitor.config);
      break;
      
    default:
      console.log('Usage: node netlify-continuous-monitor.cjs [start|stop|status|diagnostics|config]');
      break;
  }
}

module.exports = NetlifyContinuousMonitor;
