#!/bin/bash

# Automation Cron Setup Script
# This script sets up cron jobs to run automation tasks automatically

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

log "Setting up automation cron jobs..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Create cron job entries
create_cron_jobs() {
    local cron_file="/tmp/automation_cron_$$"
    
    # Remove existing automation cron jobs
    (crontab -l 2>/dev/null | grep -v "automation") > "$cron_file" || true
    
    # Add new automation cron jobs
    cat >> "$cron_file" << EOF

# Automation System Cron Jobs
# Security Scanner - Every 6 hours
0 */6 * * * cd "$PROJECT_DIR" && node automation/tasks/SecurityScanner.js --run >> automation/logs/security-scanner.log 2>&1

# Code Quality Enforcer - Every 2 hours
0 */2 * * * cd "$PROJECT_DIR" && node automation/tasks/CodeQualityEnforcer.js --run >> automation/logs/code-quality.log 2>&1

# Performance Optimizer - Every 4 hours
0 */4 * * * cd "$PROJECT_DIR" && node automation/tasks/PerformanceOptimizer.js --run >> automation/logs/performance.log 2>&1

# Dependency Updater - Daily at midnight
0 0 * * * cd "$PROJECT_DIR" && node automation/tasks/DependencyUpdater.js --run >> automation/logs/dependency-updater.log 2>&1

# Stale Cleaner - Daily at 2 AM
0 2 * * * cd "$PROJECT_DIR" && node automation/tasks/StaleCleaner.js --run >> automation/logs/stale-cleaner.log 2>&1

# AI Enhancer - Every 8 hours
0 */8 * * * cd "$PROJECT_DIR" && node automation/tasks/AIEnhancer.js --run >> automation/logs/ai-enhancer.log 2>&1

# Comprehensive automation run - Daily at 6 AM
0 6 * * * cd "$PROJECT_DIR" && node automation/run-all-automations.js >> automation/logs/comprehensive-run.log 2>&1

# Log rotation - Weekly on Sunday at 3 AM
0 3 * * 0 cd "$PROJECT_DIR" && find automation/logs -name "*.log" -mtime +7 -delete >> automation/logs/cleanup.log 2>&1

EOF

    # Install the new cron jobs
    crontab "$cron_file"
    rm "$cron_file"
    
    log "✅ Cron jobs installed successfully"
}

# Create log directories
create_log_directories() {
    log "Creating log directories..."
    
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/backups"
    
    # Create initial log files
    touch "$AUTOMATION_DIR/logs/security-scanner.log"
    touch "$AUTOMATION_DIR/logs/code-quality.log"
    touch "$AUTOMATION_DIR/logs/performance.log"
    touch "$AUTOMATION_DIR/logs/dependency-updater.log"
    touch "$AUTOMATION_DIR/logs/stale-cleaner.log"
    touch "$AUTOMATION_DIR/logs/ai-enhancer.log"
    touch "$AUTOMATION_DIR/logs/comprehensive-run.log"
    touch "$AUTOMATION_DIR/logs/cleanup.log"
    
    log "✅ Log directories created"
}

