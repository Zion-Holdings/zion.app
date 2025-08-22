#!/usr/bin/env node

'use strict';

const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'enhanced-netlify-healer.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

class EnhancedNetlifyHealer {
  constructor() {
    this.workspace = process.cwd();
    this.recoveryAttempts = [];
    this.fixesApplied = [];
  }
  
  async healBuildFailure() {
    log('🚑 Enhanced Netlify auto-healing initiated...');
    
    try {
      // First, try to fix the issue locally
      await this.localBuildRecovery();
      
      // If successful, trigger Netlify rebuild
      await this.triggerNetlifyRebuild();
      
    } catch (error) {
      log(`❌ Local recovery failed: ${error.message}`);
      
      // Fallback to your existing auto-healer
      await this.fallbackToAutoHealer();
    }
  }
  
  async localBuildRecovery() {
    log('🔧 Attempting local build recovery...');
    
    try {
      // Run the build failure recovery automation
      log('📋 Running build failure recovery...');
      execSync('npm run build:recovery', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 120000 // 2 minute timeout
      });
      
      // Verify the fix works
      log('🔍 Verifying build health after recovery...');
      execSync('npm run build:health-check', { 
        stdio: 'inherit', 
        cwd: this.workspace,
        timeout: 60000 // 1 minute timeout
      });
      
      log('✅ Local build recovery successful');
      return true;
      
    } catch (error) {
      log(`❌ Local build recovery failed: ${error.message}`);
      throw error;
    }
  }
  
  async triggerNetlifyRebuild() {
    log('🚀 Triggering Netlify rebuild...');
    
    try {
      // Try to trigger via build hook first
      const buildHook = process.env.NETLIFY_BUILD_HOOK;
      if (buildHook) {
        log('📡 Using build hook to trigger rebuild...');
        await this.triggerBuildHook(buildHook);
        return 'build_hook';
      }
      
      // Fallback to API if no build hook
      log('📡 Using Netlify API to trigger rebuild...');
      await this.triggerApiBuild();
      return 'api_build';
      
    } catch (error) {
      log(`❌ Failed to trigger Netlify rebuild: ${error.message}`);
      throw error;
    }
  }
  
  async triggerBuildHook(buildHook) {
    return new Promise((resolve, reject) => {
      const url = new URL(buildHook);
      const options = {
        method: 'POST',
        hostname: url.hostname,
        path: url.pathname + (url.search || ''),
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Enhanced-Netlify-Healer/1.0'
        }
      };
      
      const req = https.request(options, (res) => {
        const status = res.statusCode || 0;
        if (status >= 200 && status < 300) {
          log(`✅ Build hook triggered successfully (HTTP ${status})`);
          resolve();
        } else {
          reject(new Error(`Build hook failed with HTTP ${status}`));
        }
      });
      
      req.on('error', reject);
      req.end();
    });
  }
  
  async triggerApiBuild() {
    const apiToken = process.env.NETLIFY_AUTH_TOKEN;
    const siteId = process.env.NETLIFY_SITE_ID;
    
    if (!apiToken || !siteId) {
      throw new Error('Missing NETLIFY_AUTH_TOKEN or NETLIFY_SITE_ID');
    }
    
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        hostname: 'api.netlify.com',
        path: `/api/v1/sites/${encodeURIComponent(siteId)}/builds`,
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Enhanced-Netlify-Healer/1.0'
        }
      };
      
      const req = https.request(options, (res) => {
        const status = res.statusCode || 0;
        if (status >= 200 && status < 300) {
          log(`✅ API build triggered successfully (HTTP ${status})`);
          resolve();
        } else {
          reject(new Error(`API build failed with HTTP ${status}`));
        }
      });
      
      req.on('error', reject);
      req.write(JSON.stringify({}));
      req.end();
    });
  }
  
  async fallbackToAutoHealer() {
    log('🔄 Falling back to standard Netlify auto-healer...');
    
    try {
      // Import and run the existing auto-healer
      const { main: autoHealerMain } = require('./netlify-auto-healer.cjs');
      await autoHealerMain();
      
    } catch (error) {
      log(`❌ Fallback auto-healer also failed: ${error.message}`);
      throw error;
    }
  }
  
  async analyzeBuildFailure(buildLog) {
    log('🔍 Analyzing build failure for intelligent recovery...');
    
    const patterns = {
      'page without a React Component': 'MISSING_COMPONENT',
      'export default': 'EXPORT_ISSUE',
      'syntax error': 'SYNTAX_ERROR',
      'module not found': 'DEPENDENCY_ISSUE',
      'Cannot find module': 'MODULE_ISSUE',
      'Unexpected token': 'SYNTAX_ERROR',
      'Parsing error': 'PARSING_ERROR',
      'Deploy directory.*does not exist': 'BUILD_ARTIFACT_MISSING'
    };
    
    const detectedIssues = [];
    
    for (const [pattern, issueType] of Object.entries(patterns)) {
      if (buildLog.includes(pattern)) {
        detectedIssues.push({
          pattern,
          type: issueType,
          severity: this.getIssueSeverity(issueType)
        });
      }
    }
    
    return {
      hasIssues: detectedIssues.length > 0,
      issues: detectedIssues,
      recommendations: this.generateRecommendations(detectedIssues)
    };
  }
  
  getIssueSeverity(issueType) {
    const severityMap = {
      'MISSING_COMPONENT': 'CRITICAL',
      'EXPORT_ISSUE': 'CRITICAL',
      'SYNTAX_ERROR': 'HIGH',
      'PARSING_ERROR': 'HIGH',
      'DEPENDENCY_ISSUE': 'MEDIUM',
      'MODULE_ISSUE': 'MEDIUM',
      'BUILD_ARTIFACT_MISSING': 'LOW'
    };
    
    return severityMap[issueType] || 'UNKNOWN';
  }
  
  generateRecommendations(issues) {
    const recommendations = [];
    
    issues.forEach(issue => {
      switch (issue.type) {
        case 'MISSING_COMPONENT':
          recommendations.push('Run "npm run build:validate" to identify and fix page structure issues');
          recommendations.push('Use "npm run build:recovery" to automatically fix common component issues');
          break;
        case 'EXPORT_ISSUE':
          recommendations.push('Check all page files for proper export default statements');
          recommendations.push('Ensure all React components are properly exported');
          break;
        case 'SYNTAX_ERROR':
        case 'PARSING_ERROR':
          recommendations.push('Review the build logs for specific syntax errors');
          recommendations.push('Check for missing brackets, semicolons, or invalid JSX');
          break;
        case 'DEPENDENCY_ISSUE':
        case 'MODULE_ISSUE':
          recommendations.push('Run "npm install" to ensure all dependencies are installed');
          recommendations.push('Check package.json for missing or conflicting dependencies');
          break;
        case 'BUILD_ARTIFACT_MISSING':
          recommendations.push('Verify the build process completes successfully');
          recommendations.push('Check that the output directory is properly configured');
          break;
      }
    });
    
    return recommendations;
  }
  
  async generateRecoveryReport() {
    const report = {
      summary: {
        totalRecoveryAttempts: this.recoveryAttempts.length,
        successfulRecoveries: this.fixesApplied.length,
        timestamp: new Date().toISOString()
      },
      recoveryAttempts: this.recoveryAttempts,
      fixesApplied: this.fixesApplied,
      recommendations: this.generateGeneralRecommendations()
    };
    
    return report;
  }
  
  generateGeneralRecommendations() {
    const recommendations = [
      'Monitor build health with "npm run build:monitor"',
      'Run pre-build checks with "npm run build:health-check"',
      'Use smart build with "npm run build:smart" for automatic issue detection',
      'Set up continuous monitoring to catch issues early',
      'Review build reports in public/reports/ for detailed analysis'
    ];
    
    return recommendations;
  }
  
  saveReport(report) {
    const outDir = path.join(this.workspace, 'public', 'reports', 'netlify-healing');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    
    const outJson = path.join(outDir, 'latest.json');
    const outHtml = path.join(outDir, 'index.html');
    
    // Save JSON report
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const html = this.generateHtmlReport(report);
    fs.writeFileSync(outHtml, html);
    
    log(`📊 Enhanced Netlify healing report saved to ${outJson} and ${outHtml}`);
  }
  
  generateHtmlReport(report) {
    const { summary, recoveryAttempts, fixesApplied, recommendations } = report;
    
    const html = [];
    html.push('<!doctype html>');
    html.push('<meta charset="utf-8"/>');
    html.push('<title>Enhanced Netlify Healing Report</title>');
    html.push('<style>');
    html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
    html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
    html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
    html.push('.status{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
    html.push('.success{background:rgba(16,185,129,.2);border:1px solid #10b981;color:#10b981}');
    html.push('.info{background:rgba(59,130,246,.2);border:1px solid #3b82f6;color:#3b82f6}');
    html.push('</style>');
    
    html.push(`<h1>Enhanced Netlify Healing Report</h1>`);
    html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
    
    // Summary
    html.push(`<div class="card">`);
    html.push(`<h2>Healing Summary</h2>`);
    html.push(`<p><strong>Total Recovery Attempts:</strong> ${summary.totalRecoveryAttempts}</p>`);
    html.push(`<p><strong>Successful Recoveries:</strong> ${summary.successfulRecoveries}</p>`);
    html.push(`</div>`);
    
    // Fixes Applied
    if (fixesApplied.length > 0) {
      html.push(`<div class="card">`);
      html.push(`<h2>Fixes Applied</h2>`);
      fixesApplied.forEach(fix => {
        html.push(`<div style="margin:8px 0;padding:8px;border-radius:8px;background:rgba(255,255,255,.03)">`);
        html.push(`<strong>${fix.pattern}</strong>`);
        html.push(`<span class="status success">${fix.fix}</span>`);
        html.push(`<div style="margin-top:4px;color:#3b82f6"><code>${fix.file}</code></div>`);
        html.push(`</div>`);
      });
      html.push(`</div>`);
    }
    
    // Recommendations
    if (recommendations.length > 0) {
      html.push(`<div class="card">`);
      html.push(`<h2>Recommendations</h2>`);
      html.push(`<ul>`);
      recommendations.forEach(rec => {
        html.push(`<li>${rec}</li>`);
      });
      html.push(`</ul>`);
      html.push(`</div>`);
    }
    
    return html.join('\n');
  }
}

async function main() {
  const healer = new EnhancedNetlifyHealer();
  
  try {
    await healer.healBuildFailure();
    
    const report = await healer.generateRecoveryReport();
    healer.saveReport(report);
    
    log('✅ Enhanced Netlify healing completed successfully');
    
  } catch (error) {
    log(`❌ Enhanced Netlify healing failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  EnhancedNetlifyHealer
};