#!/bin/bash

# Setup Automation Monitor and Maintainer System
# This script sets up the complete automation monitoring system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$SCRIPT_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Log function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${GREEN}[$timestamp] INFO:${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] WARN:${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] ERROR:${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${BLUE}[$timestamp] SUCCESS:${NC} $message"
            ;;
        "STEP")
            echo -e "${PURPLE}[$timestamp] STEP:${NC} $message"
            ;;
    esac
}

log "STEP" "Setting up Automation Monitor and Maintainer System..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_ROOT/package.json" ]; then
    log "ERROR" "Not in project root directory"
    exit 1
fi

# Create necessary directories
log "INFO" "Creating directory structure..."

mkdir -p "$AUTOMATION_DIR/monitor-logs"
mkdir -p "$AUTOMATION_DIR/monitor-status"
mkdir -p "$AUTOMATION_DIR/monitor-reports"
mkdir -p "$AUTOMATION_DIR/monitor-pids"
mkdir -p "$AUTOMATION_DIR/backups"
mkdir -p "$AUTOMATION_DIR/cron-jobs"

log "SUCCESS" "Directory structure created"

# Install required dependencies
log "INFO" "Installing required dependencies..."

cd "$PROJECT_ROOT"

# Check if package.json exists and add dependencies if needed
if [ -f "package.json" ]; then
    # Check if node-cron is already installed
    if ! npm list node-cron &> /dev/null; then
        log "INFO" "Installing node-cron..."
        npm install node-cron
    else
        log "SUCCESS" "node-cron is already installed"
    fi
    
    # Check if glob is already installed
    if ! npm list glob &> /dev/null; then
        log "INFO" "Installing glob..."
        npm install glob
    else
        log "SUCCESS" "glob is already installed"
    fi
else
    log "WARN" "No package.json found, creating one..."
    npm init -y
    npm install node-cron glob
fi

log "SUCCESS" "Dependencies installed"

# Make scripts executable
log "INFO" "Making scripts executable..."

chmod +x "$AUTOMATION_DIR/automation-monitor-and-maintainer.js"
chmod +x "$AUTOMATION_DIR/cron-jobs/automation-monitor-cron.sh"

log "SUCCESS" "Scripts made executable"

# Create configuration file
log "INFO" "Creating configuration file..."

cat > "$AUTOMATION_DIR/monitor-config.json" << 'EOF'
{
  "monitoring": {
    "checkInterval": "*/2 * * * *",
    "healthCheckInterval": "*/5 * * * *",
    "reportInterval": "0 */1 * * *",
    "errorThreshold": 3,
    "maxRetries": 3,
    "autoFix": true,
    "backupBeforeFix": true,
    "logLevel": "info"
  },
  "discovery": {
    "factoryPatterns": [
      "**/automation/**/*factory*.js",
      "**/automation/**/*Factory*.js",
      "**/automation/**/*-factory.js",
      "**/automation/**/*Factory.js"
    ],
    "agentPatterns": [
      "**/automation/**/*agent*.js",
      "**/automation/**/*Agent*.js",
      "**/automation/**/*-agent.js",
      "**/automation/**/*Agent.js"
    ],
    "cronPatterns": [
      "**/automation/**/*cron*.sh",
      "**/automation/**/*Cron*.sh",
      "**/automation/cron-jobs/*.sh"
    ],
    "scriptPatterns": [
      "**/automation/**/*automation*.js",
      "**/automation/**/*Automation*.js",
      "**/automation/**/*-automation.js"
    ]
  },
  "fixes": {
    "syntaxFixes": [
      "removeTrailingCommas",
      "fixDuplicateSemicolons",
      "fixEmptyBlocks",
      "fixDuplicateRequires",
      "fixModuleExports"
    ],
    "errorFixes": [
      "fixRequireErrors",
      "fixUndefinedErrors",
      "fixGeneralErrors"
    ]
  },
  "optimization": {
    "removeConsoleLogs": true,
    "optimizeRequires": true,
    "groupImports": true
  }
}
EOF

