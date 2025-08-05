#!/usr/bin/env node

const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs').promises;

class MCPClientIntegration {
  constructor() {
    this.client = null;
    this.serverProcess = null;
    this.isConnected = false;
  }

  async connect() {
    try {
      // Start the MCP server process
      this.serverProcess = spawn('node', ['mcp-automation-system.js'], {
        stdio: ['pipe', 'pipe', 'pipe']
      });

      // Create transport for the client
      const transport = new StdioClientTransport(
        this.serverProcess.stdin,
        this.serverProcess.stdout
      );

      // Create and connect the client
      this.client = new Client({
        name: 'bolt-automation-client',
        version: '1.0.0',
      });

      await this.client.connect(transport);
      this.isConnected = true;
      
      console.log('✅ MCP Client connected successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to connect MCP client:', error.message);
      return false;
    }
  }

  async disconnect() {
    if (this.serverProcess) {
      this.serverProcess.kill();
      this.serverProcess = null;
    }
    this.isConnected = false;
    console.log('🔌 MCP Client disconnected');
  }

  async listTools() {
    if (!this.isConnected) {
      throw new Error('Client not connected');
    }

    try {
      const response = await this.client.listTools();
      return response.tools;
    } catch (error) {
      throw new Error(`Failed to list tools: ${error.message}`);
    }
  }

  async listResources() {
    if (!this.isConnected) {
      throw new Error('Client not connected');
    }

    try {
      const response = await this.client.listResources();
      return response.resources;
    } catch (error) {
      throw new Error(`Failed to list resources: ${error.message}`);
    }
  }

  async callTool(toolName, args = {}) {
    if (!this.isConnected) {
      throw new Error('Client not connected');
    }

    try {
      const response = await this.client.callTool({
        name: toolName,
        arguments: args
      });
      return response;
    } catch (error) {
      throw new Error(`Failed to call tool ${toolName}: ${error.message}`);
    }
  }

  async readResource(uri) {
    if (!this.isConnected) {
      throw new Error('Client not connected');
    }

    try {
      const response = await this.client.readResource({ uri });
      return response;
    } catch (error) {
      throw new Error(`Failed to read resource ${uri}: ${error.message}`);
    }
  }

  // High-level automation methods
  async analyzeProject() {
    console.log('🔍 Analyzing project structure...');
    const result = await this.callTool('analyze_project_structure');
    console.log('📊 Project analysis completed');
    return result;
  }

  async generateAutomationReport() {
    console.log('📋 Generating automation report...');
    const result = await this.callTool('generate_automation_report');
    console.log('📄 Automation report generated');
    return result;
  }

  async optimizeBuild() {
    console.log('⚡ Optimizing build process...');
    const result = await this.callTool('optimize_build_process');
    console.log('🚀 Build optimization completed');
    return result;
  }

  async monitorPerformance() {
    console.log('📈 Monitoring performance...');
    const result = await this.callTool('monitor_performance');
    console.log('📊 Performance monitoring completed');
    return result;
  }

  async deployAutomation(environment = 'development', components = []) {
    console.log(`🚀 Deploying automation to ${environment}...`);
    const result = await this.callTool('deploy_automation', {
      environment,
      components
    });
    console.log('✅ Automation deployment completed');
    return result;
  }

  async backupSystem() {
    console.log('💾 Creating system backup...');
    const result = await this.callTool('backup_system');
    console.log('✅ System backup completed');
    return result;
  }

  async restoreSystem(backupId) {
    console.log(`🔄 Restoring system from backup ${backupId}...`);
    const result = await this.callTool('restore_system', { backup_id: backupId });
    console.log('✅ System restoration completed');
    return result;
  }

  async updateDependencies() {
    console.log('📦 Updating dependencies...');
    const result = await this.callTool('update_dependencies');
    console.log('✅ Dependencies updated');
    return result;
  }

  async runTests() {
    console.log('🧪 Running tests...');
    const result = await this.callTool('run_tests');
    console.log('✅ Tests completed');
    return result;
  }

  async generateDocumentation() {
    console.log('📚 Generating documentation...');
    const result = await this.callTool('generate_documentation');
    console.log('✅ Documentation generated');
    return result;
  }

  async optimizeSEO() {
    console.log('🔍 Optimizing SEO...');
    const result = await this.callTool('optimize_seo');
    console.log('✅ SEO optimization completed');
    return result;
  }

  async monitorErrors() {
    console.log('🚨 Monitoring errors...');
    const result = await this.callTool('monitor_errors');
    console.log('✅ Error monitoring completed');
    return result;
  }

  async cleanupProject() {
    console.log('🧹 Cleaning up project...');
    const result = await this.callTool('cleanup_project');
    console.log('✅ Project cleanup completed');
    return result;
  }

  async securityAudit() {
    console.log('🔒 Performing security audit...');
    const result = await this.callTool('security_audit');
    console.log('✅ Security audit completed');
    return result;
  }

