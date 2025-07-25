# Cursor Sync Automation System

## Overview

The Cursor Sync Automation System is a comprehensive solution for automatically committing, pushing, and syncing changes across all computers using Cursor. The system runs every minute to prevent unsynced changes and ensures all team members have the latest code.

## Features

- **🔄 Automatic Sync**: Runs every minute to detect and sync changes
- **🤖 Multi-Computer Support**: Coordinates sync across multiple computers
- **⚡ Conflict Resolution**: Automatically resolves merge conflicts
- **📊 Metrics & Monitoring**: Tracks sync performance and health
- **🛡️ Error Handling**: Robust retry mechanism with configurable attempts
- **📝 Conventional Commits**: Uses proper commit message format
- **🔧 Health Monitoring**: Continuous system health checks
- **💾 Backup System**: Automatic backup of sync state and configuration

## System Components

### Core Scripts

1. **`cursor-sync-automation.js`** - Main sync automation script
2. **`cursor-sync-orchestrator.js`** - Multi-computer coordination
3. **`cursor-sync-metrics.js`** - Metrics collection and reporting
4. **`cursor-sync-health-check.sh`** - Health monitoring
5. **`cursor-sync-system-health.sh`** - Comprehensive system health
6. **`cursor-sync-backup.sh`** - Backup automation
7. **`cursor-sync-comprehensive-status.sh`** - Status reporting

### Configuration Files

1. **`cursor-sync-config.json`** - Basic sync configuration
2. **`cursor-sync-orchestrator-config.json`** - Orchestrator configuration

### Management Scripts

1. **`setup-cursor-sync-complete.sh`** - Complete system installation
2. **`quick-start-cursor-sync.sh`** - Quick start automation
3. **`stop-cursor-sync.sh`** - Stop automation
4. **`cursor-sync-cron.sh`** - Cron job setup

## Installation

### Quick Setup

```bash
# Run the complete setup script
bash automation/setup-cursor-sync-complete.sh
```

### Manual Setup

1. **Install cron jobs**:
   ```bash
   bash automation/cursor-sync-cron.sh
   ```

2. **Make scripts executable**:
   ```bash
   chmod +x automation/cursor-sync-automation.js
   chmod +x automation/cursor-sync-orchestrator.js
   chmod +x automation/cursor-sync-metrics.js
   ```

3. **Start automation**:
   ```bash
   bash automation/quick-start-cursor-sync.sh
   ```

## Usage

### Starting the System

```bash
# Quick start (recommended)
bash automation/quick-start-cursor-sync.sh

# Manual start
node automation/cursor-sync-automation.js continuous &
node automation/cursor-sync-orchestrator.js continuous &
```

### Stopping the System

```bash
bash automation/stop-cursor-sync.sh
```

### Checking Status

```bash
# Comprehensive status
bash automation/cursor-sync-comprehensive-status.sh

# Health check
bash automation/cursor-sync-health-check.sh

# System health
bash automation/cursor-sync-system-health.sh
```

### Manual Sync

```bash
# Single sync
node automation/cursor-sync-automation.js once

# Orchestrated sync
node automation/cursor-sync-orchestrator.js once

# Generate metrics
node automation/cursor-sync-metrics.js
```

## Cron Jobs

The system installs the following cron jobs:

- **Every minute**: Main sync automation
- **Every 2 minutes**: Orchestrator sync (backup)
- **Every 5 minutes**: Health check
- **Every 10 minutes**: Metrics collection
- **Every 30 minutes**: System health check
- **Daily at 2 AM**: Log rotation
- **Daily at 3 AM**: Backup creation

## Configuration

### Basic Sync Configuration (`cursor-sync-config.json`)

```json
{
  "enabled": true,
  "autoCommit": true,
  "autoPush": true,
  "autoPull": true,
  "branch": "main",
  "syncInterval": 60000,
  "maxRetries": 3,
  "retryDelay": 5000,
  "excludePatterns": [
    "node_modules/**",
    ".next/**",
    "dist/**"
  ],
  "includePatterns": [
    "src/**/*",
    "pages/**/*",
    "components/**/*"
  ]
}
```

### Orchestrator Configuration (`cursor-sync-orchestrator-config.json`)

```json
{
  "enabled": true,
  "syncInterval": 60000,
  "maxConcurrentSyncs": 1,
  "conflictResolution": "auto",
  "enableNotifications": true,
  "enableMetrics": true,
  "computerId": "auto-generated",
  "centralRepository": "origin",
  "branch": "main"
}
```

