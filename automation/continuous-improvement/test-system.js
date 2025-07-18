#!/usr/bin/env node

/**
 * Zion App - Continuous Improvement System Test
 * 
 * Tests the system components without requiring real API keys
 */
;
const fs = require('fs');'const path = require('path');'const winston = require('winston');'
// Configure logging;
const logger = winston.createLogger({
  level: 'info','  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'test-system' },'  transports: [
    new winston.transports.File({ filename: 'logs/test-error.log', level: 'error' }),'    new winston.transports.File({ filename: 'logs/test-combined.log' }),'    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

class TestSystem {
  constructor() {
    this.testResults = {
      passed: 0,
      failed: 0,
      total: 0
    };
  }

  /**
   * Run all tests
   */
  async runAllTests() {
    console.log('🧪 Running Zion App Continuous Improvement System Tests');'    console.log('========================================================');'    console.log('');'
    try {
      await this.testFileStructure();
      await this.testDependencies();
      await this.testConfiguration();
      await this.testMonitoring();
      await this.testImprovementEngine();
      await this.testCursorIntegration();
      await this.testSafetyFeatures();
      await this.testLogging();
      
      this.displayResults();
    } catch (error) {
      logger.error('Test suite failed:', error);'      process.exit(1);
    }
  }

  /**
   * Test file structure
   */
  async testFileStructure() {
    console.log('📁 Testing file structure...');'    
    const requiredFiles = [
      'index.js','      'monitor.js','      'improve.js','      'cursor-integration.js','      'start.js','      'package.json','      'README.md','      '.env''    ];

    const requiredDirs = [
      'logs','      'backups','      'scripts''    ];

    for (const file of requiredFiles) {
      if (fs.existsSync(file)) {
        this.pass(`File exists: ${file}`);
      } else {
        this.fail(`File missing: ${file}`);
      }
    }

    for (const dir of requiredDirs) {
      if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        this.pass(`Directory exists: ${dir}`);
      } else {
        this.fail(`Directory missing: ${dir}`);
      }
    }
  }

  /**
   * Test dependencies
   */
  async testDependencies() {
    console.log('📦 Testing dependencies...');'    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));'      
      // Check required dependencies
      const requiredDeps = [
        'axios','        'winston','        'node-cron','        'dotenv''      ];

      for (const dep of requiredDeps) {
        if (packageJson.dependencies && packageJson.dependencies[dep]) {
          this.pass(`Dependency found: ${dep}`);
        } else {
          this.fail(`Dependency missing: ${dep}`);
        }
      }

      // Check scripts
      const requiredScripts = ['start', 'test', 'status'];'      for (const script of requiredScripts) {
        if (packageJson.scripts && packageJson.scripts[script]) {
          this.pass(`Script found: ${script}`);
        } else {
          this.fail(`Script missing: ${script}`);
        }
      }
    } catch (error) {
      this.fail(`Error reading package.json: ${error.message}`);
    }
  }

  /**
   * Test configuration
   */
  async testConfiguration() {
    console.log('⚙️  Testing configuration...');'    
    try {
      const envContent = fs.readFileSync('.env', 'utf8');'      
      // Check for required environment variables
      const requiredVars = ['CURSOR_API_KEY', 'CURSOR_WORKSPACE_ID'];'      for (const varName of requiredVars) {
        if (envContent.includes(varName)) {
          this.pass(`Environment variable defined: ${varName}`);
        } else {
          this.fail(`Environment variable missing: ${varName}`);
        }
      }

      // Check for placeholder values
      if (envContent.includes('your_cursor_api_key_here')) {'        this.warn('API keys are using placeholder values (expected for testing)');'      }
    } catch (error) {
      this.fail(`Error reading .env file: ${error.message}`);
    }
  }

  /**
   * Test monitoring system
   */
  async testMonitoring() {
    console.log('🔍 Testing monitoring system...');'    
    try {
      // Test monitor module loading
      const Monitor = require('./monitor');'      const monitor = new Monitor();
      
      if (monitor && typeof monitor.start === 'function') {'        this.pass('Monitor module loads successfully');'      } else {
        this.fail('Monitor module failed to load');'      }

      // Test metrics collection
      const metrics = monitor.getMetrics();
      if (metrics && typeof metrics === 'object') {'        this.pass('Metrics collection works');'      } else {
        this.fail('Metrics collection failed');'      }

      // Test alerts
      const alerts = monitor.getAlerts();
      if (Array.isArray(alerts)) {
        this.pass('Alert system works');'      } else {
        this.fail('Alert system failed');'      }
    } catch (error) {
      this.fail(`Monitor test failed: ${error.message}`);
    }
  }

  /**
   * Test improvement engine
   */
  async testImprovementEngine() {
    console.log('🔧 Testing improvement engine...');'    
    try {
      // Test improver module loading
      const Improver = require('./improve');'      const improver = new Improver();
      
      if (improver && typeof improver.processImprovements === 'function') {'        this.pass('Improver module loads successfully');'      } else {
        this.fail('Improver module failed to load');'      }

      // Test stats collection
      const stats = improver.getStats();
      if (stats && typeof stats === 'object') {'        this.pass('Stats collection works');'      } else {
        this.fail('Stats collection failed');'      }

      // Test suggestion validation
      const testSuggestion = {
        type: 'code_change','        description: 'Test improvement','        changes: [
          {
            action: 'add','            file: 'test-file.js','            content: 'console.log("test");''          }
        ]
      };

      if (improver.validateSuggestion) {
        const isValid = improver.validateSuggestion(testSuggestion);
        if (isValid) {
          this.pass('Suggestion validation works');'        } else {
          this.fail('Suggestion validation failed');'        }
      }
    } catch (error) {
      this.fail(`Improver test failed: ${error.message}`);
    }
  }

  /**
   * Test Cursor integration
   */
  async testCursorIntegration() {
    console.log('🤖 Testing Cursor integration...');'    
    try {
      // Test cursor integration module loading
      const CursorIntegration = require('./cursor-integration');'      const cursor = new CursorIntegration();
      
      if (cursor && typeof cursor.generateSuggestions === 'function') {'        this.pass('Cursor integration module loads successfully');'      } else {
        this.fail('Cursor integration module failed to load');'      }

      // Test prompt building
      const testData = {
        type: 'codeQuality','        severity: 'medium','        data: { lintErrors: 5 }
      };

      const prompt = cursor.buildPrompt(testData);
      if (prompt && prompt.includes('codeQuality')) {'        this.pass('Prompt building works');'      } else {
        this.fail('Prompt building failed');'      }

      // Test response parsing (with mock data)
      const mockResponse = {
        choices: [{
          message: {
            content: JSON.stringify({
              improvements: [{
                type: 'code_change','                description: 'Test improvement','                changes: [{
                  action: 'add','                  file: 'test-file.js','                  content: 'console.log("test");''                }]
              }]
            })
          }
        }]
      };

      const suggestions = cursor.parseResponse(mockResponse);
      if (Array.isArray(suggestions) && suggestions.length > 0) {
        this.pass('Response parsing works');'      } else {
        this.fail('Response parsing failed');'      }
    } catch (error) {
      this.fail(`Cursor integration test failed: ${error.message}`);
    }
  }

  /**
   * Test safety features
   */
  async testSafetyFeatures() {
    console.log('🔒 Testing safety features...');'    
    try {
      // Test backup creation
      const testFile = 'test-backup-file.txt';'      const testContent = 'test content';'      
      fs.writeFileSync(testFile, testContent);
      
      const Improver = require('./improve');'      const improver = new Improver();
      
      if (improver.createBackup) {
        const backupPath = await improver.createBackup({
          type: 'test','          changes: [{ file: testFile }]
        });
        
        if (fs.existsSync(backupPath)) {
          this.pass('Backup creation works');'          
          // Cleanup
          fs.rmSync(backupPath, { recursive: true, force: true });
        } else {
          this.fail('Backup creation failed');'        }
      }
      
      // Cleanup test file
      if (fs.existsSync(testFile)) {
        fs.unlinkSync(testFile);
      }
    } catch (error) {
      this.fail(`Safety features test failed: ${error.message}`);
    }
  }

  /**
   * Test logging
   */
  async testLogging() {
    console.log('📝 Testing logging system...');'    
    try {
      // Test log directory creation
      if (!fs.existsSync('logs')) {'        fs.mkdirSync('logs', { recursive: true });'      }

      // Test log file writing
      logger.info('Test log message', { test: true });'      
      // Check for any log files created
      const logFiles = fs.readdirSync('logs');'      const hasLogFiles = logFiles.some(file => file.includes('.log'));'      
      if (hasLogFiles) {
        this.pass('Logging system works');'      } else {
        this.fail('Logging system failed');'      }
    } catch (error) {
      this.fail(`Logging test failed: ${error.message}`);
    }
  }

  /**
   * Record a passing test
   */
  pass(message) {
    this.testResults.passed++;
    this.testResults.total++;
    console.log(`  ✅ ${message}`);
  }

  /**
   * Record a failing test
   */
  fail(message) {
    this.testResults.failed++;
    this.testResults.total++;
    console.log(`  ❌ ${message}`);
  }

  /**
   * Record a warning
   */
  warn(message) {
    console.log(`  ⚠️  ${message}`);
  }

  /**
   * Display test results
   */
  displayResults() {
    console.log('');'    console.log('📊 Test Results Summary');'    console.log('=======================');'    console.log(`Total Tests: ${this.testResults.total}`);
    console.log(`Passed: ${this.testResults.passed}`);
    console.log(`Failed: ${this.testResults.failed}`);
    console.log(`Success Rate: ${((this.testResults.passed / this.testResults.total) * 100).toFixed(1)}%`);
    console.log('');'
    if (this.testResults.failed === 0) {
      console.log('🎉 All tests passed! The system is ready to use.');'      console.log('');'      console.log('Next steps:');'      console.log('1. Configure your Cursor AI API keys in .env');'      console.log('2. Start the system: npm start');'      console.log('3. Monitor status: npm run status');'    } else {
      console.log('⚠️  Some tests failed. Please fix the issues before using the system.');'      process.exit(1);
    }
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  const testSystem = new TestSystem();
  testSystem.runAllTests().catch(error => {
    console.error('Test suite failed:', error);'    process.exit(1);
  });
}

module.exports = TestSystem; 