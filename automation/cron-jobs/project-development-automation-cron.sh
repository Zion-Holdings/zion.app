#!/bin/bash

# Project Development Automation Cron Job Script
# This script manages continuous project development automation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$AUTOMATION_DIR/project-development-logs"
PID_DIR="$AUTOMATION_DIR/project-development-pids"
STATUS_DIR="$AUTOMATION_DIR/project-development-status"
REPORTS_DIR="$AUTOMATION_DIR/project-development-reports"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR" "$REPORTS_DIR"

# Configuration
FACTORY_SCRIPT="$AUTOMATION_DIR/project-development-autonomous-factory.js"
AGENTS_DIR="$AUTOMATION_DIR/project-development-agents"

# Logging functions
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/project-development.log"
}

error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1" | tee -a "$LOG_DIR/project-development-error.log"
}

# Check if factory is running
is_factory_running() {
    if [ -f "$PID_DIR/project-development-factory.pid" ]; then
        local pid=$(cat "$PID_DIR/project-development-factory.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_DIR/project-development-factory.pid"
        fi
    fi
    return 1
}

# Start the project development factory
start_factory() {
    log "Starting Project Development Autonomous Factory..."
    
    if is_factory_running; then
        log "Factory is already running"
        return 0
    fi
    
    cd "$AUTOMATION_DIR"
    
    # Start the factory
    nohup node "$FACTORY_SCRIPT" > "$LOG_DIR/factory.log" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_DIR/project-development-factory.pid"
    log "Factory started with PID: $pid"
    
    # Wait a moment to ensure it started properly
    sleep 5
    
    if is_factory_running; then
        log "Factory started successfully"
        return 0
    else
        error "Failed to start factory"
        return 1
    fi
}

# Stop the project development factory
stop_factory() {
    log "Stopping Project Development Autonomous Factory..."
    
    if [ -f "$PID_DIR/project-development-factory.pid" ]; then
        local pid=$(cat "$PID_DIR/project-development-factory.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            log "Factory stopped (PID: $pid)"
        else
            log "Factory was not running"
        fi
        rm -f "$PID_DIR/project-development-factory.pid"
    else
        log "No factory PID file found"
    fi
}

# Restart the project development factory
restart_factory() {
    log "Restarting Project Development Autonomous Factory..."
    stop_factory
    sleep 2
    start_factory
}

# Check factory health
check_factory_health() {
    if is_factory_running; then
        local pid=$(cat "$PID_DIR/project-development-factory.pid")
        log "Factory is healthy (PID: $pid)"
        return 0
    else
        error "Factory is not running"
        return 1
    fi
}

# Monitor project development agents
monitor_agents() {
    log "Monitoring project development agents..."
    
    # Check if agents are running
    local agents=("project-analyzer" "content-developer" "feature-implementer" "quality-assurance" "deployment-manager")
    
    for agent in "${agents[@]}"; do
        if [ -f "$PID_DIR/${agent}.pid" ]; then
            local pid=$(cat "$PID_DIR/${agent}.pid")
            if ps -p "$pid" > /dev/null 2>&1; then
                log "Agent $agent is running (PID: $pid)"
            else
                error "Agent $agent is not running"
                # Restart agent
                start_agent "$agent"
            fi
        else
            log "Agent $agent PID file not found, starting agent..."
            start_agent "$agent"
        fi
    done
}

# Start individual agent
start_agent() {
    local agent_name="$1"
    local agent_script="$AGENTS_DIR/${agent_name}-agent.js"
    
    if [ -f "$agent_script" ]; then
        log "Starting agent: $agent_name"
        cd "$AUTOMATION_DIR"
        nohup node "$agent_script" > "$LOG_DIR/${agent_name}.log" 2>&1 &
        local pid=$!
        echo "$pid" > "$PID_DIR/${agent_name}.pid"
        log "Agent $agent_name started (PID: $pid)"
    else
        error "Agent script not found: $agent_script"
    fi
}

# Generate status report
generate_status_report() {
    log "Generating status report..."
    
    local report_file="$STATUS_DIR/status-$(date +%Y%m%d-%H%M%S).json"
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "factory_status": {
    "running": $(is_factory_running && echo "true" || echo "false"),
    "pid": "$(is_factory_running && cat "$PID_DIR/project-development-factory.pid" || echo "null")"
  },
  "agents_status": {
    "project-analyzer": "$(check_agent_status "project-analyzer")",
    "content-developer": "$(check_agent_status "content-developer")",
    "feature-implementer": "$(check_agent_status "feature-implementer")",
    "quality-assurance": "$(check_agent_status "quality-assurance")",
    "deployment-manager": "$(check_agent_status "deployment-manager")"
  },
  "system_health": {
    "cpu_usage": "$(top -l 1 | grep "CPU usage" | awk '{print $3}')",
    "memory_usage": "$(top -l 1 | grep "PhysMem" | awk '{print $2}')",
    "disk_usage": "$(df -h . | tail -1 | awk '{print $5}')"
  },
  "recent_activities": [
    "$(tail -5 "$LOG_DIR/project-development.log" | head -1)",
    "$(tail -4 "$LOG_DIR/project-development.log" | head -1)",
    "$(tail -3 "$LOG_DIR/project-development.log" | head -1)",
    "$(tail -2 "$LOG_DIR/project-development.log" | head -1)",
    "$(tail -1 "$LOG_DIR/project-development.log")"
  ]
}
EOF
    
    log "Status report generated: $report_file"
}

# Check agent status
check_agent_status() {
    local agent_name="$1"
    if [ -f "$PID_DIR/${agent_name}.pid" ]; then
        local pid=$(cat "$PID_DIR/${agent_name}.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "running"
        else
            echo "stopped"
        fi
    else
        echo "not_started"
    fi
}

# Backup project development data
backup_data() {
    log "Backing up project development data..."
    
    local backup_dir="$AUTOMATION_DIR/project-development-backups/$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$backup_dir"
    
    # Backup logs
    if [ -d "$LOG_DIR" ]; then
        cp -r "$LOG_DIR" "$backup_dir/"
    fi
    
    # Backup reports
    if [ -d "$REPORTS_DIR" ]; then
        cp -r "$REPORTS_DIR" "$backup_dir/"
    fi
    
    # Backup status
    if [ -d "$STATUS_DIR" ]; then
        cp -r "$STATUS_DIR" "$backup_dir/"
    fi
    
    log "Backup completed: $backup_dir"
}

# Clean up old logs and reports
cleanup_old_data() {
    log "Cleaning up old data..."
    
    # Remove logs older than 7 days
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    # Remove reports older than 30 days
    find "$REPORTS_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null || true
    
    # Remove status reports older than 7 days
    find "$STATUS_DIR" -name "*.json" -mtime +7 -delete 2>/dev/null || true
    
    log "Cleanup completed"
}

# Main execution function
main() {
    local action="${1:-start}"
    
    case "$action" in
        "start")
            start_factory
            monitor_agents
            ;;
        "stop")
            stop_factory
            ;;
        "restart")
            restart_factory
            ;;
        "status")
            check_factory_health
            generate_status_report
            ;;
        "monitor")
            monitor_agents
            ;;
        "backup")
            backup_data
            ;;
        "cleanup")
            cleanup_old_data
            ;;
        "health")
            check_factory_health
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|monitor|backup|cleanup|health}"
            exit 1
            ;;
    esac
}

# Handle signals
trap 'log "Received signal, stopping factory..."; stop_factory; exit 0' SIGTERM SIGINT

# Run main function
main "$@"
