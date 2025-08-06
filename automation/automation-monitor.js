#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

console.log('🔍 Starting Comprehensive Automation Monitor...');

const AUTOMATION_DIR = path.join(__dirname);
const SYSTEMS = [
  'ultimate-automation-factory-system',
  'intelligent-automation-orchestrator', 
  'continuous-automation-improvement-system',
  'master-automation-coordinator',
  'enhanced-diversification-orchestrator',
  'intelligent-agent-orchestrator'
];

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : '📊';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function getSystemStatus(systemName) {
  const stateFile = path.join(AUTOMATION_DIR, 'status-data', `${systemName}-state.json`);
  
  if (!fs.existsSync(stateFile)) {
    return { isRunning: false, health: 'unknown', errors: ['No state file found'] };
  }
  
  try {
    const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    return state;
  } catch (error) {
    return { isRunning: false, health: 'unknown', errors: [error.message] };
  }
}

function isProcessRunning(pid) {
  try {
    execSync(`ps -p ${pid}`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function startSystem(systemName) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(AUTOMATION_DIR, `${systemName}.js`);
    
    if (!fs.existsSync(scriptPath)) {
      log(`System script not found: ${scriptPath}`, 'error');
      reject(new Error(`Script not found: ${scriptPath}`));
      return;
    }

    log(`Starting ${systemName}...`);
    
    const child = spawn('node', [scriptPath], {
      stdio: 'pipe',
      detached: true
    });

    // Update state file
    const stateFile = path.join(AUTOMATION_DIR, 'status-data', `${systemName}-state.json`);
    if (fs.existsSync(stateFile)) {
      const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
      state.isRunning = true;
      state.pid = child.pid;
      state.lastActivity = new Date().toISOString();
      state.errors = [];
      fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
    }

    child.on('error', (error) => {
      log(`Error starting ${systemName}: ${error.message}`, 'error');
      reject(error);
    });

    setTimeout(() => {
      if (child.pid) {
        log(`${systemName} started with PID: ${child.pid}`);
        resolve(child);
      } else {
        reject(new Error('Process failed to start'));
      }
    }, 3000);
  });
}

function killSystem(systemName) {
  try {
    const stateFile = path.join(AUTOMATION_DIR, 'status-data', `${systemName}-state.json`);
    if (fs.existsSync(stateFile)) {
      const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
      if (state.pid && isProcessRunning(state.pid)) {
        execSync(`kill ${state.pid}`, { stdio: 'ignore' });
        log(`Killed ${systemName} (PID: ${state.pid})`);
      }
    }
  } catch (error) {
    log(`Error killing ${systemName}: ${error.message}`, 'error');
  }
}

function updateOverallStatus() {
  const systems = SYSTEMS.map(system => {
    const status = getSystemStatus(system);
    return {
      name: system,
      ...status
    };
  });

  const activeSystems = systems.filter(s => s.isRunning).length;
  const failedSystems = systems.filter(s => !s.isRunning).length;
  
  const overallStatus = {
    timestamp: new Date().toISOString(),
    overallHealth: activeSystems > 0 ? 'healthy' : 'critical',
    totalSystems: SYSTEMS.length,
    activeSystems,
    failedSystems,
    successRate: Math.round((activeSystems / SYSTEMS.length) * 100),
    systems
  };
  
  fs.writeFileSync(
    path.join(AUTOMATION_DIR, 'automation-status.json'),
    JSON.stringify(overallStatus, null, 2)
  );
  
  return overallStatus;
}

function generateStatusReport() {
  const status = updateOverallStatus();
  
  log('📊 Automation Status Report');
  log(`📊 Overall Health: ${status.overallHealth}`);
  log(`📊 Active Systems: ${status.activeSystems}/${status.totalSystems}`);
  log(`📊 Success Rate: ${status.successRate}%`);
  
  status.systems.forEach(system => {
    const statusIcon = system.isRunning ? '✅' : '❌';
    const healthIcon = system.health === 'healthy' || system.health === 'excellent' ? '🟢' : 
                      system.health === 'warning' ? '🟡' : '🔴';
    log(`${statusIcon} ${system.name} - ${healthIcon} ${system.health} (PID: ${system.pid || 'N/A'})`);
  });
  
  return status;
}

async function monitorAndFix() {
  try {
    log('🔍 Checking automation systems...');
    
    const status = generateStatusReport();
    
    // Fix failed systems
    const failedSystems = status.systems.filter(s => !s.isRunning);
    
    if (failedSystems.length > 0) {
      log(`🔧 Found ${failedSystems.length} failed systems, attempting to fix...`);
      
      for (const system of failedSystems) {
        try {
          log(`🔧 Attempting to restart ${system.name}...`);
          await startSystem(system.name);
          log(`✅ Successfully restarted ${system.name}`);
        } catch (error) {
          log(`❌ Failed to restart ${system.name}: ${error.message}`, 'error');
        }
      }
      
      // Update status after fixes
      setTimeout(() => {
        generateStatusReport();
      }, 5000);
    } else {
      log('✅ All automation systems are running properly');
    }
    
  } catch (error) {
    log(`❌ Error in monitoring: ${error.message}`, 'error');
  }
}

// Main monitoring loop
function startMonitoring() {
  log('🚀 Starting automation monitoring...');
  
  // Initial check
  monitorAndFix();
  
  // Monitor every 30 seconds
  setInterval(() => {
    monitorAndFix();
  }, 30000);
  
  // Generate detailed report every 5 minutes
  setInterval(() => {
    const status = generateStatusReport();
    
    // Save detailed report
    const reportFile = path.join(AUTOMATION_DIR, 'reports', `status-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(status, null, 2));
    
    log(`📊 Detailed report saved: ${reportFile}`);
  }, 300000);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('🛑 Shutting down automation monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  log('🛑 Received SIGTERM, shutting down...');
  process.exit(0);
});

// Start monitoring
startMonitoring();
