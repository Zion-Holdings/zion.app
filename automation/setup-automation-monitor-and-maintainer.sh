#!/bin/bash

# Automation Monitor and Maintainer Setup Script
# This script sets up the complete automation monitoring system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    local node_version=$(node --version)
    log "Node.js version: $node_version"
}

# Function to check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "npm version: $npm_version"
}

# Function to install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    cd "$PROJECT_ROOT"
    
    # Install required npm packages
    npm install --save \
        fs-extra \
        node-cron \
        glob \
        axios \
        cheerio \
        puppeteer
    
    if [ $? -eq 0 ]; then
        success "Dependencies installed successfully"
    else
        error "Failed to install dependencies"
        exit 1
    fi
}

# Function to create directory structure
create_directories() {
    log "Creating directory structure..."
    
    local dirs=(
        "automation/logs"
        "automation/reports"
        "automation/health-reports"
        "automation/error-logs"
        "automation/backups"
        "automation/monitoring-data"
        "automation/maintenance-logs"
        "automation/cron-jobs"
    )
    
    for dir in "${dirs[@]}"; do
        mkdir -p "$PROJECT_ROOT/$dir"
        if [ $? -eq 0 ]; then
            log "Created directory: $dir"
        else
            error "Failed to create directory: $dir"
            exit 1
        fi
    done
    
    success "Directory structure created successfully"
}

# Function to create configuration file
create_config() {
    log "Creating configuration file..."
    
    local config_file="$PROJECT_ROOT/automation/automation-monitor-config.json"
    
    cat > "$config_file" << EOF
{
  "healthCheckInterval": "*/2 * * * *",
  "errorThreshold": 3,
  "performanceThreshold": 0.8,
  "maxRetries": 3,
  "backupInterval": "0 */6 * * *",
  "cleanupInterval": "0 2 * * *",
  "reportInterval": "0 */1 * * *",
  "monitoring": {
    "enabled": true,
    "logLevel": "info",
    "maxLogFiles": 100,
    "maxReportFiles": 50
  },
  "backup": {
    "enabled": true,
    "maxBackups": 10,
    "retentionDays": 30
  },
  "cleanup": {
    "enabled": true,
    "logRetentionDays": 7,
    "reportRetentionDays": 30,
    "backupRetentionDays": 60
  }
}
EOF
    
    if [ $? -eq 0 ]; then
        success "Configuration file created: $config_file"
    else
        error "Failed to create configuration file"
        exit 1
    fi
}

# Function to make scripts executable
make_executable() {
    log "Making scripts executable..."
    
    local scripts=(
        "automation/launch-automation-monitor-and-maintainer.js"
        "automation/automation-monitor-and-maintainer-factory.js"
        "automation/cron-jobs/automation-monitor-and-maintainer-cron.sh"
        "automation/setup-automation-monitor-and-maintainer.sh"
    )
    
    for script in "${scripts[@]}"; do
        if [ -f "$PROJECT_ROOT/$script" ]; then
            chmod +x "$PROJECT_ROOT/$script"
            log "Made executable: $script"
        else
            warning "Script not found: $script"
        fi
    done
    
    success "Scripts made executable"
}

# Function to create startup script
create_startup_script() {
    log "Creating startup script..."
    
    local startup_script="$PROJECT_ROOT/automation/start-automation-monitor.sh"
    
    cat > "$startup_script" << 'EOF'
#!/bin/bash

# Automation Monitor and Maintainer Startup Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "🚀 Starting Automation Monitor and Maintainer System..."

# Check if system is already running
if [ -f "$PROJECT_ROOT/automation-monitor.pid" ]; then
    PID=$(cat "$PROJECT_ROOT/automation-monitor.pid")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️ System is already running (PID: $PID)"
        exit 0
    else
        rm -f "$PROJECT_ROOT/automation-monitor.pid"
    fi
fi

# Start the system
cd "$PROJECT_ROOT"
node automation/launch-automation-monitor-and-maintainer.js start

if [ $? -eq 0 ]; then
    echo "✅ System started successfully"
else
    echo "❌ Failed to start system"
    exit 1
fi
EOF
    
    chmod +x "$startup_script"
    success "Startup script created: $startup_script"
}

# Function to create shutdown script
create_shutdown_script() {
    log "Creating shutdown script..."
    
    local shutdown_script="$PROJECT_ROOT/automation/stop-automation-monitor.sh"
    
    cat > "$shutdown_script" << 'EOF'
#!/bin/bash

# Automation Monitor and Maintainer Shutdown Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "🛑 Stopping Automation Monitor and Maintainer System..."

# Stop the system
cd "$PROJECT_ROOT"
node automation/launch-automation-monitor-and-maintainer.js stop

if [ $? -eq 0 ]; then
    echo "✅ System stopped successfully"
else
    echo "❌ Failed to stop system"
    exit 1
fi
EOF
    
    chmod +x "$shutdown_script"
    success "Shutdown script created: $shutdown_script"
}

