#!/bin/bash

# Development Automation System Cron Jobs
# This script contains various cron jobs for continuous development automation

# Set the project directory
PROJECT_DIR="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_DIR/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"

# Create logs directory if it doesn't exist
mkdir -p "$LOGS_DIR"

# Function to log messages
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOGS_DIR/development-automation-cron.log"
}

# Function to check if the system is running
check_system_running() {
    if pgrep -f "launch-development-automation.js" > /dev/null; then
        return 0
    else
        return 1
    fi
}

# Function to start the development automation system
start_development_automation() {
    log_message "Starting development automation system..."
    cd "$AUTOMATION_DIR"
    node launch-development-automation.js start >> "$LOGS_DIR/development-automation.log" 2>&1 &
    sleep 5
    if check_system_running; then
        log_message "Development automation system started successfully"
    else
        log_message "ERROR: Failed to start development automation system"
    fi
}

# Function to stop the development automation system
stop_development_automation() {
    log_message "Stopping development automation system..."
    cd "$AUTOMATION_DIR"
    node launch-development-automation.js stop >> "$LOGS_DIR/development-automation.log" 2>&1
    sleep 5
    if ! check_system_running; then
        log_message "Development automation system stopped successfully"
    else
        log_message "WARNING: Development automation system may still be running"
    fi
}

# Function to restart the development automation system
restart_development_automation() {
    log_message "Restarting development automation system..."
    stop_development_automation
    sleep 10
    start_development_automation
}

# Function to check system health
check_system_health() {
    log_message "Checking system health..."
    cd "$AUTOMATION_DIR"
    node launch-development-automation.js status >> "$LOGS_DIR/health-check.log" 2>&1
    
    # Check for critical issues
    if grep -q "critical" "$LOGS_DIR/health-check.log"; then
        log_message "CRITICAL: System health issues detected"
        # Send alert or restart system
        restart_development_automation
    elif grep -q "warning" "$LOGS_DIR/health-check.log"; then
        log_message "WARNING: System health warnings detected"
    else
        log_message "System health is good"
    fi
}

# Function to generate reports
generate_reports() {
    log_message "Generating development automation reports..."
    cd "$AUTOMATION_DIR"
    node launch-development-automation.js report >> "$LOGS_DIR/report-generation.log" 2>&1
    log_message "Reports generated successfully"
}

# Function to clean up old logs
cleanup_logs() {
    log_message "Cleaning up old logs..."
    find "$LOGS_DIR" -name "*.log" -mtime +7 -delete
    find "$AUTOMATION_DIR/reports" -name "*.json" -mtime +30 -delete
    log_message "Log cleanup completed"
}

# Function to backup system state
backup_system_state() {
    log_message "Backing up system state..."
    cd "$AUTOMATION_DIR"
    
    # Create backup directory
    BACKUP_DIR="$AUTOMATION_DIR/backups/$(date '+%Y%m%d_%H%M%S')"
    mkdir -p "$BACKUP_DIR"
    
    # Backup agent registry
    if [ -f "development-agents-registry.json" ]; then
        cp "development-agents-registry.json" "$BACKUP_DIR/"
    fi
    
    # Backup reports
    if [ -d "reports" ]; then
        cp -r "reports" "$BACKUP_DIR/"
    fi
    
    # Backup logs
    if [ -d "logs" ]; then
        cp -r "logs" "$BACKUP_DIR/"
    fi
    
    log_message "System state backed up to $BACKUP_DIR"
}

# Function to update dependencies
update_dependencies() {
    log_message "Checking for dependency updates..."
    cd "$PROJECT_DIR"
    
    # Check for outdated packages
    npm outdated >> "$LOGS_DIR/dependency-check.log" 2>&1
    
    # Check for security vulnerabilities
    npm audit >> "$LOGS_DIR/security-check.log" 2>&1
    
    # If critical vulnerabilities found, attempt to fix
    if grep -q "critical" "$LOGS_DIR/security-check.log"; then
        log_message "CRITICAL: Security vulnerabilities detected, attempting to fix..."
        npm audit fix >> "$LOGS_DIR/security-fix.log" 2>&1
    fi
    
    log_message "Dependency check completed"
}

# Function to run code quality checks
run_code_quality_checks() {
    log_message "Running code quality checks..."
    cd "$PROJECT_DIR"
    
    # Run ESLint
    npm run lint >> "$LOGS_DIR/lint-check.log" 2>&1
    
    # Run TypeScript check
    npx tsc --noEmit >> "$LOGS_DIR/typescript-check.log" 2>&1
    
    # Run tests
    npm test >> "$LOGS_DIR/test-run.log" 2>&1
    
    log_message "Code quality checks completed"
}

# Function to optimize build
optimize_build() {
    log_message "Running build optimization..."
    cd "$PROJECT_DIR"
    
    # Clean previous build
    rm -rf .next
    
    # Run build with optimization
    npm run build >> "$LOGS_DIR/build-optimization.log" 2>&1
    
    # Analyze bundle size
    npx next-bundle-analyzer >> "$LOGS_DIR/bundle-analysis.log" 2>&1
    
    log_message "Build optimization completed"
}

