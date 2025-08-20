# Ultimate Redundancy Automation System

## Overview

The Ultimate Redundancy Automation System provides comprehensive redundancy for all automation systems in the Zion.app project, including:
- **PM2 Process Management** - Redundancy for all PM2 processes and ecosystems
- **GitHub Actions** - Redundancy for all GitHub workflow automations
- **Netlify Functions** - Redundancy for all Netlify serverless functions
- **System Health Monitoring** - Comprehensive health checks and auto-recovery

## Features

### 🔄 PM2 Redundancy
- **Process Monitoring**: Continuous monitoring of all PM2 processes
- **Auto-Recovery**: Automatic restart of failed processes
- **Resource Monitoring**: Memory and CPU usage tracking
- **Log Rotation**: Automated log management with compression
- **Ecosystem Management**: Support for multiple ecosystem configurations

### 🚀 GitHub Actions Redundancy
- **Workflow Validation**: Ensures all workflow files are present and valid
- **Backup Restoration**: Automatic restoration from backup workflows
- **Auto-Triggering**: Can trigger workflows when needed
- **Health Monitoring**: Continuous monitoring of workflow status

### ⚡ Netlify Functions Redundancy
- **Function Monitoring**: Tracks all Netlify functions
- **Manifest Management**: Automatic regeneration of function manifests
- **Deployment Checks**: Verifies function deployment status
- **Auto-Recovery**: Regenerates missing or stale functions

### 🏥 System Health Monitoring
- **Resource Monitoring**: Disk, memory, and CPU usage tracking
- **Performance Metrics**: Continuous performance monitoring
- **Auto-Recovery**: Automatic system recovery procedures
- **Alert System**: Configurable alerting for critical issues

## Quick Start

### 1. Start the System
```bash
# Start the ultimate redundancy system
npm run redundancy:ultimate:start

# Or use the script directly
bash automation/start-ultimate-redundancy.sh start
```

### 2. Check Status
```bash
# Check system status
npm run redundancy:ultimate:status

# Or use the script directly
bash automation/start-ultimate-redundancy.sh status
```

### 3. Run Health Check
```bash
# Run a health check
npm run redundancy:ultimate:health

# Or use the script directly
bash automation/start-ultimate-redundancy.sh health
```

### 4. View Logs
```bash
# View recent logs
npm run redundancy:ultimate:logs

# Follow logs in real-time
bash automation/start-ultimate-redundancy.sh logs follow
```

## Available Commands

### NPM Scripts
```bash
# Start the system
npm run redundancy:ultimate:start

# Stop the system
npm run redundancy:ultimate:stop

# Restart the system
npm run redundancy:ultimate:restart

# Check status
npm run redundancy:ultimate:status

# Run health check
npm run redundancy:ultimate:health

# View logs
npm run redundancy:ultimate:logs

# Test system
npm run redundancy:ultimate:test

# Run once (for testing)
npm run redundancy:ultimate:once
```

### Direct Script Usage
```bash
# Start
bash automation/start-ultimate-redundancy.sh start

# Stop
bash automation/start-ultimate-redundancy.sh stop

# Restart
bash automation/start-ultimate-redundancy.sh restart

# Status
bash automation/start-ultimate-redundancy.sh status

# Health check
bash automation/start-ultimate-redundancy.sh health

# View logs
bash automation/start-ultimate-redundancy.sh logs

# Follow logs
bash automation/start-ultimate-redundancy.sh logs follow

# Test system
bash automation/start-ultimate-redundancy.sh test

# Help
bash automation/start-ultimate-redundancy.sh help
```

## Configuration

The system is configured through `automation/redundancy-config.json`:

### PM2 Configuration
```json
{
 "pm2": {
 "criticalProcesses": [
 "zion-auto-sync",
 "redundancy-automation-system",
 "enhanced-pm2-redundancy"
 ],
 "healthCheckInterval": 30000,
 "maxRestartAttempts": 5,
 "memoryThreshold": 80,
 "cpuThreshold": 90
 }
}
```

### GitHub Actions Configuration
```json
{
 "githubActions": {
 "workflows": ["marketing-sync", "sync-health"],
 "backupWorkflows": ["marketing-sync-backup", "sync-health-backup"],
 "healthCheckInterval": 60000,
 "maxFailures": 3,
 "autoTrigger": true
 }
}
```

### Netlify Functions Configuration
```json
{
 "netlifyFunctions": {
 "functionsDir": "netlify/functions",
 "manifestFile": "netlify/functions/functions-manifest.json",
 "healthCheckInterval": 120000,
 "autoRegenerate": true
 }
}
```

## Architecture

### Core Components

1. **Ultimate Redundancy Master** (`automation/ultimate-redundancy-master.cjs`)
- Main orchestrator for all redundancy systems
- Handles PM2, GitHub Actions, and Netlify Functions redundancy
- Provides health monitoring and auto-recovery

2. **Startup Script** (`automation/start-ultimate-redundancy.sh`)
- Bash script for system management
- Handles dependencies and initialization
- Provides CLI interface for all operations

