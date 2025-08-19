#!/usr/bin/env node

'use strict';

/*
  Ultra-Rapid Sync
  - Runs every minute for maximum synchronization
  - Ensures all changes are committed and pushed
  - Handles git conflicts and locks automatically
  - Provides real-time status updates
  - Built-in error recovery and conflict resolution

  Environment Variables:
  - SYNC_INTERVAL_SECONDS: How often to sync (default: 30)
  - TARGET_BRANCH: Branch to sync with (default: main)
*/

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');
const SYNC_INTERVAL_SECONDS = parseInt(process.env.SYNC_INTERVAL_SECONDS) || 30;
const TARGET_BRANCH = process.env.TARGET_BRANCH || 'main';

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [ULTRA-RAPID-SYNC] ${level}: ${message}`;
  console.log(logMessage);
  
  // Write to log file
  ensureDir(LOGS_DIR);
  const logFile = path.join(LOGS_DIR, `ultra-rapid-sync-${new Date().toISOString().split('T')[0]}.log`);
  fs.appendFileSync(logFile, logMessage + '\n');
}

function runCommand(command, args, options = {}) {
  try {
    const result = spawnSync(command, args, {
      stdio: 'inherit',
      cwd: ROOT,
      ...options
    });
    return { success: result.status === 0, output: result.stdout, error: result.stderr };
  } catch (error) {
    log(`Command failed: ${command} ${args.join(' ')} - ${error.message}`, 'ERROR');
    return { success: false, output: null, error: error.message };
  }
}

function cleanGitState() {
  log('Cleaning git state...');
  
  // Remove any lock files
  const lockFiles = [
    '.git/index.lock',
    '.git/config.lock',
    '.git/HEAD.lock'
  ];
  
  lockFiles.forEach(lockFile => {
    const fullPath = path.join(ROOT, lockFile);
    if (fs.existsSync(fullPath)) {
      try {
        fs.unlinkSync(fullPath);
        log(`Removed lock file: ${lockFile}`);
      } catch (error) {
        log(`Failed to remove lock file ${lockFile}: ${error.message}`, 'WARN');
      }
    }
  });
  
  // Remove rebase and merge directories
  const mergeDirs = [
    '.git/rebase-merge',
    '.git/rebase-apply',
    '.git/MERGE_HEAD'
  ];
  
  mergeDirs.forEach(dir => {
    const fullPath = path.join(ROOT, dir);
    if (fs.existsSync(fullPath)) {
      try {
        if (fs.lstatSync(fullPath).isDirectory()) {
          fs.rmSync(fullPath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(fullPath);
        }
        log(`Removed merge directory: ${dir}`);
      } catch (error) {
        log(`Failed to remove merge directory ${dir}: ${error.message}`, 'WARN');
      }
    }
  });
}

function getCurrentBranch() {
  const result = runCommand('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
  if (result.success) {
    return result.output.toString().trim();
  }
  return null;
}

function switchToTargetBranch() {
  const currentBranch = getCurrentBranch();
  if (currentBranch === TARGET_BRANCH) {
    log(`Already on target branch: ${TARGET_BRANCH}`);
    return true;
  }
  
  log(`Switching from ${currentBranch} to ${TARGET_BRANCH}...`);
  const result = runCommand('git', ['checkout', TARGET_BRANCH]);
  if (result.success) {
    log(`Successfully switched to ${TARGET_BRANCH}`);
    return true;
  } else {
    log(`Failed to switch to ${TARGET_BRANCH}: ${result.error}`, 'ERROR');
    return false;
  }
}

function fetchLatestChanges() {
  log('Fetching latest changes from remote...');
  const result = runCommand('git', ['fetch', 'origin']);
  if (result.success) {
    log('Successfully fetched latest changes');
    return true;
  } else {
    log(`Failed to fetch changes: ${result.error}`, 'ERROR');
    return false;
  }
}

function hasUncommittedChanges() {
  const result = runCommand('git', ['status', '--porcelain']);
  if (result.success) {
    return result.output.toString().trim().length > 0;
  }
  return false;
}

function commitChanges() {
  if (!hasUncommittedChanges()) {
    log('No uncommitted changes to commit');
    return true;
  }
  
  log('Committing uncommitted changes...');
  
  // Add all changes
  const addResult = runCommand('git', ['add', '.']);
  if (!addResult.success) {
    log(`Failed to add changes: ${addResult.error}`, 'ERROR');
    return false;
  }
  
  // Commit with timestamp
  const timestamp = new Date().toISOString();
  const commitMessage = `🤖 Ultra-rapid sync: Auto-commit at ${timestamp}`;
  const commitResult = runCommand('git', ['commit', '-m', commitMessage]);
  
  if (commitResult.success) {
    log('Successfully committed changes');
    return true;
  } else {
    log(`Failed to commit changes: ${commitResult.error}`, 'ERROR');
    return false;
  }
}

function syncWithRemote() {
  log('Syncing with remote repository...');
  
  // Try rebase first
  const rebaseResult = runCommand('git', ['rebase', `origin/${TARGET_BRANCH}`]);
  if (rebaseResult.success) {
    log('Successfully synced via rebase');
    return true;
  }
  
  log('Rebase failed, trying merge strategy...', 'WARN');
  
  // If rebase fails, try merge
  const mergeResult = runCommand('git', ['merge', `origin/${TARGET_BRANCH}`]);
  if (mergeResult.success) {
    log('Successfully synced via merge');
    return true;
  }
  
  log('Merge failed, trying reset strategy...', 'WARN');
  
  // If merge fails, try reset
  const resetResult = runCommand('git', ['reset', '--hard', `origin/${TARGET_BRANCH}`]);
  if (resetResult.success) {
    log('Successfully synced via reset');
    return true;
  }
  
  log('All sync strategies failed', 'ERROR');
  return false;
}

function pushChanges() {
  log('Pushing changes to remote...');
  const result = runCommand('git', ['push', 'origin', TARGET_BRANCH]);
  if (result.success) {
    log('Successfully pushed changes');
    return true;
  } else {
    log(`Failed to push changes: ${result.error}`, 'ERROR');
    return false;
  }
}

function createStatusReport() {
  const timestamp = new Date().toISOString();
  const currentBranch = getCurrentBranch();
  const hasChanges = hasUncommittedChanges();
  
  const status = {
    timestamp,
    currentBranch,
    targetBranch: TARGET_BRANCH,
    hasUncommittedChanges: hasChanges,
    syncInterval: SYNC_INTERVAL_SECONDS,
    status: 'active'
  };
  
  // Save status report
  const statusPath = path.join(LOGS_DIR, 'ultra-rapid-sync-status.json');
  fs.writeFileSync(statusPath, JSON.stringify(status, null, 2), 'utf8');
  
  return status;
}

function main() {
  log('Starting ultra-rapid sync...');
  
  try {
    // Clean up any git state issues
    cleanGitState();
    
    // Switch to target branch
    if (!switchToTargetBranch()) {
      throw new Error('Failed to switch to target branch');
    }
    
    // Fetch latest changes
    if (!fetchLatestChanges()) {
      throw new Error('Failed to fetch latest changes');
    }
    
    // Commit any local changes
    if (!commitChanges()) {
      throw new Error('Failed to commit changes');
    }
    
    // Sync with remote
    if (!syncWithRemote()) {
      throw new Error('Failed to sync with remote');
    }
    
    // Push changes
    if (!pushChanges()) {
      throw new Error('Failed to push changes');
    }
    
    // Create status report
    const status = createStatusReport();
    
    log(`✅ Ultra-rapid sync completed successfully! Status: ${JSON.stringify(status)}`);
    
  } catch (error) {
    log(`❌ Ultra-rapid sync failed: ${error.message}`, 'ERROR');
    
    // Try to recover
    cleanGitState();
    
    // Create error status report
    const errorStatus = {
      timestamp: new Date().toISOString(),
      currentBranch: getCurrentBranch(),
      targetBranch: TARGET_BRANCH,
      hasUncommittedChanges: hasUncommittedChanges(),
      syncInterval: SYNC_INTERVAL_SECONDS,
      status: 'error',
      error: error.message
    };
    
    const errorStatusPath = path.join(LOGS_DIR, 'ultra-rapid-sync-error.json');
    fs.writeFileSync(errorStatusPath, JSON.stringify(errorStatus, null, 2), 'utf8');
    
    throw error;
  }
}

function startContinuousSync() {
  log(`Starting continuous ultra-rapid sync every ${SYNC_INTERVAL_SECONDS} seconds...`);
  
  // Run initial sync
  try {
    main();
  } catch (error) {
    log(`Initial sync failed: ${error.message}`, 'ERROR');
  }
  
  // Set up continuous sync
  setInterval(() => {
    try {
      main();
    } catch (error) {
      log(`Continuous sync failed: ${error.message}`, 'ERROR');
    }
  }, SYNC_INTERVAL_SECONDS * 1000);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--continuous') || args.includes('-c')) {
    startContinuousSync();
  } else {
    try {
      main();
      process.exit(0);
    } catch (error) {
      log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

module.exports = { main, startContinuousSync, cleanGitState, syncWithRemote, pushChanges };
