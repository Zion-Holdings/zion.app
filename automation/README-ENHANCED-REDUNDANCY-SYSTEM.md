# Enhanced Redundancy Automation System

## Overview

The Enhanced Redundancy Automation System provides comprehensive redundancy coverage for all automation systems in the project, including:

- **PM2 Process Management** - Monitoring and auto-restart of all PM2 processes
- **GitHub Actions Workflows** - Health checks and backup execution of GitHub Actions
- **Netlify Functions** - Monitoring, regeneration, and deployment of Netlify functions
- **Master Orchestration** - Unified coordination and emergency recovery procedures

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                Master Redundancy Orchestrator               │
│                     (Coordinator)                          │
└─────────────────┬─────────────────┬─────────────────────────┘
                  │                 │
                  ▼                 ▼
    ┌─────────────────────┐ ┌─────────────────────┐
    │   PM2 Redundancy    │ │ GitHub Actions      │
    │      System         │ │   Redundancy        │
    │                     │ │     System          │
    │ • Process Monitoring│ │ • Workflow Health   │
    │ • Auto-restart      │ │ • Local Execution   │
    │ • Resource Checks   │ │ • Backup Strategies │
    └─────────────────────┘ └─────────────────────┘
                  │                 │
                  ▼                 ▼
    ┌─────────────────────────────────────────────────────────┐
    │              Netlify Functions                         │
    │                Redundancy System                       │
    │                                                       │
    │ • Function Health Checks                              │
    │ • Auto-regeneration                                   │
    │ • Deployment Triggers                                 │
    └─────────────────────────────────────────────────────────┘
```

## Components

### 1. Enhanced PM2 Redundancy (`enhanced-pm2-redundancy.cjs`)

**Purpose**: Monitors and manages all PM2 processes with intelligent restart and resource monitoring.

**Features**:
- Process health monitoring every 30 seconds
- Automatic restart of failed processes
- Resource usage monitoring (CPU, memory)
- Log rotation management
- Emergency restart procedures
- Support for multiple ecosystem files

**Coverage**:
- `zion-auto-sync`
- `zion-auto-sync-cron`
- `redundancy-automation-system`
- `redundancy-health-monitor`
- `redundancy-git-sync`
- `redundancy-build-monitor`

**Usage**:
```bash
# Start monitoring
node automation/enhanced-pm2-redundancy.cjs start

# Check status
node automation/enhanced-pm2-redundancy.cjs status

# Emergency restart
node automation/enhanced-pm2-redundancy.cjs restart
```

### 2. Enhanced GitHub Actions Redundancy (`enhanced-github-actions-redundancy.cjs`)

**Purpose**: Monitors GitHub Actions workflows and provides backup execution strategies.

**Features**:
- Workflow health validation
- Local execution backup
- Webhook trigger backup
- Failure threshold monitoring
- Automatic backup execution
- Workflow structure validation

**Coverage**:
- `marketing-sync.yml`
- `sync-health.yml`

**Usage**:
```bash
# Start monitoring
node automation/enhanced-github-actions-redundancy.cjs start

# Check workflows
node automation/enhanced-github-actions-redundancy.cjs check

# Emergency trigger
node automation/enhanced-github-actions-redundancy.cjs trigger
```

### 3. Enhanced Netlify Functions Redundancy (`enhanced-netlify-functions-redundancy.cjs`)

**Purpose**: Monitors and manages all Netlify functions with automatic regeneration and deployment.

**Features**:
- Function health checks
- Local execution testing
- Manifest regeneration
- Deployment triggering
- Dependency management
- Backup execution strategies

**Coverage**: All functions listed in `netlify/functions/functions-manifest.json`

**Usage**:
```bash
# Start monitoring
node automation/enhanced-netlify-functions-redundancy.cjs start

# Check functions
node automation/enhanced-netlify-functions-redundancy.cjs check

# Emergency regeneration
node automation/enhanced-netlify-functions-redundancy.cjs regenerate
```

### 4. Master Redundancy Orchestrator (`master-redundancy-orchestrator.cjs`)

**Purpose**: Coordinates all redundancy systems and provides unified control and emergency recovery.

**Features**:
- Unified system management
- Emergency mode detection
- Automatic recovery procedures
- Health reporting
- System status monitoring
- Emergency threshold management

**Usage**:
```bash
# Start orchestration
node automation/master-redundancy-orchestrator.cjs start

# Check all systems
node automation/master-redundancy-orchestrator.cjs health

# Emergency recovery
node automation/master-redundancy-orchestrator.cjs emergency

# Generate health report
node automation/master-redundancy-orchestrator.cjs report
```

## Quick Start

### 1. Start the Entire System

```bash
# Using the startup script (recommended)
bash automation/start-enhanced-redundancy-system.sh start

# Or using npm scripts
npm run redundancy:start
```

### 2. Check System Status

```bash
# Check overall status
npm run redundancy:status

# Check individual systems
npm run redundancy:pm2 status
npm run redundancy:github status
npm run redundancy:netlify status
npm run redundancy:orchestrator status
```

### 3. View Logs

```bash
# View all logs
npm run redundancy:logs

# View specific system logs
tail -f automation/logs/enhanced-pm2-redundancy.log
tail -f automation/logs/enhanced-github-actions-redundancy.log
tail -f automation/logs/enhanced-netlify-functions-redundancy.log
tail -f automation/logs/master-redundancy-orchestrator.log
```

## Configuration

### System Configuration

The system can be configured through environment variables or by modifying the configuration objects in each script:

```javascript
// PM2 Redundancy Configuration
{
  healthCheckInterval: 30000,        // 30 seconds
  maxRestartAttempts: 5,
  restartDelay: 5000,
  memoryThreshold: 80,               // 80% memory usage
  cpuThreshold: 90                   // 90% CPU usage
}

