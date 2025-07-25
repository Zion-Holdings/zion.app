
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      #!/bin/bash

# Zion App - Autonomous Control Script
# This script provides comprehensive control over the autonomous system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/logs"
PID_FILE="$SCRIPT_DIR/.autonomous.pid"
STATUS_FILE="$SCRIPT_DIR/.autonomous-status.json"
LOCK_FILE="$SCRIPT_DIR/.autonomous.lock"

# Environment variables
export NODE_ENV=production
export IMPROVEMENT_PORT=3003
export BACKGROUND_MODE=true

# Load environment variables
if [ -f "$PROJECT_ROOT/.env" ]; then
    source "$PROJECT_ROOT/.env"
fi

print_status() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}🎉 $1${NC}"; }

# Function to acquire lock
acquire_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE" 2>/dev/null || echo "")
        if [ -n "$lock_pid" ] && ps -p "$lock_pid" >/dev/null 2>&1; then
            print_error "Another control process is already running (PID: $lock_pid)"
            return 1
        else
            rm -f "$LOCK_FILE"
        fi
    fi
    echo $$ > "$LOCK_FILE"
    return 0
}

# Function to release lock
release_lock() {
    rm -f "$LOCK_FILE"
}

# Function to check if system is running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" >/dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Function to check system health
check_health() {
    if ! check_running; then
        return 1
    fi
    
    # Check if the API is responding
    if ! curl -s "http://localhost:$IMPROVEMENT_PORT/api/status" >/dev/null 2>&1; then
        return 1
    fi
    
    return 0
}

# Function to start the system
start_system() {
    print_info "Starting autonomous infinite improvement loop..."
    
    if ! acquire_lock; then
        return 1
    fi
    
    # Ensure we release lock on exit
    trap 'release_lock' EXIT
    
    cd "$SCRIPT_DIR"
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        print_info "Installing dependencies..."
        npm install --production
    fi
    
    # Start the system
    nohup node infinite-improvement-loop.js > "$LOG_DIR/autonomous.log" 2>&1 &
    local pid=$!
    echo $pid > "$PID_FILE"
    
    sleep 5
    
    if ps -p "$pid" >/dev/null 2>&1; then
        print_success "Autonomous system started (PID: $pid)"
        print_info "Dashboard: http://localhost:$IMPROVEMENT_PORT"
        print_info "Logs: $LOG_DIR/autonomous.log"
        
        # Update status
        cat > "$STATUS_FILE" << EOF
{
    "status": "running",
    "pid": "$pid",
    "started_at": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
    "dashboard_url": "http://localhost:$IMPROVEMENT_PORT",
    "last_health_check": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
}
EOF
        return 0
    else
        print_error "Failed to start autonomous system"
        return 1
    fi
}

# Function to stop the system
stop_system() {
    print_info "Stopping autonomous system..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" >/dev/null 2>&1; then
            kill "$pid"
            sleep 2
            if ps -p "$pid" >/dev/null 2>&1; then
                kill -9 "$pid"
            fi
        fi
        rm -f "$PID_FILE"
    fi
    
    rm -f "$STATUS_FILE"
    print_success "Autonomous system stopped"
}

# Function to restart the system
restart_system() {
    print_info "Restarting autonomous system..."
    stop_system
    sleep 2
    start_system
}

# Function to monitor and auto-restart
monitor_system() {
    print_info "Starting autonomous monitor..."
    
    if ! acquire_lock; then
        return 1
    fi
    
    # Ensure we release lock on exit
    trap 'release_lock' EXIT
    
    local restart_count=0
    local max_restarts=10
    
    while true; do
        if ! check_health; then
            print_warning "System health check failed, attempting restart..."
            
            if [ $restart_count -ge $max_restarts ]; then
                print_error "Maximum restart attempts reached ($max_restarts)"
                break
            fi
            
            if restart_system; then
                print_success "System restarted successfully"
                restart_count=0
            else
                print_error "Failed to restart system"
                restart_count=$((restart_count + 1))
                sleep 30
            fi
        else
            # Update last health check time
            if [ -f "$STATUS_FILE" ]; then
                local temp_file=$(mktemp)
                jq ".last_health_check = \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\"" "$STATUS_FILE" > "$temp_file"
                mv "$temp_file" "$STATUS_FILE"
            fi
            restart_count=0
        fi
        
        sleep 60
    done
}

