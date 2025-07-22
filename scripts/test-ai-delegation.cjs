#!/usr/bin/env node

/**
 * Zion App - AI Delegation Test Script
 *
 * Tests the AI-driven continuous improvement system
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
const axios = require('axios');

// Configuration
const CONFIG = {
  // Test endpoints
  ENDPOINTS: {
    AI_IMPROVEMENT: 'http://localhost:3006',
    CURSOR_DELEGATOR: 'http://localhost:3007',
    MULTI_COORDINATOR: 'http://localhost:3007',
  },

  // Test timeouts
  TIMEOUTS: {
    HEALTH_CHECK: 5000,
    TASK_SUBMISSION: 10000,
    TASK_COMPLETION: 30000,
  },

  // Test data
  TEST_TASKS: [
    {
      type: 'code_analysis',
      priority: 'medium',
      data: {
        files: ['src/components/Button.tsx'],
        focus: 'performance',
      },
    },
    {
      type: 'performance_optimization',
      priority: 'high',
      data: {
        target: 'bundle_size',
        threshold: 500,
      },
    },
    {
      type: 'security_audit',
      priority: 'high',
      data: {
        scope: 'authentication',
        depth: 'comprehensive',
      },
    },
  ],
}
class AIDelegationTest {
  constructor() {
    this.testResults = [];
    this.startTime = Date.now();
  }

  /**
   * Run all tests
   */
  async run() {
    console.log('🧪 Running AI Delegation System Tests...\n');

    try {
      // Test system setup
      await this.testSystemSetup();

      // Test service availability
      await this.testServiceAvailability();

      // Test AI integration
      await this.testAIIntegration();

      // Test task submission and processing
      await this.testTaskProcessing();

      // Test multi-computer coordination
      await this.testCoordination();

      // Test error handling
      await this.testErrorHandling();

      // Generate test report
      await this.generateTestReport();

      console.log('\n✅ All tests completed successfully!');
    } catch (error) {
      console.error('\n❌ Test failed:', error.message);
      await this.generateTestReport();
      process.exit(1);
    }
  }

  /**
   * Test system setup
   */
  async testSystemSetup() {
    console.log('🔍 Testing system setup...');

    // Check required files
    const requiredFiles = [
      'scripts/ai-continuous-improvement.cjs',
      'scripts/cursor-ai-delegator.cjs',
      'scripts/multi-computer-coordinator.cjs',
      'ai-delegation-config.json',
    ];

    for (const file of requiredFiles) {
      if (fs.existsSync(file)) {
        this.logTest('PASS', `Required file exists: ${file}`);
      } else {
        this.logTest('FAIL', `Required file missing: ${file}`);
        throw new Error(`Required file missing: ${file}`);
      }
    }

    // Check required directories
    const requiredDirs = ['ai-improvement-data', 'cursor-ai-data', 'logs'];

    for (const dir of requiredDirs) {
      if (fs.existsSync(dir)) {
        this.logTest('PASS', `Required directory exists: ${dir}`);
      } else {
        this.logTest('FAIL', `Required directory missing: ${dir}`);
        throw new Error(`Required directory missing: ${dir}`);
      }
    }

    // Check environment variables
    const requiredEnvVars = ['CURSOR_API_KEY', 'CURSOR_WORKSPACE_ID'];
    for (const envVar of requiredEnvVars) {
      if (process.env[envVar]) {
        this.logTest('PASS', `Environment variable set: ${envVar}`);
      } else {
        this.logTest('WARN', `Environment variable not set: ${envVar}`);
      }
    }

    console.log('✅ System setup tests completed\n');
  }

  /**
   * Test service availability
   */
  async testServiceAvailability() {
    console.log('🌐 Testing service availability...')
const services = [
      {
        name: 'AI Improvement System',
        url: `${CONFIG.ENDPOINTS.AI_IMPROVEMENT}/health`,
      },
      {
        name: 'Cursor Delegator',
        url: `${CONFIG.ENDPOINTS.CURSOR_DELEGATOR}/api/status`,
      },
      {
        name: 'Multi-Coordinator',
        url: `${CONFIG.ENDPOINTS.MULTI_COORDINATOR}/api/nodes/status`,
      },
    ];

    for (const service of services) {
      try {
        const response = await axios.get(service.url, {
          timeout: CONFIG.TIMEOUTS.HEALTH_CHECK,
        });

        if (response.status === 200) {
          this.logTest('PASS', `${service.name} is responding`);
        } else {
          this.logTest(
            'FAIL',
            `${service.name} returned status ${response.status}`,
          );
        }
      } catch (error) {
        this.logTest(
          'FAIL',
          `${service.name} is not available: ${error.message}`,
        );
      }
    }

    console.log('✅ Service availability tests completed\n');
  }

  /**
   * Test AI integration
   */
  async testAIIntegration() {
    console.log('🤖 Testing AI integration...');

    // Test Cursor API connection
    if (process.env.CURSOR_API_KEY) {
      try {
        const AIContinuousImprovementSystem = require('./ai-continuous-improvement.cjs')
const aiSystem = new AIContinuousImprovementSystem();

        // Test API call
        const testPrompt = 'Test connection'
const response = await aiSystem.callCursorAPI(testPrompt);

        if (response) {
          this.logTest('PASS', 'Cursor API connection successful');
        } else {
          this.logTest('FAIL', 'Cursor API returned empty response');
        }
      } catch (error) {
        this.logTest('FAIL', `Cursor API test failed: ${error.message}`);
      }
    } else {
      this.logTest('SKIP', 'Cursor API key not configured, skipping test');
    }

    // Test AI suggestion generation
    try {
      const CursorAIDelegator = require('./cursor-ai-delegator.cjs')
const delegator = new CursorAIDelegator();

      // Test prompt building
      const testTask = {
        type: 'code_analysis',
        data: { files: ['test.tsx'] },
      }
const prompt = delegator.buildTaskPrompt(testTask);

      if (prompt && prompt.includes('code_analysis')) {
        this.logTest('PASS', 'AI prompt building works correctly');
      } else {
        this.logTest('FAIL', 'AI prompt building failed');
      }
    } catch (error) {
      this.logTest('FAIL', `AI integration test failed: ${error.message}`);
    }

    console.log('✅ AI integration tests completed\n');
  }

  /**
   * Test task processing
   */
  async testTaskProcessing() {
    console.log('📋 Testing task processing...');

    // Test task submission
    try {
      const testTask = CONFIG.TEST_TASKS[0]
const response = await axios.post(
        `${CONFIG.ENDPOINTS.CURSOR_DELEGATOR}/api/tasks/submit`,
        testTask,
        {
          timeout: CONFIG.TIMEOUTS.TASK_SUBMISSION,
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (response.status === 200 && response.data.taskId) {
        this.logTest('PASS', 'Task submission successful')
const taskId = response.data.taskId;

        // Test task status checking
        await this.testTaskStatus(taskId);
      } else {
        this.logTest('FAIL', 'Task submission failed');
      }
    } catch (error) {
      this.logTest('FAIL', `Task processing test failed: ${error.message}`);
    }

    console.log('✅ Task processing tests completed\n');
  }

  /**
   * Test task status
   */
  async testTaskStatus(taskId) {
    try {
      const response = await axios.get(
        `${CONFIG.ENDPOINTS.CURSOR_DELEGATOR}/api/tasks/${taskId}/status`,
        {
          timeout: CONFIG.TIMEOUTS.TASK_COMPLETION,
        },
      );

      if (response.status === 200) {
        const task = response.data;

        if (task.id === taskId) {
          this.logTest('PASS', 'Task status retrieval successful');
        } else {
          this.logTest('FAIL', 'Task status returned wrong task ID');
        }
      } else {
        this.logTest('FAIL', 'Task status request failed');
      }
    } catch (error) {
      this.logTest('FAIL', `Task status test failed: ${error.message}`);
    }
  }

  /**
   * Test coordination
   */
  async testCoordination() {
    console.log('🔗 Testing multi-computer coordination...');

    try {
      const response = await axios.get(
        `${CONFIG.ENDPOINTS.MULTI_COORDINATOR}/api/nodes/status`,
        {
          timeout: CONFIG.TIMEOUTS.HEALTH_CHECK,
        },
      );

      if (response.status === 200) {
        const data = response.data;

        if (data.nodes && Array.isArray(data.nodes)) {
          this.logTest('PASS', 'Node coordination working');
          this.logTest('INFO', `Found ${data.nodes.length} nodes`);
        } else {
          this.logTest('FAIL', 'Node coordination data invalid');
        }
      } else {
        this.logTest('FAIL', 'Node coordination request failed');
      }
    } catch (error) {
      this.logTest('FAIL', `Coordination test failed: ${error.message}`);
    }

    // Test shared storage
    const storagePath = './ai-improvement-data';
    if (fs.existsSync(storagePath)) {
      const files = fs.readdirSync(storagePath);
      if (files.length > 0) {
        this.logTest('PASS', 'Shared storage is accessible');
      } else {
        this.logTest('WARN', 'Shared storage is empty');
      }
    } else {
      this.logTest('FAIL', 'Shared storage not found');
    }

    console.log('✅ Coordination tests completed\n');
  }

  /**
   * Test error handling
   */
  async testErrorHandling() {
    console.log('⚠️  Testing error handling...');

    // Test invalid task submission
    try {
      const invalidTask = {
        type: 'invalid_type',
        data: {},
      }
const response = await axios.post(
        `${CONFIG.ENDPOINTS.CURSOR_DELEGATOR}/api/tasks/submit`,
        invalidTask,
        {
          timeout: CONFIG.TIMEOUTS.TASK_SUBMISSION,
          headers: { 'Content-Type': 'application/json' },
        },
      );

      // Should handle invalid task gracefully
      if (response.status === 200) {
        this.logTest('PASS', 'Invalid task handled gracefully');
      } else {
        this.logTest('WARN', 'Invalid task returned error status');
      }
    } catch (error) {
      this.logTest('WARN', 'Invalid task caused expected error');
    }

    // Test non-existent endpoint
    try {
      await axios.get(`${CONFIG.ENDPOINTS.CURSOR_DELEGATOR}/api/nonexistent`, {
        timeout: CONFIG.TIMEOUTS.HEALTH_CHECK,
      });
      this.logTest('FAIL', 'Non-existent endpoint should return 404');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.logTest('PASS', 'Non-existent endpoint returns 404');
      } else {
        this.logTest('WARN', 'Non-existent endpoint error handling');
      }
    }

    console.log('✅ Error handling tests completed\n');
  }

  /**
   * Generate test report
   */
  async generateTestReport() {
    console.log('📊 Generating test report...')
const endTime = Date.now()
const duration = endTime - this.startTime
const report = {
      timestamp: new Date().toISOString(),
      duration: duration,
      summary: {
        total: this.testResults.length,
        passed: this.testResults.filter((r) => r.status === 'PASS').length,
        failed: this.testResults.filter((r) => r.status === 'FAIL').length,
        warnings: this.testResults.filter((r) => r.status === 'WARN').length,
        skipped: this.testResults.filter((r) => r.status === 'SKIP').length,
      },
      results: this.testResults,
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        memory: Math.round(require('os').totalmem() / (1024 * 1024 * 1024)),
      },
      configuration: {
        cursorApiKey: !!process.env.CURSOR_API_KEY,
        cursorWorkspaceId: !!process.env.CURSOR_WORKSPACE_ID,
        masterNode: process.env.MASTER_NODE === 'true',
        nodeId: process.env.NODE_ID || 'unknown',
      },
    }
const reportPath = path.join(process.cwd(), 'logs', 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Print summary
    console.log('\n📋 Test Summary:');
    console.log(`Total Tests: ${report.summary.total}`);
    console.log(`Passed: ${report.summary.passed}`);
    console.log(`Failed: ${report.summary.failed}`);
    console.log(`Warnings: ${report.summary.warnings}`);
    console.log(`Skipped: ${report.summary.skipped}`);
    console.log(`Duration: ${duration}ms`);

    if (report.summary.failed > 0) {
      console.log('\n❌ Failed Tests:');
      this.testResults
        .filter((r) => r.status === 'FAIL')
        .forEach((r) => console.log(`  - ${r.message}`));
    }

    if (report.summary.warnings > 0) {
      console.log('\n⚠️  Warnings:');
      this.testResults
        .filter((r) => r.status === 'WARN')
        .forEach((r) => console.log(`  - ${r.message}`));
    }

    this.logTest('INFO', `Test report saved to: logs/test-report.json`);
    console.log('✅ Test report completed\n');
  }

  /**
   * Log test result
   */
  logTest(status, message) {
    const result = {
      status,
      message,
      timestamp: new Date().toISOString(),
    };

    this.testResults.push(result)
const statusIcon = {
      PASS: '✅',
      FAIL: '❌',
      WARN: '⚠️',
      SKIP: '⏭️',
      INFO: 'ℹ️',
    };

    console.log(`${statusIcon[status] || '❓'} ${message}`);
  }
}

// CLI handling
if (require.main === module) {
  const test = new AIDelegationTest();
  test.run().catch((error) => {
    console.error('❌ Test execution failed:', error);
    process.exit(1);
  });
}

module.exports = AIDelegationTest;
