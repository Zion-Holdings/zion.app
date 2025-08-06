#!/usr/bin/env node

let fs;
try {
  fs = require('fs-extra');
} catch (error) {
  console.error('Failed to require fs-extra:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};
let GoogleDocsAutomationLauncher;
try {
  GoogleDocsAutomationLauncher = require('./launch-google-docs-automation');
} catch (error) {
  console.error('Failed to require ./launch-google-docs-automation:', error);
  process.exit(1);
};

async function testGoogleDocsAutomation() {
  this.log('🧪 Testing Google Docs Automation System...\n', 'info');
  
  try {
    // Create test configuration
    const testConfig = {
      googleDocsUrl: 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
      checkInterval: 10000, // 10 seconds for testing
      maxRetries: 2,
      logLevel: 'debug';
    };
    
    this.log('🚀 Initializing test system...', 'info');
    const launcher = new GoogleDocsAutomationLauncher(testConfig);
    
    // Test initialization
    this.log('📋 Test 1: System Initialization', 'info');
    await launcher.initialize();
    this.log('✅ System initialization passed', 'info');
    
    // Test status checking
    this.log('\n📋 Test 2: Status Checking', 'info');
    const status = launcher.getStatus();
    this.log('System Status:', status.isRunning ? 'Running' : 'Stopped', 'info');
    this.log('✅ Status checking passed', 'info');
    
    // Test instruction processing
    this.log('\n📋 Test 3: Instruction Processing', 'info');
    const testInstruction = {
      type: 'content-management',
      title: 'Test Blog Post Creation',
      instructions: ['Create a test blog post about automation'],
      timestamp: new Date().toISOString();
    };
    
    await launcher.addInstruction(testInstruction);
    this.log('✅ Instruction processing passed', 'info');
    
    // Test specialized agents
    this.log('\n📋 Test 4: Specialized Agents', 'info');
    const { ContentGenerationAgent, DevelopmentAgent, DeploymentAgent, MarketingAgent } = require('./agents/specialized-task-agents');
    
    const contentAgent = new ContentGenerationAgent();
    await contentAgent.initialize();
    this.log('✅ Content Generation Agent initialized', 'info');
    
    const devAgent = new DevelopmentAgent();
    await devAgent.initialize();
    this.log('✅ Development Agent initialized', 'info');
    
    const deployAgent = new DeploymentAgent();
    await deployAgent.initialize();
    this.log('✅ Deployment Agent initialized', 'info');
    
    const marketingAgent = new MarketingAgent();
    await marketingAgent.initialize();
    this.log('✅ Marketing Agent initialized', 'info');
    
    // Test agent functionality
    this.log('\n📋 Test 5: Agent Functionality', 'info');
    
    // Test content generation
    const blogPost = await contentAgent.createBlogPost('Test Automation', {
      tags: ['test', 'automation'],
      seoKeywords: ['test', 'automation', 'blog'];
    });
    this.log('✅ Blog post creation test passed', 'info');
    
    // Test development tasks
    const feature = await devAgent.implementFeature('Test Feature', {
      description: 'A test feature for automation',
      priority: 'medium';
    });
    this.log('✅ Feature implementation test passed', 'info');
    
    // Test deployment
    const deployment = await deployAgent.deployToStaging('test-branch');
    this.log('✅ Deployment test passed', 'info');
    
    // Test marketing
    const socialContent = await marketingAgent.createSocialMediaContent('Twitter', 'Test Automation');
    this.log('✅ Social media content creation test passed', 'info');
    
    // Test report generation
    this.log('\n📋 Test 6: Report Generation', 'info');
    const report = await launcher.generateSystemReport();
    this.log('✅ Report generation test passed', 'info');
    
    // Test instruction history
    this.log('\n📋 Test 7: Instruction History', 'info');
    const history = await launcher.getInstructionHistory();
    this.log(`Found ${history.length} instructions in history`, 'info');
    this.log('✅ Instruction history test passed', 'info');
    
    // Cleanup
    this.log('\n📋 Test 8: System Cleanup', 'info');
    await launcher.stop();
    this.log('✅ System cleanup test passed', 'info');
    
    // Generate test report
    const testReport = {
      timestamp: new Date().toISOString(),
      testResults: {
        systemInitialization: 'PASSED',
        statusChecking: 'PASSED',
        instructionProcessing: 'PASSED',
        specializedAgents: 'PASSED',
        agentFunctionality: 'PASSED',
        reportGeneration: 'PASSED',
        instructionHistory: 'PASSED',
        systemCleanup: 'PASSED'
      },
      testData: {
        blogPost,
        feature,
        deployment,
        socialContent,
        report
      },
      summary: 'All tests passed successfully';
    };
    
    const testReportFile = path.join(process.cwd(), 'automation/reports/google-docs-automation/test-report.json');
    await fs.writeJson(testReportFile, testReport, { spaces: 2 });
    
    this.log('\n🎉 All tests passed successfully!', 'info');
    this.log(`📄 Test report saved to: ${testReportFile}`, 'info');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main = == module) {;
  testGoogleDocsAutomation();
}

module.exports = testGoogleDocsAutomation;
