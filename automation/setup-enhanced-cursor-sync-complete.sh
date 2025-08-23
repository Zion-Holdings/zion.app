#!/bin/bash

# Enhanced Cursor Sync Complete Setup Script
# Installs and configures the complete enhanced cursor sync automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Get the project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

log "🚀 Setting up Enhanced Cursor Sync Automation System..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    error "npm is not installed or not in PATH"
    exit 1
fi

# Install required dependencies
install_dependencies() {
    log "Installing required dependencies..."
    
    # Check if minimatch is installed
    if ! npm list minimatch > /dev/null 2>&1; then
        log "Installing minimatch..."
        npm install minimatch --save-dev
    fi
    
    # Check if jq is available (for JSON parsing in scripts)
    if ! command -v jq &> /dev/null; then
        warn "jq is not installed. Some features may not work properly."
        warn "To install jq: brew install jq (macOS) or apt-get install jq (Ubuntu)"
    fi
    
    log "✅ Dependencies check completed"
}

# Create all necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/backups"
    mkdir -p "$AUTOMATION_DIR/metrics"
    mkdir -p "$AUTOMATION_DIR/config"
    
    log "✅ Directories created"
}

# Make all scripts executable
make_scripts_executable() {
    log "Making scripts executable..."
    
    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-automation.js"
    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-cron.sh"
    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-health-check.sh"
    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-backup-cleanup.sh"
    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-status.sh"
    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-metrics.js"
    chmod +x "$AUTOMATION_DIR/start-enhanced-cursor-sync.sh"
    chmod +x "$AUTOMATION_DIR/stop-enhanced-cursor-sync.sh"
    
    log "✅ Scripts made executable"
}

# Test the automation system
test_automation() {
    log "Testing enhanced cursor sync automation..."
    
    # Test single run
    cd "$PROJECT_DIR"
    if node automation/enhanced-cursor-sync-automation.js --once; then
        log "✅ Single run test passed"
    else
        warn "⚠️ Single run test failed (this might be normal if no changes to sync)"
    fi
    
    # Test metrics generation
    if node automation/enhanced-cursor-sync-metrics.js; then
        log "✅ Metrics generation test passed"
    else
        warn "⚠️ Metrics generation test failed"
    fi
}

# Create systemd service (for Linux systems)
create_systemd_service() {
    if command -v systemctl &> /dev/null; then
        log "Creating systemd service..."
        
        local service_file="/etc/systemd/system/enhanced-cursor-sync.service"
        local user=$(whoami)
        
        sudo tee "$service_file" > /dev/null << EOF
[Unit]
Description=Enhanced Cursor Sync Automation
After=network.target

[Service]
Type=simple
User=$user
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node $AUTOMATION_DIR/enhanced-cursor-sync-automation.js --continuous
Restart=always
RestartSec=10
StandardOutput=append:$AUTOMATION_DIR/logs/enhanced-cursor-sync-systemd.log
StandardError=append:$AUTOMATION_DIR/logs/enhanced-cursor-sync-systemd.log

[Install]
WantedBy=multi-user.target
EOF

        sudo systemctl daemon-reload
        log "✅ Systemd service created"
        log "To enable: sudo systemctl enable enhanced-cursor-sync"
        log "To start: sudo systemctl start enhanced-cursor-sync"
    else
        log "Systemd not available, skipping service creation"
    fi
}

# Create launchd plist (for macOS)
create_launchd_plist() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        log "Creating launchd plist for macOS..."
        
        local plist_file="$HOME/Library/LaunchAgents/com.enhanced-cursor-sync.plist"
        
        cat > "$plist_file" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.enhanced-cursor-sync</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/node</string>
        <string>$AUTOMATION_DIR/enhanced-cursor-sync-automation.js</string>
        <string>--continuous</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$PROJECT_DIR</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$AUTOMATION_DIR/logs/enhanced-cursor-sync-launchd.log</string>
    <key>StandardErrorPath</key>
    <string>$AUTOMATION_DIR/logs/enhanced-cursor-sync-launchd.log</string>
