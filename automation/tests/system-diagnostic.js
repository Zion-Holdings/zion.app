#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

class SystemDiagnostic {
  constructor() {
    this.results = {
      environment: {},
      dependencies: {},
      connections: {},
      files: {},
      overall: 'unknown'
    };
  }

  async run() {
    console.log('🔧 Running System Diagnostic...\n');
    
    try {
      await this.checkEnvironment();
      await this.checkDependencies();
      await this.checkFiles();
      await this.checkConnections();
      
      this.calculateOverallStatus();
      this.printResults();
      
      return this.results;
    } catch (error) {
      console.error('❌ Diagnostic failed:', error);
      this.results.overall = 'failed';
      return this.results;
    }
  }

  async checkEnvironment() {
    console.log('🌍 Checking Environment Variables...');
    
    const requiredVars = [
      'SLACK_BOT_TOKEN',
      'SLACK_WEBHOOK_URL',
      'SLACK_CHANNEL'
    ];
    
    const optionalVars = [
      'CURSOR_API_KEY',
      'OPTIMIZATION_THRESHOLD',
      'PERFORMANCE_CHECK_INTERVAL'
    ];
    
    for (const varName of requiredVars) {
      const value = process.env[varName];
      this.results.environment[varName] = {
        status: value ? 'configured' : 'missing',
        required: true,
        value: value ? `${value.substring(0, 10)}...` : undefined
      };
    }
    
    for (const varName of optionalVars) {
      const value = process.env[varName];
      this.results.environment[varName] = {
        status: value ? 'configured' : 'default',
        required: false,
        value: value ? `${value.substring(0, 10)}...` : undefined
      };
    }
    
    console.log('✅ Environment check complete\n');
  }

  async checkDependencies() {
    console.log('📦 Checking Dependencies...');
    
    const dependencies = [
      '@slack/bolt',
      '@slack/web-api',
      'axios',
      'express',
      'dotenv'
    ];
    
    for (const dep of dependencies) {
      try {
        require.resolve(dep);
        this.results.dependencies[dep] = { status: 'installed' };
      } catch (_error) {
        this.results.dependencies[dep] = { 
          status: 'missing',
          error: 'Module not found' 
        };
      }
    }
    
    console.log('✅ Dependencies check complete\n');
  }

  async checkFiles() {
    console.log('📁 Checking Required Files...');
    
    const requiredFiles = [
      'automation/index.js',
      'automation/slack/slack-bot.js',
      'automation/performance/monitor.js',
      '.cursor/rules/optimization/performance-optimization-agent.mdc',
      '.cursor/rules/automation/slack-cursor-integration-agent.mdc'
    ];
    
    const optionalFiles = [
      '.env',
      'automation/.env.example',
      'automation/package.json'
    ];
    
    for (const file of requiredFiles) {
      try {
        await fs.access(file);
        this.results.files[file] = { status: 'exists', required: true };
      } catch (_error) {
        this.results.files[file] = { 
          status: 'missing', 
          required: true,
          error: 'File not found' 
        };
      }
    }
    
    for (const file of optionalFiles) {
      try {
        await fs.access(file);
        this.results.files[file] = { status: 'exists', required: false };
      } catch (_error) {
        this.results.files[file] = { 
          status: 'missing', 
          required: false 
        };
      }
    }
    
    console.log('✅ Files check complete\n');
  }

