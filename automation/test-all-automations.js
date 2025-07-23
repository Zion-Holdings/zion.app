#!/usr/bin/env node

/**
 * Comprehensive Automation System Test Suite
 * 
 * Tests all automation systems in the project:
 * - Core automation system
 * - Netlify automation
 * - Cursor chat automation
 * - Performance monitoring
 * - Continuous improvement system
 */

const fs = require('fs').promises;
const path = require('path');

class ComprehensiveAutomationTester {
  constructor() {
    this.testResults = [];
    this.startTime = Date.now();
  }

  log(message, level = info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  addTestResult(testName, passed, message, details = null) {
    this.testResults.push({
      testName,
      passed,
      message,
      details,
      timestamp: new Date().toISOString()
    });
  }

  async runAllTests() {
    console.log('🧪 Comprehensive Automation System Test Suite');
    console.log('='.repeat(60));
    console.log('Testing all automation systems in the project...\n');

    try {
      // Test 1: Core automation system
      await this.testCoreAutomationSystem();
      
      // Test 2: Netlify automation
      await this.testNetlifyAutomation();
      
      // Test 3: Performance monitoring
      await this.testPerformanceMonitoring();
      
      // Test 4: Continuous improvement system
      await this.testContinuousImprovement();
      
      // Test 5: Task automation
      await this.testTaskAutomation();
      
      // Test 6: Cursor automation
      await this.testCursorAutomation();
      
      // Generate final report
      this.generateReport();
      
    } catch (error) {
      this.log(`Test suite failed: ${error.message}`, error');
      process.exit(1);
    }
  }

  async testCoreAutomationSystem() {
    this.log('Testing Core Automation System...', info');
    
    try {
      // Test core files existence
      const coreFiles = [
        core/IntelligentAutomationOrchestrator.js',
        core/AutonomousAutomationManager.js',
        core/TaskScheduler.js',
        core/NotificationManager.js',
        core/AnomalyDetector.js',
        core/ReportGenerator.js
      ];

      for (const file of coreFiles) {
        const exists = await this.checkFileExists(file);
        this.addTestResult(
          `Core File: ${file}`,
          exists,
          exists ? File exists' : File missing',
          { file }
        );
      }

      // Test core system imports
      try {
        const coreSystem = require('./core/IntelligentAutomationOrchestrator.js');
        this.addTestResult('Core System Import', true, Core system imported successfully');
      } catch (error) {
        this.addTestResult('Core System Import', false, `Import failed: ${error.message}`);
      }

    } catch (error) {
      this.addTestResult('Core Automation System', false, `Test failed: ${error.message}`);
    }
  }

  async testNetlifyAutomation() {
    this.log('Testing Netlify Automation...', info');
    
    try {
      const netlifyFiles = [
        netlify-monitor.js',
        netlify-error-fixer.js',
        netlify-build-automation.js
      ];

      for (const file of netlifyFiles) {
        const exists = await this.checkFileExists(file);
        this.addTestResult(
          `Netlify File: ${file}`,
          exists,
          exists ? File exists' : File missing',
          { file }
        );
      }

      // Test Netlify system imports
      try {
        const netlifyMonitor = require('./netlify-monitor.js');
        this.addTestResult('Netlify Monitor Import', true, Netlify monitor imported successfully');
      } catch (error) {
        this.addTestResult('Netlify Monitor Import', false, `Import failed: ${error.message}`);
      }

    } catch (error) {
      this.addTestResult('Netlify Automation', false, `Test failed: ${error.message}`);
    }
  }

  async testPerformanceMonitoring() {
    this.log('Testing Performance Monitoring...', info');
    
    try {
      const perfFiles = [
        performance/monitor.js',
        performance/frontend-fix.js
      ];

      for (const file of perfFiles) {
        const exists = await this.checkFileExists(file);
        this.addTestResult(
          `Performance File: ${file}`,
          exists,
          exists ? File exists' : File missing',
          { file }
        );
      }

      // Test performance system imports
      try {
        const perfMonitor = require('./performance/monitor.js');
        this.addTestResult('Performance Monitor Import', true, Performance monitor imported successfully');
      } catch (error) {
        this.addTestResult('Performance Monitor Import', false, `Import failed: ${error.message}`);
      }

    } catch (error) {
      this.addTestResult('Performance Monitoring', false, `Test failed: ${error.message}`);
    }
  }

  async testContinuousImprovement() {
    this.log('Testing Continuous Improvement System...', info');
    
    try {
      const ciFiles = [
        continuous-improvement/enhanced-automation.js',
        continuous-improvement/monitor.js',
        continuous-improvement/improve.js
      ];

      for (const file of ciFiles) {
        const exists = await this.checkFileExists(file);
        this.addTestResult(
          `CI File: ${file}`,
          exists,
          exists ? File exists' : File missing',
          { file }
        );
      }

      // Test CI system imports
      try {
        const ciSystem = require('./continuous-improvement/enhanced-automation.js');
        this.addTestResult('CI System Import', true, CI system imported successfully');
      } catch (error) {
        this.addTestResult('CI System Import', false, `Import failed: ${error.message}`);
      }

    } catch (error) {
      this.addTestResult('Continuous Improvement', false, `Test failed: ${error.message}`);
    }
  }

  async testTaskAutomation() {
    this.log('Testing Task Automation...', info');
    
    try {
      const taskFiles = [
        tasks/DependencyUpdater.js
      ];

      for (const file of taskFiles) {
        const exists = await this.checkFileExists(file);
        this.addTestResult(
          `Task File: ${file}`,
          exists,
          exists ? File exists' : File missing',
          { file }
        );
      }

      // Test task system imports
      try {
        const taskSystem = require('./tasks/DependencyUpdater.js');
        this.addTestResult('Task System Import', true, Task system imported successfully');
      } catch (error) {
        this.addTestResult('Task System Import', false, `Import failed: ${error.message}`);
      }

    } catch (error) {
      this.addTestResult('Task Automation', false, `Test failed: ${error.message}`);
    }
  }

  async testCursorAutomation() {
    this.log('Testing Cursor Automation...', info');
    
    try {
      const cursorFiles = [
        cursor-automated-communication.js',
        cursor-automated-extension/background.js
      ];

      for (const file of cursorFiles) {
        const exists = await this.checkFileExists(file);
        this.addTestResult(
          `Cursor File: ${file}`,
          exists,
          exists ? File exists' : File missing',
          { file }
        );
      }

    } catch (error) {
      this.addTestResult('Cursor Automation', false, `Test failed: ${error.message}`);
    }
  }

  async checkFileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    console.log('\n📊 Test Results Summary');
    console.log('='.repeat(60));
    
    const passed = this.testResults.filter(r => r.passed).length;
    const failed = this.testResults.filter(r => !r.passed).length;
    const total = this.testResults.length;
    
    console.log(`Total Tests: ${total}`);
    console.log(`Passed: ${passed} ✅`);
    console.log(`Failed: ${failed} ❌`);
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);
    console.log(`Duration: ${duration}ms`);
    
    if (failed > 0) {
      console.log('\n❌ Failed Tests:');
      this.testResults
        .filter(r => !r.passed)
        .forEach(r => {
          console.log(`  - ${r.testName}: ${r.message}`);
        });
    }
    
    console.log('\n✅ Passed Tests:');
    this.testResults
      .filter(r => r.passed)
      .forEach(r => {
        console.log(`  - ${r.testName}: ${r.message}`);
      });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      duration,
      summary: { total, passed, failed, successRate: (passed / total) * 100 },
      results: this.testResults
    };
    
    fs.writeFile('test-report.json', JSON.stringify(report, null, 2))
      .then(() => this.log('Detailed report saved to test-report.json', info'))
      .catch(err => this.log(`Failed to save report: ${err.message}`, error'));
  }
}

// Run the test suite
if (require.main === module) {
  const tester = new ComprehensiveAutomationTester();
  tester.runAllTests().catch(error => {
    console.error('Test suite failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveAutomationTester; 