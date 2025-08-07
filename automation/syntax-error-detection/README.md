# Syntax Error Detection and Fixing System

A comprehensive autonomous system for continuously detecting and fixing syntax errors in codebases.

## Overview

This system provides automated syntax error detection, fixing, and monitoring capabilities for various file types including JavaScript, TypeScript, JSON, CSS, HTML, and Markdown.

## Components

### Core Components

1. **Syntax Error Detector** (`syntax-error-detector.js`)
   - Scans the entire codebase for syntax errors
   - Supports multiple file types
   - Generates detailed reports
   - Logs all activities

2. **Syntax Error Fixer** (`syntax-error-fixer.js`)
   - Automatically fixes common syntax errors
   - Creates backups before making changes
   - Supports pattern-based fixes
   - Handles multiple file types

3. **Automation Orchestrator** (`syntax-automation-orchestrator.js`)
   - Coordinates detection and fixing cycles
   - Manages continuous operation
   - Handles auto-commit functionality
   - Provides configuration management

4. **System Monitor** (`monitoring/syntax-monitor.js`)
   - Real-time system health monitoring
   - Dashboard generation
   - Error statistics and trends
   - Health check functionality

### Factory System

5. **Agent Factory** (`factories/syntax-agent-factory.js`)
   - Generates custom syntax agents
   - Creates specialized detectors and fixers
   - Supports configuration-based agent creation
   - Package generation capabilities

### Automation Scripts

6. **System Launcher** (`launch-syntax-system.sh`)
   - Complete system management
   - Start/stop/restart functionality
   - Status monitoring
   - Log viewing capabilities

7. **Cron Job** (`syntax-cron-job.sh`)
   - Scheduled execution
   - Automated cycles
   - Error handling

## Features

### Detection Capabilities

- **JavaScript/JSX**: Syntax validation, missing semicolons, bracket matching
- **TypeScript/TSX**: Type checking, import validation, interface verification
- **JSON**: Format validation, quote checking, bracket matching
- **CSS/SCSS**: Brace matching, property validation, semicolon checking
- **HTML**: Tag matching, attribute validation, structure verification
- **Markdown**: Link validation, header formatting, structure checking

### Fixing Capabilities

- **Automatic Corrections**: Common syntax errors are automatically fixed
- **Backup Creation**: All changes are backed up before modification
- **Pattern-Based Fixes**: Configurable fix patterns for different file types
- **Safe Operations**: Validation before applying fixes

### Monitoring Features

- **Real-time Status**: Component health monitoring
- **Error Tracking**: Historical error data and trends
- **Dashboard**: Visual system status and statistics
- **Health Checks**: Automated system diagnostics

### Automation Features

- **Continuous Operation**: 24/7 monitoring and fixing
- **Auto-Commit**: Automatic git commits for fixes
- **Configurable Intervals**: Adjustable detection and fixing cycles
- **Error Recovery**: Automatic retry mechanisms

## Installation

1. Ensure Node.js is installed on your system
2. Navigate to the syntax error detection directory:

   ```bash
   cd automation/syntax-error-detection
   ```

````

3. Make scripts executable:

   ```bash
   chmod +x *.js *.sh
   chmod +x monitoring/*.js
   chmod +x factories/*.js
````

## Usage

### Quick Start

1. **Start the complete system**:

   ```bash
   ./launch-syntax-system.sh start
   ```

````

2. **Check system status**:

   ```bash
   ./launch-syntax-system.sh status
````

3. **Run a single cycle**:

   ```bash
   ./launch-syntax-system.sh cycle
   ```

````

4. **View logs**:

   ```bash
   ./launch-syntax-system.sh logs detector
````

### Individual Components

#### Syntax Error Detector

```bash
# Run detection once
node syntax-error-detector.js

# Check status
cat status.json
```

#### Syntax Error Fixer

```bash
# Fix errors from latest report
node syntax-error-fixer.js

# Check fixer status
cat fixer-status.json
```

#### Automation Orchestrator

```bash
# Run single cycle
node syntax-automation-orchestrator.js once

# Run continuous mode
node syntax-automation-orchestrator.js continuous
```

#### System Monitor

```bash
# Start monitoring
node monitoring/syntax-monitor.js monitor

# Run health check
node monitoring/syntax-monitor.js health

# Get system status
node monitoring/syntax-monitor.js status
```

### Factory System

#### Create Custom Agents

```bash
# Create custom detector
node factories/syntax-agent-factory.js detector '{"name":"my-detector","fileExtensions":[".js",".ts"]}'

# Create custom fixer
node factories/syntax-agent-factory.js fixer '{"name":"my-fixer","jsPatterns":[{"pattern":"regex","replacement":"fix","description":"description"}]}'

