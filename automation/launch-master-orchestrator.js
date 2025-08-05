#!/usr/bin/env node

const MasterResponsiveAutomationOrchestrator = require('./master-responsive-automation-orchestrator');

console.log('🚀 Launching Master Responsive Automation Orchestrator...');

// Create and start the master orchestrator
const masterOrchestrator = new MasterResponsiveAutomationOrchestrator();

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Master Responsive Automation Orchestrator...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Master Responsive Automation Orchestrator...');
  process.exit(0);
});

// Log orchestrator status every 3 minutes
setInterval(() => {
  const status = masterOrchestrator.getOrchestratorStatus();
  console.log('\n📊 Master Responsive Automation Orchestrator Status:');
  console.log(`🏭 Systems: ${status.systems.total} total, ${status.systems.active} active`);
  console.log(`🏭 Factories: ${status.factories.total} total, ${status.factories.active} active`);
  console.log(`🤖 Agents: ${status.agents.total} total, ${status.agents.active} active`);
  console.log(`🔧 Automations: ${status.automations.total} total, ${status.automations.active} active`);
  console.log(`📈 Performance: ${status.metrics.improvementsApplied} improvements, ${status.metrics.contentFixed} content fixes`);
  console.log(`⚡ Uptime: ${status.metrics.automationsExecuted} automations executed`);
}, 3 * 60 * 1000);

console.log('✅ Master Responsive Automation Orchestrator is now running!');
console.log('Press Ctrl+C to stop the orchestrator.'); 