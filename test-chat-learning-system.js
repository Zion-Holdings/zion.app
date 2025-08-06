#!/usr/bin/env node

const ChatLearningAutomationSystem = require('./chat-learning-automation.js');
const ChatLearningIntegration = require('./chat-learning-integration.js');
const fs = require('fs').promises;
const path = require('path');

class ChatLearningSystemTest {
  constructor() {
    this.system = new ChatLearningAutomationSystem();
    this.integration = new ChatLearningIntegration();
    this.testResults = [];
  }

  async runAllTests() {
    console.log('🧪 Starting Chat Learning System Tests...\n');

    try {
      // Test 1: System Initialization
      await this.testSystemInitialization();

      // Test 2: Chat Learning
      await this.testChatLearning();

      // Test 3: Pattern Analysis
      await this.testPatternAnalysis();

      // Test 4: Automation Rule Generation
      await this.testAutomationRuleGeneration();

      // Test 5: Smart Suggestions
      await this.testSmartSuggestions();

      // Test 6: Auto-Fix Common Issues
      await this.testAutoFixCommonIssues();

      // Test 7: Integration
      await this.testIntegration();

      // Test 8: Data Persistence
      await this.testDataPersistence();

      // Test 9: Performance
      await this.testPerformance();

      // Test 10: Error Handling
      await this.testErrorHandling();

      this.printTestResults();
    } catch (error) {
      console.error('❌ Test suite failed:', error);
      process.exit(1);
    }
  }

  async testSystemInitialization() {
    console.log('📋 Test 1: System Initialization');
    
    try {
      await this.system.start();
      this.addTestResult('System Initialization', true, 'System initialized successfully');
      
      // Test data loading
      await this.system.loadExistingData();
      this.addTestResult('Data Loading', true, 'Data loaded successfully');
      
    } catch (error) {
      this.addTestResult('System Initialization', false, error.message);
    }
  }

  async testChatLearning() {
    console.log('📋 Test 2: Chat Learning');
    
    try {
      const testChatContent = `
        User: I'm getting TypeScript errors in my React component
        Assistant: Let me help you fix those TypeScript errors. Can you show me the specific error messages?
        User: The error says "Property 'onClick' does not exist on type 'HTMLButtonElement'"
        Assistant: This is a common TypeScript error. You need to properly type your event handlers. Here's the fix:
        
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          // Your click handler logic
        };
        
        <button onClick={handleClick}>Click me</button>
        
        User: Thanks! That fixed it. I also have issues with useState types
        Assistant: For useState, you should explicitly type your state variables:
        
        const [count, setCount] = useState<number>(0);
        const [user, setUser] = useState<User | null>(null);
      `;

      const result = await this.system.learnFromChat({
        chatContent: testChatContent,
        context: 'typescript_errors',
        timestamp: new Date().toISOString()
      });

      if (result.success) {
        this.addTestResult('Chat Learning', true, `Learned ${result.patternsFound} patterns`);
      } else {
        this.addTestResult('Chat Learning', false, result.error);
      }
    } catch (error) {
      this.addTestResult('Chat Learning', false, error.message);
    }
  }

  async testPatternAnalysis() {
    console.log('📋 Test 3: Pattern Analysis');
    
    try {
      const result = await this.system.analyzeChatPatterns({
        timeRange: 'week',
        patternType: 'error_fixes'
      });

      if (result.success) {
        this.addTestResult('Pattern Analysis', true, `Analyzed ${result.analysis.totalPatterns} patterns`);
      } else {
        this.addTestResult('Pattern Analysis', false, result.error);
      }
    } catch (error) {
      this.addTestResult('Pattern Analysis', false, error.message);
    }
  }

  async testAutomationRuleGeneration() {
    console.log('📋 Test 4: Automation Rule Generation');
    
    try {
      const result = await this.system.generateAutomationRules({
        patternType: 'high_value',
        priority: 'high'
      });

      if (result.success) {
        this.addTestResult('Automation Rule Generation', true, `Generated ${result.rulesGenerated} rules`);
      } else {
        this.addTestResult('Automation Rule Generation', false, result.error);
      }
    } catch (error) {
      this.addTestResult('Automation Rule Generation', false, error.message);
    }
  }

  async testSmartSuggestions() {
    console.log('📋 Test 5: Smart Suggestions');
    
    try {
      const result = await this.system.generateSmartSuggestions({
        context: 'react_development',
        suggestionType: 'performance_optimization'
      });

      if (result.success) {
        this.addTestResult('Smart Suggestions', true, `Generated suggestions using ${result.patternsUsed} patterns`);
      } else {
        this.addTestResult('Smart Suggestions', false, result.error);
      }
    } catch (error) {
      this.addTestResult('Smart Suggestions', false, error.message);
    }
  }

