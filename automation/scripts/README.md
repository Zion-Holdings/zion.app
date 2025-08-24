# Automation Error Fixing System

This directory contains scripts and tools to automatically detect, fix, and prevent automation system errors in the Zion.App.Clone project.

## 🚀 Quick Start

To immediately fix current errors and set up monitoring:

```bash
./automation/scripts/quick-start.sh
```

This will:
- Fix current automation errors
- Set up continuous monitoring
- Install cron jobs for automatic maintenance
- Start the monitoring system

## 📁 Scripts Overview

### Core Scripts

| Script | Purpose | Frequency |
|--------|---------|-----------|
| `fix-automation-errors.js` | Comprehensive error fixing | On-demand / Daily |
| `automation-health-check.js` | System health monitoring | Every 5 minutes |
| `automation-monitor.js` | Continuous monitoring | Always running |

### Setup Scripts

| Script | Purpose |
|--------|---------|
| `setup-cron-jobs.sh` | Install cron jobs for automation |
| `quick-start.sh` | Complete setup and immediate fix |

### Utility Scripts

| Script | Purpose |
|--------|---------|
| `health-check.sh` | Shell wrapper for health checks |
| `emergency-fix.sh` | Emergency system recovery |
| `start-monitor.sh` | Start monitoring system |
| `rotate-logs.sh` | Log rotation and cleanup |

## 🔧 Error Types Fixed

### 1. DependencyUpdater Errors
- **Issue**: `npm outdated --json` returns non-zero exit code
- **Fix**: Handle expected non-zero exit codes properly
- **Location**: `automation/tasks/DependencyUpdater.js`

### 2. NetlifyMonitor Errors
- **Issue**: `builds.slice is not a function`
- **Fix**: Add array validation before using slice
- **Location**: `automation/netlify-monitor.js`

### 3. Core Orchestrator Errors
- **Issue**: Startup failures and missing health checks
- **Fix**: Add error handling and health check methods
- **Location**: `automation/intelligent-automation-orchestrator.js`

### 4. Performance Monitoring Errors
- **Issue**: Bundle metrics failures
- **Fix**: Add proper error handling for bundle analysis
- **Location**: `automation/performance-monitor.js`

## 📊 Monitoring System

### Health Checks
- **Frequency**: Every 5 minutes
- **Checks**: System status, error logs, runtime issues
- **Actions**: Triggers fixes when issues detected

### Continuous Monitoring
- **Status**: Always running
- **Features**: Real-time error detection, automatic recovery
- **Logs**: `automation/logs/monitor.log`

### Error Analysis
- **Pattern Detection**: Identifies recurring error patterns
- **Critical Alerts**: Flags critical system failures
- **Fix Recommendations**: Suggests specific fixes

## 🕐 Cron Jobs

The system automatically sets up the following cron jobs:

| Schedule | Job | Purpose |
|----------|-----|---------|
| `*/5 * * * *` | Health Check | Monitor system every 5 minutes |
| `0 2 * * *` | Log Rotation | Clean up old logs daily |
| `0 * * * *` | Emergency Fix | Check for critical issues hourly |
| `@reboot` | Start Monitor | Restart monitoring on boot |
| `0 3 * * *` | Daily Fix | Comprehensive daily maintenance |

## 📁 Log Files

All logs are stored in `automation/logs/`:

| File | Purpose |
|------|---------|
| `error.log` | All error messages |
| `combined.log` | All log messages |
| `monitor.log` | Monitoring system logs |
| `health-check.log` | Health check results |
| `fix-cron.log` | Automated fix logs |
| `emergency-fix.log` | Emergency fix logs |

## 🛠️ Manual Commands

### Run Health Check
```bash
node automation/scripts/automation-health-check.js
```

### Fix Errors Manually
```bash
node automation/scripts/fix-automation-errors.js
```

### Start Monitoring
```bash
node automation/scripts/automation-monitor.js
```

### Emergency Fix
```bash
./automation/scripts/emergency-fix.sh
```

## 🔍 Troubleshooting

### Check System Status
```bash
# View current cron jobs
crontab -l

# Check if monitor is running
ps aux | grep automation-monitor

# View recent logs
tail -f automation/logs/monitor.log
```

### Common Issues

#### Monitor Not Starting
```bash
# Check Node.js version
node --version

# Check dependencies
npm list winston

# Check logs
tail -f automation/logs/monitor-error.log
```

#### Cron Jobs Not Working
```bash
# Check cron service
sudo systemctl status cron

# Check cron logs
sudo tail -f /var/log/cron

# Test cron job manually
./automation/scripts/health-check.sh
```

#### Permission Issues
```bash
# Make scripts executable
chmod +x automation/scripts/*.sh

# Check file permissions
ls -la automation/scripts/
```

## 📈 Performance Monitoring

The system includes performance monitoring:

- **Memory Usage**: Tracks Node.js memory consumption
- **CPU Usage**: Monitors CPU utilization
- **Bundle Analysis**: Analyzes build bundle sizes
- **Build Metrics**: Tracks build performance

## 🔒 Security

- All scripts run with minimal required permissions
- Log files are rotated to prevent disk space issues
- No sensitive data is logged
- Cron jobs use relative paths for portability

## 🚨 Emergency Procedures

### System Down
1. Run emergency fix: `./automation/scripts/emergency-fix.sh`
2. Check logs: `tail -f automation/logs/emergency-fix.log`
3. Restart monitoring: `./automation/scripts/start-monitor.sh`

### Critical Errors
1. Stop all automation: `pkill -f automation`
2. Run comprehensive fix: `node automation/scripts/fix-automation-errors.js`
3. Restart systems: `node automation/start-working-automations.js`

### Log Overflow
1. Rotate logs: `./automation/scripts/rotate-logs.sh`
2. Clean old backups: `find automation/logs/backups -name "*.gz" -mtime +30 -delete`

## 📞 Support

For issues with the automation error fixing system:

1. Check the logs in `automation/logs/`
2. Run health check: `node automation/scripts/automation-health-check.js`
3. Review this README for troubleshooting steps
4. Check system resources and permissions

## 🔄 Updates

The system automatically updates itself when fixes are applied. To manually update:

```bash
# Pull latest changes
git pull

# Re-run setup
./automation/scripts/quick-start.sh
```

## 📋 Configuration

Key configuration files:

- `automation/scripts/fix-automation-errors.js`: Main fix logic
- `automation/scripts/automation-health-check.js`: Health check rules
- `automation/scripts/automation-monitor.js`: Monitoring settings
- `automation/logs/health-status.json`: Health status persistence

## 🎯 Success Metrics

The system tracks:

- **Error Reduction**: Decrease in automation errors over time
- **Uptime**: System availability percentage
- **Fix Success Rate**: Percentage of successful automatic fixes
- **Response Time**: Time from error detection to fix application

---

**Last Updated**: $(date)
**Version**: 1.0.0
**Maintainer**: Automation System 