#!/bin/bash

# Automation Monitor and Maintainer Setup Script
# This script sets up the automation monitoring and maintenance system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$SCRIPT_DIR"
LOG_DIR="$AUTOMATION_DIR/logs"
PID_DIR="$AUTOMATION_DIR/pids"
REPORT_DIR="$AUTOMATION_DIR/reports"
BACKUP_DIR="$AUTOMATION_DIR/backups"
HEALTH_DIR="$AUTOMATION_DIR/health-reports"
ERROR_DIR="$AUTOMATION_DIR/error-logs"
MONITORING_DIR="$AUTOMATION_DIR/monitoring-data"
MAINTENANCE_DIR="$AUTOMATION_DIR/maintenance-logs"

# Logging function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success_log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

warning_log() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

error_log() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        error_log "This script should not be run as root"
        exit 1
    fi
}

# Check system requirements
check_requirements() {
    log "Checking system requirements..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error_log "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2)
    local major_version=$(echo "$node_version" | cut -d'.' -f1)
    if [[ $major_version -lt 14 ]]; then
        error_log "Node.js version 14 or higher is required. Current version: $node_version"
        exit 1
    fi
    
    success_log "Node.js version $node_version is compatible"
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        error_log "npm is not installed. Please install npm first."
        exit 1
    fi
    
    success_log "System requirements check passed"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    # Check if package.json exists
    if [[ -f "$PROJECT_ROOT/package.json" ]]; then
        cd "$PROJECT_ROOT"
        npm install node-cron fs path child_process events
        success_log "Dependencies installed from package.json"
    else
        # Install required packages globally
        npm install -g node-cron
        success_log "Dependencies installed globally"
    fi
}

# Create directory structure
create_directories() {
    log "Creating directory structure..."
    
    local directories=(
        "$LOG_DIR"
        "$PID_DIR"
        "$REPORT_DIR"
        "$BACKUP_DIR"
        "$HEALTH_DIR"
        "$ERROR_DIR"
        "$MONITORING_DIR"
        "$MAINTENANCE_DIR"
    )
    
    for dir in "${directories[@]}"; do
        if [[ ! -d "$dir" ]]; then
            mkdir -p "$dir"
            success_log "Created directory: $dir"
        else
            warning_log "Directory already exists: $dir"
        fi
    done
}

# Create configuration file
create_configuration() {
    log "Creating configuration file..."
    
    local config_file="$AUTOMATION_DIR/automation-monitor-config.json"
    
    if [[ ! -f "$config_file" ]]; then
        cat > "$config_file" << EOF
{
    "healthCheckInterval": "*/2 * * * *",
    "errorThreshold": 3,
    "performanceThreshold": 0.8,
    "maxRetries": 3,
    "backupInterval": "0 */6 * * *",
    "cleanupInterval": "0 2 * * *",
    "reportInterval": "0 */1 * * *",
    "restartDelay": 5000,
    "logLevel": "info",
    "monitoring": {
        "enabled": true,
        "interval": "*/5 * * * *",
        "metrics": ["health", "performance", "errors", "resources"]
    },
    "backup": {
        "enabled": true,
        "retention": 60,
        "compression": true
    },
    "cleanup": {
        "enabled": true,
        "logRetention": 14,
        "reportRetention": 30,
        "backupRetention": 60
    },
    "notifications": {
        "enabled": false,
        "email": "",
        "webhook": ""
    }
}
EOF
        success_log "Configuration file created: $config_file"
    else
        warning_log "Configuration file already exists: $config_file"
    fi
}

