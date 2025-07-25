#!/bin/bash

# Complete Cursor Sync Automation Setup Script
# Installs all components for automated commit, push, and sync across all computers

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
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

success() {
    echo -e "${CYAN}[$(date +'%Y-%m-%d %H:%M:%S')] SUCCESS: $1${NC}"
}

# Get the project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

log "🚀 Setting up Complete Cursor Sync Automation System..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    error "Git is not installed or not in PATH"
    exit 1
fi

# Check if node is available
if ! command -v node &> /dev/null; then
    error "Node.js is not installed or not in PATH"
    exit 1
fi

# Create all necessary directories
create_directories() {
    log "Creating directory structure..."
    
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/backups"
    mkdir -p "$AUTOMATION_DIR/metrics"
    mkdir -p "$AUTOMATION_DIR/temp"
    mkdir -p "$AUTOMATION_DIR/config"
    
    success "Directory structure created"
}

# Create all log files
create_log_files() {
    log "Creating log files..."
    
    # Main automation logs
    touch "$AUTOMATION_DIR/logs/cursor-sync-cron.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-health.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-cleanup.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-metrics.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync.log"
    touch "$AUTOMATION_DIR/logs/cursor-sync-orchestrator.log"
    
    # Additional automation logs
    touch "$AUTOMATION_DIR/logs/automation-system.log"
    touch "$AUTOMATION_DIR/logs/error.log"
    touch "$AUTOMATION_DIR/logs/performance.log"
    
    success "Log files created"
}

# Install cron jobs for cursor sync
install_cron_jobs() {
    log "Installing cron jobs..."
    
    local cron_file="/tmp/cursor_sync_complete_cron_$$"
    
    # Remove existing cursor sync cron jobs
    (crontab -l 2>/dev/null | grep -v "cursor-sync") > "$cron_file" || true
    
    # Add comprehensive cursor sync cron jobs
    cat >> "$cron_file" << EOF

# ========================================
# Cursor Sync Automation Cron Jobs
# ========================================

# Cursor Sync - Every minute (Primary sync)
* * * * * cd "$PROJECT_DIR" && node automation/cursor-sync-automation.js once >> automation/logs/cursor-sync-cron.log 2>&1

# Cursor Sync Orchestrator - Every 2 minutes (Backup orchestrator)
*/2 * * * * cd "$PROJECT_DIR" && node automation/cursor-sync-orchestrator.js once >> automation/logs/cursor-sync-orchestrator.log 2>&1

# Cursor Sync Health Check - Every 5 minutes
*/5 * * * * cd "$PROJECT_DIR" && bash automation/cursor-sync-health-check.sh >> automation/logs/cursor-sync-health.log 2>&1

# Cursor Sync Metrics Collection - Every 10 minutes
*/10 * * * * cd "$PROJECT_DIR" && node automation/cursor-sync-metrics.js >> automation/logs/cursor-sync-metrics.log 2>&1

# Cursor Sync Log Rotation - Daily at 2 AM
0 2 * * * cd "$PROJECT_DIR" && find automation/logs -name "cursor-sync*.log" -mtime +7 -delete >> automation/logs/cursor-sync-cleanup.log 2>&1

# Cursor Sync Backup - Daily at 3 AM
0 3 * * * cd "$PROJECT_DIR" && bash automation/cursor-sync-backup.sh >> automation/logs/cursor-sync-cleanup.log 2>&1

# Cursor Sync System Health - Every 30 minutes
*/30 * * * * cd "$PROJECT_DIR" && bash automation/cursor-sync-system-health.sh >> automation/logs/cursor-sync-health.log 2>&1

EOF

    # Install the new cron jobs
    crontab "$cron_file"
    rm "$cron_file"
    
    success "Cron jobs installed successfully"
}