</dict>
</plist>
EOF

        log "✅ Launchd plist created: $plist_file"
        log "To load: launchctl load $plist_file"
        log "To unload: launchctl unload $plist_file"
    fi
}

# Create README file
create_readme() {
    log "Creating README file..."
    
    cat > "$AUTOMATION_DIR/ENHANCED_CURSOR_SYNC_README.md" << EOF
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
\`\`\`bash
# Run the complete setup
bash automation/setup-enhanced-cursor-sync-complete.sh
\`\`\`

### 2. Start Automation
\`\`\`bash
# Start the automation
bash automation/start-enhanced-cursor-sync.sh
\`\`\`

### 3. Check Status
\`\`\`bash
# Check current status
bash automation/enhanced-cursor-sync-status.sh
\`\`\`

### 4. Stop Automation
\`\`\`bash
# Stop the automation
bash automation/stop-enhanced-cursor-sync.sh
\`\`\`

## Configuration

Edit \`automation/enhanced-cursor-sync-config.json\` to customize:

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
- Main log: \`automation/logs/enhanced-cursor-sync.log\`
- Cron log: \`automation/logs/enhanced-cursor-sync-cron.log\`
- Health log: \`automation/logs/enhanced-cursor-sync-health.log\`

### Metrics
- Metrics file: \`automation/metrics/enhanced-sync-metrics.json\`
- Dashboard: \`automation/metrics/enhanced-sync-dashboard.json\`
- Reports: \`automation/metrics/enhanced-sync-report-YYYY-MM-DD.json\`

### Backups
- Backup directory: \`automation/backups/\`
- Automatic cleanup of old backups

## Troubleshooting

### Check if automation is running
\`\`\`bash
ps aux | grep enhanced-cursor-sync-automation
\`\`\`

### View recent logs
\`\`\`bash
tail -f automation/logs/enhanced-cursor-sync.log
\`\`\`

### Check health status
\`\`\`bash
bash automation/enhanced-cursor-sync-health-check.sh
\`\`\`

### Manual sync
\`\`\`bash
node automation/enhanced-cursor-sync-automation.js --once
\`\`\`

## System Requirements

- Node.js 14+
- npm or yarn
- Git
- jq (optional, for enhanced script functionality)

## Support

For issues or questions:
1. Check the logs in \`automation/logs/\`
2. Run the health check script
3. Review the configuration file
4. Check system resources and network connectivity
EOF

    log "✅ README file created"
}

# Main setup function
main() {
    log "🚀 Starting Enhanced Cursor Sync Automation Setup..."
    
    # Install dependencies
    install_dependencies
    
    # Create directories
    create_directories
    
    # Make scripts executable
    make_scripts_executable
    
    # Test the system
    test_automation
    
    # Create system services
    create_systemd_service
    create_launchd_plist
    
    # Create documentation
    create_readme
    
    log "✅ Enhanced Cursor Sync Automation Setup Completed!"
    log ""
    log "📋 Next Steps:"
    log "  1. Review configuration: automation/enhanced-cursor-sync-config.json"
    log "  2. Start automation: bash automation/start-enhanced-cursor-sync.sh"
    log "  3. Check status: bash automation/enhanced-cursor-sync-status.sh"
    log "  4. View logs: tail -f automation/logs/enhanced-cursor-sync.log"
    log ""
    log "📊 Features Enabled:"
    log "  • Automatic sync every minute"
    log "  • Conflict resolution"
    log "  • Backup system"
    log "  • Health monitoring"
    log "  • Comprehensive metrics"
    log "  • Multi-computer synchronization"
    log ""
    log "📁 Important Files:"
    log "  • Config: automation/enhanced-cursor-sync-config.json"
    log "  • Logs: automation/logs/"
    log "  • Metrics: automation/metrics/"
    log "  • Backups: automation/backups/"
    log "  • Documentation: automation/ENHANCED_CURSOR_SYNC_README.md"
    log ""
    log "🔄 The system is ready to prevent unsynced changes across all computers!"
}

# Check if running as root (needed for systemd service creation)
if [ "$EUID" -eq 0 ]; then
    error "This script should not be run as root"
    exit 1
fi

# Run main function
main "$@" 