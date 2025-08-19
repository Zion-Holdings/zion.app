# Comprehensive Redundancy Automation System

This system provides complete redundancy and backup automation for all PM2, GitHub Actions, and Netlify functions automations in the project.

## 🚀 Overview

The Comprehensive Redundancy Automation System ensures that all automation processes continue running even if the primary systems fail. It includes:

- **PM2 Process Redundancy**: Backup and monitoring for all PM2 processes
- **GitHub Actions Redundancy**: Local execution triggers and backup workflows
- **Netlify Functions Redundancy**: Backup functions and manifest regeneration
- **Master Orchestrator**: Centralized coordination and health monitoring

## 📁 System Architecture

```
automation/
├── comprehensive-redundancy-system.cjs      # Main comprehensive system
├── enhanced-pm2-redundancy.cjs             # Enhanced PM2 redundancy
├── enhanced-github-actions-redundancy.cjs  # Enhanced GitHub Actions redundancy
├── enhanced-netlify-functions-redundancy.cjs # Enhanced Netlify functions redundancy
├── master-redundancy-orchestrator.cjs      # Master orchestrator
├── start-comprehensive-redundancy-system.sh # Startup script
├── stop-comprehensive-redundancy-system.sh  # Stop script
└── logs/                                   # System logs
```

## 🔧 Prerequisites

- Node.js 16+ installed
- PM2 installed globally (`npm install -g pm2`)
- Access to the project directory
- Git configured for the repository

## 🚀 Quick Start

### 1. Start the Complete System

```bash
# Make scripts executable (if not already done)
chmod +x automation/start-comprehensive-redundancy-system.sh
chmod +x automation/stop-comprehensive-redundancy-system.sh

# Start the comprehensive redundancy system
./automation/start-comprehensive-redundancy-system.sh
```

### 2. Stop the System

```bash
# Stop the comprehensive redundancy system
./automation/stop-comprehensive-redundancy-system.sh
```

### 3. Check Status

```bash
# Check PM2 status
pm2 status

# Check system logs
tail -f automation/logs/master-redundancy-orchestrator.log
```

## 📊 System Components

### 1. Comprehensive Redundancy System (`comprehensive-redundancy-system.cjs`)

**Purpose**: Central monitoring and coordination of all redundancy systems

**Features**:
- Monitors PM2, GitHub Actions, and Netlify functions health
- Performs comprehensive health checks every 30 seconds
- Automatic recovery procedures
- Emergency mode for critical failures

**Configuration**:
```javascript
{
  pm2: {
    healthCheckInterval: 30000,        // 30 seconds
    maxRestartAttempts: 5,
    autoRecovery: true
  },
  githubActions: {
    healthCheckInterval: 60000,        // 1 minute
    maxFailureThreshold: 3,
    backupTriggers: true
  },
  netlifyFunctions: {
    healthCheckInterval: 120000,       // 2 minutes
    autoRegenerate: true
  }
}
```

### 2. Enhanced PM2 Redundancy (`enhanced-pm2-redundancy.cjs`)

**Purpose**: Comprehensive backup and monitoring for all PM2 processes

**Features**:
- Monitors primary PM2 processes (`zion-auto-sync`, `zion-auto-sync-cron`)
- Monitors redundancy PM2 processes
- Creates backup PM2 processes
- Automatic restart and recovery
- Process health validation

**Processes Monitored**:
- Primary: `zion-auto-sync`, `zion-auto-sync-cron`
- Redundancy: `redundancy-automation-system`, `redundancy-health-monitor`, `redundancy-git-sync`, `redundancy-build-monitor`

### 3. Enhanced GitHub Actions Redundancy (`enhanced-github-actions-redundancy.cjs`)

**Purpose**: Backup execution and monitoring for GitHub Actions workflows

**Features**:
- Local execution triggers for all workflows
- Backup workflow creation
- Cron-based backup triggers
- Workflow validation and health checks
- Automatic recovery procedures

**Workflows Covered**:
- `marketing-sync.yml` - Marketing synchronization
- `sync-health.yml` - Sync health monitoring

