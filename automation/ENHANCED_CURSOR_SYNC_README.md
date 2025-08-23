# Enhanced Cursor Sync Automation

This system provides automated commit, push, and sync functionality for multi-computer Cursor usage, running every minute to prevent unsynced changes accumulation.

## Features

- 🔄 **Automatic Sync**: Runs every minute to sync changes
- 📊 **Comprehensive Metrics**: Tracks sync performance and statistics
- 🛡️ **Conflict Resolution**: Automatically resolves merge conflicts
- 💾 **Backup System**: Creates backups before major operations
- 📈 **Health Monitoring**: Continuous health checks and alerts
- 🔧 **Configurable**: Extensive configuration options
- 📱 **Multi-Platform**: Works on macOS, Linux, and Windows

## Quick Start

### 1. Setup (One-time)
```bash
# Run the complete setup
bash automation/setup-enhanced-cursor-sync-complete.sh
```

### 2. Start Automation
```bash
# Start the automation
bash automation/start-enhanced-cursor-sync.sh
```

### 3. Check Status
```bash
# Check current status
bash automation/enhanced-cursor-sync-status.sh
```

### 4. Stop Automation
```bash
# Stop the automation
bash automation/stop-enhanced-cursor-sync.sh
```

## Configuration

Edit `automation/enhanced-cursor-sync-config.json` to customize:

- Sync interval
- File inclusion/exclusion patterns
- Commit message templates
- Backup settings
- Notification settings

## Cron Jobs

The system installs the following cron jobs:

- **Every minute**: Enhanced cursor sync
- **Every 5 minutes**: Health check
- **Every 10 minutes**: Metrics collection
- **Daily at 2 AM**: Log rotation
- **Daily at 3 AM**: Backup cleanup
- **Every 30 minutes**: Status report

## Monitoring

### Logs
- Main log: `automation/logs/enhanced-cursor-sync.log`
- Cron log: `automation/logs/enhanced-cursor-sync-cron.log`
- Health log: `automation/logs/enhanced-cursor-sync-health.log`

### Metrics
- Metrics file: `automation/metrics/enhanced-sync-metrics.json`
- Dashboard: `automation/metrics/enhanced-sync-dashboard.json`
- Reports: `automation/metrics/enhanced-sync-report-YYYY-MM-DD.json`

### Backups
- Backup directory: `automation/backups/`
- Automatic cleanup of old backups

## Troubleshooting

### Check if automation is running
```bash
ps aux | grep enhanced-cursor-sync-automation
```

### View recent logs
```bash
tail -f automation/logs/enhanced-cursor-sync.log
```

### Check health status
```bash
bash automation/enhanced-cursor-sync-health-check.sh
```

### Manual sync
```bash
node automation/enhanced-cursor-sync-automation.js --once
```

## System Requirements

- Node.js 14+
- npm or yarn
- Git
- jq (optional, for enhanced script functionality)

## Support

For issues or questions:
1. Check the logs in `automation/logs/`
2. Run the health check script
3. Review the configuration file
4. Check system resources and network connectivity
