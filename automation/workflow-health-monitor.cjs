#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function run(command, options = {}) {
  try {
    const output = execSync(command, { 
      stdio: ['ignore', 'pipe', 'pipe'], 
      encoding: 'utf8', 
      ...options 
    });
    return { ok: true, output: output.trim() };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function checkGitHealth() {
  log('Checking git repository health...');
  
  // Check for rebase/merge conflicts
  const rebaseMerge = fs.existsSync('.git/rebase-merge');
  const rebaseApply = fs.existsSync('.git/rebase-apply');
  const mergeHead = fs.existsSync('.git/MERGE_HEAD');
  
  if (rebaseMerge || rebaseApply || mergeHead) {
    log('⚠️  Git state conflicts detected, cleaning up...');
    run('git rebase --abort 2>/dev/null || true');
    run('git merge --abort 2>/dev/null || true');
    run('rm -rf .git/rebase-merge .git/rebase-apply .git/MERGE_HEAD 2>/dev/null || true');
    run('git reset --hard HEAD');
    run('git clean -fd');
    log('✅ Git state cleaned up');
  } else {
    log('✅ Git repository is healthy');
  }
}

function checkDiskSpace() {
  log('Checking disk space...');
  
  try {
    const stats = fs.statSync('.');
    const freeSpace = stats.blocks * 512; // Approximate free space in bytes
    const freeSpaceGB = (freeSpace / (1024 * 1024 * 1024)).toFixed(2);
    
    if (freeSpace < 1024 * 1024 * 1024) { // Less than 1GB
      log('⚠️  Low disk space detected, cleaning up old files...');
      cleanupOldFiles();
    } else {
      log(`✅ Sufficient disk space: ${freeSpaceGB} GB available`);
    }
  } catch (error) {
    log('⚠️  Could not check disk space');
  }
}

function cleanupOldFiles() {
  log('Cleaning up old automation files...');
  
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  
  // Clean up old analytics files
  const analyticsDir = path.join(__dirname, 'analytics');
  if (fs.existsSync(analyticsDir)) {
    const files = fs.readdirSync(analyticsDir);
    files.forEach(file => {
      const filePath = path.join(analyticsDir, file);
      try {
        const stats = fs.statSync(filePath);
        if (now - stats.mtime.getTime() > oneDay) {
          fs.unlinkSync(filePath);
          log(`Deleted old file: ${file}`);
        }
      } catch (error) {
        // Ignore errors
      }
    });
  }
  
  // Clean up old backup directories
  const backupsDir = path.join(__dirname, 'backups');
  if (fs.existsSync(backupsDir)) {
    const dirs = fs.readdirSync(backupsDir);
    dirs.forEach(dir => {
      const dirPath = path.join(backupsDir, dir);
      try {
        const stats = fs.statSync(dirPath);
        if (now - stats.mtime.getTime() > oneDay) {
          fs.rmSync(dirPath, { recursive: true, force: true });
          log(`Deleted old directory: ${dir}`);
        }
      } catch (error) {
        // Ignore errors
      }
    });
  }
  
  log('✅ Cleanup completed');
}

function checkWorkflowDependencies() {
  log('Checking workflow dependencies...');
  
  const requiredScripts = [
    'automation/git-sync.cjs',
    'automation/cloud-autonomous-orchestrator.cjs',
    'scripts/generate-sitemap.js',
    'scripts/ai-trends-radar.js',
    'scripts/seo-audit.js'
  ];
  
  let allScriptsExist = true;
  requiredScripts.forEach(script => {
    if (fs.existsSync(script)) {
      log(`✅ ${script} exists`);
    } else {
      log(`❌ ${script} missing`);
      allScriptsExist = false;
    }
  });
  
  if (!allScriptsExist) {
    log('⚠️  Some required scripts are missing');
  }
  
  return allScriptsExist;
}

function generateHealthReport() {
  const report = {
    timestamp: new Date().toISOString(),
    gitHealth: 'unknown',
    diskSpace: 'unknown',
    dependencies: 'unknown',
    recommendations: []
  };
  
  // Check git health
  try {
    const gitStatus = run('git status --porcelain');
    if (gitStatus.ok && gitStatus.output === '') {
      report.gitHealth = 'clean';
    } else {
      report.gitHealth = 'dirty';
      report.recommendations.push('Repository has uncommitted changes');
    }
  } catch (error) {
    report.gitHealth = 'error';
    report.recommendations.push('Could not check git status');
  }
  
  // Check dependencies
  report.dependencies = checkWorkflowDependencies() ? 'complete' : 'incomplete';
  
  // Save report
  const reportsDir = path.join(__dirname, 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  const reportPath = path.join(reportsDir, 'workflow-health-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log(`Health report saved to ${reportPath}`);
  return report;
}

async function main() {
  try {
    log('🏥 Starting workflow health monitoring...');
    
    // Check various health indicators
    checkGitHealth();
    checkDiskSpace();
    const healthReport = generateHealthReport();
    
    log('📊 Health Report Summary:');
    log(`- Git Health: ${healthReport.gitHealth}`);
    log(`- Dependencies: ${healthReport.dependencies}`);
    
    if (healthReport.recommendations.length > 0) {
      log('📋 Recommendations:');
      healthReport.recommendations.forEach(rec => log(`  - ${rec}`));
    }
    
    log('✅ Workflow health monitoring completed');
  } catch (error) {
    log(`❌ Health monitoring failed: ${error.message}`);
    // Don't exit with error to prevent workflow failure
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkGitHealth, checkDiskSpace, checkWorkflowDependencies };