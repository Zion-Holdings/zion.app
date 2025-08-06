# MCP (Model Context Protocol) Integration Guide

## Overview

This project now includes a comprehensive MCP (Model Context Protocol) integration that enhances the existing automation system with intelligent tools and resources for project management, optimization, and monitoring.

## 🚀 Quick Start

### 1. Test MCP Integration

```bash
npm run mcp:test
```

### 2. Start MCP Server

```bash
npm run mcp:start
```

### 3. Run MCP Client

```bash
npm run mcp:client analyze
```

### 4. Use MCP Orchestrator

```bash
npm run mcp:orchestrator enhance
```

## 📦 Components

### Core Files

- `mcp-automation-system.js` - MCP Server with tools and resources
- `mcp-client-integration.js` - MCP Client for automation
- `automation/mcp-integration-orchestrator.js` - Integration orchestrator
- `mcp-config.json` - Configuration file
- `test-mcp-integration.js` - Test script

### Available Tools

#### Project Analysis

- `analyze_project_structure` - Analyze project structure and identify optimization opportunities
- `generate_automation_report` - Generate comprehensive automation system reports

#### Optimization

- `optimize_build_process` - Analyze and optimize build process performance
- `performance_optimization` - Analyze and optimize performance bottlenecks

#### Monitoring

- `monitor_performance` - Monitor application performance and generate recommendations
- `monitor_errors` - Monitor and analyze error logs for patterns

#### Deployment

- `deploy_automation` - Deploy automation scripts and configurations
- `backup_system` - Create comprehensive system backups
- `restore_system` - Restore system from backups

#### Maintenance

- `update_dependencies` - Update dependencies and check for vulnerabilities
- `run_tests` - Run comprehensive project tests
- `generate_documentation` - Generate project documentation
- `cleanup_project` - Clean up temporary files and optimize structure

#### Security & SEO

- `security_audit` - Perform comprehensive security audits
- `optimize_seo` - Analyze and optimize SEO settings

### Available Resources

- `file://project-structure` - Current project structure and organization
- `file://automation-status` - Status of all automation systems
- `file://performance-metrics` - Performance metrics and optimization data
- `file://error-logs` - Error logs and debugging information
- `file://security-report` - Security audit results and recommendations

## 🛠️ Usage

### NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run mcp:test` | Test MCP integration |
| `npm run mcp:start` | Start the MCP automation server |
| `npm run mcp:client` | Run MCP client with command |
| `npm run mcp:orchestrator` | Run MCP orchestrator |
| `npm run mcp:enhance` | Enhance existing automation with MCP |
| `npm run mcp:workflow` | Run automated MCP workflow |
| `npm run mcp:report` | Create integration report |
| `npm run mcp:setup-cron` | Setup cron jobs |
| `npm run mcp:daily` | Run daily workflow |
| `npm run mcp:weekly` | Run weekly audit |
| `npm run mcp:monitor` | Run performance monitor |
| `npm run mcp:status` | Get integration status |

### Command Line Examples

```bash
# Test the integration
npm run mcp:test

# Analyze project structure
node mcp-client-integration.js analyze

# Generate automation report
node mcp-client-integration.js report

# Optimize build process
node mcp-client-integration.js optimize

# Monitor performance
node mcp-client-integration.js monitor

# Deploy automation
node mcp-client-integration.js deploy production

# Backup system
node mcp-client-integration.js backup

# Security audit
node mcp-client-integration.js security

# Run full automation
node mcp-client-integration.js full

# Enhance existing automation
node automation/mcp-integration-orchestrator.js enhance

# Run automated workflow
node automation/mcp-integration-orchestrator.js workflow

# Create integration report
node automation/mcp-integration-orchestrator.js report

# Setup cron jobs
node automation/mcp-integration-orchestrator.js setup-cron
```

## 🔧 Configuration

The MCP integration is configured through `mcp-config.json`:

### Workflows

- **Daily Workflow** - Runs at 2 AM daily
- **Weekly Audit** - Runs on Sundays at 3 AM
- **Deployment Workflow** - Manual trigger for deployments

### Monitoring

- **Performance Monitoring** - Every 30 minutes
- **Error Monitoring** - Every 5 minutes
- **Security Monitoring** - Every hour

### Integrations

- **Existing Automation** - Enhanced with MCP capabilities
- **CI/CD** - Ready for GitHub, Netlify, Vercel integration
- **Monitoring** - Ready for Sentry, Datadog, New Relic integration

## 🔄 Workflows

### Daily Workflow

1. Analyze project structure
2. Generate automation report
3. Optimize build process
4. Monitor performance
5. Update dependencies
6. Security audit
7. Performance optimization
8. Cleanup project

### Weekly Audit

1. Security audit
2. Performance optimization
3. Update dependencies
4. Generate documentation

### Deployment Workflow

1. Backup system
2. Run tests
3. Deploy automation
4. Monitor performance

## 📊 Benefits

### Enhanced Automation

- **Intelligent Analysis** - AI-powered project analysis
- **Predictive Maintenance** - Proactive issue detection
- **Automated Optimization** - Continuous performance improvement
- **Comprehensive Monitoring** - Real-time system health tracking

### Improved Development Workflow

- **Automated Testing** - Comprehensive test execution
- **Documentation Generation** - Automatic documentation updates
- **Dependency Management** - Smart dependency updates
- **Code Quality** - Automated code quality checks

