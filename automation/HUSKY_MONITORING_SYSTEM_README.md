# Husky Error Monitoring System

A comprehensive autonomous system for continuously detecting and fixing Husky errors in Git repositories.

## Overview

This system provides automated detection, monitoring, and fixing of Husky-related errors through multiple components:

- **Husky Error Detection Agent**: Core agent that detects and fixes Husky errors
- **Husky Monitor Factory**: Factory for creating and managing continuous monitoring instances
- **Husky Automation Orchestrator**: Master orchestrator that manages the entire system
- **Cron Jobs**: Automated scheduling for continuous monitoring
- **Launcher Script**: Easy-to-use script for starting/stopping the entire system

## Components

### 1. Husky Error Detection Agent (`husky-error-detection-agent.js`)

**Purpose**: Detects and fixes various Husky-related errors

**Features**:
- Detects missing Husky installation
- Checks Git hooks configuration
- Validates Husky configuration
- Tests hook execution
- Automatically fixes common issues
- Generates detailed reports

**Error Types Detected**:
- `HUSKY_NOT_INSTALLED`: Husky not found in package.json
- `GIT_HOOKS_MISSING`: Git hooks directory missing or empty
- `HUSKY_CONFIG_MISSING`: Husky configuration missing
- `HUSKY_HOOK_EXECUTION_ERROR`: Hook execution failures
- `GIT_REPOSITORY_ERROR`: Not in a Git repository

**Usage**:
```bash
node automation/husky-error-detection-agent.js
```

### 2. Husky Monitor Factory (`husky-monitor-factory.js`)

**Purpose**: Creates and manages continuous monitoring instances

**Features**:
- Spawns multiple monitoring agents
- Handles automatic restarts
- Manages concurrent monitors
- Provides health monitoring
- Generates factory reports

**Usage**:
```bash
node automation/husky-monitor-factory.js
```

### 3. Husky Automation Orchestrator (`husky-automation-orchestrator.js`)

**Purpose**: Master orchestrator for the entire monitoring system

**Features**:
- Manages agents, factories, and cron jobs
- Provides system-wide health monitoring
- Handles log rotation and cleanup
- Generates comprehensive reports
- Automatic error recovery

**Usage**:
```bash
node automation/husky-automation-orchestrator.js
```

### 4. Cron Job (`cron-jobs/husky-error-monitor-cron.sh`)

**Purpose**: Automated scheduling for continuous monitoring

**Features**:
- System health checks
- Process management
- Log rotation
- Status reporting
- Multiple operation modes

**Usage**:
```bash
# Start the monitoring system
./automation/cron-jobs/husky-error-monitor-cron.sh start

# Stop the monitoring system
./automation/cron-jobs/husky-error-monitor-cron.sh stop

# Check status
./automation/cron-jobs/husky-error-monitor-cron.sh status

# Run single test
./automation/cron-jobs/husky-error-monitor-cron.sh run
```

### 5. Launcher Script (`launch-husky-monitoring-system.sh`)

**Purpose**: Easy-to-use script for managing the entire system

**Features**:
- Prerequisites checking
- System startup/shutdown
- Status monitoring
- Log viewing
- Report generation

**Usage**:
```bash
# Start the system
./automation/launch-husky-monitoring-system.sh start

# Stop the system
./automation/launch-husky-monitoring-system.sh stop

# Check status
./automation/launch-husky-monitoring-system.sh status

# View logs
./automation/launch-husky-monitoring-system.sh logs

# View reports
./automation/launch-husky-monitoring-system.sh reports

# Run single test
./automation/launch-husky-monitoring-system.sh test
```

## Quick Start

1. **Start the monitoring system**:
   ```bash
   ./automation/launch-husky-monitoring-system.sh start
   ```

2. **Check system status**:
   ```bash
   ./automation/launch-husky-monitoring-system.sh status
   ```

3. **View recent logs**:
   ```bash
   ./automation/launch-husky-monitoring-system.sh logs
   ```

4. **View recent reports**:
   ```bash
   ./automation/launch-husky-monitoring-system.sh reports
   ```

5. **Stop the system**:
   ```bash
   ./automation/launch-husky-monitoring-system.sh stop
   ```

## Configuration

### System Configuration

The orchestrator uses the following configuration (in `husky-automation-orchestrator.js`):

```javascript
this.config = {
    maxAgents: 10,                    // Maximum number of agents
    maxFactories: 3,                  // Maximum number of factories
    maxCronJobs: 5,                   // Maximum number of cron jobs
    checkInterval: 60000,             // Health check interval (1 minute)
    reportInterval: 300000,           // Report generation interval (5 minutes)
    autoRestart: true,                // Auto-restart failed components
    alertThreshold: 5,                // Consecutive failures before alert
    maxLogSize: 100 * 1024 * 1024,   // Maximum log file size (100MB)
    cleanupInterval: 86400000         // Cleanup interval (24 hours)
};
```

### Factory Configuration

The monitor factory uses the following configuration (in `husky-monitor-factory.js`):

