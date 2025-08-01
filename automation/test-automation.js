#!/usr/bin/env node

const WebsiteAnalyzerAgent = require('./website-analyzer-agent');
const ContentGeneratorAgent = require('./content-generator-agent');
const ErrorFixerAgent = require('./error-fixer-agent');

async function testAutomationSystem() {
  console.log('🧪 Testing Zion Tech Group Website Automation System');
  console.log('=' .repeat(60));
  
  try {
    // Test 1: Website Analyzer Agent
    console.log('\n📊 Test 1: Website Analyzer Agent');
    const analyzer = new WebsiteAnalyzerAgent();
    await analyzer.initialize();
    
    // Test basic functionality
    console.log('✅ Website Analyzer Agent initialized successfully');
    await analyzer.cleanup();
    
    // Test 2: Content Generator Agent
    console.log('\n🎨 Test 2: Content Generator Agent');
    const contentGenerator = new ContentGeneratorAgent();
    
    // Test content generation with mock data
    const mockAnalysisReport = {
      summary: {
        missingContent: [
          {
            url: 'https://ziontechgroup.netlify.app/about',
            missing: [{ type: 'empty_content', severity: 'high' }]
          }
        ]
      }
    };
    
    const generatedContent = await contentGenerator.generateMissingContent(mockAnalysisReport);
    console.log(`✅ Content Generator Agent generated ${generatedContent.length} content items`);
    
    // Test 3: Error Fixer Agent
    console.log('\n🔧 Test 3: Error Fixer Agent');
    const errorFixer = new ErrorFixerAgent();
    await errorFixer.initialize();
    
    console.log('✅ Error Fixer Agent initialized successfully');
    await errorFixer.cleanup();
    
    // Test 4: File System Operations
    console.log('\n📁 Test 4: File System Operations');
    const fs = require('fs').promises;
    const path = require('path');
    
    // Test creating directories
    const testDir = path.join(__dirname, 'test-output');
    await fs.mkdir(testDir, { recursive: true });
    console.log('✅ Directory creation successful');
    
    // Test writing files
    const testFile = path.join(testDir, 'test.json');
    await fs.writeFile(testFile, JSON.stringify({ test: 'success' }, null, 2));
    console.log('✅ File writing successful');
    
    // Cleanup test files
    await fs.rm(testDir, { recursive: true, force: true });
    console.log('✅ File cleanup successful');
    
    // Test 5: Dependencies
    console.log('\n📦 Test 5: Dependencies');
    const puppeteer = require('puppeteer');
    const axios = require('axios');
    console.log('✅ All dependencies loaded successfully');
    
    console.log('\n🎉 All tests passed! The automation system is ready to run.');
    console.log('\nTo start the automation:');
    console.log('  node automation/run-automation.js');
    console.log('\nTo run with cron job:');
    console.log('  ./automation/setup-cron.sh');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Run the test
if (require.main === module) {
  testAutomationSystem().catch(error => {
    console.error('❌ Test failed:', error);
    process.exit(1);
  });
}

module.exports = { testAutomationSystem }; 