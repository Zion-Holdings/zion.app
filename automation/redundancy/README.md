# Redundancy Automation System

This directory contains a comprehensive redundancy automation system that provides backup and failover capabilities for all PM2, GitHub Actions, and Netlify Functions automations.

## Overview

The redundancy system ensures that your automation infrastructure remains operational even when primary systems fail. It creates backup processes, workflows, and functions that automatically take over when needed.

## Architecture

```
Master Redundancy Orchestrator
├── PM2 Redundancy Manager
│ ├── Backup auto-sync processes
│ ├── Backup cron processes
│ └── Health monitoring & recovery
├── GitHub Actions Redundancy Manager
│ ├── Backup workflow creation
│ ├── Workflow health monitoring
│ └── Automatic recovery
└── Netlify Functions Redundancy Manager
 ├── Backup function generation
 ├── Function testing & validation
 └── Deployment & health checks
```

## Components

### 1. PM2 Redundancy Manager (`pm2-redundancy-manager.cjs`)

Manages backup PM2 processes for auto-sync and cron operations.

**Features:**
- Creates backup auto-sync processes with enhanced restart policies
- Monitors process health every 5 minutes
- Automatic recovery with exponential backoff
- Comprehensive logging and reporting

**Backup Processes:**
- `zion-auto-sync-backup`: Enhanced auto-sync with 15 max restarts
- `zion-auto-sync-cron-backup`: Cron-based sync every 15 minutes
- `zion-monitoring-backup`: Dedicated monitoring process

### 2. GitHub Actions Redundancy Manager (`github-actions-redundancy-manager.cjs`)

Creates and manages backup GitHub Actions workflows.

**Features:**
- Automatically generates backup workflows for existing ones
- Adjusts schedules to run less frequently (daily backups)
- Maintains manual dispatch capabilities
- Health monitoring and automatic recovery

**Backup Workflows:**
- `marketing-sync-backup.yml`: Daily backup of marketing sync
- `sync-health-backup.yml`: Daily backup of sync health checks

### 3. Netlify Functions Redundancy Manager (`netlify-functions-redundancy-manager.cjs`)

Manages backup Netlify functions for all automation functions.

**Features:**
- Scans functions manifest and disk for all functions
- Generates backup functions with error handling
- Tests function validity and health
- Automatic deployment and monitoring

**Backup Functions:**
- Creates `{function-name}-backup` for each function
- Includes error handling and logging
- Maintains original functionality with backup wrapper

### 4. Master Redundancy Orchestrator (`master-redundancy-orchestrator.cjs`)

Coordinates all redundancy managers and provides system-wide oversight.

**Features:**
- Starts and monitors all individual managers
- System-wide health monitoring every hour
- Emergency recovery procedures
- Comprehensive reporting every 2 hours
- Automatic restart of failed managers

## Installation & Setup

### Prerequisites
- Node.js 20.18.1 or higher
- PM2 (will be auto-installed if missing)
- npm packages: `node-cron`

### Quick Start

1. **Start the entire system:**
 ```bash
 cd automation/redundancy
 chmod +x start-redundancy-system.sh
 ./start-redundancy-system.sh
 ```

2. **Check status:**
 ```bash
 ./start-redundancy-system.sh status
 ```

3. **Stop the system:**
 ```bash
 chmod +x stop-redundancy-system.sh
 ./stop-redundancy-system.sh
 ```

### Manual Management

#### Start Individual Managers

```bash
# PM2 Redundancy Manager
node pm2-redundancy-manager.cjs start

# GitHub Actions Redundancy Manager
node github-actions-redundancy-manager.cjs start

# Netlify Functions Redundancy Manager
node netlify-functions-redundancy-manager.cjs start

# Master Orchestrator
node master-redundancy-orchestrator.cjs start
```

#### Check Status

```bash
# Individual manager status
node pm2-redundancy-manager.cjs status
node github-actions-redundancy-manager.cjs status
node netlify-functions-redundancy-manager.cjs status

# Master orchestrator status
node master-redundancy-orchestrator.cjs status
```

#### Generate Reports

```bash
# Individual reports
node pm2-redundancy-manager.cjs report
node github-actions-redundancy-manager.cjs report
node netlify-functions-redundancy-manager.cjs report

# Comprehensive system report
node master-redundancy-orchestrator.cjs report
```

## Configuration

### Environment Variables

The system uses the following environment variables:

```bash
# PM2 Configuration
AUTO_SYNC_REMOTE=origin
AUTO_SYNC_BRANCH=main
AUTO_SYNC_STRATEGY=hardreset
AUTO_SYNC_CLEAN=1
AUTO_SYNC_GC=0

# GitHub Configuration
GITHUB_TOKEN=your_github_token # For workflow triggering

# Netlify Configuration
NETLIFY_TOKEN=your_netlify_token # For function deployment
```

### Logging

All logs are stored in `automation/logs/`:
- `pm2-redundancy.log`: PM2 manager logs
- `github-actions-redundancy.log`: GitHub manager logs
- `netlify-functions-redundancy.log`: Netlify manager logs
- `master-redundancy.log`: Master orchestrator logs

