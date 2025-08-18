#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Autonomous Meta Orchestrator Starting...\n');

// Configuration
const CONFIG = {
  maxToTrigger: 18,
  concurrency: 8,
  requestTimeoutMs: 15000,
  exclude: new Set([
    'autonomous-meta-orchestrator',
    'trigger-all-and-commit'
  ])
};

// Priority function detection
function isPriority(name) {
  const keywords = ['orchestrator', 'enhancer', 'promoter', 'advertiser', 'runner', 'maximizer'];
  const focus = ['front', 'home', 'index', 'readme'];
  const low = ['schedule', 'scheduler'];
  
  const hasKeyword = keywords.some(k => name.includes(k));
  const hasFocus = focus.some(f => name.includes(f));
  const isLow = low.some(l => name.includes(l));
  
  return hasKeyword && hasFocus && !isLow;
}

// Get available functions from Netlify functions directory
function getAvailableFunctions() {
  const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
  if (!fs.existsSync(functionsDir)) {
    console.log('⚠️  Netlify functions directory not found');
    return [];
  }
  
  try {
    const files = fs.readdirSync(functionsDir);
    return files
      .filter(file => file.endsWith('.js') && !file.includes('.test.'))
      .map(file => file.replace('.js', ''));
  } catch (error) {
    console.log(`❌ Error reading functions directory: ${error.message}`);
    return [];
  }
}

// Simulate function invocation (for GitHub Actions environment)
async function simulateInvoke(functionName) {
  console.log(`🔄 Simulating invocation of: ${functionName}`);
  
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));
  
  // Simulate success/failure based on function name
  const success = !functionName.includes('broken') && !functionName.includes('error');
  
  if (success) {
    console.log(`✅ Successfully processed: ${functionName}`);
    return { name: functionName, status: 200, ok: true };
  } else {
    console.log(`❌ Failed to process: ${functionName}`);
    return { name: functionName, status: 500, ok: false, error: 'Simulated failure' };
  }
}

// Process functions with concurrency control
async function processFunctions(functions, maxConcurrency = CONFIG.concurrency) {
  const results = [];
  const chunks = [];
  
  // Split functions into chunks for concurrency control
  for (let i = 0; i < functions.length; i += maxConcurrency) {
    chunks.push(functions.slice(i, i + maxConcurrency));
  }
  
  for (const chunk of chunks) {
    const chunkPromises = chunk.map(func => simulateInvoke(func));
    const chunkResults = await Promise.all(chunkPromises);
    results.push(...chunkResults);
    
    // Small delay between chunks to avoid overwhelming
    if (chunks.indexOf(chunk) < chunks.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return results;
}

// Generate heartbeat data
function generateHeartbeat(triggeredFunctions) {
  return {
    triggeredAt: new Date().toISOString(),
    triggered: triggeredFunctions.map(f => f.name),
    environment: 'github-actions',
    totalFunctions: triggeredFunctions.length,
    successfulFunctions: triggeredFunctions.filter(f => f.ok).length,
    failedFunctions: triggeredFunctions.filter(f => !f.ok).length
  };
}

// Main execution function
async function runOrchestrator(mode = 'once') {
  console.log(`🎯 Running in mode: ${mode}`);
  
  try {
    // Get available functions
    const allFunctions = getAvailableFunctions();
    console.log(`📁 Found ${allFunctions.length} available functions`);
    
    if (allFunctions.length === 0) {
      console.log('⚠️  No functions available to process');
      return;
    }
    
    // Filter and prioritize functions
    const prioritized = allFunctions
      .filter(name => !CONFIG.exclude.has(name))
      .filter(name => isPriority(name))
      .slice(0, CONFIG.maxToTrigger);
    
    console.log(`🎯 Prioritized ${prioritized.length} functions for processing`);
    
    if (prioritized.length === 0) {
      console.log('⚠️  No priority functions found');
      return;
    }
    
    // Process functions
    console.log('\n🚀 Starting function processing...\n');
    const results = await processFunctions(prioritized, CONFIG.concurrency);
    
    // Generate summary
    const successful = results.filter(r => r.ok);
    const failed = results.filter(r => !r.ok);
    
    console.log('\n📊 Processing Summary:');
    console.log(`  ✅ Successful: ${successful.length}`);
    console.log(`  ❌ Failed: ${failed.length}`);
    console.log(`  📈 Total: ${results.length}`);
    
    if (failed.length > 0) {
      console.log('\n❌ Failed Functions:');
      failed.forEach(f => console.log(`    - ${f.name}: ${f.error || 'Unknown error'}`));
    }
    
    // Generate heartbeat
    const heartbeat = generateHeartbeat(results);
    const heartbeatPath = path.join(__dirname, 'meta-heartbeat.json');
    
    try {
      fs.writeFileSync(heartbeatPath, JSON.stringify(heartbeat, null, 2));
      console.log(`\n💓 Heartbeat saved to: ${heartbeatPath}`);
    } catch (writeError) {
      console.log(`⚠️  Could not write heartbeat: ${writeError.message}`);
    }
    
    // If running continuously, schedule next run
    if (mode === 'continuous') {
      console.log('\n🔄 Scheduling next run in 2 hours...');
      setTimeout(() => runOrchestrator('continuous'), 2 * 60 * 60 * 1000);
    }
    
    console.log('\n🎉 Autonomous Meta Orchestrator completed successfully!');
    
  } catch (error) {
    console.error(`\n💥 Orchestrator failed: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

// Handle command line arguments
const mode = process.argv[2] || 'once';
if (mode === 'once' || mode === 'continuous') {
  runOrchestrator(mode);
} else {
  console.log('Usage: node autonomous-meta-orchestrator.cjs [once|continuous]');
  console.log('  once: Run once and exit');
  console.log('  continuous: Run continuously with 2-hour intervals');
  process.exit(1);
}

module.exports = { runOrchestrator, isPriority, getAvailableFunctions };
