#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Test specific workflows that can be run locally
const testableWorkflows = {
  'test.yml': {
    description: 'Basic test workflow',
    localTests: ['type-check', 'security-audit']
  },
  'security-scan.yml': {
    description: 'Security scanning workflow',
    localTests: ['security-audit']
  },
  'performance-audit.yml': {
    description: 'Performance audit workflow',
    localTests: ['type-check']
  }
};

function runLocalTest(testName) {
  try {
    console.log(`  Running: ${testName}`);
    execSync(`npm run ${testName}`, { 
      stdio: 'pipe',
      timeout: 120000 // 2 minute timeout
    });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function testWorkflowLocally(workflowName, config) {
  console.log(`\n🧪 Testing ${workflowName}: ${config.description}`);
  
  const results = [];
  
  config.localTests.forEach(test => {
    const result = runLocalTest(test);
    results.push({ test, ...result });
    
    if (result.success) {
      console.log(`    ✅ ${test} - PASSED`);
    } else {
      console.log(`    ❌ ${test} - FAILED: ${result.error}`);
    }
  });
  
  const passed = results.filter(r => r.success).length;
  const total = results.length;
  
  console.log(`  Summary: ${passed}/${total} tests passed`);
  
  return {
    workflow: workflowName,
    passed,
    total,
    results
  };
}

function testAllTestableWorkflows() {
  console.log('🚀 Testing GitHub Actions Workflows Locally\n');
  console.log('This simulates running workflow steps that can be executed locally.\n');
  
  const allResults = [];
  let totalPassed = 0;
  let totalTests = 0;
  
  Object.entries(testableWorkflows).forEach(([workflowName, config]) => {
    const result = testWorkflowLocally(workflowName, config);
    allResults.push(result);
    totalPassed += result.passed;
    totalTests += result.total;
  });
  
  console.log('\n' + '='.repeat(50));
  console.log('🎯 FINAL RESULTS');
  console.log('='.repeat(50));
  console.log(`Total workflows tested: ${allResults.length}`);
  console.log(`Total tests: ${totalTests}`);
  console.log(`Tests passed: ${totalPassed}`);
  console.log(`Tests failed: ${totalTests - totalPassed}`);
  console.log(`Success rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%`);
  
  // Show failed tests
  const failedTests = allResults.flatMap(r => 
    r.results.filter(t => !t.success).map(t => ({
      workflow: r.workflow,
      test: t.test,
      error: t.error
    }))
  );
  
  if (failedTests.length > 0) {
    console.log('\n❌ FAILED TESTS:');
    failedTests.forEach(f => {
      console.log(`  ${f.workflow} - ${f.test}: ${f.error}`);
    });
  }
  
  return allResults;
}

// Run the tests
if (require.main === module) {
  testAllTestableWorkflows();
}

module.exports = { testWorkflowLocally, testAllTestableWorkflows };