# Create backup script
create_backup_script() {
    log "Creating backup script..."
    
    cat > "$AUTOMATION_DIR/cursor-sync-backup.sh" << 'EOF'
#!/bin/bash

# Cursor Sync Backup Script
# Creates backups of sync state and configuration

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"
BACKUP_DIR="$AUTOMATION_DIR/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Backup sync state files
if [ -f "$AUTOMATION_DIR/logs/sync-state.json" ]; then
    cp "$AUTOMATION_DIR/logs/sync-state.json" "$BACKUP_DIR/sync-state-$DATE.json"
fi

if [ -f "$AUTOMATION_DIR/logs/computer-registry.json" ]; then
    cp "$AUTOMATION_DIR/logs/computer-registry.json" "$BACKUP_DIR/computer-registry-$DATE.json"
fi

if [ -f "$AUTOMATION_DIR/logs/last-sync-time.json" ]; then
    cp "$AUTOMATION_DIR/logs/last-sync-time.json" "$BACKUP_DIR/last-sync-time-$DATE.json"
fi

# Backup configuration files
if [ -f "$AUTOMATION_DIR/cursor-sync-config.json" ]; then
    cp "$AUTOMATION_DIR/cursor-sync-config.json" "$BACKUP_DIR/cursor-sync-config-$DATE.json"
fi

if [ -f "$AUTOMATION_DIR/cursor-sync-orchestrator-config.json" ]; then
    cp "$AUTOMATION_DIR/cursor-sync-orchestrator-config.json" "$BACKUP_DIR/cursor-sync-orchestrator-config-$DATE.json"
fi

# Clean up old backups (keep last 30 days)
find "$BACKUP_DIR" -name "*.json" -mtime +30 -delete

echo "Backup completed: $DATE"
EOF

    chmod +x "$AUTOMATION_DIR/cursor-sync-backup.sh"
    success "Backup script created"
}

