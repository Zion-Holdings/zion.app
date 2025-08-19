# Ultimate Redundancy Automation System

## Overview

The Ultimate Redundancy Automation System provides comprehensive redundancy coverage for all existing automations in the project:

- **PM2 Process Management** - Monitoring, auto-recovery, and failover
- **GitHub Actions Workflows** - Validation, backup creation, and health monitoring
- **Netlify Functions** - Manifest monitoring, validation, and regeneration
- **Cross-System Health Monitoring** - Comprehensive health scoring and issue detection

## 🚀 Quick Start

### 1. Start the System

```bash
# Using the startup script
npm run redundancy:ultimate:automation:start

# Or directly with Node.js
npm run redundancy:ultimate:automation:node start
```

### 2. Check Status

```bash
# Check system status
npm run redundancy:ultimate:automation:status

# Run health check
npm run redundancy:ultimate:automation:health

# Run one-time check
npm run redundancy:ultimate:automation:once
```

### 3. Stop the System

```bash
npm run redundancy:ultimate:automation:stop
```

## 📋 Available Commands

### Main System Commands

| Command | Description | NPM Script |
|---------|-------------|------------|
| `start` | Start the redundancy system | `redundancy:ultimate:automation:start` |
| `stop` | Stop the redundancy system | `redundancy:ultimate:automation:stop` |
| `restart` | Restart the redundancy system | `redundancy:ultimate:automation:restart` |
| `status` | Show system status | `redundancy:ultimate:automation:status` |
| `logs` | Show system logs | `redundancy:ultimate:automation:logs` |
| `health` | Run health check | `redundancy:ultimate:automation:health` |
| `once` | Run one-time check | `redundancy:ultimate:automation:once` |
| `test` | Test the system | `redundancy:ultimate:automation:test` |

### PM2 Redundancy Commands

| Command | Description | NPM Script |
|---------|-------------|------------|
| `check` | Run comprehensive PM2 check | `redundancy:ultimate:pm2:check` |
| `health` | Run PM2 health check | `redundancy:ultimate:pm2:health` |
| `recover` | Run PM2 recovery | `redundancy:ultimate:pm2:recover` |
| `processes` | Recover PM2 processes only | `redundancy:ultimate:pm2:processes` |
| `system` | Recover PM2 system only | `redundancy:ultimate:pm2:system` |
| `status` | Show PM2 status | `redundancy:ultimate:pm2:status` |
| `once` | Run one-time PM2 check | `redundancy:ultimate:pm2:once` |

### GitHub Actions Redundancy Commands

| Command | Description | NPM Script |
|---------|-------------|------------|
| `check` | Run comprehensive GitHub check | `redundancy:ultimate:github:check` |
| `health` | Run GitHub health check | `redundancy:ultimate:github:health` |
| `recover` | Run GitHub recovery | `redundancy:ultimate:github:recover` |
| `backup` | Create backup workflows | `redundancy:ultimate:github:backup` |
| `validate` | Validate workflows only | `redundancy:ultimate:github:validate` |
| `status` | Show GitHub status | `redundancy:ultimate:github:status` |
| `once` | Run one-time GitHub check | `redundancy:ultimate:github:once` |

### Netlify Functions Redundancy Commands

| Command | Description | NPM Script |
|---------|-------------|------------|
| `check` | Run comprehensive Netlify check | `redundancy:ultimate:netlify:check` |
| `health` | Run Netlify health check | `redundancy:ultimate:netlify:health` |
| `recover` | Run Netlify recovery | `redundancy:ultimate:netlify:recover` |
| `backup` | Create backup functions | `redundancy:ultimate:netlify:backup` |
| `regenerate` | Regenerate functions manifest | `redundancy:ultimate:netlify:regenerate` |
| `status` | Show Netlify status | `redundancy:ultimate:netlify:status` |
| `once` | Run one-time Netlify check | `redundancy:ultimate:netlify:once` |

### PM2 Ecosystem Management

