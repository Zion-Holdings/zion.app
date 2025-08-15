#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import all quality guardians
const { analyzeFile, generateReport, shouldBlockBuild } = require('./build-quality-guardian.cjs');
const { analyzeStagedFiles, generatePreCommitReport, shouldBlockCommit } = require('./pre-commit-guardian.cjs');
const { 
  runPreCommitCheck, 
  runBuildQualityCheck, 
  runBuildTest, 
  runPostBuildAnalysis, 
  generateCIReport 
} = require('./ci-quality-pipeline.cjs');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  reportDir: path.join(process.cwd(), 'public', 'reports', 'build-quality-orchestrator'),
  modes: {
    development: {
      preCommit: true,
      buildQuality: true,
      buildTest: false,
      postBuild: false,
      autoFix: true,
      blocking: false
    },
    staging: {
      preCommit: true,
      buildQuality: true,
      buildTest: true,
      postBuild: true,
      autoFix: false,
      blocking: true
    },
    production: {
      preCommit: true,
      buildQuality: true,
      buildTest: true,
      postBuild: true,
      autoFix: false,
      blocking: true
    }
  },
  schedules: {
    hourly: '0 * * * *',
    daily: '0 0 * * *',
    weekly: '0 0 * * 0'
  }
};

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO', context = 'ORCHESTRATOR') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] [${context}] ${message}`;
  console.log(logMessage);
  
  // Write to log file
  const logFile = path.join(CONFIG.logDir, 'build-quality-orchestrator.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

function getCurrentMode() {
  const env = process.env.NODE_ENV || 'development';
  const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  
  if (branch === 'main' || branch === 'master') {
    return 'production';
  } else if (branch === 'staging' || branch === 'develop') {
    return 'staging';
  } else {
    return env === 'production' ? 'production' : 'development';
  }
}

function getGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    const staged = execSync('git diff --cached --name-only', { encoding: 'utf8' }).split('\n').filter(Boolean);
    const unstaged = execSync('git diff --name-only', { encoding: 'utf8' }).split('\n').filter(Boolean);
    
    return {
      hasChanges: status.length > 0,
      stagedFiles: staged,
      unstagedFiles: unstaged,
      totalChanges: staged.length + unstaged.length
    };
  } catch (error) {
    log(`Error getting git status: ${error.message}`, 'WARNING');
    return { hasChanges: false, stagedFiles: [], unstagedFiles: [], totalChanges: 0 };
  }
}

// Core orchestration functions
async function runDevelopmentMode() {
  log('Running in DEVELOPMENT mode', 'INFO', 'DEVELOPMENT');
  
  const mode = CONFIG.modes.development;
  const results = {};
  
  // Pre-commit check (non-blocking)
  if (mode.preCommit) {
    log('Running pre-commit check...', 'INFO', 'DEVELOPMENT');
    try {
      const gitStatus = getGitStatus();
      if (gitStatus.hasChanges) {
        results.preCommit = await runPreCommitCheck();
        log(`Pre-commit: ${results.preCommit.success ? 'PASSED' : 'FAILED'}`, 
            results.preCommit.success ? 'INFO' : 'WARNING', 'DEVELOPMENT');
      } else {
        log('No changes to check', 'INFO', 'DEVELOPMENT');
      }
    } catch (error) {
      log(`Pre-commit error: ${error.message}`, 'WARNING', 'DEVELOPMENT');
    }
  }
  
  // Build quality check (non-blocking)
  if (mode.buildQuality) {
    log('Running build quality check...', 'INFO', 'DEVELOPMENT');
    try {
      results.buildQuality = await runBuildQualityCheck();
      log(`Build quality: ${results.buildQuality.success ? 'PASSED' : 'FAILED'}`, 
          results.buildQuality.success ? 'INFO' : 'WARNING', 'DEVELOPMENT');
    } catch (error) {
      log(`Build quality error: ${error.message}`, 'WARNING', 'DEVELOPMENT');
    }
  }
  
  return results;
}