# Create complete package
node factories/syntax-agent-factory.js package '{"name":"my-package","detector":{"fileExtensions":[".js",".ts"]},"fixer":{"jsPatterns":[]},"orchestrator":{"defaultConfig":{"detectionInterval":600000}}}'
```

### Cron Jobs

#### Setup Cron Job

```bash
# Add to crontab for every 5 minutes
*/5 * * * * /path/to/automation/syntax-error-detection/syntax-cron-job.sh

# Add to crontab for every hour
0 * * * * /path/to/automation/syntax-error-detection/syntax-cron-job.sh
```

## Configuration

### Orchestrator Configuration

Edit `orchestrator-config.json`:

```json
{
  "detectionInterval": 300000,
  "fixingEnabled": true,
  "autoCommit": true,
  "maxRetries": 3,
  "backupEnabled": true,
  "notificationEnabled": false
}
```

### Custom Agent Configuration

```json
{
  "name": "custom-agent",
  "fileExtensions": [".js", ".ts", ".jsx", ".tsx"],
  "skipDirectories": ["node_modules", ".git"],
  "jsPatterns": [
    {
      "pattern": "regex",
      "replacement": "fix",
      "description": "description"
    }
  ]
}
```

## File Structure

```
syntax-error-detection/
├── syntax-error-detector.js          # Main detector
├── syntax-error-fixer.js             # Main fixer
├── syntax-automation-orchestrator.js # Main orchestrator
├── syntax-cron-job.sh               # Cron job script
├── launch-syntax-system.sh          # System launcher
├── README.md                        # This file
├── logs/                            # Log files
├── reports/                         # Generated reports
├── backups/                         # File backups
├── pids/                           # Process IDs
├── monitoring/
│   └── syntax-monitor.js           # System monitor
└── factories/
    └── syntax-agent-factory.js     # Agent factory
```

## Reports and Logs

### Report Structure

```json
{
  "id": "report-id",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "totalErrors": 10,
  "filesWithErrors": 5,
  "errors": [
    {
      "file": "path/to/file.js",
      "errors": [
        {
          "line": 10,
          "column": 5,
          "message": "Syntax error description",
          "severity": "ERROR"
        }
      ]
    }
  ],
  "summary": {
    "bySeverity": { "ERROR": 8, "WARNING": 2 },
    "byFileType": { ".js": 6, ".ts": 4 }
  }
}
```

### Log Files

- `logs/syntax-detector-YYYY-MM-DD.log` - Detector logs
- `logs/syntax-fixer-YYYY-MM-DD.log` - Fixer logs
- `logs/orchestrator-YYYY-MM-DD.log` - Orchestrator logs
- `logs/syntax-monitor-YYYY-MM-DD.log` - Monitor logs

## Status Files

- `status.json` - Detector status
- `fixer-status.json` - Fixer status
- `orchestrator-status.json` - Orchestrator status
- `monitor-status.json` - Monitor status
- `monitoring/dashboard.json` - System dashboard
- `monitoring/health-report.json` - Health check report

## Error Handling

### Automatic Recovery

- Failed components are automatically restarted
- Error logs are maintained for debugging
- Backup files are created before modifications
- Retry mechanisms for failed operations

### Manual Recovery

```bash
# Restart specific component
./launch-syntax-system.sh restart

# Check component logs
./launch-syntax-system.sh logs detector

# Run health check
./launch-syntax-system.sh health
```

## Security Considerations

- All file modifications are backed up
- Changes are logged for audit purposes
- Git commits are created for tracking
- Process isolation prevents system interference

## Performance

- Efficient file scanning with directory filtering
- Parallel processing where possible
- Configurable intervals to balance performance and responsiveness
- Memory-efficient error tracking

## Troubleshooting

### Common Issues

1. **Component not starting**
   - Check Node.js installation
   - Verify file permissions
   - Check log files for errors

2. **No errors detected**
   - Verify file extensions are supported
   - Check skip directories configuration
   - Review detection patterns

3. **Fixes not applied**
   - Check backup directory permissions
   - Verify file write permissions
   - Review fix patterns

4. **System not responding**
   - Check process status
   - Review resource usage
   - Restart components

### Debug Mode

```bash
# Run with verbose logging
DEBUG=1 node syntax-error-detector.js

# Check all status files
ls -la *.json

# View recent logs
tail -f logs/syntax-detector-$(date +%Y-%m-%d).log
```

```

```

## Contributing

To extend the system:

1. **Add new file types**: Modify detection and fixing methods
2. **Add new fix patterns**: Update pattern arrays in fixer
3. **Create custom agents**: Use the factory system
4. **Add monitoring**: Extend the monitor class

## License

This system is part of the autonomous development infrastructure and follows the project's licensing terms.

## Support

For issues and questions:

1. Check the logs in the `logs/` directory
2. Review status files for component health
3. Run health checks for system diagnostics
4. Consult the troubleshooting section

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```
