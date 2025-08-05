#!/usr/bin/env node

const MCPClientIntegration = require('../mcp-client-integration.js');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class MCPIntegrationOrchestrator {
  constructor() {
    this.mcpClient = new MCPClientIntegration();
    this.automationStatus = {
      mcp: 'inactive',
      existing: 'active',
      integration: 'pending'
    };
  }

  async initialize() {
    console.log('🚀 Initializing MCP Integration Orchestrator...');
    
    try {
      // Connect to MCP server
      const connected = await this.mcpClient.connect();
      if (!connected) {
        throw new Error('Failed to connect to MCP server');
      }

      this.automationStatus.mcp = 'active';
      console.log('✅ MCP Integration initialized successfully');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize MCP integration:', error.message);
      return false;
    }
  }

  async shutdown() {
    console.log('🔄 Shutting down MCP Integration...');
    await this.mcpClient.disconnect();
    this.automationStatus.mcp = 'inactive';
    console.log('✅ MCP Integration shutdown complete');
  }

  async getStatus() {
    return {
      ...this.automationStatus,
      timestamp: new Date().toISOString(),
      mcpConnected: this.mcpClient.isConnected
    };
  }

  async enhanceExistingAutomation() {
    console.log('🔧 Enhancing existing automation with MCP capabilities...');
    
    try {
      // Analyze current automation system
      const projectAnalysis = await this.mcpClient.analyzeProject();
      const automationReport = await this.mcpClient.generateAutomationReport();
      
      // Identify enhancement opportunities
      const enhancements = await this.identifyEnhancements(projectAnalysis, automationReport);
      
      // Apply enhancements
      await this.applyEnhancements(enhancements);
      
      console.log('✅ Existing automation enhanced with MCP capabilities');
      return enhancements;
    } catch (error) {
      console.error('❌ Failed to enhance existing automation:', error.message);
      throw error;
    }
  }

  async identifyEnhancements(projectAnalysis, automationReport) {
    const enhancements = {
      performance: [],
      security: [],
      monitoring: [],
      deployment: [],
      testing: []
    };

    // Analyze project structure for enhancement opportunities
    if (projectAnalysis.content && projectAnalysis.content[0]) {
      const analysis = JSON.parse(projectAnalysis.content[0].text);
      
      if (analysis.recommendations) {
        analysis.recommendations.forEach(rec => {
          if (rec.includes('performance') || rec.includes('optimization')) {
            enhancements.performance.push(rec);
          } else if (rec.includes('security') || rec.includes('audit')) {
            enhancements.security.push(rec);
          } else if (rec.includes('monitoring') || rec.includes('tracking')) {
            enhancements.monitoring.push(rec);
          }
        });
      }
    }

    // Analyze automation report for gaps
    if (automationReport.content && automationReport.content[0]) {
      const report = JSON.parse(automationReport.content[0].text);
      
      if (report.recommendations) {
        report.recommendations.forEach(rec => {
          if (rec.includes('deployment') || rec.includes('deploy')) {
            enhancements.deployment.push(rec);
          } else if (rec.includes('test') || rec.includes('testing')) {
            enhancements.testing.push(rec);
          }
        });
      }
    }

    return enhancements;
  }

  async applyEnhancements(enhancements) {
    console.log('🔧 Applying MCP enhancements...');
    
    const appliedEnhancements = [];

    // Apply performance enhancements
    if (enhancements.performance.length > 0) {
      console.log('⚡ Applying performance enhancements...');
      await this.mcpClient.performanceOptimization();
      appliedEnhancements.push('Performance optimization applied');
    }

    // Apply security enhancements
    if (enhancements.security.length > 0) {
      console.log('🔒 Applying security enhancements...');
      await this.mcpClient.securityAudit();
      appliedEnhancements.push('Security audit completed');
    }

    // Apply monitoring enhancements
    if (enhancements.monitoring.length > 0) {
      console.log('📊 Applying monitoring enhancements...');
      await this.mcpClient.monitorPerformance();
      await this.mcpClient.monitorErrors();
      appliedEnhancements.push('Monitoring enhanced');
    }

    // Apply deployment enhancements
    if (enhancements.deployment.length > 0) {
      console.log('🚀 Applying deployment enhancements...');
      await this.mcpClient.deployAutomation('development');
      appliedEnhancements.push('Deployment automation enhanced');
    }

    // Apply testing enhancements
    if (enhancements.testing.length > 0) {
      console.log('🧪 Applying testing enhancements...');
      await this.mcpClient.runTests();
      appliedEnhancements.push('Testing automation enhanced');
    }

    return appliedEnhancements;
  }

  async runAutomatedWorkflow() {
    console.log('🤖 Running automated MCP workflow...');
    
    try {
      const workflow = {
        timestamp: new Date().toISOString(),
        steps: []
      };

      // Step 1: Project Analysis
      workflow.steps.push({
        step: 'Project Analysis',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.analyzeProject();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      // Step 2: Performance Optimization
      workflow.steps.push({
        step: 'Performance Optimization',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.performanceOptimization();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      // Step 3: Security Audit
      workflow.steps.push({
        step: 'Security Audit',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.securityAudit();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      // Step 4: Dependency Update
      workflow.steps.push({
        step: 'Dependency Update',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.updateDependencies();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      // Step 5: Testing
      workflow.steps.push({
        step: 'Testing',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.runTests();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      // Step 6: Documentation
      workflow.steps.push({
        step: 'Documentation',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.generateDocumentation();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      // Step 7: Cleanup
      workflow.steps.push({
        step: 'Cleanup',
        status: 'running',
        timestamp: new Date().toISOString()
      });
      await this.mcpClient.cleanupProject();
      workflow.steps[workflow.steps.length - 1].status = 'completed';

      workflow.status = 'completed';
      console.log('✅ Automated MCP workflow completed successfully');
      
      return workflow;
    } catch (error) {
      console.error('❌ Automated MCP workflow failed:', error.message);
      throw error;
    }
  }

  async createIntegrationReport() {
    console.log('📋 Creating MCP integration report...');
    
    try {
      const status = await this.getStatus();
      const projectStructure = await this.mcpClient.getProjectStructure();
      const automationStatus = await this.mcpClient.getAutomationStatus();
      const performanceMetrics = await this.mcpClient.getPerformanceMetrics();
      const securityReport = await this.mcpClient.getSecurityReport();

      const report = {
        timestamp: new Date().toISOString(),
        integration: {
          status: status,
          mcpConnected: this.mcpClient.isConnected,
          automationStatus: automationStatus
        },
        project: {
          structure: projectStructure,
          performance: performanceMetrics,
          security: securityReport
        },
        recommendations: [
          'Continue monitoring MCP integration performance',
          'Regularly update MCP tools and capabilities',
          'Integrate MCP with CI/CD pipelines',
          'Set up automated MCP workflow scheduling'
        ]
      };

      // Save report to file
      await fs.writeFile(
        'automation/mcp-integration-report.json',
        JSON.stringify(report, null, 2)
      );

      console.log('✅ MCP integration report created');
      return report;
    } catch (error) {
      console.error('❌ Failed to create integration report:', error.message);
      throw error;
    }
  }

  async setupCronJobs() {
    console.log('⏰ Setting up MCP automation cron jobs...');
    
    try {
      const cronJobs = [
        {
          name: 'mcp-daily-workflow',
          schedule: '0 2 * * *', // Daily at 2 AM
          command: 'node automation/mcp-integration-orchestrator.js daily-workflow'
        },
        {
          name: 'mcp-weekly-audit',
          schedule: '0 3 * * 0', // Weekly on Sunday at 3 AM
          command: 'node automation/mcp-integration-orchestrator.js weekly-audit'
        },
        {
          name: 'mcp-performance-monitor',
          schedule: '*/30 * * * *', // Every 30 minutes
          command: 'node automation/mcp-integration-orchestrator.js performance-monitor'
        }
      ];

      // Create cron job scripts
      for (const job of cronJobs) {
        const scriptContent = `#!/bin/bash
# ${job.name}
# Schedule: ${job.schedule}
# Description: MCP automation job

cd "$(dirname "$0")/.."
node automation/mcp-integration-orchestrator.js ${job.name.replace('mcp-', '')}
`;

        await fs.writeFile(
          `automation/cron-jobs/${job.name}.sh`,
          scriptContent
        );
        await fs.chmod(`automation/cron-jobs/${job.name}.sh`, 0o755);
      }

      console.log('✅ MCP cron jobs configured');
      return cronJobs;
    } catch (error) {
      console.error('❌ Failed to setup cron jobs:', error.message);
      throw error;
    }
  }

  async runDailyWorkflow() {
    console.log('📅 Running daily MCP workflow...');
    await this.runAutomatedWorkflow();
    await this.createIntegrationReport();
  }

  async runWeeklyAudit() {
    console.log('🔍 Running weekly MCP audit...');
    await this.mcpClient.securityAudit();
    await this.mcpClient.performanceOptimization();
    await this.mcpClient.updateDependencies();
  }

  async runPerformanceMonitor() {
    console.log('📊 Running performance monitor...');
    await this.mcpClient.monitorPerformance();
    await this.mcpClient.monitorErrors();
  }
}

// CLI interface
async function main() {
  const orchestrator = new MCPIntegrationOrchestrator();
  
  try {
    const initialized = await orchestrator.initialize();
    if (!initialized) {
      console.error('Failed to initialize MCP integration');
      process.exit(1);
    }

    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
      case 'enhance':
        await orchestrator.enhanceExistingAutomation();
        break;
      case 'workflow':
        await orchestrator.runAutomatedWorkflow();
        break;
      case 'report':
        await orchestrator.createIntegrationReport();
        break;
      case 'setup-cron':
        await orchestrator.setupCronJobs();
        break;
      case 'daily-workflow':
        await orchestrator.runDailyWorkflow();
        break;
      case 'weekly-audit':
        await orchestrator.runWeeklyAudit();
        break;
      case 'performance-monitor':
        await orchestrator.runPerformanceMonitor();
        break;
      case 'status':
        const status = await orchestrator.getStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      default:
        console.log('Usage: node automation/mcp-integration-orchestrator.js <command>');
        console.log('Commands:');
        console.log('  enhance - Enhance existing automation with MCP');
        console.log('  workflow - Run automated MCP workflow');
        console.log('  report - Create integration report');
        console.log('  setup-cron - Setup cron jobs');
        console.log('  daily-workflow - Run daily workflow');
        console.log('  weekly-audit - Run weekly audit');
        console.log('  performance-monitor - Run performance monitor');
        console.log('  status - Get integration status');
        break;
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await orchestrator.shutdown();
  }
}

// Start the CLI if this file is run directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = MCPIntegrationOrchestrator; 