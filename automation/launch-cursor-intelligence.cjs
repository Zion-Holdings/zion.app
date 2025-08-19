#!/usr/bin/env node

'use strict';

/*
  Cursor Intelligence Launcher
  - Simple launcher for the cursor intelligence systems
  - Can run individual systems or the full orchestrator
  - Provides command-line interface for system management
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Import the orchestrator
const CursorIntelligenceOrchestrator = require('./cursor-intelligence-orchestrator.cjs');

class CursorIntelligenceLauncher {
  constructor() {
    this.baseDir = process.cwd();
    this.availableSystems = [
      'intelligence-amplifier',
      'multi-agent-collaborator', 
      'knowledge-synthesizer',
      'orchestrator'
    ];
  }

  async launchSystem(systemName) {
    console.log(`🚀 Launching ${systemName}...`);
    
    try {
      switch (systemName) {
        case 'intelligence-amplifier':
          await this.launchIntelligenceAmplifier();
          break;
        case 'multi-agent-collaborator':
          await this.launchMultiAgentCollaborator();
          break;
        case 'knowledge-synthesizer':
          await this.launchKnowledgeSynthesizer();
          break;
        case 'orchestrator':
          await this.launchOrchestrator();
          break;
        default:
          console.error(`❌ Unknown system: ${systemName}`);
          this.showUsage();
          return false;
      }
      
      return true;
      
    } catch (error) {
      console.error(`❌ Failed to launch ${systemName}:`, error.message);
      return false;
    }
  }

  async launchIntelligenceAmplifier() {
    const result = spawnSync('node', ['automation/cursor-intelligence-amplifier.cjs'], {
      cwd: this.baseDir,
      stdio: 'inherit'
    });
    
    if (result.status !== 0) {
      throw new Error(`Intelligence amplifier exited with status ${result.status}`);
    }
  }

  async launchMultiAgentCollaborator() {
    const result = spawnSync('node', ['automation/cursor-multi-agent-collaborator.cjs'], {
      cwd: this.baseDir,
      stdio: 'inherit'
    });
    
    if (result.status !== 0) {
      throw new Error(`Multi-agent collaborator exited with status ${result.status}`);
    }
  }

  async launchKnowledgeSynthesizer() {
    const result = spawnSync('node', ['automation/cursor-knowledge-synthesizer.cjs'], {
      cwd: this.baseDir,
      stdio: 'inherit'
    });
    
    if (result.status !== 0) {
      throw new Error(`Knowledge synthesizer exited with status ${result.status}`);
    }
  }

  async launchOrchestrator() {
    const orchestrator = new CursorIntelligenceOrchestrator();
    await orchestrator.runOrchestrator();
  }

  async launchAllSystems() {
    console.log('🚀 Launching all cursor intelligence systems...');
    
    const results = {};
    
    for (const system of this.availableSystems) {
      if (system !== 'orchestrator') { // Skip orchestrator as it manages others
        console.log(`\n🔄 Launching ${system}...`);
        results[system] = await this.launchSystem(system);
      }
    }
    
    // Show results
    console.log('\n📊 Launch Results:');
    Object.entries(results).forEach(([system, success]) => {
      console.log(`${success ? '✅' : '❌'} ${system}: ${success ? 'Success' : 'Failed'}`);
    });
    
    const successCount = Object.values(results).filter(Boolean).length;
    const totalCount = Object.keys(results).length;
    
    console.log(`\n🎯 Overall: ${successCount}/${totalCount} systems launched successfully`);
    
    return successCount === totalCount;
  }

  showUsage() {
    console.log(`
🧠 Cursor Intelligence Launcher

Usage: node automation/launch-cursor-intelligence.cjs [system|all]

Available systems:
  intelligence-amplifier    - Launch the intelligence amplifier system
  multi-agent-collaborator - Launch the multi-agent collaboration system  
  knowledge-synthesizer    - Launch the knowledge synthesis system
  orchestrator            - Launch the full orchestrator (manages all systems)
  all                     - Launch all individual systems

Examples:
  node automation/launch-cursor-intelligence.cjs intelligence-amplifier
  node automation/launch-cursor-intelligence.cjs all
  node automation/launch-cursor-intelligence.cjs orchestrator

The orchestrator is recommended for production use as it coordinates all systems.
    `);
  }

  async run() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      this.showUsage();
      return;
    }
    
    const command = args[0].toLowerCase();
    
    if (command === 'all') {
      await this.launchAllSystems();
    } else if (this.availableSystems.includes(command)) {
      await this.launchSystem(command);
    } else {
      console.error(`❌ Unknown command: ${command}`);
      this.showUsage();
      process.exit(1);
    }
  }
}

// Main execution
if (require.main === module) {
  const launcher = new CursorIntelligenceLauncher();
  
  launcher.run()
    .then(() => {
      console.log('🎉 Cursor Intelligence Launcher completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Cursor Intelligence Launcher failed:', error);
      process.exit(1);
    });
}

module.exports = CursorIntelligenceLauncher;