  async testAutoFixCommonIssues() {
    console.log('📋 Test 6: Auto-Fix Common Issues');
    
    try {
      const result = await this.system.autoFixCommonIssues({
        issueType: 'typescript_errors',
        filePath: 'test-component.tsx'
      });

      if (result.success) {
        this.addTestResult('Auto-Fix Common Issues', true, `Generated fix with confidence ${result.confidence}`);
      } else {
        this.addTestResult('Auto-Fix Common Issues', false, result.message);
      }
    } catch (error) {
      this.addTestResult('Auto-Fix Common Issues', false, error.message);
    }
  }

  async testIntegration() {
    console.log('📋 Test 7: Integration');
    
    try {
      await this.integration.initialize();
      this.addTestResult('Integration Initialization', true, 'Integration initialized successfully');
      
      // Test integration with existing systems
      await this.integration.setupAutomationIntegration();
      this.addTestResult('Automation Integration', true, 'Automation integration setup successful');
      
    } catch (error) {
      this.addTestResult('Integration', false, error.message);
    }
  }

  async testDataPersistence() {
    console.log('📋 Test 8: Data Persistence');
    
    try {
      // Test saving data
      await this.system.saveData();
      this.addTestResult('Data Saving', true, 'Data saved successfully');
      
      // Test loading data
      await this.system.loadExistingData();
      this.addTestResult('Data Loading', true, 'Data loaded successfully');
      
    } catch (error) {
      this.addTestResult('Data Persistence', false, error.message);
    }
  }

  async testPerformance() {
    console.log('📋 Test 9: Performance');
    
    try {
      const startTime = Date.now();
      
      // Test pattern extraction performance
      const testContent = "This is a test chat content for performance testing. ".repeat(100);
      await this.system.extractPatternsFromChat(testContent);
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      if (duration < 10000) { // Should complete within 10 seconds
        this.addTestResult('Performance', true, `Pattern extraction completed in ${duration}ms`);
      } else {
        this.addTestResult('Performance', false, `Pattern extraction took too long: ${duration}ms`);
      }
      
    } catch (error) {
      this.addTestResult('Performance', false, error.message);
    }
  }

  async testErrorHandling() {
    console.log('📋 Test 10: Error Handling');
    
    try {
      // Test with invalid input
      const result = await this.system.learnFromChat({
        chatContent: '',
        context: 'test'
      });

      // Should handle empty content gracefully
      if (result.success !== undefined) {
        this.addTestResult('Error Handling', true, 'Handled empty input gracefully');
      } else {
        this.addTestResult('Error Handling', false, 'Failed to handle empty input');
      }
      
    } catch (error) {
      this.addTestResult('Error Handling', true, 'Properly caught and handled error');
    }
  }

  addTestResult(testName, passed, message) {
    this.testResults.push({
      test: testName,
      passed,
      message,
      timestamp: new Date().toISOString()
    });

    const status = passed ? '✅' : '❌';
    console.log(`${status} ${testName}: ${message}`);
  }

  printTestResults() {
    console.log('\n📊 Test Results Summary:');
    console.log('========================');
    
    const passed = this.testResults.filter(r => r.passed).length;
    const total = this.testResults.length;
    const failed = total - passed;
    
    console.log(`Total Tests: ${total}`);
    console.log(`Passed: ${passed} ✅`);
    console.log(`Failed: ${failed} ❌`);
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);
    
    if (failed > 0) {
      console.log('\n❌ Failed Tests:');
      this.testResults
        .filter(r => !r.passed)
        .forEach(r => console.log(`  - ${r.test}: ${r.message}`));
    }
    
    // Save test results
    this.saveTestResults();
    
    if (failed === 0) {
      console.log('\n🎉 All tests passed! Chat Learning System is ready to use.');
    } else {
      console.log('\n⚠️ Some tests failed. Please check the failed tests above.');
    }
  }

  async saveTestResults() {
    try {
      const resultsPath = path.join(__dirname, 'data', 'test-results.json');
      await fs.writeFile(resultsPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        results: this.testResults,
        summary: {
          total: this.testResults.length,
          passed: this.testResults.filter(r => r.passed).length,
          failed: this.testResults.filter(r => !r.passed).length
        }
      }, null, 2));
      
      console.log('📁 Test results saved to data/test-results.json');
    } catch (error) {
      console.error('Error saving test results:', error);
    }
  }

  async cleanup() {
    try {
      await this.system.stop();
      await this.integration.stop();
      console.log('🧹 Cleanup completed');
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  const tester = new ChatLearningSystemTest();
  
  tester.runAllTests()
    .then(() => {
      return tester.cleanup();
    })
    .then(() => {
      console.log('\n🏁 Test suite completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Test suite failed:', error);
      process.exit(1);
    });
}

module.exports = ChatLearningSystemTest;
