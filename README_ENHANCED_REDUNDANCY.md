# Enhanced Redundancy Automation System

This document describes the comprehensive redundancy automation system that provides backup and failover capabilities for all PM2 automations, GitHub Actions workflows, and Netlify functions.

## Overview

The Enhanced Redundancy Automation System is designed to ensure continuous operation of all automation processes by providing:

- **PM2 Process Redundancy**: Automatic monitoring, health checks, and recovery of PM2 processes
- **GitHub Actions Redundancy**: Local execution capabilities and workflow health monitoring
- **Netlify Functions Redundancy**: Function validation, health checks, and deployment monitoring
- **Master Orchestration**: Coordinated management of all redundancy systems
- **Emergency Recovery**: Automatic failover and recovery procedures

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                Master Redundancy Orchestrator               │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │ Enhanced PM2    │  │ Enhanced GitHub │  │ Enhanced    │ │
│  │ Redundancy      │  │ Actions         │  │ Netlify     │ │
│  │                 │  │ Redundancy      │  │ Functions   │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. Enhanced PM2 Redundancy (`enhanced-pm2-redundancy.cjs`)

**Purpose**: Monitors and manages all PM2 processes with automatic recovery capabilities.

**Features**:
- Process health monitoring (CPU, memory, status)
- Automatic process discovery
- Failed process recovery
- Emergency restart procedures
- Performance monitoring

**Usage**:
```bash
# Start monitoring
node automation/enhanced-pm2-redundancy.cjs start

# Check health
node automation/enhanced-pm2-redundancy.cjs health

# Emergency restart
node automation/enhanced-pm2-redundancy.cjs emergency

# Get status
node automation/enhanced-pm2-redundancy.cjs status
```

### 2. Enhanced GitHub Actions Redundancy (`enhanced-github-actions-redundancy.cjs`)

**Purpose**: Provides local execution capabilities for GitHub Actions workflows and monitors their health.

**Features**:
- Workflow validation and health checks
- Local workflow execution
- Automatic workflow recovery
- Emergency workflow triggering
- Workflow simulation

**Usage**:
```bash
# Start monitoring
node automation/enhanced-github-actions-redundancy.cjs start

# Execute workflow locally
node automation/enhanced-github-actions-redundancy.cjs trigger <workflow-name>

# Emergency trigger all workflows
node automation/enhanced-github-actions-redundancy.cjs emergency

# Get status
node automation/enhanced-github-actions-redundancy.cjs status
```

### 3. Enhanced Netlify Functions Redundancy (`enhanced-netlify-functions-redundancy.cjs`)

**Purpose**: Monitors Netlify functions health and provides local execution capabilities.

**Features**:
- Function discovery and validation
- Local function execution
- Manifest regeneration
- Deployment monitoring
- Error recovery

**Usage**:
```bash
# Start monitoring
node automation/enhanced-netlify-functions-redundancy.cjs start

# Execute function locally
node automation/enhanced-netlify-functions-redundancy.cjs execute <function-name>

# Regenerate manifest
node automation/enhanced-netlify-functions-redundancy.cjs regenerate

# Emergency regeneration
node automation/enhanced-netlify-functions-redundancy.cjs emergency

# Get status
node automation/enhanced-netlify-functions-redundancy.cjs status
```

### 4. Master Redundancy Orchestrator (`master-redundancy-orchestrator.cjs`)

**Purpose**: Coordinates all redundancy systems and provides unified management interface.

**Features**:
- System health orchestration
- Priority-based recovery queue
- Emergency mode activation
- Performance metrics
- Unified reporting

**Usage**:
```bash
# Start orchestration
node automation/master-redundancy-orchestrator.cjs start

# Check overall health
node automation/master-redundancy-orchestrator.cjs health

# Activate emergency mode
node automation/master-redundancy-orchestrator.cjs emergency

# Generate report
node automation/master-redundancy-orchestrator.cjs report

# Get status
node automation/master-redundancy-orchestrator.cjs status
```

## Quick Start

### 1. Start the Complete System

```bash
# Using the startup script (recommended)
npm run redundancy:start

# Or manually
bash automation/start-enhanced-redundancy.sh start
```

### 2. Check System Status

```bash
# Check overall status
npm run redundancy:status

# Check specific system
npm run redundancy:pm2 status
npm run redundancy:github status
npm run redundancy:netlify status
```

### 3. Monitor Logs

```bash
# View all logs
npm run redundancy:logs

# Follow specific log
tail -f automation/logs/master-orchestrator-out.log
```

## Configuration

### Environment Variables

The system can be configured using environment variables:

```bash
# PM2 Redundancy
export PM2_HEALTH_CHECK_INTERVAL=30000
export PM2_MAX_RESTART_ATTEMPTS=5
export PM2_RESTART_DELAY=5000

# GitHub Actions Redundancy
export GITHUB_CHECK_INTERVAL=60000
export GITHUB_MAX_FAILURES=3
export GITHUB_LOCAL_EXECUTION=1

# Netlify Functions Redundancy
export NETLIFY_CHECK_INTERVAL=120000
export NETLIFY_AUTO_DEPLOY=1
export NETLIFY_DEPLOY_TIMEOUT=300000

# Master Orchestrator
export REDUNDANCY_CHECK_INTERVAL=60000
export REDUNDANCY_EMERGENCY_THRESHOLD=50
export REDUNDANCY_RECOVERY_TIMEOUT=300000
```

