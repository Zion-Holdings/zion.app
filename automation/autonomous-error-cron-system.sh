#!/bin/bash

# Autonomous Error Cron System
# Manages continuous error monitoring and autonomous agent creation

PROJECT_ROOT="$PWD"
LOG_DIR="$PROJECT_ROOT/automation/autonomous-error-logs"
PID_DIR="$PROJECT_ROOT/automation/autonomous-error-pids"
STATUS_DIR="$PROJECT_ROOT/autonomous-error-status"
AGENTS_DIR="$PROJECT_ROOT/automation/autonomous-error-agents"

# Create directories if they don't exist
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR" "$AGENTS_DIR"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_DIR/autonomous-cron.log"
}

# Function to check if process is running
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

# Function to start autonomous error monitoring factory
start_autonomous_factory() {
    log_message "Starting autonomous error monitoring factory..."
    
    if ! is_process_running "$PID_DIR/autonomous-factory.pid"; then
        node "$PROJECT_ROOT/automation/autonomous-error-monitoring-factory.js" > "$LOG_DIR/autonomous-factory.log" 2>&1 &
        echo $! > "$PID_DIR/autonomous-factory.pid"
        log_message "Started autonomous error monitoring factory (PID: $!)"
    else
        log_message "Autonomous error monitoring factory is already running"
    fi
}

