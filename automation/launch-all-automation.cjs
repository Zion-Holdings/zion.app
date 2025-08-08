#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutomationLauncher {
  constructor() {
    this.processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'automation-launcher.log');
    this.ensureLogDirectory();
    this.startTime = Date.now();
    this.systemsDef = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startSystem(name, scriptPath, args = [], options = {}) {
    try {
      this.log(`🚀 Starting ${name}...`);
      
      const child = spawn('node', [scriptPath, ...args], {
        stdio: 'pipe',
        detached: false,
        ...options
      });

      child.stdout.on('data', (data) => {
        this.log(`[${name}] ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        this.log(`[${name}] ERROR: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        this.log(`[${name}] Process exited with code ${code}`);
        this.processes.delete(name);
      });

      child.on('error', (error) => {
        this.log(`[${name}] Process error: ${error.message}`);
        this.processes.delete(name);
      });

      this.processes.set(name, child);
      this.log(`✅ ${name} started successfully`);
      
      return child;
    } catch (error) {
      this.log(`❌ Failed to start ${name}: ${error.message}`);
      return null;
    }
  }

  async startAllSystems() {
    this.log('🚀 Starting all automation systems...');
    
    // Seed known long-running or important jobs
    const seedSystems = [
      { name: 'intelligent-orchestrator', script: 'intelligent-orchestrator.cjs', args: ['continuous'] },
      { name: 'automation-dashboard', script: 'automation-dashboard.cjs', args: ['start'] },
      { name: 'lint-monitor', script: 'lint-monitor.cjs', args: ['start'] },
      { name: 'self-healing', script: 'self-healing-orchestrator.cjs', args: [] },
      { name: 'alignment-orchestrator', script: 'alignment-orchestrator.cjs', args: ['continuous'] },
      { name: 'design-orchestrator', script: 'design-orchestrator.cjs', args: ['continuous'] },
      { name: 'diversification-orchestrator', script: 'diversification-orchestrator.cjs', args: [] },
      { name: 'responsive-content-orchestrator', script: 'responsive-content-orchestrator.cjs', args: ['continuous'] },
            { name: 'variation-orchestrator', script: 'variation-orchestrator.cjs', args: ['continuous'] },
      { name: 'growth-orchestrator', script: 'growth-orchestrator.cjs', args: ['continuous'] },
      { name: 'frontend-sync-orchestrator', script: 'frontend-sync-orchestrator.cjs', args: ['continuous'] },
      { name: 'saas-services-orchestrator', script: 'saas-services-orchestrator.cjs', args: ['continuous'] },
      { name: 'homepage-promo-orchestrator', script: 'homepage-promo-orchestrator.cjs', args: ['continuous'] },
      { name: 'linkedin-marketing-orchestrator', script: 'linkedin-marketing-orchestrator.cjs', args: ['continuous'] },
      { name: 'cursor-chat-orchestrator', script: 'cursor-chat-orchestrator.cjs', args: ['continuous'] },
      { name: 'site-link-orchestrator', script: 'site-link-orchestrator.cjs', args: ['continuous'] },
      { name: 'site-promo-orchestrator', script: 'site-promo-orchestrator.cjs', args: ['continuous'] },
      { name: 'spec-dev-orchestrator', script: 'spec-dev-orchestrator.cjs', args: ['continuous'] },
      { name: 'linkedin-pro-orchestrator', script: 'linkedin-pro-orchestrator.cjs', args: ['continuous'] },
      { name: 'code-quality', script: 'code-quality-monitor.cjs', args: [] },
      { name: 'performance', script: 'performance-optimizer.cjs', args: [] },
      { name: 'security-scanner', script: 'security-scanner.cjs', args: [] },
      { name: 'seo-optimizer', script: 'seo-optimizer.cjs', args: [] },
      { name: 'test-generator', script: 'test-generator.cjs', args: [] },
      { name: 'content-autogen-orchestrator', script: 'content-autogen-orchestrator.cjs', args: ['start'] }
    ];
    
    // Auto-discover any additional .cjs/.js in automation/ to include future automations automatically
    const configPath = path.join(__dirname, 'auto-discovery.config.json');
    const exclude = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath, 'utf8')).exclude || [] : [];
    const files = fs.readdirSync(__dirname).filter(f => (f.endsWith('.cjs') || f.endsWith('.js')) && !exclude.includes(f));
    const discovered = files
      .filter(f => !seedSystems.some(s => s.script === f))
      .map(f => ({ name: f.replace(/\.(cjs|js)$/,''), script: f, args: [] }));
    
    const systems = [...seedSystems, ...discovered];

    this.systemsDef = systems;

    for (const system of systems) {
      const scriptPath = path.join(__dirname, system.script);
      if (fs.existsSync(scriptPath)) {
        await this.startSystem(system.name, scriptPath, system.args || []);
        // Start faster to achieve near real-time coverage
        await this.sleep(250);
      } else {
        this.log(`⚠️ Script not found: ${system.script}`);
      }
    }

    this.log(`📊 Started ${this.processes.size} automation systems`);
    // Automatically enable monitoring to keep processes alive
    this.monitor();

    // Schedule periodic git sync to ensure changes are pushed
    setInterval(() => {
      try {
        const syncPath = path.join(__dirname, 'git-sync.cjs');
        if (fs.existsSync(syncPath)) {
          this.log('🔗 Running periodic git sync...');
          spawn('node', [syncPath], { stdio: 'ignore', detached: false });
        }
      } catch (e) {
        this.log(`❌ Git sync error: ${e.message}`);
      }
    }, 60 * 1000); // every 1 minute
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all automation systems...');
    
    for (const [name, process] of this.processes) {
      this.log(`🛑 Stopping ${name}...`);
      process.kill('SIGTERM');
    }
    
    this.processes.clear();
    this.log('✅ All systems stopped');
  }

  getStatus() {
    const status = {
      running: this.processes.size,
      systems: Array.from(this.processes.keys()),
      totalSystems: this.processes.size
    };
    
    this.log(`📊 Status: ${status.running} systems running`);
    this.log(`📊 Systems: ${status.systems.join(', ')}`);
    
    return status;
  }

  async restartSystem(name) {
    const process = this.processes.get(name);
    if (process) {
      this.log(`🔄 Restarting ${name}...`);
      process.kill('SIGTERM');
      await this.sleep(1000);
    }
    
    const scriptPath = path.join(__dirname, `${name}.cjs`);
    if (fs.existsSync(scriptPath)) {
      await this.startSystem(name, scriptPath);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      runningSystems: Array.from(this.processes.keys()),
      totalSystems: this.processes.size,
      uptime: this.getUptime()
    };

    const reportPath = path.join(__dirname, 'logs', 'automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  getUptime() {
    // Simple uptime calculation
    return Date.now() - this.startTime;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async monitor() {
    this.log('👀 Starting automation monitoring...');
    
    setInterval(() => {
      try {
        this.log(`📊 Monitoring: ${this.processes.size} systems running`);
        // Periodic auto-discovery to include newly added scripts automatically
        const configPath = path.join(__dirname, 'auto-discovery.config.json');
        const exclude = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath, 'utf8')).exclude || [] : [];
        const allFiles = fs.readdirSync(__dirname).filter(f => (f.endsWith('.cjs') || f.endsWith('.js')) && !exclude.includes(f));
        const existingScripts = new Set(this.systemsDef.map(s => s.script));
        for (const f of allFiles) {
          if (!existingScripts.has(f)) {
            const name = f.replace(/\.(cjs|js)$/,'');
            const def = { name, script: f, args: [] };
            this.systemsDef.push(def);
            this.log(`➕ Discovered new automation: ${name} (${f})`);
          }
        }

        const expected = new Map(this.systemsDef.map(s => [s.name, s]));
        // Restart missing or stopped processes
        for (const [name, def] of expected) {
          const proc = this.processes.get(name);
          if (!proc || proc.killed) {
            this.log(`⚠️ ${name} not running, restarting...`);
            const scriptPath = path.join(__dirname, def.script);
            if (fs.existsSync(scriptPath)) {
              this.startSystem(name, scriptPath, def.args || []);
            }
          }
        }
      } catch (e) {
        this.log(`❌ Monitor error: ${e.message}`);
      }
    }, 5000); // Check every 5 seconds for faster recovery and discovery
  }
}

// CLI handling
const launcher = new AutomationLauncher();
const command = process.argv[2];

switch (command) {
  case 'start':
    launcher.startAllSystems();
    break;
  case 'stop':
    launcher.stopAllSystems();
    process.exit(0);
    break;
  case 'status':
    launcher.getStatus();
    process.exit(0);
    break;
  case 'restart':
    const systemName = process.argv[3];
    if (systemName) {
      launcher.restartSystem(systemName);
    } else {
      console.log('Usage: node launch-all-automation.cjs restart <system-name>');
    }
    break;
  case 'report':
    launcher.generateReport();
    process.exit(0);
    break;
  case 'monitor':
    launcher.monitor();
    break;
  default:
    console.log('Usage: node launch-all-automation.cjs [start|stop|status|restart|report|monitor] [system-name]');
    console.log('\nCommands:');
    console.log('  start     - Start all automation systems');
    console.log('  stop      - Stop all automation systems');
    console.log('  status    - Show current status');
    console.log('  restart   - Restart a specific system');
    console.log('  report    - Generate automation report');
    console.log('  monitor   - Start monitoring mode');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});
