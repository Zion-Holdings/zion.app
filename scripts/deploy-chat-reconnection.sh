#!/bin/bash

# Automated Chat Reconnection System Deployment Script
# This script helps deploy the chat reconnection system across multiple computers

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DEPLOYMENT_LOG="logs/deployment-$(date +%Y%m%d-%H%M%S).log"

echo -e "${BLUE}🚀 Automated Chat Reconnection System Deployment${NC}"
echo "======================================================"

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$DEPLOYMENT_LOG"
}

log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$DEPLOYMENT_LOG"
}

log_warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$DEPLOYMENT_LOG"
}

log_info() {
    echo -e "${CYAN}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$DEPLOYMENT_LOG"
}

# Create deployment log directory
mkdir -p "$(dirname "$DEPLOYMENT_LOG")"

# Check prerequisites
check_prerequisites() {
    log "🔍 Checking prerequisites..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if git is installed
    if ! command -v git &> /dev/null; then
        log_error "git is not installed. Please install git first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    NPM_VERSION=$(npm --version)
    GIT_VERSION=$(git --version)
    
    log "✅ Node.js: $NODE_VERSION"
    log "✅ npm: $NPM_VERSION"
    log "✅ git: $GIT_VERSION"
}

# Detect operating system
detect_os() {
    log "🖥️ Detecting operating system..."
    
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        OS="linux"
        log "✅ Detected: Linux"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
        log "✅ Detected: macOS"
    elif [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        OS="windows"
        log "✅ Detected: Windows"
    else
        OS="unknown"
        log_warn "Unknown OS: $OSTYPE"
    fi
}

# Install dependencies
install_dependencies() {
    log "📦 Installing dependencies..."
    
    cd "$PROJECT_DIR"
    
    if [ ! -d "node_modules" ]; then
        npm install
        log "✅ Dependencies installed"
    else
        log "✅ Dependencies already installed"
    fi
}

# Deploy to current computer
deploy_current() {
    log "🚀 Deploying to current computer..."
    
    # Make startup script executable
    chmod +x "$SCRIPT_DIR/start-chat-reconnection.sh"
    
    # Start the system
    log "🔌 Starting chat reconnection system..."
    "$SCRIPT_DIR/start-chat-reconnection.sh" start
    
    # Wait for system to start
    sleep 5
    
    # Check if system is running
    if curl -s http://localhost:3009/status > /dev/null 2>&1; then
        log "✅ Chat reconnection system started successfully"
        
        # Get system status
        STATUS=$(curl -s http://localhost:3009/status)
        COMPUTER_ID=$(echo "$STATUS" | python3 -c "import sys, json; print(json.load(sys.stdin)['computerId'])")
        IS_MASTER=$(echo "$STATUS" | python3 -c "import sys, json; print(json.load(sys.stdin)['isMaster'])")
        
        log "🖥️ Computer ID: $COMPUTER_ID"
        log "👑 Master Node: $IS_MASTER"
        log "🌐 Web Interface: http://localhost:3009"
        log "📊 Status API: http://localhost:3009/status"
        
    else
        log_error "Failed to start chat reconnection system"
        exit 1
    fi
}

# Deploy to remote computers
deploy_remote() {
    local remote_hosts=("$@")
    
    if [ ${#remote_hosts[@]} -eq 0 ]; then
        log_warn "No remote hosts specified for deployment"
        return
    fi
    
    log "🌐 Deploying to ${#remote_hosts[@]} remote computer(s)..."
    
    for host in "${remote_hosts[@]}"; do
        log "🚀 Deploying to $host..."
        
        # Create deployment script for remote host
        cat > /tmp/deploy-remote.sh << 'EOF'
#!/bin/bash
set -e

# Remote deployment script
REPO_URL="https://github.com/Zion-Holdings/zion.app.git"
PROJECT_DIR="/tmp/zion-chat-deployment"

echo "🚀 Deploying chat reconnection system..."

# Clone repository
git clone "$REPO_URL" "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Install dependencies
npm install

# Make startup script executable
chmod +x scripts/start-chat-reconnection.sh

# Start the system
./scripts/start-chat-reconnection.sh start

echo "✅ Deployment completed on $(hostname)"
EOF
        
        # Copy deployment script to remote host
        scp /tmp/deploy-remote.sh "$host:/tmp/"
        
        # Execute deployment on remote host
        ssh "$host" "chmod +x /tmp/deploy-remote.sh && /tmp/deploy-remote.sh"
        
        log "✅ Deployed to $host"
    done
    
    # Clean up
    rm -f /tmp/deploy-remote.sh
}

# Install as service
install_service() {
    log "🔧 Installing as system service..."
    
    case "$OS" in
        "macos")
            install_macos_service
            ;;
        "linux")
            install_linux_service
            ;;
        "windows")
            log_warn "Windows service installation requires manual setup"
            log "Run: scripts\\start-chat-reconnection.bat install"
            ;;
        *)
            log_warn "Service installation not supported for this OS"
            ;;
    esac
}

install_macos_service() {
    log "🍎 Installing macOS LaunchAgent..."
    
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
        <string>$SCRIPT_DIR/automated-chat-reconnection.cjs</string>
        <string>start</string>
    </array>
    <key>WorkingDirectory</key>
    <string>$PROJECT_DIR</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$PROJECT_DIR/logs/chat-reconnection.out</string>
    <key>StandardErrorPath</key>
    <string>$PROJECT_DIR/logs/chat-reconnection.err</string>
</dict>
</plist>
EOF
    
    launchctl load "$LAUNCH_AGENT_FILE"
    log "✅ macOS LaunchAgent installed and loaded"
}

install_linux_service() {
    log "🐧 Installing Linux systemd service..."
    
    SERVICE_FILE="$SCRIPT_DIR/cursor-chat-reconnection.service"
    
    cat > "$SERVICE_FILE" << EOF
[Unit]
Description=Cursor Chat Reconnection Service
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/node $SCRIPT_DIR/automated-chat-reconnection.cjs start
Restart=always
RestartSec=10
StandardOutput=append:$PROJECT_DIR/logs/chat-reconnection.out
StandardError=append:$PROJECT_DIR/logs/chat-reconnection.err

[Install]
WantedBy=multi-user.target
EOF
    
    log "✅ Linux systemd service file created: $SERVICE_FILE"
    log "Run the following commands to enable the service:"
    log "  sudo cp $SERVICE_FILE /etc/systemd/system/"
    log "  sudo systemctl enable cursor-chat-reconnection.service"
    log "  sudo systemctl start cursor-chat-reconnection.service"
}

# Create monitoring dashboard
create_dashboard() {
    log "📊 Creating monitoring dashboard..."
    
    DASHBOARD_FILE="$PROJECT_DIR/chat-reconnection-dashboard.html"
    
    cat > "$DASHBOARD_FILE" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🤖 Chat Reconnection System Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; }
        .container { max-width: 1400px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px; text-align: center; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .card { background: white; border-radius: 15px; padding: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .card h3 { color: #333; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
        .status { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; }
        .status-indicator { width: 12px; height: 12px; border-radius: 50%; background: #dc3545; animation: pulse 2s infinite; }
        .status-indicator.online { background: #28a745; }
        .computer-list { max-height: 300px; overflow-y: auto; }
        .computer-item { padding: 10px; border: 1px solid #eee; border-radius: 8px; margin-bottom: 10px; }
        .computer-item.online { border-left: 4px solid #28a745; }
        .computer-item.offline { border-left: 4px solid #dc3545; opacity: 0.7; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; }
        .stat { text-align: center; padding: 15px; background: #f8f9fa; border-radius: 10px; }
        .stat-value { font-size: 2rem; font-weight: 700; color: #667eea; }
        .stat-label { font-size: 0.8rem; color: #666; text-transform: uppercase; }
        .actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn { padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; }
        .btn-primary { background: #667eea; color: white; }
        .btn-secondary { background: #6c757d; color: white; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
        .log-viewer { background: #1e1e1e; color: #fff; padding: 20px; border-radius: 10px; font-family: 'Courier New', monospace; font-size: 0.8rem; max-height: 400px; overflow-y: auto; }
        .refresh-btn { position: fixed; top: 20px; right: 20px; z-index: 1000; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 Chat Reconnection System Dashboard</h1>
            <p>Real-time monitoring and control for all connected computers</p>
        </div>
        
        <button class="btn btn-primary refresh-btn" onclick="refreshAll()">🔄 Refresh</button>
        
        <div class="grid">
            <div class="card">
                <h3>📊 System Status</h3>
                <div class="status">
                    <div class="status-indicator" id="systemStatus"></div>
                    <span id="systemStatusText">Checking...</span>
                </div>
                <div class="stats">
                    <div class="stat">
                        <div class="stat-value" id="totalComputers">-</div>
                        <div class="stat-label">Total Computers</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value" id="onlineComputers">-</div>
                        <div class="stat-label">Online</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value" id="activeConnections">-</div>
                        <div class="stat-label">Connections</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value" id="uptime">-</div>
                        <div class="stat-label">Uptime</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h3>🖥️ Connected Computers</h3>
                <div class="computer-list" id="computerList">
                    <div>Loading computers...</div>
                </div>
            </div>
            
            <div class="card">
                <h3>⚡ Quick Actions</h3>
                <div class="actions">
                    <button class="btn btn-primary" onclick="triggerChat('build', 'Analyze build process')">🔨 Build</button>
                    <button class="btn btn-primary" onclick="triggerChat('test', 'Run tests')">🧪 Test</button>
                    <button class="btn btn-primary" onclick="triggerChat('deploy', 'Deploy system')">🚀 Deploy</button>
                    <button class="btn btn-primary" onclick="triggerChat('optimize', 'Optimize performance')">⚡ Optimize</button>
                    <button class="btn btn-secondary" onclick="openWebInterface()">🌐 Web UI</button>
                    <button class="btn btn-secondary" onclick="viewLogs()">📋 Logs</button>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3>📋 Recent Activity</h3>
            <div class="log-viewer" id="logViewer">
                Loading logs...
            </div>
        </div>
    </div>

    <script>
        const API_BASE = 'http://localhost:3009';
        let refreshInterval;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            refreshAll();
            refreshInterval = setInterval(refreshAll, 10000); // Refresh every 10 seconds
        });

        async function refreshAll() {
            await Promise.all([
                refreshSystemStatus(),
                refreshComputers(),
                refreshLogs()
            ]);
        }

        async function refreshSystemStatus() {
            try {
                const response = await fetch(`${API_BASE}/status`);
                const data = await response.json();
                
                updateSystemStatus(data);
            } catch (error) {
                updateSystemStatus({ isConnected: false });
            }
        }

        async function refreshComputers() {
            try {
                const response = await fetch(`${API_BASE}/computers`);
                const computers = await response.json();
                
                updateComputerList(computers);
            } catch (error) {
                updateComputerList([]);
            }
        }

        async function refreshLogs() {
            try {
                const response = await fetch(`${API_BASE}/logs`);
                const logs = await response.text();
                
                document.getElementById('logViewer').textContent = logs;
            } catch (error) {
                document.getElementById('logViewer').textContent = 'Failed to load logs';
            }
        }

        function updateSystemStatus(data) {
            const statusIndicator = document.getElementById('systemStatus');
            const statusText = document.getElementById('systemStatusText');
            
            if (data.isConnected) {
                statusIndicator.className = 'status-indicator online';
                statusText.textContent = 'System Online';
            } else {
                statusIndicator.className = 'status-indicator offline';
                statusText.textContent = 'System Offline';
            }
            
            document.getElementById('totalComputers').textContent = data.discoveredComputers || 0;
            document.getElementById('onlineComputers').textContent = data.discoveredComputers || 0;
            document.getElementById('activeConnections').textContent = data.activeConnections || 0;
            document.getElementById('uptime').textContent = formatUptime(data.uptime || 0);
        }

        function updateComputerList(computers) {
            const list = document.getElementById('computerList');
            
            if (computers.length === 0) {
                list.innerHTML = '<div>No computers discovered</div>';
                return;
            }
            
            list.innerHTML = computers.map(computer => `
                <div class="computer-item ${computer.isConnected ? 'online' : 'offline'}">
                    <div><strong>${computer.hostname}</strong></div>
                    <div>ID: ${computer.computerId}</div>
                    <div>Platform: ${computer.platform}</div>
                    <div>Status: ${computer.isConnected ? 'Online' : 'Offline'}</div>
                </div>
            `).join('');
        }

        function formatUptime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return `${hours}h ${minutes}m`;
        }

        async function triggerChat(category, message) {
            try {
                await fetch(`${API_BASE}/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message, category })
                });
                
                alert(`Chat triggered: ${category}`);
            } catch (error) {
                alert('Failed to trigger chat');
            }
        }

        function openWebInterface() {
            window.open('http://localhost:3009', '_blank');
        }

        function viewLogs() {
            window.open('logs/chat-reconnection.log', '_blank');
        }

        // Cleanup on page unload
        window.addEventListener('beforeunload', function() {
            if (refreshInterval) {
                clearInterval(refreshInterval);
            }
        });
    </script>
</body>
</html>
EOF
    
    log "✅ Monitoring dashboard created: $DASHBOARD_FILE"
    log "🌐 Open in browser: file://$DASHBOARD_FILE"
}

# Show deployment summary
show_summary() {
    log "📋 Deployment Summary"
    log "===================="
    log "✅ Prerequisites checked"
    log "✅ Dependencies installed"
    log "✅ System deployed to current computer"
    log "✅ Service installation configured"
    log "✅ Monitoring dashboard created"
    
    echo ""
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo ""
    echo -e "${CYAN}📊 Quick Access:${NC}"
    echo "  🌐 Web Interface: http://localhost:3009"
    echo "  📊 Dashboard: file://$PROJECT_DIR/chat-reconnection-dashboard.html"
    echo "  📋 Status API: http://localhost:3009/status"
    echo ""
    echo -e "${CYAN}🔧 Management Commands:${NC}"
    echo "  Start:   npm run chat:start"
    echo "  Stop:    npm run chat:stop"
    echo "  Status:  npm run chat:status"
    echo "  Logs:    ./scripts/start-chat-reconnection.sh logs"
    echo ""
    echo -e "${CYAN}📚 Documentation:${NC}"
    echo "  Setup Guide: AUTOMATED_CHAT_RECONNECTION_SETUP.md"
    echo "  Success Report: AUTOMATED_CHAT_RECONNECTION_SUCCESS_REPORT.md"
    echo ""
    echo -e "${YELLOW}💡 Next Steps:${NC}"
    echo "  1. Deploy to additional computers using the same script"
    echo "  2. Install as system service for automatic startup"
    echo "  3. Monitor system health through the dashboard"
    echo "  4. Configure custom chat categories as needed"
}

# Main deployment function
main() {
    local remote_hosts=()
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --remote)
                shift
                while [[ $# -gt 0 && ! $1 =~ ^-- ]]; do
                    remote_hosts+=("$1")
                    shift
                done
                ;;
            --service)
                INSTALL_SERVICE=true
                shift
                ;;
            --help)
                show_help
                exit 0
                ;;
            *)
                log_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    log "🚀 Starting deployment process..."
    
    check_prerequisites
    detect_os
    install_dependencies
    deploy_current
    
    if [ ${#remote_hosts[@]} -gt 0 ]; then
        deploy_remote "${remote_hosts[@]}"
    fi
    
    if [ "$INSTALL_SERVICE" = true ]; then
        install_service
    fi
    
    create_dashboard
    show_summary
}

# Show help
show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --remote HOST1 HOST2 ...  Deploy to remote computers"
    echo "  --service                 Install as system service"
    echo "  --help                    Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                        Deploy to current computer only"
    echo "  $0 --service              Deploy and install as service"
    echo "  $0 --remote user@host1 user@host2  Deploy to remote computers"
    echo "  $0 --remote user@host1 --service   Deploy to remote and install service"
    echo ""
    echo "Prerequisites:"
    echo "  - Node.js 18+ installed"
    echo "  - npm installed"
    echo "  - git installed"
    echo "  - SSH access to remote hosts (if using --remote)"
}

# Run main function with all arguments
main "$@" 