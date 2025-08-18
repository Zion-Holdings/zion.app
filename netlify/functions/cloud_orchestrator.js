#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const AUTOMATION_DIR = path.join(ROOT, 'automation');
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function getAutomationStatus() {
  const status = {
    timestamp: new Date().toISOString(),
    automations: {},
    gitStatus: null,
    systemHealth: {}
  };

  // Check automation control files
  try {
    const controlPath = path.join(AUTOMATION_DIR, 'control.json');
    if (fs.existsSync(controlPath)) {
      status.automations.control = JSON.parse(fs.readFileSync(controlPath, 'utf8'));
    }
  } catch (error) {
    log(`Error reading control.json: ${error.message}`);
  }

  // Check git status
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    status.gitStatus = gitStatus ? gitStatus.split('\n') : [];
  } catch (error) {
    log(`Error checking git status: ${error.message}`);
    status.gitStatus = { error: error.message };
  }

  // Check system health
  try {
    const logsDir = path.join(LOGS_DIR);
    if (fs.existsSync(logsDir)) {
      const logFiles = fs.readdirSync(logsDir).filter(f => f.endsWith('.json'));
      status.systemHealth.logFiles = logFiles.length;
      status.systemHealth.logsDir = logsDir;
    }
  } catch (error) {
    log(`Error checking logs: ${error.message}`);
  }

  return status;
}

function triggerGitSync() {
  try {
    log('Triggering git sync...');
    
    // Check if there are uncommitted changes
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    
    if (gitStatus) {
      log('Found uncommitted changes, committing...');
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "🤖 Automated sync via cloud orchestrator [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      log('✅ Git sync completed successfully');
      return { success: true, message: 'Git sync completed', changes: gitStatus.split('\n').length };
    } else {
      log('No changes to commit');
      return { success: true, message: 'No changes to commit' };
    }
  } catch (error) {
    log(`❌ Git sync failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

function updateAutomationStatus() {
  try {
    const status = getAutomationStatus();
    const statusPath = path.join(LOGS_DIR, 'cloud-orchestrator-status.json');
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
    log('✅ Automation status updated');
    return status;
  } catch (error) {
    log(`❌ Failed to update automation status: ${error.message}`);
    return null;
  }
}

// Netlify function handler
exports.handler = async function(event, context) {
  try {
    log('🤖 Starting cloud_orchestrator function...');
    
    ensureDir(LOGS_DIR);
    
    // Get current status
    const status = getAutomationStatus();
    log(`Current status: ${status.gitStatus?.length || 0} git changes, ${status.systemHealth.logFiles || 0} log files`);
    
    // Trigger git sync if needed
    const gitResult = triggerGitSync();
    
    // Update status
    const updatedStatus = updateAutomationStatus();
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      function: 'cloud_orchestrator',
      status: 'completed',
      gitSync: gitResult,
      automationStatus: updatedStatus,
      summary: {
        gitChanges: status.gitStatus?.length || 0,
        logFiles: status.systemHealth.logFiles || 0,
        automationsActive: Object.keys(status.automations.control || {}).length
      }
    };
    
    // Write report
    const reportPath = path.join(LOGS_DIR, 'cloud-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    log('✅ cloud_orchestrator completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify(report)
    };
    
  } catch (error) {
    log(`❌ cloud_orchestrator function failed: ${error.message}`);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      function: 'cloud_orchestrator',
      status: 'failed',
      error: error.message,
      stack: error.stack
    };
    
    // Write error report
    try {
      const errorPath = path.join(LOGS_DIR, 'cloud-orchestrator-error.json');
      fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    } catch (writeError) {
      log(`Failed to write error report: ${writeError.message}`);
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify(errorReport)
    };
  }
};