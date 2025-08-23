#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'react-validator.log');
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

function validateReactComponent(filePath, content) {
  const lines = content.split(/\r?\n/);
  const issues = [];
  const warnings = [];
  
  // Check for React import
  const hasReactImport = /import\s+React\s+from\s+['"]react['"]/i.test(content) || 
                         /import\s+{\s*.*\s*}\s+from\s+['"]react['"]/i.test(content);
  
  if (!hasReactImport) {
    issues.push({
      type: 'critical',
      message: 'Missing React import',
      line: 0,
      fix: 'Add: import React from "react";'
    });
  }
  
  // Check for export default
  const hasExportDefault = /export\s+default\s+/i.test(content);
  if (!hasExportDefault) {
    issues.push({
      type: 'critical',
      message: 'Missing export default statement',
      line: 0,
      fix: 'Add: export default function ComponentName() { ... }'
    });
  }
  
  // Check for component function/class
  const hasComponent = /(function\s+\w+\s*\(|const\s+\w+\s*=\s*\(|class\s+\w+)/i.test(content);
  if (!hasComponent) {
    issues.push({
      type: 'critical',
      message: 'No React component found',
      line: 0,
      fix: 'Define a React component function or class'
    });
  }
  
  // Check for JSX return
  const hasJSXReturn = /return\s*\(/i.test(content) && /<[A-Z]/.test(content);
  if (!hasJSXReturn) {
    warnings.push({
      type: 'warning',
      message: 'No JSX return statement found',
      line: 0,
      fix: 'Ensure component returns JSX'
    });
  }
  
  // Check for proper file structure
  if (content.trim().length < 50) {
    warnings.push({
      type: 'warning',
      message: 'File seems too short for a complete component',
      line: 0,
      fix: 'Ensure file contains complete React component'
    });
  }
  
  // Check for common syntax issues
  const unclosedBraces = (content.match(/\{/g) || []).length - (content.match(/\}/g) || []).length;
  if (unclosedBraces !== 0) {
    issues.push({
      type: 'critical',
      message: `Unmatched braces: ${unclosedBraces > 0 ? 'missing' : 'extra'} ${Math.abs(unclosedBraces)} closing brace(s)`,
      line: 0,
      fix: 'Fix brace matching'
    });
  }
  
  const unclosedParens = (content.match(/\(/g) || []).length - (content.match(/\)/g) || []).length;
  if (unclosedParens !== 0) {
    issues.push({
      type: 'critical',
      message: `Unmatched parentheses: ${unclosedParens > 0 ? 'missing' : 'extra'} ${Math.abs(unclosedParens)} closing parenthesis(es)`,
      line: 0,
      fix: 'Fix parenthesis matching'
    });
  }
  
  return { 
    file: filePath, 
    issues: [...issues, ...warnings],
    hasCriticalIssues: issues.some(i => i.type === 'critical'),
    score: Math.max(0, 100 - (issues.length * 20) - (warnings.length * 5))
  };
}

function generateReport(results) {
  const criticalIssues = results.filter(r => r.hasCriticalIssues);
  const warnings = results.filter(r => !r.hasCriticalIssues && r.issues.length > 0);
  const healthy = results.filter(r => r.issues.length === 0);
  
  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: results.length,
    criticalIssues: criticalIssues.length,
    warnings: warnings.length,
    healthy: healthy.length,
    overallScore: Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
  };
  
  // Generate JSON report
  const outDir = path.join(process.cwd(), 'public', 'reports', 'react-validation');
  ensureDir(outDir);
  const outJson = path.join(outDir, 'latest.json');
  fs.writeFileSync(outJson, JSON.stringify({ ...summary, results }, null, 2));
  
  // Generate HTML report
  const outHtml = path.join(outDir, 'index.html');
  const html = generateHTMLReport(summary, results);
  fs.writeFileSync(outHtml, html);
  
  return { summary, outJson, outHtml };
}

function generateHTMLReport(summary, results) {
  const html = [];
  html.push('<!doctype html><meta charset="utf-8"/><title>React Component Validation Report</title>');
  html.push('<style>');
  html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
  html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
  html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
  html.push('.critical{background:rgba(239,68,68,.15);border-color:rgba(239,68,68,.4)}');
  html.push('.warning{background:rgba(245,158,11,.15);border-color:rgba(245,158,11,.4)}');
  html.push('.healthy{background:rgba(34,197,94,.15);border-color:rgba(34,197,94,.4)}');
  html.push('.pill{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
  html.push('.critical .pill{background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.4)}');
  html.push('.warning .pill{background:rgba(245,158,11,.2);border:1px solid rgba(245,158,11,.4)}');
  html.push('.score{font-size:24px;font-weight:bold;margin:20px 0}');
  html.push('</style>');
  
  html.push(`<h1>React Component Validation Report</h1>`);
  html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
  
  // Score display
  const scoreColor = summary.overallScore >= 80 ? '#22c55e' : summary.overallScore >= 60 ? '#f59e0b' : '#ef4444';
  html.push(`<div class="score" style="color:${scoreColor}">Overall Score: ${summary.overallScore}/100</div>`);
  
  // Summary
  html.push(`<div class="card">`);
  html.push(`<h3>Summary</h3>`);
  html.push(`<p><strong>${summary.totalFiles}</strong> files analyzed</p>`);
  html.push(`<p><strong style="color:#ef4444">${summary.criticalIssues}</strong> files with critical issues</p>`);
  html.push(`<p><strong style="color:#f59e0b">${summary.warnings}</strong> files with warnings</p>`);
  html.push(`<p><strong style="color:#22c55e">${summary.healthy}</strong> healthy files</p>`);
  html.push(`</div>`);
  
  // Critical issues first
  if (criticalIssues.length > 0) {
    html.push(`<h2 style="color:#ef4444">🚨 Critical Issues (${criticalIssues.length})</h2>`);
    criticalIssues.forEach(r => {
      html.push('<div class="card critical">');
      html.push(`<h3><code>${r.file}</code> <span style="color:#ef4444">Score: ${r.score}/100</span></h3>`);
      html.push('<div>' + r.issues.map(i => `<span class="pill">${i.message}</span>`).join(' ') + '</div>');
      if (r.issues.some(i => i.fix)) {
        html.push('<div style="margin-top:8px;font-size:12px;opacity:0.8">');
        html.push('<strong>Suggested fixes:</strong><br>');
        r.issues.filter(i => i.fix).forEach(i => {
          html.push(`• ${i.fix}<br>`);
        });
        html.push('</div>');
      }
      html.push('</div>');
    });
  }
  
  // Warnings
  if (warnings.length > 0) {
    html.push(`<h2 style="color:#f59e0b">⚠️ Warnings (${warnings.length})</h2>`);
    warnings.forEach(r => {
      html.push('<div class="card warning">');
      html.push(`<h3><code>${r.file}</code> <span style="color:#f59e0b">Score: ${r.score}/100</span></h3>`);
      html.push('<div>' + r.issues.map(i => `<span class="pill">${i.message}</span>`).join(' ') + '</div>');
      html.push('</div>');
    });
  }
  
  // Healthy files
  if (healthy.length > 0) {
    html.push(`<h2 style="color:#22c55e">✅ Healthy Files (${healthy.length})</h2>`);
    html.push('<div class="card healthy">');
    html.push('<p>All React components are properly structured!</p>');
    html.push('</div>');
  }
  
  return html.join('\n');
}

function main() {
  const workspace = process.cwd();
  const pagesDir = path.join(workspace, 'pages');
  
  if (!fs.existsSync(pagesDir)) {
    log('❌ Pages directory not found. Exiting.');
    process.exit(1);
  }
  
  log('🔍 Starting React component validation...');
  
  const exts = new Set(['.tsx', '.ts', '.jsx', '.js']);
  const files = listFiles(pagesDir, exts);
  
  if (files.length === 0) {
    log('⚠️ No page files found to validate.');
    process.exit(0);
  }
  
  log(`📁 Found ${files.length} page files to validate`);
  
  const results = [];
  for (const file of files) {
    const rel = path.relative(workspace, file);
    const content = read(file);
    const validation = validateReactComponent(rel, content);
    results.push(validation);
  }
  
  // Sort by critical issues first, then by score
  results.sort((a, b) => {
    if (a.hasCriticalIssues && !b.hasCriticalIssues) return -1;
    if (!a.hasCriticalIssues && b.hasCriticalIssues) return 1;
    return a.score - b.score;
  });
  
  const report = generateReport(results);
  
  log(`📊 Validation complete:`);
  log(`   Total files: ${report.summary.totalFiles}`);
  log(`   Critical issues: ${report.summary.criticalIssues}`);
  log(`   Warnings: ${report.summary.warnings}`);
  log(`   Healthy: ${report.summary.healthy}`);
  log(`   Overall score: ${report.summary.overallScore}/100`);
  log(`   Report saved to: ${report.outJson}`);
  log(`   HTML report: ${report.outHtml}`);
  
  // Exit with error code if there are critical issues
  if (report.summary.criticalIssues > 0) {
    log('❌ Critical issues found! Build may fail.');
    process.exit(1);
  } else if (report.summary.warnings > 0) {
    log('⚠️ Warnings found, but no critical issues.');
    process.exit(0);
  } else {
    log('✅ All React components are properly structured!');
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateReactComponent, generateReport };