#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  reportDir: path.join(process.cwd(), 'public', 'reports', 'build-quality'),
  maxIssues: 10, // Maximum issues before blocking build
  criticalPatterns: [
    // Missing React component structure
    { pattern: /^import.*\n(?!export default)/m, severity: 'CRITICAL', message: 'Missing export default statement' },
    { pattern: /^import.*\n(?!.*function.*\n.*export default)/m, severity: 'CRITICAL', message: 'Missing React component function' },
    
    // Syntax errors
    { pattern: /function\s+\w+\(\)\{/g, severity: 'CRITICAL', message: 'Missing space before opening brace: function Name() {' },
    { pattern: /if\s*\(.*\)\{/g, severity: 'CRITICAL', message: 'Missing space before opening brace: if (condition) {' },
    { pattern: /for\s*\(.*\)\{/g, severity: 'CRITICAL', message: 'Missing space before opening brace: for (condition) {' },
    { pattern: /while\s*\(.*\)\{/g, severity: 'CRITICAL', message: 'Missing space before opening brace: while (condition) {' },
    
    // Common React issues
    { pattern: /<div\s+(?!.*\bkey=)/g, severity: 'WARNING', message: 'List items should have unique key props' },
    { pattern: /dangerouslySetInnerHTML/g, severity: 'WARNING', message: 'Using dangerouslySetInnerHTML - security review needed' },
    
    // TypeScript/JSX issues
    { pattern: /:\s*any\b/g, severity: 'WARNING', message: 'Using :any type - consider proper typing' },
    { pattern: /@ts-ignore/g, severity: 'WARNING', message: 'Using @ts-ignore - consider fixing the underlying issue' },
    
    // Import/Export issues
    { pattern: /import\s+.*\s+from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\//g, severity: 'WARNING', message: 'Deep relative imports - consider using absolute paths' },
    { pattern: /export\s+{\s*}\s*from/g, severity: 'WARNING', message: 'Empty re-exports - consider removing or adding content' }
  ],
  
  // File patterns to check
  includePatterns: ['pages/**/*.tsx', 'pages/**/*.jsx', 'components/**/*.tsx', 'components/**/*.jsx'],
  excludePatterns: ['node_modules/**', '.next/**', 'out/**', '**/*.d.ts', 'pages/reports/**']
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
  const logFile = path.join(CONFIG.logDir, 'build-quality-guardian.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

function findFiles(patterns, excludePatterns) {
  const files = new Set();
  
  patterns.forEach(pattern => {
    try {
      const matches = execSync(`find . -path "${pattern}" -type f`, { encoding: 'utf8' })
        .split('\n')
        .filter(Boolean)
        .map(f => path.resolve(f));
      
      matches.forEach(f => files.add(f));
    } catch (error) {
      log(`Error finding files with pattern ${pattern}: ${error.message}`, 'WARNING');
    }
  });
  
  // Apply exclusions
  const excluded = new Set();
  excludePatterns.forEach(pattern => {
    try {
      const matches = execSync(`find . -path "${pattern}" -type f`, { encoding: 'utf8' })
        .split('\n')
        .filter(Boolean)
        .map(f => path.resolve(f));
      
      matches.forEach(f => excluded.add(f));
    } catch (error) {
      // Ignore exclusion pattern errors
    }
  });
  
  return Array.from(files).filter(f => !excluded.has(f));
}

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);
    const issues = [];
    
    // Check for critical patterns
    CONFIG.criticalPatterns.forEach(({ pattern, severity, message }) => {
      const matches = content.match(pattern);
      if (matches) {
        const lines = content.split('\n');
        const lineNumbers = [];
        
        lines.forEach((line, index) => {
          if (pattern.test(line)) {
            lineNumbers.push(index + 1);
          }
        });
        
        if (lineNumbers.length > 0) {
          issues.push({
            severity,
            message,
            lineNumbers,
            pattern: pattern.toString().slice(0, 100)
          });
        }
      }
    });
    
    // Check for missing React component structure
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      const hasImport = /^import\s+.*\s+from\s+['"]/.test(content);
      const hasExportDefault = /export\s+default\s+/.test(content);
      const hasFunction = /function\s+\w+\s*\(/.test(content) || /const\s+\w+\s*=\s*\(/.test(content);
      
      if (hasImport && (!hasExportDefault || !hasFunction)) {
        issues.push({
          severity: 'CRITICAL',
          message: 'Missing proper React component structure (export default function)',
          lineNumbers: [1],
          pattern: 'React component structure check'
        });
      }
    }
    
    // Check for empty files
    if (content.trim().length === 0) {
      issues.push({
        severity: 'CRITICAL',
        message: 'File is empty',
        lineNumbers: [1],
        pattern: 'Empty file check'
      });
    }
    
    return {
      file: relativePath,
      issues,
      totalIssues: issues.length
    };
  } catch (error) {
    return {
      file: path.relative(process.cwd(), filePath),
      issues: [{
        severity: 'ERROR',
        message: `Error reading file: ${error.message}`,
        lineNumbers: [],
        pattern: 'File read error'
      }],
      totalIssues: 1
    };
  }
}

function generateReport(results) {
  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: results.length,
    totalIssues: results.reduce((sum, r) => sum + r.totalIssues, 0),
    criticalIssues: results.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'CRITICAL').length, 0),
    warningIssues: results.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'WARNING').length, 0),
    errorIssues: results.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'ERROR').length, 0)
  };
  
  // Generate JSON report
  const jsonReport = path.join(CONFIG.reportDir, 'latest.json');
  fs.writeFileSync(jsonReport, JSON.stringify({ summary, results }, null, 2));
  
  // Generate HTML report
  const htmlReport = path.join(CONFIG.reportDir, 'index.html');
  const html = generateHTMLReport(summary, results);
  fs.writeFileSync(htmlReport, html);
  
  // Generate markdown report for GitHub
  const mdReport = path.join(CONFIG.reportDir, 'report.md');
  const markdown = generateMarkdownReport(summary, results);
  fs.writeFileSync(mdReport, markdown);
  
  return summary;
}

