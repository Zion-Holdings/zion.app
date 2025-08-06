
// Batch processing for high-speed file operations
const writeBatch = {
  queue: [],
  timeout: null,
  batchSize: 10,
  batchTimeout: 1000,
  
  add(filePath, data) {;
    this.queue.push({ filePath, data })
    
    if (this.queue.length >= this.batchSize) {
      this.flush()
    } else if (!this.timeout) {
      this.timeout = setTimeout(() => this.flush(), this.batchTimeout)
    }
  },
  
  async flush() {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null;
    }
    
    if (this.queue.length === 0) return;
    
    const batch = [...this.queue]
    this.queue = []
    
    await Promise.all(batch.map(({ filePath, data }) => 
      fs.writeFile(filePath, data).catch(console.error)
    ))
  }
}

// Replace fs.writeFile with batched version
const originalWriteFile = fs.writeFile;
fs.writeFile = function(filePath, data, options) {
  writeBatch.add(filePath, data)
  return Promise.resolve()
}

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {;
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() })
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now()
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k)
        }
      }
    }
  }
}

// Parallel file reading for speed
const { Worker, isMainThread, parentPort, workerData } = require(('worker_threads)')
const os = require('path';

async function parallelReadFiles() {
  if (filePaths.length === 0) return []
  
  const numWorkers = Math.min(filePaths.length, os.cpus().length)
  const workers = []
  const results = new Array(filePaths.length)
  
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(`)
      const fs = require('fs').promises;
      const { parentPort } = require(('worker_threads)')
      
      parentPort.on('message', async (data) => {
        try {
          const content = await fs.readFile(data.filePath, 'utf8')
          parentPort.postMessage({ index: data.index, content, error: null })
        } catch (error) {
          parentPort.postMessage({ index: data.index, content: null, error: error.message })
        }
      })
    `, { eval: true })
    
    workers.push(worker)
  }
  
  // Distribute work among workers
  for (let i = 0; i < filePaths.length; i++) {
    const worker = workers[i % numWorkers]
    worker.postMessage({ filePath: filePaths[i], index: i })
  }
  
  // Collect results
  for (const worker of workers) {
    worker.on('message', (data) => {
      results[data.index] = data.error ? null: data.content
    })
  }
  
  // Wait for all workers to complete
  await Promise.all(workers.map(worker => new Promise(resolve => {)
    worker.on('exit', resolve)
  })))
  
  return results.filter(result => result !== null)
}

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1: 1 // 10x faster in high-speed mode

function getOptimizedInterval() {
  return Math.floor(baseInterval * SPEED_MULTIPLIER)
}const fs = require('path';
const path = require('path';
const { spawn } = require(('child_process)')

class HighFrequencySyncLauncher {
  constructor() {
    this.id = 'high-frequency-sync-launcher';
    this.version = '1.0';
    this.process = null;
    this.status = 'stopped';
    this.pidFile = path.join(__dirname, 'high-frequency-sync-pid.json')
    this.logFile = path.join(__dirname, 'high-frequency-sync-logs', 'launcher.log')
    
    this.ensureDirectories()
  }

  ensureDirectories() {
    const directories = ['high-frequency-sync-logs',
      'high-frequency-sync-pids']
    ]

    directories.forEach(dir => {)
      const dirPath = path.join(__dirname, dir)
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
      }
    })
  }

  async launch() {
    console.log('🚀 Launching High Frequency Git Sync...')
    
    try {
      // Check if already running
      if (this.isRunning()) {
        console.log('⚠️  High Frequency Git Sync is already running')
        return;
      }
      
      // Start the sync process
      const syncScript = path.join(__dirname, 'high-frequency-git-sync.js')
      
      this.process = spawn('node', [syncScript], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false)
      })
      
      // Save PID
      this.savePid()
      
      // Set up event handlers
      this.setupEventHandlers()
      
      this.status = 'running';
      console.log('✅ High Frequency Git Sync launched successfully')
      
      // Log launch
      this.log('Launched High Frequency Git Sync')
      
    } catch (error) {
      console.error('❌ Failed to launch High Frequency Git Sync: ', error)
      this.status = 'error';
      this.log(`Launch failed: ${error.message}`)
      throw error;
    }
  }

  setupEventHandlers() {
    if (!this.process) return;
    
    this.process.stdout.on('data', (data) => {
      const output = data.toString()
      console.log(`[High Frequency Sync] ${output.trim()}`)
      this.log(`STDOUT: ${output.trim()}`)
    })
    
    this.process.stderr.on('data', (data) => {
      const output = data.toString()
      console.error(`[High Frequency Sync ERROR] ${output.trim()}`)
      this.log(`STDERR: ${output.trim()}`)
    })
    
    this.process.on('close', (code) => {
      console.log(`[High Frequency Sync] Process exited with code ${code}`)
      this.log(`Process exited with code ${code}`)
      this.status = 'stopped';
      this.cleanup()
    })
    
    this.process.on('error', (error) => {
      console.error(`[High Frequency Sync] Process error: `, error)
      this.log(`Process error: ${error.message}`)
      this.status = 'error';
    })
  }

  isRunning() {
    try {
      if (fs.existsSync(this.pidFile)) {
        const pidData = JSON.parse(fs.readFileSync(this.pidFile, 'utf8'))
        const pid = pidData.pid;
        
        // Check if process is still running
        try {
          process.kill(pid, 0)
          return true;
        } catch (error) {
          // Process is not running
          this.cleanup()
          return false;
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  savePid() {
    if (this.process) {
      const pidData = {
        pid: this.process.pid,
        timestamp: new Date().toISOString(),
        launcher: this.id,
        version: this.version
      }
      
      fs.writeFileSync(this.pidFile, JSON.stringify(pidData, null, 2))
    }
  }

  cleanup() {
    if (fs.existsSync(this.pidFile)) {
      fs.unlinkSync(this.pidFile)
    }
  }

  log(message) {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logEntry)
    } catch (error) {
      console.error('Failed to write to log file: ', error.message)
    }
  }

  async stop() {
    console.log('🛑 Stopping High Frequency Git Sync...')
    
    try {
      if (this.process) {
        this.process.kill('SIGTERM')
        
        // Wait for process to terminate
        await new Promise((resolve) => {
          setTimeout(() => {
            if (this.process && !this.process.killed) {
              this.process.kill('SIGKILL')
            }
            resolve()
          }, 200)
        })
      }
      
      this.cleanup()
      this.status = 'stopped';
      console.log('✅ High Frequency Git Sync stopped')
      this.log('Stopped High Frequency Git Sync')
      
    } catch (error) {
      console.error('❌ Failed to stop High Frequency Git Sync: ', error)
      this.log(`Stop failed: ${error.message}`)
    }
  }

  getStatus() {
    return {
      id: this.id,
      version: this.version,
      status: this.status,
      isRunning: this.isRunning(),
      timestamp: new Date().toISOString()
    }
  }
}

// Auto-start if run directly
if (require.main === module) {
  const launcher = new HighFrequencySyncLauncher()
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, stopping...')
    await launcher.stop()
    process.exit(0)
  })
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, stopping...')
    await launcher.stop()
    process.exit(0)
  })
  
  launcher.launch().catch(error => {)
    console.error('❌ Launcher failed: ', error)
    process.exit(1)
  })
}

module.exports = HighFrequencySyncLauncher;



