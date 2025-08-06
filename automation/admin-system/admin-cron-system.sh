#!/bin/bash

# Admin Autonomous System Cron Jobs
# This script manages all cron jobs for the admin autonomous agent system

ADMIN_SYSTEM_PATH="/Users/miami2/Documents/GitHub/bolt.new.zion.app/automation/admin-system"
LOG_PATH="$ADMIN_SYSTEM_PATH/logs"
PID_PATH="$ADMIN_SYSTEM_PATH/pids"
BACKUP_PATH="$ADMIN_SYSTEM_PATH/backups"

# Create necessary directories
mkdir -p "$LOG_PATH"
mkdir -p "$PID_PATH"
mkdir -p "$BACKUP_PATH"

# Function to log cron activities
log_cron_activity() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_PATH/cron-system.log"
}

# Function to check if a process is running
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

# Function to start a process
start_process() {
    local name="$1"
    local command="$2"
    local pid_file="$PID_PATH/${name}.pid"
    
    if ! is_process_running "$pid_file"; then
        log_cron_activity "Starting $name"
        nohup $command > "$LOG_PATH/${name}.log" 2>&1 &
        echo $! > "$pid_file"
        log_cron_activity "$name started with PID $(cat $pid_file)"
    else
        log_cron_activity "$name is already running with PID $(cat $pid_file)"
    fi
}

# Function to stop a process
stop_process() {
    local name="$1"
    local pid_file="$PID_PATH/${name}.pid"
    
    if is_process_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        log_cron_activity "Stopping $name (PID: $pid)"
        kill "$pid" 2>/dev/null
        sleep 2
        if ps -p "$pid" > /dev/null 2>&1; then
            kill -9 "$pid" 2>/dev/null
        fi
        rm -f "$pid_file"
        log_cron_activity "$name stopped"
    else
        log_cron_activity "$name is not running"
    fi
}

# Function to restart a process
restart_process() {
    local name="$1"
    local command="$2"
    stop_process "$name"
    sleep 2
    start_process "$name" "$command"
}

# Main admin orchestrator management
manage_admin_orchestrator() {
    local orchestrator_pid="$PID_PATH/admin-orchestrator.pid"
    
    if ! is_process_running "$orchestrator_pid"; then
        log_cron_activity "Starting Admin Autonomous Orchestrator"
        cd "$ADMIN_SYSTEM_PATH"
        nohup /usr/local/bin/node admin-autonomous-orchestrator-simple.js > "$LOG_PATH/admin-orchestrator.log" 2>&1 &
        echo $! > "$orchestrator_pid"
        log_cron_activity "Admin Orchestrator started with PID $(cat $orchestrator_pid)"
    else
        log_cron_activity "Admin Orchestrator is already running with PID $(cat $orchestrator_pid)"
    fi
}

# Agent management functions
manage_agent_creator() {
    start_process "admin-agent-creator" "cd $ADMIN_SYSTEM_PATH && node agents/AdminAgentCreator.js"
}

manage_web_researcher() {
    start_process "admin-web-researcher" "cd $ADMIN_SYSTEM_PATH && node agents/AdminWebResearcher.js"
}

manage_status_monitor() {
    start_process "admin-status-monitor" "cd $ADMIN_SYSTEM_PATH && node agents/AdminStatusMonitor.js"
}

manage_evolution_agent() {
    start_process "admin-evolution-agent" "cd $ADMIN_SYSTEM_PATH && node agents/AdminEvolutionAgent.js"
}

manage_security_agent() {
    start_process "admin-security-agent" "cd $ADMIN_SYSTEM_PATH && node agents/AdminSecurityAgent.js"
}

manage_analytics_agent() {
    start_process "admin-analytics-agent" "cd $ADMIN_SYSTEM_PATH && node agents/AdminAnalyticsAgent.js"
}

manage_backup_agent() {
    start_process "admin-backup-agent" "cd $ADMIN_SYSTEM_PATH && node agents/AdminBackupAgent.js"
}

