#!/bin/bash

# Automation Cron Jobs Setup Script
# Sets up automated error fixing and monitoring for the automation systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"

# Ensure logs directory exists
mkdir -p "$LOGS_DIR"

echo -e "${BLUE}🔧 Setting up Automation Cron Jobs${NC}"
echo "=================================="
echo "Project Root: $PROJECT_ROOT"
echo "Automation Dir: $AUTOMATION_DIR"
echo "Scripts Dir: $SCRIPT_DIR"
echo ""

# Function to add cron job if it doesn't exist
add_cron_job() {
    local schedule="$1"
    local command="$2"
    local description="$3"
    
    echo -e "${YELLOW}📅 Adding cron job: $description${NC}"
    
    # Check if cron job already exists
    if crontab -l 2>/dev/null | grep -q "$command"; then
        echo -e "${YELLOW}⚠️  Cron job already exists, skipping...${NC}"
        return
    fi
    
    # Add the cron job
    (crontab -l 2>/dev/null; echo "$schedule $command") | crontab -
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Cron job added successfully${NC}"
    else
        echo -e "${RED}❌ Failed to add cron job${NC}"
        return 1
    fi
}

# Function to create log rotation script
create_log_rotation_script() {
    local script_path="$SCRIPT_DIR/rotate-logs.sh"
    
    cat > "$script_path" << 'EOF'
#!/bin/bash

# Log Rotation Script for Automation Systems
# Rotates and compresses old log files

AUTOMATION_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOGS_DIR="$AUTOMATION_DIR/logs"
BACKUP_DIR="$AUTOMATION_DIR/logs/backups"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Get current date
DATE=$(date +%Y%m%d_%H%M%S)

# Rotate log files older than 7 days
find "$LOGS_DIR" -name "*.log" -type f -mtime +7 -exec bash -c '
    file="$1"
    filename=$(basename "$file")
    backup_file="$BACKUP_DIR/${filename%.*}_${DATE}.log.gz"
    gzip -c "$file" > "$backup_file"
    echo "Rotated: $file -> $backup_file"
    rm "$file"
' bash {} \;

# Clean up old backups (keep last 30 days)
find "$BACKUP_DIR" -name "*.gz" -type f -mtime +30 -delete

echo "Log rotation completed at $(date)"
EOF

    chmod +x "$script_path"
    echo -e "${GREEN}✅ Log rotation script created: $script_path${NC}"
}

# Function to create health check script
create_health_check_script() {
    local script_path="$SCRIPT_DIR/health-check.sh"
    
    cat > "$script_path" << EOF
#!/bin/bash

# Health Check Script for Automation Systems
# Runs health checks and triggers fixes if needed

set -e

SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="\$(dirname "\$(dirname "\$SCRIPT_DIR")")"
AUTOMATION_DIR="\$PROJECT_ROOT/automation"
LOGS_DIR="\$AUTOMATION_DIR/logs"

# Ensure we're in the project root
cd "\$PROJECT_ROOT"

# Run health check
echo "Running automation health check at \$(date)"
node "\$SCRIPT_DIR/automation-health-check.js" >> "\$LOGS_DIR/health-check-cron.log" 2>&1

# Check if health check failed
if [ \$? -ne 0 ]; then
    echo "Health check failed, triggering fixes at \$(date)"
    node "\$SCRIPT_DIR/fix-automation-errors.js" >> "\$LOGS_DIR/fix-cron.log" 2>&1
fi

echo "Health check completed at \$(date)"
EOF

    chmod +x "$script_path"
    echo -e "${GREEN}✅ Health check script created: $script_path${NC}"
}

# Function to create emergency fix script
create_emergency_fix_script() {
    local script_path="$SCRIPT_DIR/emergency-fix.sh"
    
    cat > "$script_path" << EOF
#!/bin/bash

# Emergency Fix Script for Automation Systems
# Comprehensive fix for critical automation issues

set -e

SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="\$(dirname "\$(dirname "\$SCRIPT_DIR")")"
AUTOMATION_DIR="\$PROJECT_ROOT/automation"
LOGS_DIR="\$AUTOMATION_DIR/logs"

# Ensure we're in the project root
cd "\$PROJECT_ROOT"

echo "Starting emergency fix at \$(date)"

# Stop all automation processes
echo "Stopping automation processes..."
pkill -f "automation" || true
sleep 5

# Run comprehensive fix
echo "Running comprehensive fix..."
node "\$SCRIPT_DIR/fix-automation-errors.js" >> "\$LOGS_DIR/emergency-fix.log" 2>&1

# Restart automation systems
echo "Restarting automation systems..."
node "\$AUTOMATION_DIR/start-working-automations.js" >> "\$LOGS_DIR/restart.log" 2>&1 &

echo "Emergency fix completed at \$(date)"
EOF

    chmod +x "$script_path"
    echo -e "${GREEN}✅ Emergency fix script created: $script_path${NC}"
}

