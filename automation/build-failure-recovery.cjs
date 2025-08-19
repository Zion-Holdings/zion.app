#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'build-failure-recovery.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

class BuildFailureRecovery {
  constructor() {
    this.workspace = process.cwd();
    this.recoveryAttempts = [];
    this.fixesApplied = [];
  }
  
  async analyzeBuildError(errorLog) {
    log('🔍 Analyzing build error for recovery...');
    
    const patterns = {
      'page without a React Component': this.fixMissingComponent.bind(this),
      'export default': this.fixExportIssues.bind(this),
      'syntax error': this.fixSyntaxErrors.bind(this),
      'module not found': this.fixDependencyIssues.bind(this),
      'Cannot find module': this.fixModuleIssues.bind(this),
      'Unexpected token': this.fixSyntaxErrors.bind(this),
      'Parsing error': this.fixParsingErrors.bind(this)
    };
    
    for (const [pattern, fixer] of Object.entries(patterns)) {
      if (errorLog.includes(pattern)) {
        log(`🎯 Pattern detected: ${pattern}`);
        try {
          const result = await fixer(errorLog);
          if (result.success) {
            this.fixesApplied.push({
              pattern,
              fix: result.fix,
              file: result.file,
              timestamp: new Date().toISOString()
            });
            log(`✅ Applied fix for pattern: ${pattern}`);
          }
        } catch (error) {
          log(`❌ Fix failed for pattern ${pattern}: ${error.message}`);
        }
      }
    }
    
    return this.generateRecoveryReport();
  }
  
  async fixMissingComponent(errorLog) {
    log('🔧 Attempting to fix missing React component...');
    
    // Extract file path from error
    const fileMatch = errorLog.match(/pages\/([^\s]+)/);
    if (!fileMatch) {
      throw new Error('Could not extract file path from error');
    }
    
    const filePath = `pages/${fileMatch[1]}`;
    const fullPath = path.join(this.workspace, filePath);
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    const fixedContent = await this.generateComponentTemplate(filePath, content);
    
    // Backup original file
    const backupPath = `${fullPath}.backup.${Date.now()}`;
    fs.writeFileSync(backupPath, content);
    log(`📦 Created backup: ${backupPath}`);
    
    // Apply fix
    fs.writeFileSync(fullPath, fixedContent);
    log(`✅ Fixed component structure in ${filePath}`);
    
    return {
      success: true,
      fix: 'Generated proper React component structure',
      file: filePath
    };
  }
  
  async generateComponentTemplate(filePath, originalContent) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const isIndex = fileName === 'index';
    const isDynamic = fileName.startsWith('[') && fileName.endsWith(']');
    
    // Determine page type based on content and path
    let pageType = 'default';
    if (originalContent.includes('landing') || originalContent.includes('marketing')) {
      pageType = 'landing';
    } else if (filePath.includes('reports/')) {
      pageType = 'report';
    } else if (isIndex) {
      pageType = 'index';
    }
    
    const templates = {
      default: this.getDefaultTemplate(fileName),
      landing: this.getLandingTemplate(fileName),
      report: this.getReportTemplate(fileName),
      index: this.getIndexTemplate(fileName)
    };
    
    const template = templates[pageType] || templates.default;
    
    // Preserve any existing content that might be useful
    const preservedContent = this.extractPreservedContent(originalContent);
    
