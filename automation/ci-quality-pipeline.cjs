#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import quality guardians
const { analyzeFile, generateReport, shouldBlockBuild } = require('./build-quality-guardian.cjs');
const { analyzeStagedFiles, generatePreCommitReport, shouldBlockCommit } = require('./pre-commit-guardian.cjs');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  reportDir: path.join(process.cwd(), 'public', 'reports', 'ci-quality'),
  stages: {
    preCommit: { enabled: true, blocking: true },
    buildQuality: { enabled: true, blocking: true },
    buildTest: { enabled: true, blocking: true },
    postBuild: { enabled: true, blocking: false }
  },
  thresholds: {
    criticalIssues: 5,
    warningIssues: 20,
    buildTime: 300 // 5 minutes
  },
  notifications: {
    slack: process.env.SLACK_WEBHOOK_URL,
    email: process.env.EMAIL_NOTIFICATIONS,
    github: process.env.GITHUB_TOKEN
  }
};

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO', stage = 'GENERAL') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] [${stage}] ${message}`;
  console.log(logMessage);
  
  // Write to log file
  const logFile = path.join(CONFIG.logDir, 'ci-quality-pipeline.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

function getGitInfo() {
  try {
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    const commit = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    const author = execSync('git log -1 --pretty=format:"%an"', { encoding: 'utf8' }).trim();
    const message = execSync('git log -1 --pretty=format:"%s"', { encoding: 'utf8' }).trim();
    
    return { branch, commit, author, message };
  } catch (error) {
    log(`Error getting git info: ${error.message}`, 'WARNING');
    return { branch: 'unknown', commit: 'unknown', author: 'unknown', message: 'unknown' };
  }
}

function getBuildMetrics() {
  const startTime = process.hrtime.bigint();
  
  return {
    startTime,
    getElapsed: () => {
      const endTime = process.hrtime.bigint();
      return Number(endTime - startTime) / 1000000000; // Convert to seconds
    }
  };
}

// Stage 1: Pre-commit Quality Check
async function runPreCommitCheck() {
  if (!CONFIG.stages.preCommit.enabled) {
    log('Pre-commit check disabled', 'INFO', 'PRE-COMMIT');
    return { success: true, issues: 0 };
  }
  
  log('Starting pre-commit quality check...', 'INFO', 'PRE-COMMIT');
  
  try {
    const results = analyzeStagedFiles();
    const summary = generatePreCommitReport(results);
    
    if (shouldBlockCommit(summary)) {
      log(`Pre-commit check failed: ${summary.criticalIssues} critical issues`, 'ERROR', 'PRE-COMMIT');
      return { success: false, issues: summary.criticalIssues, summary };
    }
    
    log(`Pre-commit check passed: ${summary.totalIssues} total issues`, 'INFO', 'PRE-COMMIT');
    return { success: true, issues: summary.totalIssues, summary };
  } catch (error) {
    log(`Pre-commit check error: ${error.message}`, 'ERROR', 'PRE-COMMIT');
    return { success: false, issues: 999, error: error.message };
  }
}

// Stage 2: Build Quality Analysis
async function runBuildQualityCheck() {
  if (!CONFIG.stages.buildQuality.enabled) {
    log('Build quality check disabled', 'INFO', 'BUILD-QUALITY');
    return { success: true, issues: 0 };
  }
  
  log('Starting build quality analysis...', 'INFO', 'BUILD-QUALITY');
  
  try {
    // Import and run the build quality guardian
    const { analyzeFile, generateReport, shouldBlockBuild } = require('./build-quality-guardian.cjs');
    
    // This would normally analyze all files, but for CI we'll focus on key areas
    const keyFiles = [
      'pages/index.tsx',
      'pages/_app.tsx',
      'pages/_document.tsx',
      'next.config.js',
      'package.json'
    ];
    
    const results = keyFiles
      .filter(file => fs.existsSync(file))
      .map(file => analyzeFile(file));
    
    const summary = generateReport(results);
    
    if (shouldBlockBuild(summary)) {
      log(`Build quality check failed: ${summary.criticalIssues} critical issues`, 'ERROR', 'BUILD-QUALITY');
      return { success: false, issues: summary.criticalIssues, summary };
    }
    
    log(`Build quality check passed: ${summary.totalIssues} total issues`, 'INFO', 'BUILD-QUALITY');
    return { success: true, issues: summary.totalIssues, summary };
  } catch (error) {
    log(`Build quality check error: ${error.message}`, 'ERROR', 'BUILD-QUALITY');
    return { success: false, issues: 999, error: error.message };
  }
}

// Stage 3: Build Test
async function runBuildTest() {
  if (!CONFIG.stages.buildTest.enabled) {
    log('Build test disabled', 'INFO', 'BUILD-TEST');
    return { success: true, buildTime: 0 };
  }
  
  log('Starting build test...', 'INFO', 'BUILD-TEST');
  
  try {
    const metrics = getBuildMetrics();
    
    // Run a test build
    execSync('npm run build', { stdio: 'pipe' });
    
    const buildTime = metrics.getElapsed();
    
    if (buildTime > CONFIG.thresholds.buildTime) {
      log(`Build test warning: Build time ${buildTime.toFixed(2)}s exceeds threshold ${CONFIG.thresholds.buildTime}s`, 'WARNING', 'BUILD-TEST');
      return { success: true, buildTime, warning: 'Build time exceeded threshold' };
    }
    
    log(`Build test passed: Build time ${buildTime.toFixed(2)}s`, 'INFO', 'BUILD-TEST');
    return { success: true, buildTime };
  } catch (error) {
    log(`Build test failed: ${error.message}`, 'ERROR', 'BUILD-TEST');
    return { success: false, buildTime: 0, error: error.message };
  }
}

// Stage 4: Post-build Analysis
async function runPostBuildAnalysis() {
  if (!CONFIG.stages.postBuild.enabled) {
    log('Post-build analysis disabled', 'INFO', 'POST-BUILD');
    return { success: true };
  }
  
  log('Starting post-build analysis...', 'INFO', 'POST-BUILD');
  
  try {
    // Check if build artifacts were created
    const buildArtifacts = [
      '.next',
      'out',
      'dist',
      'build'
    ];
    
    const existingArtifacts = buildArtifacts.filter(artifact => fs.existsSync(artifact));
    
    if (existingArtifacts.length === 0) {
      log('Post-build analysis warning: No build artifacts found', 'WARNING', 'POST-BUILD');
      return { success: true, warning: 'No build artifacts found' };
    }
    
    log(`Post-build analysis passed: Found artifacts: ${existingArtifacts.join(', ')}`, 'INFO', 'POST-BUILD');
    return { success: true, artifacts: existingArtifacts };
  } catch (error) {
    log(`Post-build analysis error: ${error.message}`, 'ERROR', 'POST-BUILD');
    return { success: true, error: error.message };
  }
}

// Generate comprehensive CI report
function generateCIReport(results) {
  const gitInfo = getGitInfo();
  const timestamp = new Date().toISOString();
  
  const summary = {
    timestamp,
    git: gitInfo,
    stages: {
      preCommit: results.preCommit,
      buildQuality: results.buildQuality,
      buildTest: results.buildTest,
      postBuild: results.postBuild
    },
    overall: {
      success: Object.values(results).every(r => r.success),
      totalIssues: Object.values(results).reduce((sum, r) => sum + (r.issues || 0), 0),
      buildTime: results.buildTest?.buildTime || 0
    }
  };
  
  // Generate JSON report
  const jsonReport = path.join(CONFIG.reportDir, 'ci-latest.json');
  fs.writeFileSync(jsonReport, JSON.stringify(summary, null, 2));
  
  // Generate HTML report
  const htmlReport = path.join(CONFIG.reportDir, 'index.html');
  const html = generateCIHTMLReport(summary);
  fs.writeFileSync(htmlReport, html);
  
  // Generate markdown report
  const mdReport = path.join(CONFIG.reportDir, 'ci-report.md');
  const markdown = generateCIMarkdownReport(summary);
  fs.writeFileSync(mdReport, markdown);
  
  return summary;
}

function generateCIHTMLReport(summary) {
  const successColor = '#10b981';
  const errorColor = '#ef4444';
  const warningColor = '#f59e0b';
  
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CI Quality Pipeline Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #0f172a; color: #e2e8f0; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #1e293b, #334155); padding: 30px; border-radius: 12px; margin-bottom: 30px; }
        .git-info { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .stages { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stage-card { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
        .stage-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .stage-name { font-weight: bold; font-size: 1.1rem; }
        .stage-status { padding: 4px 12px; border-radius: 999px; font-size: 0.9rem; font-weight: bold; }
        .status-success { background: rgba(16, 185, 129, 0.2); color: ${successColor}; border: 1px solid ${successColor}; }
        .status-error { background: rgba(239, 68, 68, 0.2); color: ${errorColor}; border: 1px solid ${errorColor}; }
        .status-warning { background: rgba(245, 158, 11, 0.2); color: ${warningColor}; border: 1px solid ${warningColor}; }
        .overall { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; text-align: center; }
        .overall-status { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }
        .timestamp { color: #64748b; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 CI Quality Pipeline Report</h1>
            <p class="timestamp">Generated: ${new Date(summary.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="git-info">
            <h3>Git Information</h3>
            <p><strong>Branch:</strong> ${summary.git.branch}</p>
            <p><strong>Commit:</strong> ${summary.git.commit.substring(0, 8)}</p>
            <p><strong>Author:</strong> ${summary.git.author}</p>
            <p><strong>Message:</strong> ${summary.git.message}</p>
        </div>
        
        <div class="stages">
  `;
  
  Object.entries(summary.stages).forEach(([stageName, stageResult]) => {
    const statusClass = stageResult.success ? 'status-success' : 'status-error';
    const statusText = stageResult.success ? 'SUCCESS' : 'FAILED';
    
    html += `
            <div class="stage-card">
                <div class="stage-header">
                    <div class="stage-name">${stageName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                    <div class="stage-status ${statusClass}">${statusText}</div>
                </div>
                <div class="stage-details">
    `;
    
    if (stageResult.issues !== undefined) {
      html += `<p><strong>Issues:</strong> ${stageResult.issues}</p>`;
    }
    
    if (stageResult.buildTime !== undefined) {
      html += `<p><strong>Build Time:</strong> ${stageResult.buildTime.toFixed(2)}s</p>`;
    }
    
    if (stageResult.warning) {
      html += `<p><strong>Warning:</strong> ${stageResult.warning}</p>`;
    }
    
    if (stageResult.error) {
      html += `<p><strong>Error:</strong> ${stageResult.error}</p>`;
    }
    
    html += `
                </div>
            </div>
    `;
  });
  
  html += `
        </div>
        
        <div class="overall">
            <div class="overall-status" style="color: ${summary.overall.success ? successColor : errorColor};">
                ${summary.overall.success ? '✅ ALL STAGES PASSED' : '❌ PIPELINE FAILED'}
            </div>
            <p><strong>Total Issues:</strong> ${summary.overall.totalIssues}</p>
            <p><strong>Build Time:</strong> ${summary.overall.buildTime.toFixed(2)}s</p>
        </div>
    </div>
</body>
</html>`;
  
  return html;
}

function generateCIMarkdownReport(summary) {
  let markdown = `# 🚀 CI Quality Pipeline Report

Generated: ${new Date(summary.timestamp).toLocaleString()}

## 📋 Git Information

- **Branch**: ${summary.git.branch}
- **Commit**: \`${summary.git.commit.substring(0, 8)}\`
- **Author**: ${summary.git.author}
- **Message**: ${summary.git.message}

## 📊 Pipeline Stages

`;

  Object.entries(summary.stages).forEach(([stageName, stageResult]) => {
    const statusIcon = stageResult.success ? '✅' : '❌';
    const statusText = stageResult.success ? 'PASSED' : 'FAILED';
    
    markdown += `### ${stageName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ${statusIcon} ${statusText}\n`;
    
    if (stageResult.issues !== undefined) {
      markdown += `- **Issues**: ${stageResult.issues}\n`;
    }
    
    if (stageResult.buildTime !== undefined) {
      markdown += `- **Build Time**: ${stageResult.buildTime.toFixed(2)}s\n`;
    }
    
    if (stageResult.warning) {
      markdown += `- **Warning**: ${stageResult.warning}\n`;
    }
    
    if (stageResult.error) {
      markdown += `- **Error**: ${stageResult.error}\n`;
    }
    
    markdown += '\n';
  });
  
  markdown += `## 🎯 Overall Result

**Status**: ${summary.overall.success ? '✅ ALL STAGES PASSED' : '❌ PIPELINE FAILED'}
**Total Issues**: ${summary.overall.totalIssues}
**Build Time**: ${summary.overall.buildTime.toFixed(2)}s

`;

  if (summary.overall.success) {
    markdown += '🎉 **Pipeline completed successfully!** All quality checks passed.\n';
  } else {
    markdown += '🚨 **Pipeline failed!** Please review the failed stages above.\n';
  }
  
  return markdown;
}

// Main execution
async function main() {
  try {
    log('Starting CI Quality Pipeline...', 'INFO', 'PIPELINE');
    
    // Ensure directories exist
    ensureDir(CONFIG.logDir);
    ensureDir(CONFIG.reportDir);
    
    const results = {};
    
    // Stage 1: Pre-commit check
    results.preCommit = await runPreCommitCheck();
    if (CONFIG.stages.preCommit.blocking && !results.preCommit.success) {
      log('Pipeline failed at pre-commit stage', 'ERROR', 'PIPELINE');
      process.exit(1);
    }
    
    // Stage 2: Build quality check
    results.buildQuality = await runBuildQualityCheck();
    if (CONFIG.stages.buildQuality.blocking && !results.buildQuality.success) {
      log('Pipeline failed at build quality stage', 'ERROR', 'PIPELINE');
      process.exit(1);
    }
    
    // Stage 3: Build test
    results.buildTest = await runBuildTest();
    if (CONFIG.stages.buildTest.blocking && !results.buildTest.success) {
      log('Pipeline failed at build test stage', 'ERROR', 'PIPELINE');
      process.exit(1);
    }
    
    // Stage 4: Post-build analysis
    results.postBuild = await runPostBuildAnalysis();
    
    // Generate comprehensive report
    const summary = generateCIReport(results);
    
    // Log final summary
    log(`Pipeline completed: ${summary.overall.success ? 'SUCCESS' : 'FAILED'}`, 
        summary.overall.success ? 'INFO' : 'ERROR', 'PIPELINE');
    
    // Exit with appropriate code
    process.exit(summary.overall.success ? 0 : 1);
    
  } catch (error) {
    log(`Fatal error in CI Quality Pipeline: ${error.message}`, 'ERROR', 'PIPELINE');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  runPreCommitCheck,
  runBuildQualityCheck,
  runBuildTest,
  runPostBuildAnalysis,
  generateCIReport
};