#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { exec } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'continuous-build-monitor.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class ContinuousBuildMonitor {
  constructor() {
    this.workspace = process.cwd();
    this.watcher = null;
    this.buildQueue = [];
    this.isBuilding = false;
    this.lastBuildTime = 0;
    this.buildCooldown = 5000; // 5 seconds between builds
    this.maxQueueSize = 10;
    this.buildHistory = [];
    this.maxHistorySize = 50;
  }
  
  start() {
    log('🚀 Starting continuous build monitor...');
    
    // Watch for changes in critical directories
    this.watcher = chokidar.watch([
      'pages/**/*',
      'components/**/*',
      'next.config.js',
      'package.json',
      'tsconfig.json'
    ], {
      ignored: /(node_modules|\.next|out|\.git)/,
      persistent: true,
      ignoreInitial: true
    });
    
    this.watcher
      .on('change', (filePath) => {
        log(`📝 File changed: ${filePath}`);
        this.queueBuild(filePath);
      })
      .on('add', (filePath) => {
        log(`➕ File added: ${filePath}`);
        this.queueBuild(filePath);
      })
      .on('unlink', (filePath) => {
        log(`🗑️ File removed: ${filePath}`);
        this.queueBuild(filePath);
      })
      .on('error', (error) => {
        log(`❌ Watcher error: ${error.message}`);
      });
    
    log('✅ Continuous build monitor started');
    log('   Watching: pages/, components/, config files');
    log('   Build cooldown: 5 seconds');
    log('   Max queue size: 10');
    
    // Start processing the build queue
    this.processBuildQueue();
  }
  
  stop() {
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
      log('🛑 Continuous build monitor stopped');
    }
  }
  
  queueBuild(filePath) {
    const now = Date.now();
    
    // Check cooldown
    if (now - this.lastBuildTime < this.buildCooldown) {
      log(`⏳ Build cooldown active, skipping ${filePath}`);
      return;
    }
    
    // Add to queue if not already there
    if (!this.buildQueue.includes(filePath)) {
      this.buildQueue.push(filePath);
      log(`📋 Queued build for: ${filePath} (queue size: ${this.buildQueue.length})`);
      
      // Limit queue size
      if (this.buildQueue.length > this.maxQueueSize) {
        const removed = this.buildQueue.shift();
        log(`🗑️ Removed from queue (max size): ${removed}`);
      }
    }
    
    // Process queue if not currently building
    if (!this.isBuilding) {
      this.processBuildQueue();
    }
  }
  
  async processBuildQueue() {
    if (this.isBuilding || this.buildQueue.length === 0) {
      return;
    }
    
    this.isBuilding = true;
    
    while (this.buildQueue.length > 0) {
      const filePath = this.buildQueue.shift();
      log(`🔨 Processing build for: ${filePath}`);
      
      try {
        await this.runBuildCheck();
        this.lastBuildTime = Date.now();
        log(`✅ Build check passed after ${filePath} change`);
        
        // Record successful build
        this.recordBuildResult({
          file: filePath,
          success: true,
          timestamp: new Date().toISOString(),
          duration: Date.now() - this.lastBuildTime
        });
        
      } catch (error) {
        log(`❌ Build check failed after ${filePath} change: ${error.message}`);
        
        // Record failed build
        this.recordBuildResult({
          file: filePath,
          success: false,
          timestamp: new Date().toISOString(),
          error: error.message,
          duration: Date.now() - this.lastBuildTime
        });
        
        // Try to auto-fix the issue
        await this.autoFixBuildError(error, filePath);
      }
    }
    
    this.isBuilding = false;
  }
  
  async runBuildCheck() {
    return new Promise((resolve, reject) => {
      log('🔍 Running build health check...');
      
      exec('npm run build:health-check', {
        cwd: this.workspace,
        timeout: 30000 // 30 second timeout
      }, (error, stdout, stderr) => {
        if (error) {
          log(`❌ Build health check failed: ${error.message}`);
          reject(new Error(`Build health check failed: ${error.message}`));
          return;
        }
        
        log('✅ Build health check passed');
        resolve(stdout);
      });
    });
  }
  
  async autoFixBuildError(error, filePath) {
    log(`🔧 Attempting to auto-fix build error for ${filePath}...`);
    
    try {
      // Use the build failure recovery system
      const { BuildFailureRecovery } = require('./build-failure-recovery.cjs');
      const recovery = new BuildFailureRecovery();
      
      // Create a mock error log for the recovery system
      const errorLog = `Build failed: ${error.message} in ${filePath}`;
      const report = await recovery.analyzeBuildError(errorLog);
      
      if (report.summary.successfulFixes > 0) {
        log(`✅ Auto-fixed ${report.summary.successfulFixes} issues`);
        
        // Try building again
        await this.runBuildCheck();
        log(`✅ Build recovered successfully after auto-fix`);
        
      } else {
        log(`⚠️ No automatic fixes were applied for ${filePath}`);
      }
      
    } catch (recoveryError) {
      log(`❌ Auto-fix failed: ${recoveryError.message}`);
    }
  }
  
  recordBuildResult(result) {
    this.buildHistory.push(result);
    
    // Limit history size
    if (this.buildHistory.length > this.maxHistorySize) {
      this.buildHistory.shift();
    }
    
    // Save to file periodically
    if (this.buildHistory.length % 10 === 0) {
      this.saveBuildHistory();
    }
  }
  
  saveBuildHistory() {
    const outDir = path.join(this.workspace, 'public', 'reports', 'build-monitor');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    
    const outJson = path.join(outDir, 'build-history.json');
    const outHtml = path.join(outDir, 'index.html');
    
    const report = {
      summary: this.generateBuildSummary(),
      history: this.buildHistory,
      generatedAt: new Date().toISOString()
    };
    
    // Save JSON report
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const html = this.generateHtmlReport(report);
    fs.writeFileSync(outHtml, html);
    
    log(`📊 Build history saved to ${outJson} and ${outHtml}`);
  }
  
  generateBuildSummary() {
    const totalBuilds = this.buildHistory.length;
    const successfulBuilds = this.buildHistory.filter(b => b.success).length;
    const failedBuilds = this.buildHistory.filter(b => !b.success).length;
    const successRate = totalBuilds > 0 ? (successfulBuilds / totalBuilds * 100).toFixed(1) : 0;
    
    const recentBuilds = this.buildHistory.slice(-10);
    const recentSuccessRate = recentBuilds.length > 0 ? 
      (recentBuilds.filter(b => b.success).length / recentBuilds.length * 100).toFixed(1) : 0;
    
    return {
      totalBuilds,
      successfulBuilds,
      failedBuilds,
      successRate: `${successRate}%`,
      recentSuccessRate: `${recentSuccessRate}%`,
      lastBuild: this.buildHistory.length > 0 ? this.buildHistory[this.buildHistory.length - 1] : null
    };
  }
  
  generateHtmlReport(report) {
    const { summary, history } = report;
    
    const html = [];
    html.push('<!doctype html>');
    html.push('<meta charset="utf-8"/>');
    html.push('<title>Continuous Build Monitor Report</title>');
    html.push('<style>');
    html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
    html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
    html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
    html.push('.status{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
    html.push('.success{background:rgba(16,185,129,.2);border:1px solid #10b981;color:#10b981}');
    html.push('.failure{background:rgba(239,68,68,.2);border:1px solid #ef4444;color:#ef4444}');
    html.push('.metric{display:inline-block;margin:8px;padding:16px;border-radius:12px;text-align:center;min-width:120px}');
    html.push('.metric-success{background:rgba(16,185,129,.2);border:2px solid #10b981}');
    html.push('.metric-failure{background:rgba(239,68,68,.2);border:2px solid #ef4444}');
    html.push('</style>');
    
    html.push(`<h1>Continuous Build Monitor Report</h1>`);
    html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
    
    // Summary metrics
    html.push(`<div class="card">`);
    html.push(`<h2>Build Summary</h2>`);
    html.push(`<div style="display:flex;justify-content:space-around;flex-wrap:wrap">`);
    html.push(`<div class="metric metric-success">`);
    html.push(`<div style="font-size:24px;font-weight:bold">${summary.totalBuilds}</div>`);
    html.push(`<div>Total Builds</div>`);
    html.push(`</div>`);
    html.push(`<div class="metric metric-success">`);
    html.push(`<div style="font-size:24px;font-weight:bold">${summary.successfulBuilds}</div>`);
    html.push(`<div>Successful</div>`);
    html.push(`</div>`);
    html.push(`<div class="metric ${summary.failedBuilds > 0 ? 'metric-failure' : 'metric-success'}">`);
    html.push(`<div style="font-size:24px;font-weight:bold">${summary.failedBuilds}</div>`);
    html.push(`<div>Failed</div>`);
    html.push(`</div>`);
    html.push(`<div class="metric ${parseFloat(summary.successRate) < 80 ? 'metric-failure' : 'metric-success'}">`);
    html.push(`<div style="font-size:24px;font-weight:bold">${summary.successRate}</div>`);
    html.push(`<div>Success Rate</div>`);
    html.push(`</div>`);
    html.push(`</div>`);
    html.push(`</div>`);
    
    // Recent builds
    html.push(`<div class="card">`);
    html.push(`<h2>Recent Builds</h2>`);
    const recentBuilds = history.slice(-20).reverse();
    recentBuilds.forEach(build => {
      const statusClass = build.success ? 'success' : 'failure';
      const statusIcon = build.success ? '✅' : '❌';
      const statusText = build.success ? 'SUCCESS' : 'FAILED';
      
      html.push(`<div style="margin:8px 0;padding:8px;border-radius:8px;background:rgba(255,255,255,.03)">`);
      html.push(`<strong>${statusIcon} ${build.file}</strong>`);
      html.push(`<span class="status ${statusClass}">${statusText}</span>`);
      html.push(`<div style="margin-top:4px;color:#6b7280;font-size:12px">${build.timestamp}</div>`);
      
      if (!build.success && build.error) {
        html.push(`<div style="margin-top:4px;color:#ef4444;font-size:12px"><code>${build.error}</code></div>`);
      }
      
      html.push(`</div>`);
    });
    html.push(`</div>`);
    
    return html.join('\n');
  }
  
  getStatus() {
    return {
      isRunning: !!this.watcher,
      isBuilding: this.isBuilding,
      queueSize: this.buildQueue.length,
      lastBuildTime: this.lastBuildTime,
      buildHistory: this.buildHistory.length,
      summary: this.generateBuildSummary()
    };
  }
}

async function main() {
  const monitor = new ContinuousBuildMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log('🛑 Received SIGINT, shutting down gracefully...');
    monitor.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('🛑 Received SIGTERM, shutting down gracefully...');
    monitor.stop();
    process.exit(0);
  });
  
  // Start monitoring
  monitor.start();
  
  // Keep the process alive
  setInterval(() => {
    // Save build history every 5 minutes
    if (monitor.buildHistory.length > 0) {
      monitor.saveBuildHistory();
    }
  }, 5 * 60 * 1000);
  
  log('🔄 Continuous build monitor is running...');
  log('   Press Ctrl+C to stop');
}

if (require.main === module) {
  main();
}

module.exports = {
  ContinuousBuildMonitor
};