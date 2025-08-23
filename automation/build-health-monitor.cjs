#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'build-health-monitor.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) { 
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); 
}

class BuildHealthMonitor {
  constructor() {
    this.workspace = process.cwd();
    this.reports = [];
    this.issues = [];
    this.warnings = [];
  }

  async runFullHealthCheck() {
    log('🏥 Starting comprehensive build health check...');
    
    try {
      // 1. React Component Health Check
      await this.checkReactComponents();
      
      // 2. Build Configuration Health Check
      await this.checkBuildConfiguration();
      
      // 3. Dependency Health Check
      await this.checkDependencies();
      
      // 4. File Structure Health Check
      await this.checkFileStructure();
      
      // 5. Script Health Check
      await this.checkScripts();
      
      // 6. Generate Comprehensive Report
      await this.generateHealthReport();
      
      // 7. Take Action Based on Results
      await this.takeAction();
      
    } catch (error) {
      log(`❌ Health check failed: ${error.message}`);
      throw error;
    }
  }

  async checkReactComponents() {
    log('📋 Checking React component health...');
    
    try {
      const validatorPath = path.join(__dirname, 'react-component-validator.cjs');
      if (fs.existsSync(validatorPath)) {
        execSync(`node ${validatorPath}`, { stdio: 'pipe' });
        log('✅ React component validation completed');
        this.reports.push({ type: 'react_components', status: 'healthy' });
      } else {
        log('⚠️ React component validator not found');
        this.warnings.push('React component validator not available');
        this.reports.push({ type: 'react_components', status: 'warning' });
      }
    } catch (error) {
      log(`❌ React component check failed: ${error.message}`);
      this.issues.push(`React component validation failed: ${error.message}`);
      this.reports.push({ type: 'react_components', status: 'failed', error: error.message });
    }
  }

  async checkBuildConfiguration() {
    log('⚙️ Checking build configuration...');
    
    try {
      const preflightPath = path.join(__dirname, 'build-preflight-checker.cjs');
      if (fs.existsSync(preflightPath)) {
        execSync(`node ${preflightPath}`, { stdio: 'pipe' });
        log('✅ Build preflight check completed');
        this.reports.push({ type: 'build_config', status: 'healthy' });
      } else {
        log('⚠️ Build preflight checker not found');
        this.warnings.push('Build preflight checker not available');
        this.reports.push({ type: 'build_config', status: 'warning' });
      }
    } catch (error) {
      log(`❌ Build configuration check failed: ${error.message}`);
      this.issues.push(`Build configuration check failed: ${error.message}`);
      this.reports.push({ type: 'build_config', status: 'failed', error: error.message });
    }
  }