function generateHTMLReport(summary, results) {
  const criticalColor = '#ef4444';
  const warningColor = '#f59e0b';
  const errorColor = '#dc2626';
  
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Build Quality Guardian Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #0f172a; color: #e2e8f0; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #1e293b, #334155); padding: 30px; border-radius: 12px; margin-bottom: 30px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center; }
        .stat-number { font-size: 2rem; font-weight: bold; margin-bottom: 8px; }
        .critical { color: ${criticalColor}; }
        .warning { color: ${warningColor}; }
        .error { color: ${errorColor}; }
        .file-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; margin-bottom: 20px; overflow: hidden; }
        .file-header { background: rgba(255,255,255,0.05); padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .file-name { font-family: monospace; font-size: 1.1rem; color: #60a5fa; }
        .issue { padding: 10px 15px; border-left: 4px solid; margin: 5px 0; }
        .issue.critical { border-color: ${criticalColor}; background: rgba(239, 68, 68, 0.1); }
        .issue.warning { border-color: ${warningColor}; background: rgba(245, 158, 11, 0.1); }
        .issue.error { border-color: ${errorColor}; background: rgba(220, 38, 38, 0.1); }
        .line-numbers { font-family: monospace; color: #94a3b8; font-size: 0.9rem; }
        .timestamp { color: #64748b; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ Build Quality Guardian Report</h1>
            <p class="timestamp">Generated: ${new Date(summary.generatedAt).toLocaleString()}</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number">${summary.totalFiles}</div>
                <div>Files Analyzed</div>
            </div>
            <div class="stat-card">
                <div class="stat-number critical">${summary.criticalIssues}</div>
                <div>Critical Issues</div>
            </div>
            <div class="stat-card">
                <div class="stat-number warning">${summary.warningIssues}</div>
                <div>Warnings</div>
            </div>
            <div class="stat-card">
                <div class="stat-number error">${summary.errorIssues}</div>
                <div>Errors</div>
            </div>
        </div>
        
        <h2>Issues by File</h2>
  `;
  
  results.forEach(result => {
    if (result.totalIssues > 0) {
      html += `
        <div class="file-card">
            <div class="file-header">
                <div class="file-name">${result.file}</div>
                <div class="timestamp">${result.totalIssues} issue(s)</div>
            </div>
      `;
      
      result.issues.forEach(issue => {
        const severityClass = issue.severity.toLowerCase();
        const severityColor = issue.severity === 'CRITICAL' ? criticalColor : 
                             issue.severity === 'WARNING' ? warningColor : errorColor;
        
        html += `
            <div class="issue ${severityClass}">
                <div style="color: ${severityColor}; font-weight: bold;">${issue.severity}</div>
                <div>${issue.message}</div>
                ${issue.lineNumbers.length > 0 ? `<div class="line-numbers">Lines: ${issue.lineNumbers.join(', ')}</div>` : ''}
            </div>
        `;
      });
      
      html += `</div>`;
    }
  });
  
  html += `
    </div>
</body>
</html>`;
  
  return html;
}

function generateMarkdownReport(summary, results) {
  let markdown = `# 🛡️ Build Quality Guardian Report

Generated: ${new Date(summary.generatedAt).toLocaleString()}

## 📊 Summary

- **Files Analyzed**: ${summary.totalFiles}
- **Total Issues**: ${summary.totalIssues}
- **Critical Issues**: ${summary.criticalIssues}
- **Warnings**: ${summary.warningIssues}
- **Errors**: ${summary.errorIssues}

## 🚨 Critical Issues

`;

  const criticalResults = results.filter(r => r.issues.some(i => i.severity === 'CRITICAL'));
  
  if (criticalResults.length === 0) {
    markdown += '✅ No critical issues found!\n\n';
  } else {
    criticalResults.forEach(result => {
      markdown += `### \`${result.file}\`\n`;
      result.issues.filter(i => i.severity === 'CRITICAL').forEach(issue => {
        markdown += `- **${issue.severity}**: ${issue.message}`;
        if (issue.lineNumbers.length > 0) {
          markdown += ` (Lines: ${issue.lineNumbers.join(', ')})`;
        }
        markdown += '\n';
      });
      markdown += '\n';
    });
  }
  
  markdown += `## ⚠️ Warnings\n`;
  
  const warningResults = results.filter(r => r.issues.some(i => i.severity === 'WARNING'));
  
  if (warningResults.length === 0) {
    markdown += '✅ No warnings found!\n\n';
  } else {
    warningResults.forEach(result => {
      markdown += `### \`${result.file}\`\n`;
      result.issues.filter(i => i.severity === 'WARNING').forEach(issue => {
        markdown += `- **${issue.severity}**: ${issue.message}`;
        if (issue.lineNumbers.length > 0) {
          markdown += ` (Lines: ${issue.lineNumbers.join(', ')})`;
        }
        markdown += '\n';
      });
      markdown += '\n';
    });
  }
  
  return markdown;
}

