
// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

// Parallel file reading for speed
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

async function parallelReadFiles(filePaths) {
  if (filePaths.length === 0) return [];
  
  const numWorkers = Math.min(filePaths.length, os.cpus().length);
  const workers = [];
  const results = new Array(filePaths.length);
  
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(`
      const fs = require('fs').promises;
      const { parentPort } = require('worker_threads');
      
      parentPort.on('message', async (data) => {
        try {
          const content = await fs.readFile(data.filePath, 'utf8');
          parentPort.postMessage({ index: data.index, content, error: null });
        } catch (error) {
          parentPort.postMessage({ index: data.index, content: null, error: error.message });
        }
      });
    `, { eval: true });
    
    workers.push(worker);
  }
  
  // Distribute work among workers
  for (let i = 0; i < filePaths.length; i++) {
    const worker = workers[i % numWorkers];
    worker.postMessage({ filePath: filePaths[i], index: i });
  }
  
  // Collect results
  for (const worker of workers) {
    worker.on('message', (data) => {
      results[data.index] = data.error ? null : data.content;
    });
  }
  
  // Wait for all workers to complete
  await Promise.all(workers.map(worker => new Promise(resolve => {
    worker.on('exit', resolve);
  })));
  
  return results.filter(result => result !== null);
}
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
      console.log(`  Uptime: ${Math.floor(report.performance?.uptime / 300 / 60)} minutes`);
      console.log(`  Success Rate: ${report.performance?.successRate || 0}%`);
      console.log(`  Average Task Time: ${Math.floor(report.performance?.averageTaskTime / 300)} seconds`);
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




