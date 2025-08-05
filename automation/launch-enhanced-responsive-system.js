#!/usr/bin/env node

const EnhancedResponsiveAutomationSystem = require('./enhanced-responsive-automation-system');

console.log('🚀 Launching Enhanced Responsive Automation System...');

// Create and start the enhanced responsive automation system
const enhancedSystem = new EnhancedResponsiveAutomationSystem();

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Enhanced Responsive Automation System...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Enhanced Responsive Automation System...');
  process.exit(0);
});

// Log system status every 5 minutes
setInterval(() => {
  const status = enhancedSystem.getSystemStatus();
  console.log('\n📊 Enhanced Responsive Automation System Status:');
  console.log(`🏭 Factories: ${status.factories.total} total, ${status.factories.active} active`);
  console.log(`🤖 Agents: ${status.agents.total} total, ${status.agents.active} active`);
  console.log(`📈 Performance: ${status.performance.contentFixed} content fixes, ${status.performance.improvementsMade} improvements`);
  console.log(`⚡ Uptime: ${status.performance.automationsExecuted} automations executed`);
}, 5 * 60 * 1000);

console.log('✅ Enhanced Responsive Automation System is now running!');
console.log('Press Ctrl+C to stop the system.'); 