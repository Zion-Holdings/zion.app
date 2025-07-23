
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      #!/bin/bash

# Automated Chat Reconnection System Startup Script
# For Unix/Linux/macOS systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_DIR/logs/chat-reconnection.log"
PID_FILE="$PROJECT_DIR/logs/chat-reconnection.pid"
NODE_SCRIPT="$SCRIPT_DIR/automated-chat-reconnection.cjs"

echo -e "${BLUE}🤖 Automated Chat Reconnection System for Cursor${NC}"
echo "=================================================="

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to log errors
log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Function to log warnings
log_warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    log "✅ Node.js found: $NODE_VERSION"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    NPM_VERSION=$(npm --version)
    log "✅ npm found: $NPM_VERSION"
}

# Check if the project directory exists
check_project() {
    if [ ! -d "$PROJECT_DIR" ]; then
        log_error "Project directory not found: $PROJECT_DIR"
        exit 1
    fi
    
    log "✅ Project directory: $PROJECT_DIR"
}

# Check if the script exists
check_script() {
    if [ ! -f "$NODE_SCRIPT" ]; then
        log_error "Chat reconnection script not found: $NODE_SCRIPT"
        exit 1
    fi
    
    log "✅ Script found: $NODE_SCRIPT"
}

# Create necessary directories
create_directories() {
    mkdir -p "$PROJECT_DIR/logs"
    mkdir -p "$PROJECT_DIR/temp"
    mkdir -p "$PROJECT_DIR/config"
    log "✅ Directories created"
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            log_warn "System is already running with PID: $PID"
            echo "Do you want to stop the existing process and restart? (y/N)"
            read -r response
            if [[ "$response" =~ ^[Yy]$ ]]; then
                stop_system
            else
                log "Exiting..."
                exit 0
            fi
        else
            log_warn "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
}

# Stop the system
stop_system() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            log "Stopping system with PID: $PID"
            kill "$PID"
            
            # Wait for process to stop
            for i in {1..10}; do
                if ! ps -p "$PID" > /dev/null 2>&1; then
                    break
                fi
                sleep 1
            done
            
            # Force kill if still running
            if ps -p "$PID" > /dev/null 2>&1; then
                log_warn "Force killing process..."
                kill -9 "$PID"
            fi
        fi
        rm -f "$PID_FILE"
        log "✅ System stopped"
    fi
}

# Install dependencies if needed
install_dependencies() {
    if [ ! -d "$PROJECT_DIR/node_modules" ]; then
        log "📦 Installing dependencies..."
        cd "$PROJECT_DIR"
        npm install
        log "✅ Dependencies installed"
    else
        log "✅ Dependencies already installed"
    fi
}

# Start the auto-improvement engine
start_auto_improvement() {
    AUTO_IMPROVEMENT_SCRIPT="$SCRIPT_DIR/auto-improvement-engine.js"
    AUTO_IMPROVEMENT_LOG="$PROJECT_DIR/logs/auto-improvement-engine.log"
    AUTO_IMPROVEMENT_PID_FILE="$PROJECT_DIR/logs/auto-improvement-engine.pid"
    if [ -f "$AUTO_IMPROVEMENT_PID_FILE" ]; then
        PID=$(cat "$AUTO_IMPROVEMENT_PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            log_warn "Auto-improvement engine already running with PID: $PID"
            return
        else
            rm -f "$AUTO_IMPROVEMENT_PID_FILE"
        fi
    fi
    if [ -f "$AUTO_IMPROVEMENT_SCRIPT" ]; then
        log "🚀 Starting Auto-Improvement Engine..."
        nohup node "$AUTO_IMPROVEMENT_SCRIPT" > "$AUTO_IMPROVEMENT_LOG" 2>&1 &
        echo $! > "$AUTO_IMPROVEMENT_PID_FILE"
        log "✅ Auto-Improvement Engine started with PID: $(cat $AUTO_IMPROVEMENT_PID_FILE)"
        log "📊 Log file: $AUTO_IMPROVEMENT_LOG"
    else
        log_warn "Auto-Improvement Engine script not found: $AUTO_IMPROVEMENT_SCRIPT"
    fi
}

# Start the system
start_system() {
    log "🚀 Starting Automated Chat Reconnection System..."
    
    # Change to project directory
    cd "$PROJECT_DIR"
    
    # Start the system in background
    nohup node "$NODE_SCRIPT" start > "$LOG_FILE" 2>&1 &
    PID=$!
    
    # Save PID
    echo "$PID" > "$PID_FILE"
    
    log "✅ System started with PID: $PID"
    log "📊 Log file: $LOG_FILE"
    log "🔍 Status: http://localhost:3009/status"
    log "💬 Chat: http://localhost:3009"
    
    # Wait a moment and check if it's still running
    sleep 2
    if ps -p "$PID" > /dev/null 2>&1; then
        log "✅ System is running successfully"
    else
        log_error "System failed to start. Check logs: $LOG_FILE"
        rm -f "$PID_FILE"
        exit 1
    fi
    # Start auto-improvement engine
    start_auto_improvement
}

# Show status
show_status() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            log "✅ System is running with PID: $PID"
            
            # Try to get status from API
            if command -v curl &> /dev/null; then
                log "📊 Fetching system status..."
                curl -s http://localhost:3009/status | python3 -m json.tool 2>/dev/null || curl -s http://localhost:3009/status
            fi
        else
            log_warn "System is not running (stale PID file)"
            rm -f "$PID_FILE"
        fi
    else
        log_warn "System is not running"
    fi
}