log "SUCCESS" "Configuration file created"

# Create systemd service file (for Linux systems)
if command -v systemctl &> /dev/null; then
    log "INFO" "Creating systemd service file..."
    
    cat > /tmp/automation-monitor.service << EOF
[Unit]
Description=Automation Monitor and Maintainer System
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_ROOT
ExecStart=/usr/bin/node $AUTOMATION_DIR/automation-monitor-and-maintainer.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

    # Try to install the service (requires sudo)
    if sudo cp /tmp/automation-monitor.service /etc/systemd/system/ 2>/dev/null; then
        sudo systemctl daemon-reload
        log "SUCCESS" "Systemd service installed"
        log "INFO" "To enable the service: sudo systemctl enable automation-monitor"
        log "INFO" "To start the service: sudo systemctl start automation-monitor"
    else
        log "WARN" "Could not install systemd service (requires sudo)"
        log "INFO" "Service file created at /tmp/automation-monitor.service"
    fi
    
    rm -f /tmp/automation-monitor.service
fi

# Create launchd plist file (for macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    log "INFO" "Creating launchd plist file..."
    
    cat > ~/Library/LaunchAgents/com.automation.monitor.plist << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.automation.monitor</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/node</string>
        <string>$AUTOMATION_DIR/automation-monitor-and-maintainer.js</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$PROJECT_ROOT</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$AUTOMATION_DIR/monitor-logs/launchd.log</string>
    <key>StandardErrorPath</key>
    <string>$AUTOMATION_DIR/monitor-logs/launchd-error.log</string>
</dict>
</plist>
EOF

    log "SUCCESS" "Launchd plist file created"
    log "INFO" "To load the service: launchctl load ~/Library/LaunchAgents/com.automation.monitor.plist"
fi

# Create cron job for automatic startup
log "INFO" "Setting up cron job for automatic startup..."

# Get current crontab
crontab -l 2>/dev/null > /tmp/current_crontab

# Add automation monitor cron job if not already present
if ! grep -q "automation-monitor-cron.sh" /tmp/current_crontab; then
    cat >> /tmp/current_crontab << EOF

# Automation Monitor and Maintainer System
# Check every 5 minutes if monitor is running
*/5 * * * * $AUTOMATION_DIR/cron-jobs/automation-monitor-cron.sh > $AUTOMATION_DIR/monitor-logs/cron.log 2>&1

# Daily cleanup of old logs and reports
0 2 * * * $AUTOMATION_DIR/cron-jobs/automation-monitor-cron.sh cleanup > $AUTOMATION_DIR/monitor-logs/cleanup.log 2>&1

# Weekly comprehensive health report
0 9 * * 1 $AUTOMATION_DIR/cron-jobs/automation-monitor-cron.sh report > $AUTOMATION_DIR/monitor-logs/weekly-report.log 2>&1
EOF

    # Install the new crontab
    crontab /tmp/current_crontab
    log "SUCCESS" "Cron jobs installed"
else
    log "INFO" "Automation monitor cron jobs already exist"
fi

rm -f /tmp/current_crontab

# Create startup script
log "INFO" "Creating startup script..."

cat > "$AUTOMATION_DIR/start-automation-monitor.sh" << 'EOF'
#!/bin/bash

# Startup script for Automation Monitor and Maintainer System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-cron.sh"

# Start the monitor
$CRON_SCRIPT start

# Show status
$CRON_SCRIPT status
EOF

chmod +x "$AUTOMATION_DIR/start-automation-monitor.sh"

# Create stop script
cat > "$AUTOMATION_DIR/stop-automation-monitor.sh" << 'EOF'
#!/bin/bash

# Stop script for Automation Monitor and Maintainer System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-cron.sh"

# Stop the monitor
$CRON_SCRIPT stop

echo "Automation Monitor and Maintainer System stopped"
EOF