# Function to deploy if needed
deploy_if_needed() {
    log_message "Checking if deployment is needed..."
    
    # Check if there are new commits
    cd "$PROJECT_DIR"
    git fetch origin
    LOCAL_COMMIT=$(git rev-parse HEAD)
    REMOTE_COMMIT=$(git rev-parse origin/main)
    
    if [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
        log_message "New commits detected, triggering deployment..."
        
        # Pull latest changes
        git pull origin main >> "$LOGS_DIR/git-pull.log" 2>&1
        
        # Restart development automation system
        restart_development_automation
        
        # Trigger build and deployment
        cd "$PROJECT_DIR"
        npm run build >> "$LOGS_DIR/deployment-build.log" 2>&1
        
        log_message "Deployment triggered successfully"
    else
        log_message "No new commits, skipping deployment"
    fi
}

# Function to monitor system resources
monitor_resources() {
    log_message "Monitoring system resources..."
    
    # Check CPU usage
    CPU_USAGE=$(top -l 1 | grep "CPU usage" | awk '{print $3}' | sed 's/%//')
    log_message "CPU Usage: ${CPU_USAGE}%"
    
    # Check memory usage
    MEMORY_USAGE=$(top -l 1 | grep "PhysMem" | awk '{print $2}' | sed 's/M//')
    log_message "Memory Usage: ${MEMORY_USAGE}MB"
    
    # Check disk usage
    DISK_USAGE=$(df -h "$PROJECT_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
    log_message "Disk Usage: ${DISK_USAGE}%"
    
    # Alert if resources are high
    if [ "$CPU_USAGE" -gt 80 ]; then
        log_message "WARNING: High CPU usage detected"
    fi
    
    if [ "$DISK_USAGE" -gt 90 ]; then
        log_message "WARNING: High disk usage detected"
    fi
}

# Function to sync with remote repository
sync_with_remote() {
    log_message "Syncing with remote repository..."
    cd "$PROJECT_DIR"
    
    # Fetch latest changes
    git fetch origin >> "$LOGS_DIR/git-sync.log" 2>&1
    
    # Check for conflicts
    git status >> "$LOGS_DIR/git-status.log" 2>&1
    
    log_message "Repository sync completed"
}

# Function to generate daily summary
generate_daily_summary() {
    log_message "Generating daily summary..."
    
    SUMMARY_FILE="$LOGS_DIR/daily-summary-$(date '+%Y%m%d').log"
    
    echo "=== Development Automation Daily Summary - $(date '+%Y-%m-%d') ===" > "$SUMMARY_FILE"
    echo "" >> "$SUMMARY_FILE"
    
    # System status
    echo "System Status:" >> "$SUMMARY_FILE"
    if check_system_running; then
        echo "- Development automation system: RUNNING" >> "$SUMMARY_FILE"
    else
        echo "- Development automation system: STOPPED" >> "$SUMMARY_FILE"
    fi
    
    # Recent logs
    echo "" >> "$SUMMARY_FILE"
    echo "Recent Activity:" >> "$SUMMARY_FILE"
    tail -20 "$LOGS_DIR/development-automation-cron.log" >> "$SUMMARY_FILE"
    
    # Error summary
    echo "" >> "$SUMMARY_FILE"
    echo "Error Summary:" >> "$SUMMARY_FILE"
    grep -i "error\|critical\|warning" "$LOGS_DIR/development-automation-cron.log" | tail -10 >> "$SUMMARY_FILE"
    
    log_message "Daily summary generated: $SUMMARY_FILE"
}

# Main execution based on command line argument
case "$1" in
    "start")
        start_development_automation
        ;;
    "stop")
        stop_development_automation
        ;;
    "restart")
        restart_development_automation
        ;;
    "health")
        check_system_health
        ;;
    "report")
        generate_reports
        ;;
    "cleanup")
        cleanup_logs
        ;;
    "backup")
        backup_system_state
        ;;
    "dependencies")
        update_dependencies
        ;;
    "quality")
        run_code_quality_checks
        ;;
    "optimize")
        optimize_build
        ;;
    "deploy")
        deploy_if_needed
        ;;
    "monitor")
        monitor_resources
        ;;
    "sync")
        sync_with_remote
        ;;
    "summary")
        generate_daily_summary
        ;;
    "full")
        # Run full maintenance cycle
        log_message "Starting full maintenance cycle..."
        check_system_health
        update_dependencies
        run_code_quality_checks
        optimize_build
        deploy_if_needed
        cleanup_logs
        generate_reports
        log_message "Full maintenance cycle completed"
        ;;
    *)
        echo "Development Automation Cron Jobs"
        echo ""
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  start      - Start the development automation system"
        echo "  stop       - Stop the development automation system"
        echo "  restart    - Restart the development automation system"
        echo "  health     - Check system health"
        echo "  report     - Generate reports"
        echo "  cleanup    - Clean up old logs"
        echo "  backup     - Backup system state"
        echo "  dependencies - Update dependencies"
        echo "  quality    - Run code quality checks"
        echo "  optimize   - Optimize build"
        echo "  deploy     - Deploy if needed"
        echo "  monitor    - Monitor system resources"
        echo "  sync       - Sync with remote repository"
        echo "  summary    - Generate daily summary"
        echo "  full       - Run full maintenance cycle"
        echo ""
        exit 1
        ;;
esac

log_message "Cron job '$1' completed" 