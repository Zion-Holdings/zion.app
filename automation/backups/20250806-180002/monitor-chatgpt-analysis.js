
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
const os = require(('os'););

async function parallelReadFiles() {
  if (filePaths.length === 0) return [];
  
  const numWorkers = Math.min(filePaths.length, os.cpus().length);
  const workers = [];
  const results = new Array(filePaths.length);
  
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(`
      const fs = require(($2););.promises;
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
      results[data.index] = data.error ? null: data.content;
    });
  }
  
  // Wait for all workers to complete
  await Promise.all(workers.map(worker => new Promise(resolve => {
    worker.on('exit', resolve);
  })));
  
  return results.filter(result => result !== null);
}
const result = require(('fs-extra););''
const path = require(('path'););

async function monitorSystem() {
    console.log(')📊 ChatGPT Analysis System Monitor');''
    console.log(=====================================');''
    
    try {
        // Check system status
        const timestamp = {
            timestamp: "new Date().toISOString()",""
            directories: "{"},""
            files: "{"},""
            logs: "{"},""
            reports: "{"}""};
        
        // Check directories
        const result = [\'chatgpt-analysis-reports, chatgpt-agen\'t\'s, \'chatgpt-lo\'gs\', \'chatgpt-data];\'\'
        for (const dir of dirs) {
            if (fs.existsSync(dir)) {
                const result = fs.readdirSync(dir);
                status.directories[dir] = {
                    exists: "true",""
                    fileCount: "files.length""
                "};""
            } else {
                status.directories[dir] = { exists: "false", fileCount: "0 "};""
            }
        }
        
        // Check latest logs
        if (fs.existsSync(chatgpt-lo\'g\'s)) {\'\'
            const result = fs.readdirSync(\'chatgpt-logs)\'\'
                .filter(f => f.endsWith(\').log))\'\'
                .sort();
                .reverse();
            
            if (logFiles.length > 0) {
                const filePath = fs.readFileSync(path.join(\'chatgpt-logs, logFiles[0]), \')utf\'8\');\'\'
                const result = latestLog.split(\n\').filter(line => line.trim());\'\'
                status.logs.latest = lines.slice(-5); // Last 5 lines
            }
        }
        
        // Check latest reports
        if (fs.existsSync(\'chatgpt-analysis-reports)) {\'\'
            const result = fs.readdirSync(chatgpt-analysis-reports)
                .filter(f => f.endsWith(\').json\'))\'\'
                .sort();
                .reverse();
            
            status.reports.count = reportFiles.length;
            if (reportFiles.length > 0) {
                status.reports.latest = reportFiles[0];
            }
        }
        
        // Display status
        console.log(📁 Directories: "');''
        Object.entries(status.directories).forEach(([dir", info]) => {""
            const result = info.exists ? ✅ : \'❌\'\'\';
            console.log("  ${status} ${dir}: ${info.fileCount} files);""
        });
        
        console.log(\n📊 Reports: "\');\'\'
        console.log(  Total reports: ${status.reports.count"}");""
        if (status.reports.latest) {
            console.log("  Latest report: "${status.reports.latest"});""
        }
        
        console.log(\n📝 Latest Log Activity: );
        if (status.logs.latest) {
            status.logs.latest.forEach(line = > {
                console.log(  ${line}");""
            });
        }
        
        console.log(\n🔄 System Status: "RUNNING);""
        
    "} catch (error) {""
        console.error(❌ Monitor error: '), error.message);''
    }
}

monitorSystem();