chmod +x "$AUTOMATION_DIR/stop-automation-monitor.sh"

# Create status script
cat > "$AUTOMATION_DIR/status-automation-monitor.sh" << 'EOF'
#!/bin/bash

# Status script for Automation Monitor and Maintainer System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-cron.sh"

# Show status
$CRON_SCRIPT status
EOF

chmod +x "$AUTOMATION_DIR/status-automation-monitor.sh"

log "SUCCESS" "Startup scripts created"

# Create documentation
log "INFO" "Creating documentation..."

cat > "$AUTOMATION_DIR/AUTOMATION_MONITOR_README.md" << 'EOF'
# Automation Monitor and Maintainer System

## Overview

The Automation Monitor and Maintainer System is a comprehensive autonomous system that continuously monitors all project automation factories, agents, scripts, cron jobs, etc. and maintains them without modifying existing autonomous agents factories.

## Features

### 🔍 Continuous Monitoring
- Discovers all automation systems automatically
- Monitors health status every 2 minutes
- Tracks system performance and errors
- Generates comprehensive reports

### 🔧 Automatic Maintenance
- Fixes syntax errors automatically
- Restarts stopped systems
- Applies common error fixes
- Creates backups before making changes

### 📊 Health Management
- Comprehensive health checks every 5 minutes
- Error analysis and categorization
- System optimization every 2 hours
- Performance monitoring and alerts

### 🛡️ Safety Features
- Creates backups before any changes
- Configurable error thresholds
- Emergency stop capabilities
- Resource monitoring and cleanup

## System Architecture

```
automation/
├── automation-monitor-and-maintainer.js    # Main monitoring system
├── cron-jobs/
│   └── automation-monitor-cron.sh         # Cron job management
├── monitor-logs/                          # System logs
├── monitor-status/                        # Current status
├── monitor-reports/                       # Generated reports
├── monitor-pids/                          # Process IDs
├── backups/                               # System backups
└── monitor-config.json                    # Configuration
```

## Usage

### Starting the System
```bash
# Start the monitor
./automation/cron-jobs/automation-monitor-cron.sh start

# Or use the startup script
./automation/start-automation-monitor.sh
```

### Checking Status
```bash
# Check monitor status
./automation/cron-jobs/automation-monitor-cron.sh status

# Or use the status script
./automation/status-automation-monitor.sh
```

### Stopping the System
```bash
# Stop the monitor
./automation/cron-jobs/automation-monitor-cron.sh stop

# Or use the stop script
./automation/stop-automation-monitor.sh
```

### Generating Reports
```bash
# Generate health report
./automation/cron-jobs/automation-monitor-cron.sh report

# Check system resources
./automation/cron-jobs/automation-monitor-cron.sh resources
```

### Emergency Operations
```bash
# Emergency stop all automation
./automation/cron-jobs/automation-monitor-cron.sh emergency

# Clean up old files
./automation/cron-jobs/automation-monitor-cron.sh cleanup
```

## Configuration

The system is configured via `monitor-config.json`:

```json
{
  "monitoring": {
    "checkInterval": "*/2 * * * *",
    "healthCheckInterval": "*/5 * * * *",
    "reportInterval": "0 */1 * * *",
    "errorThreshold": 3,
    "maxRetries": 3,
    "autoFix": true,
    "backupBeforeFix": true,
    "logLevel": "info"
  }
}
```

## Monitoring Capabilities

### System Discovery
- **Factories**: Discovers all automation factories
- **Agents**: Finds all autonomous agents
- **Scripts**: Locates automation scripts
- **Cron Jobs**: Identifies scheduled tasks

### Health Checks
- **File Existence**: Checks if files exist
- **Process Status**: Monitors running processes
- **Syntax Validation**: Validates JavaScript syntax
- **Error Logging**: Analyzes error patterns

