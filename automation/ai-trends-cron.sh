#!/bin/bash

# AI Trends Automation Cron Script
# Manages AI trends research and automation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$SCRIPT_DIR/logs/ai-trends-cron.log"
PID_FILE="$SCRIPT_DIR/logs/ai-trends-cron.pid"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

check_pid() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

start() {
    log "Starting AI Trends automation..."
    
    if check_pid; then
        warning "AI Trends automation is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Start the automation in the background
    nohup node "$SCRIPT_DIR/ai-trends-researcher.cjs" > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    success "AI Trends automation started with PID: $pid"
    
    # Wait a moment to see if it starts successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        success "AI Trends automation is running successfully"
    else
        error "AI Trends automation failed to start"
        rm -f "$PID_FILE"
        return 1
    fi
}

stop() {
    log "Stopping AI Trends automation..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            rm -f "$PID_FILE"
            success "AI Trends automation stopped (PID: $pid)"
        else
            warning "AI Trends automation is not running"
            rm -f "$PID_FILE"
        fi
    else
        warning "No PID file found, automation may not be running"
    fi
}

run() {
    log "Running AI Trends automation once..."
    
    if check_pid; then
        warning "AI Trends automation is already running, stopping first..."
        stop
        sleep 2
    fi
    
    # Run once
    node "$SCRIPT_DIR/ai-trends-researcher.cjs" run
    local exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        success "AI Trends automation completed successfully"
    else
        error "AI Trends automation failed with exit code: $exit_code"
    fi
    
    return $exit_code
}

status() {
    log "Checking AI Trends automation status..."
    
    if check_pid; then
        local pid=$(cat "$PID_FILE")
        local uptime=$(ps -o etime= -p "$pid" 2>/dev/null || echo "unknown")
        success "AI Trends automation is running (PID: $pid, Uptime: $uptime)"
        
        # Show recent log entries
        echo ""
        echo "Recent log entries:"
        tail -n 10 "$LOG_FILE" 2>/dev/null || echo "No log file found"
        
        return 0
    else
        warning "AI Trends automation is not running"
        return 1
    fi
}

restart() {
    log "Restarting AI Trends automation..."
    stop
    sleep 2
    start
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    run)
        run
        ;;
    status)
        status
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|run|status}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the AI Trends automation"
        echo "  stop    - Stop the AI Trends automation"
        echo "  restart - Restart the AI Trends automation"
        echo "  run     - Run the automation once"
        echo "  status  - Check the status of the automation"
        echo ""
        echo "Log file: $LOG_FILE"
        exit 1
        ;;
esac

exit $?
