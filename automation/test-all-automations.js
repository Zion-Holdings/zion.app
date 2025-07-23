#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class ComprehensiveAutomationTester {
  constructor() {
    this.testResults = [];
    this.startTime = Date.now();
  }

  log(message, level = 'info') {
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
      await this.testCoreAutomationSystem();
      await this.testNetlifyAutomation();
      await this.testPerformanceMonitoring();
      await this.testContinuousImprovement();
      await this.testTaskAutomation();
      await this.testCursorAutomation();
      this.generateReport();
    } catch (error) {
      this.log(`Test suite failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  async testCoreAutomationSystem() {
    this.log('Testing Core Automation System...', 'info');
    
    const coreFiles = [
      'core/IntelligentAutomationOrchestrator.js',
      'core/AutonomousAutomationManager.js',
      'core/TaskScheduler.js',
      'core/NotificationManager.js',
      'core/AnomalyDetector.js',
      'core/ReportGenerator.js'
    ];

    for (const file of coreFiles) {
      const exists = await this.checkFileExists(file);
      this.addTestResult(
        `Core File: ${file}`,
        exists,
        exists ? 'File exists' : 'File missing',
        { file }
      );
    }

    try {
      const coreSystem = require('./core/IntelligentAutomationOrchestrator.js');
      this.addTestResult('Core System Import', true, 'Core system imported successfully');
    } catch (error) {
      this.addTestResult('Core System Import', false, `Import failed: ${error.message}`);
    }
  }

  async testNetlifyAutomation() {
    this.log('Testing Netlify Automation...', 'info');
    
    const netlifyFiles = [
      'netlify-monitor.js',
      'netlify-error-fixer.js',
      'netlify-build-automation.js'
    ];

    for (const file of netlifyFiles) {
      const exists = await this.checkFileExists(file);
      this.addTestResult(
        `Netlify File: ${file}`,
        exists,
        exists ? 'File exists' : 'File missing',
        { file }
      );
    }

    try {
      const netlifyMonitor = require('./netlify-monitor.js');
      this.addTestResult('Netlify Monitor Import', true, 'Netlify monitor imported successfully');
    } catch (error) {
      this.addTestResult('Netlify Monitor Import', false, `Import failed: ${error.message}`);
    }
  }

  async testPerformanceMonitoring() {
    this.log('Testing Performance Monitoring...', 'info');
    
    const perfFiles = [
      'performance/monitor.js',
      'performance/frontend-fix.js'
    ];

    for (const file of perfFiles) {
      const exists = await this.checkFileExists(file);
      this.addTestResult(
        `Performance File: ${file}`,
        exists,
        exists ? 'File exists' : 'File missing',
        { file }
      );
    }

    try {
      const perfMonitor = require('./performance/monitor.js');
      this.addTestResult('Performance Monitor Import', true, 'Performance monitor imported successfully');
    } catch (error) {
      this.addTestResult('Performance Monitor Import', false, `Import failed: ${error.message}`);
    }
  }

  async testContinuousImprovement() {
    this.log('Testing Continuous Improvement System...', 'info');
    
    const ciFiles = [
      'continuous-improvement/enhanced-automation.js',
      'continuous-improvement/monitor.js',
      'continuous-improvement/improve.js'
    ];

    for (const file of ciFiles) {
      const exists = await this.checkFileExists(file);
      this.addTestResult(
        `CI File: ${file}`,
        exists,
        exists ? 'File exists' : 'File missing',
        { file }
      );
    }

    try {
      const ciSystem = require('./continuous-improvement/enhanced-automation.js');
      this.addTestResult('CI System Import', true, 'CI system imported successfully');
    } catch (error) {
      this.addTestResult('CI System Import', false, `Import failed: ${error.message}`);
    }
  }

  async testTaskAutomation() {
    this.log('Testing Task Automation...', 'info');
    
    const taskFiles = [
      'tasks/DependencyUpdater.js'
    ];

    for (const file of taskFiles) {
      const exists = await this.checkFileExists(file);
      this.addTestResult(
        `Task File: ${file}`,
        exists,
        exists ? 'File exists' : 'File missing',
        { file }
      );
    }

    try {
      const taskSystem = require('./tasks/DependencyUpdater.js');
      this.addTestResult('Task System Import', true, 'Task system imported successfully');
    } catch (error) {
      this.addTestResult('Task System Import', false, `Import failed: ${error.message}`);
    }
  }

  async testCursorAutomation() {
    this.log('Testing Cursor Automation...', 'info');
    
    const cursorFiles = [
      'cursor-automated-communication.js',
      'cursor-automated-extension/background.js'
    ];

    for (const file of cursorFiles) {
      const exists = await this.checkFileExists(file);
      this.addTestResult(
        `Cursor File: ${file}`,
        exists,
        exists ? 'File exists' : 'File missing',
        { file }
      );
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
    
    const report = {
      timestamp: new Date().toISOString(),
      duration,
      summary: { total, passed, failed, successRate: (passed / total) * 100 },
      results: this.testResults
    };
    
    fs.writeFile('test-report.json', JSON.stringify(report, null, 2))
      .then(() => this.log('Detailed report saved to test-report.json', 'info'))
      .catch(err => this.log(`Failed to save report: ${err.message}`, 'error'));
  }
}

if (require.main === module) {
  const tester = new ComprehensiveAutomationTester();
  tester.runAllTests().catch(error => {
    console.error('Test suite failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveAutomationTester; 