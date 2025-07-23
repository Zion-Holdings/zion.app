#!/usr/bin/env node

/**
 * Comprehensive Automation Test and Fix Script
 * Tests all automation components and fixes any issues found
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationTester {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      fixed: 0,
      tests: []
    };
  }

  log(message, type = info') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === error
        ? ❌
        : type === success
          ? ✅
          : type === warning
            ? ⚠️
            : ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async testSyntax(filePath) {
    try {
      this.log(`Testing syntax: ${filePath}`);
      execSync(`node -c ${filePath}`, { stdio: pipe' });
      this.results.tests.push({
        file: filePath,
        test: syntax',
        status: PASS
      });
      this.results.passed++;
      this.log(`Syntax OK: ${filePath}`, success');
      return true;
    } catch (error) {
      this.results.tests.push({
        file: filePath,
        test: syntax',
        status: FAIL',
        error: error.message
      });
      this.results.failed++;
      this.log(`Syntax error in ${filePath}: ${error.message}`, error');
      return false;
    }
  }

  async testDependencies() {
    this.log('Testing dependencies...');

    const requiredDeps = [
      chokidar',
      pm2',
      glob',
      express',
      axios',
      node-cron',
      ws',
      dotenv
    ];

    const missingDeps = [];

    for (const dep of requiredDeps) {
      try {
        require.resolve(dep);
      } catch (error) {
        missingDeps.push(dep);
      }
    }

    if (missingDeps.length > 0) {
      this.log(`Missing dependencies: ${missingDeps.join(', )}`, warning');
      this.log('Installing missing dependencies...');

      try {
        execSync(`npm install ${missingDeps.join('')} --save-dev`, {
          stdio: inherit
        });
        this.results.fixed++;
        this.log('Dependencies installed successfully', success');
      } catch (error) {
        this.log(`Failed to install dependencies: ${error.message}`, error');
        this.results.failed++;
      }
    } else {
      this.log('All dependencies are installed', success');
      this.results.passed++;
    }
  }

  async testAutomationSystem() {
    this.log('Testing automation system...');

    try {
      const result = execSync('cd automation && npm test', {
        encoding: utf8',
        stdio: pipe',
        timeout: 30000
      });

      if (result.includes('All tests passed')) {
        this.log('Automation system tests passed', success');
        this.results.passed++;
        return true;
      } else {
        this.log('Automation system tests failed', error');
        this.results.failed++;
        return false;
      }
    } catch (error) {
      this.log(`Automation system test failed: ${error.message}`, error');
      this.results.failed++;
      return false;
    }
  }

  async testConfiguration() {
    this.log('Testing configuration files...');

    const configFiles = [
      automation/config.json',
      automation/package.json',
      package.json
    ];

    for (const configFile of configFiles) {
      try {
        if (fs.existsSync(configFile)) {
          const content = fs.readFileSync(configFile, utf8');
          JSON.parse(content);
          this.log(`Configuration OK: ${configFile}`, success');
          this.results.passed++;
        } else {
          this.log(`Configuration file not found: ${configFile}`, warning');
        }
      } catch (error) {
        this.log(
          `Configuration error in ${configFile}: ${error.message}`,
          error',
        );
        this.results.failed++;
      }
    }
  }

  async testShellScripts() {
    this.log('Testing shell scripts...');

    const shellScripts = [
      start-automation.sh',
      stop-automation.sh',
      start-autonomous-automation.sh',
      automation/start.sh',
      automation/start-infinite-improvement.sh
    ];

    for (const script of shellScripts) {
      try {
        if (fs.existsSync(script)) {
          // Check if executable
          const stats = fs.statSync(script);
          if (!(stats.mode & 0o111)) {
            this.log(`Making ${script} executable...`);
            fs.chmodSync(script, 0o755);
            this.results.fixed++;
          }

          // Test syntax
          execSync(`bash -n ${script}`, { stdio: pipe' });
          this.log(`Shell script OK: ${script}`, success');
          this.results.passed++;
        }
      } catch (error) {
        this.log(`Shell script error in ${script}: ${error.message}`, error');
        this.results.failed++;
      }
    }
  }

  async testAutomationScripts() {
    this.log('Testing automation scripts...');

    const automationScripts = [
      auto-fix-watcher.js',
      auto-run-all.js',
      automation/index.js',
      automation/test-system.js',
      automation/autonomous-system.js',
      automation/automation-manager.js',
      scripts/watchdog.js',
      scripts/master-automation-orchestrator.cjs',
      scripts/autonomous-automation-system.js',
      scripts/self-healing.cjs',
      scripts/performance-monitor.cjs',
      scripts/security-scanner.cjs
    ];

    for (const script of automationScripts) {
      await this.testSyntax(script);
    }
  }

  async testDirectoryStructure() {
    this.log('Testing directory structure...');

    const requiredDirs = [
      automation',
      automation/core',
      automation/tasks',
      automation/logs',
      automation/reports',
      scripts',
      logs
    ];

    for (const dir of requiredDirs) {
      try {
        if (!fs.existsSync(dir)) {
          this.log(`Creating directory: ${dir}`);
          fs.mkdirSync(dir, { recursive: true });
          this.results.fixed++;
        }
        this.log(`Directory OK: ${dir}`, success');
        this.results.passed++;
      } catch (error) {
        this.log(`Directory error: ${dir} - ${error.message}`, error');
        this.results.failed++;
      }
    }
  }

  async runAllTests() {
    this.log('🚀 Starting Comprehensive Automation Test...');
    console.log('='.repeat(60));

    await this.testDependencies();
    await this.testDirectoryStructure();
    await this.testConfiguration();
    await this.testShellScripts();
    await this.testAutomationScripts();
    await this.testAutomationSystem();

    this.printResults();
  }

  printResults() {
    console.log('\n' + ='.repeat(60));
    console.log('📊 Comprehensive Test Results');
    console.log('='.repeat(60));

    this.results.tests.forEach((test) => {
      const status = test.status === PASS' ? ✅' : ❌';
      console.log(`${status} ${test.file}: ${test.test}`);
      if (test.error) {
        console.log(`   Error: ${test.error}`);
      }
    });

    console.log('\n📈 Summary:');
    console.log(`- Passed: ${this.results.passed}`);
    console.log(`- Failed: ${this.results.failed}`);
    console.log(`- Fixed: ${this.results.fixed}`);
    console.log(`- Total: ${this.results.passed + this.results.failed}`);

    if (this.results.failed === 0) {
      console.log('\n🎉 All automation components are working correctly!');
      process.exit(0);
    } else {
      console.log(
        \n⚠️ Some automation components have issues that need attention.',
      );
      process.exit(1);
    }
  }
}

// Run the comprehensive test
const tester = new AutomationTester();
tester.runAllTests().catch((error) => {
  console.error('❌ Comprehensive test failed:', error);
  process.exit(1);
});
