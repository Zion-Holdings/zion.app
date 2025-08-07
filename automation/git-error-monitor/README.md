# Git Error Monitoring System

A comprehensive autonomous system for continuously monitoring and fixing git process errors. This system consists of multiple specialized agents that work together to detect, diagnose, and automatically resolve git-related issues.

## System Components

### Core Agents

1. **Git Error Monitor** (`git-error-monitor.js`)
   - Continuously monitors git status, processes, locks, and configuration
   - Detects common git errors and issues
   - Runs checks every minute

2. **Git Error Fixer** (`git-error-fixer.js`)
   - Automatically fixes detected git errors
   - Handles merge conflicts, status errors, and configuration issues
   - Runs fixes every 5 minutes

3. **Git Process Monitor** (`git-process-monitor.js`)
   - Monitors git processes for health issues
   - Kills unhealthy or stuck git processes
   - Checks process health every 30 seconds

4. **Git Lock Cleaner** (`git-lock-cleaner.js`)
   - Removes stale git lock files
   - Prevents git operations from being blocked
   - Cleans locks every 2 minutes

5. **Git Error Orchestrator** (`git-error-orchestrator.js`)
   - Coordinates all other agents
   - Monitors agent health and restarts failed agents
   - Orchestrates the entire system every minute

## Installation

1. Navigate to the git error monitoring directory:

   ```bash
   cd automation/git-error-monitoring
```

2. Make scripts executable:

   ```bash
   chmod +x *.sh
```

3. Start the system:

   ```bash
   ./start-git-error-monitoring.sh
```

## Usage

### Starting the System

```bash
./start-git-error-monitoring.sh
```

### Stopping the System

```bash
./stop-git-error-monitoring.sh
```

### Checking Status

```bash
./status-git-error-monitoring.sh
```

### Setting up Cron Job

Add to your crontab to ensure the system stays running:

```bash
# Check every 5 minutes
*/5 * * * * /path/to/automation/git-error-monitor/cron-git-error-monitoring.sh
```

## Features

### Error Detection

- Git status errors
- Merge conflicts
- Stale lock files
- Unhealthy git processes
- Configuration issues

### Automatic Fixes

- Removes stale lock files
- Kills stuck git processes
- Resets git status when needed
- Fixes git configuration
- Aborts problematic merges

### Monitoring & Reporting

- Continuous health monitoring
- Detailed logging
- Performance reports
- Agent status tracking
- Error statistics

### System Management

- Automatic agent restart on failure
- Process health monitoring
- Log rotation and cleanup
- PID file management
- Graceful shutdown handling

## Directory Structure

```
git-error-monitor/
├── git-error-monitor.js          # Main monitoring agent
├── git-error-fixer.js            # Error fixing agent
├── git-process-monitor.js        # Process monitoring agent
├── git-lock-cleaner.js          # Lock file cleaner
├── git-error-orchestrator.js    # System orchestrator
├── start-git-error-monitoring.sh # Startup script
├── stop-git-error-monitoring.sh  # Shutdown script
├── status-git-error-monitoring.sh # Status checker
├── cron-git-error-monitoring.sh  # Cron job script
├── logs/                         # Log files
├── reports/                      # Status reports
├── fixes/                        # Fix reports
└── README.md                     # This file
```

## Log Files

- `logs/git-error-monitor-YYYY-MM-DD.log` - Main monitor logs
- `logs/git-error-fixer-YYYY-MM-DD.log` - Fixer logs
- `logs/git-process-monitor-YYYY-MM-DD.log` - Process monitor logs
- `logs/git-lock-cleaner-YYYY-MM-DD.log` - Lock cleaner logs
- `logs/git-error-orchestrator-YYYY-MM-DD.log` - Orchestrator logs
- `logs/cron-git-error-monitoring.log` - Cron job logs

## Report Files

- `reports/git-error-report-YYYY-MM-DD.json` - Error reports
- `reports/git-process-report-YYYY-MM-DD.json` - Process reports
- `reports/git-lock-report-YYYY-MM-DD.json` - Lock reports
- `reports/git-error-orchestrator-report-YYYY-MM-DD.json` - Orchestrator reports

## Configuration

The system is designed to work out of the box with sensible defaults:

- **Check intervals**: 30 seconds to 5 minutes depending on agent
- **Lock file age threshold**: 5 minutes (stale locks are removed)
- **Process health thresholds**: 80% CPU, 50% memory
- **Log retention**: 7 days
- **Report retention**: 30 days

## Troubleshooting

### Check if agents are running

```bash
./status-git-error-monitoring.sh
```

### View recent logs

```bash
tail -f logs/git-error-monitor-$(date +%Y-%m-%d).log
```

### Restart the system

```bash
./stop-git-error-monitoring.sh
./start-git-error-monitoring.sh
```

### Manual cleanup

```bash
# Remove all PID files
rm -f *.pid

# Clean old logs
find logs/ -name "*.log" -mtime +7 -delete

# Clean old reports
find reports/ -name "*.json" -mtime +30 -delete
```
```
```

## Safety Features

- **Graceful shutdown**: Agents respond to SIGTERM/SIGINT
- **PID file management**: Prevents duplicate processes
- **Error handling**: Comprehensive error catching and logging
- **Resource limits**: Prevents excessive resource usage
- **Log rotation**: Automatic cleanup of old logs and reports

## Integration

This system is designed to work alongside existing automation without interference. It:

- Uses separate PID files and log directories
- Doesn't modify existing autonomous agents
- Can be started/stopped independently
- Provides its own monitoring and reporting

## Performance

The system is designed to be lightweight:

- Minimal CPU usage (checks every 30 seconds to 5 minutes)
- Low memory footprint
- Efficient log rotation
- Non-blocking operations

## Security

- Only operates on git-related processes
- Doesn't require elevated privileges
- Safe process termination
- Secure file handling

## Support

For issues or questions about the git error monitoring system:

1. Check the logs in the `logs/` directory
2. Run the status script to verify agent health
3. Restart the system if needed
4. Review the reports for detailed information

The system is designed to be self-healing and should resolve most git-related issues automatically.


```
```

```
```

```
```

```