// GitHub Actions Redundancy Configuration
{
  checkInterval: 60000,              // 1 minute
  maxFailures: 3,
  localExecution: {
    enabled: true,
    timeout: 300000                  // 5 minutes
  }
}

// Netlify Functions Redundancy Configuration
{
  checkInterval: 120000,             // 2 minutes
  maxFailures: 3,
  autoDeploy: true,
  deployTimeout: 300000              // 5 minutes
}
```

### Emergency Thresholds

The master orchestrator will enter emergency mode when:
- 2 or more systems are unhealthy
- Auto-recovery is enabled
- Recovery attempts are below maximum (3 attempts)

## Monitoring and Alerts

### Health Checks

- **PM2**: Every 30 seconds
- **GitHub Actions**: Every 1 minute
- **Netlify Functions**: Every 2 minutes
- **Master Orchestrator**: Every 1 minute (orchestration) + 5 minutes (health)

### Log Files

All systems log to `automation/logs/`:
- `enhanced-pm2-redundancy.log`
- `enhanced-github-actions-redundancy.log`
- `enhanced-netlify-functions-redundancy.log`
- `master-redundancy-orchestrator.log`
- `health-report-YYYY-MM-DD.json`

### Status Monitoring

```bash
# Real-time status
npm run redundancy:status

# PM2 process status
pm2 status

# System health report
npm run redundancy:orchestrator report
```

## Emergency Procedures

### Automatic Recovery

When emergency mode is triggered:

1. **PM2 Emergency Restart**: Kills all processes and restarts from ecosystem files
2. **GitHub Actions Emergency Trigger**: Executes all workflows locally
3. **Netlify Functions Emergency Regeneration**: Regenerates manifest and triggers deployment

### Manual Recovery

```bash
# Emergency PM2 restart
npm run redundancy:pm2 restart

# Emergency GitHub Actions trigger
npm run redundancy:github trigger

# Emergency Netlify Functions regeneration
npm run redundancy:netlify regenerate

# Full emergency recovery
npm run redundancy:orchestrator emergency
```

## Troubleshooting

### Common Issues

1. **PM2 Processes Not Starting**
   ```bash
   # Check PM2 status
   pm2 status
   
   # Check logs
   pm2 logs
   
   # Manual restart
   npm run redundancy:pm2 restart
   ```

2. **GitHub Actions Workflows Failing**
   ```bash
   # Check workflow health
   npm run redundancy:github check
   
   # Local execution test
   npm run redundancy:github trigger
   ```

3. **Netlify Functions Issues**
   ```bash
   # Check function health
   npm run redundancy:netlify check
   
   # Regenerate manifest
   npm run redundancy:netlify regenerate
   ```

### Log Analysis

```bash
# View recent errors
grep -i error automation/logs/*.log | tail -20

# View system status
npm run redundancy:orchestrator status

# Generate health report
npm run redundancy:orchestrator report
```

## Integration with Existing Systems

### PM2 Integration

The enhanced redundancy system works alongside existing PM2 configurations:
- `ecosystem.pm2.cjs` - Original PM2 configuration
- `ecosystem.redundancy.cjs` - Redundancy-specific configuration
- Enhanced monitoring and auto-restart capabilities

### GitHub Actions Integration

- Monitors existing workflows
- Provides local execution backup
- Maintains workflow integrity
- Automatic failure detection and recovery

### Netlify Functions Integration

- Monitors all functions from manifest
- Automatic regeneration capabilities
- Deployment trigger integration
- Local execution testing

## Performance Considerations

### Resource Usage

- **PM2 Monitoring**: Minimal overhead (~1-2% CPU)
- **GitHub Actions Monitoring**: Network calls every minute
- **Netlify Functions Monitoring**: File system operations every 2 minutes
- **Master Orchestrator**: Coordination overhead (~0.5% CPU)

### Scaling

The system is designed to handle:
- Up to 100 PM2 processes
- Up to 50 GitHub Actions workflows
- Up to 200 Netlify functions
- Multiple deployment environments

## Security

### Access Control

- All scripts run with current user permissions
- No elevated privileges required
- Log files contain only operational data
- No sensitive information in logs

### Network Security

- GitHub API calls use standard authentication
- Netlify CLI operations use standard authentication
- No external network calls for PM2 operations

## Maintenance

### Regular Tasks

1. **Daily**: Check system status and logs
2. **Weekly**: Review health reports and performance
3. **Monthly**: Update configurations and thresholds
4. **Quarterly**: Review and optimize monitoring intervals

### Updates

```bash
# Update redundancy scripts
git pull origin main

# Restart redundancy system
npm run redundancy:restart

# Verify system health
npm run redundancy:status
```

## Support and Documentation

### Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/)

### Getting Help

1. Check the logs for error messages
2. Review system status and health reports
3. Check individual system health
4. Review configuration settings
5. Consult this documentation

## Changelog

### Version 1.0.0 (Current)
- Initial release of enhanced redundancy system
- Comprehensive PM2, GitHub Actions, and Netlify Functions coverage
- Master orchestration and emergency recovery
- Automated startup and management scripts
- Comprehensive monitoring and logging

---

**Note**: This system provides redundancy for existing automation systems. It does not replace them but ensures they continue operating even when failures occur.