```javascript
this.config = {
    checkInterval: 300000,            // Check interval (5 minutes)
    maxRetries: 3,                    // Maximum retry attempts
    retryDelay: 60000,                // Retry delay (1 minute)
    maxConcurrentMonitors: 5,         // Maximum concurrent monitors
    autoRestart: true                 // Auto-restart failed monitors
};
```

## Error Detection Patterns

The system detects the following Husky error patterns:

- `husky.*not found`
- `husky.*command failed`
- `husky.*permission denied`
- `husky.*hook.*failed`
- `git.*hook.*failed`
- `pre-commit.*failed`
- `commit-msg.*failed`
- `pre-push.*failed`
- And many more Git hook patterns

## Automatic Fixes

The system can automatically fix the following issues:

1. **Missing Husky Installation**:
   - Installs Husky as a dev dependency
   - Initializes Husky configuration
   - Adds basic Git hooks

2. **Missing Git Hooks**:
   - Creates Git hooks directory
   - Adds standard Husky hooks
   - Sets proper permissions

3. **Missing Configuration**:
   - Adds Husky configuration to package.json
   - Creates .huskyrc file if needed
   - Configures basic hook scripts

4. **Hook Execution Errors**:
   - Fixes file permissions
   - Validates hook scripts
   - Ensures proper execution rights

5. **Git Repository Issues**:
   - Initializes Git repository if needed
   - Sets up proper Git configuration

## Logging and Reporting

### Log Files

- **Agent Logs**: `automation/logs/husky-error-detection-YYYY-MM-DD.log`
- **Factory Logs**: `automation/logs/husky-monitor-factory-YYYY-MM-DD.log`
- **Orchestrator Logs**: `automation/logs/husky-orchestrator-YYYY-MM-DD.log`
- **Cron Logs**: `automation/logs/husky-monitor-cron.log`
- **Launcher Logs**: `automation/logs/husky-launcher.log`

### Report Files

- **Agent Reports**: `automation/reports/husky-error-report-YYYY-MM-DD.json`
- **Factory Reports**: `automation/reports/factory-report-YYYY-MM-DD.json`
- **Orchestrator Reports**: `automation/reports/orchestrator-report-YYYY-MM-DD.json`
- **Status Reports**: `automation/reports/husky-monitor-status-YYYY-MM-DD.json`

### Report Structure

Reports include:
- Timestamp and component information
- Summary statistics
- Detailed error information
- Applied fixes
- Recommendations
- System health metrics

## Monitoring and Maintenance

### Health Checks

The system performs regular health checks:
- Process status monitoring
- Disk space monitoring
- Memory usage monitoring
- Log file size monitoring
- Component status verification

### Automatic Cleanup

The system automatically:
- Rotates large log files
- Removes old reports (7+ days)
- Cleans up dead processes
- Manages PID files

### Error Recovery

The system includes:
- Automatic restart of failed components
- Retry mechanisms with exponential backoff
- Alert thresholds for repeated failures
- Graceful shutdown handling

## Integration with Existing Systems

This system is designed to work alongside existing autonomous agents without interference:

- **Independent Operation**: Runs separately from existing agents
- **Non-Intrusive**: Doesn't modify existing agent factories
- **Resource Aware**: Respects system resource limits
- **Configurable**: Can be adjusted to work with existing systems

## Troubleshooting

### Common Issues

1. **Permission Denied**:
   ```bash
   chmod +x automation/launch-husky-monitoring-system.sh
   chmod +x automation/cron-jobs/husky-error-monitor-cron.sh
   ```

2. **Node.js Not Found**:
   ```bash
   # Install Node.js if not available
   brew install node  # macOS
   # or
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs  # Ubuntu/Debian
   ```

3. **Git Not Available**:
   ```bash
   # Install Git if not available
   brew install git  # macOS
   # or
   sudo apt-get install git  # Ubuntu/Debian
   ```

4. **Log Files Too Large**:
   ```bash
   # Manual log rotation
   mv automation/logs/husky-launcher.log automation/logs/husky-launcher.log.backup
   touch automation/logs/husky-launcher.log
   ```

### Debug Mode

To run in debug mode with verbose logging:

```bash
# Set debug environment variable
export HUSKY_DEBUG=1

# Start system with debug logging
./automation/launch-husky-monitoring-system.sh start
```

## Performance Considerations

- **Resource Usage**: The system is designed to be lightweight
- **Concurrent Limits**: Configurable limits prevent resource exhaustion
- **Log Rotation**: Automatic log rotation prevents disk space issues
- **Cleanup**: Regular cleanup prevents accumulation of old files

## Security Considerations

- **File Permissions**: Scripts are set to executable only for the owner
- **Log Security**: Logs contain no sensitive information
- **Process Isolation**: Each component runs in its own process
- **Error Handling**: Comprehensive error handling prevents system crashes

## Contributing

To extend the system:

1. **Add New Error Patterns**: Modify the `errorPatterns` array in the agent
2. **Add New Fixes**: Implement new fix methods in the agent
3. **Add New Components**: Create new components following the existing patterns
4. **Modify Configuration**: Update configuration objects as needed

## License

This system is part of the autonomous automation framework and follows the same licensing terms as the main project.
