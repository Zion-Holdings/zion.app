#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

class CleanAutomationController {
  constructor() {
    this.runningProcesses = new Map()
    this.workingSystems = [
      'continuous-working-automation.js'
    ]
    this.blockedSystems = [
      'deep-analysis-agent.js',
      'project-development-autonomous-factory.js',
      'automation-monitor-and-maintainer.js',
      'variation-content-agents-factory.js',
      'ultimate-automation-launcher.js',
      'ultimate-automation-fixer.js',
      'ultimate-automation-factory.js',
      'working-automation-system.js',
      'simple-working-automation.js'
    ]
    this.logDir = path.join(__dirname, 'clean-logs')
    this.pidDir = path.join(__dirname, 'clean-pids')
  }

  async initialize() {
    console.log('🧹 Initializing Clean Automation Controller...')
    
    // Create necessary directories
    await this.ensureDirectories()
    
    // Clean up any existing processes
    await this.cleanupExistingProcesses()
    
    // Load existing running processes from PID files
    await this.loadRunningProcesses()
    
    console.log('✅ Clean Automation Controller initialized')
  }

  async ensureDirectories() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true })
    }
    if (!fs.existsSync(this.pidDir)) {
      fs.mkdirSync(this.pidDir, { recursive: true })
    }
  }

  async cleanupExistingProcesses() {
    console.log('🧹 Cleaning up existing processes...')
    
    if (!fs.existsSync(this.pidDir)) return;
    
    const pidFiles = fs.readdirSync(this.pidDir).filter(file => file.endsWith('.pid'))
    
    for (const pidFile of pidFiles) {
      const pidPath = path.join(this.pidDir, pidFile)
      const pid = fs.readFileSync(pidPath, 'utf8').trim()
      
      try {
        // Check if process is still running
        process.kill(parseInt(pid), 0)
        console.log(`🧹 Cleaned up dead process: ${pidFile.replace('.pid', '')}`)
      } catch (error) {
        // Process is not running, remove PID file
        fs.unlinkSync(pidPath)
      }
    }
    
    console.log('✅ Existing processes cleaned up')
  }

  async loadRunningProcesses() {
    if (!fs.existsSync(this.pidDir)) return;
    
    const pidFiles = fs.readdirSync(this.pidDir).filter(file => file.endsWith('.pid'))
    
    for (const pidFile of pidFiles) {
      const systemName = pidFile.replace('.pid', '.js')
      const pidPath = path.join(this.pidDir, pidFile)
      
      try {
        const pid = fs.readFileSync(pidPath, 'utf8').trim()
        process.kill(parseInt(pid), 0) // Check if process is running
        
        this.runningProcesses.set(systemName, {
          pid: parseInt(pid),
          startTime: Date.now() - 60000, // Approximate start time
          logFile: path.join(this.logDir, `${systemName.replace('.js', '.log')}`)
        })
        
        console.log(`📈 Loaded running process: ${systemName} (PID: ${pid})`)
      } catch (error) {
        // Process is not running, remove PID file
        fs.unlinkSync(pidPath)
      }
    }
  }

  async start() {
    await this.initialize()
    
    console.log('🚀 Starting working automation systems...')
    
    for (const system of this.workingSystems) {
      if (!this.runningProcesses.has(system)) {
        await this.startSystem(system)
      }
    }
    
    console.log('✅ All working systems started')
  }

  async startSystem(systemName) {
    const logFile = path.join(this.logDir, `${systemName.replace('.js', '.log')}`)
    const pidFile = path.join(this.pidDir, `${systemName.replace('.js', '.pid')}`)
    
    const child = spawn('node', [systemName], {
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true
    })
    
    // Write PID to file
    fs.writeFileSync(pidFile, child.pid.toString())
    
    // Set up logging
    const logStream = fs.createWriteStream(logFile, { flags: 'a' })
    child.stdout.pipe(logStream)
    child.stderr.pipe(logStream)
    
    // Track the process
    this.runningProcesses.set(systemName, {
      pid: child.pid,
      startTime: Date.now(),
      logFile: logFile
    })
    
    console.log(`🟢 Started ${systemName} (PID: ${child.pid})`)
    
    // Detach the process
    child.unref()
  }

  async stop() {
    console.log('🛑 Stopping all automation systems...')
    
    for (const [systemName, info] of this.runningProcesses) {
      try {
        process.kill(info.pid, 'SIGTERM')
        console.log(`🛑 Stopped ${systemName} (PID: ${info.pid})`)
      } catch (error) {
        console.log(`⚠️  Could not stop ${systemName}: ${error.message}`)
      }
    }
    
    // Clean up PID files
    if (fs.existsSync(this.pidDir)) {
      const pidFiles = fs.readdirSync(this.pidDir).filter(file => file.endsWith('.pid'))
      for (const pidFile of pidFiles) {
        fs.unlinkSync(path.join(this.pidDir, pidFile))
      }
    }
    
    this.runningProcesses.clear()
    console.log('✅ All systems stopped')
  }

  getSystemStatus() {
    console.log('\n📊 Current System Status:')
    console.log('==================================================')
    
    console.log('\n🟢 Working Systems:')
    this.workingSystems.forEach(system => {
      const isRunning = this.runningProcesses.has(system)
      console.log(`${isRunning ? '🟢' : '⚪'} ${system}`)
    })
    
    console.log('\n🔴 Blocked Systems:')
    this.blockedSystems.forEach(system => {
      console.log(`🔴 ${system} (blocked)`)
    })
    
    console.log('\n📈 Running Processes:')
    if (this.runningProcesses.size === 0) {
      console.log('No processes currently running')
    } else {
      this.runningProcesses.forEach((info, system) => {
        const uptime = Math.floor((Date.now() - info.startTime) / 1000)
        console.log(`🟢 ${system} (PID: ${info.pid}, Uptime: ${uptime}s)`)
      })
    }
  }

  async status() {
    await this.initialize()
    this.getSystemStatus()
  }
}

// Main execution
const controller = new CleanAutomationController()
const command = process.argv[2]

(async () => {
  try {
    switch (command) {
      case 'start':
        await controller.start()
        break;
      case 'stop':
        await controller.stop()
        break;
      case 'status':
        await controller.status()
        break;
      default:
        console.log('Usage: node clean-automation-controller.js [start|stop|status]')
        break
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
})()
