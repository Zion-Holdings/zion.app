#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'pre-build-health-check.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

class PreBuildHealthChecker {
  constructor() {
    this.workspace = process.cwd();
    this.checks = [];
    this.results = [];
  }
  
  addCheck(name, checkFn, critical = false) {
    this.checks.push({ name, checkFn, critical });
  }
  
  async runChecks() {
    log('🔍 Starting pre-build health checks...');
    
    for (const check of this.checks) {
      try {
        log(`  Running: ${check.name}`);
        const result = await check.checkFn();
        this.results.push({
          name: check.name,
          status: 'PASS',
          result,
          critical: check.critical
        });
        log(`    ✅ ${check.name}: PASS`);
      } catch (error) {
        this.results.push({
          name: check.name,
          status: 'FAIL',
          error: error.message,
          critical: check.critical
        });
        log(`    ❌ ${check.name}: FAIL - ${error.message}`);
        
        if (check.critical) {
          log(`🚨 Critical check failed: ${check.name}`);
          throw error;
        }
      }
    }
    
    return this.generateReport();
  }
  
  generateReport() {
    const totalChecks = this.checks.length;
    const passedChecks = this.results.filter(r => r.status === 'PASS').length;
    const failedChecks = this.results.filter(r => r.status === 'FAIL').length;
    const criticalFailures = this.results.filter(r => r.status === 'FAIL' && r.critical).length;
    
    const canBuild = criticalFailures === 0;
    
    return {
      summary: {
        totalChecks,
        passedChecks,
        failedChecks,
        criticalFailures,
        canBuild,
        timestamp: new Date().toISOString()
      },
      results: this.results,
      recommendations: this.generateRecommendations()
    };
  }
  
  generateRecommendations() {
    const recommendations = [];
    
    const failedChecks = this.results.filter(r => r.status === 'FAIL');
    
    failedChecks.forEach(check => {
      switch (check.name) {
        case 'Page Structure Validation':
          recommendations.push('Run "npm run build:validate" to see detailed page issues');
          break;
        case 'Dependencies Check':
          recommendations.push('Run "npm install" to ensure all dependencies are installed');
          break;
        case 'Next.js Configuration':
          recommendations.push('Check next.config.js for syntax errors or invalid configuration');
          break;
        case 'Environment Variables':
          recommendations.push('Verify all required environment variables are set');
          break;
        case 'File Permissions':
          recommendations.push('Check file permissions and ensure write access to key directories');
          break;
      }
    });
    
    return recommendations;
  }
  
  saveReport(report) {
    const outDir = path.join(this.workspace, 'public', 'reports', 'pre-build-health');
    ensureDir(outDir);
    
    const outJson = path.join(outDir, 'latest.json');
    const outHtml = path.join(outDir, 'index.html');
    
    // Save JSON report
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const html = this.generateHtmlReport(report);
    fs.writeFileSync(outHtml, html);
    
    log(`📊 Pre-build health report saved to ${outJson} and ${outHtml}`);
  }
  
  generateHtmlReport(report) {
    const { summary, results, recommendations } = report;
    
    const html = [];
    html.push('<!doctype html>');
    html.push('<meta charset="utf-8"/>');
    html.push('<title>Pre-Build Health Check Report</title>');
    html.push('<style>');
    html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
    html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
    html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
    html.push('.status{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
    html.push('.pass{background:rgba(16,185,129,.2);border:1px solid #10b981;color:#10b981}');
    html.push('.fail{background:rgba(239,68,68,.2);border:1px solid #ef4444;color:#ef4444}');
    html.push('.build-status{font-size:24px;font-weight:bold;padding:20px;border-radius:12px;text-align:center;margin:20px 0}');
    html.push('.build-success{background:rgba(16,185,129,.2);border:2px solid #10b981}');
    html.push('.build-failure{background:rgba(239,68,68,.2);border:2px solid #ef4444}');
    html.push('</style>');
    
    html.push(`<h1>Pre-Build Health Check Report</h1>`);
    html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
    
    // Build status
    const buildStatusClass = summary.canBuild ? 'build-success' : 'build-failure';
    const buildStatusText = summary.canBuild ? '✅ BUILD READY' : '❌ BUILD NOT READY';
    html.push(`<div class="build-status ${buildStatusClass}">${buildStatusText}</div>`);
    
    // Summary
    html.push(`<div class="card">`);
    html.push(`<h2>Summary</h2>`);
    html.push(`<p><strong>Total Checks:</strong> ${summary.totalChecks}</p>`);
    html.push(`<p><strong>Passed:</strong> ${summary.passedChecks}</p>`);
    html.push(`<p><strong>Failed:</strong> ${summary.failedChecks}</p>`);
    html.push(`<p><strong>Critical Failures:</strong> ${summary.criticalFailures}</p>`);
    html.push(`</div>`);
    
    // Results
    html.push(`<div class="card">`);
    html.push(`<h2>Check Results</h2>`);
    results.forEach(result => {
      const statusClass = result.status === 'PASS' ? 'pass' : 'fail';
      const statusIcon = result.status === 'PASS' ? '✅' : '❌';
      const criticalBadge = result.critical ? ' <span style="color:#ef4444">[CRITICAL]</span>' : '';
      
      html.push(`<div style="margin:8px 0;padding:8px;border-radius:8px;background:rgba(255,255,255,.03)">`);
      html.push(`<strong>${statusIcon} ${result.name}</strong>${criticalBadge}`);
      html.push(`<span class="status ${statusClass}">${result.status}</span>`);
      
      if (result.status === 'FAIL') {
        html.push(`<div style="margin-top:4px;color:#ef4444"><code>${result.error}</code></div>`);
      }
      
      html.push(`</div>`);
    });
    html.push(`</div>`);
    
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

async function validateAllPages() {
  const { validatePageStructure } = require('./nextjs-page-validator.cjs');
  
  const workspace = process.cwd();
  const pagesDir = path.join(workspace, 'pages');
  
  if (!fs.existsSync(pagesDir)) {
    throw new Error('Pages directory not found');
  }
  
  const exts = new Set(['.ts', '.tsx', '.js', '.jsx']);
  const files = [];
  
  function walk(dir) {
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === 'node_modules' || e.name === '.git' || e.name === '.next' || e.name === 'out') continue;
        walk(p);
      } else if (exts.has(path.extname(e.name).toLowerCase())) {
        files.push(p);
      }
    }
  }
  
