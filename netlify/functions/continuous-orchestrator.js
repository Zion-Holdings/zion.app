#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const AUTOMATION_DIR = path.join(ROOT, 'automation');
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');
const FUNCTIONS_DIR = path.join(ROOT, 'netlify', 'functions');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function getSystemHealth() {
  const health = {
    timestamp: new Date().toISOString(),
    functions: {},
    automation: {},
    git: {},
    disk: {}
  };
  
  try {
    // Check Netlify functions
    if (fs.existsSync(FUNCTIONS_DIR)) {
      const functionFiles = fs.readdirSync(FUNCTIONS_DIR).filter(f => f.endsWith('.js'));
      health.functions = {
        count: functionFiles.length,
        files: functionFiles,
        status: 'healthy'
      };
    }
    
    // Check automation logs
    if (fs.existsSync(LOGS_DIR)) {
      const logFiles = fs.readdirSync(LOGS_DIR).filter(f => f.endsWith('.json'));
      health.automation = {
        logFiles: logFiles.length,
        recentLogs: logFiles.slice(-5),
        status: 'healthy'
      };
    }
    
    // Check git status
    try {
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
      const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
      const lastCommit = execSync('git log -1 --format="%H %s"', { encoding: 'utf8' }).trim();
      
      health.git = {
        branch,
        lastCommit,
        uncommittedChanges: gitStatus ? gitStatus.split('\n').length : 0,
        status: 'healthy'
      };
    } catch (error) {
      health.git = { status: 'error', error: error.message };
    }
    
    // Check disk usage
    try {
      const stats = fs.statSync(ROOT);
      health.disk = {
        totalSize: stats.size,
        status: 'healthy'
      };
    } catch (error) {
      health.disk = { status: 'error', error: error.message };
    }
    
  } catch (error) {
    log(`Error getting system health: ${error.message}`);
  }
  
  return health;
}

function orchestrateTasks() {
  const tasks = [];
  
  try {
    // Task 1: Clean up old log files
    if (fs.existsSync(LOGS_DIR)) {
      const logFiles = fs.readdirSync(LOGS_DIR).filter(f => f.endsWith('.json'));
      if (logFiles.length > 20) {
        // Keep only the 20 most recent logs
        const sortedFiles = logFiles
          .map(f => ({ name: f, path: path.join(LOGS_DIR, f), mtime: fs.statSync(path.join(LOGS_DIR, f)).mtime }))
          .sort((a, b) => b.mtime - a.mtime);
        
        const filesToDelete = sortedFiles.slice(20);
        filesToDelete.forEach(f => {
          try {
            fs.unlinkSync(f.path);
            log(`🗑️ Deleted old log: ${f.name}`);
          } catch (error) {
            log(`❌ Failed to delete ${f.name}: ${error.message}`);
          }
        });
        
        tasks.push({
          name: 'cleanup_logs',
          status: 'completed',
          filesDeleted: filesToDelete.length
        });
      }
    }
    
    // Task 2: Update function manifest
    try {
      const { execSync } = require('child_process');
      execSync('npm run netlify:manifest', { stdio: 'inherit' });
      tasks.push({
        name: 'update_manifest',
        status: 'completed'
      });
      log('✅ Function manifest updated');
    } catch (error) {
      tasks.push({
        name: 'update_manifest',
        status: 'failed',
        error: error.message
      });
      log(`❌ Failed to update manifest: ${error.message}`);
    }
    
    // Task 3: Check for stale automation files
    if (fs.existsSync(AUTOMATION_DIR)) {
      const automationFiles = fs.readdirSync(AUTOMATION_DIR).filter(f => f.endsWith('.cjs') || f.endsWith('.js'));
      const staleFiles = [];
      
      automationFiles.forEach(file => {
        const filePath = path.join(AUTOMATION_DIR, file);
        const stats = fs.statSync(filePath);
        const ageInDays = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
        
        if (ageInDays > 30) {
          staleFiles.push({ name: file, age: Math.round(ageInDays) });
        }
      });
      
      if (staleFiles.length > 0) {
        tasks.push({
          name: 'check_stale_files',
          status: 'completed',
          staleFiles: staleFiles.length,
          details: staleFiles
        });
      }
    }
    
  } catch (error) {
    log(`❌ Error orchestrating tasks: ${error.message}`);
    tasks.push({
      name: 'orchestration',
      status: 'failed',
      error: error.message
    });
  }
  
  return tasks;
}

