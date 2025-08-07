# Automation Monitor and Maintainer System

## Overview

This system continuously monitors all automation factories, agents, scripts, and cron jobs in the project, automatically fixing issues and maintaining system health.

## Features

- **Continuous Monitoring**: Monitors all automation components every 2 minutes
- **Automatic Error Detection**: Identifies and reports issues with automation components
- **Automatic Fixing**: Attempts to fix common issues automatically
- **Performance Optimization**: Continuously optimizes system performance
- **Backup Management**: Creates regular backups every 6 hours
- **Cleanup Operations**: Performs daily cleanup to maintain system efficiency
- **Comprehensive Reporting**: Generates detailed reports every hour

## System Components

### Factories
- Monitors all automation factories
- Checks health status and performance
- Automatically restarts failed factories

### Agents
- Monitors all automation agents
- Tracks process status and health
- Performs error recovery

### Scripts
- Monitors all automation scripts
- Validates syntax and dependencies
- Fixes common issues

### Cron Jobs
- Monitors all scheduled cron jobs
- Tracks execution status
- Performs error recovery

## Usage

### Start the System
```bash
./automation/start-automation-monitor.sh
```

### Stop the System
```bash
./automation/stop-automation-monitor.sh
```

### Check Status
```bash
./automation/status-automation-monitor.sh
```

### Manual Health Check
```bash
./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh health
```

### Generate Report
```bash
./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh report
```

### View Logs
```bash
./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh logs
```

## Configuration

The system is configured via `automation/automation-monitor-config.json`:

- `healthCheckInterval`: How often to perform health checks (default: every 2 minutes)
- `errorThreshold`: Maximum number of errors before taking action (default: 3)
- `performanceThreshold`: Minimum performance threshold (default: 0.8)
- `maxRetries`: Maximum retry attempts for failed operations (default: 3)
- `backupInterval`: How often to create backups (default: every 6 hours)
- `cleanupInterval`: When to perform cleanup (default: daily at 2 AM)
- `reportInterval`: How often to generate reports (default: every hour)

## Monitoring Schedule

- **Health Checks**: Every 2 minutes
- **Error Detection**: Every minute
- **Performance Optimization**: Every 5 minutes
- **Backup Creation**: Every 6 hours
- **System Cleanup**: Daily at 2 AM
- **Report Generation**: Every hour

## Directory Structure

```
automation/
├── automation-monitor-and-maintainer-factory.js     # Main factory
├── launch-automation-monitor-and-maintainer.js     # System launcher
├── automation-monitor-config.json                  # Configuration
├── start-automation-monitor.sh                     # Startup script
├── stop-automation-monitor.sh                      # Shutdown script
├── status-automation-monitor.sh                    # Status script
├── cron-jobs/
│   └── automation-monitor-and-maintainer-cron.sh   # Cron manager
├── logs/                                           # System logs
├── reports/                                        # Generated reports
├── health-reports/                                 # Health check reports
├── error-logs/                                     # Error logs
├── backups/                                        # System backups
├── monitoring-data/                                # Monitoring data
└── maintenance-logs/                               # Maintenance logs
```

## Troubleshooting

### System Not Starting
1. Check if Node.js is installed: `node --version`
2. Check if dependencies are installed: `npm list`
3. Check logs: `./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh logs`

### System Not Monitoring
1. Check if system is running: `./automation/status-automation-monitor.sh`
2. Check cron jobs: `crontab -l`
3. Check configuration: `cat automation/automation-monitor-config.json`

### Performance Issues
1. Check system resources: `./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh health`
2. Review logs for errors
3. Check disk space: `df -h`

## Support

For issues or questions, check the logs in `automation/logs/` and reports in `automation/reports/`.