# Function to show status
show_status() {
    print_info "Autonomous System Status"
    echo "========================"
    
    if [ -f "$STATUS_FILE" ]; then
        local status=$(jq -r '.status' "$STATUS_FILE" 2>/dev/null || echo "unknown")
        local pid=$(jq -r '.pid' "$STATUS_FILE" 2>/dev/null || echo "None")
        local started_at=$(jq -r '.started_at' "$STATUS_FILE" 2>/dev/null || echo "Unknown")
        local dashboard_url=$(jq -r '.dashboard_url' "$STATUS_FILE" 2>/dev/null || echo "Unknown")
        local last_health_check=$(jq -r '.last_health_check' "$STATUS_FILE" 2>/dev/null || echo "Unknown")
        
        echo "Status: $status"
        echo "PID: $pid"
        echo "Started: $started_at"
        echo "Dashboard: $dashboard_url"
        echo "Last Health Check: $last_health_check"
    else
        print_error "Status file not found"
    fi
    
    echo ""
    print_info "Health Check:"
    if check_health; then
        print_status "System is healthy"
    else
        print_error "System is not healthy"
    fi
    
    echo ""
    print_info "Configuration:"
    echo "  - Port: $IMPROVEMENT_PORT"
    echo "  - Logs: $LOG_DIR/autonomous.log"
    echo "  - PID File: $PID_FILE"
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_DIR/autonomous.log" ]; then
        print_info "Recent logs (last 20 lines):"
        echo "================================"
        tail -n 20 "$LOG_DIR/autonomous.log"
    else
        print_error "Log file not found: $LOG_DIR/autonomous.log"
    fi
}

# Function to setup cron job for auto-start
setup_cron() {
    print_info "Setting up cron job for auto-start..."
    
    # Create cron job to check and start system every 5 minutes
    local cron_job="*/5 * * * * $SCRIPT_DIR/autonomous-control.sh ensure-running"
    
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
    
    print_success "Cron job installed"
    print_info "System will be checked every 5 minutes"
}

# Function to remove cron job
remove_cron() {
    print_info "Removing cron job..."
    
    # Remove our cron job
    crontab -l 2>/dev/null | grep -v "autonomous-control.sh" | crontab -
    
    print_success "Cron job removed"
}

# Function to ensure system is running
ensure_running() {
    if ! check_health; then
        print_warning "System not running, starting..."
        start_system
    fi
}

# Function to show help
show_help() {
    echo "Zion App - Autonomous Control System"
    echo "==================================="
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start           Start autonomous system"
    echo "  stop            Stop autonomous system"
    echo "  restart         Restart autonomous system"
    echo "  monitor         Start monitor with auto-restart"
    echo "  status          Show current status"
    echo "  logs            Show recent logs"
    echo "  setup-cron      Setup cron job for auto-start"
    echo "  remove-cron     Remove cron job"
    echo "  ensure-running  Ensure system is running (for cron)"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start           # Start autonomous system"
    echo "  $0 monitor         # Start with auto-restart monitor"
    echo "  $0 status          # Check status"
    echo "  $0 setup-cron      # Setup automatic startup"
}

# Main script logic
main() {
    case "${1:-help}" in
        start)
            echo -e "${PURPLE}🚀 Starting Zion App Autonomous System${NC}"
            start_system
            ;;
        stop)
            echo -e "${RED}🛑 Stopping Autonomous System${NC}"
            stop_system
            ;;
        restart)
            echo -e "${YELLOW}🔄 Restarting Autonomous System${NC}"
            restart_system
            ;;
        monitor)
            echo -e "${CYAN}🔍 Starting Autonomous Monitor${NC}"
            monitor_system
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        setup-cron)
            setup_cron
            ;;
        remove-cron)
            remove_cron
            ;;
        ensure-running)
            ensure_running
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

main "$@"
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