async function runStagingMode() {
  log('Running in STAGING mode', 'INFO', 'STAGING');
  
  const mode = CONFIG.modes.staging;
  const results = {};
  
  // All checks are blocking in staging
  try {
    // Pre-commit check
    if (mode.preCommit) {
      log('Running pre-commit check...', 'INFO', 'STAGING');
      results.preCommit = await runPreCommitCheck();
      if (!results.preCommit.success) {
        log('Pre-commit check failed - blocking deployment', 'ERROR', 'STAGING');
        return { success: false, stage: 'preCommit', results };
      }
    }
    
    // Build quality check
    if (mode.buildQuality) {
      log('Running build quality check...', 'INFO', 'STAGING');
      results.buildQuality = await runBuildQualityCheck();
      if (!results.buildQuality.success) {
        log('Build quality check failed - blocking deployment', 'ERROR', 'STAGING');
        return { success: false, stage: 'buildQuality', results };
      }
    }
    
    // Build test
    if (mode.buildTest) {
      log('Running build test...', 'INFO', 'STAGING');
      results.buildTest = await runBuildTest();
      if (!results.buildTest.success) {
        log('Build test failed - blocking deployment', 'ERROR', 'STAGING');
        return { success: false, stage: 'buildTest', results };
      }
    }
    
    // Post-build analysis
    if (mode.postBuild) {
      log('Running post-build analysis...', 'INFO', 'STAGING');
      results.postBuild = await runPostBuildAnalysis();
    }
    
    log('All staging checks passed', 'INFO', 'STAGING');
    return { success: true, results };
    
  } catch (error) {
    log(`Staging mode error: ${error.message}`, 'ERROR', 'STAGING');
    return { success: false, stage: 'error', error: error.message };
  }
}

async function runProductionMode() {
  log('Running in PRODUCTION mode', 'INFO', 'PRODUCTION');
  
  const mode = CONFIG.modes.production;
  const results = {};
  
  // All checks are blocking in production
  try {
    // Pre-commit check
    if (mode.preCommit) {
      log('Running pre-commit check...', 'INFO', 'PRODUCTION');
      results.preCommit = await runPreCommitCheck();
      if (!results.preCommit.success) {
        log('Pre-commit check failed - blocking production deployment', 'ERROR', 'PRODUCTION');
        return { success: false, stage: 'preCommit', results };
      }
    }
    
    // Build quality check
    if (mode.buildQuality) {
      log('Running build quality check...', 'INFO', 'PRODUCTION');
      results.buildQuality = await runBuildQualityCheck();
      if (!results.buildQuality.success) {
        log('Build quality check failed - blocking production deployment', 'ERROR', 'PRODUCTION');
        return { success: false, stage: 'buildQuality', results };
      }
    }
    
    // Build test
    if (mode.buildTest) {
      log('Running build test...', 'INFO', 'PRODUCTION');
      results.buildTest = await runBuildTest();
      if (!results.buildTest.success) {
        log('Build test failed - blocking production deployment', 'ERROR', 'PRODUCTION');
        return { success: false, stage: 'buildTest', results };
      }
    }
    
    // Post-build analysis
    if (mode.postBuild) {
      log('Running post-build analysis...', 'INFO', 'PRODUCTION');
      results.postBuild = await runPostBuildAnalysis();
    }
    
    log('All production checks passed', 'INFO', 'PRODUCTION');
    return { success: true, results };
    
  } catch (error) {
    log(`Production mode error: ${error.message}`, 'ERROR', 'PRODUCTION');
    return { success: false, stage: 'error', error: error.message };
  }
}