function generateOrchestrationReport(health, tasks) {
  try {
    const reportContent = `# Continuous Orchestration Report

Generated: ${new Date().toISOString()}

## System Health
- **Functions**: ${health.functions.count || 0} active
- **Automation Logs**: ${health.automation.logFiles || 0} files
- **Git Status**: ${health.git.status}
- **Disk Status**: ${health.disk.status}

## Tasks Executed
${tasks.map(task => {
  if (task.status === 'completed') {
    return `- ✅ ${task.name}${task.filesDeleted ? ` (${task.filesDeleted} files deleted)` : ''}`;
  } else {
    return `- ❌ ${task.name}: ${task.error}`;
  }
}).join('\n')}

## Git Information
- **Branch**: ${health.git.branch || 'unknown'}
- **Last Commit**: ${health.git.lastCommit || 'unknown'}
- **Uncommitted Changes**: ${health.git.uncommittedChanges || 0}

## Next Actions
- Monitor system health
- Review task results
- Address any failures

This report is automatically generated by the Netlify function \`continuous-orchestrator\`.
`;
    
    const reportPath = path.join(ROOT, 'CONTINUOUS_ORCHESTRATION_REPORT.md');
    fs.writeFileSync(reportPath, reportContent, 'utf8');
    log('✅ Orchestration report generated');
    return true;
  } catch (error) {
    log(`❌ Error generating orchestration report: ${error.message}`);
    return false;
  }
}

function commitChanges() {
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    
    if (gitStatus) {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "🤖 Continuous orchestration via Netlify function [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      log('✅ Changes committed and pushed');
      return { success: true, changes: gitStatus.split('\n').length };
    } else {
      log('No changes to commit');
      return { success: true, changes: 0 };
    }
  } catch (error) {
    log(`❌ Git commit failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Netlify function handler
exports.handler = async function(event, context) {
  try {
    log('🤖 Starting continuous-orchestrator function...');
    
    ensureDir(LOGS_DIR);
    
    // Get system health
    const health = getSystemHealth();
    log(`System health: ${health.functions.count || 0} functions, ${health.automation.logFiles || 0} logs`);
    
    // Orchestrate tasks
    const tasks = orchestrateTasks();
    log(`Executed ${tasks.length} orchestration tasks`);
    
    // Generate report
    const reportGenerated = generateOrchestrationReport(health, tasks);
    
    // Commit changes
    const commitResult = commitChanges();
    
    // Generate JSON report
    const report = {
      timestamp: new Date().toISOString(),
      function: 'continuous-orchestrator',
      status: 'completed',
      summary: {
        functionsCount: health.functions.count || 0,
        logFilesCount: health.automation.logFiles || 0,
        tasksExecuted: tasks.length,
        tasksCompleted: tasks.filter(t => t.status === 'completed').length,
        tasksFailed: tasks.filter(t => t.status === 'failed').length,
        reportGenerated: reportGenerated,
        gitChanges: commitResult.changes || 0
      },
      systemHealth: health,
      tasks,
      gitResult: commitResult
    };
    
    // Write report
    const reportPath = path.join(LOGS_DIR, 'continuous-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    log('✅ continuous-orchestrator completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify(report)
    };
    
  } catch (error) {
    log(`❌ continuous-orchestrator function failed: ${error.message}`);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      function: 'continuous-orchestrator',
      status: 'failed',
      error: error.message,
      stack: error.stack
    };
    
    // Write error report
    try {
      const errorPath = path.join(LOGS_DIR, 'continuous-orchestrator-error.json');
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