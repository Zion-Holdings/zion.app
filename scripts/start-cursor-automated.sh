
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/bin/bash

# Startup script for Cursor Automated Communication System

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/logs"
PID_FILE="$LOG_DIR/cursor-automated.pid"
LOG_FILE="$LOG_DIR/cursor-automated.log"

# Create logs directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to check if process is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Function to start the communication system
start_communication() {
    log "🚀 Starting Cursor Automated Communication System..."
    
    if is_running; then
        log "⚠️ Communication system is already running (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    # Start the communication system in the background
    cd "$PROJECT_ROOT"
    nohup node scripts/cursor-automated-communication.cjs > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    log "✅ Communication system started with PID: $pid"
    log "📝 Logs are being written to: $LOG_FILE"
    
    # Wait a moment and check if it's still running
    sleep 3
    if is_running; then
        log "✅ Communication system is running successfully"
        log "🌐 Web interface available at: http://localhost:3008"
        log "🤝 Coordination server available at: http://localhost:3010"
    else
        log "❌ Communication system failed to start"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the communication system
stop_communication() {
    log "🛑 Stopping Cursor Automated Communication System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            log "✅ Sent stop signal to PID: $pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "⚠️ Process didn't stop gracefully, force killing..."
                kill -9 "$pid"
            fi
        else
            log "⚠️ Process with PID $pid is not running"
        fi
        rm -f "$PID_FILE"
    else
        log "⚠️ No PID file found"
    fi
}

# Function to restart the communication system
restart_communication() {
    log "🔄 Restarting Cursor Automated Communication System..."
    stop_communication
    sleep 2
    start_communication
}

# Function to check status
check_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "✅ Communication system is running (PID: $pid)"
        
        # Check if the local server is responding
        if curl -s http://localhost:3008/status > /dev/null 2>&1; then
            log "✅ Local server is responding"
        else
            log "⚠️ Local server is not responding"
        fi
        
        # Check if coordination server is responding
        if curl -s http://localhost:3010/sync > /dev/null 2>&1; then
            log "✅ Coordination server is responding"
        else
            log "⚠️ Coordination server is not responding"
        fi
    else
        log "❌ Communication system is not running"
    fi
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        log "No log file found"
    fi
}

# Function to monitor and auto-restart
monitor_communication() {
    log "👁️ Starting monitoring mode..."
    
    while true; do
        if ! is_running; then
            log "⚠️ Communication system stopped, restarting..."
            start_communication
        fi
        
        # Check if local server is responding
        if ! curl -s http://localhost:3008/status > /dev/null 2>&1; then
            log "⚠️ Local server not responding, restarting..."
            restart_communication
        fi
        
        sleep 30
    done
}

# Function to start web interface
start_web_interface() {
    log "🌐 Starting web interface..."
    
    cd "$PROJECT_ROOT"
    nohup node scripts/serve-interface.js > "$LOG_DIR/web-interface.log" 2>&1 &
    local web_pid=$!
    
    echo "$web_pid" > "$LOG_DIR/web-interface.pid"
    log "✅ Web interface started with PID: $web_pid"
    log "🌐 Web interface available at: http://localhost:3007"
}

# Function to stop web interface
stop_web_interface() {
    log "🛑 Stopping web interface..."
    
    local web_pid_file="$LOG_DIR/web-interface.pid"
    if [ -f "$web_pid_file" ]; then
        local web_pid=$(cat "$web_pid_file")
        if ps -p "$web_pid" > /dev/null 2>&1; then
            kill "$web_pid"
            log "✅ Sent stop signal to web interface PID: $web_pid"
        fi
        rm -f "$web_pid_file"
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        start_communication
        start_web_interface
        ;;
    stop)
        stop_communication
        stop_web_interface
        ;;
    restart)
        restart_communication
        stop_web_interface
        sleep 1
        start_web_interface
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs
        ;;
    monitor)
        monitor_communication
        ;;
    web)
        start_web_interface
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|monitor|web}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the communication system and web interface"
        echo "  stop    - Stop the communication system and web interface"
        echo "  restart - Restart the communication system and web interface"
        echo "  status  - Check the status of the system"
        echo "  logs    - Show live logs"
        echo "  monitor - Monitor and auto-restart the system"
        echo "  web     - Start only the web interface"
        exit 1
        ;;
esac
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