3. **Configuration** (`automation/redundancy-config.json`)
- Centralized configuration for all redundancy systems
- Configurable thresholds and intervals
- Process and workflow definitions

### Redundancy Layers

```
┌─────────────────────────────────────────────────────────────┐
│ Ultimate Redundancy Master │
├─────────────────────────────────────────────────────────────┤
│ PM2 Redundancy │ GitHub Actions │ Netlify Functions │
│ │ Redundancy │ Redundancy │
├─────────────────────────────────────────────────────────────┤
│ Process Monitor │ Workflow Valid │ Function Monitor │
│ Auto-Restart │ Backup Restore │ Manifest Gen │
│ Resource Check │ Auto-Trigger │ Auto-Recovery │
└─────────────────────────────────────────────────────────────┘
```

## Monitoring and Logging

### Log Files
- **Main Log**: `automation/logs/ultimate-redundancy.log`
- **PM2 Logs**: `automation/logs/pm2-redundancy.log`
- **GitHub Logs**: `automation/logs/github-redundancy.log`
- **Netlify Logs**: `automation/logs/netlify-redundancy.log`

### Health Checks
The system performs continuous health checks:
- **PM2 Processes**: Every 30 seconds
- **GitHub Actions**: Every 60 seconds
- **Netlify Functions**: Every 120 seconds
- **System Health**: Every 5 minutes

### Auto-Recovery
When issues are detected, the system automatically:
1. Attempts to restart failed processes
2. Restores missing workflows from backups
3. Regenerates stale function manifests
4. Escalates to more aggressive recovery if needed

## Troubleshooting

### Common Issues

#### PM2 Processes Not Starting
```bash
# Check PM2 status
pm2 status

# Check PM2 logs
pm2 logs

# Restart PM2 ecosystem
pm2 restart ecosystem.comprehensive-redundancy.cjs
```

#### GitHub Actions Workflows Missing
```bash
# Check workflow files
ls -la .github/workflows/

# Restore from backup
cp .github/workflows/marketing-sync-backup.yml .github/workflows/marketing-sync.yml
```

#### Netlify Functions Issues
```bash
# Regenerate manifest
npm run netlify:manifest

# Check functions directory
ls -la netlify/functions/
```

### Debug Mode
```bash
# Run with debug logging
NODE_ENV=development node automation/ultimate-redundancy-master.cjs start

# Check system logs
tail -f automation/logs/ultimate-redundancy.log
```

## Integration

### With Existing Systems
The Ultimate Redundancy System integrates with:
- **Existing PM2 Ecosystems**: Works alongside current PM2 configurations
- **GitHub Actions**: Monitors and backs up all workflows
- **Netlify Functions**: Ensures function availability
- **Build Systems**: Monitors build health and recovery

### With Other Redundancy Systems
- **Comprehensive Redundancy**: Can run alongside existing redundancy systems
- **Enhanced Redundancy**: Integrates with enhanced redundancy components
- **Legacy Systems**: Maintains backward compatibility

## Performance

### Resource Usage
- **Memory**: Minimal overhead (~50-100MB)
- **CPU**: Low usage during normal operation
- **Disk**: Log rotation keeps disk usage minimal
- **Network**: Minimal network traffic for health checks

### Scalability
- **Process Monitoring**: Scales with number of PM2 processes
- **Workflow Monitoring**: Scales with number of GitHub workflows
- **Function Monitoring**: Scales with number of Netlify functions

## Security

### Security Features
- **Script Validation**: Validates all scripts before execution
- **Permission Checks**: Ensures proper file permissions
- **Dependency Auditing**: Monitors for security vulnerabilities
- **Rate Limiting**: Prevents abuse of automation systems

### Best Practices
- Run with minimal required permissions
- Regularly update dependencies
- Monitor logs for suspicious activity
- Use secure authentication for external services

## Development

### Adding New Processes
1. Add process name to `redundancy-config.json`
2. Update PM2 ecosystem files if needed
3. Test with `npm run redundancy:ultimate:test`

### Adding New Workflows
1. Add workflow name to `redundancy-config.json`
2. Create backup workflow file
3. Test workflow restoration

### Adding New Functions
1. Add function name to `redundancy-config.json`
2. Ensure function is in Netlify functions directory
3. Test manifest regeneration

## Support

### Getting Help
- Check the logs: `npm run redundancy:ultimate:logs`
- Run health check: `npm run redundancy:ultimate:health`
- Test system: `npm run redundancy:ultimate:test`
- View status: `npm run redundancy:ultimate:status`

### Reporting Issues
1. Check existing logs for error details
2. Run health check to identify problems
3. Test system components individually
4. Check system resources and dependencies

## License

This system is part of the Zion.app project and follows the same licensing terms.

---

**Note**: This system provides comprehensive redundancy but should not replace proper monitoring and alerting systems. It's designed to work alongside existing monitoring solutions to provide additional layers of reliability.