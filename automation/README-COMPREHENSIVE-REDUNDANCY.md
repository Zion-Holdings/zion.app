# Comprehensive Redundancy Automation System

## Overview

This comprehensive redundancy automation system provides complete coverage for all automation systems in the project:

- **PM2 Process Management** - Automated monitoring and recovery of PM2 processes
- **GitHub Actions Workflows** - Health monitoring and automatic restoration of GitHub Actions workflows
- **Netlify Functions** - Comprehensive monitoring and regeneration of Netlify serverless functions

## 🚀 Quick Start

### 1. Start the Complete System

```bash
# Start all redundancy systems
./automation/start-comprehensive-redundancy.sh

# Or start with specific action
./automation/start-comprehensive-redundancy.sh start
```

### 2. Check System Status

```bash
# View system status
./automation/start-comprehensive-redundancy.sh status

# View recent logs
./automation/start-comprehensive-redundancy.sh logs
```

### 3. Stop the System

```bash
# Stop all redundancy systems
./automation/start-comprehensive-redundancy.sh stop

# Restart the system
./automation/start-comprehensive-redundancy.sh restart
```

## 🏗️ System Architecture

### Master Redundancy Orchestrator
- **File**: `master-redundancy-orchestrator.cjs`
- **Purpose**: Coordinates all redundancy systems and provides unified monitoring
- **Features**: Cross-system health analysis, performance metrics, automated recovery

### Comprehensive Redundancy System
- **File**: `comprehensive-redundancy-system.cjs`
- **Purpose**: High-level monitoring and coordination of all automation systems
- **Features**: Unified health checks, cross-system dependency analysis

### Enhanced PM2 Redundancy
- **File**: `enhanced-pm2-redundancy.cjs`
- **Purpose**: Comprehensive PM2 process monitoring and recovery
- **Features**: Process health validation, automatic restarts, ecosystem file validation

### Enhanced GitHub Actions Redundancy
- **File**: `enhanced-github-actions-redundancy.cjs`
- **Purpose**: GitHub Actions workflow monitoring and restoration
- **Features**: Workflow validation, automatic restoration, YAML syntax checking

### Enhanced Netlify Functions Redundancy
- **File**: `enhanced-netlify-functions-redundancy.cjs`
- **Purpose**: Netlify functions monitoring and manifest regeneration
- **Features**: Function validation, manifest regeneration, configuration checking

## 📋 System Requirements

- **Node.js**: Version 16 or higher
- **PM2**: Globally installed (`npm install -g pm2`)
- **Git**: Available in PATH
- **Operating System**: Linux, macOS, or Windows (with WSL)

## 🔧 Configuration

### Master Orchestrator Configuration

```javascript
{
  "systems": {
    "comprehensive": true,
    "pm2": true,
    "githubActions": true,
    "netlifyFunctions": true
  },
  "orchestration": {
    "healthCheckInterval": 300000, // 5 minutes
    "systemStartupDelay": 10000,   // 10 seconds
    "enableCrossSystemRecovery": true,
    "enableMetricsAggregation": true
  }
}
```

### PM2 Redundancy Configuration

```javascript
{
  "ecosystemFiles": [
    "ecosystem.pm2.cjs",
    "ecosystem.redundancy.cjs"
  ],
  "criticalProcesses": [
    "zion-auto-sync",
    "zion-auto-sync-cron"
  ],
  "healthCheckInterval": 30000,    // 30 seconds
  "maxRestartAttempts": 5,
  "enableAutoRecovery": true
}
```

### GitHub Actions Redundancy Configuration

```javascript
{
  "workflows": [
    "marketing-sync.yml",
    "sync-health.yml"
  ],
  "healthCheckInterval": 60000,    // 1 minute
  "enableAutoRecovery": true,
  "enableWorkflowValidation": true
}
```

### Netlify Functions Redundancy Configuration

```javascript
{
  "healthCheckInterval": 120000,   // 2 minutes
  "enableAutoRegeneration": true,
  "enableHealthCheck": true,
  "enableDeploymentCheck": true
}
```

## 📊 Monitoring and Health Checks

### Health Check Intervals

| System | Interval | Description |
|--------|----------|-------------|
| Master Orchestrator | 5 minutes | Cross-system health analysis |
| PM2 Processes | 30 seconds | Process status and recovery |
| GitHub Actions | 1 minute | Workflow validation and restoration |
| Netlify Functions | 2 minutes | Function health and manifest |

### Health Metrics

- **System Status**: Running, Stopped, Error, Unknown
- **Response Times**: Health check performance metrics
- **Failure Counts**: Track repeated failures
- **Recovery Success**: Automatic recovery success rates

## 🚨 Emergency Recovery

### Automatic Recovery Features

1. **PM2 Process Recovery**
   - Automatic process restart on failure
   - Ecosystem file validation and restoration
   - Daemon health monitoring and restart

2. **GitHub Actions Recovery**
   - Missing workflow detection and restoration
   - YAML syntax validation and correction
   - Workflow template management

3. **Netlify Functions Recovery**
   - Functions manifest regeneration
   - Configuration file validation
   - Directory structure restoration

### Manual Emergency Recovery