| Command | Description | NPM Script |
|---------|-------------|------------|
| `start` | Start PM2 with ultimate redundancy | `redundancy:ultimate:pm2:start` |
| `stop` | Stop PM2 ultimate redundancy | `redundancy:ultimate:pm2:stop` |
| `restart` | Restart PM2 ultimate redundancy | `redundancy:ultimate:pm2:restart` |
| `status` | Show PM2 status | `redundancy:ultimate:pm2:status` |
| `logs` | Show PM2 logs | `redundancy:ultimate:pm2:logs` |
| `reload` | Reload PM2 configuration | `redundancy:ultimate:pm2:reload` |
| `delete` | Delete PM2 ultimate redundancy | `redundancy:ultimate:pm2:delete` |

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REDUNDANCY_LOG_LEVEL` | Log level (INFO, WARN, ERROR, DEBUG) | `INFO` |
| `REDUNDANCY_CHECK_INTERVAL` | Main check interval in ms | `30000` |
| `REDUNDANCY_MAX_RETRIES` | Maximum recovery attempts | `3` |
| `REDUNDANCY_AUTO_RECOVERY` | Enable auto-recovery | `true` |
| `HEALTH_CHECK_INTERVAL` | Health check interval in ms | `60000` |

### PM2-Specific Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PM2_REDUNDANCY_LOG_LEVEL` | PM2 log level | `INFO` |
| `PM2_CHECK_INTERVAL` | PM2 check interval in ms | `30000` |
| `PM2_MAX_RETRIES` | PM2 max retries | `3` |
| `PM2_AUTO_RECOVERY` | Enable PM2 auto-recovery | `true` |
| `PM2_AUTO_RESTART` | Enable PM2 auto-restart | `true` |

### GitHub Actions-Specific Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `GITHUB_REDUNDANCY_LOG_LEVEL` | GitHub log level | `INFO` |
| `GITHUB_CHECK_INTERVAL` | GitHub check interval in ms | `60000` |
| `GITHUB_MAX_RETRIES` | GitHub max retries | `3` |
| `GITHUB_AUTO_RECOVERY` | Enable GitHub auto-recovery | `true` |
| `GITHUB_AUTO_BACKUP` | Enable GitHub auto-backup | `true` |

### Netlify Functions-Specific Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NETLIFY_REDUNDANCY_LOG_LEVEL` | Netlify log level | `INFO` |
| `NETLIFY_CHECK_INTERVAL` | Netlify check interval in ms | `120000` |
| `NETLIFY_MAX_RETRIES` | Netlify max retries | `3` |
| `NETLIFY_AUTO_RECOVERY` | Enable Netlify auto-recovery | `true` |
| `NETLIFY_AUTO_REGENERATE` | Enable Netlify auto-regeneration | `true` |

## 📁 File Structure

```
automation/
├── ultimate-redundancy-automation-system.cjs    # Main system
├── ultimate-pm2-redundancy.cjs                  # PM2 redundancy
├── ultimate-github-actions-redundancy.cjs       # GitHub Actions redundancy
├── ultimate-netlify-functions-redundancy.cjs    # Netlify Functions redundancy
├── start-ultimate-redundancy-automation.sh      # Startup script
└── logs/                                        # Log files

ecosystem.ultimate-redundancy-automation.cjs      # PM2 ecosystem file
```

## 🏥 Health Monitoring

### Health Score Calculation

The system calculates a comprehensive health score (0-100) based on:

- **PM2 Health (30 points)**
  - Daemon status
  - Process health
  - Ecosystem file validation

- **GitHub Actions Health (25 points)**
  - Workflow validation
  - Backup workflows
  - Trigger and job structure

- **Netlify Functions Health (20 points)**
  - Functions manifest
  - Function validation
  - Deployment status

- **Cross-System Issues (25 points)**
  - Validation errors
  - Recovery attempts
  - System warnings

### Health Status Levels

- **Healthy (80-100)**: All systems operational
- **Warning (50-79)**: Minor issues detected
- **Critical (0-49)**: Major issues requiring attention

## 🔄 Auto-Recovery Features

### PM2 Auto-Recovery

- Automatic process restart for stopped/errored processes
- Ecosystem file validation and fallback
- System-wide recovery with multiple ecosystem options

### GitHub Actions Auto-Recovery

- Automatic backup workflow creation
- Workflow validation and structure checking
- Trigger and job pattern validation

### Netlify Functions Auto-Recovery

- Automatic manifest regeneration
- Function validation and backup creation
- Deployment status monitoring

## 📊 Monitoring and Logging

### Log Files

- `ultimate-redundancy.log` - Main system logs
- `ultimate-pm2.log` - PM2 redundancy logs
- `ultimate-github-actions.log` - GitHub Actions logs
- `ultimate-netlify-functions.log` - Netlify Functions logs

### Status Files

- `ultimate-redundancy-status.json` - Main system status
- `ultimate-pm2-status.json` - PM2 system status
- `ultimate-github-actions-status.json` - GitHub Actions status
- `ultimate-netlify-functions-status.json` - Netlify Functions status

## 🚨 Troubleshooting

### Common Issues

1. **PM2 Not Available**
   ```bash
   npm install -g pm2
   ```

2. **Permission Denied**
   ```bash
   chmod +x automation/start-ultimate-redundancy-automation.sh
   ```

3. **Log Directory Issues**
   ```bash
   mkdir -p automation/logs
   ```

4. **Ecosystem File Errors**
   ```bash
   npm run redundancy:ultimate:pm2:check
   ```

