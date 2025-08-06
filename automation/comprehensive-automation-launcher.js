#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path')
const { spawn } = require('child_process')

class ComprehensiveAutomationLauncher {
  constructor() {
    this.runningProcesses = new Map()
    this.healthChecks = new Map()
    this.startTime = Date.now()
    this.stats = {
      totalStarted: 0,
      totalFailed: 0,
      totalRunning: 0
    }
  }

  async initialize() {
    console.log('🚀 Initializing Comprehensive Automation Launcher...')
    
    try {
      // Create necessary directories
      await this.ensureDirectories()
      
      // Start core automation systems
      await this.startCoreSystems()
      
      // Start monitoring
      this.startMonitoring()
      
      console.log('✅ Comprehensive Automation Launcher initialized successfully')
      
    } catch (error) {
      console.error('❌ Error initializing Comprehensive Automation Launcher:', error)
    }
  }

  async ensureDirectories() {
    const directories = [
      'automation/logs',
      'automation/pids',
      'automation/status-data',
      'automation/health-reports',
      'automation/monitoring-data',
      'automation/performance-data',
      'automation/error-logs',
      'automation/maintenance-logs'
    ]

    for (const dir of directories) {
      try {
        await fs.mkdir(dir, { recursive: true })
      } catch (error) {
        // Directory might already exist
      }
    }
  }

  async startCoreSystems() {
    console.log('🔧 Starting core automation systems...')
    
    const coreSystems = [
      {
        name: 'autonomous-system',
        script: 'automation/start-autonomous-system.js',
        description: 'Main autonomous system'
      },
      {
        name: 'ultimate-automation-launcher',
        script: 'automation/ultimate-automation-launcher.js',
        description: 'Ultimate automation launcher'
      },
      {
        name: 'automation-monitor',
        script: 'automation/automation-monitor-and-maintainer-factory.js',
        description: 'Automation monitor and maintainer'
      },
      {
        name: 'master-orchestrator',
        script: 'automation/master-responsive-automation-orchestrator.js',
        description: 'Master responsive automation orchestrator'
      },
      {
        name: 'content-generator',
        script: 'automation/new-content-generation-automation.js',
        description: 'Content generation automation'
      },
      {
        name: 'performance-monitor',
        script: 'automation/performance-monitor.js',
        description: 'Performance monitoring system'
      },
      {
        name: 'link-checker',
        script: 'automation/link-checking-orchestrator.js',
        description: 'Link checking system'
      },
      {
        name: 'monetization-system',
        script: 'automation/monetization-orchestrator.js',
        description: 'Monetization automation system'
      },
      {
        name: 'intelligent-system',
        script: 'automation/intelligent-automation-system.js',
        description: 'Intelligent automation system'
      },
      {
        name: 'enhanced-system',
        script: 'automation/enhanced-autonomous-system.js',
        description: 'Enhanced autonomous system'
      }
    ]

    for (const system of coreSystems) {
      await this.startSystem(system)
    }
  }