**Backup Triggers**:
- Local execution scripts for each workflow
- Cron jobs for automated backup execution
- Fallback mechanisms when GitHub Actions fail

### 4. Enhanced Netlify Functions Redundancy (`enhanced-netlify-functions-redundancy.cjs`)

**Purpose**: Backup and monitoring for Netlify serverless functions

**Features**:
- Functions manifest validation
- Backup function creation
- Automatic manifest regeneration
- Deployment status monitoring
- Function health validation

**Functions Monitored**:
- All functions listed in `netlify/functions/functions-manifest.json`
- Automatic backup creation
- Health validation for each function

### 5. Master Redundancy Orchestrator (`master-redundancy-orchestrator.cjs`)

**Purpose**: Centralized coordination and management of all redundancy systems

**Features**:
- Starts and stops all redundancy systems
- Monitors system health
- Coordinates recovery procedures
- Emergency mode for critical failures
- System status reporting

**Orchestration**:
- System startup sequencing
- Health monitoring coordination
- Recovery procedure management
- Emergency mode activation

## 🔍 Health Monitoring

### Health Check Intervals

- **PM2 Processes**: Every 30 seconds
- **GitHub Actions**: Every 60 seconds
- **Netlify Functions**: Every 120 seconds
- **Master Orchestrator**: Every 60 seconds

### Health Metrics

- Process status and uptime
- Workflow execution history
- Function validation results
- System response times
- Error rates and recovery success

### Health Reports

Health check results are saved to JSON files in the logs directory:
- `pm2-health-check-YYYY-MM-DD.json`
- `github-actions-health-check-YYYY-MM-DD.json`
- `netlify-functions-health-check-YYYY-MM-DD.json`
- `master-health-check-YYYY-MM-DD.json`

## 🚨 Emergency Recovery

### Automatic Recovery

The system automatically attempts recovery when failures are detected:

1. **Process Restart**: Failed processes are automatically restarted
2. **Backup Activation**: Backup systems are activated if primary systems fail
3. **Emergency Mode**: Full system restart if multiple failures occur

### Manual Recovery

```bash
# Enter emergency mode
node automation/master-redundancy-orchestrator.cjs

# Or restart individual systems
node automation/enhanced-pm2-redundancy.cjs
node automation/enhanced-github-actions-redundancy.cjs
node automation/enhanced-netlify-functions-redundancy.cjs
```

## 📝 Logging

### Log Files

- `comprehensive-redundancy-system.log` - Main system logs
- `enhanced-pm2-redundancy.log` - PM2 redundancy logs
- `enhanced-github-actions-redundancy.log` - GitHub Actions redundancy logs
- `enhanced-netlify-functions-redundancy.log` - Netlify functions redundancy logs
- `master-redundancy-orchestrator.log` - Master orchestrator logs

### Log Levels

- **INFO**: General information and status updates
- **WARN**: Warning messages for potential issues
- **ERROR**: Error messages for failures and issues

### Log Rotation

Logs are automatically rotated:
- Maximum log file size: 10MB
- Maximum log files: 30
- Daily log files with date stamps

## ⚙️ Configuration

### Environment Variables

```bash
# PM2 Configuration
export AUTO_SYNC_REMOTE=origin
export AUTO_SYNC_BRANCH=main
export AUTO_SYNC_STRATEGY=hardreset

# Redundancy Configuration
export REDUNDANCY_LOG_LEVEL=INFO
export REDUNDANCY_PM2_CHECK_INTERVAL=30000
export REDUNDANCY_GITHUB_CHECK_INTERVAL=60000
export REDUNDANCY_NETLIFY_CHECK_INTERVAL=120000
```

### Configuration Files

- `ecosystem.pm2.cjs` - Primary PM2 configuration
- `ecosystem.redundancy.cjs` - Redundancy PM2 configuration
- `automation/redundancy-config.json` - Redundancy system configuration

## 🛠️ Maintenance

### Regular Maintenance