### Reports

Reports are generated in JSON format:
- `pm2-redundancy-report.json`: PM2 backup status
- `github-actions-redundancy-report.json`: Workflow backup status
- `netlify-functions-redundancy-report.json`: Function backup status
- `comprehensive-redundancy-report.json`: System-wide status

## Monitoring & Health Checks

### Health Check Schedule
- **Individual Managers**: Every 5-15 minutes
- **System Health**: Every hour
- **Comprehensive Reports**: Every 2 hours
- **Backup Triggers**: Every 6-24 hours (depending on type)

### Recovery Procedures

1. **Automatic Recovery**: Up to 3 attempts per component
2. **Manager Restart**: Failed managers are automatically restarted
3. **Emergency Recovery**: Full system restart when health < 50%
4. **Process Resurrection**: PM2 processes are resurrected if needed

### Health Indicators
- **Healthy**: Component operating normally
- **Unhealthy**: Component has issues but recovery is possible
- **Failed**: Component has failed and needs manual intervention
- **Stopped**: Component has been intentionally stopped

## Backup Strategies

### PM2 Processes
- **Enhanced Restart Policies**: Higher max restarts and exponential backoff
- **Dedicated Monitoring**: Separate process for health monitoring
- **Graceful Degradation**: Fallback to basic functionality if needed

### GitHub Actions
- **Reduced Frequency**: Backup workflows run less frequently to avoid conflicts
- **Manual Override**: Maintains manual dispatch capabilities
- **Conflict Avoidance**: Schedules adjusted to prevent overlap

### Netlify Functions
- **Function Wrapping**: Original functions wrapped with backup logic
- **Error Handling**: Graceful fallback responses on failures
- **Automatic Deployment**: Backup functions deployed automatically

## Troubleshooting

### Common Issues

1. **PM2 Process Failures**
 ```bash
 # Check PM2 status
 pm2 status
 
 # Restart specific process
 pm2 restart zion-auto-sync-backup
 ```

2. **GitHub Workflow Issues**
 ```bash
 # Check workflow health
 node github-actions-redundancy-manager.cjs health
 
 # Recreate backup workflows
 node github-actions-redundancy-manager.cjs backup
 ```

3. **Netlify Function Problems**
 ```bash
 # Test functions
 node netlify-functions-redundancy-manager.cjs test
 
 # Redeploy functions
 node netlify-functions-redundancy-manager.cjs deploy
 ```

### Emergency Procedures

1. **Force Stop All**
 ```bash
 ./stop-redundancy-system.sh force
 ```

2. **Emergency Recovery**
 ```bash
 node master-redundancy-orchestrator.cjs recovery
 ```

3. **Clean Restart**
 ```bash
 ./stop-redundancy-system.sh
 ./start-redundancy-system.sh
 ```

## Performance Considerations

### Resource Usage
- **Memory**: ~50-100MB per manager process
- **CPU**: Minimal during idle, spikes during operations
- **Disk**: Log files grow ~1-5MB per day
- **Network**: Minimal for health checks, moderate for deployments

### Optimization
- **Log Rotation**: Logs are automatically managed
- **Health Check Throttling**: Configurable intervals
- **Process Pooling**: Efficient process management
- **Error Rate Limiting**: Prevents cascade failures

## Security

### Access Control
- **Process Isolation**: Each manager runs independently
- **File Permissions**: Logs and reports use appropriate permissions
- **Environment Variables**: Sensitive data stored in environment
- **Network Security**: Minimal external network access

### Best Practices
- Keep environment variables secure
- Regularly rotate access tokens
- Monitor log files for suspicious activity
- Use least privilege principle for permissions

## Integration

### With Existing Systems

The redundancy system is designed to work alongside existing automation:
- **Non-Intrusive**: Doesn't modify existing processes
- **Parallel Operation**: Runs independently of primary systems
- **Failover Ready**: Automatically takes over when needed
- **Graceful Handoff**: Returns control when primary systems recover

### Customization

Each manager can be customized:

```javascript
// Example: Custom PM2 manager configuration
const manager = new PM2RedundancyManager();
manager.maxRestarts = 20;
manager.healthCheckInterval = 300000; // 5 minutes
```

## Support & Maintenance

### Regular Maintenance
- **Weekly**: Review logs and reports
- **Monthly**: Update backup strategies
- **Quarterly**: Performance review and optimization

### Updates
- **Automatic**: System updates itself when possible
- **Manual**: Critical updates require manual intervention
- **Rollback**: Previous versions can be restored

### Monitoring
- **Real-time**: Live status monitoring
- **Historical**: Trend analysis and reporting
- **Alerts**: Automatic notification of issues

## License

This redundancy system is part of the Zion.app automation infrastructure and follows the same licensing terms.

## Contributing

To contribute to the redundancy system:

1. Follow the existing code patterns
2. Add comprehensive logging
3. Include error handling
4. Update documentation
5. Test thoroughly before submitting

---

For questions or issues, check the logs in `automation/logs/` or run the status commands to diagnose problems.