    return template.replace(/\{\{PAGE_NAME\}\}/g, fileName)
                  .replace(/\{\{PRESERVED_CONTENT\}\}/g, preservedContent);
  }
  
  getDefaultTemplate(fileName) {
    return `import React from 'react';
import Head from 'next/head';

export default function ${this.formatComponentName(fileName)}() {
  return (
    <>
      <Head>
        <title>${this.formatTitle(fileName)} — Zion Tech Group</title>
        <meta name="description" content="Generated page for ${this.formatTitle(fileName)}" />
        <meta property="og:title" content="${this.formatTitle(fileName)} — Zion Tech Group" />
        <meta property="og:description" content="Generated page for ${this.formatTitle(fileName)}" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">${this.formatTitle(fileName)}</h1>
          <div className="prose prose-invert max-w-none">
            {{PRESERVED_CONTENT}}
            <p className="text-white/70">Page content goes here.</p>
          </div>
        </main>
      </div>
    </>
  );
}`;
  }
  
  getLandingTemplate(fileName) {
    return `import React from 'react';
import Head from 'next/head';

export default function ${this.formatComponentName(fileName)}() {
  return (
    <>
      <Head>
        <title>${this.formatTitle(fileName)} — Zion Tech Group</title>
        <meta name="description" content="Landing page for ${this.formatTitle(fileName)}" />
        <meta property="og:title" content="${this.formatTitle(fileName)} — Zion Tech Group" />
        <meta property="og:description" content="Landing page for ${this.formatTitle(fileName)}" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              ${this.formatTitle(fileName)}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Landing page content and call-to-action.
            </p>
          </section>
          
          {{PRESERVED_CONTENT}}
          
          <section className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
                <p className="text-white/70">Description of the first feature.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
                <p className="text-white/70">Description of the second feature.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}`;
  }
  
  getReportTemplate(fileName) {
    return `import React from 'react';
import Head from 'next/head';

export default function ${this.formatComponentName(fileName)}() {
  return (
    <>
      <Head>
        <title>${this.formatTitle(fileName)} — Zion Tech Group</title>
        <meta name="description" content="Report: ${this.formatTitle(fileName)}" />
        <meta property="og:title" content="${this.formatTitle(fileName)} — Zion Tech Group" />
        <meta property="og:description" content="Report: ${this.formatTitle(fileName)}" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-slate-950 text-white">
        <main className="container mx-auto px-6 py-12 prose prose-invert">
          <h1 className="text-3xl font-extrabold">${this.formatTitle(fileName)}</h1>
          <div className="mt-4">
            {{PRESERVED_CONTENT}}
          </div>
          <p className="mt-6 text-white/60 text-sm">Auto-generated by Cloud Content Factory.</p>
        </main>
      </div>
    </>
  );
}`;
  }
  
  getIndexTemplate(fileName) {
    return `import React from 'react';
import Head from 'next/head';

export default function ${this.formatComponentName(fileName)}() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
          </section>
          
          {{PRESERVED_CONTENT}}
          
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold">Welcome to Zion Tech Group</h3>
                <p className="mt-1 text-sm text-white/75">Your gateway to autonomous innovation.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}`;
  }
  
  formatComponentName(fileName) {
    // Convert kebab-case or snake_case to PascalCase
    return fileName
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace(/\s+/g, '');
  }
  
  formatTitle(fileName) {
    // Convert kebab-case or snake_case to Title Case
    return fileName
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
  
  extractPreservedContent(originalContent) {
    // Try to preserve useful content from the original file
    const lines = originalContent.split('\n');
    const preservedLines = [];
    
    for (const line of lines) {
      // Keep lines that look like content (not just whitespace or comments)
      if (line.trim() && 
          !line.trim().startsWith('//') && 
          !line.trim().startsWith('/*') && 
          !line.trim().startsWith('{/*') &&
          line.includes('<') && line.includes('>')) {
        preservedLines.push(line);
      }
    }
    
    return preservedLines.length > 0 ? preservedLines.join('\n') : '';
  }
  
  async fixExportIssues(errorLog) {
    log('🔧 Attempting to fix export issues...');
    
    // This would handle various export-related issues
    // For now, return a placeholder
    return {
      success: false,
      fix: 'Export issues require manual review',
      file: 'unknown'
    };
  }
  
  async fixSyntaxErrors(errorLog) {
    log('🔧 Attempting to fix syntax errors...');
    
    // This would handle various syntax errors
    // For now, return a placeholder
    return {
      success: false,
      fix: 'Syntax errors require manual review',
      file: 'unknown'
    };
  }
  
  async fixDependencyIssues(errorLog) {
    log('🔧 Attempting to fix dependency issues...');
    
    try {
      // Try to reinstall dependencies
      log('📦 Reinstalling dependencies...');
      execSync('npm install', { stdio: 'inherit', cwd: this.workspace });
      
      return {
        success: true,
        fix: 'Reinstalled dependencies',
        file: 'package.json'
      };
    } catch (error) {
      log(`❌ Failed to reinstall dependencies: ${error.message}`);
      return {
        success: false,
        fix: 'Dependency reinstallation failed',
        file: 'package.json'
      };
    }
  }
  
  async fixModuleIssues(errorLog) {
    log('🔧 Attempting to fix module issues...');
    
    // This would handle module resolution issues
    // For now, return a placeholder
    return {
      success: false,
      fix: 'Module issues require manual review',
      file: 'unknown'
    };
  }
  
  async fixParsingErrors(errorLog) {
    log('🔧 Attempting to fix parsing errors...');
    
    // This would handle parsing errors
    // For now, return a placeholder
    return {
      success: false,
      fix: 'Parsing errors require manual review',
      file: 'unknown'
    };
  }
  
  generateRecoveryReport() {
    const totalFixes = this.fixesApplied.length;
    const successfulFixes = this.fixesApplied.filter(f => f.success).length;
    
    return {
      summary: {
        totalFixes,
        successfulFixes,
        timestamp: new Date().toISOString()
      },
      fixesApplied: this.fixesApplied,
      recommendations: this.generateRecommendations()
    };
  }
  
  generateRecommendations() {
    const recommendations = [];
    
    if (this.fixesApplied.length === 0) {
      recommendations.push('No automatic fixes were applied. Manual intervention required.');
      recommendations.push('Check the build error logs for specific issues.');
      recommendations.push('Consider running "npm run build:validate" to identify page structure issues.');
    } else {
      recommendations.push('Automatic fixes were applied. Try building again.');
      recommendations.push('Review the fixed files to ensure they meet your requirements.');
      recommendations.push('Consider running "npm run build:health-check" to verify the fixes.');
    }
    
    return recommendations;
  }
  
  saveReport(report) {
    const outDir = path.join(this.workspace, 'public', 'reports', 'build-recovery');
    ensureDir(outDir);
    
    const outJson = path.join(outDir, 'latest.json');
    const outHtml = path.join(outDir, 'index.html');
    
    // Save JSON report
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const html = this.generateHtmlReport(report);
    fs.writeFileSync(outHtml, html);
    
    log(`📊 Build recovery report saved to ${outJson} and ${outHtml}`);
  }
  
  generateHtmlReport(report) {
    const { summary, fixesApplied, recommendations } = report;
    
    const html = [];
    html.push('<!doctype html>');
    html.push('<meta charset="utf-8"/>');
    html.push('<title>Build Failure Recovery Report</title>');
    html.push('<style>');
    html.push('body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff}');
    html.push('.card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0}');
    html.push('code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px}');
    html.push('.status{display:inline-block;margin:2px;padding:2px 8px;border-radius:999px;font-size:12px}');
    html.push('.success{background:rgba(16,185,129,.2);border:1px solid #10b981;color:#10b981}');
    html.push('.info{background:rgba(59,130,246,.2);border:1px solid #3b82f6;color:#3b82f6}');
    html.push('</style>');
    
    html.push(`<h1>Build Failure Recovery Report</h1>`);
    html.push(`<p>Generated ${new Date().toLocaleString()}</p>`);
    
    // Summary
    html.push(`<div class="card">`);
    html.push(`<h2>Recovery Summary</h2>`);
    html.push(`<p><strong>Total Fixes Attempted:</strong> ${summary.totalFixes}</p>`);
    html.push(`<p><strong>Successful Fixes:</strong> ${summary.successfulFixes}</p>`);
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
  const recovery = new BuildFailureRecovery();
  
  // Check if we have a build error log to analyze
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    log('❌ No build error log provided');
    log('Usage: node build-failure-recovery.cjs <error-log-file>');
    process.exit(1);
  }
  
  const errorLogFile = args[0];
  
  if (!fs.existsSync(errorLogFile)) {
    log(`❌ Error log file not found: ${errorLogFile}`);
    process.exit(1);
  }
  
  try {
    const errorLog = fs.readFileSync(errorLogFile, 'utf8');
    const report = await recovery.analyzeBuildError(errorLog);
    recovery.saveReport(report);
    
    log('📊 Build failure recovery complete');
    log(`   Total fixes: ${report.summary.totalFixes}`);
    log(`   Successful fixes: ${report.summary.successfulFixes}`);
    
    if (report.summary.successfulFixes > 0) {
      log('✅ Some issues were automatically fixed. Try building again.');
    } else {
      log('⚠️ No automatic fixes were applied. Manual intervention required.');
    }
    
  } catch (error) {
    log(`❌ Build failure recovery failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  BuildFailureRecovery
};