  async checkDependencies() {
    log('📦 Checking dependency health...');
    
    try {
      const packagePath = path.join(this.workspace, 'package.json');
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Check for outdated dependencies
      try {
        const outdated = execSync('npm outdated --json', { stdio: 'pipe' }).toString();
        const outdatedData = JSON.parse(outdated);
        const outdatedCount = Object.keys(outdatedData).length;
        
        if (outdatedCount > 0) {
          log(`⚠️ Found ${outdatedCount} outdated dependencies`);
          this.warnings.push(`${outdatedCount} outdated dependencies found`);
          this.reports.push({ type: 'dependencies', status: 'warning', outdated: outdatedCount });
        } else {
          log('✅ All dependencies are up to date');
          this.reports.push({ type: 'dependencies', status: 'healthy' });
        }
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.status === 1) {
          const outdated = JSON.parse(error.stdout.toString());
          const outdatedCount = Object.keys(outdated).length;
          log(`⚠️ Found ${outdatedCount} outdated dependencies`);
          this.warnings.push(`${outdatedCount} outdated dependencies found`);
          this.reports.push({ type: 'dependencies', status: 'warning', outdated: outdatedCount });
        } else {
          throw error;
        }
      }
      
      // Check for security vulnerabilities
      try {
        const audit = execSync('npm audit --json', { stdio: 'pipe' }).toString();
        const auditData = JSON.parse(audit);
        const vulnerabilities = auditData.metadata?.vulnerabilities || {};
        const totalVulns = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
        
        if (totalVulns > 0) {
          log(`⚠️ Found ${totalVulns} security vulnerabilities`);
          this.warnings.push(`${totalVulns} security vulnerabilities found`);
          this.reports.push({ type: 'security', status: 'warning', vulnerabilities: totalVulns });
        } else {
          log('✅ No security vulnerabilities found');
          this.reports.push({ type: 'security', status: 'healthy' });
        }
      } catch (error) {
        if (error.status === 1) {
          const audit = JSON.parse(error.stdout.toString());
          const vulnerabilities = audit.metadata?.vulnerabilities || {};
          const totalVulns = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
          log(`⚠️ Found ${totalVulns} security vulnerabilities`);
          this.warnings.push(`${totalVulns} security vulnerabilities found`);
          this.reports.push({ type: 'security', status: 'warning', vulnerabilities: totalVulns });
        } else {
          log(`⚠️ Could not check security vulnerabilities: ${error.message}`);
          this.warnings.push('Security audit unavailable');
        }
      }
      
    } catch (error) {
      log(`❌ Dependency check failed: ${error.message}`);
      this.issues.push(`Dependency check failed: ${error.message}`);
      this.reports.push({ type: 'dependencies', status: 'failed', error: error.message });
    }
  }

  async checkFileStructure() {
    log('📁 Checking file structure health...');
    
    try {
      const criticalPaths = [
        'pages',
        'components',
        'public',
        'styles',
        'next.config.js',
        'package.json',
        'netlify.toml'
      ];
      
      let missingFiles = [];
      for (const criticalPath of criticalPaths) {
        if (!fs.existsSync(path.join(this.workspace, criticalPath))) {
          missingFiles.push(criticalPath);
        }
      }
      
      if (missingFiles.length > 0) {
        log(`❌ Missing critical files/directories: ${missingFiles.join(', ')}`);
        this.issues.push(`Missing critical files: ${missingFiles.join(', ')}`);
        this.reports.push({ type: 'file_structure', status: 'failed', missing: missingFiles });
      } else {
        log('✅ All critical files and directories present');
        this.reports.push({ type: 'file_structure', status: 'healthy' });
      }
      
      // Check pages directory for proper structure
      const pagesPath = path.join(this.workspace, 'pages');
      if (fs.existsSync(pagesPath)) {
        const entries = fs.readdirSync(pagesPath, { withFileTypes: true });
        const pageFiles = entries.filter(e => e.isFile() && /\.(tsx|ts|jsx|js)$/.test(e.name));
        
        if (pageFiles.length === 0) {
          log('❌ No page files found in pages directory');
          this.issues.push('No page files found in pages directory');
        } else {
          log(`✅ Found ${pageFiles.length} page files`);
        }
      }
      
    } catch (error) {
      log(`❌ File structure check failed: ${error.message}`);
      this.issues.push(`File structure check failed: ${error.message}`);
      this.reports.push({ type: 'file_structure', status: 'failed', error: error.message });
    }
  }

  async checkScripts() {
    log('📜 Checking script health...');
    
    try {
      const packagePath = path.join(this.workspace, 'package.json');
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      const requiredScripts = ['build', 'export', 'dev', 'start'];
      const missingScripts = requiredScripts.filter(script => !pkg.scripts[script]);
      
      if (missingScripts.length > 0) {
        log(`❌ Missing required scripts: ${missingScripts.join(', ')}`);
        this.issues.push(`Missing required scripts: ${missingScripts.join(', ')}`);
        this.reports.push({ type: 'scripts', status: 'failed', missing: missingScripts });
      } else {
        log('✅ All required scripts present');
        this.reports.push({ type: 'scripts', status: 'healthy' });
      }
      
      // Test if export script can run (dry run)
      try {
        const exportScript = pkg.scripts.export;
        if (exportScript && exportScript.includes('next build')) {
          log('✅ Export script appears to be properly configured');
        } else {
          log('⚠️ Export script may not be properly configured');
          this.warnings.push('Export script configuration may be suboptimal');
        }
      } catch (error) {
        log(`⚠️ Could not verify export script: ${error.message}`);
      }
      
    } catch (error) {
      log(`❌ Script check failed: ${error.message}`);
      this.issues.push(`Script check failed: ${error.message}`);
      this.reports.push({ type: 'scripts', status: 'failed', error: error.message });
    }
  }

  async generateHealthReport() {
    log('📊 Generating health report...');
    
    const summary = {
      generatedAt: new Date().toISOString(),
      totalChecks: this.reports.length,
      healthy: this.reports.filter(r => r.status === 'healthy').length,
      warnings: this.reports.filter(r => r.status === 'warning').length,
      failed: this.reports.filter(r => r.status === 'failed').length,
      overallHealth: this.calculateOverallHealth(),
      issues: this.issues,
      warnings: this.warnings
    };
    
    // Generate JSON report
    const outDir = path.join(this.workspace, 'public', 'reports', 'build-health');
    ensureDir(outDir);
    const outJson = path.join(outDir, 'latest.json');
    fs.writeFileSync(outJson, JSON.stringify({ ...summary, reports: this.reports }, null, 2));
    
    // Generate HTML report
    const outHtml = path.join(outDir, 'index.html');
    const html = this.generateHTMLReport(summary);
    fs.writeFileSync(outHtml, html);
    
    log(`📊 Health report generated:`);
    log(`   Overall health: ${summary.overallHealth}/100`);
    log(`   Healthy checks: ${summary.healthy}`);
    log(`   Warnings: ${summary.warnings}`);
    log(`   Failed checks: ${summary.failed}`);
    log(`   Report saved to: ${outJson}`);
    log(`   HTML report: ${outHtml}`);
    
    return { summary, outJson, outHtml };
  }

  calculateOverallHealth() {
    if (this.reports.length === 0) return 0;
    
    const scores = this.reports.map(report => {
      switch (report.status) {
        case 'healthy': return 100;
        case 'warning': return 70;
        case 'failed': return 0;
        default: return 50;
      }
    });
    
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  generateHTMLReport(summary) {
    const html = [];
    html.push('<!doctype html><meta charset="utf-8"/><title>Build Health Monitor Report</title>');
    html.push('<style>');
    html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
    html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
    html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
    html.push('.healthy{background:rgba(34,197,94,.15);border-color:rgba(34,197,94,.4)}');
    html.push('.warning{background:rgba(245,158,11,.15);border-color:rgba(245,158,11,.4)}');
    html.push('.failed{background:rgba(239,68,68,.15);border-color:rgba(239,68,68,.4)}');
    html.push('.score{font-size:24px;font-weight:bold;margin:20px 0}');
    html.push('.status{display:inline-block;padding:4px 8px;border-radius:6px;font-size:12px;font-weight:bold}');
    html.push('.status.healthy{background:rgba(34,197,94,.2);color:#22c55e}');
    html.push('.status.warning{background:rgba(245,158,11,.2);color:#f59e0b}');
    html.push('.status.failed{background:rgba(239,68,68,.2);color:#ef4444}');
    html.push('</style>');
    
    html.push(`<h1>🏥 Build Health Monitor Report</h1>`);
    html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
    
    // Overall health score
    const scoreColor = summary.overallHealth >= 80 ? '#22c55e' : summary.overallHealth >= 60 ? '#f59e0b' : '#ef4444';
    html.push(`<div class="score" style="color:${scoreColor}">Overall Health: ${summary.overallHealth}/100</div>`);
    
    // Summary
    html.push(`<div class="card">`);
    html.push(`<h3>Summary</h3>`);
    html.push(`<p><strong>${summary.totalChecks}</strong> checks performed</p>`);
    html.push(`<p><strong style="color:#22c55e">${summary.healthy}</strong> healthy</p>`);
    html.push(`<p><strong style="color:#f59e0b">${summary.warnings}</strong> warnings</p>`);
    html.push(`<p><strong style="color:#ef4444">${summary.failed}</strong> failed</p>`);
    html.push(`</div>`);
    
    // Issues
    if (summary.issues.length > 0) {
      html.push(`<h2 style="color:#ef4444">❌ Critical Issues (${summary.issues.length})</h2>`);
      summary.issues.forEach(issue => {
        html.push(`<div class="card failed">${issue}</div>`);
      });
    }
    
    // Warnings
    if (summary.warnings.length > 0) {
      html.push(`<h2 style="color:#f59e0b">⚠️ Warnings (${summary.warnings.length})</h2>`);
      summary.warnings.forEach(warning => {
        html.push(`<div class="card warning">${warning}</div>`);
      });
    }
    
    // Detailed reports
    html.push(`<h2>📋 Detailed Check Results</h2>`);
    this.reports.forEach(report => {
      const statusClass = report.status;
      html.push(`<div class="card ${statusClass}">`);
      html.push(`<h3>${report.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>`);
      html.push(`<span class="status ${report.status}">${report.status.toUpperCase()}</span>`);
      if (report.error) html.push(`<p style="margin-top:8px;color:#ef4444">${report.error}</p>`);
      if (report.missing) html.push(`<p style="margin-top:8px;color:#f59e0b">Missing: ${report.missing.join(', ')}</p>`);
      if (report.outdated) html.push(`<p style="margin-top:8px;color:#f59e0b">${report.outdated} outdated dependencies</p>`);
      if (report.vulnerabilities) html.push(`<p style="margin-top:8px;color:#f59e0b">${report.vulnerabilities} security vulnerabilities</p>`);
      html.push(`</div>`);
    });
    
    return html.join('\n');
  }

  async takeAction() {
    const hasCriticalIssues = this.issues.length > 0;
    const hasWarnings = this.warnings.length > 0;
    
    if (hasCriticalIssues) {
      log('🚨 Critical issues detected! Immediate action required.');
      log('💡 Recommended actions:');
      this.issues.forEach(issue => {
        log(`   • ${issue}`);
      });
      
      // Could trigger notifications, create GitHub issues, etc.
      return false;
    }
    
    if (hasWarnings) {
      log('⚠️ Warnings detected. Consider addressing these issues.');
      log('💡 Recommended actions:');
      this.warnings.forEach(warning => {
        log(`   • ${warning}`);
      });
      return true;
    }
    
    log('✅ All systems healthy! No action required.');
    return true;
  }
}

async function main() {
  try {
    const monitor = new BuildHealthMonitor();
    await monitor.runFullHealthCheck();
    
    const hasIssues = monitor.issues.length > 0;
    if (hasIssues) {
      log('❌ Build health check completed with critical issues.');
      process.exit(1);
    } else {
      log('✅ Build health check completed successfully.');
      process.exit(0);
    }
  } catch (error) {
    log(`❌ Build health monitor failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = BuildHealthMonitor;