# Function to create monitoring script
create_monitoring_script() {
    local script_path="$SCRIPT_DIR/start-monitor.sh"
    
    cat > "$script_path" << EOF
#!/bin/bash

# Start Automation Monitor Script
# Starts the continuous monitoring system

set -e

SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="\$(dirname "\$(dirname "\$SCRIPT_DIR")")"
AUTOMATION_DIR="\$PROJECT_ROOT/automation"
LOGS_DIR="\$AUTOMATION_DIR/logs"

# Ensure we're in the project root
cd "\$PROJECT_ROOT"

# Check if monitor is already running
if pgrep -f "automation-monitor.js" > /dev/null; then
    echo "Automation monitor is already running"
    exit 0
fi

echo "Starting automation monitor at \$(date)"
nohup node "\$SCRIPT_DIR/automation-monitor.js" >> "\$LOGS_DIR/monitor.log" 2>&1 &

echo "Automation monitor started with PID \$!"
EOF

    chmod +x "$script_path"
    echo -e "${GREEN}✅ Monitoring script created: $script_path${NC}"
}

# Main setup process
echo -e "${BLUE}📋 Creating automation scripts...${NC}"

# Create log rotation script
create_log_rotation_script

# Create health check script
create_health_check_script

# Create emergency fix script
create_emergency_fix_script

# Create monitoring script
create_monitoring_script

echo ""
echo -e "${BLUE}📅 Setting up cron jobs...${NC}"

# Add cron jobs
# Health check every 5 minutes
add_cron_job "*/5 * * * *" "$SCRIPT_DIR/health-check.sh" "Health check (every 5 minutes)"

# Log rotation daily at 2 AM
add_cron_job "0 2 * * *" "$SCRIPT_DIR/rotate-logs.sh" "Log rotation (daily at 2 AM)"

# Emergency fix check every hour
add_cron_job "0 * * * *" "$SCRIPT_DIR/emergency-fix.sh" "Emergency fix check (hourly)"

# Start monitor on system boot
add_cron_job "@reboot" "$SCRIPT_DIR/start-monitor.sh" "Start monitor on boot"

# Comprehensive fix daily at 3 AM
add_cron_job "0 3 * * *" "cd $PROJECT_ROOT && node $SCRIPT_DIR/fix-automation-errors.js >> $LOGS_DIR/daily-fix.log 2>&1" "Daily comprehensive fix"

echo ""
echo -e "${BLUE}🔧 Setting up systemd service (if available)...${NC}"

# Create systemd service if systemd is available
if command -v systemctl >/dev/null 2>&1; then
    create_systemd_service
else
    echo -e "${YELLOW}⚠️  systemctl not available, skipping systemd service creation${NC}"
fi

echo ""
echo -e "${GREEN}✅ Automation cron jobs setup completed!${NC}"
echo ""
echo -e "${BLUE}📊 Cron jobs summary:${NC}"
echo "• Health check: Every 5 minutes"
echo "• Log rotation: Daily at 2 AM"
echo "• Emergency fix: Hourly"
echo "• Monitor start: On system boot"
echo "• Comprehensive fix: Daily at 3 AM"
echo ""
echo -e "${BLUE}📁 Log files location:${NC}"
echo "$LOGS_DIR"
echo ""
echo -e "${BLUE}🔍 To view current cron jobs:${NC}"
echo "crontab -l"
echo ""
echo -e "${BLUE}🛠️  To manually run health check:${NC}"
echo "$SCRIPT_DIR/health-check.sh"
echo ""
echo -e "${BLUE}🚨 To manually run emergency fix:${NC}"
echo "$SCRIPT_DIR/emergency-fix.sh"

# Function to create systemd service
create_systemd_service() {
    local service_name="zion-automation-monitor"
    local service_file="/etc/systemd/system/$service_name.service"
    
    # Check if running as root
    if [ "$EUID" -ne 0 ]; then
        echo -e "${YELLOW}⚠️  Not running as root, skipping systemd service creation${NC}"
        return
    fi
    
    cat > "$service_file" << EOF
[Unit]
Description=Zion Automation Monitor
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_ROOT
ExecStart=/usr/bin/node $SCRIPT_DIR/automation-monitor.js
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

    # Reload systemd and enable service
    systemctl daemon-reload
    systemctl enable "$service_name"
    
    echo -e "${GREEN}✅ Systemd service created: $service_name${NC}"
    echo -e "${BLUE}📋 To start the service:${NC}"
    echo "sudo systemctl start $service_name"
    echo -e "${BLUE}📋 To check status:${NC}"
    echo "sudo systemctl status $service_name"
} 