# Create monitoring script
create_monitoring_script() {
    log "Creating monitoring script..."
    
    cat > "$AUTOMATION_DIR/monitor-automation.sh" << 'EOF'
#!/bin/bash

# Automation Monitoring Script
# Monitors automation tasks and sends alerts if needed

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Check if automation tasks are running
check_automation_health() {
    local log_files=(
        "security-scanner.log"
        "code-quality.log"
        "performance.log"
        "dependency-updater.log"
        "stale-cleaner.log"
        "ai-enhancer.log"
        "comprehensive-run.log"
    )
    
    for log_file in "${log_files[@]}"; do
        local log_path="$AUTOMATION_DIR/logs/$log_file"
        if [ -f "$log_path" ]; then
            local last_modified=$(stat -f "%m" "$log_path" 2>/dev/null || stat -c "%Y" "$log_path" 2>/dev/null)
            local current_time=$(date +%s)
            local time_diff=$((current_time - last_modified))
            
            # Alert if log hasn't been updated in 24 hours
            if [ $time_diff -gt 86400 ]; then
                echo "WARNING: $log_file hasn't been updated in 24 hours"
            fi
        fi
    done
}

# Check for errors in recent logs
check_for_errors() {
    local log_dir="$AUTOMATION_DIR/logs"
    local error_count=0
    
    for log_file in "$log_dir"/*.log; do
        if [ -f "$log_file" ]; then
            local errors=$(grep -c "ERROR\|FAILED\|FAILURE" "$log_file" 2>/dev/null || echo "0")
            if [ "$errors" -gt 0 ]; then
                echo "ERROR: Found $errors errors in $(basename "$log_file")"
                error_count=$((error_count + errors))
            fi
        fi
    done
    
    if [ $error_count -gt 0 ]; then
        echo "TOTAL ERRORS: $error_count"
    fi
}

# Main monitoring function
main() {
    echo "=== Automation Health Check ==="
    echo "Timestamp: $(date)"
    echo ""
    
    check_automation_health
    echo ""
    check_for_errors
}

main "$@"
EOF

    chmod +x "$AUTOMATION_DIR/monitor-automation.sh"
    log "✅ Monitoring script created"
}

# Create status script
create_status_script() {
    log "Creating status script..."
    
    cat > "$AUTOMATION_DIR/status.sh" << 'EOF'
#!/bin/bash

# Automation Status Script
# Shows the current status of automation tasks

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "🤖 Automation System Status"
echo "=========================="
echo ""

# Check if automation orchestrator is running
if curl -s http://localhost:3001/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Automation Orchestrator: RUNNING${NC}"
else
    echo -e "${RED}❌ Automation Orchestrator: STOPPED${NC}"
fi

echo ""

# Show recent log activity
echo "📊 Recent Activity:"
for log_file in "$AUTOMATION_DIR/logs"/*.log; do
    if [ -f "$log_file" ]; then
        local filename=$(basename "$log_file")
        local last_modified=$(stat -f "%Sm" "$log_file" 2>/dev/null || stat -c "%y" "$log_file" 2>/dev/null)
        echo "  $filename: Last updated $last_modified"
    fi
done

echo ""

# Show cron jobs
echo "⏰ Scheduled Tasks:"
crontab -l 2>/dev/null | grep "automation" | while read -r line; do
    echo "  $line"
done

echo ""
echo "📁 Log Directory: $AUTOMATION_DIR/logs"
echo "📄 Reports Directory: $AUTOMATION_DIR/reports"
EOF

    chmod +x "$AUTOMATION_DIR/status.sh"
    log "✅ Status script created"
}

# Main setup function
main() {
    log "🚀 Setting up automation cron jobs..."
    
    # Create directories and scripts
    create_log_directories
    create_monitoring_script
    create_status_script
    
    # Install cron jobs
    create_cron_jobs
    
    log "✅ Automation cron setup completed!"
    log ""
    log "📋 Installed cron jobs:"
    log "  • Security Scanner: Every 6 hours"
    log "  • Code Quality Enforcer: Every 2 hours"
    log "  • Performance Optimizer: Every 4 hours"
    log "  • Dependency Updater: Daily at midnight"
    log "  • Stale Cleaner: Daily at 2 AM"
    log "  • AI Enhancer: Every 8 hours"
    log "  • Comprehensive Run: Daily at 6 AM"
    log "  • Log Cleanup: Weekly on Sunday at 3 AM"
    log ""
    log "📊 Monitoring:"
    log "  • Check status: $AUTOMATION_DIR/status.sh"
    log "  • Monitor health: $AUTOMATION_DIR/monitor-automation.sh"
    log "  • View logs: $AUTOMATION_DIR/logs/"
    log ""
    log "🔧 To remove cron jobs, run: crontab -e"
}

# Check if running as root (needed for crontab)
if [ "$EUID" -eq 0 ]; then
    error "This script should not be run as root"
    exit 1
fi

# Run main function
main "$@" 