function shouldBlockBuild(summary) {
  return summary.criticalIssues > CONFIG.maxIssues;
}

// Main execution
async function main() {
  try {
    log('Starting Build Quality Guardian analysis...');
    
    // Ensure directories exist
    ensureDir(CONFIG.logDir);
    ensureDir(CONFIG.reportDir);
    
    // Find files to analyze
    log('Finding files to analyze...');
    const files = findFiles(CONFIG.includePatterns, CONFIG.excludePatterns);
    log(`Found ${files.length} files to analyze`);
    
    // Analyze each file
    log('Analyzing files for quality issues...');
    const results = files.map(analyzeFile);
    
    // Generate report
    log('Generating quality report...');
    const summary = generateReport(results);
    
    // Log summary
    log(`Analysis complete: ${summary.totalFiles} files, ${summary.totalIssues} issues (${summary.criticalIssues} critical, ${summary.warningIssues} warnings, ${summary.errorIssues} errors)`);
    
    // Check if build should be blocked
    if (shouldBlockBuild(summary)) {
      log(`🚨 BUILD BLOCKED: Too many critical issues (${summary.criticalIssues} > ${CONFIG.maxIssues})`, 'CRITICAL');
      process.exit(1);
    } else if (summary.criticalIssues > 0) {
      log(`⚠️  Build allowed but ${summary.criticalIssues} critical issues found`, 'WARNING');
    } else {
      log('✅ Build quality check passed - no critical issues found', 'INFO');
    }
    
    // Exit with appropriate code
    process.exit(summary.criticalIssues > 0 ? 1 : 0);
    
  } catch (error) {
    log(`Fatal error in Build Quality Guardian: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { analyzeFile, generateReport, shouldBlockBuild };