#!/usr/bin/env node

'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function log(msg) {
  console.log(`[cloud-orchestrator] ${msg}`);
}

function gitSync() {
  try {
    log('🔄 Starting git sync...');
    execSync('git add .', { cwd: ROOT, stdio: 'inherit' });
    
    const status = execSync('git status --porcelain', { cwd: ROOT, encoding: 'utf8' }).trim();
    if (status) {
      execSync('git commit -m "🤖 Cloud orchestration updates [skip ci]"', { cwd: ROOT, stdio: 'inherit' });
      execSync('git push', { cwd: ROOT, stdio: 'inherit' });
      log('✅ Git sync completed');
    } else {
      log('ℹ️ No changes to commit');
    }
  } catch (error) {
    log(`❌ Git sync failed: ${error.message}`);
  }
}

function coordinateAgents() {
  try {
    log('🤖 Coordinating agents...');
    
    // Check for any agent processes that need coordination
    const agentScripts = [
      'automation/netlify-autonomous-manager.cjs',
      'automation/enhanced-autonomous-orchestrator.cjs',
      'automation/exponential-autonomous-orchestrator.cjs'
    ];
    
    for (const script of agentScripts) {
      if (fs.existsSync(path.join(ROOT, script))) {
        log(`🔄 Coordinating ${script}...`);
        try {
          execSync(`node "${script}"`, { cwd: ROOT, stdio: 'inherit', timeout: 30000 });
        } catch (error) {
          log(`⚠️ ${script} coordination failed: ${error.message}`);
        }
      }
    }
    
    log('✅ Agent coordination completed');
  } catch (error) {
    log(`❌ Agent coordination failed: ${error.message}`);
  }
}

function main() {
  log('🚀 Starting cloud orchestration...');
  
  try {
    coordinateAgents();
    gitSync();
    
    log('✅ Cloud orchestration completed successfully');
  } catch (error) {
    log(`❌ Cloud orchestration failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}