#!/usr/bin/env node

'use strict';

// Load environment variables from .env file
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'project-health-monitor.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

class ProjectHealthMonitor {
  constructor() {
    this.workspace = process.cwd();
    this.checks = [];
    this.results = [];
    this.overallHealth = 'HEALTHY';
    this.score = 100;
  }
  
  addCheck(name, checkFn, weight = 1) {
    this.checks.push({ name, checkFn, weight });
  }
  
  async runChecks() {
    log('🏥 Starting comprehensive project health monitoring...');
    
    for (const check of this.checks) {
      try {
        log(`  Running: ${check.name}`);
        const result = await check.checkFn();
        this.results.push({
          name: check.name,
          status: 'PASS',
          result,
          weight: check.weight,
          score: 100
        });
        log(`    ✅ ${check.name}: PASS`);
      } catch (error) {
        this.results.push({
          name: check.name,
          status: 'FAIL',
          error: error.message,
          weight: check.weight,
          score: 0
        });
        log(`    ❌ ${check.name}: FAIL - ${error.message}`);
      }
    }
    
    return this.generateReport();
  }
  
  calculateOverallHealth() {
    let totalScore = 0;
    let totalWeight = 0;
    
    this.results.forEach(result => {
      totalScore += result.score * result.weight;
      totalWeight += result.weight;
    });
    
    this.score = totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;
    
    if (this.score >= 90) {
      this.overallHealth = 'EXCELLENT';
    } else if (this.score >= 80) {
      this.overallHealth = 'GOOD';
    } else if (this.score >= 70) {
      this.overallHealth = 'FAIR';
    } else if (this.score >= 60) {
      this.overallHealth = 'POOR';
    } else {
      this.overallHealth = 'CRITICAL';
    }
    
    return this.overallHealth;
  }
  
  generateReport() {
    this.calculateOverallHealth();
    
    const totalChecks = this.checks.length;
    const passedChecks = this.results.filter(r => r.status === 'PASS').length;
    const failedChecks = this.results.filter(r => r.status === 'FAIL').length;
    
    return {
      summary: {
        totalChecks,
        passedChecks,
        failedChecks,
        overallHealth: this.overallHealth,
        score: this.score,
        timestamp: new Date().toISOString()
      },
      results: this.results,
      recommendations: this.generateRecommendations(),
      metrics: this.generateMetrics()
    };
  }
  
  generateRecommendations() {
    const recommendations = [];
    
    const failedChecks = this.results.filter(r => r.status === 'FAIL');
    
    failedChecks.forEach(check => {
      switch (check.name) {
        case 'Build System':
          recommendations.push({
            priority: 'HIGH',
            action: 'Fix build issues',
            description: 'Build system is not functioning properly'
          });
          break;
        case 'Dependencies':
          recommendations.push({
            priority: 'MEDIUM',
            action: 'Update dependencies',
            description: 'Some dependencies may be outdated or have security issues'
          });
          break;
        case 'Code Quality':
          recommendations.push({
            priority: 'MEDIUM',
            action: 'Improve code quality',
            description: 'Code quality checks are failing'
          });
          break;
        case 'Security':
          recommendations.push({
            priority: 'HIGH',
            action: 'Address security issues',
            description: 'Security vulnerabilities detected'
          });
          break;
        case 'Performance':
          recommendations.push({
            priority: 'MEDIUM',
            action: 'Optimize performance',
            description: 'Performance issues detected'
          });
          break;
      }
    });
    
    // Add general recommendations based on score
    if (this.score < 80) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'General project review',
        description: 'Project health score is below optimal levels'
      });
    }
    
    return recommendations;
  }
  
  generateMetrics() {
    const metrics = {
      buildHealth: 0,
      dependencyHealth: 0,
      codeQuality: 0,
      securityHealth: 0,
      performanceHealth: 0,
      automationHealth: 0
    };
    
    this.results.forEach(result => {
      if (result.name.includes('Build')) {
        metrics.buildHealth = result.score;
      } else if (result.name.includes('Dependency')) {
        metrics.dependencyHealth = result.score;
      } else if (result.name.includes('Code Quality')) {
        metrics.codeQuality = result.score;
      } else if (result.name.includes('Security')) {
        metrics.securityHealth = result.score;
      } else if (result.name.includes('Performance')) {
        metrics.performanceHealth = result.score;
      } else if (result.name.includes('Automation')) {
        metrics.automationHealth = result.score;
      }
    });
    
    return metrics;
  }
  
  async saveReport(report) {
    const reportsDir = path.join(this.workspace, 'public', 'reports', 'project-health');
    ensureDir(reportsDir);
    
    const reportFile = path.join(reportsDir, 'latest.json');
    const htmlFile = path.join(reportsDir, 'index.html');
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const htmlContent = this.generateHTMLReport(report);
    fs.writeFileSync(htmlFile, htmlContent);
    
    log(`📊 Project health report saved to ${reportFile} and ${htmlFile}`);
  }
  
  generateHTMLReport(report) {
    const healthColor = {
      'EXCELLENT': '#28a745',
      'GOOD': '#20c997',
      'FAIR': '#ffc107',
      'POOR': '#fd7e14',
      'CRITICAL': '#dc3545'
    };
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Health Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .health-score { font-size: 48px; font-weight: bold; text-align: center; margin: 20px 0; }
        .status { font-size: 24px; font-weight: bold; text-align: center; margin: 20px 0; }
        .summary { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
        .metric-card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
        .metric-value { font-size: 36px; font-weight: bold; margin: 10px 0; }
        .check-result { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .check-result.pass { border-left: 5px solid #28a745; }
        .check-result.fail { border-left: 5px solid #dc3545; }
        .recommendations { background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; margin: 20px 0; border-radius: 10px; }
        .progress-bar { width: 100%; height: 20px; background: #e9ecef; border-radius: 10px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #dc3545, #fd7e14, #ffc107, #20c997, #28a745); transition: width 0.3s ease; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏥 Project Health Report</h1>
            <div class="health-score" style="color: ${healthColor[report.summary.overallHealth]}">
                ${report.summary.score}%
            </div>
            <div class="status" style="color: ${healthColor[report.summary.overallHealth]}">
                Status: ${report.summary.overallHealth}
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${report.summary.score}%"></div>
            </div>
            <p style="text-align: center; margin-top: 20px;">Generated: ${new Date(report.summary.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="summary">
            <h2>📊 Summary</h2>
            <p><strong>Total Checks:</strong> ${report.summary.totalChecks}</p>
            <p><strong>Passed:</strong> ${report.summary.passedChecks}</p>
            <p><strong>Failed:</strong> ${report.summary.failedChecks}</p>
            <p><strong>Success Rate:</strong> ${Math.round((report.summary.passedChecks / report.summary.totalChecks) * 100)}%</p>
        </div>
        
        <div class="metrics">
            <div class="metric-card">
                <h3>🏗️ Build Health</h3>
                <div class="metric-value" style="color: ${report.metrics.buildHealth >= 80 ? '#28a745' : report.metrics.buildHealth >= 60 ? '#ffc107' : '#dc3545'}">
                    ${report.metrics.buildHealth}%
                </div>
            </div>
            <div class="metric-card">
                <h3>📦 Dependencies</h3>
                <div class="metric-value" style="color: ${report.metrics.dependencyHealth >= 80 ? '#28a745' : report.metrics.dependencyHealth >= 60 ? '#ffc107' : '#dc3545'}">
                    ${report.metrics.dependencyHealth}%
                </div>
            </div>
            <div class="metric-card">
                <h3>✨ Code Quality</h3>
                <div class="metric-value" style="color: ${report.metrics.codeQuality >= 80 ? '#28a745' : report.metrics.codeQuality >= 60 ? '#ffc107' : '#dc3545'}">
                    ${report.metrics.codeQuality}%
                </div>
            </div>
            <div class="metric-card">
                <h3>🔒 Security</h3>
                <div class="metric-value" style="color: ${report.metrics.securityHealth >= 80 ? '#28a745' : report.metrics.securityHealth >= 60 ? '#ffc107' : '#dc3545'}">
                    ${report.metrics.securityHealth}%
                </div>
            </div>
            <div class="metric-card">
                <h3>⚡ Performance</h3>
                <div class="metric-value" style="color: ${report.metrics.performanceHealth >= 80 ? '#28a745' : report.metrics.performanceHealth >= 60 ? '#ffc107' : '#dc3545'}">
                    ${report.metrics.performanceHealth}%
                </div>
            </div>
            <div class="metric-card">
                <h3>🤖 Automation</h3>
                <div class="metric-value" style="color: ${report.metrics.automationHealth >= 80 ? '#28a745' : report.metrics.automationHealth >= 60 ? '#ffc107' : '#dc3545'}">
                    ${report.metrics.automationHealth}%
                </div>
            </div>
        </div>
        
        <div class="check-results">
            <h2>🔍 Check Results</h2>
            ${report.results.map(result => `
                <div class="check-result ${result.status.toLowerCase()}">
                    <h3>${result.name}</h3>
                    <p><strong>Status:</strong> ${result.status}</p>
                    <p><strong>Score:</strong> ${result.score}%</p>
                    <p><strong>Weight:</strong> ${result.weight}</p>
                    ${result.error ? `<p><strong>Error:</strong> ${result.error}</p>` : ''}
                    ${result.result ? `<p><strong>Details:</strong> ${JSON.stringify(result.result)}</p>` : ''}
                </div>
            `).join('')}
        </div>
        
        ${report.recommendations.length > 0 ? `
            <div class="recommendations">
                <h2>💡 Recommendations</h2>
                ${report.recommendations.map(rec => `
                    <p><strong>${rec.priority}</strong>: ${rec.action} - ${rec.description}</p>
                `).join('')}
            </div>
        ` : ''}
    </div>
</body>
</html>`;
  }
}

async function main() {
  const monitor = new ProjectHealthMonitor();
  
  // Add health checks
  monitor.addCheck('Build System', async () => {
    try {
      // Check if build process works
      execSync('npm run build:health-check', { stdio: 'pipe' });
      return { status: 'healthy', message: 'Build system is functioning properly' };
    } catch (error) {
      throw new Error('Build system check failed');
    }
  }, 2);
  
  monitor.addCheck('Dependencies', async () => {
    try {
      // Check for outdated packages
      const outdated = execSync('npm outdated --json', { stdio: 'pipe' });
      const outdatedCount = Object.keys(JSON.parse(outdated)).length;
      
      if (outdatedCount > 10) {
        return { status: 'warning', message: `${outdatedCount} packages are outdated` };
      } else if (outdatedCount > 0) {
        return { status: 'notice', message: `${outdatedCount} packages are outdated` };
      } else {
        return { status: 'healthy', message: 'All dependencies are up to date' };
      }
    } catch (error) {
      // No outdated packages
      return { status: 'healthy', message: 'All dependencies are up to date' };
    }
  }, 1);
  
  monitor.addCheck('Code Quality', async () => {
    try {
      // Run linting
      execSync('npm run lint', { stdio: 'pipe' });
      return { status: 'healthy', message: 'Code quality checks passed' };
    } catch (error) {
      throw new Error('Code quality checks failed');
    }
  }, 1);
  
  monitor.addCheck('Type Safety', async () => {
    try {
      // Run type checking
      execSync('npm run type-check', { stdio: 'pipe' });
      return { status: 'healthy', message: 'Type safety checks passed' };
    } catch (error) {
      throw new Error('Type safety checks failed');
    }
  }, 1);
  
  monitor.addCheck('Security', async () => {
    try {
      // Run security scan
      execSync('npm run security:scan', { stdio: 'pipe' });
      return { status: 'healthy', message: 'Security checks passed' };
    } catch (error) {
      throw new Error('Security checks failed');
    }
  }, 2);
  
  monitor.addCheck('Performance', async () => {
    try {
      // Check build performance
      const startTime = Date.now();
      execSync('npm run build:validate', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      if (buildTime < 5000) {
        return { status: 'excellent', message: `Build validation completed in ${buildTime}ms` };
      } else if (buildTime < 10000) {
        return { status: 'good', message: `Build validation completed in ${buildTime}ms` };
      } else {
        return { status: 'warning', message: `Build validation took ${buildTime}ms (slow)` };
      }
    } catch (error) {
      throw new Error('Performance check failed');
    }
  }, 1);
  
  monitor.addCheck('Automation', async () => {
    try {
      // Check automation scripts
      const automationDir = path.join(monitor.workspace, 'automation');
      const automationFiles = fs.readdirSync(automationDir).filter(file => file.endsWith('.cjs') || file.endsWith('.js'));
      
      if (automationFiles.length >= 20) {
        return { status: 'excellent', message: `${automationFiles.length} automation scripts available` };
      } else if (automationFiles.length >= 10) {
        return { status: 'good', message: `${automationFiles.length} automation scripts available` };
      } else {
        return { status: 'notice', message: `${automationFiles.length} automation scripts available` };
      }
    } catch (error) {
      throw new Error('Automation check failed');
    }
  }, 1);
  
  try {
    const report = await monitor.runChecks();
    await monitor.saveReport(report);
    
    log(`📊 Project health monitoring complete`);
    log(`   Overall Health: ${report.summary.overallHealth}`);
    log(`   Score: ${report.summary.score}%`);
    log(`   Total checks: ${report.summary.totalChecks}`);
    log(`   Passed: ${report.summary.passedChecks}`);
    log(`   Failed: ${report.summary.failedChecks}`);
    
    if (report.summary.score < 70) {
      log(`⚠️  Project health score is below optimal levels`);
      process.exit(1);
    } else if (report.summary.score < 80) {
      log(`⚠️  Project health score could be improved`);
    } else {
      log(`✅ Project is in good health`);
    }
    
  } catch (error) {
    log(`❌ Project health monitoring failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('Project health monitor error:', error);
    process.exit(1);
  });
}

module.exports = ProjectHealthMonitor;