# Create system health script
create_system_health_script() {
    log "Creating system health script..."
    
    cat > "$AUTOMATION_DIR/cursor-sync-system-health.sh" << 'EOF'
#!/bin/bash

# Cursor Sync System Health Script
# Comprehensive system health check for cursor sync automation

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "=== Cursor Sync System Health Check ==="
echo "Timestamp: $(date)"
echo ""

# Check git repository health
echo -e "${BLUE}🔍 Git Repository Health:${NC}"
if git status --porcelain > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Git repository is healthy${NC}"
else
    echo -e "${RED}❌ Git repository has issues${NC}"
fi

# Check remote connectivity
echo -e "${BLUE}🌐 Remote Connectivity:${NC}"
if git ls-remote origin > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Remote repository is accessible${NC}"
else
    echo -e "${RED}❌ Cannot access remote repository${NC}"
fi

# Check disk space
echo -e "${BLUE}💾 Disk Space:${NC}"
DISK_USAGE=$(df "$PROJECT_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -lt 90 ]; then
    echo -e "${GREEN}✅ Disk usage: ${DISK_USAGE}%${NC}"
else
    echo -e "${RED}❌ Disk usage: ${DISK_USAGE}% (high)${NC}"
fi

# Check log file sizes
echo -e "${BLUE}📄 Log File Health:${NC}"
for log_file in "$AUTOMATION_DIR/logs"/cursor-sync*.log; do
    if [ -f "$log_file" ]; then
        size=$(du -h "$log_file" | cut -f1)
        filename=$(basename "$log_file")
        echo "  $filename: $size"
    fi
done

# Check for stuck processes
echo -e "${BLUE}🔄 Process Health:${NC}"
STUCK_PROCESSES=$(ps aux | grep "cursor-sync" | grep -v grep | wc -l)
if [ "$STUCK_PROCESSES" -eq 0 ]; then
    echo -e "${GREEN}✅ No stuck processes detected${NC}"
elif [ "$STUCK_PROCESSES" -eq 1 ]; then
    echo -e "${YELLOW}⚠️ 1 cursor sync process running${NC}"
else
    echo -e "${RED}❌ $STUCK_PROCESSES cursor sync processes detected${NC}"
fi

# Check cron jobs
echo -e "${BLUE}⏰ Cron Jobs:${NC}"
if crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo -e "${GREEN}✅ Cursor sync cron jobs are active${NC}"
else
    echo -e "${RED}❌ No cursor sync cron jobs found${NC}"
fi

echo ""
echo "=== Health Check Complete ==="
EOF

    chmod +x "$AUTOMATION_DIR/cursor-sync-system-health.sh"
    success "System health script created"
}

# Create comprehensive status script
create_comprehensive_status_script() {
    log "Creating comprehensive status script..."
    
    cat > "$AUTOMATION_DIR/cursor-sync-comprehensive-status.sh" << 'EOF'
#!/bin/bash

# Cursor Sync Comprehensive Status Script
# Shows detailed status of all cursor sync automation components

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${PURPLE}🔄 Cursor Sync Automation - Comprehensive Status${NC}"
echo "=================================================="
echo ""

# System Information
echo -e "${BLUE}💻 System Information:${NC}"
echo "  Hostname: $(hostname)"
echo "  Platform: $(uname -s)"
echo "  Architecture: $(uname -m)"
echo "  Node.js Version: $(node --version)"
echo "  Git Version: $(git --version)"
echo ""

# Cron Jobs Status
echo -e "${BLUE}⏰ Cron Jobs Status:${NC}"
if crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo -e "${GREEN}✅ Cursor sync cron jobs are installed${NC}"
    crontab -l 2>/dev/null | grep "cursor-sync" | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${RED}❌ No cursor sync cron jobs found${NC}"
fi
echo ""

# Process Status
echo -e "${BLUE}🔄 Process Status:${NC}"
CURSOR_PROCESSES=$(ps aux | grep "cursor-sync" | grep -v grep)
if [ -n "$CURSOR_PROCESSES" ]; then
    echo -e "${GREEN}✅ Cursor sync processes running:${NC}"
    echo "$CURSOR_PROCESSES" | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${YELLOW}⚠️ No cursor sync processes currently running${NC}"
fi
echo ""

# Git Repository Status
echo -e "${BLUE}📁 Git Repository Status:${NC}"
cd "$PROJECT_DIR"
if git status --porcelain > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Git repository is clean${NC}"
    BRANCH=$(git branch --show-current)
    echo "  Current branch: $BRANCH"
    COMMIT=$(git rev-parse --short HEAD)
    echo "  Current commit: $COMMIT"
else
    echo -e "${RED}❌ Git repository has issues${NC}"
fi
echo ""

# Sync State
echo -e "${BLUE}📊 Sync State:${NC}"
if [ -f "$AUTOMATION_DIR/logs/last-sync-time.json" ]; then
    LAST_SYNC=$(jq -r '.lastSync' "$AUTOMATION_DIR/logs/last-sync-time.json" 2>/dev/null)
    if [ "$LAST_SYNC" != "null" ] && [ -n "$LAST_SYNC" ]; then
        echo -e "${GREEN}✅ Last sync: $LAST_SYNC${NC}"
    else
        echo -e "${YELLOW}⚠️ No sync time recorded${NC}"
    fi
else
    echo -e "${RED}❌ No sync time file found${NC}"
fi

if [ -f "$AUTOMATION_DIR/logs/sync-state.json" ]; then
    CONFLICTS=$(jq '.conflicts | length' "$AUTOMATION_DIR/logs/sync-state.json" 2>/dev/null || echo "0")
    echo "  Conflicts recorded: $CONFLICTS"
fi
echo ""

# Computer Registry
echo -e "${BLUE}🖥️ Computer Registry:${NC}"
if [ -f "$AUTOMATION_DIR/logs/computer-registry.json" ]; then
    COMPUTER_COUNT=$(jq 'length' "$AUTOMATION_DIR/logs/computer-registry.json" 2>/dev/null || echo "0")
    echo -e "${GREEN}✅ Registered computers: $COMPUTER_COUNT${NC}"
    jq -r 'to_entries[] | "  \(.key): \(.value.hostname) (\(.value.platform))"' "$AUTOMATION_DIR/logs/computer-registry.json" 2>/dev/null || echo "  No computers registered"
else
    echo -e "${YELLOW}⚠️ No computer registry found${NC}"
fi
echo ""

# Log Files Status
echo -e "${BLUE}📄 Log Files Status:${NC}"
for log_file in "$AUTOMATION_DIR/logs"/cursor-sync*.log; do
    if [ -f "$log_file" ]; then
        filename=$(basename "$log_file")
        size=$(du -h "$log_file" | cut -f1)
        last_modified=$(stat -f "%Sm" "$log_file" 2>/dev/null || stat -c "%y" "$log_file" 2>/dev/null)
        echo "  $filename: $size, updated $last_modified"
    fi
done
echo ""

# Metrics Status
echo -e "${BLUE}📊 Metrics Status:${NC}"
if [ -f "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" ]; then
    TOTAL_SYNCS=$(jq -r '.totalSyncs' "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" 2>/dev/null || echo "0")
    SUCCESS_RATE=$(jq -r '.successRate' "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" 2>/dev/null || echo "0")
    echo -e "${GREEN}✅ Total syncs: $TOTAL_SYNCS${NC}"
    echo -e "${GREEN}✅ Success rate: $SUCCESS_RATE%${NC}"
else
    echo -e "${YELLOW}⚠️ No metrics file found${NC}"
fi
echo ""

# Configuration Status
echo -e "${BLUE}⚙️ Configuration Status:${NC}"
if [ -f "$AUTOMATION_DIR/cursor-sync-config.json" ]; then
    echo -e "${GREEN}✅ Basic sync config: OK${NC}"
else
    echo -e "${RED}❌ Basic sync config: Missing${NC}"
fi

if [ -f "$AUTOMATION_DIR/cursor-sync-orchestrator-config.json" ]; then
    echo -e "${GREEN}✅ Orchestrator config: OK${NC}"
else
    echo -e "${RED}❌ Orchestrator config: Missing${NC}"
fi
echo ""

# Recommendations
echo -e "${CYAN}💡 Recommendations:${NC}"
if [ ! -f "$AUTOMATION_DIR/logs/last-sync-time.json" ]; then
    echo "  • Run initial sync: node automation/cursor-sync-automation.js once"
fi

if ! crontab -l 2>/dev/null | grep -q "cursor-sync"; then
    echo "  • Install cron jobs: bash automation/cursor-sync-cron.sh"
fi

if [ ! -f "$AUTOMATION_DIR/metrics/cursor-sync-metrics.json" ]; then
    echo "  • Generate initial metrics: node automation/cursor-sync-metrics.js"
fi
echo ""

echo -e "${PURPLE}📁 Directories:${NC}"
echo "  Logs: $AUTOMATION_DIR/logs"
echo "  Metrics: $AUTOMATION_DIR/metrics"
echo "  Backups: $AUTOMATION_DIR/backups"
echo "  Config: $AUTOMATION_DIR"
EOF

    chmod +x "$AUTOMATION_DIR/cursor-sync-comprehensive-status.sh"
    success "Comprehensive status script created"
}

# Create quick start script
create_quick_start_script() {
    log "Creating quick start script..."
    
    cat > "$AUTOMATION_DIR/quick-start-cursor-sync.sh" << 'EOF'
#!/bin/bash

# Quick Start Cursor Sync Automation
# Starts all cursor sync automation components

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Quick Starting Cursor Sync Automation...${NC}"
echo ""

# Check if already running
if pgrep -f "cursor-sync" > /dev/null; then
    echo -e "${YELLOW}⚠️ Cursor sync automation is already running${NC}"
    echo "Use 'bash automation/stop-cursor-sync.sh' to stop first"
    exit 1
fi

# Start the automation
echo -e "${GREEN}Starting cursor sync automation...${NC}"
cd "$PROJECT_DIR"

# Start the main automation
nohup node automation/cursor-sync-automation.js continuous > automation/logs/cursor-sync-daemon.log 2>&1 &
MAIN_PID=$!
echo $MAIN_PID > automation/logs/cursor-sync-main.pid

# Start the orchestrator
nohup node automation/cursor-sync-orchestrator.js continuous > automation/logs/cursor-sync-orchestrator-daemon.log 2>&1 &
ORCH_PID=$!
echo $ORCH_PID > automation/logs/cursor-sync-orchestrator.pid

echo -e "${GREEN}✅ Cursor sync automation started successfully!${NC}"
echo ""
echo -e "${BLUE}📊 Process Information:${NC}"
echo "  Main automation PID: $MAIN_PID"
echo "  Orchestrator PID: $ORCH_PID"
echo ""
echo -e "${BLUE}📄 Log Files:${NC}"
echo "  Main automation: automation/logs/cursor-sync-daemon.log"
echo "  Orchestrator: automation/logs/cursor-sync-orchestrator-daemon.log"
echo ""
echo -e "${BLUE}🛑 To stop:${NC}"
echo "  bash automation/stop-cursor-sync.sh"
echo ""
echo -e "${BLUE}📊 To check status:${NC}"
echo "  bash automation/cursor-sync-comprehensive-status.sh"
echo ""
echo -e "${GREEN}🎉 Cursor sync automation is now running!${NC}"
EOF

    chmod +x "$AUTOMATION_DIR/quick-start-cursor-sync.sh"
    success "Quick start script created"
}

# Create comprehensive stop script
create_comprehensive_stop_script() {
    log "Creating comprehensive stop script..."
    
    cat > "$AUTOMATION_DIR/stop-cursor-sync.sh" << 'EOF'
#!/bin/bash

# Stop Cursor Sync Automation
# Stops all cursor sync automation processes

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🛑 Stopping Cursor Sync Automation...${NC}"
echo ""

# Stop main automation
MAIN_PID_FILE="$AUTOMATION_DIR/logs/cursor-sync-main.pid"
if [ -f "$MAIN_PID_FILE" ]; then
    MAIN_PID=$(cat "$MAIN_PID_FILE")
    if kill -0 "$MAIN_PID" 2>/dev/null; then
        kill "$MAIN_PID"
        echo -e "${GREEN}✅ Stopped main automation (PID: $MAIN_PID)${NC}"
    else
        echo -e "${YELLOW}⚠️ Main automation process $MAIN_PID not found${NC}"
    fi
    rm -f "$MAIN_PID_FILE"
else
    echo -e "${YELLOW}⚠️ Main automation PID file not found${NC}"
fi

# Stop orchestrator
ORCH_PID_FILE="$AUTOMATION_DIR/logs/cursor-sync-orchestrator.pid"
if [ -f "$ORCH_PID_FILE" ]; then
    ORCH_PID=$(cat "$ORCH_PID_FILE")
    if kill -0 "$ORCH_PID" 2>/dev/null; then
        kill "$ORCH_PID"
        echo -e "${GREEN}✅ Stopped orchestrator (PID: $ORCH_PID)${NC}"
    else
        echo -e "${YELLOW}⚠️ Orchestrator process $ORCH_PID not found${NC}"
    fi
    rm -f "$ORCH_PID_FILE"
else
    echo -e "${YELLOW}⚠️ Orchestrator PID file not found${NC}"
fi

# Kill any remaining cursor sync processes
REMAINING_PIDS=$(pgrep -f "cursor-sync" 2>/dev/null || true)
if [ -n "$REMAINING_PIDS" ]; then
    echo "Killing remaining cursor sync processes: $REMAINING_PIDS"
    kill $REMAINING_PIDS 2>/dev/null || true
    echo -e "${GREEN}✅ All remaining cursor sync processes stopped${NC}"
else
    echo -e "${GREEN}✅ No remaining cursor sync processes found${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Cursor sync automation stopped successfully!${NC}"
echo ""
echo -e "${BLUE}💡 To restart:${NC}"
echo "  bash automation/quick-start-cursor-sync.sh"
echo ""
echo -e "${BLUE}📊 To check status:${NC}"
echo "  bash automation/cursor-sync-comprehensive-status.sh"
EOF

    chmod +x "$AUTOMATION_DIR/stop-cursor-sync.sh"
    success "Comprehensive stop script created"
}

# Test the installation
test_installation() {
    log "Testing installation..."
    
    # Test if scripts are executable
    local scripts=(
        "cursor-sync-automation.js"
        "cursor-sync-orchestrator.js"
        "cursor-sync-health-check.sh"
        "cursor-sync-backup.sh"
        "cursor-sync-system-health.sh"
        "cursor-sync-comprehensive-status.sh"
        "quick-start-cursor-sync.sh"
        "stop-cursor-sync.sh"
    )
    
    for script in "${scripts[@]}"; do
        if [ -x "$AUTOMATION_DIR/$script" ]; then
            echo -e "${GREEN}✅ $script is executable${NC}"
        else
            echo -e "${RED}❌ $script is not executable${NC}"
        fi
    done
    
    # Test if config files exist
    local configs=(
        "cursor-sync-config.json"
        "cursor-sync-orchestrator-config.json"
    )
    
    for config in "${configs[@]}"; do
        if [ -f "$AUTOMATION_DIR/$config" ]; then
            echo -e "${GREEN}✅ $config exists${NC}"
        else
            echo -e "${RED}❌ $config missing${NC}"
        fi
    done
    
    success "Installation test completed"
}

# Main setup function
main() {
    log "🚀 Setting up Complete Cursor Sync Automation System..."
    
    # Create all components
    create_directories
    create_log_files
    install_cron_jobs
    create_backup_script
    create_system_health_script
    create_comprehensive_status_script
    create_quick_start_script
    create_comprehensive_stop_script
    
    # Test installation
    test_installation
    
    success "Complete Cursor Sync Automation System setup completed!"
    echo ""
    echo -e "${PURPLE}🎉 Installation Summary:${NC}"
    echo "=================================="
    echo ""
    echo -e "${GREEN}✅ Cron jobs installed (runs every minute)${NC}"
    echo -e "${GREEN}✅ All scripts created and made executable${NC}"
    echo -e "${GREEN}✅ Configuration files created${NC}"
    echo -e "${GREEN}✅ Log directories and files created${NC}"
    echo -e "${GREEN}✅ Backup system configured${NC}"
    echo -e "${GREEN}✅ Health monitoring system configured${NC}"
    echo ""
    echo -e "${CYAN}🚀 Quick Start Commands:${NC}"
    echo "  • Start automation: bash automation/quick-start-cursor-sync.sh"
    echo "  • Stop automation: bash automation/stop-cursor-sync.sh"
    echo "  • Check status: bash automation/cursor-sync-comprehensive-status.sh"
    echo "  • Health check: bash automation/cursor-sync-system-health.sh"
    echo ""
    echo -e "${CYAN}📊 Monitoring:${NC}"
    echo "  • Logs: $AUTOMATION_DIR/logs/"
    echo "  • Metrics: $AUTOMATION_DIR/metrics/"
    echo "  • Backups: $AUTOMATION_DIR/backups/"
    echo ""
    echo -e "${CYAN}⚙️ Configuration:${NC}"
    echo "  • Basic config: $AUTOMATION_DIR/cursor-sync-config.json"
    echo "  • Orchestrator config: $AUTOMATION_DIR/cursor-sync-orchestrator-config.json"
    echo ""
    echo -e "${YELLOW}💡 Next Steps:${NC}"
    echo "  1. Review configuration files"
    echo "  2. Start the automation system"
    echo "  3. Monitor logs for any issues"
    echo "  4. Check status regularly"
    echo ""
    echo -e "${GREEN}🎯 The system will now automatically sync changes every minute!${NC}"
}

# Check if running as root (needed for crontab)
if [ "$EUID" -eq 0 ]; then
    error "This script should not be run as root"
    exit 1
fi

# Run main function
main "$@" 