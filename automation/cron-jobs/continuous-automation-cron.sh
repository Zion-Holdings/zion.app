#!/bin/bash

# Continuous Automation Cron Job System
# This script manages all autonomous automation systems

set -e

# Configuration
PROJECT_ROOT="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"
PIDS_DIR="$AUTOMATION_DIR/pids"
DATA_DIR="$AUTOMATION_DIR/data"
REPORTS_DIR="$AUTOMATION_DIR/reports"

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
        "DEBUG")
            echo -e "${BLUE}[$timestamp] DEBUG:${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] SUCCESS:${NC} $message"
            ;;
    esac
    
    # Write to log file
    echo "[$timestamp] $level: $message" >> "$LOGS_DIR/continuous-automation.log"
}

# Create necessary directories
create_directories() {
    log "INFO" "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$PIDS_DIR"
    mkdir -p "$DATA_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$AUTOMATION_DIR/factories"
    mkdir -p "$AUTOMATION_DIR/agents"
    mkdir -p "$AUTOMATION_DIR/backups"
    
    log "SUCCESS" "Directories created successfully"
}

# Check if process is running
is_process_running() {
    local pid_file="$1"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$pid_file"
            return 1
        fi
    fi
    return 1
}

# Start automation system
start_automation_system() {
    local system_name="$1"
    local script_name="$2"
    local pid_file="$PIDS_DIR/${system_name}.pid"
    
    log "INFO" "Starting $system_name..."
    
    if is_process_running "$pid_file"; then
        log "WARN" "$system_name is already running (PID: $(cat $pid_file))"
        return 0
    fi
    
    cd "$AUTOMATION_DIR"
    
    # Start the system
    nohup node "$script_name" > "$LOGS_DIR/${system_name}.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo $pid > "$pid_file"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if is_process_running "$pid_file"; then
        log "SUCCESS" "$system_name started successfully (PID: $pid)"
        return 0
    else
        log "ERROR" "Failed to start $system_name"
        rm -f "$pid_file"
        return 1
    fi
}

# Stop automation system
stop_automation_system() {
    local system_name="$1"
    local pid_file="$PIDS_DIR/${system_name}.pid"
    
    log "INFO" "Stopping $system_name..."
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill -TERM "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                kill -KILL "$pid"
                log "WARN" "Force killed $system_name (PID: $pid)"
            else
                log "SUCCESS" "$system_name stopped gracefully"
            fi
        else
            log "WARN" "$system_name was not running"
        fi
        
        rm -f "$pid_file"
    else
        log "WARN" "PID file not found for $system_name"
    fi
}

# Restart automation system
restart_automation_system() {
    local system_name="$1"
    local script_name="$2"
    
    log "INFO" "Restarting $system_name..."
    
    stop_automation_system "$system_name"
    sleep 2
    start_automation_system "$system_name" "$script_name"
}

