#!/usr/bin/env node

const UltimateRedundancyMaster = require('./automation/ultimate-redundancy-master.cjs');

async function testRedundancy() {
  console.log('Testing Ultimate Redundancy System...');
  
  try {
    const master = new UltimateRedundancyMaster();
    
    console.log('\n1. Testing status...');
    const status = await master.getStatus();
    console.log('Status:', JSON.stringify(status, null, 2));
    
    console.log('\n2. Testing health check...');
    const health = await master.performHealthCheck();
    console.log('Health:', JSON.stringify(health, null, 2));
    
    console.log('\n3. Testing report generation...');
    const report = await master.generateReport();
    console.log('Report:', JSON.stringify(report, null, 2));
    
    console.log('\n4. Testing PM2 process checking...');
    const pm2Status = await master.checkPM2Status();
    console.log('PM2 Status:', pm2Status);
    
    console.log('\n5. Testing GitHub workflow checking...');
    for (const workflow of master.config.githubActions.workflows) {
      const isHealthy = await master.checkGitHubWorkflowStatus(workflow);
      console.log(`Workflow ${workflow}: ${isHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
    }
    
    console.log('\n6. Testing Netlify functions checking...');
    await master.ensureNetlifyFunctions();
    
    console.log('\n✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

testRedundancy();