  async performanceOptimization() {
    console.log('⚡ Optimizing performance...');
    const result = await this.callTool('performance_optimization');
    console.log('✅ Performance optimization completed');
    return result;
  }

  // Batch operations
  async runFullAutomation() {
    console.log('🤖 Starting full automation workflow...');
    
    try {
      const results = {
        projectAnalysis: await this.analyzeProject(),
        automationReport: await this.generateAutomationReport(),
        buildOptimization: await this.optimizeBuild(),
        performanceMonitoring: await this.monitorPerformance(),
        dependencyUpdate: await this.updateDependencies(),
        securityAudit: await this.securityAudit(),
        performanceOptimization: await this.performanceOptimization(),
        cleanup: await this.cleanupProject()
      };

      console.log('✅ Full automation workflow completed');
      return results;
    } catch (error) {
      console.error('❌ Full automation workflow failed:', error.message);
      throw error;
    }
  }

  async runDeploymentWorkflow(environment = 'production') {
    console.log(`🚀 Starting deployment workflow for ${environment}...`);
    
    try {
      const results = {
        backup: await this.backupSystem(),
        tests: await this.runTests(),
        deployment: await this.deployAutomation(environment),
        monitoring: await this.monitorPerformance()
      };

      console.log('✅ Deployment workflow completed');
      return results;
    } catch (error) {
      console.error('❌ Deployment workflow failed:', error.message);
      throw error;
    }
  }

  // Utility methods
  async getProjectStructure() {
    return await this.readResource('file://project-structure');
  }

  async getAutomationStatus() {
    return await this.readResource('file://automation-status');
  }

  async getPerformanceMetrics() {
    return await this.readResource('file://performance-metrics');
  }

  async getErrorLogs() {
    return await this.readResource('file://error-logs');
  }

  async getSecurityReport() {
    return await this.readResource('file://security-report');
  }

  // Interactive mode
  async startInteractiveMode() {
    console.log('🎮 Starting MCP Interactive Mode');
    console.log('Available commands:');
    console.log('  analyze - Analyze project structure');
    console.log('  report - Generate automation report');
    console.log('  optimize - Optimize build process');
    console.log('  monitor - Monitor performance');
    console.log('  deploy - Deploy automation');
    console.log('  backup - Backup system');
    console.log('  restore <id> - Restore system');
    console.log('  update - Update dependencies');
    console.log('  test - Run tests');
    console.log('  docs - Generate documentation');
    console.log('  seo - Optimize SEO');
    console.log('  errors - Monitor errors');
    console.log('  cleanup - Cleanup project');
    console.log('  security - Security audit');
    console.log('  performance - Performance optimization');
    console.log('  full - Run full automation');
    console.log('  deploy-workflow - Run deployment workflow');
    console.log('  quit - Exit interactive mode');
    
    // This would be implemented with readline for interactive input
    console.log('Interactive mode ready (implement with readline for full functionality)');
  }
}

// CLI interface
async function main() {
  const client = new MCPClientIntegration();
  
  try {
    const connected = await client.connect();
    if (!connected) {
      console.error('Failed to connect to MCP server');
      process.exit(1);
    }

    // Parse command line arguments
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
      case 'analyze':
        await client.analyzeProject();
        break;
      case 'report':
        await client.generateAutomationReport();
        break;
      case 'optimize':
        await client.optimizeBuild();
        break;
      case 'monitor':
        await client.monitorPerformance();
        break;
      case 'deploy':
        const env = args[1] || 'development';
        await client.deployAutomation(env);
        break;
      case 'backup':
        await client.backupSystem();
        break;
      case 'restore':
        const backupId = args[1];
        if (!backupId) {
          console.error('Please provide backup ID');
          process.exit(1);
        }
        await client.restoreSystem(backupId);
        break;
      case 'update':
        await client.updateDependencies();
        break;
      case 'test':
        await client.runTests();
        break;
      case 'docs':
        await client.generateDocumentation();
        break;
      case 'seo':
        await client.optimizeSEO();
        break;
      case 'errors':
        await client.monitorErrors();
        break;
      case 'cleanup':
        await client.cleanupProject();
        break;
      case 'security':
        await client.securityAudit();
        break;
      case 'performance':
        await client.performanceOptimization();
        break;
      case 'full':
        await client.runFullAutomation();
        break;
      case 'deploy-workflow':
        const deployEnv = args[1] || 'production';
        await client.runDeploymentWorkflow(deployEnv);
        break;
      case 'interactive':
        await client.startInteractiveMode();
        break;
      case 'tools':
        const tools = await client.listTools();
        console.log('Available tools:', tools.map(t => t.name));
        break;
      case 'resources':
        const resources = await client.listResources();
        console.log('Available resources:', resources.map(r => r.name));
        break;
      default:
        console.log('Usage: node mcp-client-integration.js <command> [args...]');
        console.log('Run "node mcp-client-integration.js interactive" for interactive mode');
        break;
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await client.disconnect();
  }
}

// Start the CLI if this file is run directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = MCPClientIntegration; 