# Health check for automation systems
health_check() {
    log "INFO" "Performing health check..."
    
    local systems=(
        "continuous-automation-orchestrator:continuous-automation-orchestrator.js"
        "autonomous-factory-generator:autonomous-factory-generator.js"
        "infinite-improvement-loop:infinite-improvement-loop.js"
        "autonomous-agent-factory:autonomous-agent-factory.js"
        "content-generation:content-generation-automation-simple.js"
        "marketing-automation:marketing-agent-factory.js"
        "service-generation:service-generation-factory.js"
        "monetization-system:monetization-autonomous-factory.js"
    )
    
    local healthy_count=0
    local total_count=${#systems[@]}
    
    for system in "${systems[@]}"; do
        IFS=':' read -r system_name script_name <<< "$system"
        local pid_file="$PIDS_DIR/${system_name}.pid"
        
        if is_process_running "$pid_file"; then
            log "SUCCESS" "$system_name is healthy"
            ((healthy_count++))
        else
            log "ERROR" "$system_name is not running"
            # Try to restart it
            start_automation_system "$system_name" "$script_name"
        fi
    done
    
    local health_percentage=$((healthy_count * 100 / total_count))
    log "INFO" "Health check complete: $healthy_count/$total_count systems healthy ($health_percentage%)"
    
    return $health_percentage
}

# Generate system report
generate_report() {
    log "INFO" "Generating system report..."
    
    local report_file="$REPORTS_DIR/system-report-$(date +%Y%m%d-%H%M%S).json"
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "system": {
    "project_root": "$PROJECT_ROOT",
    "automation_dir": "$AUTOMATION_DIR"
  },
  "processes": {
EOF
    
    local systems=(
        "continuous-automation-orchestrator"
        "autonomous-factory-generator"
        "infinite-improvement-loop"
        "autonomous-agent-factory"
        "content-generation"
        "marketing-automation"
        "service-generation"
        "monetization-system"
    )
    
    local first=true
    for system in "${systems[@]}"; do
        local pid_file="$PIDS_DIR/${system}.pid"
        local status="stopped"
        local pid="null"
        
        if is_process_running "$pid_file"; then
            status="running"
            pid=$(cat "$pid_file")
        fi
        
        if [ "$first" = true ]; then
            first=false
        else
            echo "," >> "$report_file"
        fi
        
        cat >> "$report_file" << EOF
    "$system": {
      "status": "$status",
      "pid": $pid,
      "pid_file": "$pid_file"
    }
EOF
    done
    
    cat >> "$report_file" << EOF
  },
  "disk_usage": {
    "automation_dir": "$(du -sh $AUTOMATION_DIR 2>/dev/null | cut -f1 || echo 'unknown')",
    "logs_dir": "$(du -sh $LOGS_DIR 2>/dev/null | cut -f1 || echo 'unknown')",
    "reports_dir": "$(du -sh $REPORTS_DIR 2>/dev/null | cut -f1 || echo 'unknown')"
  },
  "system_info": {
    "hostname": "$(hostname)",
    "uptime": "$(uptime)",
    "memory": "$(free -h 2>/dev/null | grep Mem | awk '{print $3"/"$2}' || echo 'unknown')",
    "disk": "$(df -h . | tail -1 | awk '{print $5}' || echo 'unknown')"
  }
}
EOF
    
    log "SUCCESS" "System report generated: $report_file"
}