1. **Monitor Logs**: Check log files regularly for errors
2. **Health Checks**: Review health check reports
3. **Process Monitoring**: Monitor PM2 process status
4. **Backup Verification**: Verify backup systems are functional

### Troubleshooting

#### Common Issues

1. **Process Not Starting**
   ```bash
   # Check logs
   tail -f automation/logs/enhanced-pm2-redundancy.log
   
   # Check PM2 status
   pm2 status
   ```

2. **GitHub Actions Failures**
   ```bash
   # Check workflow validation
   node automation/enhanced-github-actions-redundancy.cjs
   
   # Check local triggers
   ls -la automation/local-trigger-*.sh
   ```

3. **Netlify Functions Issues**
   ```bash
   # Check functions manifest
   cat netlify/functions/functions-manifest.json
   
   # Regenerate manifest
   node scripts/generate-netlify-functions-manifest.cjs
   ```

#### Recovery Procedures

1. **Restart Individual System**
   ```bash
   # Stop the system
   ./automation/stop-comprehensive-redundancy-system.sh
   
   # Start the system
   ./automation/start-comprehensive-redundancy-system.sh
   ```

2. **Emergency Mode**
   ```bash
   # Enter emergency mode
   node automation/master-redundancy-orchestrator.cjs
   ```

3. **Manual Recovery**
   ```bash
   # Restart PM2 processes
   pm2 restart all
   
   # Check system health
   node automation/comprehensive-redundancy-system.cjs
   ```

## 🔒 Security Considerations

### File Permissions

- Ensure startup and stop scripts are executable
- Restrict access to log files containing sensitive information
- Use appropriate file permissions for backup files

### Process Isolation

- Each redundancy system runs in its own process
- No shared memory or state between systems
- Independent logging and error handling

### Backup Security

- Backup files are stored locally in the project directory
- No external backup services or APIs
- Backup cleanup on system shutdown

## 📈 Performance Impact

### Resource Usage

- **CPU**: Minimal impact (< 1% during normal operation)
- **Memory**: ~50-100MB total for all redundancy systems
- **Disk**: Log files and backup files (rotated automatically)
- **Network**: Minimal network usage for health checks

### Optimization

- Health check intervals can be adjusted in configuration
- Log rotation prevents disk space issues
- Process monitoring uses efficient system calls
- Backup creation is asynchronous and non-blocking

## 🔄 Updates and Upgrades

### System Updates

1. **Backup Current System**
   ```bash
   ./automation/stop-comprehensive-redundancy-system.sh
   cp -r automation automation.backup
   ```

2. **Update Scripts**
   ```bash
   # Update the redundancy scripts
   git pull origin main
   ```

3. **Restart System**
   ```bash
   ./automation/start-comprehensive-redundancy-system.sh
   ```

### Version Compatibility

- **Node.js**: Version 16+ required
- **PM2**: Version 4+ recommended
- **Git**: Version 2.20+ required
- **Operating System**: Linux, macOS, Windows (WSL)

## 📞 Support and Troubleshooting

### Getting Help

1. **Check Logs**: Review relevant log files for error messages
2. **Health Reports**: Examine health check JSON files
3. **Process Status**: Check PM2 and system process status
4. **Documentation**: Review this README and script comments

### Common Commands

```bash
# Check system status
pm2 status
ps aux | grep redundancy

# View logs
tail -f automation/logs/*.log

# Check health
node automation/comprehensive-redundancy-system.cjs

# Emergency restart
./automation/stop-comprehensive-redundancy-system.sh
./automation/start-comprehensive-redundancy-system.sh
```

### Reporting Issues

When reporting issues, include:
- Error messages from logs
- System configuration details
- Steps to reproduce the issue
- Expected vs. actual behavior
- System environment information

## 📚 Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Node.js Process Management](https://nodejs.org/api/process.html)

## 📄 License

This redundancy automation system is part of the project and follows the same license terms.

---

**Note**: This system is designed to provide comprehensive redundancy for production environments. Always test in a development environment before deploying to production.