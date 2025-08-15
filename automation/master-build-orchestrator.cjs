#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'master-build-orchestrator.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class MasterBuildOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.systems = new Map();
    this.buildHistory = [];
    this.maxHistorySize = 100;
  }
  
  async start() {
    log('🚀 Starting Master Build Orchestrator...');
    
    try {
      // Initialize all build automation systems
      await this.initializeSystems();
      
      // Set up monitoring and health checks
      this.setupMonitoring();
      
      // Start continuous monitoring
      this.startContinuousMonitoring();
      
      log('✅ Master Build Orchestrator started successfully');
      
    } catch (error) {
      log(`❌ Failed to start Master Build Orchestrator: ${error.message}`);
      throw error;
    }
  }
  
  async initializeSystems() {
    log('🔧 Initializing build automation systems...');
    
    // Initialize page validator
    this.systems.set('pageValidator', {
      name: 'Page Structure Validator',
      status: 'initializing',
      lastRun: null,
      errorCount: 0
    });
    
    // Initialize health checker
    this.systems.set('healthChecker', {
      name: 'Pre-Build Health Checker',
      status: 'initializing',
      lastRun: null,
      errorCount: 0
    });
    
    // Initialize build recovery
    this.systems.set('buildRecovery', {
      name: 'Build Failure Recovery',
      status: 'initializing',
      lastRun: null,
      errorCount: 0
    });
    
    // Initialize continuous monitor
    this.systems.set('continuousMonitor', {
      name: 'Continuous Build Monitor',
      status: 'initializing',
      lastRun: null,
      errorCount: 0
    });
    
    // Test each system
    await this.testSystems();
    
    log('✅ All build automation systems initialized');
  }
  
  async testSystems() {
    log('🧪 Testing build automation systems...');
    
    const testResults = [];
    
    // Test page validator
    try {
      log('  Testing page validator...');
      execSync('npm run build:validate', { 
        stdio: 'pipe', 
        cwd: this.workspace,
        timeout: 30000
      });
      this.systems.get('pageValidator').status = 'ready';
      this.systems.get('pageValidator').lastRun = new Date().toISOString();
      testResults.push({ system: 'pageValidator', status: 'PASS' });
    } catch (error) {
      this.systems.get('pageValidator').status = 'error';
      this.systems.get('pageValidator').errorCount++;
      testResults.push({ system: 'pageValidator', status: 'FAIL', error: error.message });
    }
    
    // Test health checker
    try {
      log('  Testing health checker...');
      execSync('npm run build:health-check', { 
        stdio: 'pipe', 
        cwd: this.workspace,
        timeout: 30000
      });
      this.systems.get('healthChecker').status = 'ready';
      this.systems.get('healthChecker').lastRun = new Date().toISOString();
      testResults.push({ system: 'healthChecker', status: 'PASS' });
    } catch (error) {
      this.systems.get('healthChecker').status = 'error';
      this.systems.get('healthChecker').errorCount++;
      testResults.push({ system: 'healthChecker', status: 'FAIL', error: error.message });
    }
    
    // Test build recovery
    try {
      log('  Testing build recovery...');
      // Create a test error log
      const testErrorLog = 'Test error: page without a React Component as default export in pages/';
      const testErrorFile = path.join(this.workspace, 'test-error.log');
      fs.writeFileSync(testErrorFile, testErrorLog);
      
      execSync(`node automation/build-failure-recovery.cjs ${testErrorFile}`, { 
        stdio: 'pipe', 
        cwd: this.workspace,
        timeout: 30000
      });
      
      // Clean up test file
      fs.unlinkSync(testErrorFile);
      
      this.systems.get('buildRecovery').status = 'ready';
      this.systems.get('buildRecovery').lastRun = new Date().toISOString();
      testResults.push({ system: 'buildRecovery', status: 'PASS' });
    } catch (error) {
      this.systems.get('buildRecovery').status = 'error';
      this.systems.get('buildRecovery').errorCount++;
      testResults.push({ system: 'buildRecovery', status: 'FAIL', error: error.message });
    }
    
    // Log test results
    log('📊 System test results:');
    testResults.forEach(result => {
      const statusIcon = result.status === 'PASS' ? '✅' : '❌';
      log(`   ${statusIcon} ${result.system}: ${result.status}`);
      if (result.error) {
        log(`      Error: ${result.error}`);
      }
    });
    
    // Check if all critical systems are ready
    const criticalSystems = ['pageValidator', 'healthChecker'];
    const criticalStatus = criticalSystems.every(system => 
      this.systems.get(system).status === 'ready'
    );
    
    if (!criticalStatus) {
      throw new Error('Critical build automation systems failed to initialize');
    }
  }
  
  setupMonitoring() {
    log('📡 Setting up system monitoring...');
    
    // Monitor system health every 5 minutes
    setInterval(() => {
      this.checkSystemHealth();
    }, 5 * 60 * 1000);
    
    // Save system status every 10 minutes
    setInterval(() => {
      this.saveSystemStatus();
    }, 10 * 60 * 1000);
  }
  
  startContinuousMonitoring() {
    log('🔄 Starting continuous build monitoring...');
    
    // Start the continuous build monitor
    try {
      const { ContinuousBuildMonitor } = require('./continuous-build-monitor.cjs');
      this.continuousMonitor = new ContinuousBuildMonitor();
      this.continuousMonitor.start();
      
      this.systems.get('continuousMonitor').status = 'running';
      this.systems.get('continuousMonitor').lastRun = new Date().toISOString();
      
      log('✅ Continuous build monitoring started');
      
    } catch (error) {
      log(`❌ Failed to start continuous monitoring: ${error.message}`);
      this.systems.get('continuousMonitor').status = 'error';
      this.systems.get('continuousMonitor').errorCount++;
    }
  }
  
  async checkSystemHealth() {
    log('🏥 Checking system health...');
    
    for (const [systemName, system] of this.systems) {
      try {
        // Check if system is responsive
        if (system.status === 'running' && systemName === 'continuousMonitor') {
          const status = this.continuousMonitor.getStatus();
          system.lastRun = new Date().toISOString();
          
          if (status.isRunning) {
            system.status = 'running';
          } else {
            system.status = 'error';
            system.errorCount++;
          }
        }
        
        // Check for systems that haven't run recently
        if (system.lastRun) {
          const lastRun = new Date(system.lastRun);
          const now = new Date();
          const timeSinceLastRun = now - lastRun;
          
          // If a system hasn't run in over an hour, mark it as stale
          if (timeSinceLastRun > 60 * 60 * 1000) {
            system.status = 'stale';
            log(`⚠️ System ${systemName} is stale (last run: ${system.lastRun})`);
          }
        }
        
      } catch (error) {
        log(`❌ Health check failed for ${systemName}: ${error.message}`);
        system.status = 'error';
        system.errorCount++;
      }
    }
  }
  
  async runSmartBuild() {
    log('🧠 Running smart build process...');
    
    const buildStart = Date.now();
    
    try {
      // Step 1: Pre-build health check
      log('  Step 1: Pre-build health check');
      execSync('npm run build:health-check', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 60000
      });
      
      // Step 2: Page structure validation
      log('  Step 2: Page structure validation');
      execSync('npm run build:validate', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 60000
      });
      
      // Step 3: Run the actual build
      log('  Step 3: Building project');
      execSync('npm run build', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 300000 // 5 minutes
      });
      
      const buildDuration = Date.now() - buildStart;
      
      // Record successful build
      this.recordBuildResult({
        type: 'smart_build',
        success: true,
        duration: buildDuration,
        timestamp: new Date().toISOString()
      });
      
      log(`✅ Smart build completed successfully in ${buildDuration}ms`);
      return { success: true, duration: buildDuration };
      
    } catch (error) {
      const buildDuration = Date.now() - buildStart;
      
      // Record failed build
      this.recordBuildResult({
        type: 'smart_build',
        success: false,
        duration: buildDuration,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      
      log(`❌ Smart build failed after ${buildDuration}ms: ${error.message}`);
      
      // Try to auto-recover
      log('🔧 Attempting automatic recovery...');
      try {
        await this.autoRecoverBuild();
        return { success: true, duration: buildDuration, recovered: true };
      } catch (recoveryError) {
        log(`❌ Auto-recovery failed: ${recoveryError.message}`);
        return { success: false, duration: buildDuration, error: error.message };
      }
    }
  }
  
  async autoRecoverBuild() {
    log('🚑 Initiating automatic build recovery...');
    
    try {
      // Run build failure recovery
      execSync('npm run build:recovery', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 120000
      });
      
      // Try building again
      execSync('npm run build', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 300000
      });
      
      log('✅ Build recovered successfully');
      
    } catch (error) {
      throw new Error(`Build recovery failed: ${error.message}`);
    }
  }
  
  recordBuildResult(result) {
    this.buildHistory.push(result);
    
    // Limit history size
    if (this.buildHistory.length > this.maxHistorySize) {
      this.buildHistory.shift();
    }
  }
  
  saveSystemStatus() {
    const outDir = path.join(this.workspace, 'public', 'reports', 'build-orchestrator');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    
    const outJson = path.join(outDir, 'system-status.json');
    const outHtml = path.join(outDir, 'index.html');
    
    const report = {
      systems: Object.fromEntries(this.systems),
      buildHistory: this.buildHistory.slice(-20), // Last 20 builds
      generatedAt: new Date().toISOString()
    };
    
    // Save JSON report
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const html = this.generateHtmlReport(report);
    fs.writeFileSync(outHtml, html);
    
    log(`📊 System status saved to ${outJson} and ${outHtml}`);
  }
  
  generateHtmlReport(report) {
    const { systems, buildHistory } = report;
    
    const html = [];
    html.push('<!doctype html>');
    html.push('<meta charset="utf-8"/>');
    html.push('<title>Master Build Orchestrator Status</title>');
    html.push('<style>');
    html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
    html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
    html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
    html.push('.status{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
    html.push('.ready{background:rgba(16,185,129,.2);border:1px solid #10b981;color:#10b981}');
    html.push('.running{background:rgba(59,130,246,.2);border:1px solid #3b82f6;color:#3b82f6}');
    html.push('.error{background:rgba(239,68,68,.2);border:1px solid #ef4444;color:#ef4444}');
    html.push('.stale{background:rgba(245,158,11,.2);border:1px solid #f59e0b;color:#f59e0b}');
    html.push('</style>');
    
    html.push(`<h1>Master Build Orchestrator Status</h1>`);
    html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
    
    // System status
    html.push(`<div class="card">`);
    html.push(`<h2>System Status</h2>`);
    Object.entries(systems).forEach(([name, system]) => {
      const statusClass = system.status;
      const statusIcon = system.status === 'ready' || system.status === 'running' ? '✅' : 
                        system.status === 'error' ? '❌' : '⚠️';
      
      html.push(`<div style="margin:8px 0;padding:8px;border-radius:8px;background:rgba(255,255,255,.03)">`);
      html.push(`<strong>${statusIcon} ${system.name}</strong>`);
      html.push(`<span class="status ${statusClass}">${system.status.toUpperCase()}</span>`);
      html.push(`<div style="margin-top:4px;color:#6b7280;font-size:12px">`);
      html.push(`Last run: ${system.lastRun || 'Never'}`);
      if (system.errorCount > 0) {
        html.push(` | Errors: ${system.errorCount}`);
      }
      html.push(`</div>`);
      html.push(`</div>`);
    });
    html.push(`</div>`);
    
    // Recent builds
    if (buildHistory.length > 0) {
      html.push(`<div class="card">`);
      html.push(`<h2>Recent Builds</h2>`);
      buildHistory.reverse().forEach(build => {
        const statusClass = build.success ? 'ready' : 'error';
        const statusIcon = build.success ? '✅' : '❌';
        const statusText = build.success ? 'SUCCESS' : 'FAILED';
        
        html.push(`<div style="margin:8px 0;padding:8px;border-radius:8px;background:rgba(255,255,255,.03)">`);
        html.push(`<strong>${statusIcon} ${build.type}</strong>`);
        html.push(`<span class="status ${statusClass}">${statusText}</span>`);
        html.push(`<div style="margin-top:4px;color:#6b7280;font-size:12px">`);
        html.push(`${build.timestamp} | Duration: ${build.duration}ms`);
        if (build.recovered) {
          html.push(` | Recovered`);
        }
        html.push(`</div>`);
        
        if (!build.success && build.error) {
          html.push(`<div style="margin-top:4px;color:#ef4444;font-size:12px"><code>${build.error}</code></div>`);
        }
        
        html.push(`</div>`);
      });
      html.push(`</div>`);
    }
    
    return html.join('\n');
  }
  
  getStatus() {
    return {
      systems: Object.fromEntries(this.systems),
      buildHistory: this.buildHistory.length,
      isRunning: true
    };
  }
  
  stop() {
    log('🛑 Stopping Master Build Orchestrator...');
    
    if (this.continuousMonitor) {
      this.continuousMonitor.stop();
    }
    
    // Save final status
    this.saveSystemStatus();
    
    log('✅ Master Build Orchestrator stopped');
  }
}

async function main() {
  const orchestrator = new MasterBuildOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log('🛑 Received SIGINT, shutting down gracefully...');
    orchestrator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('🛑 Received SIGTERM, shutting down gracefully...');
    orchestrator.stop();
    process.exit(0);
  });
  
  try {
    await orchestrator.start();
    
    // Keep the process alive
    log('🔄 Master Build Orchestrator is running...');
    log('   Press Ctrl+C to stop');
    
  } catch (error) {
    log(`❌ Failed to start Master Build Orchestrator: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  MasterBuildOrchestrator
};