# Backup automation system
backup_system() {
    log "INFO" "Creating backup of automation system..."
    
    local backup_dir="$AUTOMATION_DIR/backups/backup-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$backup_dir"
    
    # Backup important files
    cp -r "$DATA_DIR" "$backup_dir/" 2>/dev/null || true
    cp -r "$REPORTS_DIR" "$backup_dir/" 2>/dev/null || true
    cp "$LOGS_DIR"/*.log "$backup_dir/" 2>/dev/null || true
    
    # Create backup manifest
    cat > "$backup_dir/backup-manifest.json" << EOF
{
  "backup_timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "backup_type": "automation_system",
  "contents": [
    "data/",
    "reports/",
    "logs/"
  ],
  "system_info": {
    "project_root": "$PROJECT_ROOT",
    "automation_dir": "$AUTOMATION_DIR"
  }
}
EOF
    
    log "SUCCESS" "Backup created: $backup_dir"
}

# Cleanup old files
cleanup_old_files() {
    log "INFO" "Cleaning up old files..."
    
    # Remove old log files (keep last 30 days)
    find "$LOGS_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null || true
    
    # Remove old reports (keep last 7 days)
    find "$REPORTS_DIR" -name "*.json" -mtime +7 -delete 2>/dev/null || true
    
    # Remove old backups (keep last 10 backups)
    local backup_count=$(ls -1 "$AUTOMATION_DIR/backups" 2>/dev/null | wc -l)
    if [ "$backup_count" -gt 10 ]; then
        ls -t "$AUTOMATION_DIR/backups" | tail -n +11 | xargs -I {} rm -rf "$AUTOMATION_DIR/backups/{}" 2>/dev/null || true
    fi
    
    log "SUCCESS" "Cleanup completed"
}

# Main automation cycle
main_cycle() {
    log "INFO" "Starting main automation cycle..."
    
    # Create directories
    create_directories
    
    # Start all automation systems
    local systems=(
        "continuous-automation-orchestrator:continuous-automation-orchestrator.js"
        "autonomous-factory-generator:autonomous-factory-generator.js"
        "infinite-improvement-loop:infinite-improvement-loop.js"
        "autonomous-agent-factory:autonomous-agent-factory.js"
        "content-generation:content-generation-automation-simple.js"
        "marketing-automation:marketing-agent-factory.js"
        "service-generation:service-generation-factory.js"
        "monetization-system:monetization-autonomous-factory.js"
    )
    
    for system in "${systems[@]}"; do
        IFS=':' read -r system_name script_name <<< "$system"
        start_automation_system "$system_name" "$script_name"
    done
    
    # Wait for systems to initialize
    sleep 10
    
    # Perform health check
    health_check
    
    # Generate report
    generate_report
    
    # Create backup
    backup_system
    
    # Cleanup old files
    cleanup_old_files
    
    log "SUCCESS" "Main automation cycle completed"
}

# Continuous monitoring
continuous_monitoring() {
    log "INFO" "Starting continuous monitoring..."
    
    while true; do
        # Health check every 5 minutes
        health_check
        
        # Generate report every hour
        if [ $(( $(date +%M) % 60 )) -eq 0 ]; then
            generate_report
        fi
        
        # Backup every 6 hours
        if [ $(( $(date +%H) % 6 )) -eq 0 ] && [ $(date +%M) -eq 0 ]; then
            backup_system
        fi
        
        # Cleanup every day at 2 AM
        if [ $(date +%H) -eq 2 ] && [ $(date +%M) -eq 0 ]; then
            cleanup_old_files
        fi
        
        sleep 300  # 5 minutes
    done
}

# Show status
show_status() {
    log "INFO" "Showing automation system status..."
    
    echo -e "${CYAN}=== Continuous Automation System Status ===${NC}"
    echo
    
    local systems=(
        "continuous-automation-orchestrator"
        "autonomous-factory-generator"
        "infinite-improvement-loop"
        "autonomous-agent-factory"
        "content-generation"
        "marketing-automation"
        "service-generation"
        "monetization-system"
    )
    
    for system in "${systems[@]}"; do
        local pid_file="$PIDS_DIR/${system}.pid"
        
        if is_process_running "$pid_file"; then
            local pid=$(cat "$pid_file")
            echo -e "${GREEN}✓${NC} $system (PID: $pid)"
        else
            echo -e "${RED}✗${NC} $system (not running)"
        fi
    done
    
    echo
    echo -e "${CYAN}=== System Information ===${NC}"
    echo "Project Root: $PROJECT_ROOT"
    echo "Automation Dir: $AUTOMATION_DIR"
    echo "Logs Dir: $LOGS_DIR"
    echo "Reports Dir: $REPORTS_DIR"
    echo "Backups Dir: $AUTOMATION_DIR/backups"
    echo
    
    # Show recent logs
    if [ -f "$LOGS_DIR/continuous-automation.log" ]; then
        echo -e "${CYAN}=== Recent Logs ===${NC}"
        tail -10 "$LOGS_DIR/continuous-automation.log"
    fi
}

# Handle command line arguments
case "${1:-}" in
    "start")
        main_cycle
        ;;
    "stop")
        log "INFO" "Stopping all automation systems..."
        for pid_file in "$PIDS_DIR"/*.pid; do
            if [ -f "$pid_file" ]; then
                system_name=$(basename "$pid_file" .pid)
                stop_automation_system "$system_name"
            fi
        done
        log "SUCCESS" "All automation systems stopped"
        ;;
    "restart")
        log "INFO" "Restarting all automation systems..."
        for pid_file in "$PIDS_DIR"/*.pid; do
            if [ -f "$pid_file" ]; then
                system_name=$(basename "$pid_file" .pid)
                script_name="${system_name}.js"
                restart_automation_system "$system_name" "$script_name"
            fi
        done
        log "SUCCESS" "All automation systems restarted"
        ;;
    "status")
        show_status
        ;;
    "health")
        health_check
        ;;
    "report")
        generate_report
        ;;
    "backup")
        backup_system
        ;;
    "cleanup")
        cleanup_old_files
        ;;
    "monitor")
        continuous_monitoring
        ;;
    "help"|"-h"|"--help")
        echo "Continuous Automation Cron Job System"
        echo
        echo "Usage: $0 [command]"
        echo
        echo "Commands:"
        echo "  start     - Start all automation systems"
        echo "  stop      - Stop all automation systems"
        echo "  restart   - Restart all automation systems"
        echo "  status    - Show system status"
        echo "  health    - Perform health check"
        echo "  report    - Generate system report"
        echo "  backup    - Create system backup"
        echo "  cleanup   - Clean up old files"
        echo "  monitor   - Start continuous monitoring"
        echo "  help      - Show this help message"
        echo
        ;;
    *)
        log "ERROR" "Unknown command: ${1:-}"
        log "INFO" "Use '$0 help' for usage information"
        exit 1
        ;;
esac 