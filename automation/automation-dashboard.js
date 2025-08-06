#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Starting Automation Dashboard...');

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
    return { isRunning: false, health: 'unknown', performance: 0, intelligence: 0 };
  }
  
  try {
    const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    return state;
  } catch (error) {
    return { isRunning: false, health: 'unknown', performance: 0, intelligence: 0 };
  }
}

function displayDashboard() {
  console.clear();
  console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
  console.log('║                           AUTOMATION DASHBOARD                               ║');
  console.log('╠══════════════════════════════════════════════════════════════════════════════╣');
  
  const systems = SYSTEMS.map(system => {
    const status = getSystemStatus(system);
    return {
      name: system,
      ...status
    };
  });

  const activeSystems = systems.filter(s => s.isRunning).length;
  const totalPerformance = systems.reduce((sum, s) => sum + (s.performance || 0), 0) / systems.length;
  const totalIntelligence = systems.reduce((sum, s) => sum + (s.intelligence || 0), 0) / systems.length;
  const totalEvolution = systems.reduce((sum, s) => sum + (s.evolutionCount || 0), 0);

  console.log(`║ Overall Status: ${activeSystems}/${SYSTEMS.length} Systems Active | Performance: ${Math.round(totalPerformance)}% | Intelligence: ${Math.round(totalIntelligence)}% ║`);
  console.log(`║ Total Evolution Cycles: ${totalEvolution} | Last Update: ${new Date().toLocaleString()} ║`);
  console.log('╠══════════════════════════════════════════════════════════════════════════════╣');

  systems.forEach((system, index) => {
    const statusIcon = system.isRunning ? '🟢' : '🔴';
    const healthIcon = system.health === 'excellent' ? '⭐' : 
                      system.health === 'healthy' ? '🟢' : 
                      system.health === 'warning' ? '🟡' : '🔴';
    
    const performance = system.performance || 0;
    const intelligence = system.intelligence || 0;
    const evolution = system.evolutionCount || 0;
    const pid = system.pid || 'N/A';
    
    const systemName = system.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    console.log(`║ ${statusIcon} ${systemName.padEnd(35)} ║`);
    console.log(`║    Health: ${healthIcon} ${system.health.padEnd(10)} | Performance: ${performance.toString().padStart(3)}% | Intelligence: ${intelligence.toString().padStart(3)}% ║`);
    console.log(`║    Evolution: ${evolution.toString().padStart(3)} cycles | PID: ${pid.toString().padStart(6)} ║`);
    
    if (index < systems.length - 1) {
      console.log('║                                                                              ║');
    }
  });

  console.log('╠══════════════════════════════════════════════════════════════════════════════╣');
  
  // Performance indicators
  const performanceLevel = Math.round(totalPerformance);
  const intelligenceLevel = Math.round(totalIntelligence);
  const overallLevel = Math.round((performanceLevel + intelligenceLevel) / 2);
  
  let performanceBar = '';
  for (let i = 0; i < 20; i++) {
    if (i < (performanceLevel / 5)) {
      performanceBar += '█';
    } else {
      performanceBar += '░';
    }
  }
  
  let intelligenceBar = '';
  for (let i = 0; i < 20; i++) {
    if (i < (intelligenceLevel / 5)) {
      intelligenceBar += '█';
    } else {
      intelligenceBar += '░';
    }
  }
  
  console.log(`║ Performance:  [${performanceBar}] ${performanceLevel.toString().padStart(3)}% ║`);
  console.log(`║ Intelligence: [${intelligenceBar}] ${intelligenceLevel.toString().padStart(3)}% ║`);
  console.log(`║ Overall:      ${overallLevel >= 90 ? '🚀 EXCELLENT' : overallLevel >= 75 ? '✅ GOOD' : overallLevel >= 50 ? '⚠️  FAIR' : '❌ POOR'} (${overallLevel}%) ║`);
  
  console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
  
  // System recommendations
  console.log('\n📋 System Recommendations:');
  
  const lowPerformanceSystems = systems.filter(s => (s.performance || 0) < 70);
  const lowIntelligenceSystems = systems.filter(s => (s.intelligence || 0) < 70);
  
  if (lowPerformanceSystems.length > 0) {
    console.log(`⚠️  ${lowPerformanceSystems.length} system(s) need performance optimization`);
  }
  
  if (lowIntelligenceSystems.length > 0) {
    console.log(`⚠️  ${lowIntelligenceSystems.length} system(s) need intelligence enhancement`);
  }
  
  if (activeSystems === SYSTEMS.length && overallLevel >= 80) {
    console.log('✅ All systems are running optimally!');
  }
  
  console.log(`\n🔄 Dashboard updates every 10 seconds | Press Ctrl+C to exit`);
}

function startDashboard() {
  log('📊 Starting automation dashboard...');
  
  // Initial display
  displayDashboard();
  
  // Update dashboard every 10 seconds
  setInterval(() => {
    displayDashboard();
  }, 10000);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('🛑 Shutting down automation dashboard...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  log('🛑 Received SIGTERM, shutting down...');
  process.exit(0);
});

// Start dashboard
startDashboard();