## Monitoring

### Log Files

- `automation/logs/cursor-sync-cron.log` - Cron job logs
- `automation/logs/cursor-sync.log` - Main sync logs
- `automation/logs/cursor-sync-orchestrator.log` - Orchestrator logs
- `automation/logs/cursor-sync-health.log` - Health check logs
- `automation/logs/cursor-sync-metrics.log` - Metrics logs

### Metrics

- `automation/metrics/cursor-sync-metrics.json` - Current metrics
- `automation/metrics/cursor-sync-report-YYYY-MM-DD.json` - Daily reports

### State Files

- `automation/logs/sync-state.json` - Sync state
- `automation/logs/computer-registry.json` - Computer registry
- `automation/logs/last-sync-time.json` - Last sync timestamp

## Troubleshooting

### Common Issues

1. **Commit Message Rejected**
   - The system now uses conventional commit format (`chore(sync): ...`)
   - Should pass all husky pre-commit hooks

2. **Merge Conflicts**
   - System automatically resolves conflicts by resetting to clean state
   - Conflicts are logged in sync state

3. **Cron Jobs Not Running**
   - Check if cron service is running: `sudo service cron status`
   - Verify cron jobs: `crontab -l`

4. **Permission Issues**
   - Ensure scripts are executable: `chmod +x automation/*.js automation/*.sh`
   - Check file permissions on log directories

### Debug Commands

```bash
# Check cron job status
crontab -l | grep cursor-sync

# Check process status
ps aux | grep cursor-sync

# Check log files
tail -f automation/logs/cursor-sync-cron.log
tail -f automation/logs/cursor-sync.log

# Test manual sync
node automation/cursor-sync-automation.js once

# Check git status
git status --porcelain
```

## Performance

### Optimization Tips

1. **Exclude Large Files**: Add large files/directories to `excludePatterns`
2. **Adjust Sync Interval**: Modify `syncInterval` in config files
3. **Monitor Logs**: Regularly check log file sizes
4. **Clean Old Logs**: Log rotation happens automatically

### Resource Usage

- **CPU**: Minimal (runs for ~1-5 seconds every minute)
- **Memory**: ~10-50MB per process
- **Disk**: Log files grow ~1-5MB per day
- **Network**: Depends on change frequency

## Security

### Best Practices

1. **Git Credentials**: Use SSH keys or credential managers
2. **File Permissions**: Ensure log files are not world-readable
3. **Network Security**: Use HTTPS for git remotes
4. **Access Control**: Limit who can modify automation scripts

### Configuration Security

- Configuration files contain no sensitive data
- All paths are relative to project root
- No external API keys required
- Uses standard git authentication

## Integration

### With Existing Workflows

- **Husky Hooks**: Compatible with existing pre-commit hooks
- **CI/CD**: Can trigger builds on push
- **Code Review**: Conventional commits work with PR templates
- **Monitoring**: Integrates with existing monitoring systems

### Customization

- **Custom Commit Messages**: Modify `generateCommitMessage()` functions
- **Additional Checks**: Add custom validation in sync scripts
- **Notifications**: Configure Slack/email notifications
- **Metrics**: Extend metrics collection for custom KPIs

## Support

### Getting Help

1. **Check Status**: `bash automation/cursor-sync-comprehensive-status.sh`
2. **Review Logs**: Check log files in `automation/logs/`
3. **Test Manually**: Run single sync to isolate issues
4. **Check Configuration**: Verify config files are valid JSON

### Maintenance

- **Daily**: Check status and logs
- **Weekly**: Review metrics and performance
- **Monthly**: Clean old backups and logs
- **Quarterly**: Review and update configuration

## Changelog

### Version 1.0.0 (2025-07-25)

- ✅ Initial release
- ✅ Automatic sync every minute
- ✅ Multi-computer coordination
- ✅ Conflict resolution
- ✅ Metrics and monitoring
- ✅ Health checks
- ✅ Backup system
- ✅ Conventional commit format
- ✅ Comprehensive documentation

## License

This automation system is part of the Zion.App.Clone project and follows the same licensing terms.

---

**Note**: This automation system is designed to work seamlessly with Cursor and git workflows. It automatically handles the commit, push, and sync operations to ensure all team members have the latest changes without manual intervention. 