# Set up cron jobs
setup_cron_jobs() {
    log "Setting up cron jobs..."
    
    local cron_script="$AUTOMATION_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"
    
    # Make cron script executable
    if [[ -f "$cron_script" ]]; then
        chmod +x "$cron_script"
        success_log "Made cron script executable: $cron_script"
    else
        error_log "Cron script not found: $cron_script"
        return 1
    fi
    
    # Add cron jobs
    local current_crontab=$(crontab -l 2>/dev/null || echo "")
    
    # Check if cron jobs already exist
    if echo "$current_crontab" | grep -q "automation-monitor-and-maintainer-cron.sh"; then
        warning_log "Cron jobs already exist"
    else
        # Add new cron jobs
        local new_cron_jobs=$(cat << EOF
# Automation Monitor and Maintainer System
*/5 * * * * $cron_script health >> $LOG_DIR/cron-health.log 2>&1
0 */2 * * * $cron_script report >> $LOG_DIR/cron-report.log 2>&1
0 */6 * * * $cron_script backup >> $LOG_DIR/cron-backup.log 2>&1
0 2 * * * $cron_script cleanup >> $LOG_DIR/cron-cleanup.log 2>&1
0 0 * * * $cron_script monitor >> $LOG_DIR/cron-monitor.log 2>&1
EOF
)
        
        # Add to crontab
        (echo "$current_crontab"; echo "$new_cron_jobs") | crontab -
        success_log "Cron jobs added successfully"
    fi
}

# Create systemd service (optional)
create_systemd_service() {
    log "Creating systemd service..."
    
    local service_file="/etc/systemd/system/automation-monitor.service"
    local user=$(whoami)
    
    if [[ -w "/etc/systemd/system" ]]; then
        cat > "$service_file" << EOF
[Unit]
Description=Automation Monitor and Maintainer System
After=network.target

[Service]
Type=simple
User=$user
WorkingDirectory=$AUTOMATION_DIR
ExecStart=/usr/bin/node $AUTOMATION_DIR/launch-automation-monitor-and-maintainer.js start
ExecStop=$AUTOMATION_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh stop
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF
        success_log "Systemd service created: $service_file"
        
        # Enable and start service
        systemctl daemon-reload
        systemctl enable automation-monitor.service
        success_log "Systemd service enabled"
    else
        warning_log "Cannot create systemd service (requires root privileges)"
    fi
}

# Create startup script
create_startup_script() {
    log "Creating startup script..."
    
    local startup_script="$AUTOMATION_DIR/start-automation-monitor.sh"
    
    cat > "$startup_script" << EOF
#!/bin/bash

# Automation Monitor and Maintainer Startup Script

SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="\$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "Starting Automation Monitor and Maintainer System..."

# Check if system is already running
if \$CRON_SCRIPT status | grep -q "running"; then
    echo "System is already running"
    exit 0
fi

# Start the system
\$CRON_SCRIPT start

# Wait a moment and check status
sleep 5
\$CRON_SCRIPT status
EOF
    
    chmod +x "$startup_script"
    success_log "Startup script created: $startup_script"
}

# Create shutdown script
create_shutdown_script() {
    log "Creating shutdown script..."
    
    local shutdown_script="$AUTOMATION_DIR/stop-automation-monitor.sh"
    
    cat > "$shutdown_script" << EOF
#!/bin/bash

# Automation Monitor and Maintainer Shutdown Script

SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="\$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "Stopping Automation Monitor and Maintainer System..."

# Stop the system
\$CRON_SCRIPT stop

# Wait a moment and check status
sleep 3
\$CRON_SCRIPT status
EOF
    
    chmod +x "$shutdown_script"
    success_log "Shutdown script created: $shutdown_script"
}

# Create status script
create_status_script() {
    log "Creating status script..."
    
    local status_script="$AUTOMATION_DIR/status-automation-monitor.sh"
    
    cat > "$status_script" << EOF
#!/bin/bash

# Automation Monitor and Maintainer Status Script

SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="\$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "Automation Monitor and Maintainer System Status"
echo "=============================================="

\$CRON_SCRIPT status

echo ""
echo "Recent Health Reports:"
echo "====================="
if [[ -d "\$SCRIPT_DIR/health-reports" ]]; then
    ls -la "\$SCRIPT_DIR/health-reports" | tail -5
else
    echo "No health reports found"
fi

echo ""
echo "Recent Error Logs:"
echo "================="
if [[ -d "\$SCRIPT_DIR/error-logs" ]]; then
    ls -la "\$SCRIPT_DIR/error-logs" | tail -5
else
    echo "No error logs found"
fi
EOF
    
    chmod +x "$status_script"
    success_log "Status script created: $status_script"
}