```bash
# Emergency recovery for all systems
node automation/master-redundancy-orchestrator.cjs
# Then call emergencyRecovery() method

# Individual system recovery
node automation/enhanced-pm2-redundancy.cjs
node automation/enhanced-github-actions-redundancy.cjs
node automation/enhanced-netlify-functions-redundancy.cjs
```

## 📝 Logging and Reporting

### Log Files

- **Startup Logs**: `automation/logs/startup.log`
- **Orchestrator Logs**: `automation/logs/orchestrator.log`
- **System Logs**: `automation/logs/*-redundancy.log`
- **Health Reports**: `automation/logs/*-health-report-*.json`

### Health Report Structure

```json
{
  "timestamp": "2025-01-17T12:00:00.000Z",
  "systems": {
    "pm2": { "status": "healthy", "health": {...} },
    "githubActions": { "status": "healthy", "health": {...} },
    "netlifyFunctions": { "status": "healthy", "health": {...} }
  },
  "summary": {
    "total": 3,
    "healthy": 3,
    "unhealthy": 0
  },
  "crossSystemIssues": [],
  "recommendations": []
}
```

## 🔄 Integration with Existing Systems

### PM2 Ecosystem Files

The system automatically monitors and validates:
- `ecosystem.pm2.cjs` - Main PM2 configuration
- `ecosystem.redundancy.cjs` - Redundancy system configuration

### GitHub Actions Workflows

Automatically monitors and restores:
- `marketing-sync.yml` - Marketing automation workflow
- `sync-health.yml` - Health check workflow

### Netlify Functions

Comprehensive monitoring of:
- Functions manifest (`functions-manifest.json`)
- Configuration files (`netlify.toml`)
- Individual function files

## 🛠️ Troubleshooting

### Common Issues

1. **PM2 Daemon Not Responding**
   ```bash
   # Check PM2 status
   pm2 ping
   
   # Restart PM2 if needed
   pm2 kill && pm2 start
   ```

2. **GitHub Actions Workflows Missing**
   - System automatically detects and restores missing workflows
   - Check logs for restoration attempts
   - Verify workflow file permissions

3. **Netlify Functions Manifest Issues**
   - System automatically regenerates manifest
   - Check function file syntax
   - Verify Netlify configuration

### Debug Mode

```bash
# Enable debug logging
export DEBUG_REDUNDANCY=true
./automation/start-comprehensive-redundancy.sh start

# View detailed logs
tail -f automation/logs/*.log
```

## 📈 Performance Optimization

### Resource Management

- **Staggered Startup**: Systems start with delays to prevent resource conflicts
- **Memory Management**: Automatic log rotation and cleanup
- **Process Monitoring**: Efficient health check algorithms

### Scalability Features

- **Modular Design**: Each system can run independently
- **Configurable Intervals**: Adjustable monitoring frequencies
- **Load Balancing**: Distributed health checks across systems

## 🔒 Security Considerations

### Access Control

- **File Permissions**: Secure log file access
- **Process Isolation**: Separate processes for each system
- **Error Handling**: Secure error message handling

### Audit Trail

- **Comprehensive Logging**: All actions logged with timestamps
- **Health Reports**: Detailed system health documentation
- **Recovery Tracking**: Automatic recovery attempt logging

## 🚀 Deployment

### Production Deployment

1. **Install Dependencies**
   ```bash
   npm install -g pm2
   ```

2. **Configure System**
   - Adjust configuration files as needed
   - Set appropriate log rotation policies
   - Configure monitoring intervals

3. **Start System**
   ```bash
   ./automation/start-comprehensive-redundancy.sh start
   ```

4. **Monitor Deployment**
   ```bash
   ./automation/start-comprehensive-redundancy.sh status
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
RUN npm install -g pm2
COPY automation/ /app/automation/
WORKDIR /app
CMD ["./automation/start-comprehensive-redundancy.sh", "start"]
```

## 📚 API Reference

### Master Orchestrator Methods

- `startOrchestration()` - Start all systems
- `stopOrchestration()` - Stop all systems
- `performOrchestratedHealthCheck()` - Run health checks
- `emergencyRecovery()` - Emergency recovery mode

### System-Specific Methods

Each redundancy system provides:
- `startMonitoring()` - Start monitoring
- `stopMonitoring()` - Stop monitoring
- `performComprehensiveHealthCheck()` - Health check
- `emergencyRecovery()` - Emergency recovery

## 🤝 Contributing

### Development Setup

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Tests**
   ```bash
   npm test
   ```

4. **Start Development**
   ```bash
   ./automation/start-comprehensive-redundancy.sh start
   ```

### Code Standards

- **ESLint**: Follow project ESLint configuration
- **Documentation**: Update README for new features
- **Testing**: Add tests for new functionality
- **Logging**: Use consistent logging patterns

## 📄 License

This redundancy automation system is part of the main project and follows the same license terms.

## 🆘 Support

### Getting Help

1. **Check Logs**: Review system logs for error details
2. **System Status**: Use status command to check system health
3. **Documentation**: Refer to this README for configuration details
4. **Issues**: Report issues through project issue tracker

### Emergency Contacts

- **System Administrator**: For critical system issues
- **Development Team**: For automation logic issues
- **DevOps Team**: For deployment and infrastructure issues

---

**Last Updated**: January 17, 2025  
**Version**: 1.0.0  
**Maintainer**: Automation Team