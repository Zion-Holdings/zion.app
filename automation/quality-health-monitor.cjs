#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  healthFile: path.join(__dirname, 'quality-system-health.json'),
  checkInterval: 3600000, // 1 hour in milliseconds
  maxFailures: 3,
  alertThreshold: 2
};

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  
  // Write to log file
  const logFile = path.join(CONFIG.logDir, 'quality-health-monitor.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

function loadHealthData() {
  try {
    if (fs.existsSync(CONFIG.healthFile)) {
      return JSON.parse(fs.readFileSync(CONFIG.healthFile, 'utf8'));
    }
  } catch (error) {
    log(`Error loading health data: ${error.message}`, 'WARNING');
  }
  
  return {
    lastCheck: null,
    totalChecks: 0,
    successfulChecks: 0,
    failedChecks: 0,
    consecutiveFailures: 0,
    lastFailure: null,
    systemStatus: 'UNKNOWN'
  };
}

function saveHealthData(healthData) {
  try {
    fs.writeFileSync(CONFIG.healthFile, JSON.stringify(healthData, null, 2));
  } catch (error) {
    log(`Error saving health data: ${error.message}`, 'ERROR');
  }
}

function runHealthCheck() {
  const healthData = loadHealthData();
  const startTime = Date.now();
  
  log('Starting quality system health check...');
  
  try {
    // Test 1: Basic quality check
    log('Running basic quality check...');
    execSync('npm run quality:check', { stdio: 'pipe' });
    
    // Test 2: Check if reports are being generated
    log('Checking report generation...');
    const reportDir = path.join(process.cwd(), 'public', 'reports', 'build-quality');
    if (!fs.existsSync(reportDir)) {
      throw new Error('Build quality reports directory not found');
    }
    
    const reportFiles = fs.readdirSync(reportDir);
    if (reportFiles.length === 0) {
      throw new Error('No report files generated');
    }
    
    // Test 3: Check log generation
    log('Checking log generation...');
    if (!fs.existsSync(CONFIG.logDir)) {
      throw new Error('Log directory not found');
    }
    
    const logFiles = fs.readdirSync(CONFIG.logDir).filter(f => f.includes('quality'));
    if (logFiles.length === 0) {
      throw new Error('No quality log files found');
    }
    
    // Test 4: Check file analysis coverage
    log('Checking file analysis coverage...');
    const tsxFiles = execSync('find . -name "*.tsx" -o -name "*.jsx"', { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean)
      .filter(f => !f.includes('node_modules') && !f.includes('.next') && !f.includes('out'));
    
    if (tsxFiles.length === 0) {
      throw new Error('No TypeScript/JSX files found to analyze');
    }
    
    // All tests passed
    const checkTime = Date.now() - startTime;
    healthData.lastCheck = new Date().toISOString();
    healthData.totalChecks++;
    healthData.successfulChecks++;
    healthData.consecutiveFailures = 0;
    healthData.systemStatus = 'HEALTHY';
    healthData.lastCheckTime = checkTime;
    
    log(`Health check passed in ${checkTime}ms`, 'INFO');
    
  } catch (error) {
    const checkTime = Date.now() - startTime;
    healthData.lastCheck = new Date().toISOString();
    healthData.totalChecks++;
    healthData.failedChecks++;
    healthData.consecutiveFailures++;
    healthData.lastFailure = {
      timestamp: new Date().toISOString(),
      error: error.message,
      checkTime
    };
    
    if (healthData.consecutiveFailures >= CONFIG.maxFailures) {
      healthData.systemStatus = 'CRITICAL';
      log(`System status: CRITICAL - ${healthData.consecutiveFailures} consecutive failures`, 'ERROR');
    } else if (healthData.consecutiveFailures >= CONFIG.alertThreshold) {
      healthData.systemStatus = 'WARNING';
      log(`System status: WARNING - ${healthData.consecutiveFailures} consecutive failures`, 'WARNING');
    } else {
      healthData.systemStatus = 'DEGRADED';
      log(`System status: DEGRADED - ${healthData.consecutiveFailures} consecutive failures`, 'WARNING');
    }
    
    log(`Health check failed: ${error.message}`, 'ERROR');
  }
  
  // Calculate health metrics
  healthData.successRate = healthData.totalChecks > 0 ? 
    (healthData.successfulChecks / healthData.totalChecks * 100).toFixed(2) : 0;
  
  healthData.uptime = healthData.totalChecks > 0 ? 
    (healthData.successfulChecks / healthData.totalChecks * 100).toFixed(2) : 0;
  
  // Save health data
  saveHealthData(healthData);
  
  return healthData;
}

function generateHealthReport(healthData) {
  const reportDir = path.join(process.cwd(), 'public', 'reports', 'quality-health');
  ensureDir(reportDir);
  
  // Generate JSON report
  const jsonReport = path.join(reportDir, 'health-latest.json');
  fs.writeFileSync(jsonReport, JSON.stringify(healthData, null, 2));
  
  // Generate HTML report
  const htmlReport = path.join(reportDir, 'index.html');
  const html = generateHealthHTMLReport(healthData);
  fs.writeFileSync(htmlReport, html);
  
  // Generate markdown report
  const mdReport = path.join(reportDir, 'health-report.md');
  const markdown = generateHealthMarkdownReport(healthData);
  fs.writeFileSync(mdReport, markdown);
  
  return { jsonReport, htmlReport, mdReport };
}

function generateHealthHTMLReport(healthData) {
  const statusColors = {
    HEALTHY: '#10b981',
    WARNING: '#f59e0b',
    DEGRADED: '#f59e0b',
    CRITICAL: '#ef4444',
    UNKNOWN: '#6b7280'
  };
  
  const statusColor = statusColors[healthData.systemStatus] || '#6b7280';
  
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quality System Health Monitor</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #0f172a; color: #e2e8f0; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #1e293b, #334155); padding: 30px; border-radius: 12px; margin-bottom: 30px; }
        .status-badge { display: inline-block; padding: 8px 16px; border-radius: 999px; font-weight: bold; font-size: 1.1rem; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric-card { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center; }
        .metric-number { font-size: 2rem; font-weight: bold; margin-bottom: 8px; }
        .success { color: #10b981; }
        .warning { color: #f59e0b; }
        .error { color: #ef4444; }
        .last-failure { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .timestamp { color: #64748b; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏥 Quality System Health Monitor</h1>
            <p class="timestamp">Last Updated: ${healthData.lastCheck ? new Date(healthData.lastCheck).toLocaleString() : 'Never'}</p>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
            <div class="status-badge" style="background: rgba(${statusColor.replace('#', '')}, 0.2); color: ${statusColor}; border: 1px solid ${statusColor};">
                ${healthData.systemStatus}
            </div>
        </div>
        
        <div class="metrics">
            <div class="metric-card">
                <div class="metric-number">${healthData.totalChecks}</div>
                <div>Total Checks</div>
            </div>
            <div class="metric-card">
                <div class="metric-number success">${healthData.successfulChecks}</div>
                <div>Successful</div>
            </div>
            <div class="metric-card">
                <div class="metric-number ${healthData.failedChecks > 0 ? 'error' : 'success'}">${healthData.failedChecks}</div>
                <div>Failed</div>
            </div>
            <div class="metric-card">
                <div class="metric-number ${healthData.successRate >= 95 ? 'success' : healthData.successRate >= 80 ? 'warning' : 'error'}">${healthData.successRate}%</div>
                <div>Success Rate</div>
            </div>
        </div>
        
        <div class="metrics">
            <div class="metric-card">
                <div class="metric-number ${healthData.consecutiveFailures === 0 ? 'success' : healthData.consecutiveFailures >= CONFIG.maxFailures ? 'error' : 'warning'}">${healthData.consecutiveFailures}</div>
                <div>Consecutive Failures</div>
            </div>
            <div class="metric-card">
                <div class="metric-number">${healthData.lastCheckTime ? healthData.lastCheckTime + 'ms' : 'N/A'}</div>
                <div>Last Check Time</div>
            </div>
        </div>
        
        ${healthData.lastFailure ? `
        <div class="last-failure">
            <h3>Last Failure Details</h3>
            <p><strong>Time:</strong> ${new Date(healthData.lastFailure.timestamp).toLocaleString()}</p>
            <p><strong>Error:</strong> ${healthData.lastFailure.error}</p>
            <p><strong>Check Time:</strong> ${healthData.lastFailure.checkTime}ms</p>
        </div>
        ` : ''}
        
        <div style="text-align: center; margin-top: 30px;">
            <p class="timestamp">System automatically monitors quality automation health every hour</p>
        </div>
    </div>
</body>
</html>`;
  
  return html;
}

function generateHealthMarkdownReport(healthData) {
  let markdown = `# 🏥 Quality System Health Monitor

Last Updated: ${healthData.lastCheck ? new Date(healthData.lastCheck).toLocaleString() : 'Never'}

## 📊 System Status

**Status**: ${healthData.systemStatus}
**Success Rate**: ${healthData.successRate}%
**Uptime**: ${healthData.uptime}%

## 📈 Metrics

- **Total Checks**: ${healthData.totalChecks}
- **Successful Checks**: ${healthData.successfulChecks}
- **Failed Checks**: ${healthData.failedChecks}
- **Consecutive Failures**: ${healthData.consecutiveFailures}
- **Last Check Time**: ${healthData.lastCheckTime ? healthData.lastCheckTime + 'ms' : 'N/A'}

`;

  if (healthData.lastFailure) {
    markdown += `## 🚨 Last Failure

- **Time**: ${new Date(healthData.lastFailure.timestamp).toLocaleString()}
- **Error**: ${healthData.lastFailure.error}
- **Check Time**: ${healthData.lastFailure.checkTime}ms

`;
  }
  
  markdown += `## 🔧 Health Thresholds

- **Alert Threshold**: ${CONFIG.alertThreshold} consecutive failures
- **Critical Threshold**: ${CONFIG.maxFailures} consecutive failures
- **Check Interval**: Every hour

## 📝 Notes

This system automatically monitors the health of your quality automation system.
If the system status becomes CRITICAL, immediate attention is required.
`;

  return markdown;
}

function startMonitoring() {
  log('Starting Quality System Health Monitor...');
  
  // Ensure directories exist
  ensureDir(CONFIG.logDir);
  
  // Run initial health check
  const healthData = runHealthCheck();
  generateHealthReport(healthData);
  
  // Set up periodic monitoring
  setInterval(() => {
    try {
      const healthData = runHealthCheck();
      generateHealthReport(healthData);
      
      // Alert if system is critical
      if (healthData.systemStatus === 'CRITICAL') {
        log('🚨 SYSTEM CRITICAL: Quality automation system requires immediate attention!', 'CRITICAL');
        // Here you could add notifications (email, Slack, etc.)
      } else if (healthData.systemStatus === 'WARNING') {
        log('⚠️  SYSTEM WARNING: Quality automation system showing signs of degradation', 'WARNING');
      }
      
    } catch (error) {
      log(`Error in health monitoring: ${error.message}`, 'ERROR');
    }
  }, CONFIG.checkInterval);
  
  log(`Health monitoring started. Checking every ${CONFIG.checkInterval / 60000} minutes.`);
}

// Main execution
if (require.main === module) {
  if (process.argv.includes('--once')) {
    // Run health check once
    const healthData = runHealthCheck();
    generateHealthReport(healthData);
    console.log(`Health check completed. Status: ${healthData.systemStatus}`);
  } else {
    // Start continuous monitoring
    startMonitoring();
  }
}

module.exports = { runHealthCheck, generateHealthReport, startMonitoring };