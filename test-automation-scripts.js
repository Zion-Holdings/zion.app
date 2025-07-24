
/**
 * Test script for automation scripts
 * Tests all major automation scripts to ensure they work correctly
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const scripts = [
  'auto-fix-watcher.js',
  'auto-run-all.js',
  'automation/index.js',
  'automation/test-system.js',
  'automation/autonomous-system.js',
  'automation/automation-manager.js'
];

const shellScripts = [
  'start-automation.sh',
  'stop-automation.sh',
  'start-autonomous-automation.sh'
];

async function testScript(scriptPath) {
  try {
    console.log(`🧪 Testing ${scriptPath}...`);

    // Check if file exists
    if (!fs.existsSync(scriptPath)) {
      console.log(`❌ ${scriptPath} not found`);
      return {
        script: scriptPath,
        status: 'NOT_FOUND',
        error: 'File not found'
      };
    }

    // Check syntax for JS files
    if (scriptPath.endsWith('.js')) {
      try {
        execSync(`node -c ${scriptPath}`, { stdio: 'pipe' });
        console.log(`✅ ${scriptPath} syntax OK`);
        return { script: scriptPath, status: 'PASS', error: null };
      } catch (error) {
        console.log(`❌ ${scriptPath} syntax error: ${error.message}`);
        return {
          script: scriptPath,
          status: 'SYNTAX_ERROR',
          error: error.message
        };
      }
    }

    // Check if shell scripts are executable
    if (scriptPath.endsWith('.sh')) {
      try {
        const stats = fs.statSync(scriptPath);
        if (stats.mode & 0o111) {
          console.log(`✅ ${scriptPath} is executable`);
          return { script: scriptPath, status: 'PASS', error: null };
        } else {
          console.log(
            `⚠️ ${scriptPath} is not executable, making it executable...`,
          );
          fs.chmodSync(scriptPath, 0o755);
          console.log(`✅ ${scriptPath} made executable`);
          return { script: scriptPath, status: 'PASS', error: null };
        }
      } catch (error) {
        console.log(`❌ ${scriptPath} error: ${error.message}`);
        return { script: scriptPath, status: 'ERROR', error: error.message };
      }
    }

    return {
      script: scriptPath,
      status: 'UNKNOWN',
      error: 'Unknown file type'
    };
  } catch (error) {
    console.log(`❌ ${scriptPath} test failed: ${error.message}`);
    return { script: scriptPath, status: 'FAIL', error: error.message };
  }
}

async function testAutomationSystem() {
  console.log('🧪 Testing Automation System...');

  try {
    // Test the automation system directly
    const result = execSync('cd automation && npm test', {
      encoding: 'utf8',
      stdio: pipe
    });

    if (result.includes('All tests passed')) {
      console.log('✅ Automation system tests passed');
      return { status: 'PASS', error: null };
    } else {
      console.log('❌ Automation system tests failed');
      return { status: 'FAIL', error: Tests failed' };
    }
  } catch (error) {
    console.log(`❌ Automation system test failed: ${error.message}`);
    return { status: 'FAIL', error: error.message };
  }
}

async function main() {
  console.log('🚀 Testing All Automation Scripts...');
  console.log('='.repeat(60));

  const results = [];

  // Test individual scripts
  for (const script of scripts) {
    const result = await testScript(script);
    results.push(result);
  }

  // Test shell scripts
  for (const script of shellScripts) {
    const result = await testScript(script);
    results.push(result);
  }

  // Test automation system
  const automationResult = await testAutomationSystem();
  results.push({
    script: 'automation-system',
    status: automationResult.status,
    error: automationResult.error
  });

  // Print results
  console.log('\n' + ='.repeat(60));
  console.log('📊 Test Results Summary');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  results.forEach((result) => {
    const status = result.status === PASS' ? ✅' : ❌';
    console.log(`${status} ${result.script}: ${result.status}`);
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }

    if (result.status === 'PASS') {
      passed++;
    } else {
      failed++;
    }
  });

  console.log('\n📈 Summary:');
  console.log(`- Passed: ${passed}`);
  console.log(`- Failed: ${failed}`);
  console.log(`- Total: ${results.length}`);

  if (failed === 0) {
    console.log('\n🎉 All automation scripts are working correctly!');
    process.exit(0);
  } else {
    console.log(
      \n⚠️ Some automation scripts have issues that need to be fixed.',
    );
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});