# Function to check and fix errors
check_and_fix_errors() {
    log_message "Running error check and fix cycle..."
    
    # Run the autonomous factory
    start_autonomous_factory
    
    # Wait for factory to process
    sleep 30
    
    # Check if any agents were created and run them
    if [ -d "$AGENTS_DIR" ]; then
        for agent_file in "$AGENTS_DIR"/*.js; do
            if [ -f "$agent_file" ]; then
                local agent_name=$(basename "$agent_file" .js)
                local pid_file="$PID_DIR/${agent_name}.pid"
                
                if ! is_process_running "$pid_file"; then
                    log_message "Running agent: $agent_name"
                    node "$agent_file" > "$LOG_DIR/${agent_name}.log" 2>&1 &
                    echo $! > "$pid_file"
                    log_message "Started agent $agent_name (PID: $!)"
                fi
            fi
        done
    fi
}

# Function to monitor agent performance
monitor_agent_performance() {
    log_message "Monitoring agent performance..."
    
    local performance_report="$STATUS_DIR/agent-performance.json"
    local report_data="{}"
    
    if [ -f "$performance_report" ]; then
        report_data=$(cat "$performance_report")
    fi
    
    # Check each agent's performance
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local agent_name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ps -p "$pid" > /dev/null 2>&1; then
                # Agent is running, update status
                report_data=$(echo "$report_data" | jq --arg agent "$agent_name" --arg status "running" --arg pid "$pid" '. + {($agent): {"status": $status, "pid": $pid, "last_update": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"}}')
            else
                # Agent is not running, mark as stopped
                report_data=$(echo "$report_data" | jq --arg agent "$agent_name" --arg status "stopped" '. + {($agent): {"status": $status, "last_update": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"}}')
            fi
        fi
    done
    
    echo "$report_data" > "$performance_report"
    log_message "Agent performance report updated"
}

# Function to cleanup old agents and logs
cleanup_old_data() {
    log_message "Cleaning up old data..."
    
    # Clean up old log files (older than 7 days)
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete
    find "$LOG_DIR" -name "*.json" -mtime +7 -delete
    
    # Clean up old agent files (older than 1 day)
    find "$AGENTS_DIR" -name "*.js" -mtime +1 -delete
    
    # Clean up zombie processes
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ! ps -p "$pid" > /dev/null 2>&1; then
                rm -f "$pid_file"
                log_message "Cleaned up zombie process: $pid_file"
            fi
        fi
    done
}

# Function to generate status report
generate_status_report() {
    log_message "Generating status report..."
    
    local status_report="$STATUS_DIR/autonomous-system-status.json"
    local current_time=$(date -u +%Y-%m-%dT%H:%M:%SZ)
    
    # Count active agents
    local active_agents=0
    local total_agents=0
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            total_agents=$((total_agents + 1))
            local pid=$(cat "$pid_file")
            if ps -p "$pid" > /dev/null 2>&1; then
                active_agents=$((active_agents + 1))
            fi
        fi
    done
    
    # Count error types from monitoring status
    local error_types="[]"
    if [ -f "$STATUS_DIR/monitoring-status.json" ]; then
        error_types=$(cat "$STATUS_DIR/monitoring-status.json" | jq -r '.errorTypes // []')
    fi
    
    # Create status report
    cat > "$status_report" << EOF
{
  "timestamp": "$current_time",
  "system_status": "running",
  "active_agents": $active_agents,
  "total_agents": $total_agents,
  "error_types_detected": $error_types,
  "last_cleanup": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "log_directory": "$LOG_DIR",
  "agents_directory": "$AGENTS_DIR"
}
EOF
    
    log_message "Status report generated: $status_report"
}

# Function to restart failed agents
restart_failed_agents() {
    log_message "Checking for failed agents..."
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local agent_name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ! ps -p "$pid" > /dev/null 2>&1; then
                log_message "Restarting failed agent: $agent_name"
                
                # Find the agent file
                local agent_file="$AGENTS_DIR/${agent_name}.js"
                if [ -f "$agent_file" ]; then
                    node "$agent_file" > "$LOG_DIR/${agent_name}-restart.log" 2>&1 &
                    echo $! > "$pid_file"
                    log_message "Restarted agent $agent_name (PID: $!)"
                else
                    log_message "Agent file not found: $agent_file"
                    rm -f "$pid_file"
                fi
            fi
        fi
    done
}

# Function to run comprehensive error fixing
run_comprehensive_fix() {
    log_message "Running comprehensive error fixing..."
    
    # Run the autonomous factory
    start_autonomous_factory
    
    # Wait for initial processing
    sleep 60
    
    # Run all available agents
    if [ -d "$AGENTS_DIR" ]; then
        for agent_file in "$AGENTS_DIR"/*.js; do
            if [ -f "$agent_file" ]; then
                local agent_name=$(basename "$agent_file" .js)
                log_message "Running comprehensive fix with agent: $agent_name"
                
                node "$agent_file" > "$LOG_DIR/comprehensive-${agent_name}.log" 2>&1
                
                if [ $? -eq 0 ]; then
                    log_message "✅ Comprehensive fix completed for $agent_name"
                else
                    log_message "❌ Comprehensive fix failed for $agent_name"
                fi
            fi
        done
    fi
}

# Function to stop all agents
stop_all_agents() {
    log_message "Stopping all autonomous agents..."
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            local agent_name=$(basename "$pid_file" .pid)
            
            if ps -p "$pid" > /dev/null 2>&1; then
                kill "$pid" 2>/dev/null
                log_message "Stopped agent: $agent_name (PID: $pid)"
            fi
            
            rm -f "$pid_file"
        fi
    done
    
    log_message "All agents stopped"
}

# Function to show system status
show_status() {
    echo "=== Autonomous Error Cron System Status ==="
    echo "Timestamp: $(date)"
    echo "Project Root: $PROJECT_ROOT"
    echo "Log Directory: $LOG_DIR"
    echo "PID Directory: $PID_DIR"
    echo "Status Directory: $STATUS_DIR"
    echo "Agents Directory: $AGENTS_DIR"
    echo ""
    
    echo "=== Active Agents ==="
    local active_count=0
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local agent_name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ps -p "$pid" > /dev/null 2>&1; then
                echo "✅ $agent_name (PID: $pid) - RUNNING"
                active_count=$((active_count + 1))
            else
                echo "❌ $agent_name (PID: $pid) - STOPPED"
            fi
        fi
    done
    
    echo ""
    echo "Active Agents: $active_count"
    
    if [ -f "$STATUS_DIR/monitoring-status.json" ]; then
        echo ""
        echo "=== Last Monitoring Results ==="
        cat "$STATUS_DIR/monitoring-status.json" | jq -r '.'
    fi
}

# Main function to run the cron system
run_cron_system() {
    log_message "Starting autonomous error cron system..."
    
    # Initial setup
    cleanup_old_data
    start_autonomous_factory
    
    # Main loop - run every 5 minutes
    while true; do
        log_message "Running cron cycle..."
        
        # Check and fix errors
        check_and_fix_errors
        
        # Monitor performance
        monitor_agent_performance
        
        # Restart failed agents
        restart_failed_agents
        
        # Generate status report
        generate_status_report
        
        # Cleanup old data (every 6 hours)
        if [ $(( $(date +%s) % 21600 )) -eq 0 ]; then
            cleanup_old_data
        fi
        
        log_message "Cron cycle completed, sleeping for 5 minutes..."
        sleep 300
    done
}

# Command line interface
case "${1:-run}" in
    "start")
        log_message "Starting autonomous error cron system..."
        run_cron_system
        ;;
    "stop")
        log_message "Stopping autonomous error cron system..."
        stop_all_agents
        ;;
    "status")
        show_status
        ;;
    "fix")
        log_message "Running comprehensive error fix..."
        run_comprehensive_fix
        ;;
    "cleanup")
        log_message "Running cleanup..."
        cleanup_old_data
        ;;
    "restart")
        log_message "Restarting all agents..."
        stop_all_agents
        sleep 5
        start_autonomous_factory
        ;;
    "run")
        run_cron_system
        ;;
    *)
        echo "Usage: $0 {start|stop|status|fix|cleanup|restart|run}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the autonomous error cron system"
        echo "  stop    - Stop all autonomous agents"
        echo "  status  - Show current system status"
        echo "  fix     - Run comprehensive error fixing"
        echo "  cleanup - Clean up old data and processes"
        echo "  restart - Restart all agents"
        echo "  run     - Run the cron system (default)"
        exit 1
        ;;
esac
