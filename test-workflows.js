#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// Check if GitHub token is available
function checkToken() {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_PAT || process.env.GITHUB_PAT;
  if (!token) {
    console.log('❌ No GitHub token found. Please set one of:');
    console.log('  - GH_TOKEN');
    console.log('  - GITHUB_TOKEN');
    console.log('  - GH_PAT');
    console.log('  - GITHUB_PAT');
    console.log('\nYou can get a token from: https://github.com/settings/tokens');
    return false;
  }
  console.log('✅ GitHub token found');
  return true;
}

// Test core workflows
function testCoreWorkflows() {
  console.log('\n🚀 Testing Core Workflows...');
  
  const coreWorkflows = [
    'ci.yml',
    'security.yml',
    'workflow-validator.yml'
  ];
  
  coreWorkflows.forEach(workflow => {
    console.log(`\n📋 Testing ${workflow}...`);
    try {
      const result = execSync(`node scripts/trigger-workflows.cjs --only ${workflow} --wait --verbose`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      console.log(`✅ ${workflow} completed successfully`);
      console.log(result);
    } catch (error) {
      console.log(`❌ ${workflow} failed:`);
      console.log(error.stdout || error.message);
    }
  });
}

// Test specific workflow
function testWorkflow(workflowName) {
  if (!fs.existsSync(`.github/workflows/${workflowName}`)) {
    console.log(`❌ Workflow ${workflowName} not found`);
    return;
  }
  
  console.log(`\n🧪 Testing ${workflowName}...`);
  try {
    const result = execSync(`node scripts/trigger-workflows.cjs --only ${workflowName} --wait --verbose`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${workflowName} completed successfully`);
    console.log(result);
  } catch (error) {
    console.log(`❌ ${workflowName} failed:`);
    console.log(error.stdout || error.message);
  }
}

// Main function
function main() {
  console.log('🔍 GitHub Actions Workflow Tester');
  console.log('================================\n');
  
  if (!checkToken()) {
    process.exit(1);
  }
  
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('\n📚 Usage:');
    console.log('  node test-workflows.js                    # Test core workflows');
    console.log('  node test-workflows.js <workflow-name>    # Test specific workflow');
    console.log('\nExamples:');
    console.log('  node test-workflows.js ci.yml');
    console.log('  node test-workflows.js security.yml');
    console.log('  node test-workflows.js workflow-validator.yml');
    
    console.log('\n🎯 Testing core workflows...');
    testCoreWorkflows();
  } else {
    const workflowName = args[0];
    testWorkflow(workflowName);
  }
}

if (require.main === module) {
  main();
}

module.exports = { testCoreWorkflows, testWorkflow, checkToken };