  walk(pagesDir);
  
  let totalIssues = 0;
  for (const file of files) {
    const rel = path.relative(workspace, file);
    const content = fs.readFileSync(file, 'utf8');
    const validation = validatePageStructure(rel, content);
    totalIssues += validation.issues.length;
  }
  
  if (totalIssues > 0) {
    throw new Error(`${totalIssues} critical issues found in pages`);
  }
  
  return `All ${files.length} pages are properly structured`;
}

async function checkDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageLockPath = path.join(process.cwd(), 'package-lock.json');
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('package.json not found');
  }
  
  if (!fs.existsSync(packageLockPath)) {
    throw new Error('package-lock.json not found - run npm install');
  }
  
  if (!fs.existsSync(nodeModulesPath)) {
    throw new Error('node_modules not found - run npm install');
  }
  
  // Check if Next.js is available
  const nextBinPath = path.join(nodeModulesPath, '.bin', 'next');
  if (!fs.existsSync(nextBinPath)) {
    throw new Error('Next.js binary not found - run npm install');
  }
  
  return 'All dependencies are properly installed';
}

async function validateNextConfig() {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  
  if (!fs.existsSync(nextConfigPath)) {
    throw new Error('next.config.js not found');
  }
  
  try {
    // Try to require the config to check for syntax errors
    require(nextConfigPath);
  } catch (error) {
    throw new Error(`next.config.js has syntax errors: ${error.message}`);
  }
  
  return 'Next.js configuration is valid';
}

async function checkEnvironmentVariables() {
  const requiredVars = [
    'NODE_VERSION',
    'NODE_OPTIONS'
  ];
  
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
  
  return 'All required environment variables are set';
}

async function checkFilePermissions() {
  const criticalDirs = [
    'pages',
    'components',
    'public',
    'styles'
  ];
  
  for (const dir of criticalDirs) {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      try {
        // Test write access
        const testFile = path.join(dirPath, '.test-write');
        fs.writeFileSync(testFile, 'test');
        fs.unlinkSync(testFile);
      } catch (error) {
        throw new Error(`No write access to ${dir} directory`);
      }
    }
  }
  
  return 'All critical directories have proper permissions';
}

async function checkBuildArtifacts() {
  const artifacts = ['.next', 'out'];
  
  for (const artifact of artifacts) {
    const artifactPath = path.join(process.cwd(), artifact);
    if (fs.existsSync(artifactPath)) {
      try {
        // Check if we can remove old artifacts
        fs.rmSync(artifactPath, { recursive: true, force: true });
      } catch (error) {
        throw new Error(`Cannot clean ${artifact} directory: ${error.message}`);
      }
    }
  }
  
  return 'Build artifacts can be properly managed';
}

async function main() {
  const checker = new PreBuildHealthChecker();
  
  // Add all health checks
  checker.addCheck('Page Structure Validation', validateAllPages, true);
  checker.addCheck('Dependencies Check', checkDependencies, true);
  checker.addCheck('Next.js Configuration', validateNextConfig, true);
  checker.addCheck('Environment Variables', checkEnvironmentVariables, false);
  checker.addCheck('File Permissions', checkFilePermissions, false);
  checker.addCheck('Build Artifacts', checkBuildArtifacts, false);
  
  try {
    const report = await checker.runChecks();
    checker.saveReport(report);
    
    log('📊 Pre-build health check complete');
    log(`   Total checks: ${report.summary.totalChecks}`);
    log(`   Passed: ${report.summary.passedChecks}`);
    log(`   Failed: ${report.summary.failedChecks}`);
    log(`   Build status: ${report.summary.canBuild ? '✅ READY' : '❌ NOT READY'}`);
    
    if (!report.summary.canBuild) {
      log('🚨 Pre-build health check failed!');
      log('   Check the report for details and fix the issues.');
      process.exit(1);
    }
    
    log('✅ All pre-build health checks passed');
    
  } catch (error) {
    log(`❌ Pre-build health check failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  PreBuildHealthChecker,
  validateAllPages,
  checkDependencies,
  validateNextConfig,
  checkEnvironmentVariables,
  checkFilePermissions,
  checkBuildArtifacts
};