// Scheduled quality checks
async function runScheduledCheck(schedule = 'daily') {
  log(`Running scheduled ${schedule} quality check...`, 'INFO', 'SCHEDULED');
  
  try {
    const results = {};
    
    // Run comprehensive quality analysis
    results.buildQuality = await runBuildQualityCheck();
    results.buildTest = await runBuildTest();
    results.postBuild = await runPostBuildAnalysis();
    
    // Generate scheduled report
    const summary = {
      timestamp: new Date().toISOString(),
      schedule,
      results,
      overall: {
        success: Object.values(results).every(r => r.success),
        totalIssues: Object.values(results).reduce((sum, r) => sum + (r.issues || 0), 0)
      }
    };
    
    // Save scheduled report
    const reportPath = path.join(CONFIG.reportDir, `scheduled-${schedule}-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));
    
    log(`Scheduled ${schedule} check completed: ${summary.overall.success ? 'SUCCESS' : 'FAILED'}`, 
        summary.overall.success ? 'INFO' : 'WARNING', 'SCHEDULED');
    
    return summary;
    
  } catch (error) {
    log(`Scheduled check error: ${error.message}`, 'ERROR', 'SCHEDULED');
    return { success: false, error: error.message };
  }
}

// Auto-fix capabilities
async function runAutoFix() {
  log('Running auto-fix for common issues...', 'INFO', 'AUTO-FIX');
  
  try {
    const results = [];
    
    // Find files with common issues
    const files = execSync('find . -name "*.tsx" -o -name "*.jsx"', { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean)
      .filter(f => !f.includes('node_modules') && !f.includes('.next') && !f.includes('out'));
    
    log(`Found ${files.length} files to check for auto-fix`, 'INFO', 'AUTO-FIX');
    
    files.forEach(filePath => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { fixedContent, fixesApplied } = autoFixFile(filePath, content);
        
        if (fixesApplied > 0) {
          // Backup original
          const backupPath = filePath + '.backup-' + Date.now();
          fs.copyFileSync(filePath, backupPath);
          
          // Apply fixes
          fs.writeFileSync(filePath, fixedContent);
          
          results.push({
            file: filePath,
            fixesApplied,
            backupPath
          });
          
          log(`Auto-fixed ${fixesApplied} issues in ${filePath}`, 'INFO', 'AUTO-FIX');
        }
      } catch (error) {
        log(`Error auto-fixing ${filePath}: ${error.message}`, 'WARNING', 'AUTO-FIX');
      }
    });
    
    log(`Auto-fix completed: ${results.length} files fixed`, 'INFO', 'AUTO-FIX');
    return { success: true, filesFixed: results.length, results };
    
  } catch (error) {
    log(`Auto-fix error: ${error.message}`, 'ERROR', 'AUTO-FIX');
    return { success: false, error: error.message };
  }
}

function autoFixFile(filePath, content) {
  let fixedContent = content;
  let fixesApplied = 0;
  
  // Fix missing space before opening brace
  const bracePatterns = [
    { pattern: /function\s+(\w+)\s*\(\)\{/g, replacement: 'function $1() {' },
    { pattern: /if\s*\(([^)]+)\)\{/g, replacement: 'if ($1) {' },
    { pattern: /for\s*\(([^)]+)\)\{/g, replacement: 'for ($1) {' },
    { pattern: /while\s*\(([^)]+)\)\{/g, replacement: 'while ($1) {' },
    { pattern: /catch\s*\(([^)]+)\)\{/g, replacement: 'catch ($1) {' },
    { pattern: /else\s*\{/g, replacement: 'else {' }
  ];
  
  bracePatterns.forEach(({ pattern, replacement }) => {
    const matches = fixedContent.match(pattern);
    if (matches) {
      fixedContent = fixedContent.replace(pattern, replacement);
      fixesApplied += matches.length;
    }
  });
  
  return { fixedContent, fixesApplied };
}

// Generate comprehensive orchestration report
function generateOrchestrationReport(mode, results, success) {
  const timestamp = new Date().toISOString();
  const gitInfo = getGitStatus();
  
  const summary = {
    timestamp,
    mode,
    success,
    git: gitInfo,
    results,
    summary: {
      totalChecks: Object.keys(results).length,
      passedChecks: Object.values(results).filter(r => r.success).length,
      failedChecks: Object.values(results).filter(r => !r.success).length
    }
  };
  
  // Generate JSON report
  const jsonReport = path.join(CONFIG.reportDir, `orchestrator-${mode}-${Date.now()}.json`);
  fs.writeFileSync(jsonReport, JSON.stringify(summary, null, 2));
  
  // Generate markdown report
  const mdReport = path.join(CONFIG.reportDir, `orchestrator-${mode}-${Date.now()}.md`);
  const markdown = generateOrchestrationMarkdownReport(summary);
  fs.writeFileSync(mdReport, markdown);
  
  return summary;
}

function generateOrchestrationMarkdownReport(summary) {
  let markdown = `# 🎯 Build Quality Orchestrator Report

Generated: ${new Date(summary.timestamp).toLocaleString()}

## 📊 Summary

- **Mode**: ${summary.mode.toUpperCase()}
- **Status**: ${summary.success ? '✅ SUCCESS' : '❌ FAILED'}
- **Total Checks**: ${summary.summary.totalChecks}
- **Passed Checks**: ${summary.summary.passedChecks}
- **Failed Checks**: ${summary.summary.failedChecks}

## 🔍 Git Status

- **Has Changes**: ${summary.git.hasChanges ? 'Yes' : 'No'}
- **Staged Files**: ${summary.git.stagedFiles.length}
- **Unstaged Files**: ${summary.git.unstagedFiles.length}
- **Total Changes**: ${summary.git.totalChanges}

## 📋 Check Results

`;

  Object.entries(summary.results).forEach(([checkName, result]) => {
    const statusIcon = result.success ? '✅' : '❌';
    const statusText = result.success ? 'PASSED' : 'FAILED';
    
    markdown += `### ${checkName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ${statusIcon} ${statusText}\n`;
    
    if (result.issues !== undefined) {
      markdown += `- **Issues**: ${result.issues}\n`;
    }
    
    if (result.buildTime !== undefined) {
      markdown += `- **Build Time**: ${result.buildTime.toFixed(2)}s\n`;
    }
    
    if (result.warning) {
      markdown += `- **Warning**: ${result.warning}\n`;
    }
    
    if (result.error) {
      markdown += `- **Error**: ${result.error}\n`;
    }
    
    markdown += '\n';
  });
  
  return markdown;
}

