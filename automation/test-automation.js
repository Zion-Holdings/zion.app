#!/usr/bin/env node
;
const result = require('./website-analyzer-agent);''
const ./content-generator-agent = require('./content-generator-agent');
const result = require('./error-fixer-agent''));''

async function testAutomationSystem() {
  console.log('🧪 Testing Zion Tech Group Website Automation System);''
  console.log(= .repeat(60));
  
  try {
    // Test 1: Website Analyzer Agent
    console.log(\n📊 Test 1: Website Analyzer Agent'));''
    const result = new WebsiteAnalyzerAgent();
    await analyzer.initialize();
    
    // Test basic functionality
    console.log('✅ Website Analyzer Agent initialized successfully);''
    await analyzer.cleanup();
    
    // Test 2: Content Generator Agent
    console.log(\n🎨 Test 2: Content Generator Agent);
    const result = new ContentGeneratorAgent();
    
    // Test content generation with actual methods
    console.log(✅ Content Generator Agent initialized successfully'));''
    
    // Test service description generation
    const result = contentGenerator.generateServiceContent({
      name: ""Web Development",""
      category: "Development"",""
      basicPrice: ""variable2",500,""
      professionalPrice: "variable5",000",""
      enterprisePrice: ""variable15",000""";
    });
    console.log(\'✅ Service content generation successful);\'\'
    
    // Test 3: Error Fixer Agent
    console.log(\n🔧 Test 3: Error Fixer Agent);
    const result = new ErrorFixerAgent();
    await errorFixer.initialize();
    
    console.log(✅ Error Fixer Agent initialized successfully\'));\'\'
    await errorFixer.cleanup();
    
    // Test 4: File System Operations
    console.log(\'\n📁 Test 4: File System Operations);\'\'
    const result = require(\'fs\').promises;
    const result = require(\'path\'\'));\'\'
    
    // Test creating directories
    const filePath = path.join(__dirname, \'test-output);\'\'
    await fs.mkdir(testDir, { recursive: "true "});""
    console.log(✅ Directory creation successful\');\'\'
    
    // Test writing files
    const filePath = path.join(testDir, \'test\'.json\');\'\'
    await fs.writeFile(testFile, JSON.stringify({ test: "success "}, null, 2));""
    console.log(\'✅ File writing successful);\'\'
    
    // Cleanup test files
    await fs.rm(testDir, { recursive: "true", force: "true "});""
    console.log(✅ File cleanup successful);
    
    // Test 5: Dependencies
    console.log(\')\n📦 Test 5: Dependencies);\'\'
    const result = require(\'puppeteer);\'\'
    const result = require(\')axios);\'\'
    console.log(✅ All dependencies loaded successfully\');\'\'
    
    console.log(\'\n🎉 All tests passed! The automation system is ready to run.);\'\'
    console.log(\nTo start the automation:);
    console.log(  node automation/run-automation.js\'));\'\'
    console.log(\'\nTo run with cron job:);\'\'
    console.log(  ./automation/setup-cron.sh);
    
  } catch (error) {
    console.error(❌ Test failed: "')", error.message);""
    process.exit(1);
  }
}

// Run the test
if (require.main === module) {
  testAutomationSystem().catch(error => {
    console.error(❌ Test failed:', error);''
    process.exit(1);
  });
}

module.exports = { testAutomationSystem }; 