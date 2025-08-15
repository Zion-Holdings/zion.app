#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'page-validator.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function listFiles(root, exts) {
  const results = [];
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
        results.push(p);
      }
    }
  }
  walk(root);
  return results;
}

function read(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function validatePageStructure(filePath, content) {
  const lines = content.split(/\r?\n/);
  const issues = [];
  const warnings = [];
  
  // Critical issues that will break builds
  if (!content.includes('export default')) {
    issues.push({
      type: 'CRITICAL',
      code: 'MISSING_EXPORT_DEFAULT',
      message: 'Missing export default statement',
      line: findLineWithPattern(lines, 'export'),
      severity: 'error'
    });
  }
  
  if (!content.includes('function') && !content.includes('const') && !content.includes('class')) {
    issues.push({
      type: 'CRITICAL',
      code: 'MISSING_COMPONENT_DECLARATION',
      message: 'Missing component function/class declaration',
      line: findLineWithPattern(lines, 'function|const|class'),
      severity: 'error'
    });
  }
  
  if (!content.includes('return') && !content.includes('React.createElement')) {
    issues.push({
      type: 'CRITICAL',
      code: 'MISSING_RETURN_STATEMENT',
      message: 'Missing return statement or JSX',
      line: findLineWithPattern(lines, 'return|React\\.createElement'),
      severity: 'error'
    });
  }
  
  // Warnings that might cause issues
  if (content.includes('jsx') && !content.includes('import React') && !content.includes('from "react"')) {
    warnings.push({
      type: 'WARNING',
      code: 'MISSING_REACT_IMPORT',
      message: 'JSX detected but React import may be missing',
      line: findLineWithPattern(lines, 'import.*react|from.*react'),
      severity: 'warning'
    });
  }
  
  // Check for common patterns that indicate incomplete pages
  if (content.trim().length < 100) {
    warnings.push({
      type: 'WARNING',
      code: 'PAGE_TOO_SHORT',
      message: 'Page content seems too short, may be incomplete',
      line: 0,
      severity: 'warning'
    });
  }
  
  // Check for proper HTML structure
  if (content.includes('<') && !content.includes('</')) {
    warnings.push({
      type: 'WARNING',
      code: 'INCOMPLETE_HTML',
      message: 'Incomplete HTML tags detected',
      line: findLineWithPattern(lines, '<[^>]*$'),
      severity: 'warning'
    });
  }
  
  return { file: filePath, issues, warnings };
}

function findLineWithPattern(lines, pattern) {
  for (let i = 0; i < lines.length; i++) {
    if (new RegExp(pattern, 'i').test(lines[i])) {
      return i + 1;
    }
  }
  return 0;
}

function generateReport(results) {
  const totalFiles = results.length;
  const filesWithIssues = results.filter(r => r.issues.length > 0 || r.warnings.length > 0).length;
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
  
  const criticalIssues = results.filter(r => r.issues.some(i => i.severity === 'error'));
  const buildBreakingFiles = criticalIssues.map(r => r.file);
  
  return {
    summary: {
      totalFiles,
      filesWithIssues,
      totalIssues,
      totalWarnings,
      buildBreakingFiles: buildBreakingFiles.length,
      canBuild: buildBreakingFiles.length === 0
    },
    results,
    buildBreakingFiles,
    generatedAt: new Date().toISOString()
  };
}

function saveReport(report) {
  const outDir = path.join(process.cwd(), 'public', 'reports', 'page-validation');
  ensureDir(outDir);
  
  const outJson = path.join(outDir, 'latest.json');
  const outHtml = path.join(outDir, 'index.html');
  
  // Save JSON report
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  
  // Generate HTML report
  const html = generateHtmlReport(report);
  fs.writeFileSync(outHtml, html);
  
  log(`📊 Report saved to ${outJson} and ${outHtml}`);
}

function generateHtmlReport(report) {
  const { summary, results, buildBreakingFiles } = report;
  
  const html = [];
  html.push('<!doctype html>');
  html.push('<meta charset="utf-8"/>');
  html.push('<title>Next.js Page Structure Validation Report</title>');
  html.push('<style>');
  html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
  html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
  html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
  html.push('.pill{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
  html.push('.error{border-color:#ef4444;background:rgba(239,68,68,.15)}');
  html.push('.warning{border-color:#f59e0b;background:rgba(245,158,11,.15)}');
  html.push('.success{border-color:#10b981;background:rgba(16,185,129,.15)}');
  html.push('.build-status{font-size:24px;font-weight:bold;padding:20px;border-radius:12px;text-align:center;margin:20px 0}');
  html.push('.build-success{background:rgba(16,185,129,.2);border:2px solid #10b981}');
  html.push('.build-failure{background:rgba(239,68,68,.2);border:2px solid #ef4444}');
  html.push('</style>');
  
  html.push(`<h1>Next.js Page Structure Validation Report</h1>`);
  html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
  
  // Build status
  const buildStatusClass = summary.canBuild ? 'build-success' : 'build-failure';
  const buildStatusText = summary.canBuild ? '✅ BUILD READY' : '❌ BUILD WILL FAIL';
  html.push(`<div class="build-status ${buildStatusClass}">${buildStatusText}</div>`);
  
  // Summary
  html.push(`<div class="card success">`);
  html.push(`<h2>Summary</h2>`);
  html.push(`<p><strong>Total Files:</strong> ${summary.totalFiles}</p>`);
  html.push(`<p><strong>Files with Issues:</strong> ${summary.filesWithIssues}</p>`);
  html.push(`<p><strong>Critical Issues:</strong> ${summary.totalIssues}</p>`);
  html.push(`<p><strong>Warnings:</strong> ${summary.totalWarnings}</p>`);
  html.push(`<p><strong>Build Breaking Files:</strong> ${summary.buildBreakingFiles}</p>`);
  html.push(`</div>`);
  
  // Build breaking files
  if (buildBreakingFiles.length > 0) {
    html.push(`<div class="card error">`);
    html.push(`<h2>🚨 Build Breaking Files</h2>`);
    html.push(`<p>These files will prevent successful builds:</p>`);
    html.push(`<ul>`);
    buildBreakingFiles.forEach(file => {
      html.push(`<li><code>${file}</code></li>`);
    });
    html.push(`</ul>`);
    html.push(`</div>`);
  }
  
  // Detailed results
  results.forEach(result => {
    if (result.issues.length > 0 || result.warnings.length > 0) {
      html.push(`<div class="card ${result.issues.length > 0 ? 'error' : 'warning'}">`);
      html.push(`<h3><code>${result.file}</code></h3>`);
      
      if (result.issues.length > 0) {
        html.push(`<h4>Critical Issues:</h4>`);
        result.issues.forEach(issue => {
          const lineInfo = issue.line > 0 ? ` (line ${issue.line})` : '';
          html.push(`<div class="pill error">${issue.code}: ${issue.message}${lineInfo}</div>`);
        });
      }
      
      if (result.warnings.length > 0) {
        html.push(`<h4>Warnings:</h4>`);
        result.warnings.forEach(warning => {
          const lineInfo = warning.line > 0 ? ` (line ${warning.line})` : '';
          html.push(`<div class="pill warning">${warning.code}: ${warning.message}${lineInfo}</div>`);
        });
      }
      
      html.push(`</div>`);
    }
  });
  
  return html.join('\n');
}

function main() {
  const workspace = process.cwd();
  const pagesDir = path.join(workspace, 'pages');
  
  if (!fs.existsSync(pagesDir)) {
    log('❌ Pages directory not found');
    process.exit(1);
  }
  
  const exts = new Set(['.ts', '.tsx', '.js', '.jsx']);
  const files = listFiles(pagesDir, exts);
  
  log(`🔍 Validating ${files.length} page files...`);
  
  const results = [];
  for (const file of files) {
    const rel = path.relative(workspace, file);
    const content = read(file);
    const validation = validatePageStructure(rel, content);
    if (validation.issues.length > 0 || validation.warnings.length > 0) {
      results.push(validation);
    }
  }
  
  const report = generateReport(results);
  
  // Save report
  saveReport(report);
  
  // Output summary
  log(`📊 Validation complete:`);
  log(`   Total files: ${report.summary.totalFiles}`);
  log(`   Files with issues: ${report.summary.filesWithIssues}`);
  log(`   Critical issues: ${report.summary.totalIssues}`);
  log(`   Warnings: ${report.summary.totalWarnings}`);
  log(`   Build status: ${report.summary.canBuild ? '✅ READY' : '❌ WILL FAIL'}`);
  
  if (!report.summary.canBuild) {
    log('🚨 Build will fail due to critical issues!');
    log('   Check the report for details and fix the issues.');
    process.exit(1);
  }
  
  log('✅ All pages are properly structured for building');
}

if (require.main === module) {
  main();
}

module.exports = {
  validatePageStructure,
  generateReport,
  saveReport
};