### Recovery Procedures

1. **Full System Recovery**
   ```bash
   npm run redundancy:ultimate:automation:restart
   ```

2. **PM2 Recovery**
   ```bash
   npm run redundancy:ultimate:pm2:recover
   ```

3. **GitHub Actions Recovery**
   ```bash
   npm run redundancy:ultimate:github:recover
   ```

4. **Netlify Functions Recovery**
   ```bash
   npm run redundancy:ultimate:netlify:recover
   ```

## 🔗 Integration

### GitHub Actions Workflow

The system includes a comprehensive GitHub Actions workflow (`ultimate-redundancy-automation.yml`) that:

- Runs every 5 minutes
- Validates all redundancy systems
- Creates backup workflows automatically
- Generates status reports
- Commits health status to the repository

### PM2 Ecosystem Integration

The system integrates with existing PM2 ecosystems:

- `ecosystem.comprehensive-redundancy.cjs` - Legacy redundancy
- `ecosystem.pm2.cjs` - Basic PM2 processes
- `ecosystem.ultimate-redundancy-automation.cjs` - New ultimate system

## 📈 Performance

### Resource Usage

- **Memory**: ~50-100MB per redundancy system
- **CPU**: Minimal during idle, spikes during checks
- **Disk**: ~10-50MB for logs and status files
- **Network**: Minimal, only for GitHub API calls

### Optimization Tips

1. **Adjust Check Intervals**
   ```bash
   export REDUNDANCY_CHECK_INTERVAL=60000  # 1 minute
   export HEALTH_CHECK_INTERVAL=300000     # 5 minutes
   ```

2. **Disable Auto-Recovery**
   ```bash
   export REDUNDANCY_AUTO_RECOVERY=false
   ```

3. **Reduce Log Verbosity**
   ```bash
   export REDUNDANCY_LOG_LEVEL=WARN
   ```

## 🔒 Security

### Access Control

- All scripts run with current user permissions
- No elevated privileges required
- Log files contain only system information
- Status files contain no sensitive data

### Best Practices

1. **Regular Log Rotation**
   ```bash
   # Add to crontab
   0 0 * * * find automation/logs -name "*.log" -mtime +7 -delete
   ```

2. **Status File Backup**
   ```bash
   # Backup status files
   cp automation/*.json automation/backups/
   ```

3. **Monitor Log Files**
   ```bash
   # Check for errors
   grep ERROR automation/logs/*.log
   ```

## 📚 API Reference

### Main System Class

```javascript
const UltimateRedundancyAutomationSystem = require('./automation/ultimate-redundancy-automation-system.cjs');

const system = new UltimateRedundancyAutomationSystem();
await system.runFullCheck();
const status = system.getStatus();
```

### PM2 Redundancy Class

```javascript
const UltimatePM2Redundancy = require('./automation/ultimate-pm2-redundancy.cjs');

const pm2 = new UltimatePM2Redundancy();
await pm2.runFullCheck();
await pm2.runRecovery();
```

### GitHub Actions Redundancy Class

```javascript
const UltimateGitHubActionsRedundancy = require('./automation/ultimate-github-actions-redundancy.cjs');

const github = new UltimateGitHubActionsRedundancy();
await github.runFullCheck();
await github.createBackupWorkflows();
```

### Netlify Functions Redundancy Class

```javascript
const UltimateNetlifyFunctionsRedundancy = require('./automation/ultimate-netlify-functions-redundancy.cjs');

const netlify = new UltimateNetlifyFunctionsRedundancy();
await netlify.runFullCheck();
await netlify.regenerateFunctionsManifest();
```

## 🤝 Contributing

### Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm run redundancy:ultimate:automation:test
   ```

4. **Make changes and test**
   ```bash
   npm run redundancy:ultimate:automation:once
   ```

### Testing

```bash
# Test individual components
npm run redundancy:ultimate:pm2:once
npm run redundancy:ultimate:github:once
npm run redundancy:ultimate:netlify:once

# Test full system
npm run redundancy:ultimate:automation:test
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Getting Help

1. **Check the logs**
   ```bash
   npm run redundancy:ultimate:automation:logs
   ```

2. **Run health check**
   ```bash
   npm run redundancy:ultimate:automation:health
   ```

3. **Check system status**
   ```bash
   npm run redundancy:ultimate:automation:status
   ```

4. **Review documentation**
   - This README
   - Individual script help (run without arguments)
   - Log files in `automation/logs/`

### Reporting Issues

When reporting issues, please include:

- Command that failed
- Error message
- System status output
- Relevant log entries
- Environment information

---

**Note**: This system is designed to provide redundancy for existing automations. It does not replace them but rather ensures they continue operating even when issues arise.