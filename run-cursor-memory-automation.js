#!/usr/bin/env node

const CursorMemoryAutomation = require('./cursor-memory-automation.js');
const fs = require('fs').promises;
const path = require('path');

async function main() {
  console.log('🚀 Starting Cursor Memory Learning Automation...');
  console.log('================================================');
  
  try {
    // Load configuration
    const configPath = './cursor-memory-config.json';
    let config = {};
    
    try {
      const configData = await fs.readFile(configPath, 'utf8');
      config = JSON.parse(configData);
      console.log('✅ Configuration loaded');
    } catch (error) {
      console.log('⚠️  Configuration file not found, using defaults');
      config = {
        automation: { enabled: true, autoRun: true },
        scanning: { sources: ['./logs', './automation_temp/logs', './cursor-automation/logs'] },
        ai: { model: 'gpt-4', temperature: 0.3, maxTokens: 4000 }
      };
    }
    
    // Check if automation is enabled
    if (!config.automation?.enabled) {
      console.log('❌ Automation is disabled in configuration');
      return;
    }
    
    // Create automation instance
    const automation = new CursorMemoryAutomation();
    
    // Override configuration if provided
    if (config.ai) {
      automation.learningConfig = {
        ...automation.learningConfig,
        ...config.ai
      };
    }
    
    // Run the automation
    await automation.run();
    
    console.log('================================================');
    console.log('✅ Cursor Memory Learning Automation completed successfully!');
    
    // Check if auto-commit is enabled
    if (config.automation?.autoCommit !== false) {
      console.log('📝 Committing changes...');
      const { exec } = require('child_process');
      const { promisify } = require('util');
      const execAsync = promisify(exec);
      
      try {
        await execAsync('git add cursor-memory/ cursor-memory-automation.js cursor-memory-config.json run-cursor-memory-automation.js');
        await execAsync('git commit -m "feat: Add cursor memory learning automation system"');
        console.log('✅ Changes committed successfully');
      } catch (error) {
        console.log('⚠️  Could not commit changes:', error.message);
      }
    }
    
  } catch (error) {
    console.error('❌ Error running cursor memory automation:', error);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };
