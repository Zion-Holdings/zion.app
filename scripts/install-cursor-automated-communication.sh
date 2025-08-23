
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

# Installation script for Cursor Automated Communication System
# This script sets up automated chat communications for all computers with Cursor installed

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
USER=$(whoami)
OS=$(uname -s)
HOSTNAME=$(hostname)

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "🚀 Installing Cursor Automated Communication System..."

# Make scripts executable
chmod +x "$SCRIPT_DIR/cursor-automated-communication.cjs"
chmod +x "$SCRIPT_DIR/serve-interface.js"

# Create necessary directories
mkdir -p "$PROJECT_ROOT/logs"
mkdir -p "$PROJECT_ROOT/data/cursor-communication"
mkdir -p "$PROJECT_ROOT/automation/cursor"

# Create configuration file
cat > "$PROJECT_ROOT/config/cursor-automated-communication.json" << EOF
{
  "computerId": "${HOSTNAME}_${USER}_$(date +%s)",
  "serverUrl": "https://api.cursor.sh",
  "localPort": 3008,
  "masterPort": 3009,
  "coordinationPort": 3010,
  "enableHeartbeat": true,
  "enableAutoReconnect": true,
  "enableActivityMonitoring": true,
  "enableFileWatching": true,
  "enableBuildMonitoring": true,
  "enableCursorIntegration": true,
  "enableMultiComputerSync": true,
  "enableContinuousImprovement": true,
  "enableAutoCommit": true,
  "enablePerformanceMonitoring": true,
  "enableErrorTracking": true,
  "enableCodeAnalysis": true,
  "watchPaths": [
    "src",
    "pages",
    "components",
    "utils",
    "scripts",
    "public",
    "styles",
    "tests"
  ],
  "excludePaths": [
    "node_modules",
    ".git",
    "dist",
    "build",
    "coverage",
    "logs"
  ],
  "improvementTypes": [
    "file_change",
    "file_analysis",
    "error_detection",
    "performance_issue",
    "security_scan",
    "code_quality",
    "test_coverage",
    "build_optimization"
  ]
}
EOF

# Create startup script
cat > "$SCRIPT_DIR/start-cursor-automated.sh" << 'EOF'
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
EOF

chmod +x "$SCRIPT_DIR/start-cursor-automated.sh"

# Create systemd service file for Linux
if [[ "$OS" == "Linux" ]]; then
    log "🐧 Creating systemd service for Linux..."
    
    cat > "$SCRIPT_DIR/cursor-automated-communication.service" << EOF
[Unit]
Description=Cursor Automated Communication System
After=network.target
Wants=network.target

[Service]
Type=forking
User=$USER
WorkingDirectory=$PROJECT_ROOT
ExecStart=$SCRIPT_DIR/start-cursor-automated.sh start
ExecStop=$SCRIPT_DIR/start-cursor-automated.sh stop
ExecReload=$SCRIPT_DIR/start-cursor-automated.sh restart
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

# Environment variables
Environment=NODE_ENV=production
Environment=CURSOR_SERVER_URL=https://api.cursor.sh
Environment=LOCAL_PORT=3008
Environment=MASTER_PORT=3009
Environment=COORDINATION_PORT=3010

# Security settings
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=$PROJECT_ROOT/logs:$PROJECT_ROOT/data

[Install]
WantedBy=multi-user.target
EOF

    # Install systemd service
    SERVICE_DEST="/etc/systemd/system/cursor-automated-communication@$USER.service"
    sudo cp "$SCRIPT_DIR/cursor-automated-communication.service" "$SERVICE_DEST"
    
    # Update paths in service file
    sudo sed -i "s|$PROJECT_ROOT|$PROJECT_ROOT|g" "$SERVICE_DEST"
    sudo sed -i "s|$USER|$USER|g" "$SERVICE_DEST"
    
    # Reload systemd and enable service
    sudo systemctl daemon-reload
    sudo systemctl enable "cursor-automated-communication@$USER"
    
    log "✅ Systemd service installed and enabled"
    log "📝 Service will start automatically on boot"

# Create LaunchAgent for macOS
elif [[ "$OS" == "Darwin" ]]; then
    log "🍎 Creating LaunchAgent for macOS..."
    
    cat > "$SCRIPT_DIR/com.cursor.automated.communication.plist" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.cursor.automated.communication</string>
    <key>ProgramArguments</key>
    <array>
        <string>$SCRIPT_DIR/start-cursor-automated.sh</string>
        <string>start</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$PROJECT_ROOT/logs/launchagent.log</string>
    <key>StandardErrorPath</key>
    <string>$PROJECT_ROOT/logs/launchagent-error.log</string>
    <key>WorkingDirectory</key>
    <string>$PROJECT_ROOT</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>NODE_ENV</key>
        <string>production</string>
        <key>CURSOR_SERVER_URL</key>
        <string>https://api.cursor.sh</string>
        <key>LOCAL_PORT</key>
        <string>3008</string>
        <key>MASTER_PORT</key>
        <string>3009</string>
        <key>COORDINATION_PORT</key>
        <string>3010</string>
    </dict>
</dict>
</plist>
EOF

    # Copy plist file to LaunchAgents
    PLIST_DEST="$HOME/Library/LaunchAgents/com.cursor.automated.communication.plist"
    cp "$SCRIPT_DIR/com.cursor.automated.communication.plist" "$PLIST_DEST"
    
    # Load the service
    launchctl load "$PLIST_DEST"
    
    log "✅ LaunchAgent installed and loaded"
    log "📝 Service will start automatically on login"

else
    log "⚠️ Unsupported operating system: $OS"
    log "📝 Please manually set up the startup script"
fi

# Create a simple status checker
cat > "$SCRIPT_DIR/check-cursor-status.sh" << 'EOF'
#!/bin/bash
echo "🔍 Checking Cursor Automated Communication System status..."
echo ""

# Check main communication system
if curl -s http://localhost:3008/status > /dev/null 2>&1; then
    echo "✅ Main communication system: RUNNING"
    curl -s http://localhost:3008/status | jq . 2>/dev/null || echo "   Status: Available"
else
    echo "❌ Main communication system: NOT RUNNING"
fi

echo ""

# Check coordination server
if curl -s http://localhost:3010/sync > /dev/null 2>&1; then
    echo "✅ Coordination server: RUNNING"
else
    echo "❌ Coordination server: NOT RUNNING"
fi

echo ""

# Check web interface
if curl -s http://localhost:3007 > /dev/null 2>&1; then
    echo "✅ Web interface: RUNNING (http://localhost:3007)"
else
    echo "❌ Web interface: NOT RUNNING"
fi

echo ""

# Check Cursor processes
echo "🖥️ Cursor processes:"
ps aux | grep -i cursor | grep -v grep | head -5 || echo "   No Cursor processes found"

echo ""
echo "📊 Quick commands:"
echo "  ./scripts/start-cursor-automated.sh start   - Start system"
echo "  ./scripts/start-cursor-automated.sh stop    - Stop system"
echo "  ./scripts/start-cursor-automated.sh status  - Check status"
echo "  ./scripts/start-cursor-automated.sh logs    - View logs"
EOF

chmod +x "$SCRIPT_DIR/check-cursor-status.sh"

# Create a quick start script
cat > "$SCRIPT_DIR/quick-start-cursor.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
echo "🚀 Starting Cursor Automated Communication System..."
node scripts/cursor-automated-communication.cjs
EOF

chmod +x "$SCRIPT_DIR/quick-start-cursor.sh"

# Create a configuration script
cat > "$SCRIPT_DIR/configure-cursor-communication.sh" << 'EOF'
#!/bin/bash

echo "🔧 Configuring Cursor Automated Communication System..."
echo ""

# Get user input
read -p "Enter Cursor API key (optional): " CURSOR_API_KEY
read -p "Enter server URL [https://api.cursor.sh]: " SERVER_URL
SERVER_URL=${SERVER_URL:-https://api.cursor.sh}

read -p "Enter local port [3008]: " LOCAL_PORT
LOCAL_PORT=${LOCAL_PORT:-3008}

read -p "Enter coordination port [3010]: " COORDINATION_PORT
COORDINATION_PORT=${COORDINATION_PORT:-3010}

# Update configuration
CONFIG_FILE="config/cursor-automated-communication.json"
if [ -f "$CONFIG_FILE" ]; then
    # Update existing config
    jq --arg key "$CURSOR_API_KEY" \
       --arg url "$SERVER_URL" \
       --argjson local_port $LOCAL_PORT \
       --argjson coord_port $COORDINATION_PORT \
       '.serverUrl = $url | .localPort = $local_port | .coordinationPort = $coord_port' \
       "$CONFIG_FILE" > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"
    
    echo "✅ Configuration updated"
else
    echo "❌ Configuration file not found"
fi

echo ""
echo "📝 Configuration complete!"
echo "   Server URL: $SERVER_URL"
echo "   Local Port: $LOCAL_PORT"
echo "   Coordination Port: $COORDINATION_PORT"
EOF

chmod +x "$SCRIPT_DIR/configure-cursor-communication.sh"

# Create a network discovery script
cat > "$SCRIPT_DIR/discover-cursor-computers.sh" << 'EOF'
#!/bin/bash

echo "🔍 Discovering Cursor computers on network..."
echo ""

# Scan local network for Cursor installations
NETWORK=$(ip route | grep default | awk '{print $3}' | cut -d. -f1-3)

echo "Scanning network: $NETWORK.0/24"
echo ""

# Use nmap if available, otherwise use ping
if command -v nmap &> /dev/null; then
    echo "Using nmap for network scan..."
    nmap -sn "$NETWORK.0/24" | grep -E "Nmap scan report" | while read line; do
        IP=$(echo $line | awk '{print $5}')
        HOSTNAME=$(echo $line | awk '{print $6}' | sed 's/[()]//g')
        
        # Check if this host has Cursor running
        if curl -s "http://$IP:3008/status" > /dev/null 2>&1; then
            echo "✅ Found Cursor computer: $HOSTNAME ($IP)"
            curl -s "http://$IP:3008/status" | jq '.computerId' 2>/dev/null || echo "   Computer ID: Unknown"
        fi
    done
else
    echo "Using ping for network scan..."
    for i in {1..254}; do
        IP="$NETWORK.$i"
        if ping -c 1 -W 1 "$IP" > /dev/null 2>&1; then
            if curl -s "http://$IP:3008/status" > /dev/null 2>&1; then
                echo "✅ Found Cursor computer at $IP"
            fi
        fi
    done
fi

echo ""
echo "🔗 To connect to a specific computer:"
echo "   curl http://IP:3008/status"
echo "   curl http://IP:3010/sync"
EOF

chmod +x "$SCRIPT_DIR/discover-cursor-computers.sh"

log "✅ Installation completed!"
log ""
log "📋 Available commands:"
log "  ./scripts/start-cursor-automated.sh start   - Start system"
log "  ./scripts/start-cursor-automated.sh stop    - Stop system"
log "  ./scripts/start-cursor-automated.sh status  - Check status"
log "  ./scripts/start-cursor-automated.sh logs    - View logs"
log "  ./scripts/check-cursor-status.sh            - Quick status check"
log "  ./scripts/quick-start-cursor.sh             - Quick start"
log "  ./scripts/configure-cursor-communication.sh - Configure system"
log "  ./scripts/discover-cursor-computers.sh      - Discover other computers"
log ""
log "🌐 Web interfaces:"
log "  Main interface: http://localhost:3007"
log "  Communication API: http://localhost:3008"
log "  Coordination API: http://localhost:3010"
log ""
log "📝 Logs will be written to: $PROJECT_ROOT/logs/"
log "📊 Data will be stored in: $PROJECT_ROOT/data/cursor-communication/"
log ""
log "🔄 The system will now maintain continuous communication with all Cursor installations"
log "🤖 Automated improvements will be applied across all connected computers"
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
