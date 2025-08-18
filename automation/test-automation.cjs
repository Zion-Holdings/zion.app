#!/usr/bin/env node

/**
 * Test Automation - Simple test to verify the automation system works
 * This automation will create a simple test file to demonstrate functionality
 */

const fs = require('fs');
const path = require('path');

class TestAutomation {
  constructor() {
    this.id = 'test-automation';
    this.createdAt = new Date().toISOString();
    this.testResults = [];
  }

  async run() {
    console.log('🧪 Running Test Automation...');
    
    try {
      // Test 1: File creation
      await this.testFileCreation();
      
      // Test 2: Directory operations
      await this.testDirectoryOperations();
      
      // Test 3: Simple calculations
      await this.testCalculations();
      
      // Test 4: Generate test report
      await this.generateTestReport();
      
      console.log('✅ Test Automation completed successfully!');
      console.log(`📊 Test Results: ${this.testResults.length} tests passed`);
      
    } catch (error) {
      console.error('❌ Error in Test Automation:', error);
      throw error;
    }
  }

  async testFileCreation() {
    console.log('📝 Testing file creation...');
    
    const testFile = path.join(__dirname, 'test-output.txt');
    const testContent = `Test Automation Output
Generated: ${new Date().toISOString()}
Status: Running successfully
`;

    fs.writeFileSync(testFile, testContent);
    
    if (fs.existsSync(testFile)) {
      this.testResults.push({
        test: 'File Creation',
        status: 'PASSED',
        details: `Created file: ${testFile}`
      });
      console.log('✅ File creation test passed');
    } else {
      this.testResults.push({
        test: 'File Creation',
        status: 'FAILED',
        details: 'File was not created'
      });
      console.log('❌ File creation test failed');
    }
  }

  async testDirectoryOperations() {
    console.log('📁 Testing directory operations...');
    
    const testDir = path.join(__dirname, 'test-directory');
    
    // Create directory
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
    
    // Create a file in the directory
    const testFile = path.join(testDir, 'nested-test.txt');
    fs.writeFileSync(testFile, 'Nested test file content');
    
    if (fs.existsSync(testDir) && fs.existsSync(testFile)) {
      this.testResults.push({
        test: 'Directory Operations',
        status: 'PASSED',
        details: `Created directory and nested file: ${testDir}`
      });
      console.log('✅ Directory operations test passed');
    } else {
      this.testResults.push({
        test: 'Directory Operations',
        status: 'FAILED',
        details: 'Directory or nested file was not created'
      });
      console.log('❌ Directory operations test failed');
    }
  }

  async testCalculations() {
    console.log('🧮 Testing calculations...');
    
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const product = numbers.reduce((acc, num) => acc * num, 1);
    
    const expectedSum = 15;
    const expectedAverage = 3;
    const expectedProduct = 120;
    
    if (sum === expectedSum && average === expectedAverage && product === expectedProduct) {
      this.testResults.push({
        test: 'Calculations',
        status: 'PASSED',
        details: `Sum: ${sum}, Average: ${average}, Product: ${product}`
      });
      console.log('✅ Calculations test passed');
    } else {
      this.testResults.push({
        test: 'Calculations',
        status: 'FAILED',
        details: `Expected: Sum=${expectedSum}, Avg=${expectedAverage}, Prod=${expectedProduct}; Got: Sum=${sum}, Avg=${average}, Prod=${product}`
      });
      console.log('❌ Calculations test failed');
    }
  }

  async generateTestReport() {
    console.log('📊 Generating test report...');
    
    const reportFile = path.join(__dirname, 'test-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      automationId: this.id,
      totalTests: this.testResults.length,
      passedTests: this.testResults.filter(r => r.status === 'PASSED').length,
      failedTests: this.testResults.filter(r => r.status === 'FAILED').length,
      results: this.testResults,
      summary: this.generateSummary()
    };
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📄 Test report generated: ${reportFile}`);
    console.log(`📈 Summary: ${report.passedTests}/${report.totalTests} tests passed`);
  }

  generateSummary() {
    const passed = this.testResults.filter(r => r.status === 'PASSED').length;
    const total = this.testResults.length;
    const percentage = total > 0 ? (passed / total) * 100 : 0;
    
    if (percentage === 100) {
      return '🎉 All tests passed! System is working perfectly.';
    } else if (percentage >= 80) {
      return '✅ Most tests passed. System is working well.';
    } else if (percentage >= 60) {
      return '⚠️ Some tests failed. System needs attention.';
    } else {
      return '❌ Many tests failed. System has issues.';
    }
  }

  getResults() {
    return this.testResults;
  }
}

// Auto-execute if run directly
if (require.main === module) {
  const automation = new TestAutomation();
  automation.run().catch(console.error);
}

module.exports = TestAutomation;