  async checkConnections() {
    console.log('🔗 Checking Connections...');
    
    // Test Slack webhook
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await this.testSlackWebhook();
        this.results.connections.slack_webhook = { status: 'connected' };
      } catch (error) {
        this.results.connections.slack_webhook = { 
          status: 'failed',
          error: error.message 
        };
      }
    } else {
      this.results.connections.slack_webhook = { 
        status: 'not_configured' 
      };
    }
    
    // Test Cursor API (if configured)
    if (process.env.CURSOR_API_KEY) {
      try {
        await this.testCursorAPI();
        this.results.connections.cursor_api = { status: 'connected' };
      } catch (error) {
        this.results.connections.cursor_api = { 
          status: 'failed',
          error: error.message 
        };
      }
    } else {
      this.results.connections.cursor_api = { 
        status: 'not_configured' 
      };
    }
    
    // Test local automation server
    try {
      await this.testLocalServer();
      this.results.connections.local_server = { status: 'connected' };
    } catch (error) {
      this.results.connections.local_server = { 
        status: 'not_running',
        error: error.message 
      };
    }
    
    console.log('✅ Connections check complete\n');
  }

  async testSlackWebhook() {
    const payload = {
      text: '🔧 System diagnostic test - please ignore',
      username: 'System Diagnostic',
      icon_emoji: ':gear:'
    };
    
    await axios.post(process.env.SLACK_WEBHOOK_URL, payload, {
      timeout: 5000
    });
  }

  async testCursorAPI() {
    // This would test the actual Cursor API endpoint
    // For now, just validate the format
    if (!process.env.CURSOR_API_KEY.startsWith('cursor_')) {
      throw new Error('Invalid API key format');
    }
  }

  async testLocalServer() {
    try {
      await axios.get('http://localhost:3001/health', {
        timeout: 3000
      });
    } catch (error) {
      throw new Error('Automation server not running');
    }
  }

  calculateOverallStatus() {
    let score = 100;
    
    // Check required environment variables
    for (const [key, config] of Object.entries(this.results.environment)) {
      if (config.required && config.status === 'missing') {
        score -= 20;
      }
    }
    
    // Check required files
    for (const [key, config] of Object.entries(this.results.files)) {
      if (config.required && config.status === 'missing') {
        score -= 15;
      }
    }
    
    // Check dependencies
    for (const [key, config] of Object.entries(this.results.dependencies)) {
      if (config.status === 'missing') {
        score -= 10;
      }
    }
    
    // Check connections
    for (const [key, config] of Object.entries(this.results.connections)) {
      if (config.status === 'failed') {
        score -= 5;
      }
    }
    
    if (score >= 90) {
      this.results.overall = 'excellent';
    } else if (score >= 70) {
      this.results.overall = 'good';
    } else if (score >= 50) {
      this.results.overall = 'fair';
    } else {
      this.results.overall = 'poor';
    }
    
    this.results.score = score;
  }

  printResults() {
    console.log('📊 Diagnostic Results');
    console.log('==========================================\n');
    
    // Overall status
    const statusEmoji = {
      excellent: '🟢',
      good: '🟡',
      fair: '🟠',
      poor: '🔴',
      failed: '❌'
    };
    
    console.log(`Overall Status: ${statusEmoji[this.results.overall]} ${this.results.overall.toUpperCase()} (${this.results.score}/100)`);
    console.log('');
    
    // Environment Variables
    console.log('🌍 Environment Variables:');
    for (const [key, config] of Object.entries(this.results.environment)) {
      const status = config.status === 'configured' ? '✅' : 
                    config.status === 'missing' ? '❌' : '⚠️';
      const required = config.required ? '(required)' : '(optional)';
      console.log(`  ${status} ${key} ${required}: ${config.status}`);
    }
    console.log('');
    
    // Dependencies
    console.log('📦 Dependencies:');
    for (const [key, config] of Object.entries(this.results.dependencies)) {
      const status = config.status === 'installed' ? '✅' : '❌';
      console.log(`  ${status} ${key}: ${config.status}`);
    }
    console.log('');
    
    // Files
    console.log('📁 Required Files:');
    for (const [key, config] of Object.entries(this.results.files)) {
      if (config.required) {
        const status = config.status === 'exists' ? '✅' : '❌';
        console.log(`  ${status} ${key}: ${config.status}`);
      }
    }
    console.log('');
    
    // Connections
    console.log('🔗 Connections:');
    for (const [key, config] of Object.entries(this.results.connections)) {
      const status = config.status === 'connected' ? '✅' : 
                    config.status === 'not_configured' ? '⚠️' : '❌';
      console.log(`  ${status} ${key}: ${config.status}`);
    }
    console.log('');
    
    // Recommendations
    this.printRecommendations();
  }

  printRecommendations() {
    const issues = [];
    
    // Check for missing required environment variables
    for (const [key, config] of Object.entries(this.results.environment)) {
      if (config.required && config.status === 'missing') {
        issues.push(`Configure ${key} in your .env file`);
      }
    }
    
    // Check for missing dependencies
    for (const [key, config] of Object.entries(this.results.dependencies)) {
      if (config.status === 'missing') {
        issues.push(`Install missing dependency: npm install ${key}`);
      }
    }
    
    // Check for missing files
    for (const [key, config] of Object.entries(this.results.files)) {
      if (config.required && config.status === 'missing') {
        issues.push(`Create missing file: ${key}`);
      }
    }
    
    if (issues.length > 0) {
      console.log('🛠️ Recommendations:');
      issues.forEach((issue, index) => {
        console.log(`  ${index + 1}. ${issue}`);
      });
      console.log('');
    }
    
    console.log('🚀 Next Steps:');
    if (this.results.overall === 'excellent') {
      console.log('  • System is ready! Start with: npm run automation:start');
    } else if (this.results.overall === 'good') {
      console.log('  • Address minor issues above, then start the system');
    } else {
      console.log('  • Fix critical issues above before starting');
      console.log('  • Run setup script: ./automation/scripts/setup.sh');
      console.log('  • Configure environment variables in .env file');
    }
    
    console.log('  • View documentation: automation/README.md');
    console.log('  • Test connections: npm run automation:test-slack');
  }

  async saveResults() {
    const reportPath = path.join(process.cwd(), 'logs', 'diagnostic-report.json');
    await fs.writeFile(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📄 Diagnostic report saved: ${reportPath}`);
  }
}

// Run diagnostic if called directly
if (require.main === module) {
  const diagnostic = new SystemDiagnostic();
  diagnostic.run()
    .then(async (results) => {
      await diagnostic.saveResults();
      process.exit(results.overall === 'failed' ? 1 : 0);
    })
    .catch(error => {
      console.error('❌ Diagnostic failed:', error);
      process.exit(1);
    });
}

module.exports = SystemDiagnostic;