### Ecosystem Configuration

The system uses `ecosystem.enhanced-redundancy.cjs` for PM2 process management. This file includes:

- All enhanced redundancy processes
- Legacy redundancy processes (for backward compatibility)
- Original PM2 auto-sync processes
- Optimized restart policies and logging

## Monitoring and Health Checks

### Health Check Intervals

- **PM2 Processes**: Every 30 seconds
- **GitHub Actions**: Every 1 minute
- **Netlify Functions**: Every 2 minutes
- **Master Orchestrator**: Every 1 minute

### Health Thresholds

- **Warning Level**: 80% health
- **Emergency Level**: 50% health
- **Recovery Attempts**: Maximum 3 per system

### Emergency Mode

When overall system health drops below 50%, the system automatically activates emergency mode:

1. **PM2**: Emergency restart of all processes
2. **GitHub Actions**: Emergency triggering of all workflows
3. **Netlify Functions**: Emergency regeneration and deployment

## Recovery Procedures

### Automatic Recovery

The system automatically attempts to recover failed components:

1. **Detection**: Health check identifies failed component
2. **Queuing**: Recovery task added to priority queue
3. **Execution**: Recovery executed with exponential backoff
4. **Verification**: Health re-checked after recovery
5. **Escalation**: Manual intervention if recovery fails

### Manual Recovery

```bash
# Recover specific system
npm run redundancy:pm2 recover
npm run redundancy:github recover
npm run redundancy:netlify recover

# Emergency recovery
npm run redundancy:orchestrator emergency
```

## Logging and Debugging

### Log Locations

- **Master Orchestrator**: `automation/logs/master-orchestrator-*.log`
- **PM2 Redundancy**: `automation/logs/enhanced-pm2-*.log`
- **GitHub Actions**: `automation/logs/enhanced-github-*.log`
- **Netlify Functions**: `automation/logs/enhanced-netlify-*.log`

### Log Levels

- **INFO**: Normal operation
- **WARN**: Warning conditions
- **ERROR**: Error conditions

### Debug Mode

Enable debug logging by setting:

```bash
export REDUNDANCY_LOG_LEVEL=DEBUG
```

## Performance Monitoring

### Metrics Collected

- Total health checks performed
- Successful recoveries
- Failed recoveries
- System uptime
- Recovery queue length
- Emergency mode activations

### Performance Optimization

- **Concurrent Recoveries**: Maximum 2 simultaneous recoveries
- **Recovery Timeout**: 5 minutes per recovery attempt
- **Load Balancing**: Distributed health checks across systems
- **Resource Management**: Automatic cleanup of completed tasks

## Troubleshooting

### Common Issues

1. **PM2 Not Running**
   ```bash
   pm2 start ecosystem.enhanced-redundancy.cjs
   ```

2. **Permission Denied**
   ```bash
   chmod +x automation/start-enhanced-redundancy.sh
   ```

3. **Log Directory Issues**
   ```bash
   mkdir -p automation/logs
   ```

4. **Process Conflicts**
   ```bash
   pm2 kill
   npm run redundancy:start
   ```

### Diagnostic Commands

```bash
# Check system health
npm run redundancy:health

# View system status
npm run redundancy:status

# Check specific component
node automation/enhanced-pm2-redundancy.cjs health
node automation/enhanced-github-actions-redundancy.cjs health
node automation/enhanced-netlify-functions-redundancy.cjs health

# Generate diagnostic report
node automation/master-redundancy-orchestrator.cjs report
```

## Integration with Existing Systems

### Backward Compatibility

The enhanced redundancy system maintains full backward compatibility with existing automation:

- Original PM2 processes continue to work
- Existing GitHub Actions workflows are preserved
- Current Netlify functions remain functional
- Legacy redundancy scripts are included

### Migration Path

1. **Phase 1**: Deploy enhanced system alongside existing
2. **Phase 2**: Gradually migrate critical processes
3. **Phase 3**: Full migration to enhanced system
4. **Phase 4**: Decommission legacy systems (optional)

## Security Considerations

### Access Control

- All scripts run with current user permissions
- No elevated privileges required
- Log files contain sensitive information (review before sharing)

### Network Security

- Local execution only (no external network calls)
- GitHub API calls require proper authentication
- Netlify deployment requires valid credentials

## Maintenance

### Regular Tasks

- **Daily**: Review health check logs
- **Weekly**: Analyze performance metrics
- **Monthly**: Review and update configurations
- **Quarterly**: Full system health audit

### Updates

```bash
# Update redundancy system
git pull origin main
npm install
npm run redundancy:restart
```

## Support and Documentation

### Additional Resources

- **Architecture**: See `ARCHITECTURE.md`
- **Deployment**: See `DEPLOYMENT.md`
- **API Reference**: See `API.md`
- **Contributing**: See `CONTRIBUTING.md`

### Getting Help

1. Check the logs for error messages
2. Review this documentation
3. Check system status with diagnostic commands
4. Review the troubleshooting section

## Conclusion

The Enhanced Redundancy Automation System provides comprehensive backup and failover capabilities for all automation processes. It ensures continuous operation through automatic monitoring, health checks, and recovery procedures, while maintaining full backward compatibility with existing systems.

For questions or issues, please refer to the troubleshooting section or review the system logs for detailed information.