# Test the setup
test_setup() {
    log "Testing setup..."
    
    # Test Node.js scripts
    if node -c "$AUTOMATION_DIR/automation-monitor-and-maintainer-factory.js" 2>/dev/null; then
        success_log "Factory script syntax check passed"
    else
        error_log "Factory script syntax check failed"
        return 1
    fi
    
    if node -c "$AUTOMATION_DIR/launch-automation-monitor-and-maintainer.js" 2>/dev/null; then
        success_log "Launcher script syntax check passed"
    else
        error_log "Launcher script syntax check failed"
        return 1
    fi
    
    # Test cron script
    if bash -n "$AUTOMATION_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh" 2>/dev/null; then
        success_log "Cron script syntax check passed"
    else
        error_log "Cron script syntax check failed"
        return 1
    fi
    
    success_log "Setup test completed successfully"
}

# Create documentation
create_documentation() {
    log "Creating documentation..."
    
    local readme_file="$AUTOMATION_DIR/AUTOMATION_MONITOR_README.md"
    
    cat > "$readme_file" << EOF
# Automation Monitor and Maintainer System

## Overview

The Automation Monitor and Maintainer System is a comprehensive monitoring and maintenance solution for all project automation factories, agents, scripts, and cron jobs. It continuously checks system health, detects errors, and automatically fixes issues to ensure optimal performance.

## Features

- **Comprehensive Health Monitoring**: Monitors all automation systems continuously
- **Automatic Error Detection**: Detects and identifies system errors
- **Performance Optimization**: Optimizes system performance automatically
- **Maintenance Scheduling**: Schedules and performs system maintenance
- **Error Recovery**: Automatically recovers from errors and restarts systems
- **Backup Management**: Creates and manages system backups
- **Cleanup Operations**: Performs system cleanup and maintenance
- **Report Generation**: Generates comprehensive system reports
- **Real-time Monitoring**: Provides real-time system status and metrics

## System Architecture

### Core Components

1. **Automation Monitor and Maintainer Factory** (\`automation-monitor-and-maintainer-factory.js\`)
   - Central factory for managing monitoring agents
   - Comprehensive health monitoring capabilities
   - Automatic error detection and recovery
   - Performance optimization and resource management

2. **Automation Monitor and Maintainer Launcher** (\`launch-automation-monitor-and-maintainer.js\`)
   - System launcher and manager
   - Health monitoring and reporting
   - Configuration management
   - System backup and cleanup

3. **Cron Job Manager** (\`cron-jobs/automation-monitor-and-maintainer-cron.sh\`)
   - Automated scheduling and management
   - Health checks and system monitoring
   - Backup and recovery operations
   - Performance optimization tasks

### Monitoring Agents

1. **System Health Monitor**: Continuous health monitoring
2. **Error Detection Agent**: Error detection and identification
3. **Performance Optimizer**: Performance analysis and optimization
4. **Maintenance Scheduler**: Maintenance planning and scheduling
5. **Recovery Agent**: Error recovery and system restart
6. **Backup Manager**: Backup creation and management
7. **Cleanup Agent**: System cleanup and maintenance
8. **Report Generator**: Report creation and analysis

## Usage

### Starting the System

\`\`\`bash
# Start the system
./cron-jobs/automation-monitor-and-maintainer-cron.sh start

# Or use the launcher directly
node launch-automation-monitor-and-maintainer.js start
\`\`\`

### Stopping the System

\`\`\`bash
# Stop the system
./cron-jobs/automation-monitor-and-maintainer-cron.sh stop

# Or use the launcher directly
node launch-automation-monitor-and-maintainer.js stop
\`\`\`

### Checking Status

\`\`\`bash
# Check system status
./cron-jobs/automation-monitor-and-maintainer-cron.sh status

# Or use the launcher directly
node launch-automation-monitor-and-maintainer.js status
\`\`\`

### Health Check

\`\`\`bash
# Perform health check
./cron-jobs/automation-monitor-and-maintainer-cron.sh health

# Or use the launcher directly
node launch-automation-monitor-and-maintainer.js health
\`\`\`

### Generate Report

\`\`\`bash
# Generate system report
./cron-jobs/automation-monitor-and-maintainer-cron.sh report

# Or use the launcher directly
node launch-automation-monitor-and-maintainer.js report
\`\`\`

## Configuration

The system is configured via \`automation-monitor-config.json\`:

\`\`\`json
{
    "healthCheckInterval": "*/2 * * * *",
    "errorThreshold": 3,
    "performanceThreshold": 0.8,
    "maxRetries": 3,
    "backupInterval": "0 */6 * * *",
    "cleanupInterval": "0 2 * * *",
    "reportInterval": "0 */1 * * *"
}
\`\`\`

## Monitoring

### Health Metrics

- System uptime and status
- Error rates and types
- Performance metrics
- Resource usage (CPU, memory)
- Response times

### Reports

- Comprehensive system reports
- Health check reports
- Performance analysis
- Error analysis and recommendations
- Maintenance schedules

### Logs

- System logs in \`logs/\` directory
- Error logs in \`error-logs/\` directory
- Health reports in \`health-reports/\` directory
- Maintenance logs in \`maintenance-logs/\` directory

## Maintenance

### Automatic Maintenance

- Daily cleanup operations
- Weekly backup creation
- Monthly performance optimization
- Quarterly system health review

### Manual Maintenance

- System restart: \`./cron-jobs/automation-monitor-and-maintainer-cron.sh restart\`
- Backup creation: \`./cron-jobs/automation-monitor-and-maintainer-cron.sh backup\`
- Cleanup operations: \`./cron-jobs/automation-monitor-and-maintainer-cron.sh cleanup\`

## Troubleshooting

### Common Issues

1. **System not starting**: Check Node.js installation and dependencies
2. **Health check failures**: Verify system permissions and file access
3. **Performance issues**: Check system resources and configuration
4. **Error recovery failures**: Review error logs and system status

### Debugging

- Check logs in \`logs/\` directory
- Review error logs in \`error-logs/\` directory
- Examine health reports in \`health-reports/\` directory
- Use status command for current system state

## Security

- All scripts run with user permissions
- No root access required
- Secure file permissions
- Encrypted configuration storage (optional)

## Support

For issues and questions:
1. Check the logs and reports
2. Review the configuration
3. Test individual components
4. Restart the system if needed

## License

This system is part of the project automation infrastructure.
EOF
    
    success_log "Documentation created: $readme_file"
}

# Main setup function
main() {
    echo "🚀 Automation Monitor and Maintainer Setup"
    echo "=========================================="
    echo ""
    
    check_root
    check_requirements
    install_dependencies
    create_directories
    create_configuration
    setup_cron_jobs
    create_startup_script
    create_shutdown_script
    create_status_script
    create_systemd_service
    test_setup
    create_documentation
    
    echo ""
    echo "✅ Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Start the system: ./cron-jobs/automation-monitor-and-maintainer-cron.sh start"
    echo "2. Check status: ./cron-jobs/automation-monitor-and-maintainer-cron.sh status"
    echo "3. View documentation: cat $AUTOMATION_DIR/AUTOMATION_MONITOR_README.md"
    echo ""
    echo "The system will automatically:"
    echo "- Monitor all automation factories, agents, scripts, and cron jobs"
    echo "- Detect and fix errors automatically"
    echo "- Optimize performance continuously"
    echo "- Generate reports and maintain backups"
    echo ""
}

# Run setup
main "$@"