### Automatic Fixes
- **Syntax Errors**: Fixes common syntax issues
- **Process Restart**: Restarts stopped systems
- **Error Resolution**: Applies common error fixes
- **Missing Systems**: Handles missing automation

### Optimization
- **Code Optimization**: Removes debug code in production
- **Require Optimization**: Groups and optimizes imports
- **Performance Monitoring**: Tracks system performance
- **Resource Management**: Monitors disk, memory, CPU

## Reports

### Health Reports
- System health percentages
- Problematic systems list
- Error categorization
- Fix recommendations

### Error Analysis
- Error frequency analysis
- Common error patterns
- System-specific errors
- Trend analysis

### Performance Reports
- Optimization results
- Resource usage
- Performance metrics
- Improvement suggestions

## Safety Features

### Backup System
- Automatic backups before changes
- Configurable backup retention
- Backup verification
- Restore capabilities

### Error Handling
- Graceful error recovery
- Configurable retry limits
- Error logging and analysis
- Alert system for critical issues

### Resource Management
- Disk space monitoring
- Memory usage tracking
- CPU usage monitoring
- Automatic cleanup

## Integration

The system integrates with existing automation without modification:

- **Non-Intrusive**: Doesn't modify existing automation
- **Comprehensive**: Monitors all automation types
- **Intelligent**: Learns from patterns and errors
- **Adaptive**: Improves over time

## Troubleshooting

### Common Issues

1. **Monitor not starting**
   - Check Node.js installation
   - Verify dependencies are installed
   - Check log files for errors

2. **Systems not being discovered**
   - Verify file patterns in configuration
   - Check file permissions
   - Review discovery logs

3. **Fixes not working**
   - Check backup creation
   - Verify file permissions
   - Review error logs

### Log Files

- `monitor-logs/monitor.log` - Main system logs
- `monitor-logs/automation-monitor.log` - Cron job logs
- `monitor-logs/automation-monitor-error.log` - Error logs

### Status Files

- `monitor-status/current-status.json` - Current system status
- `monitor-reports/` - Generated reports
- `monitor-pids/` - Process ID files

## Support

For issues or questions:

1. Check the log files for error messages
2. Review the status files for system health
3. Generate reports for detailed analysis
4. Use the emergency stop if needed

The system is designed to be self-maintaining and will automatically handle most issues without intervention.
EOF

log "SUCCESS" "Documentation created"

# Test the setup
log "INFO" "Testing the setup..."

# Test if the monitor script can be executed
if node -c "$AUTOMATION_DIR/automation-monitor-and-maintainer.js" 2>/dev/null; then
    log "SUCCESS" "Monitor script syntax is valid"
else
    log "ERROR" "Monitor script has syntax errors"
    exit 1
fi

# Test if the cron script is executable
if [ -x "$AUTOMATION_DIR/cron-jobs/automation-monitor-cron.sh" ]; then
    log "SUCCESS" "Cron script is executable"
else
    log "ERROR" "Cron script is not executable"
    exit 1
fi

# Test if directories were created
if [ -d "$AUTOMATION_DIR/monitor-logs" ] && [ -d "$AUTOMATION_DIR/monitor-status" ]; then
    log "SUCCESS" "Required directories created"
else
    log "ERROR" "Required directories not created"
    exit 1
fi

log "SUCCESS" "Setup completed successfully!"

echo ""
echo "🎉 Automation Monitor and Maintainer System Setup Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Start the monitor: ./automation/cron-jobs/automation-monitor-cron.sh start"
echo "2. Check status: ./automation/cron-jobs/automation-monitor-cron.sh status"
echo "3. Generate report: ./automation/cron-jobs/automation-monitor-cron.sh report"
echo ""
echo "📚 Documentation: automation/AUTOMATION_MONITOR_README.md"
echo "⚙️  Configuration: automation/monitor-config.json"
echo "📊 Logs: automation/monitor-logs/"
echo "📈 Reports: automation/monitor-reports/"
echo ""
echo "🚀 The system will automatically monitor and maintain all your automation!"
