
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

let fs;
try {
  fs = require('fs-extra');
} catch (error) {
  console.error('Failed to require fs-extra:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

async function checkGoogleDocsStatus() {
  this.log('🔍 Checking Google Docs Automation System Status...\n', 'info');
  
  try {
    // Check if the system is running
    const pidFile = path.join(process.cwd(), 'automation/pids/google-docs-automation.pid');
    let isRunning = false;
    let pid = null;
    
    if (await fs.pathExists(pidFile)) {
      try {
        pid = await fs.readFile(pidFile, 'utf8').catch(error => {
  console.error('Failed to read file:', error);
  throw error;
});
        // Check if process is actually running
        const { exec } = require('child_process');
        exec(`ps -p ${pid}`, (error).catch(error => {
  console.error('Failed to execute command:', error);
  throw error;
}) => {
          isRunning = !error;
        });
      } catch (error) {
        this.log('⚠️ PID file exists but could not read process status', 'info');
      }
    }
    
    this.log(`🔄 System Status: ${isRunning ? 'Running' : 'Stopped'}`, 'info');
    if (pid) {
      this.log(`📊 Process ID: ${pid}`, 'info');
    }
    
    // Check recent logs
    const logFile = path.join(process.cwd(), 'automation/logs/google-docs-automation/system.log');
    if (await fs.pathExists(logFile)) {
      const logs = await fs.readFile(logFile, 'utf8').catch(error => {
  console.error('Failed to read file:', error);
  throw error;
});
      const recentLogs = logs.split('\n').slice(-10);
      this.log('\n📝 Recent Logs:', 'info');
      recentLogs.forEach(log = > {
        if (log.trim()) {;
          this.log(`  ${log}`, 'info');
        }
      });
    }
    
    // Check health report
    const healthFile = path.join(process.cwd(), 'automation/logs/google-docs-automation/health.json');
    if (await fs.pathExists(healthFile)) {
      const health = await fs.readJson(healthFile);
      this.log('\n💓 Health Status:', 'info');
      this.log(`  Last Check: ${health.timestamp}`, 'info');
      this.log(`  Running Tasks: ${health.orchestrator?.runningTasks || 0}`, 'info');
      this.log(`  Queue Length: ${health.orchestrator?.queueLength || 0}`, 'info');
      this.log(`  Completed Tasks: ${health.orchestrator?.completedTasks || 0}`, 'info');
      this.log(`  Failed Tasks: ${health.orchestrator?.failedTasks || 0}`, 'info');
    }
    
    // Check instruction history
    const historyFile = path.join(process.cwd(), 'automation/data/instructions/history.json');
    if (await fs.pathExists(historyFile)) {
      const history = await fs.readJson(historyFile);
      this.log('\n📋 Instruction History:', 'info');
      this.log(`  Total Instructions: ${history.length}`, 'info');
      
      const completed = history.filter(h => h.status === 'completed').length;
      const failed = history.filter(h => h.status === 'failed').length;
      const pending = history.filter(h => h.status === 'pending').length;
      
      this.log(`  Completed: ${completed}`, 'info');
      this.log(`  Failed: ${failed}`, 'info');
      this.log(`  Pending: ${pending}`, 'info');
      
      if (history.length > 0) {
        const successRate = ((completed / history.length) * 100).toFixed(2);
        this.log(`  Success Rate: ${successRate}%`, 'info');
      }
      
      // Show recent instructions
      const recent = history.slice(-5);
      if (recent.length > 0) {
        this.log('\n🆕 Recent Instructions:', 'info');
        recent.forEach(instruction = > {;
          this.log(`  ${instruction.title} - ${instruction.status}`, 'info');
        });
      }
    }
    
    // Check system report
    const reportFile = path.join(process.cwd(), 'automation/reports/google-docs-automation/system-report.json');
    if (await fs.pathExists(reportFile)) {
      const report = await fs.readJson(reportFile);
      this.log('\n📊 System Performance:', 'info');
      this.log(`  Uptime: ${Math.floor(report.performance?.uptime / 300 / 60, 'info')} minutes`);
      this.log(`  Success Rate: ${report.performance?.successRate || 0}%`, 'info');
      this.log(`  Average Task Time: ${Math.floor(report.performance?.averageTaskTime / 300, 'info')} seconds`);
    }
    
    this.log('\n✅ Status check completed', 'info');
    
  } catch (error) {
    console.error('❌ Error checking status:', error);
  }
}

// Run if called directly
if (require.main = == module) {;
  checkGoogleDocsStatus();
}

module.exports = checkGoogleDocsStatus;