# Show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        log "📋 Recent logs:"
        tail -n 20 "$LOG_FILE"
    else
        log_warn "No log file found"
    fi
}

# Install as service
install_service() {
    log "🔧 Installing as system service..."
    
    # Create service script
    SERVICE_SCRIPT="$SCRIPT_DIR/start-chat-service.sh"
    cat > "$SERVICE_SCRIPT" << EOF
#!/bin/bash
cd "$PROJECT_DIR"
exec node "$NODE_SCRIPT" start
EOF
    
    chmod +x "$SERVICE_SCRIPT"
    
    # Detect OS and install appropriate service
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS - Create LaunchAgent
        LAUNCH_AGENT_DIR="$HOME/Library/LaunchAgents"
        LAUNCH_AGENT_FILE="$LAUNCH_AGENT_DIR/com.cursor.chat-reconnection.plist"
        
        mkdir -p "$LAUNCH_AGENT_DIR"
        
        cat > "$LAUNCH_AGENT_FILE" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.cursor.chat-reconnection</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/node</string>
        <string>$NODE_SCRIPT</string>
        <string>start</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$PROJECT_DIR</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$LOG_FILE</string>
    <key>StandardErrorPath</key>
    <string>$PROJECT_DIR/logs/chat-reconnection.err</string>
</dict>
</plist>
EOF
        
        log "✅ macOS LaunchAgent created: $LAUNCH_AGENT_FILE"
        log "Run: launchctl load $LAUNCH_AGENT_FILE"
        
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux - Create systemd service
        SERVICE_FILE="$SCRIPT_DIR/cursor-chat-reconnection.service"
        
        cat > "$SERVICE_FILE" << EOF
[Unit]
Description=Cursor Chat Reconnection Service
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node $NODE_SCRIPT start
Restart=always
RestartSec=10
StandardOutput=append:$LOG_FILE
StandardError=append:$PROJECT_DIR/logs/chat-reconnection.err

[Install]
WantedBy=multi-user.target
EOF
        
        log "✅ Linux systemd service created: $SERVICE_FILE"
        log "Run: sudo cp $SERVICE_FILE /etc/systemd/system/"
        log "Run: sudo systemctl enable cursor-chat-reconnection.service"
        log "Run: sudo systemctl start cursor-chat-reconnection.service"
        
    else
        log_warn "Unsupported OS for service installation: $OSTYPE"
        log "Manual installation required"
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        check_node
        check_npm
        check_project
        check_script
        create_directories
        check_running
        install_dependencies
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        stop_system
        sleep 2
        check_node
        check_npm
        check_project
        check_script
        create_directories
        install_dependencies
        start_system
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    install)
        check_node
        check_npm
        check_project
        check_script
        create_directories
        install_dependencies
        install_service
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|install}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the chat reconnection system"
        echo "  stop    - Stop the system"
        echo "  restart - Restart the system"
        echo "  status  - Show system status"
        echo "  logs    - Show recent logs"
        echo "  install - Install as system service"
        echo ""
        echo "Examples:"
        echo "  $0 start"
        echo "  $0 status"
        echo "  $0 install"
        exit 1
        ;;
esac
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