# System health monitoring
monitor_system_health() {
    log_cron_activity "Performing system health check"
    
    # Check memory usage (macOS compatible)
    local memory_usage=$(vm_stat | grep "Pages active" | awk '{print $3}' | sed 's/\.//')
    local total_memory=$(vm_stat | grep "Pages total" | awk '{print $3}' | sed 's/\.//')
    local memory_percent=$(echo "scale=1; $memory_usage * 100 / $total_memory" | bc -l 2>/dev/null || echo "0")
    log_cron_activity "Memory usage: ${memory_percent}%"
    
    # Check disk usage (macOS compatible)
    local disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
    log_cron_activity "Disk usage: ${disk_usage}%"
    
    # Check active agents
    local active_agents=0
    for pid_file in "$PID_PATH"/*.pid; do
        if [ -f "$pid_file" ] && is_process_running "$pid_file"; then
            ((active_agents++))
        fi
    done
    log_cron_activity "Active agents: $active_agents"
    
    # Alert if system resources are high
    if (( $(echo "$memory_percent > 80" | bc -l 2>/dev/null || echo "0") )); then
        log_cron_activity "WARNING: High memory usage detected"
    fi
    
    if [ "$disk_usage" -gt 80 ]; then
        log_cron_activity "WARNING: High disk usage detected"
    fi
}

# Backup system
backup_system() {
    log_cron_activity "Starting system backup"
    
    local backup_dir="$BACKUP_PATH/backup-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$backup_dir"
    
    # Backup important directories
    cp -r "$ADMIN_SYSTEM_PATH/agents" "$backup_dir/" 2>/dev/null
    cp -r "$ADMIN_SYSTEM_PATH/reports" "$backup_dir/" 2>/dev/null
    cp -r "$ADMIN_SYSTEM_PATH/status" "$backup_dir/" 2>/dev/null
    cp -r "$ADMIN_SYSTEM_PATH/logs" "$backup_dir/" 2>/dev/null
    cp -r "$ADMIN_SYSTEM_PATH/web-research" "$backup_dir/" 2>/dev/null
    
    # Create backup manifest
    echo "Backup created: $(date)" > "$backup_dir/backup-manifest.txt"
    echo "Source: $ADMIN_SYSTEM_PATH" >> "$backup_dir/backup-manifest.txt"
    echo "Directories backed up:" >> "$backup_dir/backup-manifest.txt"
    ls -la "$backup_dir/" >> "$backup_dir/backup-manifest.txt"
    
    log_cron_activity "System backup completed: $backup_dir"
}

# Cleanup old logs and backups
cleanup_old_files() {
    log_cron_activity "Starting cleanup of old files"
    
    # Remove log files older than 30 days
    find "$LOG_PATH" -name "*.log" -mtime +30 -delete 2>/dev/null
    
    # Remove backup directories older than 7 days
    find "$BACKUP_PATH" -name "backup-*" -type d -mtime +7 -exec rm -rf {} \; 2>/dev/null
    
    # Remove old PID files
    find "$PID_PATH" -name "*.pid" -mtime +1 -delete 2>/dev/null
    
    log_cron_activity "Cleanup completed"
}

# Generate system status report
generate_status_report() {
    log_cron_activity "Generating system status report"
    
    local report_file="$ADMIN_SYSTEM_PATH/reports/system-status-$(date +%Y%m%d-%H%M%S).json"
    
    # Get memory usage (macOS compatible)
    local memory_usage=$(vm_stat | grep "Pages active" | awk '{print $3}' | sed 's/\.//')
    local total_memory=$(vm_stat | grep "Pages total" | awk '{print $3}' | sed 's/\.//')
    local memory_percent=$(echo "scale=1; $memory_usage * 100 / $total_memory" | bc -l 2>/dev/null || echo "0")
    
    cat > "$report_file" << EOF
{
    "timestamp": "$(date -Iseconds)",
    "system": {
        "admin_system_path": "$ADMIN_SYSTEM_PATH",
        "uptime": "$(uptime)",
        "memory_usage": "${memory_percent}%",
        "disk_usage": "$(df / | tail -1 | awk '{print $5}')"
    },
    "agents": {
EOF
    
    # Add agent status
    for pid_file in "$PID_PATH"/*.pid; do
        if [ -f "$pid_file" ]; then
            local agent_name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            local status="stopped"
            
            if ps -p "$pid" > /dev/null 2>&1; then
                status="running"
            fi
            
            echo "        \"$agent_name\": {" >> "$report_file"
            echo "            \"pid\": $pid," >> "$report_file"
            echo "            \"status\": \"$status\"" >> "$report_file"
            echo "        }," >> "$report_file"
        fi
    done
    
    # Remove trailing comma and close JSON
    sed -i '$ s/,$//' "$report_file"
    
    cat >> "$report_file" << EOF
    },
    "logs": {
        "cron_log": "$(wc -l < "$LOG_PATH/cron-system.log" 2>/dev/null || echo 0) lines",
        "total_log_files": "$(find "$LOG_PATH" -name "*.log" | wc -l)"
    },
    "backups": {
        "total_backups": "$(find "$BACKUP_PATH" -name "backup-*" -type d | wc -l)",
        "latest_backup": "$(find "$BACKUP_PATH" -name "backup-*" -type d -exec ls -ld {} + | sort -k6,7 | tail -1 | awk '{print $9}' 2>/dev/null || echo "none")"
    }
}
EOF
    
    log_cron_activity "Status report generated: $report_file"
}

# Main execution based on cron schedule
case "$1" in
    "start")
        log_cron_activity "Starting admin autonomous system"
        manage_admin_orchestrator
        sleep 5
        manage_agent_creator
        manage_web_researcher
        manage_status_monitor
        manage_evolution_agent
        manage_security_agent
        manage_analytics_agent
        manage_backup_agent
        log_cron_activity "Admin autonomous system started"
        ;;
    
    "stop")
        log_cron_activity "Stopping admin autonomous system"
        stop_process "admin-orchestrator"
        stop_process "admin-agent-creator"
        stop_process "admin-web-researcher"
        stop_process "admin-status-monitor"
        stop_process "admin-evolution-agent"
        stop_process "admin-security-agent"
        stop_process "admin-analytics-agent"
        stop_process "admin-backup-agent"
        log_cron_activity "Admin autonomous system stopped"
        ;;
    
    "restart")
        log_cron_activity "Restarting admin autonomous system"
        $0 stop
        sleep 5
        $0 start
        ;;
    
    "status")
        log_cron_activity "Checking system status"
        echo "=== Admin Autonomous System Status ==="
        echo "Admin Orchestrator: $(is_process_running "$PID_PATH/admin-orchestrator.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Agent Creator: $(is_process_running "$PID_PATH/admin-agent-creator.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Web Researcher: $(is_process_running "$PID_PATH/admin-web-researcher.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Status Monitor: $(is_process_running "$PID_PATH/admin-status-monitor.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Evolution Agent: $(is_process_running "$PID_PATH/admin-evolution-agent.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Security Agent: $(is_process_running "$PID_PATH/admin-security-agent.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Analytics Agent: $(is_process_running "$PID_PATH/admin-analytics-agent.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "Backup Agent: $(is_process_running "$PID_PATH/admin-backup-agent.pid" && echo "RUNNING" || echo "STOPPED")"
        echo "====================================="
        ;;
    
    "health")
        monitor_system_health
        ;;
    
    "backup")
        backup_system
        ;;
    
    "cleanup")
        cleanup_old_files
        ;;
    
    "report")
        generate_status_report
        ;;
    
    "monitor")
        # Continuous monitoring mode
        log_cron_activity "Starting continuous monitoring"
        while true; do
            monitor_system_health
            sleep 300  # Check every 5 minutes
        done
        ;;
    
    *)
        echo "Usage: $0 {start|stop|restart|status|health|backup|cleanup|report|monitor}"
        echo ""
        echo "Commands:"
        echo "  start   - Start all admin autonomous agents"
        echo "  stop    - Stop all admin autonomous agents"
        echo "  restart - Restart all admin autonomous agents"
        echo "  status  - Show status of all agents"
        echo "  health  - Perform system health check"
        echo "  backup  - Create system backup"
        echo "  cleanup - Clean up old files"
        echo "  report  - Generate status report"
        echo "  monitor - Start continuous monitoring"
        exit 1
        ;;
esac

exit 0 