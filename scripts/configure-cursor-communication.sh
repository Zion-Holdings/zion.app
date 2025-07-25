
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

