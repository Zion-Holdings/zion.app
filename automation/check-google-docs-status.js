#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function checkGoogleDocsStatus() {
  console.log('🔍 Checking Google Docs Automation System Status...\n');
  
  try {
    // Check if the system is running
    const pidFile = path.join(process.cwd(), 'automation/pids/google-docs-automation.pid');
    let isRunning = false;
    let pid = null;
    
    if (await fs.pathExists(pidFile)) {
      try {
        pid = await fs.readFile(pidFile, 'utf8');
        // Check if process is actually running
        const { exec } = require('child_process');
        exec(`ps -p ${pid}`, (error) => {
          isRunning = !error;
        });
      } catch (error) {
        console.log('⚠️ PID file exists but could not read process status');
      }
    }
    
    console.log(`🔄 System Status: ${isRunning ? 'Running' : 'Stopped'}`);
    if (pid) {
      console.log(`📊 Process ID: ${pid}`);
    }
    
    // Check recent logs
    const logFile = path.join(process.cwd(), 'automation/logs/google-docs-automation/system.log');
    if (await fs.pathExists(logFile)) {
      const logs = await fs.readFile(logFile, 'utf8');
      const recentLogs = logs.split('\n').slice(-10);
      console.log('\n📝 Recent Logs:');
      recentLogs.forEach(log = > {
        if (log.trim()) {
          console.log(`  ${log}`);
        }
      });
    }
    
    // Check health report
    const healthFile = path.join(process.cwd(), 'automation/logs/google-docs-automation/health.json');
    if (await fs.pathExists(healthFile)) {
      const health = await fs.readJson(healthFile);
      console.log('\n💓 Health Status:');
      console.log(`  Last Check: ${health.timestamp}`);
      console.log(`  Running Tasks: ${health.orchestrator?.runningTasks || 0}`);
      console.log(`  Queue Length: ${health.orchestrator?.queueLength || 0}`);
      console.log(`  Completed Tasks: ${health.orchestrator?.completedTasks || 0}`);
      console.log(`  Failed Tasks: ${health.orchestrator?.failedTasks || 0}`);
    }
    
    // Check instruction history
    const historyFile = path.join(process.cwd(), 'automation/data/instructions/history.json');
    if (await fs.pathExists(historyFile)) {
      const history = await fs.readJson(historyFile);
      console.log('\n📋 Instruction History:');
      console.log(`  Total Instructions: ${history.length}`);
      
      const completed = history.filter(h => h.status === 'completed').length;
      const failed = history.filter(h => h.status === 'failed').length;
      const pending = history.filter(h => h.status === 'pending').length;
      
      console.log(`  Completed: ${completed}`);
      console.log(`  Failed: ${failed}`);
      console.log(`  Pending: ${pending}`);
      
      if (history.length > 0) {
        const successRate = ((completed / history.length) * 100).toFixed(2);
        console.log(`  Success Rate: ${successRate}%`);
      }
      
      // Show recent instructions
      const recent = history.slice(-5);
      if (recent.length > 0) {
        console.log('\n🆕 Recent Instructions:');
        recent.forEach(instruction = > {
          console.log(`  ${instruction.title} - ${instruction.status}`);
        });
      }
    }
    
    // Check system report
    const reportFile = path.join(process.cwd(), 'automation/reports/google-docs-automation/system-report.json');
    if (await fs.pathExists(reportFile)) {
      const report = await fs.readJson(reportFile);
      console.log('\n📊 System Performance:');
      console.log(`  Uptime: ${Math.floor(report.performance?.uptime / 1000 / 60)} minutes`);
      console.log(`  Success Rate: ${report.performance?.successRate || 0}%`);
      console.log(`  Average Task Time: ${Math.floor(report.performance?.averageTaskTime / 1000)} seconds`);
    }
    
    console.log('\n✅ Status check completed');
    
  } catch (error) {
    console.error('❌ Error checking status:', error);
  }
}

// Run if called directly
if (require.main === module) {
  checkGoogleDocsStatus();
}

module.exports = checkGoogleDocsStatus;