# Function to create status script
create_status_script() {
    log "Creating status script..."
    
    local status_script="$PROJECT_ROOT/automation/status-automation-monitor.sh"
    
    cat > "$status_script" << 'EOF'
#!/bin/bash

# Automation Monitor and Maintainer Status Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "📊 Automation Monitor and Maintainer System Status"
echo "=================================================="

# Check system status
cd "$PROJECT_ROOT"
node automation/launch-automation-monitor-and-maintainer.js status

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ System is running"
else
    echo ""
    echo "❌ System is not running"
fi
EOF
    
    chmod +x "$status_script"
    success "Status script created: $status_script"
}

# Function to setup cron jobs
setup_cron_jobs() {
    log "Setting up cron jobs..."
    
    local cron_script="$PROJECT_ROOT/automation/cron-jobs/automation-monitor-and-maintainer-cron.sh"
    
    # Check if cron script exists
    if [ ! -f "$cron_script" ]; then
        error "Cron script not found: $cron_script"
        return 1
    fi
    
    # Make cron script executable
    chmod +x "$cron_script"
    
    # Setup cron job for health checks
    local cron_job="*/5 * * * * $cron_script health > /dev/null 2>&1"
    
    # Add to crontab if not already present
    if ! crontab -l 2>/dev/null | grep -q "automation-monitor-and-maintainer-cron.sh"; then
        (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
        success "Cron job added successfully"
    else
        warning "Cron job already exists"
    fi
}

# Function to create README
create_readme() {
    log "Creating README file..."
    
    local readme_file="$PROJECT_ROOT/automation/README-automation-monitor.md"
    
    cat > "$readme_file" << 'EOF'
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
EOF
    
    success "README file created: $readme_file"
}

# Function to run tests
run_tests() {
    log "Running system tests..."
    
    cd "$PROJECT_ROOT"
    
    # Test Node.js scripts
    if node -c automation/automation-monitor-and-maintainer-factory.js; then
        success "Factory script syntax check passed"
    else
        error "Factory script syntax check failed"
        return 1
    fi
    
    if node -c automation/launch-automation-monitor-and-maintainer.js; then
        success "Launcher script syntax check passed"
    else
        error "Launcher script syntax check failed"
        return 1
    fi
    
    # Test cron script
    if bash -n automation/cron-jobs/automation-monitor-and-maintainer-cron.sh; then
        success "Cron script syntax check passed"
    else
        error "Cron script syntax check failed"
        return 1
    fi
    
    success "All tests passed"
}

# Function to show final instructions
show_final_instructions() {
    echo ""
    echo "🎉 Automation Monitor and Maintainer System Setup Complete!"
    echo "=========================================================="
    echo ""
    echo "✅ System has been successfully installed and configured"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Start the system: ./automation/start-automation-monitor.sh"
    echo "2. Check status: ./automation/status-automation-monitor.sh"
    echo "3. View logs: ./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh logs"
    echo "4. Health check: ./automation/cron-jobs/automation-monitor-and-maintainer-cron.sh health"
    echo ""
    echo "📊 The system will automatically:"
    echo "- Monitor all automation components every 2 minutes"
    echo "- Fix issues automatically when possible"
    echo "- Create backups every 6 hours"
    echo "- Generate reports every hour"
    echo "- Perform cleanup daily at 2 AM"
    echo ""
    echo "📁 Files created:"
    echo "- automation/automation-monitor-config.json (configuration)"
    echo "- automation/start-automation-monitor.sh (startup script)"
    echo "- automation/stop-automation-monitor.sh (shutdown script)"
    echo "- automation/status-automation-monitor.sh (status script)"
    echo "- automation/README-automation-monitor.md (documentation)"
    echo ""
    echo "🔧 Cron jobs have been configured for automatic monitoring"
    echo ""
    echo "For more information, see: automation/README-automation-monitor.md"
    echo ""
}

# Main setup function
main() {
    echo "🚀 Setting up Automation Monitor and Maintainer System..."
    echo "========================================================"
    echo ""
    
    # Check prerequisites
    log "Checking prerequisites..."
    check_node
    check_npm
    
    # Install dependencies
    install_dependencies
    
    # Create directory structure
    create_directories
    
    # Create configuration
    create_config
    
    # Make scripts executable
    make_executable
    
    # Create management scripts
    create_startup_script
    create_shutdown_script
    create_status_script
    
    # Setup cron jobs
    setup_cron_jobs
    
    # Create documentation
    create_readme
    
    # Run tests
    run_tests
    
    # Show final instructions
    show_final_instructions
}

# Run main function
main "$@"
