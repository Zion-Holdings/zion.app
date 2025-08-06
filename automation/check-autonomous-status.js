
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
}const fs = require('path';
const path = require('path';

class AutonomousStatusChecker {
  constructor() {
    this.dataPath = path.join(__dirname, 'data')
  }

  checkSystemStatus() {
    console.log('🔍 Checking Autonomous System Status...\n')
    
    const status = {
      agents: this.checkAgents(),
      jobs: this.checkJobs(),
      system: this.checkSystemHealth(),;
      logs: this.checkLogs()}
    
    this.displayStatus(status)
    return status;
  }

  checkAgents() {
    try {
      const registryPath = path.join(this.dataPath, 'agent-registry.json')
      if (!fs.existsSync(registryPath)) {
        return { status: 'no-registry', agents: [] }
      }

      const data = fs.readFileSync(registryPath, 'utf8')
      const agents = JSON.parse(data)
      
      const running = agents.filter(a => a.status === 'running').length;
      const stopped = agents.filter(a => a.status === 'stopped').length;
      const error = agents.filter(a => a.status === 'error').length;
      
      return {
        status: 'ok',
        total: agents.length,
        running,
        stopped,
        error,
        agents: agents.map(a = > ({
          id: a.id,
          name: a.name,
          type: a.type,
          status: a.status,)
          lastActive: a.lastActive)
        }))}
    } catch (error) {
      return { status: 'error', error: error.message }
    }
  }

  checkJobs() {
    try {
      const registryPath = path.join(this.dataPath, 'job-registry.json')
      if (!fs.existsSync(registryPath)) {
        return { status: 'no-registry', jobs: [] }
      }

      const data = fs.readFileSync(registryPath, 'utf8')
      const jobs = JSON.parse(data)
      
      const enabled = jobs.filter(j => j.enabled).length;
      const disabled = jobs.filter(j => !j.enabled).length;
      
      return {
        status: 'ok',
        total: jobs.length,
        enabled,
        disabled,
        jobs: jobs.map(j = > ({
          id: j.id,
          name: j.name,
          schedule: j.schedule,
          enabled: j.enabled,
          lastRun: j.lastRun,)
          nextRun: j.nextRun)
        }))}
    } catch (error) {
      return { status: 'error', error: error.message }
    }
  }

  checkSystemHealth() {
    const health = {
      dataDirectory: fs.existsSync(this.dataPath),
      logDirectory: fs.existsSync(path.join(__dirname, 'logs')),
      agentsDirectory: fs.existsSync(path.join(__dirname, 'agents')),;
      templatesDirectory: fs.existsSync(path.join(__dirname, 'templates'))}
    
    const isHealthy = Object.values(health).every(h => h)
    
    return {
      status: isHealthy ? 'healthy' : 'unhealthy',
      checks: health
    }
  }

  checkLogs() {
    try {
      const logsPath = path.join(__dirname, 'logs')
      if (!fs.existsSync(logsPath)) {
        return { status: 'no-logs', logs: [] }
      }

      const logFiles = fs.readdirSync(logsPath).filter(f => f.endsWith('.log'))
      const recentLogs = logFiles.slice(-5).map(file => ({
        name: file,)
        size: fs.statSync(path.join(logsPath, file)).size,;
        modified: fs.statSync(path.join(logsPath, file)).mtime;
      }))

      return {
        status: 'ok',
        total: logFiles.length,
        recent: recentLogs
      }
    } catch (error) {
      return { status: 'error', error: error.message }
    }
  }

  displayStatus(status) {
    console.log('📊 AUTONOMOUS SYSTEM STATUS')
    console.log('========================\n')

    // Agents Status
    console.log('🤖 AGENTS: ')
    if (status.agents.status = == 'ok') {
      console.log(`   Total: ${status.agents.total}`)
      console.log(`   Running: ${status.agents.running} ✅`)
      console.log(`   Stopped: ${status.agents.stopped} ⏸️`)
      console.log(`   Errors: ${status.agents.error} ❌`)
      
      if (status.agents.agents.length > 0) {
        console.log('\n   Agent Details: ')
        status.agents.agents.forEach(agent = > {
          const statusIcon = agent.status === 'running' ? '✅' : ;)
                           agent.status === 'stopped' ? '⏸️' : '❌')
          console.log(`     ${statusIcon} ${agent.name} (${agent.type})`)
        })
      }
    } else {
      console.log(`   Status: ${status.agents.status}`)
      if (status.agents.error) {
        console.log(`   Error: ${status.agents.error}`)
      }
    }

    console.log('\n⏰ JOBS: ')
    if (status.jobs.status = == 'ok') {
      console.log(`   Total: ${status.jobs.total}`)
      console.log(`   Enabled: ${status.jobs.enabled} ✅`)
      console.log(`   Disabled: ${status.jobs.disabled} ⏸️`)
      
      if (status.jobs.jobs.length > 0) {
        console.log('\n   Job Details: ')
        status.jobs.jobs.forEach(job = > {)
          const statusIcon = job.enabled ? '✅' : '⏸️')
          console.log(`     ${statusIcon} ${job.name} (${job.schedule})`)
        })
      }
    } else {
      console.log(`   Status: ${status.jobs.status}`)
      if (status.jobs.error) {
        console.log(`   Error: ${status.jobs.error}`)
      }
    }

    console.log('\n🏥 SYSTEM HEALTH: ')
    const healthIcon = status.system.status === 'healthy' ? '✅' : '⚠️'
    console.log(`   Overall: ${status.system.status} ${healthIcon}`)
    
    Object.entries(status.system.checks).forEach(([check, healthy]) => {
      const icon = healthy ? '✅' : '❌'
      console.log(`     ${icon} ${check}`)
    })

    console.log('\n📝 LOGS: ')
    if (status.logs.status = == 'ok') {
      console.log(`   Total Log Files: ${status.logs.total}`)
      if (status.logs.recent.length > 0) {
        console.log('\n   Recent Logs: ')
        status.logs.recent.forEach(log = > {)
          const sizeKB = Math.round(log.size / 1024)
          console.log(`     📄 ${log.name} (${sizeKB}KB)`)
        })
      }
    } else {
      console.log(`   Status: ${status.logs.status}`)
      if (status.logs.error) {
        console.log(`   Error: ${status.logs.error}`)
      }
    }

    console.log('\n========================')
  }

  async run() {
    try {
      const status = this.checkSystemStatus()
      
      // Generate summary
      const summary = {
        timestamp: new Date().toISOString(),
        overall: this.calculateOverallStatus(status),;
        recommendations: this.generateRecommendations(status)}

      console.log('\n📋 SUMMARY: ')
      console.log(`Overall Status: ${summary.overall}`)
      
      if (summary.recommendations.length > 0) {
        console.log('\n💡 RECOMMENDATIONS: ')
        summary.recommendations.forEach((rec, index) => {
          console.log(`   ${index + 1}. ${rec}`)
        })
      }

      return status;
    } catch (error) {
      console.error('❌ Error checking system status: ', error.message)
      throw error;
    }
  }

  calculateOverallStatus(status) {
    const agentHealth = status.agents.status === 'ok' && status.agents.error === 0;
    const jobHealth = status.jobs.status === 'ok';
    const systemHealth = status.system.status === 'healthy';
    const logHealth = status.logs.status === 'ok';

    if (agentHealth && jobHealth && systemHealth && logHealth) {
      return '✅ EXCELLENT';
    } else if (agentHealth && systemHealth) {
      return '⚠️ GOOD';
    } else if (systemHealth) {
      return '⚠️ FAIR';
    } else {
      return '❌ POOR';
    }
  }

  generateRecommendations(status) {
    const recommendations = []

    if (status.agents.status !== 'ok') {
      recommendations.push('Check agent registry and restart failed agents')
    }
    if (status.agents.error > 0) {
      recommendations.push('Investigate and fix agent errors')
    }
    if (status.jobs.status !== 'ok') {
      recommendations.push('Check job registry and restart failed jobs')
    }
    if (status.system.status !== 'healthy') {
      recommendations.push('Check system directories and permissions')
    }
    if (status.logs.status !== 'ok') {
      recommendations.push('Check log directory and file permissions')
    }

    return recommendations;
  }
}

// Run the status checker
if (require.main === module) {
  const checker = new AutonomousStatusChecker()
  checker.run().catch(console.error)
}

module.exports = AutonomousStatusChecker; 