
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

# Installation script for Persistent AI Communication System
# This script sets up automatic startup and monitoring

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
USER=$(whoami)
OS=$(uname -s)

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "🚀 Installing Persistent AI Communication System..."

# Make scripts executable
chmod +x "$SCRIPT_DIR/start-persistent-communication.sh"
chmod +x "$SCRIPT_DIR/persistent-ai-communication.cjs"

# Create logs directory
mkdir -p "$PROJECT_ROOT/logs"

# Install based on operating system
if [[ "$OS" == "Darwin" ]]; then
    log "🍎 Installing for macOS..."
    
    # Copy plist file to LaunchAgents
    PLIST_DEST="$HOME/Library/LaunchAgents/com.ai.communication.plist"
    cp "$SCRIPT_DIR/com.ai.communication.plist" "$PLIST_DEST"
    
    # Update paths in plist file
    sed -i '' "s|/Users/miami2|$HOME|g" "$PLIST_DEST"
    
    # Load the service
    launchctl load "$PLIST_DEST"
    
    log "✅ LaunchAgent installed and loaded"
    log "📝 Service will start automatically on login"
    
elif [[ "$OS" == "Linux" ]]; then
    log "🐧 Installing for Linux..."
    
    # Copy service file to systemd
    SERVICE_DEST="/etc/systemd/system/ai-communication@$USER.service"
    sudo cp "$SCRIPT_DIR/ai-communication.service" "$SERVICE_DEST"
    
    # Update paths in service file
    sudo sed -i "s|/Users/miami2|$HOME|g" "$SERVICE_DEST"
    sudo sed -i "s|%i|$USER|g" "$SERVICE_DEST"
    
    # Reload systemd and enable service
    sudo systemctl daemon-reload
    sudo systemctl enable "ai-communication@$USER"
    
    log "✅ Systemd service installed and enabled"
    log "📝 Service will start automatically on boot"
    
else
    log "⚠️ Unsupported operating system: $OS"
    log "📝 Please manually set up the startup script"
fi

# Create a simple status checker
cat > "$SCRIPT_DIR/check-status.sh" << 'EOF'
#!/bin/bash
curl -s http://localhost:3002/status | jq . 2>/dev/null || echo "Communication system not responding"
EOF

chmod +x "$SCRIPT_DIR/check-status.sh"

# Create a quick start script
cat > "$SCRIPT_DIR/quick-start.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")/.."
node scripts/persistent-ai-communication.cjs
EOF

chmod +x "$SCRIPT_DIR/quick-start.sh"

log "✅ Installation completed!"
log ""
log "📋 Available commands:"
log "  ./scripts/start-persistent-communication.sh start   - Start manually"
log "  ./scripts/start-persistent-communication.sh stop    - Stop manually"
log "  ./scripts/start-persistent-communication.sh status  - Check status"
log "  ./scripts/start-persistent-communication.sh logs    - View logs"
log "  ./scripts/check-status.sh                          - Quick status check"
log "  ./scripts/quick-start.sh                           - Quick start"
log ""
log "🌐 Local server will be available at: http://localhost:3002"
log "📝 Logs will be written to: $PROJECT_ROOT/logs/ai-communication.log"
log ""
log "🔄 The system will now maintain continuous communication with the AI assistant"
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


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