### Production Readiness

- **Deployment Automation** - Streamlined deployment processes
- **Performance Monitoring** - Real-time performance tracking
- **Error Tracking** - Comprehensive error monitoring
- **Security Compliance** - Automated security audits

## 🔒 Security Features

- **Security Audits** - Comprehensive security scanning
- **Dependency Updates** - Automatic vulnerability checks
- **Permission Management** - Secure access controls
- **Backup & Recovery** - System protection and restoration

## 🚀 Performance Optimization

- **Build Optimization** - Faster build times
- **Bundle Optimization** - Smaller bundle sizes
- **Memory Management** - Efficient resource usage
- **Caching Strategies** - Improved response times

## 🔧 Troubleshooting

### Common Issues

1. **MCP Server Not Starting**

   ```bash
   # Check Node.js version
   node --version
   
   # Reinstall dependencies
   npm install
   
   # Check for port conflicts
   lsof -i :3000
   ```

2. **Client Connection Failed**

   ```bash
   # Ensure server is running
   npm run mcp:start
   
   # Check server logs
   tail -f automation/logs/mcp-automation.log
   ```

3. **Tool Execution Errors**

   ```bash
   # Check tool permissions
   chmod +x mcp-automation-system.js
   
   # Verify configuration
   cat mcp-config.json
   ```

### Log Files

- **MCP Automation Log** - `automation/logs/mcp-automation.log`
- **Integration Report** - `automation/mcp-integration-report.json`
- **Performance Metrics** - `automation/monitoring-reports/`

## 📚 API Reference

### MCPClientIntegration Class

```javascript
const MCPClientIntegration = require('./mcp-client-integration.js');

const client = new MCPClientIntegration();
await client.connect();

// High-level methods
await client.analyzeProject();
await client.generateAutomationReport();
await client.optimizeBuild();
await client.monitorPerformance();
await client.deployAutomation('production');
await client.backupSystem();
await client.restoreSystem('backup-id');
await client.updateDependencies();
await client.runTests();
await client.generateDocumentation();
await client.optimizeSEO();
await client.monitorErrors();
await client.cleanupProject();
await client.securityAudit();
await client.performanceOptimization();

// Batch operations
await client.runFullAutomation();
await client.runDeploymentWorkflow('production');

// Resource access
await client.getProjectStructure();
await client.getAutomationStatus();
await client.getPerformanceMetrics();
await client.getErrorLogs();
await client.getSecurityReport();
```

### MCPIntegrationOrchestrator Class

```javascript
const MCPIntegrationOrchestrator = require('./automation/mcp-integration-orchestrator.js');

const orchestrator = new MCPIntegrationOrchestrator();
await orchestrator.initialize();

// Orchestration methods
await orchestrator.enhanceExistingAutomation();
await orchestrator.runAutomatedWorkflow();
await orchestrator.createIntegrationReport();
await orchestrator.setupCronJobs();
await orchestrator.runDailyWorkflow();
await orchestrator.runWeeklyAudit();
await orchestrator.runPerformanceMonitor();

// Status
const status = await orchestrator.getStatus();
```

## 🔮 Future Enhancements

### Planned Features

- **AI-Powered Analysis** - Machine learning for project optimization
- **Predictive Maintenance** - Proactive issue detection
- **Advanced Monitoring** - Real-time performance analytics
- **CI/CD Integration** - Seamless deployment automation
- **Cloud Integration** - Multi-cloud deployment support
- **Team Collaboration** - Shared automation workflows
- **Custom Tools** - User-defined automation tools
- **Plugin System** - Extensible automation capabilities

### Roadmap

- **Q1 2024** - Enhanced AI capabilities
- **Q2 2024** - Cloud integration
- **Q3 2024** - Team collaboration features
- **Q4 2024** - Advanced monitoring and analytics

## 🤝 Contributing

### Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bolt.new.zion.app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Test MCP integration**

   ```bash
   npm run mcp:test
   ```

4. **Start development**

   ```bash
   npm run mcp:start
   ```

### Adding New Tools

1. **Define tool in MCP server**

   ```javascript
   // In mcp-automation-system.js
   case 'new_tool':
     return await this.newTool(args);
   ```

2. **Add tool definition**

   ```javascript
   {
     name: 'new_tool',
     description: 'Description of new tool',
     inputSchema: {
       type: 'object',
       properties: {},
       required: []
     }
   }
   ```

3. **Add client method**

   ```javascript
   // In mcp-client-integration.js
   async newTool() {
     console.log('🔧 Running new tool...');
     const result = await this.callTool('new_tool');
     console.log('✅ New tool completed');
     return result;
   }
   ```

4. **Update configuration**

   ```json
   // In mcp-config.json
   "new_tool": {
     "description": "Description of new tool",
     "enabled": true
   }
   ```

## 📄 License

This MCP integration is part of the Bolt.new Zion app project and follows the same licensing terms.

## 🆘 Support

For support and questions:

1. **Check documentation** - This guide and inline code comments
2. **Review logs** - Check automation logs for errors
3. **Run diagnostics** - Use `npm run mcp:status` for system health
4. **Create issue** - Report bugs and feature requests

---

**MCP Integration Version:** 1.0.0  
**Last Updated:** January 2024  
**Compatibility:** Node.js >= 20.18.1, npm >= 10.0.0