// Main orchestration function
async function orchestrate(mode = null) {
  try {
    log('Starting Build Quality Orchestrator...', 'INFO', 'ORCHESTRATOR');
    
    // Ensure directories exist
    ensureDir(CONFIG.logDir);
    ensureDir(CONFIG.reportDir);
    
    // Determine mode
    const currentMode = mode || getCurrentMode();
    log(`Operating in ${currentMode.toUpperCase()} mode`, 'INFO', 'ORCHESTRATOR');
    
    let results;
    let success = false;
    
    // Run appropriate mode
    switch (currentMode) {
      case 'development':
        results = await runDevelopmentMode();
        success = true; // Development mode is non-blocking
        break;
        
      case 'staging':
        const stagingResult = await runStagingMode();
        results = stagingResult.results || {};
        success = stagingResult.success;
        break;
        
      case 'production':
        const productionResult = await runProductionMode();
        results = productionResult.results || {};
        success = productionResult.success;
        break;
        
      default:
        throw new Error(`Unknown mode: ${currentMode}`);
    }
    
    // Generate report
    const report = generateOrchestrationReport(currentMode, results, success);
    
    // Log final summary
    log(`Orchestration completed: ${success ? 'SUCCESS' : 'FAILED'} in ${currentMode} mode`, 
        success ? 'INFO' : 'ERROR', 'ORCHESTRATOR');
    
    return { success, mode: currentMode, results, report };
    
  } catch (error) {
    log(`Fatal error in orchestrator: ${error.message}`, 'ERROR', 'ORCHESTRATOR');
    return { success: false, error: error.message };
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  try {
    switch (command) {
      case 'run':
        const mode = args[1];
        const result = await orchestrate(mode);
        process.exit(result.success ? 0 : 1);
        break;
        
      case 'scheduled':
        const schedule = args[1] || 'daily';
        const scheduledResult = await runScheduledCheck(schedule);
        process.exit(scheduledResult.success ? 0 : 1);
        break;
        
      case 'autofix':
        const autofixResult = await runAutoFix();
        process.exit(autofixResult.success ? 0 : 1);
        break;
        
      case 'help':
        console.log(`
Build Quality Orchestrator

Usage:
  node automation/build-quality-orchestrator.cjs <command> [options]

Commands:
  run [mode]           Run quality checks in specified mode (development/staging/production)
  scheduled [type]     Run scheduled quality check (hourly/daily/weekly)
  autofix              Run auto-fix for common issues
  help                 Show this help message

Examples:
  node automation/build-quality-orchestrator.cjs run development
  node automation/build-quality-orchestrator.cjs run production
  node automation/build-quality-orchestrator.cjs scheduled daily
  node automation/build-quality-orchestrator.cjs autofix
        `);
        break;
        
      default:
        console.log('Unknown command. Use "help" for usage information.');
        process.exit(1);
    }
  } catch (error) {
    log(`CLI error: ${error.message}`, 'ERROR', 'CLI');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  orchestrate,
  runDevelopmentMode,
  runStagingMode,
  runProductionMode,
  runScheduledCheck,
  runAutoFix,
  getCurrentMode,
  getGitStatus
};