  async startSystem(system) {
    try {
      console.log(`🔄 Starting ${system.name}...`)
      
      // Check if script exists
      try {
        await fs.access(system.script)
      } catch (error) {
        console.log(`⚠️  Script not found: ${system.script}`)
        return;
      }

      // Start the process
      const process = spawn('node', [system.script], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      })

      // Store process info
      this.runningProcesses.set(system.name, {
        process,
        script: system.script,
        description: system.description,
        startTime: Date.now(),
        pid: process.pid
      })

      // Handle process events
      process.on('error', (error) => {
        console.error(`❌ Error starting ${system.name}:`, error.message)
        this.stats.totalFailed++;
        this.runningProcesses.delete(system.name)
      })

      process.on('exit', (code) => {
        console.log(`🛑 ${system.name} exited with code ${code}`)
        this.runningProcesses.delete(system.name)
        this.stats.totalRunning = this.runningProcesses.size;
      })

      // Log output
      process.stdout.on('data', (data) => {
        console.log(`[${system.name}] ${data.toString().trim()}`)
      })

      process.stderr.on('data', (data) => {
        console.error(`[${system.name}] ERROR: ${data.toString().trim()}`)
      })

      this.stats.totalStarted++;
      this.stats.totalRunning = this.runningProcesses.size;
      
      console.log(`✅ ${system.name} started successfully (PID: ${process.pid})`)
      
      // Save PID to file
      await this.savePid(system.name, process.pid)
      
    } catch (error) {
      console.error(`❌ Failed to start ${system.name}:`, error.message)
      this.stats.totalFailed++;
    }
  }

  async savePid(systemName, pid) {
    try {
      const pidFile = `automation/pids/${systemName}.pid`;
      await fs.writeFile(pidFile, pid.toString())
    } catch (error) {
      console.error(`Error saving PID for ${systemName}:`, error.message)
    }
  }

  startMonitoring() {
    console.log('📊 Starting monitoring...')
    
    // Health check every 30 seconds
    setInterval(() => {
      this.performHealthChecks()
    }, 30000)

    // Status report every 5 minutes
    setInterval(() => {
      this.generateStatusReport()
    }, 300000)

    // Cleanup dead processes every minute
    setInterval(() => {
      this.cleanupDeadProcesses()
    }, 60000)
  }

  async performHealthChecks() {
    for (const [systemName, systemInfo] of this.runningProcesses) {
      try {
        // Check if process is still running
        if (systemInfo.process.killed) {
          console.log(`⚠️  ${systemName} process is dead, removing from tracking`)
          this.runningProcesses.delete(systemName)
          continue;
        }

        // Generate health report
        const healthReport = {
          systemName,
          pid: systemInfo.pid,
          uptime: Date.now() - systemInfo.startTime,
          status: 'running',
          timestamp: new Date().toISOString()
        }

        await this.saveHealthReport(systemName, healthReport)
        
      } catch (error) {
        console.error(`Error checking health of ${systemName}:`, error.message)
      }
    }
  }

  async saveHealthReport(systemName, report) {
    try {
      const reportFile = `automation/health-reports/${systemName}-health.json`;
      await fs.writeFile(reportFile, JSON.stringify(report, null, 2))
    } catch (error) {
      console.error(`Error saving health report for ${systemName}:`, error.message)
    }
  }

  async generateStatusReport() {
    const statusReport = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime,
      stats: this.stats,
      runningSystems: Array.from(this.runningProcesses.keys()),
      systemDetails: Array.from(this.runningProcesses.entries()).map(([name, info]) => ({
        name,
        pid: info.pid,
        uptime: Date.now() - info.startTime,
        description: info.description
      }))
    }

    try {
      await fs.writeFile('automation/status-data/comprehensive-launcher-status.json', JSON.stringify(statusReport, null, 2))
      console.log('📊 Status report generated')
    } catch (error) {
      console.error('Error generating status report:', error.message)
    }
  }

  async cleanupDeadProcesses() {
    for (const [systemName, systemInfo] of this.runningProcesses) {
      if (systemInfo.process.killed) {
        console.log(`🧹 Cleaning up dead process: ${systemName}`)
        this.runningProcesses.delete(systemName)
        this.stats.totalRunning = this.runningProcesses.size;
      }
    }
  }

  async stopAllSystems() {
    console.log('🛑 Stopping all automation systems...')
    
    for (const [systemName, systemInfo] of this.runningProcesses) {
      try {
        console.log(`🛑 Stopping ${systemName}...`)
        systemInfo.process.kill('SIGTERM')
        
        // Wait a bit for graceful shutdown
        setTimeout(() => {
          if (!systemInfo.process.killed) {
            systemInfo.process.kill('SIGKILL')
          }
        }, 5000)
        
      } catch (error) {
        console.error(`Error stopping ${systemName}:`, error.message)
      }
    }
    
    this.runningProcesses.clear()
    this.stats.totalRunning = 0;
  }

  getStatus() {
    return {
      uptime: Date.now() - this.startTime,
      stats: this.stats,
      runningSystems: Array.from(this.runningProcesses.keys()),
      totalSystems: this.runningProcesses.size
    }
  }
}

async function main() {
  const launcher = new ComprehensiveAutomationLauncher()
  
  // Handle shutdown gracefully
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...')
    await launcher.stopAllSystems()
    process.exit(0)
  })

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...')
    await launcher.stopAllSystems()
    process.exit(0)
  })

  // Start the launcher
  await launcher.initialize()
  
  // Keep the process running
  console.log('✅ Comprehensive Automation Launcher is now running!')
  console.log('Press Ctrl+C to stop all systems gracefully.')
  
  // Log status every 2 minutes
  setInterval(() => {
    const status = launcher.getStatus()
    console.log(`\n📊 Status: ${status.totalSystems} systems running, ${status.stats.totalStarted} total started, ${status.stats.totalFailed} failed`)
  }, 120000)
}

if (require.main === module) {
  main().catch(console.error)
}

module.exports = { ComprehensiveAutomationLauncher }
