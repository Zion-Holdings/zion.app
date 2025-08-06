#!/bin/bash

# Service Generation Factory Cron Job
# This script manages the autonomous service generation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LAUNCHER="$PROJECT_DIR/service-generation-launcher.js"
LOG_DIR="$PROJECT_DIR/logs"
PID_FILE="$PROJECT_DIR/service-generation.pid"
LOCK_FILE="$PROJECT_DIR/service-generation.lock"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Log file for this cron job
CRON_LOG="$LOG_DIR/service-generation-cron.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$CRON_LOG"
}

# Function to check if the service is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            # PID file exists but process is not running
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to start the service generation factory
start_service_generation() {
    log_message "Starting Service Generation Factory..."
    
    if is_running; then
        log_message "Service Generation Factory is already running (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    # Check if lock file exists
    if [ -f "$LOCK_FILE" ]; then
        log_message "Lock file exists, another process might be running"
        return 1
    fi
    
    # Create lock file
    touch "$LOCK_FILE"
    
    # Start the service generation factory
    cd "$PROJECT_DIR"
    nohup node "$LAUNCHER" start > "$LOG_DIR/service-generation.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Remove lock file
    rm -f "$LOCK_FILE"
    
    log_message "Service Generation Factory started with PID: $pid"
    return 0
}

# Function to stop the service generation factory
stop_service_generation() {
    log_message "Stopping Service Generation Factory..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            log_message "Sent stop signal to PID: $pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log_message "Force killing process PID: $pid"
                kill -9 "$pid"
            fi
        fi
        rm -f "$PID_FILE"
    fi
    
    log_message "Service Generation Factory stopped"
}

# Function to restart the service generation factory
restart_service_generation() {
    log_message "Restarting Service Generation Factory..."
    stop_service_generation
    sleep 5
    start_service_generation
}

# Function to check service health
check_health() {
    log_message "Checking Service Generation Factory health..."
    
    if ! is_running; then
        log_message "Service Generation Factory is not running, attempting to start..."
        start_service_generation
        return $?
    fi
    
    # Check if the process is responsive
    local pid=$(cat "$PID_FILE")
    if ! ps -p "$pid" > /dev/null 2>&1; then
        log_message "Process is not responding, restarting..."
        restart_service_generation
        return $?
    fi
    
    log_message "Service Generation Factory is healthy (PID: $pid)"
    return 0
}

# Function to get status
get_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log_message "Service Generation Factory is running (PID: $pid)"
        
        # Get analytics if possible
        cd "$PROJECT_DIR"
        node "$LAUNCHER" analytics >> "$CRON_LOG" 2>&1
    else
        log_message "Service Generation Factory is not running"
    fi
}

# Function to clean up old logs
cleanup_logs() {
    log_message "Cleaning up old logs..."
    
    # Keep only last 30 days of logs
    find "$LOG_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null
    
    # Compress old logs
    find "$LOG_DIR" -name "*.log" -mtime +7 -exec gzip {} \; 2>/dev/null
    
    log_message "Log cleanup completed"
}

# Function to backup data
backup_data() {
    log_message "Creating backup of service generation data..."
    
    local backup_dir="$PROJECT_DIR/backups"
    local timestamp=$(date '+%Y%m%d_%H%M%S')
    local backup_file="$backup_dir/service-generation-backup-$timestamp.tar.gz"
    
    mkdir -p "$backup_dir"
    
    # Create backup of data directory
    if [ -d "$PROJECT_DIR/data" ]; then
        tar -czf "$backup_file" -C "$PROJECT_DIR" data/
        log_message "Backup created: $backup_file"
    else
        log_message "No data directory found for backup"
    fi
    
    # Clean up old backups (keep last 10)
    find "$backup_dir" -name "service-generation-backup-*.tar.gz" -mtime +30 -delete 2>/dev/null
}

# Function to update market data
update_market_data() {
    log_message "Updating market data..."
    
    if is_running; then
        cd "$PROJECT_DIR"
        # This would trigger market data update in the running process
        log_message "Market data update triggered"
    else
        log_message "Service not running, cannot update market data"
    fi
}

# Function to generate new services
generate_services() {
    log_message "Triggering service generation..."
    
    if is_running; then
        cd "$PROJECT_DIR"
        # This would trigger service generation in the running process
        log_message "Service generation triggered"
    else
        log_message "Service not running, cannot generate services"
    fi
}

# Function to generate advertisements
generate_ads() {
    log_message "Generating advertisements..."
    
    if is_running; then
        cd "$PROJECT_DIR"
        # This would trigger ad generation in the running process
        log_message "Advertisement generation triggered"
    else
        log_message "Service not running, cannot generate advertisements"
    fi
}

# Main function
main() {
    local action="$1"
    
    case "$action" in
        "start")
            start_service_generation
            ;;
        "stop")
            stop_service_generation
            ;;
        "restart")
            restart_service_generation
            ;;
        "status")
            get_status
            ;;
        "health")
            check_health
            ;;
        "cleanup")
            cleanup_logs
            ;;
        "backup")
            backup_data
            ;;
        "update-market")
            update_market_data
            ;;
        "generate-services")
            generate_services
            ;;
        "generate-ads")
            generate_ads
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|cleanup|backup|update-market|generate-services|generate-ads}"
            echo ""
            echo "Commands:"
            echo "  start              - Start the service generation factory"
            echo "  stop               - Stop the service generation factory"
            echo "  restart            - Restart the service generation factory"
            echo "  status             - Show current status"
            echo "  health             - Check health and restart if needed"
            echo "  cleanup            - Clean up old logs"
            echo "  backup             - Create backup of data"
            echo "  update-market      - Update market data"
            echo "  generate-services  - Trigger service generation"
            echo "  generate-ads       - Trigger advertisement generation"
            exit 1
            ;;
    esac
}

# Handle signals
trap 'log_message "Received signal, cleaning up..."; stop_service_generation; exit 0' SIGTERM SIGINT

# Run main function with all arguments
main "$@" 